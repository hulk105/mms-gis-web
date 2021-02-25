import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ButtonBlock from './components/button/buttonBlock';
import Button from './components/button/button';
import Table from './components/table/table';

import {
    clearIdFirst,
    clearIdSecond,
    clearIdThird,
    deleteGis,
    getGisData,
    getTables,
    setIdFirstTable,
    setIdSecondTable,
    setIdThirdTable, showOpen,
} from './Rudux/action';

import './aside.scss';


function Aside() {
    const dispatch = useDispatch();

    const {idFirstTable, firstTable} = useSelector(state => state.firstTableReducer);
    const {idSecondTable, secondTable} = useSelector(state => state.secondTableReducer);
    const {idThirdTable, thirdTable} = useSelector(state => state.thirdTableReducer);
    const {showPopUp} = useSelector(state => state.showPopUpReducer);

    React.useEffect(() => {
        dispatch(getTables());
    }, [dispatch]);

    const loadData = () => {
        dispatch(getGisData())
    }

    const showHandle = () => {
        dispatch(clearIdFirst);
        dispatch(clearIdSecond);
        dispatch(clearIdThird);
        dispatch(showOpen);
    };

    const deleteEntry = () => {
        dispatch(deleteGis(idFirstTable));
    };

    const chosenFirst = (id) => {
        !showPopUp && dispatch(setIdFirstTable(id));
    };

    const chosenSecond = (id) => {
        !showPopUp && dispatch(setIdSecondTable(id));
    };

    const chosenThird = (id) => {
        !showPopUp && dispatch(setIdThirdTable(id));
    };


    return (
        <aside>
            <div className={'wrapperFirst'}>
                <div className={'firstTable'}>
                    <Table
                        mock={firstTable}
                        func={chosenFirst}
                        selectedId={idFirstTable}/>
                </div>

                <div className={'blockButtons'}>
                    <ButtonBlock
                        funcOne={loadData}
                        funcTwo={deleteEntry}
                        fontSize={10}
                        buttonOne={{width: 120, height: 28}} textOne={'завантажити дані'}
                        buttonTwo={{width: 120, height: 28}} textTwo={' видалити запис'}/>
                    <ButtonBlock
                        funcOne={showHandle}
                        funcTwo={null}
                        fontSize={10}
                        buttonOne={{width: 140, height: 28}} textOne={'додати забруднення'}
                        buttonTwo={{width: 125, height: 28}} textTwo={'завантажити мару'}/>
                </div>
            </div>

            <div className={'wrapperSecond'}>
                <span>Активні осередки впливу</span>
                <div className={'secondTable'}>
                    <Table mock={secondTable} func={chosenSecond} selectedId={idSecondTable}/>
                </div>
            </div>
            <div className={'wrapperThird'}>
                <span>Населені пункти</span>
                <div className={'thirdTable'}>
                    <Table mock={thirdTable} radius={false} func={chosenThird} selectedId={idThirdTable}/>
                </div>
                <div className={'textBlock'}>
                    <div className={'firstText'}>
                        <div/>
                        <div/>
                        <span>показує обраний кордон досліджуваної території</span>
                    </div>
                    <div className={'secondText'}>
                        <div/>
                        <div/>
                        <span>показує кордон впливу джерел забруднення</span>
                    </div>
                    <div className={'thirdText'}>
                        <div/>
                        <div/>
                        <span>показує населені пункти, які потенційно можуть потрапити в зону впливу</span>
                    </div>
                </div>
                <Button
                    func={null}
                    size={{width: 174, height: 28}}
                    text={'зберегти дані'}
                    fontSize={10}/>
            </div>
        </aside>
    );
}

export default Aside;
