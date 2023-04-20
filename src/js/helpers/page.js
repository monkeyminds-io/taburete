const getPage = function () {
  const url = window.location.href;
  const page = url.split("/")[url.split("/").length - 1].split(".")[0];
  return page;
};

export { getPage };
