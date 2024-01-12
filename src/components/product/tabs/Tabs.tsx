import Tab from "@/components/product/tabs/Tab";

export default function Tabs({
  tabs,
  searchParamsTab,
  productPath,
}: {
  tabs: { title: string; content: string }[];
  searchParamsTab: undefined | string;
  productPath: string;
}) {
  if (tabs === null || tabs === undefined || tabs.length === 0) return null;

  const tabContent =
    tabs.find((tab) => tab.title === searchParamsTab)?.content ??
    tabs[0].content;

  return (
    <div className="grid gap-8">
      <ul className="flex flex-wrap">
        {tabs.map((tab, index) => (
          <li key={index}>
            <Tab
              tab={tab.title}
              searchParamsTab={searchParamsTab}
              index={index}
              productPath={productPath}
            />
          </li>
        ))}
      </ul>

      <div>{tabContent}</div>
    </div>
  );
}
