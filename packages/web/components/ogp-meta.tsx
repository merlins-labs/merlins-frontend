import Head from "next/head";
import { FunctionComponent } from "react";
import { IS_FRONTIER } from "../config";

/**
 * https://ogp.me/
 *
 * Head meta tags to provide preview images and text for sharing the app on iMessage, Twitter, etc.
 * Picks a random preview image amongst a selection
 */
export const OgpMeta: FunctionComponent = () => {
  const previewText = IS_FRONTIER
    ? "The Merlins Frontier"
    : "Trade on Merlins Zone";

  return (
    <Head>
      <meta property="og:title" content={previewText} />
      <meta property="og:image" content="/images/preview.jpg" />
    </Head>
  );
};
