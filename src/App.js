import React from "react"
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import InformationPage from "./Screens/InformationPage";
import store, { rrfProps } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/informationPage" component={InformationPage} />
            </Switch>
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  );
}

export default App;
