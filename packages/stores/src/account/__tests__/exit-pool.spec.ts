/* eslint-disable */
import {
  chainId,
  RootStore,
  waitAccountLoaded,
} from "../../__tests__/test-env";

jest.setTimeout(60000);

describe("Exit Pool Tx", () => {
  let { accountStore, queriesStore } = new RootStore();
  let poolId: string | undefined; // relies on `jest --runInBand` to work properly

  beforeEach(async () => {
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

  test("should fail with 0 share in amount", async () => {
    const account = accountStore.getAccount(chainId);

    await expect(
      account.merlins.sendExitPoolMsg(poolId!, "0")
    ).rejects.not.toBeNull();
  });

  test("with 50 share in amount without slippage", async () => {
    const account = accountStore.getAccount(chainId);

    // Share는 최초로 100개가 발행된다 그러므로 여기서 50개를 exit하는 건 성공한다.
    await new Promise<any>((resolve, rejects) => {
      account.merlins
        .sendExitPoolMsg(poolId!, "50", "0", "", (tx) => {
          resolve(tx);
        })
        .catch((e) => rejects(e));
    });
  });

  test("with 50 share in amount with slippage", async () => {
    const account = accountStore.getAccount(chainId);

    // Share는 최초로 100개가 발행된다 그러므로 여기서 50개를 exit하는 건 성공한다.
    await new Promise<any>((resolve, rejects) => {
      account.merlins
        .sendExitPoolMsg(poolId!, "50", "1", "", (tx) => {
          resolve(tx);
        })
        .catch((e) => rejects(e));
    });
  });

  test("should fail with more max share in amount", async () => {
    const account = accountStore.getAccount(chainId);

    // Share는 최초로 100개가 발행된다 그러므로 여기서 100.01개를 exit하는 건 실패한다.
    await expect(
      account.merlins.sendExitPoolMsg(poolId!, "100.01", "1")
    ).rejects.not.toBeNull();
  });
});
