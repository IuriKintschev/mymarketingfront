import React, { Component } from 'react';
import Form from "./Form";
import { http } from "../services/conf";

// import { Container } from './styles';

export default class Main extends Component {
	constructor() {
		super();

		this.state = {
			users: []
		}
	}

	componentDidMount() {
		http
			.get('usuarios/')
			.then(res => this.setState({ users: res.data }))
	}

	render() {
		return (
			<div className="d-flex justify-content-center align-items-center h-100">
				<div className="card p-5">
					<div className="mb-4">
						<Form />
					</div>
					<div>
						<table className="table">
							<thead>
								<tr>
									<th scope="col">Nome</th>
									<th scope="col">Email</th>
									<th scope="col">Idade</th>
									<th scope="col">Excluir</th>
								</tr>
							</thead>
							{this.state.users.map(user => (
								<tbody>
									<tr>
										<td>{user.nome}</td>
										<td>{user.email}</td>
										<td>{user.telefone}</td>
										<td><button className="btn btn-danger"><i className="fas fa-trash"></i></button></td>
									</tr>
								</tbody>
							))}
						</table>
					</div>
				</div>
			</div>
		);
	}
}
