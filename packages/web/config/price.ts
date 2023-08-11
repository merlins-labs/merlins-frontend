import { DenomHelper } from "@keplr-wallet/common";
import { IntermediateRoute } from "@osmosis-labs/stores";

/** Used to map pool IDs to spot price info from CoinGecko or local Merlins pools' spot prices. */
export const PoolPriceRoutes: IntermediateRoute[] = [
  {
    alternativeCoinId: "pool:ufury",
    poolId: "678",
    spotPriceSourceDenom: "ufury",
    spotPriceDestDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-208" }],
      "uusdc"
    ),
    destCoinId: "usd-coin",
  },
  {
    alternativeCoinId: "pool:uion",
    poolId: "2",
    spotPriceSourceDenom: "uion",
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uatom",
    poolId: "1",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-0" }],
      "uatom"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uscrt",
    poolId: "584",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-88" }],
      "uscrt"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uakt",
    poolId: "3",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-1" }],
      "uakt"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uregen",
    poolId: "42",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-8" }],
      "uregen"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:udvpn",
    poolId: "5",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-2" }],
      "udvpn"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uxprt",
    poolId: "15",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-4" }],
      "uxprt"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uiris",
    poolId: "7",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-6" }],
      "uiris"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:basecro",
    poolId: "9",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-5" }],
      "basecro"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uiov",
    poolId: "197",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-15" }],
      "uiov"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:eeur",
    poolId: "481",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-37" }],
      "eeur"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ungm",
    poolId: "463",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-37" }],
      "ungm"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ujuno",
    poolId: "497",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-42" }],
      "ujuno"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:nanolike",
    poolId: "553",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-53" }],
      "nanolike"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ubcna",
    poolId: "571",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-51" }],
      "ubcna"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uixo",
    poolId: "557",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-38" }],
      "uixo"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ubtsg",
    poolId: "573",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-73" }],
      "ubtsg"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uxki",
    poolId: "577",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-77" }],
      "uxki"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:lvn",
    poolId: "774",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-77" }],
      "cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:umed",
    poolId: "586",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-82" }],
      "umed"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:boot",
    poolId: "597",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-95" }],
      "boot"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ucmdx",
    poolId: "601",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-87" }],
      "ucmdx"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ucmst",
    poolId: "857",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-87" }],
      "ucmst"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ncheq",
    poolId: "602",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-108" }],
      "ncheq"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ustars",
    poolId: "604",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-75" }],
      "ustars"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uhuahua",
    poolId: "605",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-113" }],
      "uhuahua"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ulum",
    poolId: "608",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-115" }],
      "ulum"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uvdl",
    poolId: "613",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-124" }],
      "uvdl"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:udsm",
    poolId: "619",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-135" }],
      "udsm"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:udig",
    poolId: "621",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-128" }],
      "udig"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ugraviton",
    poolId: "625",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-144" }],
      "ugraviton"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:usomm",
    poolId: "627",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-165" }],
      "usomm"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uband",
    poolId: "626",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-148" }],
      "uband"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:udarc",
    poolId: "637",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-171" }],
      "udarc"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:neta",
    poolId: "631",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:marble",
    poolId: "649",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uumee",
    poolId: "641",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-184" }],
      "uumee"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:udec",
    poolId: "644",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-181" }],
      "udec"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:swth",
    poolId: "651",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-188" }],
      "swth"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:inj",
    poolId: "725",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-122" }],
      "inj"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:pstake",
    poolId: "648",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [
        { portId: "transfer", channelId: "channel-4" },
        { portId: "transfer", channelId: "channel-38" },
      ],
      "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ucrbrus",
    poolId: "662",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-212" }],
      "ucrbrus"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:afet",
    poolId: "681",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-229" }],
      "afet"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uustc",
    poolId: "560",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-72" }],
      "uusd"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ulunc",
    poolId: "800",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-72" }],
      "uluna"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:umntl",
    poolId: "690",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-232" }],
      "umntl"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:umeme",
    poolId: "701",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-238" }],
      "umeme"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:utick",
    poolId: "547",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-39" }],
      "utick"
    ),
    spotPriceDestDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-0" }],
      "uatom"
    ),
    destCoinId: "pool:uatom",
  },
  {
    alternativeCoinId: "pool:hope",
    poolId: "653",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:rac",
    poolId: "669",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:block",
    poolId: "691",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:nhash",
    poolId: "693",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-222" }],
      "nhash"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uglx",
    poolId: "697",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-236" }],
      "uglx"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:aevmos",
    poolId: "722",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-204" }],
      "aevmos"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uluna",
    poolId: "726",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-251" }],
      "uluna"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ukava",
    poolId: "730",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-143" }],
      "ukava"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:el1",
    poolId: "732",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-253" }],
      "el1"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ukuji",
    poolId: "744",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-259" }],
      "ukuji"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ulumen",
    poolId: "788",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-286" }],
      "ulumen"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:acudos",
    poolId: "796",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-298" }],
      "acudos"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:dhk",
    poolId: "695",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:raw",
    poolId: "700",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:asvt",
    poolId: "716",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w"
    ),
    spotPriceDestDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-47" }],
      "rowan"
    ),
    destCoinId: "pool:rowan",
  },
  {
    alternativeCoinId: "pool:joe",
    poolId: "718",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:glto",
    poolId: "778",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:gkey",
    poolId: "790",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:odin",
    poolId: "777",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-258" }],
      "loki"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:utgd",
    poolId: "769",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-263" }],
      "utgd"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:aechelon",
    poolId: "848",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-403" }],
      "aechelon"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ucre",
    poolId: "786",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-297" }],
      "ucre"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:geo",
    poolId: "787",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-258" }],
      "mGeo"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:stuatom",
    poolId: "803",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-326" }],
      "stuatom"
    ),
    spotPriceDestDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-0" }],
      "uatom"
    ),
    destCoinId: "pool:uatom",
  },
  {
    alternativeCoinId: "pool:o9w",
    poolId: "805",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-258" }],
      "mO9W"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ustrd",
    poolId: "806",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-326" }],
      "ustrd"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:stustars",
    poolId: "810",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-326" }],
      "stustars"
    ),
    spotPriceDestDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-75" }],
      "ustars"
    ),
    destCoinId: "pool:ustars",
  },
  {
    alternativeCoinId: "pool:sejuno",
    poolId: "793",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:seasy",
    poolId: "808",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-169" }],
      "cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:arebus",
    poolId: "813",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-355" }],
      "arebus"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uaxl",
    poolId: "812",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-208" }],
      "uaxl"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:utori",
    poolId: "816",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-362" }],
      "utori"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:stujuno",
    poolId: "817",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-326" }],
      "stujuno"
    ),
    spotPriceDestDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-42" }],
      "ujuno"
    ),
    destCoinId: "pool:ujuno",
  },
  {
    alternativeCoinId: "pool:stufury",
    poolId: "833",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-326" }],
      "stufury"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:rowan",
    poolId: "629",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-47" }],
      "rowan"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:lambda",
    poolId: "826",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-378" }],
      "ulamb"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:nund",
    poolId: "830",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-382" }],
      "nund"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:jkl",
    poolId: "832",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-412" }],
      "ujkl"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ubld",
    poolId: "795",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-320" }],
      "ubld"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uist",
    poolId: "837",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-320" }],
      "uist"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uusdc.grv",
    poolId: "633",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-144" }],
      "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:uusdt.grv",
    poolId: "818",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-144" }],
      "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:dai-wei",
    poolId: "674",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-208" }],
      "dai-wei"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:weth-wei",
    poolId: "704",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-208" }],
      "weth-wei"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:weth-wei.grv",
    poolId: "634",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-144" }],
      "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:wbtc-satoshi",
    poolId: "712",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-208" }],
      "wbtc-satoshi"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:link-wei",
    poolId: "731",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-208" }],
      "link-wei"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:mkr-wei",
    poolId: "733",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-208" }],
      "mkr-wei"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:ubze",
    poolId: "856",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-340" }],
      "ubze"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
  {
    alternativeCoinId: "pool:aimv",
    poolId: "866",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-517" }],
      "aimv"
    ),
    spotPriceDestDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-208" }],
      "uusdc"
    ),
    destCoinId: "usd-coin",
  },
  {
    alternativeCoinId: "pool:umedas",
    poolId: "859",
    spotPriceSourceDenom: DenomHelper.ibcDenom(
      [{ portId: "transfer", channelId: "channel-519" }],
      "umedas"
    ),
    spotPriceDestDenom: "ufury",
    destCoinId: "pool:ufury",
  },
];
