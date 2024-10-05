import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Woocommerce Store",
  description: "Online store built with Next.js and Woocommerce",
};

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The root layout for server-side rendered pages.
 *
 * This component is responsible for rendering the highest-level HTML structure
 * for server-side rendered pages. It is used as the root element for all pages
 * rendered on the server.
 *
 * @param {{ children: ReactNode }} props The props object containing the
 * children to render.
 *
 * @returns {ReactElement} The root layout element.
 */
/******  17a721bd-86ca-470a-a575-280fdc195e7e  *******/
export default function RootLayoutServer({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
