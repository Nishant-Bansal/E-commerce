import { AboutUs } from "../pages/AboutUs/AboutUs";
import { Checkout } from "../pages/Checkout/Checkout";
import { Home } from "../pages/HomePage/Home";
import { OrderConfirmation } from "../pages/OrderConfirmation/OrderConfirmation";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";

export const ROUTES = [
    {
        id: 'HOME_PAGE',
        path: '/home',
        component: Home
    },
    {
        id: 'HOME_PAGE',
        path: '',
        component: Home
    },
    {
        id: 'PRODUCT_DETAIL_PAGE',
        path: '/product-detail-page',
        component: ProductDetails
    },
    {
        id: 'CHECK_OUT_PAGE',
        path: '/check-out-page',
        component: Checkout
    },
    {
        id: 'ORDER_CONFIRMATION_PAGE',
        path: '/order-confirmation-page',
        component: OrderConfirmation
    },
    {
        id: 'ABOUT_US_PAGE',
        path: '/about',
        component: AboutUs
    }
]