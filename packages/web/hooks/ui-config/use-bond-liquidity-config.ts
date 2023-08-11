import { useEffect, useState } from "react";
import { useStore } from "../../stores";
import { ObservableBondLiquidityConfig } from "@osmosis-labs/stores";
import { usePoolDetailConfig } from "./use-pool-detail-config";
import { useSuperfluidPoolConfig } from "./use-superfluid-pool-config";

export function useBondLiquidityConfig(bech32Address: string, poolId?: string) {
  const { chainStore, queriesStore, priceStore, queriesExternalStore } =
    useStore();

  const { poolDetailConfig } = usePoolDetailConfig(poolId);
  const { superfluidPoolConfig } = useSuperfluidPoolConfig(poolDetailConfig);
  const queryMerlins = queriesStore.get(chainStore.merlins.chainId).merlins!;

  const [bondLiquidityConfig, setBondLiquidityConfig] =
    useState<ObservableBondLiquidityConfig | null>(null);

  useEffect(() => {
    if (poolDetailConfig && superfluidPoolConfig && !bondLiquidityConfig) {
      setBondLiquidityConfig(
        new ObservableBondLiquidityConfig(
          poolDetailConfig,
          superfluidPoolConfig,
          priceStore,
          queriesExternalStore.queryGammPoolFeeMetrics,
          queryMerlins
        )
      );
    }
  }, [poolDetailConfig, superfluidPoolConfig]);

  useEffect(() => {
    bondLiquidityConfig?.setBech32Address(bech32Address);
  }, [bondLiquidityConfig, bech32Address]);

  return bondLiquidityConfig ?? undefined;
}
