import { createBrowserRouter } from 'react-router-dom';
import AllCustomers from '../pages/AllCustomers';
import Main from '../Layout/Main';
import UpdateCustomer from '../pages/UpdateCustomer';
import AddCustomer from '../pages/AddCustomer';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<AllCustomers></AllCustomers>,
            },
            {
                path:'/update/:id',
                element:<UpdateCustomer>,</UpdateCustomer>,
                loader: ({params})=> fetch(`http://localhost:5000/customers/${params.id}`)
            },
            {
                path:'/addcustomer',
                element:<AddCustomer></AddCustomer>,
            },
        ]
    }
])
export default router;