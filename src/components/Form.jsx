import React, { Component } from 'react'
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


export default class Form extends Component {
	render() {

		return (
			<Formulario>
				<form>
					<div className="form-row">
						<div className="col-3">
							<input type="text" className="form-control" placeholder="Nome" required />
						</div>
						<div className="col-7">
							<input type="email" className="form-control" placeholder="Email" required />
						</div>
						<div className="col">
							<input type="text" className="form-control" placeholder="Idade" required />
						</div>
					</div>
					<div className="mt-3 d-flex justify-content-end">
						<button className="btn btn-sub mx-1"><i class="fas fa-paper-plane"></i></button>
					</div>
				</form>
			</Formulario>
		)
	}
}
