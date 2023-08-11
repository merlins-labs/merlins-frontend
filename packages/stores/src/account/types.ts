import { MsgOpt } from "@keplr-wallet/stores";

export interface MerlinsMsgOpts {
  readonly createBalancerPool: MsgOpt;
  readonly createStableswapPool: MsgOpt;
  readonly joinPool: MsgOpt & {
    shareCoinDecimals: number;
  };
  readonly joinSwapExternAmountIn: MsgOpt & {
    shareCoinDecimals: number;
  };
  readonly exitPool: MsgOpt & {
    shareCoinDecimals: number;
  };
  readonly swapExactAmountIn: MsgOpt;
  readonly swapExactAmountOut: MsgOpt;
  readonly lockTokens: MsgOpt;
  readonly superfluidDelegate: MsgOpt;
  readonly lockAndSuperfluidDelegate: MsgOpt;
  readonly beginUnlocking: MsgOpt;
  readonly superfluidUndelegate: MsgOpt;
  readonly superfluidUnbondLock: MsgOpt;
  readonly unlockPeriodLock: MsgOpt;
  readonly unPoolWhitelistedPool: MsgOpt;
}

export const defaultMsgOpts: MerlinsMsgOpts = {
  createBalancerPool: {
    type: "merlins/gamm/create-balancer-pool",
    gas: 350000,
  },
  createStableswapPool: {
    type: "merlins/gamm/create-stableswap-pool",
    gas: 350000,
  },
  joinPool: {
    type: "merlins/gamm/join-pool",
    gas: 240000,
    shareCoinDecimals: 18,
  },
  joinSwapExternAmountIn: {
    type: "merlins/gamm/join-swap-extern-amount-in",
    gas: 140000,
    shareCoinDecimals: 18,
  },
  exitPool: {
    type: "merlins/gamm/exit-pool",
    gas: 280000,
    shareCoinDecimals: 18,
  },
  swapExactAmountIn: {
    type: "merlins/gamm/swap-exact-amount-in",
    gas: 250000,
  },
  swapExactAmountOut: {
    type: "merlins/gamm/swap-exact-amount-out",
    gas: 250000,
  },
  lockTokens: {
    type: "merlins/lockup/lock-tokens",
    gas: 450000,
  },
  superfluidDelegate: {
    type: "merlins/superfluid-delegate",
    gas: 500000,
  },
  lockAndSuperfluidDelegate: {
    type: "merlins/lock-and-superfluid-delegate",
    gas: 500000,
  },
  beginUnlocking: {
    type: "merlins/lockup/begin-unlock-period-lock",
    // Gas per msg
    gas: 140000,
  },
  superfluidUndelegate: {
    type: "merlins/superfluid-undelegate",
    gas: 300000,
  },
  superfluidUnbondLock: {
    type: "merlins/superfluid-unbond-lock",
    // Gas per msg
    gas: 300000,
  },
  unlockPeriodLock: {
    type: "merlins/lockup/unlock-period-lock",
    // Gas per msg
    gas: 140000,
  },
  unPoolWhitelistedPool: {
    type: "merlins/unpool-whitelisted-pool",
    gas: 3000000,
  },
};
