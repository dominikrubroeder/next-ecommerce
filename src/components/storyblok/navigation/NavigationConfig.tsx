import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { LayoutConfigStoryblok } from "../../../../component-types-sb";

export default function NavigationConfig({
  blok,
}: {
  blok: LayoutConfigStoryblok;
}) {
  return (
    <ul className="flex gap-2" {...storyblokEditable(blok)}>
      {blok.navigation?.map((nestedBlok) => (
        <li key={nestedBlok._uid}>
          <StoryblokComponent className="" blok={nestedBlok} />
        </li>
      ))}
    </ul>
  );
}
