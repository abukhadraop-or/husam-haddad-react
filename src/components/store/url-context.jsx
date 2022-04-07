import React, { useMemo, useState } from "react";
import propTypes from "prop-types";

const UrlContext = React.createContext({
  /**
   * url sort value.
   *
   * @type {string}
   */
  url: " ",

  /**
   * change url sort value.
   *
   * @type {Function}
   */
  sortUrl: () => {},
});

/**
 * Movies url context provider to manage movies sort.
 *
 * @param {Object}      props
 * @param {JSX.Element} props.children     Child nodes to render and pass context.
 * @param {Object}      props.contextValue Movies context value.
 *
 * @return {JSX.Element}
 */
export function UrlContextProvider({ children }) {
  const [url, setUrl] = useState("");

  /**
   * Change the url sort value.
   *
   * @param {string} link New url sort value.
   */
  const urlHandler = (link) => {
    setUrl(link);
  };

  const contextValue = useMemo(
    () => ({
      url,
      sortUrl: urlHandler,
    }),
    [url]
  );

  return (
    <UrlContext.Provider value={contextValue}>{children}</UrlContext.Provider>
  );
}

UrlContextProvider.propTypes = {
  children: propTypes.node.isRequired,
  contextValue: propTypes.shape({
    url: propTypes.string,
    sortUrl: propTypes.func,
  }),
};

UrlContextProvider.defaultProps = {
  contextValue: {
    url: "",
  },
};

export default UrlContext;
