import { computed, makeObservable, observable } from "mobx";
import { computedFn } from "mobx-utils";
import { AppCurrency } from "@keplr-wallet/types";
import {
  ChainStore as BaseChainStore,
  ChainInfoInner,
} from "@keplr-wallet/stores";
import { ChainInfo } from "@keplr-wallet/types";

export interface ChainInfoWithExplorer extends ChainInfo {
  /** Formed as "https://explorer.com/{txHash}" */
  explorerUrlToTx: string;
  /** Add optional stable coin peg info to currencies. */
  currencies: Array<
    AppCurrency & {
      pegMechanism?: "collateralized" | "algorithmic" | "hybrid";
    }
  >;
}

export class ChainStore extends BaseChainStore<ChainInfoWithExplorer> {
  @observable
  protected readonly merlinsChainId: string;

  constructor(
    embedChainInfos: ChainInfoWithExplorer[],
    merlinsChainId: string
  ) {
    super(embedChainInfos);

    this.merlinsChainId = merlinsChainId;

    makeObservable(this);
  }

  @computed
  get merlins(): ChainInfoWithExplorer {
    if (this.hasChain(this.merlinsChainId)) {
      return this.getChain(this.merlinsChainId).raw;
    }

    throw new Error("merlins chain not set");
  }

  @computed
  get merlinsObservable(): ChainInfo {
    // TODO: Is not designed to require this getter.
    //        However, due to bug in @keplr-wallet/store library,
    //        in the case of observable chain info, the .raw property needs to be handled separately.
    //        Created a temporary getter as a temporary fix.
    //        This method should be deleted once @keplr-wallet/stores has be fixed.
    if (this.hasChain(this.merlinsChainId)) {
      return this.getChain(this.merlinsChainId);
    }

    throw new Error("merlins chain not set");
  }

  /** Fetch raw ChainInfo from coin denom. Trims channel info. */
  getChainFromCurrency: (
    coinDenom: string
  ) => ChainInfoInner<ChainInfoWithExplorer> | undefined = computedFn(
    (coinDenom) => {
      const justDenom = coinDenom.split(" ")[0]; // remove channel info
      for (const chain of this.chainInfos) {
        if (chain.raw.stakeCurrency.coinDenom === justDenom) {
          return chain;
        }
        const chainCurrency = chain.raw.currencies.find(
          (c) => c.coinDenom === justDenom
        );
        if (chainCurrency) {
          return chain;
        }
      }
    }
  );
}
