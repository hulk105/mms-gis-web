import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonBlock from './components/button/buttonBlock';
import PopUp from './components/popUp/popUp';

import empty from './assets/img/empty.jpg';
import area from './assets/img/area.jpg';
import cities from './assets/img/cities.jpg';


import {clearIdFirst, clearIdSecond, clearIdThird} from './Rudux/action';
import './section.scss';


function Section() {
	const dispatch = useDispatch();
	const { showPopUp } = useSelector( state => state.showPopUpReducer );
	const [ map, setMap ] = React.useState( empty );

	const resetAllChoose = () => {
		dispatch( clearIdFirst );
		dispatch( clearIdSecond );
		dispatch( clearIdThird );
	};

	const clearMap = () => {
		setMap( empty );
	};

	const drawMap = () => {
		setMap( area );
	};

	const startDraw = () => {
		setMap( cities );
	};
	return (
		<section>
			<div className={ 'map' }>
				<img src={ map } alt={ 'map' }/>
				{ showPopUp && <PopUp/> }
			</div>
			<div className={ 'underMap' }>
				<ButtonBlock
					funcOne={ drawMap }
					funcTwo={ startDraw }
					fontSize={ 12 }
					buttonOne={ { width: 206, height: 32 } }
					buttonTwo={ { width: 206, height: 32 } }
					textOne={ 'вкажіть територію' }
					textTwo={ 'почати відмальовку' }/>
				<ButtonBlock
					funcOne={ resetAllChoose }
					funcTwo={ clearMap }
					fontSize={ 12 }
					buttonOne={ { width: 206, height: 32 } }
					buttonTwo={ { width: 66, height: 32 } }
					textOne={ 'оновити' }
					textTwo={ 'зтерти' }/>
			</div>

		</section>
	);
}

export default Section;
