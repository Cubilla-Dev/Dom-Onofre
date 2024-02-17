import { createBrowserRouter } from "react-router-dom";
import RedirecPago from "../components/RedirectionPago/RedirecPago";
import { PATH_PAGE, PATH_DETAIL_PRODUCT, PATH_PRODUCT } from "./routerPath";
import DetailProduct from '../components/DetailProduct/DetailProduct'
import Layout from "../components/Layaout/Layout";
import ViewProduct from "../components/ViewProduct/ViewProduct";


const router = createBrowserRouter([
    {
        path: "/",
        element:  <Layout/>,
        errorElement: <p>Error</p>,

        children:[
            {
                index: true,
                element: <ViewProduct/>,
            },
            {
                path: PATH_DETAIL_PRODUCT,
                element: <DetailProduct/>,
            },
            {
                path: PATH_PAGE,
                element: <RedirecPago />
            },
        ]
    },
]);

export default router;