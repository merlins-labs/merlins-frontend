import { ChainGetter } from "@keplr-wallet/stores";
import { ObservableQuerySuperfluidParams } from "../superfluid-pools/params";
import { ObservableQuerySuperfluidAssetMultiplier } from "../superfluid-pools/asset-multiplier";
import { CoinPretty, Dec, DecUtils } from "@keplr-wallet/unit";
import { AppCurrency } from "@keplr-wallet/types";
import { computedFn } from "mobx-utils";
import { ObservableQueryPools } from "../pools";

export class ObservableQuerySuperfluidFuryEquivalent {
  constructor(
    protected readonly chainId: string,
    protected readonly chainGetter: ChainGetter,
    protected readonly _querySuperfluidParams: ObservableQuerySuperfluidParams,
    protected readonly _querySuperfluidAssetMultiplier: ObservableQuerySuperfluidAssetMultiplier,
    protected readonly _queryPools: ObservableQueryPools
  ) {}

  readonly calculateFuryEquivalent = computedFn(
    (coinPretty: CoinPretty): CoinPretty => {
      const multiplier = this.calculateFuryEquivalentMultiplier(
        coinPretty.currency
      );

      const stakeCurrency = this.chainGetter.getChain(
        this.chainId
      ).stakeCurrency;

      return new CoinPretty(
        stakeCurrency,
        coinPretty
          .mul(multiplier)
          .mul(DecUtils.getTenExponentN(stakeCurrency.coinDecimals))
      );
    }
  );

  readonly calculateFuryEquivalentMultiplier = computedFn(
    (currency: AppCurrency): Dec => {
      const minimumRiskFactor = this._querySuperfluidParams.minimumRiskFactor;
      const assetMultiplier = this._querySuperfluidAssetMultiplier.getDenom(
        currency.coinMinimalDenom
      ).multiplier;

      const furyCurrency = this.chainGetter.getChain(
        this.chainId
      ).stakeCurrency;

      const multipication = DecUtils.getTenExponentN(
        currency.coinDecimals - furyCurrency.coinDecimals
      );

      return assetMultiplier
        .mul(new Dec(1).sub(minimumRiskFactor))
        .mul(multipication);
    }
  );

  /**
   * Estimate the multiplication value to compute the superfluid's APR. We assume that arbitrage trading is going well, not the exact value on the current chain, and estimate only by looking at the pool weight.
   */
  readonly estimatePoolAPRFuryEquivalentMultiplier = computedFn(
    (poolId: string): Dec => {
      const pool = this._queryPools.getPool(poolId);
      if (pool && pool.weightedPoolInfo) {
        const furyCurrency = this.chainGetter.getChain(
          this.chainId
        ).stakeCurrency;

        const poolAsset = pool.weightedPoolInfo.assets.find(
          ({ denom }) => denom === furyCurrency.coinMinimalDenom
        );
        if (
          poolAsset &&
          pool.weightedPoolInfo.totalWeight.toDec().gt(new Dec(0))
        ) {
          const ratio = poolAsset.weight.quo(pool.weightedPoolInfo.totalWeight);

          const minimumRiskFactor =
            this._querySuperfluidParams.minimumRiskFactor;

          return ratio.toDec().mul(new Dec(1).sub(minimumRiskFactor));
        }
      }
      return new Dec(0);
    }
  );
}