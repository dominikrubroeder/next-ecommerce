import { getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";

export async function fetchStoryblokStory({
  name,
  version = "draft",
}: {
  name: string;
  version?: "draft" | "published";
}) {
  try {
    const storyblokApi = getStoryblokApi();

    return await storyblokApi.get(`cdn/stories${name}`, {
      version: version,
    });
  } catch (error) {
    console.error(`fetchStoryblokStory error for slug ${name}`, error);
  }

  redirect("/");
}
