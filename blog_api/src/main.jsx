import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home.jsx'
import NewPosts from './routes/NewPosts.jsx'
import Post from './routes/Post.jsx'
import Adm from './routes/Adm.jsx'
import EditPost from './routes/EditPost.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPosts />,
      },
      {
        path: "/posts/:id",
        element: <Post />
      },
      {
        path: "/Adm",
        element: <Adm />
      },
      {
        path: "/posts/edit/:id",
        element: <EditPost />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
