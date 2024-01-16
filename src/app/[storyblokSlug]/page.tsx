import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react";
import React from "react";

export const dynamic = "force-dynamic";
export default async function StoryblokPage({
  params,
}: {
  params: { storyblokSlug: string };
}) {
  const { data } = await fetchStoryblokStory({
    name: `/${params.storyblokSlug}`,
  });

  return (
    <section className="grid gap-4 px-4">
      <h1 className="mb-5 border-b py-5 text-4xl">Dynamic Storyblok Pages</h1>
      <StoryblokComponent blok={data.story.content} />
    </section>
  );
}
