import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import Login from "../containers/Loginpage/Login";
import CreateAccPage from "../containers/Loginpage/CreateAccPage";
import ForgotPwd from "../containers/Loginpage/ForgotPwd";
import go from "../helpers/RoutingUrls";

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
      </Switch>
    </Router>
  );
};

export default Routes;
