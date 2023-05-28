import { createBrowserRouter } from "react-router-dom";
import Login from '../../components/login'

const router = createBrowserRouter([
        {
          path: "/",
          //element: ,
          children: [
            {
              path: "/",
              element: <Login />,
            },
            {
              //path: "/",
              //element: <Cadaster />,
            },
            {
              //path: "/",
              //element: <Estoque />,
            },
          ],
        },
      ]);

export default router;