import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;

    case "/registor":
      component = <Register />;
      break;

    case "/sign-in":
      component = <Login />;
      break;

    case "/cart":
      component = <Cart />;
      break;

    case "/products":
      component = <ProductList />;
      break;
  }

  return <>{component}</>;
}

export default App;
