import React from 'react';
import styled from 'styled-components';


const ButtonGreen = styled.button`
  border: none;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  width: ${ ( { size: { width } } ) => width + 'px' };
  height: ${ ( { size: { height } } ) => height + 'px' };
  border-radius: 2px;
  font-size: ${ ( { fontSize } ) => fontSize + 'px' };
  background-color: #00897b;
  color: #ffffff;
  cursor: pointer;
  transition: 0.20ms;

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 1px 0 #00898b;
  }
`;

function Button( { text, fontSize, size, func } ) {
	return (
		<ButtonGreen size={ size } fontSize={ fontSize } onClick={ func }>
			{ text }
		</ButtonGreen>
	);
}

export default Button;
