export const formatProductTitle = (productTitle: string) => {
  return productTitle.toLowerCase().trim().replaceAll(" ", "-");
};

export const getTabContent = (
  tabs: { title: string; content: string }[],
  searchParamsTab: string | null,
) => {
  const searchParamsTabContent = tabs.find(
    (tab) => tab.title.toLowerCase() === searchParamsTab,
  )
    ? tabs.find((tab) => tab.title.toLowerCase() === searchParamsTab)?.content
    : tabs[0].content;

  return { tabContent: searchParamsTabContent };
};
