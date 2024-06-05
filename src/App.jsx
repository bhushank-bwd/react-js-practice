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
import TicTacToe from "./components/Udemy/TicTacToe";
import Investment from "./components/Udemy/investment/Investment";
import RefTimer from "./components/Udemy/RefTimer";
import ProjectHome from "./components/Udemy/project/ProjectHome";

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
          children: [
            {
              path: "",
              element: <ComponentBasics2 />,
            },
            {
              path: "investment",
              element: <Investment />,
            },
            {
              path: "tic-tac-toe",
              element: <TicTacToe />,
            },
            {
              path: "ref-timer",
              element: <RefTimer />,
            },
            {
              path: "project",
              element: <ProjectHome />,
            },
          ],
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
