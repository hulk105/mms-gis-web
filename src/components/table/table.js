import React from 'react';

import './table.scss';

function Table( { mock, radius = true, selectedId, func } ) {
	return (
		<table>
			<thead>
			<tr>
				<th>&nbsp;</th>
				<th>Номер</th>
				<th>Довгота</th>
				<th>Широта</th>
				<th>Помітка</th>
			</tr>
			</thead>
			<tbody>
			{ mock.map( ( curr, id ) => {
				const activeClass = curr.id === selectedId ? 'activeLine' : '';
				const activeFirstRow = activeClass ? 'activeFirstRow' : '';
				return (
					<tr className={ `row ${ activeClass }` } key={ ` ${ id }-${ curr.id }` } onClick={ () => func( curr.id ) }>
						<td className={ `rowFirst ${ activeFirstRow }` }>&nbsp; </td>
						<td className={ 'rowSecond' }>{ curr.id }</td>
						<td className={ 'rowThird' }>{ curr.point.x }</td>
						<td className={ 'rowFourth' }>{ curr.point.y }</td>
						<td className={ 'rowFifth' }>{ curr.tag }</td>
					</tr>);
			} ) }
			</tbody>
		</table>
	);
}

export default Table;
