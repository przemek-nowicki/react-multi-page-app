import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "component/nav";
import Footer from "component/footer"
import "../../common.scss";

class UserCreatePage extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div className="main index column is-8">Create User Form</div>
				<Footer />
			</div>
			
		);
	}
}

ReactDOM.render(<UserCreatePage />, document.getElementById("root"));
ReactDOM.render(<Nav />, document.getElementById("extraNav"));
