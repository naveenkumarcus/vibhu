import {
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router";
import { AdminRouteEndpoints, adminRoutes } from "../../config/admin";
import AdminMenu from "./adminMenu";


const Admin = () => {
  let { path } = useRouteMatch();

  return (
    <div className="va-admin">
      <AdminMenu />
      <div className="va-admin__main">
        <Switch>
          <Redirect exact from={path} to={AdminRouteEndpoints.ADMIN_COURSE_MANAGEMENT} />
          {adminRoutes.map((route, idx) => (
            <Route
              key={`admin_route_${idx}_id`}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
