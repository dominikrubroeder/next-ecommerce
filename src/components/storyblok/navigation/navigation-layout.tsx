import NavigationConfig from "@/components/storyblok/navigation/navigation-config";
import { ReactNode } from "react";
import { NavigationConfigStoryblok } from "../../../../component-types-sb";

export default function NavigationLayout({
  children,
  story,
}: {
  children: ReactNode;
  story: NavigationConfigStoryblok;
}) {
  return (
    <div>
      <NavigationConfig blok={story.content} />
      {children}
    </div>
  );
}
