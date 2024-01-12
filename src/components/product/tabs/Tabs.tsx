import Tab from "@/components/product/tabs/Tab";

export default function Tabs({
  tabs,
  searchParamsTab,
  productFullPath,
}: {
  tabs: { title: string; content: string }[];
  searchParamsTab: undefined | string;
  productFullPath: string;
}) {
  if (tabs === null || tabs === undefined || tabs.length === 0) return null;

  const tabContent = tabs.find((tab) => tab.title === searchParamsTab)?.content;

  return (
    <div className="grid gap-8">
      <ul className="flex flex-wrap">
        {tabs.map((tab, index) => (
          <li key={index}>
            <Tab
              tab={tab.title}
              searchParamsTab={searchParamsTab}
              index={index}
              productFullPath={productFullPath}
            />
          </li>
        ))}
      </ul>

      <div>{tabContent}</div>
    </div>
  );
}
