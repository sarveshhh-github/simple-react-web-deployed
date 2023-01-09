import { createBrowserRouter } from 'react-router-dom'
import Home from '../AllMainComponents/Home/Home';
import Services from '../AllMainComponents/Services/Services';
import ContactUs from '../AllMainComponents/ContactUs/ContactUs';
import Info from '../AllMainComponents/Info/Info';
import Review from '../AllMainComponents/Review/Review';
import Appointment from '../AllMainComponents/Appointment/Appointment';
import Staff from '../AllMainComponents/Info/Staff/Staff';










const router = createBrowserRouter(

    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: "/services",
            element: <Services />
        },
        {
            path: '/info',
            element: <Info />
        },
        {
            path: '/review',
            element: <Review />
        },
        {
            path: '/contact-us',
            element: <ContactUs />
        },
        {
            path: '/appointment',
            element: <Appointment />
        },
        {
            path: '/info/staff',
            element: <Staff />
        }
    ]


)

export default router;