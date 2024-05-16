import React, { useEffect, useState } from "react";
import TodoItem, { TodoItemShimmer } from "../TodoItem";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollList = () => {
  const [todoData, setTodoData] = useState([]);
  const [initilaLoading, setInitialLoading] = useState(true);
  const [payLoad, setPayLoad] = useState({
    page: 1,
    limit: 6,
    moreData: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let fd = new FormData();
      fd.append("page", payLoad.page);
      fd.append("limit", payLoad.limit);
      let fetchRes = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}todo`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: payLoad.page,
            limit: payLoad.limit,
          }),
          method: "POST",
        }
      );
      fetchRes = await fetchRes.json();
      if (fetchRes.status) {
        console.log(fetchRes.data);
        let tempArr = fetchRes.data;
        let tempArr2 = todoData;
        let arr = tempArr2.concat(tempArr);
        setTodoData(arr);
        setPayLoad({ ...payLoad, page: payLoad.page + 1, moreData: true });
      } else {
        setPayLoad({ ...payLoad, moreData: false });
      }
      setInitialLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {todoData.length > 0 ? (
        <InfiniteScroll
          dataLength={todoData.length}
          next={fetchData}
          hasMore={payLoad.moreData}
          loader={<TodoItemShimmer />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="">
            {todoData.map((todo) => {
              console.log(todo);
              return (
                // <div className="w-1/4 pr-4 mr-6" key={todo._id}>
                <TodoItem title={todo.title} description={todo.description} />
                // </div>
              );
            })}
          </div>
        </InfiniteScroll>
      ) : (
        <h1>No Data available</h1>
      )}
    </>
  );
};
export default InfiniteScrollList;
