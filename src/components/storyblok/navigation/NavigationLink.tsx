import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { NavigationLinkStoryblok } from "../../../../component-types-sb";

const NavigationLink = ({ blok }: { blok: NavigationLinkStoryblok }) => (
  <Link href={blok.link?.cached_url ?? "/"} {...storyblokEditable(blok)}>
    {blok.title}
  </Link>
);
export default NavigationLink;
