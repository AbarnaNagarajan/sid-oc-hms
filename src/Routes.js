import React from "react";

const OP = React.lazy(() => import("./Views/Modules/OP/OPView"));
const OPGrid = React.lazy(() => import("./Views/Modules/OP/OPViewGird"));
const Registration = React.lazy(() =>
  import("./Views/Modules/OP/Registration")
);
const Appointment = React.lazy(() =>
  import("./Views/Modules/Appointment/Appointment")
);

const routes = [
  { path: "/OP", name: "OP", component: OP },
  { path: "/OPGrid", name: "OPGrid", component: OPGrid },
  { path: "/Register", name: "Register", component: Registration },
  { path: "/Appointment", name: "Appointment", component: Appointment },
];

export default routes;
