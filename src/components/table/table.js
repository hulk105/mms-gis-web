import React from 'react';

import './table.scss';

function Table({mock, radius = true, selectedId, func}) {
    let isColored = false;
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
            {mock.map((group) => {
                const coloredGroup = isColored ? 'coloredRow' : '';
                isColored = !isColored;
                return group.points.map((point, id) => {
                    const activeClass = point.id === selectedId ? 'activeLine' : '';
                    const activeFirstRow = activeClass ? 'activeFirstRow' : '';
                    return (
                        <tr className={`row ${activeClass} ${coloredGroup}`} key={` ${id}-${point.id}`} onClick={() => func(point.id)}>
                            <td className={`rowFirst ${activeFirstRow}`}>&nbsp; </td>
                            <td className={'rowSecond'}>{point.id}</td>
                            <td className={'rowThird'}>{point.x}</td>
                            <td className={'rowFourth'}>{point.y}</td>
                            <td className={'rowFifth'}>{group.tag}</td>
                        </tr>);
                })
            })}
            </tbody>
        </table>
    );
}

export default Table;