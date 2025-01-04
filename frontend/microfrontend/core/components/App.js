import React, { lazy, Suspense } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProtectedRoute from "./ProtectedRoute";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = lazy(() => import('cards/Main'));
const Login = lazy(() => import('authentication/Login'));
const Register = lazy(() => import('authentication/Register'));

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const history = useHistory();

  function onLogin({ email }) {
    setEmail(email);
    setIsLoggedIn(true);
    history.push("/");
  }

  function onSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    history.push("/signin");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header email={email} onSignOut={onSignOut} />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route path="/signin">
              <Login onLogin={onLogin} />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <ProtectedRoute path="/" component={Main} loggedIn={isLoggedIn} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
