import React from 'react'
import styled from 'styled-components';

export const Formulario = styled.div`
  .btn-sub{
	border: 1px solid #27ce7a;
	color: #27ce7a;

		&:hover{
			background: #27ce7a;
			color: #fff
		}
}
`;


export default function Form({ nome, email, telefone, targetInput, enviarUser }) {
	return (
		<Formulario>
			<form>
				<div className="form-row">
					<div className="col-3">
						<input type="text"
							name="nome"
							value={nome}
							className="form-control"
							placeholder="Nome"
							required
							onChange={targetInput}
						/>
					</div>
					<div className="col-5">
						<input type="email"
							name="email"
							value={email}
							className="form-control"
							placeholder="Email"
							required
							onChange={targetInput}
						/>
					</div>
					<div className="col">
						<input type="text"
							name="telefone"
							value={telefone}
							className="form-control"
							placeholder="Telefone"
							required
							onChange={targetInput}
						/>
					</div>
				</div>
				<div className="mt-3 d-flex justify-content-end">
					<button className="btn btn-sub mx-1"
						onClick={enviarUser}
					>
						<i className="fas fa-paper-plane"></i>
					</button>
				</div>
			</form>
		</Formulario>
	)
}

