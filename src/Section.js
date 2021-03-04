import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonBlock from './components/button/buttonBlock';
import PointPopUp from './components/popUp/pointPopUp';

import empty from './assets/img/empty.jpg';
import area from './assets/img/area.jpg';
import cities from './assets/img/cities.jpg';


import {clearIdFirst, clearIdSecond, clearIdThird} from './Rudux/action';
import './section.scss';
import Map from "./map";
import AddGroupPopUp from "./components/add-group-pop-up";

function Section() {

	const dispatch = useDispatch();

    const {firstTable} = useSelector(state => state.firstTableReducer);
    const {secondTable} = useSelector(state => state.secondTableReducer);
    const {thirdTable} = useSelector(state => state.thirdTableReducer);

	const {groups} = useSelector(state => state.groupsReducer)

	const { showPopUp, showAddGroupPopUp, section } = useSelector( state => state.showPopUpReducer );
	const [ setMap ] = React.useState( empty );

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
            <div className={'map'}>
                <Map research={firstTable} pollution={secondTable} cities={thirdTable}/>
                {showPopUp && <PointPopUp groups={groups} section={section}/>}
								{showAddGroupPopUp && <AddGroupPopUp section={section}/>}
            </div>
            <div className={'underMap'}>
                <ButtonBlock
                    funcOne={drawMap}
                    funcTwo={startDraw}
                    fontSize={12}
                    buttonOne={{width: 206, height: 32}}
                    buttonTwo={{width: 206, height: 32}}
                    textOne={'вкажіть територію'}
                    textTwo={'почати відмальовку'}/>
                <ButtonBlock
                    funcOne={resetAllChoose}
                    funcTwo={clearMap}
                    fontSize={12}
                    buttonOne={{width: 206, height: 32}}
                    buttonTwo={{width: 66, height: 32}}
                    textOne={'оновити'}
                    textTwo={'зтерти'}/>
            </div>

        </section>
    );
}

export default Section;
