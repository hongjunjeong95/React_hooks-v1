import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return initialTab;
    } else {
      return initialTab;
    }
  });
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
