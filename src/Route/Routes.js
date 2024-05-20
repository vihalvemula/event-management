import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import Login from "../containers/Loginpage/Login";
import CreateAccPage from "../containers/Loginpage/CreateAccPage";
import ForgotPwd from "../containers/Loginpage/ForgotPwd";
import go from "../helpers/RoutingUrls";
import Homepage from "../containers/Homepage/Homepage";
import AllServices from "../containers/Servicespage/AllServices";
import BookVenue from "../containers/Servicespage/BookVenue";
import BookServices from "../containers/Servicespage/BookServices";
import WishlistPage from "../containers/Wishlistpage/WishlistPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Login />} />
        <Route exact path={go.login} element={<Login />} />
        <Route exact path={go.adminLogin} element={<Login />} />
        <Route exact path={go.createAcc} element={<CreateAccPage />} />
        <Route exact path={go.adminCreateAcc} element={<CreateAccPage />} />
        <Route exact path={go.forgotPwd} element={<ForgotPwd />} />
        <Route exact path={go.homePage} element={<Homepage />} />
        <Route exact path={go.venues} element={<AllServices />} />
        <Route exact path={go.bookVenue} element={<BookServices />} />
        <Route exact path={go.wishList} element={<WishlistPage />} />
      </Switch>
    </Router>
  );
};

export default Routes;
