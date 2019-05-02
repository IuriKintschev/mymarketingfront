import React, { Component } from 'react';
import Form from "./Form";
import Tabela from "./Tabela";
import { http } from "../services/conf";

// import { Container } from './styles';

export default class Main extends Component {
	componentDidMount(){
		http.get('usuarios/')
			.then(res => console.log(res.data))
	}
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
