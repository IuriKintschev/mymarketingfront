import React, { Component } from 'react';
import Form from "./Form";
import Tabela from "./Tabela";
import { http } from "../services/conf";

// import { Container } from './styles';

export default class Main extends Component {
	constructor() {
		super();

		this.state = {
			users: [],
			nome: '',
			email: '',
			telefone: ''
		}
	}

	componentDidMount() {
		http
			.get('usuarios/')
			.then(res => this.setState({ users: res.data }))
	}

	targetInput = ({ target }) => {
		this.setState({ [target.name]: target.value })
	}

	enviarUser = (e) => {
		e.preventDefault();
		const { nome, email, telefone } = this.state

		if (nome === '' || email === '' || telefone === '') return

		http
			.post('usuarios/', {
				nome,
				email,
				telefone
			})
			.then(res =>
				this.setState(prev => ({
					users: [res.data, ...prev.users],
					nome: '',
					email: '',
					telefone: ''
				})))
			.catch(er => console.log(er.response))
	}

	render() {
		const { users, nome, email, telefone } = this.state;
		return (
			<div className="d-flex justify-content-center align-items-center h-100">
				<div className="card p-5">
					<div className="mb-4">
						<Form nome={nome}
							email={email}
							telefone={telefone}
							targetInput={this.targetInput}
							enviarUser={this.enviarUser}
						/>
					</div>
					<Tabela users={users}
						deleta={this.deleta}
					/>
				</div>
			</div>
		);
	}
}
