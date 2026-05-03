import { Route, Switch } from "wouter";

import Home from "../pages/Home";
import Training from "../pages/Training";
import TrainingDetail from "../pages/TrainingDetail";
import Library from "../pages/Library";
import EquipmentDetail from "../pages/EquipmentDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/training" component={Training} />
      <Route path="/training/:id" component={TrainingDetail} />
      <Route path="/library" component={Library} />
      <Route path="/equipment/:id" component={EquipmentDetail} />
    </Switch>
  );
}

export default function App() {
  return <Router />;
}
