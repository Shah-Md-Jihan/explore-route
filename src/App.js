import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layouts/Main';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetails/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "home", element: <Home></Home> },
        { path: "products", element: <Products></Products> },
        {
          path: "friends",
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>,
        },
        {
          path: "/friend/:FriendId",
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.FriendId}`)
          },
          element: <FriendDetail></FriendDetail>
        },
        {
          path: "posts",
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path: "/posts/:postId",
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetail></PostDetail>
        }
      ]
    },
    { path: "about", element: <About></About> },
    { path: "*", element: <div>This route not found</div> },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
