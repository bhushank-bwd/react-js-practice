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
import ComponentBasics2 from "./components/Udemy/ComponentBasics2";

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
        {
          path: "udemy",
          element: <ComponentBasics2 />,
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
