import { createBrowserRouter } from "react-router-dom";
import { About, Home } from "pages";
import { MainLayout } from "layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
]);

export default router;
