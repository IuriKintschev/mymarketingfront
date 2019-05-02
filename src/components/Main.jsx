import React, { Component } from 'react';
import Form from "./Form";
import Tabela from "./Tabela";

// import { Container } from './styles';

export default class Main extends Component {
	render() {
		return (
			<div className="d-flex justify-content-center align-items-center h-100">
				<div className="card p-5">
					<div className="mb-4">
						<Form />
					</div>
					<Tabela />
				</div>
			</div>
		);
	}
}
