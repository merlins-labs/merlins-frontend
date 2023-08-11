import { useEffect, useState } from "react";
import { ObservableQueryPoolDetails } from "@osmosis-labs/stores";
import { useStore } from "../../stores";

export function usePoolDetailConfig(poolId?: string) {
  const { chainStore, accountStore, queriesStore, priceStore } = useStore();

  const { chainId } = chainStore.merlins;
  const queryMerlins = queriesStore.get(chainId).merlins!;
  const account = accountStore.getAccount(chainId);
  const { bech32Address } = account;
  const fiat = priceStore.getFiatCurrency(priceStore.defaultVsCurrency)!;

  const pool = poolId ? queryMerlins.queryGammPools.getPool(poolId) : undefined;

  const [poolDetailConfig, setPoolDetailConfig] =
    useState<ObservableQueryPoolDetails | null>(null);
  useEffect(() => {
    if (!poolDetailConfig && pool && fiat) {
      setPoolDetailConfig(
        new ObservableQueryPoolDetails(fiat, pool, queryMerlins, priceStore)
      );
    }
  }, [pool, poolDetailConfig, fiat, queryMerlins, priceStore]);

  useEffect(
    () => poolDetailConfig?.setBech32Address(bech32Address),
    [poolDetailConfig, bech32Address]
  );

  return { poolDetailConfig: poolDetailConfig ?? undefined, pool };
}
