import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import { Error } from "./components/Error";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import Todo from "./components/Todo";

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
          path: "todo",
          element: <Todo />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
