import NavigationConfig from "@/components/storyblok/navigation/NavigationConfig";
import { ReactNode } from "react";
import { LayoutConfigStoryblok } from "../../../../component-types-sb";

export default function NavigationLayout({
  children,
  story,
}: {
  children: ReactNode;
  story: LayoutConfigStoryblok;
}) {
  return (
    <div>
      <NavigationConfig blok={story.content} />
      {children}
    </div>
  );
}
