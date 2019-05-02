import React from 'react'

export default function Tabela({ users, deleta }) {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Nome</th>
						<th scope="col">Email</th>
						<th scope="col">Idade</th>
					</tr>
				</thead>
				{users.map(user => (
					<tbody>
						<tr>
							<td>{user.nome}</td>
							<td>{user.email}</td>
							<td>{user.telefone}</td>
						</tr>
					</tbody>
				))}
			</table>
		</div>
	)
}
