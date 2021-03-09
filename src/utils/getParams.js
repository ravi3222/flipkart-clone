// fetch cid and type from url
// http://localhost:3000/Apple?cid=5fd89f914a05500f148ff9f8&type=page

const getParams = (query) => {
  if (query) {
    const queryString = query.split("?")[1];
    if (queryString.length > 0) {
      const params = queryString.split("&");
      const paramsObj = {};
      params.forEach((param) => {
        const keyValue = param.split("=");
        paramsObj[keyValue[0]] = keyValue[1];
      });

      return paramsObj;
    }
  }
  return {};
};

export default getParams;
