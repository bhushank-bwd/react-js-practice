import React from "react";
import { useQuery } from "@tanstack/react-query";

const Todo = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["get-todos"],
    queryFn: async () =>
      await (
        await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}todo`)
      ).json(),
  });
  if (isFetching) return <div>Loading Data</div>;
  return (
    <>
      <div>
        <input
          type="text"
          id="title"
          class="border border-gray-300 text-gray-600 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-400 dark:border-gray-300 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2"
          placeholder="title"
        />
      </div>
      <div>
        <input
          type="text"
          id="description"
          class="border border-gray-300 text-gray-600 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-400 dark:border-gray-300 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2"
          placeholder="description"
        />
      </div>
      <div>
        <button className="bg-blue-400 text-white p-2 m-2 rounded-sm w-16">
          Save
        </button>
      </div>

      {data &&
        data.status &&
        data.data?.map((todo, index) => (
          <div className="m-2" key={todo._id}>
            {todo.title}
          </div>
        ))}
    </>
  );
};

export default Todo;
