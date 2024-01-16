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
    <div className="space-y-4">
      <div className="px-4">
        <h1 className="border-b pb-5 text-4xl">Dynamic Storyblok Pages</h1>
      </div>

      <section className="px-4">
        <StoryblokComponent blok={data.story.content} />
      </section>
    </div>
  );
}
