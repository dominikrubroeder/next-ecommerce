import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import { NavigationLinkStoryblok } from "../../../../component-types-sb";

export default function NavigationLink({
  blok,
}: {
  blok: NavigationLinkStoryblok;
}) {
  return (
    <Link href={blok.link?.cached_url ?? "/"} {...storyblokEditable(blok)}>
      {blok.title}
    </Link>
  );
}
