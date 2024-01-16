import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { LayoutConfigStoryblok } from "../../../../component-types-sb";

const NavigationConfig = ({ blok }: { blok: LayoutConfigStoryblok }) => {
  return (
    <ul className="flex gap-4" {...storyblokEditable(blok)}>
      {blok.navigation?.map((nestedBlok) => (
        <StoryblokComponent
          className=""
          blok={nestedBlok}
          key={nestedBlok._uid}
        />
      ))}
    </ul>
  );
};
export default NavigationConfig;
