import React from "react";
import { Switch, Route } from "react-router-dom";

import Resorts from "./views/Resorts";
import AddResort from "./views/AddResort";
import UpdateResort from "./views/UpdateResort";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/resorts"} component={Resorts} />
        <Route exact path={"/resorts/add"} component={AddResort} />
        <Route exact path={"/resorts/:id/update"} component={UpdateResort} />
      </Switch>
    </div>
  );
}

export default App;
