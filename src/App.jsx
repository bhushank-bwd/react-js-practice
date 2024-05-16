import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import { Error } from "./components/Error";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import InfiniteScrollList from "./components/load/InfiniteScrollList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "",
          element: <Home />,
        },
        {
          path: "load-more",
          element: <InfiniteScrollList />,
        },
      ],
    },
  ]);
  const pageLoad = useSelector((store) => store.site.pageLoad);
  return (
    <>
      <h1>{pageLoad}</h1>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
