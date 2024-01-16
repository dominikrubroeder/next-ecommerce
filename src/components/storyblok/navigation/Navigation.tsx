import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { MultilinkStoryblok } from "../../../../component-types-sb";

export default function Navigation({ blok }: { blok: MultilinkStoryblok }) {
  return (
    <ul
      className="hidden items-center md:flex md:flex-1 lg:w-0"
      {...storyblokEditable({ blok })}
    >
      {(blok.links as MultilinkStoryblok[]).map((nestedBlok) => (
        <li key={nestedBlok._uid}>
          <StoryblokComponent blok={nestedBlok} />
        </li>
      ))}
    </ul>
  );
}
