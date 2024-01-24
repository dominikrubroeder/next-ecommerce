import ProductTab from "@/components/product/tabs/ProductTab";

export default function ProductTabs({
  tabs,
  searchParamsTab,
}: {
  tabs: { title: string; content: string }[];
  searchParamsTab: undefined | string;
}) {
  if (tabs === null || tabs === undefined || tabs.length === 0) return null;

  const tabContent =
    tabs.find((tab) => tab.title === searchParamsTab)?.content ??
    tabs[0].content;

  return (
    <div className="grid gap-2">
      <ul className="no-scrollbar overflow-x-auto whitespace-nowrap border-r xl:border-none">
        {tabs.map((tab, index) => (
          <li key={index} className="my-4 inline-block last-of-type:mr-4">
            <ProductTab
              tab={tab.title}
              searchParamsTab={searchParamsTab}
              index={index}
            />
          </li>
        ))}
      </ul>

      <div>{tabContent}</div>
    </div>
  );
}
