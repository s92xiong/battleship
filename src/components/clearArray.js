const clearArray = (board) => {
  return [...board].forEach(array => array.forEach(box => undefined));
};

export default clearArray;