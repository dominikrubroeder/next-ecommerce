import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Teaser from "@/components/storyblok/Teaser";
import Page from "@/components/storyblok/Page";
import Feature from "@/components/storyblok/Feature";
import Grid from "@/components/storyblok/Grid";
import Navigation from "@/components/storyblok/navigation/Navigation";
import NavigationLink from "@/components/storyblok/navigation/NavigationLink";
import NavigationLayout from "@/components/storyblok/navigation/NavigationLayout";
import LayoutConfig from "@/components/storyblok/navigation/NavigationConfig";

export const storyblokInitializer = () =>
  storyblokInit({
    accessToken: "TRy8fro6F6vWWbhtsbcTaAtt",
    use: [apiPlugin],
    components: {
      teaser: Teaser,
      page: Page,
      feature: Feature,
      grid: Grid,
      layout_config: LayoutConfig,
      layout: NavigationLayout,
      navigation: Navigation,
      navigation_link: NavigationLink,
    },
  });
