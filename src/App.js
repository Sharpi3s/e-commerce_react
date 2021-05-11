import './style/style.css'; 
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { checkUser } from './store/actions/userAction'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'
import Home from './views/Home';
import Products from './views/Products';
import Newin from './views/Newin'
import ProductDetails from './views/ProductDetails';
import Register from './views/Register';
import SignIn from './views/SignIn';
import Cart from './views/Cart';
import MyOrders from './views/MyOrders';
import CompletedOrder from './views/CompletedOrder';
import UserOrderDetails from './views/UserOrderDetails';
import Admin from './views/Admin';
import RegisterNewUser from './views/RegisterNewUser';
import MyProfile from './views/MyProfile';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser())
  })


  return (
    <BrowserRouter basename='/'>
      <Navbar />
      <div>
      {/* <div className="container"> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Products} />
          <Route exact path="/newin" component={Newin} />
          <Route exact path="/productdetails/:id" component={ProductDetails} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/registernewuser" component={RegisterNewUser} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/myorders" component={MyOrders} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/completedorder" component={CompletedOrder} />
          <Route exact path="/orderdetails/:id" component={UserOrderDetails} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
