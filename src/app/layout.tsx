import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  apiPlugin,
  StoryblokBridgeLoader,
  storyblokInit,
} from "@storyblok/react/rsc";
import Teaser from "@/components/storyblok/Teaser";
import Page from "@/components/storyblok/Page";
import Feature from "@/components/storyblok/Feature";
import Grid from "@/components/storyblok/Grid";
import Navigation from "@/components/storyblok/navigation/Navigation";
import NavigationLink from "@/components/storyblok/navigation/NavigationLink";
import NavigationLayout from "@/components/storyblok/navigation/NavigationLayout";
import NavigationConfig from "@/components/storyblok/navigation/NavigationConfig";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/auth/SessionProvider";

storyblokInit({
  accessToken: "TRy8fro6F6vWWbhtsbcTaAtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    feature: Feature,
    grid: Grid,
    navigation_config: NavigationConfig,
    navigation_layout: NavigationLayout,
    navigation: Navigation,
    navigation_link: NavigationLink,
  },
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next ecommerce | Base foundation of common ecommerce experience",
  description: "Next App with base foundations of common ecommerce pages",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`grid grid-rows-[auto_1fr_auto] ${inter.className}`}>
        <SessionProvider session={session}>
          <Header />
          <main>{children}</main>
          <Footer />
        </SessionProvider>

        <Analytics />
        <SpeedInsights />
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
