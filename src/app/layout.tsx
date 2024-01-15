import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { StoryblokBridgeLoader } from "@storyblok/react/rsc";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import Teaser from "@/components/storyblok/Teaser";
import Page from "@/components/storyblok/Page";
import Feature from "@/components/storyblok/Feature";
import Grid from "@/components/storyblok/Grid";

storyblokInit({
  accessToken: "TRy8fro6F6vWWbhtsbcTaAtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    feature: Feature,
    grid: Grid,
  },
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next ecommerce | Base foundation of common ecommerce experience",
  description: "Next App with base foundations of common ecommerce pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
