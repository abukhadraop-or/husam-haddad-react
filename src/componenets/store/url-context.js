import React, { useMemo, useState } from 'react';
import propTypes from 'prop-types';

const UrlContext = React.createContext({
  url: ' ',
  sortUrl: () => {},
});

export function UrlContextProvider({ children }) {
  const [url, setUrl] = useState('');

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
  children: propTypes.element.isRequired,
  contextValue: propTypes.shape({
    url: propTypes.string,
    sortUrl: propTypes.func,
  }),
};
UrlContextProvider.defaultProps = {
  contextValue: {
    url: '',
  },
};
export default UrlContext;
