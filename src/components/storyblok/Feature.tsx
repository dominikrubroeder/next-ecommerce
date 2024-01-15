import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { FeatureStoryblok } from "../../../component-types-sb";

const Feature = ({ blok }: { blok: FeatureStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test="feature">
      <div>
        <div>{blok.name}</div>
        <p>{blok.description}</p>
      </div>
    </div>
  );
};

export default Feature;
