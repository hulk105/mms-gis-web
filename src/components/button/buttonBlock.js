import React from 'react';
import Button from './button';

import './buttonBlock.scss';

function ButtonBlock( { textOne, textTwo, fontSize, buttonOne, buttonTwo, funcOne, funcTwo } ) {
	return (
		<div className={ 'buttonBlock' }>
			<Button text={ textOne } size={ buttonOne } fontSize={ fontSize } func={ funcOne }/>
			<Button text={ textTwo } size={ buttonTwo } fontSize={ fontSize } func={ funcTwo }/>
		</div>
	);
}

export default ButtonBlock;
