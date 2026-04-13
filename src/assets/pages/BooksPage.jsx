import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../Components/ListedBooks/ReadList";
import WishList from "../Components/ListedBooks/WishList";

const BooksPage = () => {
  const [sortingType, setSortingType] = useState("");

  return (
    <div className="max-w-7xl mx-auto my-10 p-2.5">
      <div className="flex justify-center">
        <div className="dropdown dropdown-center my-3">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm md:btn-lg bg-green-500 text-white border-none rounded-xl font-semibold text-lg "
          >
            Sort By: {sortingType || ""} <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("Pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("Rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <WishList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BooksPage;
