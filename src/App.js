import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";
import TestRender from "./components/TestRender";

function App() {

  // If path is "/", Body component will be rendered below Head component that is here <RouterProvider router={router}/>.
  // The components inside children will be rendered wherever the Outlet is present

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "/watch",
          element: <WatchVideo />
        },
        {
          path: "/render",
          element: <TestRender />
        }
      ]
    }
  ])
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router={router}/>
      </div>
    </Provider>
  );
}

export default App;
