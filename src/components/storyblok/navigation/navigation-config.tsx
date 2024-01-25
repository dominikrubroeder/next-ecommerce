import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { NavigationConfigStoryblok } from "../../../../component-types-sb";

export default function NavigationConfig({
  blok,
}: {
  blok: NavigationConfigStoryblok;
}) {
  return (
    <ul className="space-x-2" {...storyblokEditable(blok)}>
      {blok.navigation?.map((nestedBlok) => (
        <li key={nestedBlok._uid} className="inline-block">
          <StoryblokComponent className="" blok={nestedBlok} />
        </li>
      ))}
    </ul>
  );
}
