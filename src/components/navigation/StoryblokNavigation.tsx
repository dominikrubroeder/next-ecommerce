import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";
import React from "react";
import { unstable_noStore } from "next/cache";

export default async function StoryblokNavigation() {
  unstable_noStore();

  const { data: config } = await fetchStoryblokStory({
    name: "/layout-config",
  });

  return <StoryblokComponent blok={config.story.content} />;
}
