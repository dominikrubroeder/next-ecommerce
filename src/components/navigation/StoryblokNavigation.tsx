import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";
import React from "react";

export default async function StoryblokNavigation() {
  const { data: config } = await fetchStoryblokStory({
    name: "/layout-config",
  });

  return <StoryblokComponent blok={config.story.content} />;
}
