import React from 'react';

import './input.scss';

function Input( { text, name, type, func, value } ) {
	return (
		<div className={ 'input' }>
			<label htmlFor={ 'label' }>
				{ text }
			</label>
			<input
				id={ 'label' }
				name={ name }
				type={ type }
				value={ value }
				onChange={ func }
			/>
		</div>
	);
}

export default Input;
