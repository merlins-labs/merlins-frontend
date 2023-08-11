import { useState, useCallback } from "react";
import {
  ChainGetter,
  QueriesStore,
  CosmosQueries,
  CosmwasmQueries,
} from "@keplr-wallet/stores";
import {
  MerlinsQueries,
  ObservableAddLiquidityConfig,
} from "@osmosis-labs/stores";
import { useStore } from "../../stores";

/** Maintains a single instance of `ObservableAddLiquidityConfig` for React view lifecycle.
 *  Updates `merlinsChainId`, `poolId`, `bech32Address`, and `queryMerlins.queryGammPoolShare` on render.
 */
export function useAddLiquidityConfig(
  chainGetter: ChainGetter,
  merlinsChainId: string,
  poolId: string,
  queriesStore: QueriesStore<[CosmosQueries, CosmwasmQueries, MerlinsQueries]>
): {
  config: ObservableAddLiquidityConfig;
  addLiquidity: () => Promise<void>;
} {
  const { accountStore } = useStore();

  const account = accountStore.getAccount(merlinsChainId);
  const { bech32Address } = account;

  const queryMerlins = queriesStore.get(merlinsChainId).merlins!;
  const [config] = useState(
    () =>
      new ObservableAddLiquidityConfig(
        chainGetter,
        merlinsChainId,
        poolId,
        bech32Address,
        queriesStore,
        queryMerlins.queryGammPoolShare,
        queryMerlins.queryGammPools,
        queriesStore.get(merlinsChainId).queryBalances
      )
  );
  config.setChain(merlinsChainId);
  config.setSender(bech32Address);
  config.setPoolId(poolId);
  config.setQueryPoolShare(queryMerlins.queryGammPoolShare);

  const addLiquidity = useCallback(async () => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        if (config.isSingleAmountIn && config.singleAmountInConfig) {
          await account.merlins.sendJoinSwapExternAmountInMsg(
            config.poolId,
            {
              currency: config.singleAmountInConfig.sendCurrency,
              amount: config.singleAmountInConfig.amount,
            },
            undefined,
            undefined,
            resolve
          );
        } else if (config.shareOutAmount) {
          await account.merlins.sendJoinPoolMsg(
            config.poolId,
            config.shareOutAmount.toDec().toString(),
            undefined,
            undefined,
            resolve
          );
        }
      } catch (e: any) {
        console.error(e);
        reject(e.message);
      }
    });
  }, [
    account.merlins,
    config.isSingleAmountIn,
    config.singleAmountInConfig,
    config.sender,
    config.poolId,
    config.singleAmountInConfig?.sendCurrency,
    config.singleAmountInConfig?.amount,
    config.shareOutAmount,
  ]);

  return { config, addLiquidity };
}
