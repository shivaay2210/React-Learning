import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// the reason we are using react router dom is that if we have multiple pages
// then on if we link all that pages using anchor tag then page reloads on every click
// but this is not a good practice so react router dom gives us Link 
// which has to similar to href in this page reload nhi hota, 
// but in react (there is no scene of refreshing, dom jaata h 
// and new values leke aata h (virtual dom))

// react mai refresh wala toh scene hi nhi h dom jaata h and new node 
// values add ho jaati h

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },  
//       { 
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout />}>
      <Route path = "" element = {<Home />} />
      <Route path = "about" element = {<About />} />
      <Route path = "contact" element = {<Contact />} />
      <Route path = "user/:userId" element = {<User />} />
      <Route
      loader={githubInfoLoader}
       path = "github"
       element = {<Github />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
