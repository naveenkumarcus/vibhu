import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/layout/header";
import { LANDING_PATH } from "./config";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { getUserProile } from "./store/effects/user";
import Spinner from "./components/shared/spinner";

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
      <Router hashType="slash">
        <Spinner />
        <Header />
        <Switch>
          <Redirect exact from="/" to={LANDING_PATH} />
          {routes.map((route, idx) => (
            <Route key={`route_${idx}_id`} exact={route.exact} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Router>
    </>
  );
};
export default App;
