import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
    return (
        <Route element={props.loggedIn ? <Component {...props} /> : <Navigate to="/sign-in" />}/>
    );
};

export default ProtectedRoute;