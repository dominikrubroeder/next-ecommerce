import LayoutConfig from "@/components/storyblok/navigation/LayoutConfig";
import { ReactNode } from "react";
import { LayoutConfigStoryblok } from "../../../../component-types-sb";

const NavigationLayout = ({
  children,
  story,
}: {
  children: ReactNode;
  story: LayoutConfigStoryblok;
}) => (
  <div>
    <LayoutConfig blok={story.content} />
    {children}
  </div>
);

export default NavigationLayout;
