import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  // updateTitle is for componentDidmount and [title] is for compoenentWillUpdate
  // on useEffect react-hooks
  useEffect(updateTitle, [title]);
  return setTitle;
};
