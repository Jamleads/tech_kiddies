import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Program from "./pages/Program";
import RootLayout from "./components/RootLayout";
import Subscriptions from "./pages/Subscriptions";
import Modal from "./components/Modal";

const theRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="our_programs" element={<Program />}></Route>
      <Route path="subscribe" element={<Subscriptions />}></Route>
      <Route path="contact" element={<Modal />}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={theRouter} />
    </>
  );
}

export default App;
