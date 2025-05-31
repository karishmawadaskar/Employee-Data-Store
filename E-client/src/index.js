import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Add from './views/Add/Add';
import Edit from './views/Edit/Edit';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {path: "/home",element: <Home /> },
  { path: '/detail/:id', element: <Detail /> },
  { path: '/add', element: <Add /> },
   { path: '/students/edit/:id', element: <Edit/> },
  { path: '*', element: <h1>404 Not Found</h1> }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
