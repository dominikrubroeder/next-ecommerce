import { storyblokEditable } from "@storyblok/react/rsc";
import { TeaserStoryblok } from "../../../component-types-sb";

const Teaser = ({ blok }: { blok: TeaserStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test="teaser">
      <div>
        <h2>{blok.headline}</h2>
      </div>
    </div>
  );
};

export default Teaser;
