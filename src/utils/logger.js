export const nameDebug = (namespace) => {
  return (msg) => {
    console.log(`[${namespace}] ${msg}`); // eslint-disable-line no-console
  };
};
