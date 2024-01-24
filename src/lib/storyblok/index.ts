import { getStoryblokApi } from "@storyblok/react/rsc";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchStoryblokStory({
  name,
  version = "draft",
}: {
  name: string;
  version?: "draft" | "published";
}) {
  noStore();

  try {
    const storyblokApi = getStoryblokApi();

    return storyblokApi.get(`cdn/stories${name}`, {
      version: version,
    });
  } catch (error) {
    console.error(`fetchStoryblokStory error for slug ${name}`, error);
  }

  redirect("/");
}
