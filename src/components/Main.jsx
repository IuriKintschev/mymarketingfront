import React, { Component } from 'react';
import Form from "./Form";

// import { Container } from './styles';

export default class Main extends Component {
	render() {
		return (
			<div className="d-flex justify-content-center align-items-center h-100">
				<div className="card p-5">
					<Form />
				</div>
			</div>
		);
	}
}
