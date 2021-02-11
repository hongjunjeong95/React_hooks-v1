export const usePreventLeave = (onLeaving) => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "heloo";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
