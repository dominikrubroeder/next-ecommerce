import React from "react";
import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";
import { PageStoryblok } from "../../../component-types-sb";

const Page = ({ blok }: { blok: PageStoryblok }) => (
  <div
    {...storyblokEditable(blok)}
    key={blok._uid}
    data-test="page"
    className="grid gap-4"
  >
    {blok.body
      ? (blok.body as SbBlokData[]).map((nestedBlok) => (
          <div key={nestedBlok._uid}>
            <StoryblokComponent blok={nestedBlok} />
          </div>
        ))
      : null}
  </div>
);

export default Page;
