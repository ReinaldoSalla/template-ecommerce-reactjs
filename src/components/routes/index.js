import React from "react";
import {
	Switch,
	Route
} from "react-router-dom";
import Products from "../products/";

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact>
        <Products title="All Items" target="all" />
      </Route>
      <Route path="/women">
        <Products title="Women's Items" target="women" />
      </Route>
      <Route path="/men">
        <Products title="Men's Items" target="men" />
      </Route>
		</Switch>
	);
}