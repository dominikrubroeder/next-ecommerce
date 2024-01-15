import React from "react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { GridStoryblok } from "../../../component-types-sb";

const Grid = ({ blok }: { blok: GridStoryblok }) => (
  <ul {...storyblokEditable(blok)} key={blok._uid} data-test="grid">
    {blok.columns?.map((nestedBlok) => (
      <li key={nestedBlok._uid}>
        <StoryblokComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
