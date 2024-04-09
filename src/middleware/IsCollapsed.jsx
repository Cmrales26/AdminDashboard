import { createContext, useContext, useState } from "react";

const IsCollapsedContext = createContext();

export const useIsCollapsedContext = () => useContext(IsCollapsedContext);

// eslint-disable-next-line react/prop-types
export const IsCollapsedProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <IsCollapsedContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </IsCollapsedContext.Provider>
  );
};
