import React, { Component } from "react";
import Nav from "component/nav";
import Footer from "component/footer"

export default class UserCreatePage extends Component {
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
