/* eslint-disable */
import {
  chainId,
  deepContained,
  getEventFromTx,
  RootStore,
  waitAccountLoaded,
} from "../../__tests__/test-env";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

describe("Unbond Token Tx", () => {
  const { accountStore, queriesStore } = new RootStore(
    // fresh account
    "index light average senior silent limit usual local involve delay update rack cause inmate wall render magnet common feature laundry exact casual resource hundred"
  );
  const account = accountStore.getAccount(chainId);
  account.cosmos.broadcastMode = "block";

  let userLockIds: string[] | undefined;

  beforeEach(async () => {
    await waitAccountLoaded(account);
    // LocalMerlins has no configured durations
    const queriesMerlins = queriesStore.get(chainId).merlins!;
    const queriesAccountLocked = queriesMerlins.queryAccountLocked.get(
      account.bech32Address
    );

    const durationSeconds = 1;
    const coin = {
      currency: {
        coinDenom: "FURY",
        coinMinimalDenom: "ufury",
        coinDecimals: 6,
      },
      amount: "1",
    };

    await new Promise<any>(async (resolve, reject) => {
      await account.merlins
        .sendLockTokensMsg(durationSeconds, [coin], undefined, (tx) => {
          resolve(tx);
        })
        .catch(reject);
    });

    await queriesAccountLocked.waitFreshResponse();

    userLockIds = queriesAccountLocked.getLockedCoinWithDuration(
      coin.currency,
      dayjs.duration(durationSeconds * 1000)
    ).lockIds;
  });

  it("unlocks tokens", async () => {
    const tx = await new Promise<any>(async (resolve, reject) => {
      await account.merlins
        .sendBeginUnlockingMsg(userLockIds!, undefined, (tx) => {
          resolve(tx);
        })
        .catch(reject);
    });

    deepContained(
      {
        type: "begin_unlock",
        attributes: [{ key: "period_lock_id", value: userLockIds![0] }],
      },
      getEventFromTx(tx, "begin_unlock")
    );
  });
});
