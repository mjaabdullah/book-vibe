const getListFromLocalDB = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

const setListToLocalDB = (key, book) => {
  const list = getListFromLocalDB(key);
  const isExistBook = list.find((item) => item.bookId === book.bookId);
  if (!isExistBook) {
    list.push(book);
    localStorage.setItem(key, JSON.stringify(list));
  }
};

export { getListFromLocalDB, setListToLocalDB };
