import { useEffect, useState } from "react";
import {
  ChainGetter,
  QueriesStore,
  CosmosQueries,
  CosmwasmQueries,
} from "@keplr-wallet/stores";
import { Pool } from "@osmosis-labs/pools";
import {
  MerlinsQueries,
  ObservableTradeTokenInConfig,
} from "@osmosis-labs/stores";

/** Maintains a single instance of `ObservableTradeTokenInConfig` for React view lifecycle.
 *  Updates `merlinsChainId`, `bech32Address`, `pools` on render.
 *  `percentage` default: `"50"`.
 * `requeryIntervalMs` specifies how often to refetch pool data based on current tokens.
 */
export function useTradeTokenInConfig(
  chainGetter: ChainGetter,
  merlinsChainId: string,
  bech32Address: string,
  queriesStore: QueriesStore<[CosmosQueries, CosmwasmQueries, MerlinsQueries]>,
  pools: Pool[],
  requeryIntervalMs = 8000
) {
  const queriesMerlins = queriesStore.get(merlinsChainId).merlins!;

  const [config] = useState(
    () =>
      new ObservableTradeTokenInConfig(
        chainGetter,
        queriesStore,
        merlinsChainId,
        bech32Address,
        undefined,
        pools
      )
  );

  // refresh relevant pool data every `requeryIntervalMs` period
  useEffect(() => {
    const interval = setInterval(() => {
      const poolIds = config.optimizedRoutePaths
        .map((route) => route.pools.map((pool) => pool.id))
        .flat();

      poolIds.forEach((poolId) => {
        queriesStore
          .get(merlinsChainId)
          .merlins!.queryGammPools.getPool(poolId)
          ?.fetch();
      });
    }, requeryIntervalMs);
    return () => clearInterval(interval);
  }, [
    config.optimizedRoutePaths,
    merlinsChainId,
    queriesStore,
    requeryIntervalMs,
  ]);

  useEffect(() => {
    config.setIncentivizedPoolIds(
      queriesMerlins.queryIncentivizedPools.incentivizedPools
    );
  }, [queriesMerlins.queryIncentivizedPools.response]);

  config.setChain(merlinsChainId);
  config.setSender(bech32Address);
  config.setPools(pools);
  return config;
}
