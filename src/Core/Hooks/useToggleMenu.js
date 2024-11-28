import { useState } from "react";

function useToggleMenu(defaultValue) {
  const [isHidden, setIsHidden] = useState(true);
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  function OnClickItem(value) {
    setSelectedItem(value);
    setIsHidden(true);
  }

  function toggle() {
    setIsHidden((hidden) => !hidden);
  }

  function hide() {
    setIsHidden(true);
  }
  return { isHidden, toggle, OnClickItem, selectedItem, hide };
}

export default useToggleMenu;
