import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import { Error } from "./components/Error";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import Todo from "./components/Todo";
import InfiniteScrollList from "./components/load/InfiniteScrollList";
import { Formik } from "formik";
import SignUpForm from "./components/formik/SignUpForm";

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
        {
          path: "load-more",
          element: <InfiniteScrollList />,
        },
        {
          path: "formik",
          element: <SignUpForm />,
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
