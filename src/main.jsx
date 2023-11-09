import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router}/>
  </div>
)
