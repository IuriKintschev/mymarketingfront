import React from 'react';

const Tabela = () => {
	return (
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
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td><button className="btn btn-danger"><i className="fas fa-trash"></i></button></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Tabela;
