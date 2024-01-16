import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { MultilinkStoryblok } from "../../../../component-types-sb";

const NavigationMenu = ({ blok }: { blok: MultilinkStoryblok }) => (
  <div
    className="hidden items-center justify-end space-x-10 md:flex md:flex-1 lg:w-0"
    {...storyblokEditable({ blok })}
  >
    {(blok.links as MultilinkStoryblok[]).map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);
export default NavigationMenu;
