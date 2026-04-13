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

const removeBookFromLocalDB = (dataType, bookId) => {
  const list = getListFromLocalDB(dataType);
  const updatedList = list.filter((book) => book.bookId !== bookId);
  localStorage.setItem(dataType, JSON.stringify(updatedList));
  return updatedList;
};

export { getListFromLocalDB, removeBookFromLocalDB, setListToLocalDB };

