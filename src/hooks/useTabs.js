import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function useTabs(root, tabs) {
  const { tab } = useParams();
  const history = useHistory();

  const [tabIndex, setTabIndex] = useState(tabs.findIndex((t) => t.name === tab));

  const handleKeyDown = (e) => {
    const reroute = (index) => {
      e.preventDefault();
      history.push(tabs[index]?.name);
    };

    if (document.activeElement.classList.contains("tab")) {
      const last = tabs.length - 1;
      if ([39, 40].includes(e.keyCode)) reroute(tabIndex === last ? 0 : tabIndex + 1);
      if ([37, 38].includes(e.keyCode)) reroute(tabIndex === 0 ? last : tabIndex - 1);
    }
  };

  useEffect(() => {
    setTabIndex(tabs.findIndex((t) => tab === t.name));
  }, [tab]);

  useEffect(() => {
    const url = history.location.pathname;
    const rootPath = url.slice(0, root.length);
    const restPath = url.slice(2 + root.length + tab.length);
    const tabName = tabs[tabIndex]?.name;

    if (root !== rootPath) {
      console.error("Root path does not match url path");
      return;
    }

    if (tabName === undefined) {
      console.error("Tabs name is invalid");
      return;
    }

    if (restPath) {
      history.push(`${root}/${tabName}/${restPath}`);
    } else {
      history.push(`${root}/${tabName}`);
    }
  }, [tabIndex]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => document.removeEventListener("keydown", handleKeyDown, false);
  }, [handleKeyDown]);

  return [tabIndex, setTabIndex];
}

export default useTabs;
