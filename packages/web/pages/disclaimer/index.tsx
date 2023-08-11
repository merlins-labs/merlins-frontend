import type { NextPage } from "next";

const Disclaimer: NextPage = () => (
  <section className="bg-furyverse-900 pt-20">
    <div className="max-w-container mx-auto p-5 md:h-full overflow-y-auto">
      <div className="text-center">
        <span>Merlins Disclaimer</span>
      </div>
      <div className="p-4 my-5 mx-auto rounded-xl max-w-lg bg-furyverse-700 text-white-mid text-xs md:caption">
        Merlins is a decentralized peer-to-peer blockchain that people can use
        to create liquidity and trade IBC enabled tokens. The Merlins blockchain
        is made up of free, public, and open-source software. Your use of
        Merlins involves various risks, including, but not limited, to losses
        while digital assets are being supplied to Merlins pools and losses due
        to the fluctuation of prices of tokens in a trading pair or liquidity
        pool, including Impermanent Loss. Before using any pool on the Merlins
        blockchain, you should review the relevant documentation to make sure
        you understand how Merlins works, and the pool you use on Merlins works.
        Additionally, just as you can access email protocols, such as SMTP,
        through multiple email clients, you can access pools on Merlins through
        several web or mobile interfaces. You are responsible for doing your own
        diligence on those interfaces to understand the fees and risks they
        present.
        <br />
        <br />
        AS DESCRIBED IN THE MERLINS LICENSES, THE MERLINS PROTOCOL IS PROVIDED
        “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. Although
        Merlins Labs Pte. Ltd. ( “Merlins Labs” ) developed much of the initial
        code for the Merlins protocol, it does not provide, own, or control the
        Merlins protocol, which is run by a decentralized validator set.
        Upgrades and modifications to the protocol are managed in a
        community-driven way by holders of the FURY governance token. No
        developer or entity involved in creating the Merlins protocol will be
        liable for any claims or damages whatsoever associated with your use,
        inability to use, or your interaction with other users of the Merlins
        protocol, including any direct, indirect, incidental, special,
        exemplary, punitive or consequential damages, or loss of profits,
        cryptocurrencies, tokens, or anything else of value.
      </div>
    </div>
    <div className="max-w-container mx-auto p-5 md:h-full overflow-y-auto">
      <div className="text-center">
        <span>Merlins Privacy Policy</span>
      </div>
      <div className="p-4 my-5 mx-auto rounded-xl max-w-lg bg-furyverse-700 text-white-mid text-xs md:caption">
        By using this app you consent to anonymous usage analytics data being
        collected to improve the overall user experience.
      </div>
    </div>
    <div className="max-w-container mx-auto p-5 md:h-full overflow-y-auto">
      <div className="text-center">
        <span>Merlins Rektdrop Disclaimer</span>
      </div>
      <div className="p-4 my-5 mx-auto rounded-xl max-w-lg bg-furyverse-700 text-white-mid text-xs md:caption">
        On June 7, 2022, a software bug related to Merlins liquidity pool led to
        an incorrect, excessive amount of LP shares to be distributed. While
        under no obligation to do so, Merlins Foundation has decided to take
        certain steps to compensate those affected by the exploit. On June 28,
        2022, Merlins will distribute tokens in-kind to losses to affected
        wallet addresses. Liquidity providers of affected pools will receive
        tokens (or FURY for non-liquid assets) sent to their account equivalent
        to the amount affected by the bug. In consideration for this payment,
        you agree to waive, release, covenant not to sue and forever discharge
        Merlins Foundation Ltd., its vendors, affiliates and licensees, and
        their respective owners, corporate parents, subsidiaries, affiliates,
        licensees and the officers, shareholders, directors, employees, agents,
        representatives, successors and assigns of each of these (collectively,
        “Releasees”) from any and all claims, demands, causes of action,
        liabilities, losses, injuries, damages, costs, and expenses (including,
        without limitation, reasonable attorneys’ fees) whatsoever that relate
        to, arise out of, or are in any way connected to (i) the loss of funds,
        or (ii) the services provided to you by the Releases, whether or not any
        such Claims may be based on or arise out of the negligent acts or
        omissions of any of the Releasees or otherwise. If you do not accept the
        terms outlined above and/or do not wish to accept the distributed funds,
        please contact inquiry@merlins.team and an Merlins team member will help
        you return the funds.
      </div>
    </div>
  </section>
);

export default Disclaimer;
