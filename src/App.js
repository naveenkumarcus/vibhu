import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/layout/header";
import { LANDING_PATH } from "./config";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { getUserProile } from "./store/effects/user";
import Spinner from "./components/shared/spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { error, routes } = useSelector(({ app }) => app, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    const { errors, showError } = error;
    if (showError) {
      errors.map(err => message.error(err));
    }
  }, [error]);

  useEffect(() => {
    dispatch(getUserProile());
  }, []);

  return (
    <>
      <Router>
        <Spinner />
        <Header />
        <Switch>
          <Redirect exact from="/" to={LANDING_PATH} />
          {routes.map((route, idx) => (
            <Route key={`route_${idx}_id`} exact={route.exact} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Router>
      <ToastContainer position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
  );
};
export default App;
