import React from 'react';

import './table.scss';

function Table({mock, radius = true, selectedId, func}) {
    let flag = false;
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
                const coloredGroup = flag ? 'coloredRow' : '';
                flag = !flag;
                return group.points.map((curr, id) => {
                    const activeClass = curr.id === selectedId ? 'activeLine' : '';
                    const activeFirstRow = activeClass ? 'activeFirstRow' : '';
                    return (
                        <tr className={`row ${activeClass} ${coloredGroup}`} key={` ${id}-${curr.id}`} onClick={() => func(curr.id)}>
                            <td className={`rowFirst ${activeFirstRow}`}>&nbsp; </td>
                            <td className={'rowSecond'}>{curr.id}</td>
                            <td className={'rowThird'}>{curr.x}</td>
                            <td className={'rowFourth'}>{curr.y}</td>
                            <td className={'rowFifth'}>{group.tag}</td>
                        </tr>);
                })
            })}
            </tbody>
        </table>
    );
}

export default Table;
