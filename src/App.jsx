import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Program from "./pages/Program";

function App() {
  const theRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="our_programs" element={<Program />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={theRouter} />
    </>
  );
}

export default App;
