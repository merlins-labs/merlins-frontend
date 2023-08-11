/* eslint-disable */
import { Dec, DecUtils, CoinPretty } from "@keplr-wallet/unit";
import {
  chainId,
  deepContained,
  getEventFromTx,
  RootStore,
  waitAccountLoaded,
} from "../../__tests__/test-env";
import { estimateJoinSwap } from "@osmosis-labs/math";

jest.setTimeout(100 * 1000);

describe("Join Pool Tx", () => {
  let { accountStore, queriesStore } = new RootStore();
  let poolId: string | undefined; // relies on `jest --runInBand` to work properly

  beforeEach(async () => {
    // Init new localnet per test
    const account = accountStore.getAccount(chainId);
    account.cosmos.broadcastMode = "block";

    await waitAccountLoaded(account);

    // And prepare the pool
    await new Promise<any>((resolve) => {
      account.merlins.sendCreateBalancerPoolMsg(
        "0",
        [
          {
            weight: "200",
            token: {
              currency: {
                coinDenom: "FURY",
                coinMinimalDenom: "ufury",
                coinDecimals: 6,
              },
              amount: "100",
            },
          },
          {
            weight: "300",
            token: {
              currency: {
                coinDenom: "ION",
                coinMinimalDenom: "uion",
                coinDecimals: 6,
              },
              amount: "100",
            },
          },
        ],
        "",
        (tx) => {
          resolve(tx);
        }
      );
    });

    // refresh stores
    await queriesStore
      .get(chainId)
      .merlins!.queryGammNumPools.waitFreshResponse();
    await queriesStore.get(chainId).merlins!.queryGammPools.waitFreshResponse();

    // set poolId
    const numPools =
      queriesStore.get(chainId).merlins!.queryGammNumPools.numPools;
    poolId = numPools.toString();
  });

  test("with no max slippage", async () => {
    const account = accountStore.getAccount(chainId);

    const queriesMerlins = queriesStore.get(chainId).merlins!;

    const shareOutAmount = "1";
    const maxSlippage = "0";

    const queryPool = queriesMerlins.queryGammPools.getPool(poolId!)!;
    await queryPool.waitFreshResponse();
    const estimated = estimateJoinSwap(
      queryPool.pool,
      queryPool.pool.poolAssets,
      (coin) =>
        new CoinPretty(
          queryPool.poolAssets.find(
            (a) => a.amount.toCoin().denom === coin.denom
          )!.amount.currency,
          coin.amount
        ),
      shareOutAmount,
      18
    );

    const tx = await new Promise<any>((resolve, rejects) => {
      account.merlins
        .sendJoinPoolMsg(poolId!, shareOutAmount, maxSlippage, "", (tx) => {
          resolve(tx);
        })
        .catch((e) => rejects(e));
    });

    deepContained(
      {
        type: "message",
        attributes: [
          { key: "action", value: "/merlins.gamm.v1beta1.MsgJoinPool" },
          { key: "module", value: "gamm" },
          {
            key: "sender",
            value: account.bech32Address,
          },
        ],
      },
      getEventFromTx(tx, "message")
    );

    deepContained(
      {
        type: "transfer",
        attributes: [
          {
            key: "amount",
            value: estimated.tokenIns
              .map((tokenIn) => {
                const amount = tokenIn
                  .toDec()
                  .mul(
                    DecUtils.getTenExponentNInPrecisionRange(
                      tokenIn.currency.coinDecimals
                    )
                  )
                  .truncate();

                return amount.toString() + tokenIn.currency.coinMinimalDenom;
              })
              .join(","),
          },
        ].concat([
          {
            key: "amount",
            value: `${new Dec(shareOutAmount)
              .mul(DecUtils.getTenExponentNInPrecisionRange(18))
              .truncate()
              .toString()}gamm/pool/${poolId!}`,
          },
        ]),
      },
      getEventFromTx(tx, "transfer")
    );
  });

  test("with slippage", async () => {
    const account = accountStore.getAccount(chainId);

    const shareOutAmount = "1";
    const maxSlippage = "0.1";

    const queryPool = queriesStore
      .get(chainId)
      .merlins!.queryGammPools.getPool(poolId!)!;
    await queryPool.waitFreshResponse();
    const estimated = estimateJoinSwap(
      queryPool.pool,
      queryPool.pool.poolAssets,
      (coin) =>
        new CoinPretty(
          // eslint-disable-next-line
          queryPool.poolAssets.find(
            (a) => a.amount.toCoin().denom === coin.denom
          )!.amount.currency,
          coin.amount
        ),
      shareOutAmount,
      18
    );

    const tx = await new Promise<any>((resolve, rejects) => {
      account.merlins
        .sendJoinPoolMsg(poolId!, shareOutAmount, maxSlippage, "", (tx) => {
          resolve(tx);
        })
        .catch((e) => rejects(e));
    });

    deepContained(
      {
        type: "message",
        attributes: [
          { key: "action", value: "/merlins.gamm.v1beta1.MsgJoinPool" },
          { key: "module", value: "gamm" },
          {
            key: "sender",
            value: account.bech32Address,
          },
        ],
      },
      getEventFromTx(tx, "message")
    );

    deepContained(
      {
        type: "transfer",
        attributes: [
          {
            key: "amount",
            value: estimated.tokenIns
              .map((tokenIn) => {
                const amount = tokenIn
                  .toDec()
                  .mul(
                    DecUtils.getTenExponentNInPrecisionRange(
                      tokenIn.currency.coinDecimals
                    )
                  )
                  .truncate();

                return amount.toString() + tokenIn.currency.coinMinimalDenom;
              })
              .join(","),
          },
        ].concat([
          {
            key: "amount",
            value: `${new Dec(shareOutAmount)
              .mul(DecUtils.getTenExponentNInPrecisionRange(18))
              .truncate()
              .toString()}gamm/pool/${poolId!}`,
          },
        ]),
      },
      getEventFromTx(tx, "transfer")
    );
  });
});
