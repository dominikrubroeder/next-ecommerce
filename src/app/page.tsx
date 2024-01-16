import { StoryblokComponent } from "@storyblok/react";
import { fetchStoryblokStory } from "@/lib/storyblok";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data } = await fetchStoryblokStory({ name: "/home" });

  return (
    <div className="space-y-4">
      <h1 className="mx-4 border-b pb-5 text-4xl">Home</h1>

      <section className="px-4">
        <StoryblokComponent blok={data.story.content} />
      </section>
    </div>
  );
}
