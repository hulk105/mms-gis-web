import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ButtonBlock from './components/button/buttonBlock';
import Table from './components/table/table';

import {
    clearIdFirst,
    clearIdSecond,
    clearIdThird,
    deleteSelectedPoint,
    getAllGroups,
    getTables,
    setIdFirstTable,
    setIdSecondTable,
    setIdThirdTable,
    showAddGroupPopUp,
    showOpen, showRemoveGroupPopUp,
} from './Rudux/action';

import './aside.scss';

const RESEARCH = 'RESEARCH';
const INFLUENCE = 'INFLUENCE';
const CITIES = 'CITIES';

function Aside() {
    const dispatch = useDispatch();

    const {idFirstTable, firstTable} = useSelector(state => state.firstTableReducer);
    const {idSecondTable, secondTable} = useSelector(state => state.secondTableReducer);
    const {idThirdTable, thirdTable} = useSelector(state => state.thirdTableReducer);
    const {showPopUp} = useSelector(state => state.showPopUpReducer);

    React.useEffect(() => {
        dispatch(getTables());
    }, [dispatch]);

    const showHandler = () => {
        dispatch(clearIdFirst);
        dispatch(clearIdSecond);
        dispatch(clearIdThird);
        dispatch(getAllGroups());
    };

    const showAddPointPopUpForResearchSection = () => {
        showHandler();
        dispatch(showOpen(RESEARCH));
    }

    const showAddPointPopUpForInfluenceSection = () => {
        showHandler();
        dispatch(showOpen(INFLUENCE));
    }

    const showAddPointPopUpForCitiesSection = () => {
        showHandler();
        dispatch(showOpen(CITIES));
    }

    const showAddGroupPopUpForResearchSection = () => {
        dispatch(showAddGroupPopUp(RESEARCH));
    }

    const showAddGroupPopUpForInfluenceSection = () => {
        dispatch(showAddGroupPopUp(INFLUENCE));
    }

    const showAddGroupPopUpForCitiesSection = () => {
        dispatch(showAddGroupPopUp(CITIES));
    }

    const getGroupsBySection = (section) => {

        let groups = [];

        switch (section) {
            case 'RESEARCH':
                groups =  firstTable;
                break;
            case 'INFLUENCE':
                groups = secondTable;
                break;
            case 'CITIES':
                groups = thirdTable;
                break;
        }

        return groups;
    }

    const showRemoveGroupPopUpForResearchSection = () => {
        let groups = getGroupsBySection(RESEARCH);
        dispatch(showRemoveGroupPopUp(RESEARCH, groups));
    }

    const showRemoveGroupPopUpForInfluenceSection = () => {
        let groups = getGroupsBySection(INFLUENCE);
        dispatch(showRemoveGroupPopUp(INFLUENCE, groups));
    }

    const showRemoveGroupPopUpForCitiesSection = () => {
        let groups = getGroupsBySection(CITIES);
        dispatch(showRemoveGroupPopUp(CITIES, groups));
    }

    const deleteSelectedPointFromTheResearchTable = () => {
        if (idFirstTable) {
            dispatch(deleteSelectedPoint(idFirstTable));
        }
    };

    const deleteSelectedPointFromTheInfluenceTable = () => {
        if (idSecondTable) {
            dispatch(deleteSelectedPoint(idSecondTable));
        }
    };

    const deleteSelectedPointFromTheCitiesTable = () => {
        if (idThirdTable) {
            dispatch(deleteSelectedPoint(idThirdTable));
        }
    };

    const chooseThePointInTheFirstTable = (id) => {
        !showPopUp && dispatch(setIdFirstTable(id));
    };

    const chooseThePointInTheSecondTable = (id) => {
        !showPopUp && dispatch(setIdSecondTable(id));
    };

    const chooseThePointInTheThirdTable = (id) => {
        !showPopUp && dispatch(setIdThirdTable(id));
    };

    return (
        <aside>
            <div className={'wrapperFirst'}>
                <span> Області дослідження</span>
                <div className={'firstTable'}>
                    <Table
                        mock={firstTable}
                        func={chooseThePointInTheFirstTable}
                        selectedId={idFirstTable}/>
                </div>

                <div className={'blockButtons'}>
                    <ButtonBlock
                        funcOne={showAddGroupPopUpForResearchSection}
                        funcTwo={showRemoveGroupPopUpForResearchSection}
                        fontSize={9}
                        buttonOne={{width: 134, height: 30}} textOne={'Додати дослідження'}
                        buttonTwo={{width: 134, height: 30}} textTwo={'Видалити дослідження'}/>
                    <ButtonBlock
                        funcOne={showAddPointPopUpForResearchSection}
                        funcTwo={deleteSelectedPointFromTheResearchTable}
                        fontSize={9}
                        buttonOne={{width: 134, height: 30}} textOne={'Додати точку'}
                        buttonTwo={{width: 134, height: 30}} textTwo={'Видалити точку'}/>
                </div>
            </div>

            <div className={'wrapperSecond'}>
                <span>Активні осередки впливу</span>
                <div className={'secondTable'}>
                    <Table mock={secondTable} func={chooseThePointInTheSecondTable} selectedId={idSecondTable}/>
                </div>

                <div className={'blockButtons'}>
                    <ButtonBlock
                        funcOne={showAddGroupPopUpForInfluenceSection}
                        funcTwo={showRemoveGroupPopUpForInfluenceSection}
                        fontSize={9}
                        buttonOne={{width: 134, height: 30}} textOne={'Додати катаклізм'}
                        buttonTwo={{width: 134, height: 30}} textTwo={'Видалити катаклізм'}/>
                    <ButtonBlock
                        funcOne={showAddPointPopUpForInfluenceSection}
                        funcTwo={deleteSelectedPointFromTheInfluenceTable}
                        fontSize={9}
                        buttonOne={{width: 134, height: 30}} textOne={'Додати точку'}
                        buttonTwo={{width: 134, height: 30}} textTwo={'Видалити точку'}/>
                </div>
            </div>
            <div className={'wrapperThird'}>
                <span>Населені пункти</span>
                <div className={'thirdTable'}>
                    <Table mock={thirdTable} radius={false} func={chooseThePointInTheThirdTable} selectedId={idThirdTable}/>
                </div>

                <div className={'blockButtons'}>
                    <ButtonBlock
                        funcOne={showAddGroupPopUpForCitiesSection}
                        funcTwo={showRemoveGroupPopUpForCitiesSection}
                        fontSize={9}
                        buttonOne={{width: 134, height: 30}} textOne={'Додати місто'}
                        buttonTwo={{width: 134, height: 30}} textTwo={'Видалити місто'}/>
                    <ButtonBlock
                        funcOne={showAddPointPopUpForCitiesSection}
                        funcTwo={deleteSelectedPointFromTheCitiesTable}
                        fontSize={9}
                        buttonOne={{width: 134, height: 30}} textOne={'Додати точку'}
                        buttonTwo={{width: 134, height: 30}} textTwo={'Видалити точку'}/>
                </div>
            </div>
            <div className={'textBlock'}>
                <div className={'firstText'}>
                    <div/>
                    <span>показує обраний кордон досліджуваної території</span>
                </div>
                <div className={'secondText'}>
                    <div/>
                    <span>показує кордон впливу джерел забруднення</span>
                </div>
                <div className={'thirdText'}>
                    <div/>
                    <span>показує населені пункти, у яких потенційно має бути безпечно</span>
                </div>
                <div className={'fourthText'}>
                    <div/>
                    <span>показує населені пункти, які потенційно можуть потрапити в зону впливу</span>
                </div>
            </div>
        </aside>
    );
}

export default Aside;
