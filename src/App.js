import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./app/Dashboard";
import Clients from "./app/Clients";
import ClientProfile from "./app/ClientProfile";
import Office from "./app/Office";
import Collection from "./app/Collection";
import CollectionBank from "./app/CollectionBank";
import Roles from "./app/Settings/Roles";
import ViewRoles from "./app/Settings/ViewRoles";
import IncompleteRecords from "app/Clients/IncompleteRecords/IncompleteRecords";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route
            exact
            path="/clients/incomplete"
            element={<IncompleteRecords />}
          />
          <Route exact path="/clients/:id" element={<ClientProfile />} />
          <Route exact path="/office" element={<Office />} />
          <Route exact path="/collections" element={<Collection />} />
          <Route exact path="/collections/bank" element={<CollectionBank />} />
          <Route exact path="/settings/roles" element={<Roles />} />
          <Route exact path="/settings/roles/:id" element={<ViewRoles />} />
          <Route exact path="/settings" element={<Roles />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
