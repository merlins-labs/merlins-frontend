import { useState, useCallback } from "react";
import {
  ChainGetter,
  QueriesStore,
  CosmosQueries,
  CosmwasmQueries,
} from "@keplr-wallet/stores";
import {
  MerlinsQueries,
  ObservableRemoveLiquidityConfig,
} from "@osmosis-labs/stores";
import { useStore } from "../../stores";

/** Maintains a single instance of `ObservableRemoveLiquidityConfig` for React view lifecycle.
 *  Updates `merlinsChainId`, `poolId`, `bech32Address`, and `queryMerlins.queryGammPoolShare` on render.
 *  `percentage` default: `"50"`.
 */
export function useRemoveLiquidityConfig(
  chainGetter: ChainGetter,
  merlinsChainId: string,
  poolId: string,
  queriesStore: QueriesStore<[CosmosQueries, CosmwasmQueries, MerlinsQueries]>,
  initialPercent = "50"
): {
  config: ObservableRemoveLiquidityConfig;
  removeLiquidity: () => Promise<void>;
} {
  const { accountStore } = useStore();

  const account = accountStore.getAccount(merlinsChainId);
  const { bech32Address } = account;

  const queryMerlins = queriesStore.get(merlinsChainId).merlins!;
  const [config] = useState(() => {
    const c = new ObservableRemoveLiquidityConfig(
      chainGetter,
      merlinsChainId,
      poolId,
      bech32Address,
      queriesStore,
      queryMerlins.queryGammPoolShare,
      queryMerlins.queryGammPools,
      initialPercent
    );
    c.setPercentage(initialPercent);
    return c;
  });
  config.setChain(merlinsChainId);
  config.setSender(bech32Address);
  config.setPoolId(poolId);
  config.setQueryPoolShare(queryMerlins.queryGammPoolShare);

  const removeLiquidity = useCallback(() => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await account.merlins.sendExitPoolMsg(
          config.poolId,
          config.poolShareWithPercentage.toDec().toString(),
          undefined,
          undefined,
          resolve
        );
      } catch (e) {
        console.error(e);
        reject();
      }
    });
  }, []);

  return { config, removeLiquidity };
}
