import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PointPopUp from './components/popUp/pointPopUp';

import {removeAllGroups} from './Rudux/action';
import './section.scss';
import Map from "./map";
import AddGroupPopUp from "./components/add-group-pop-up";
import RemoveGroupPopUp from "./components/remove-group-pop-up";
import Button from "./components/button/button";

function Section() {

    const dispatch = useDispatch();

    const {firstTable} = useSelector(state => state.firstTableReducer);
    const {secondTable} = useSelector(state => state.secondTableReducer);
    const {thirdTable} = useSelector(state => state.thirdTableReducer);

    const {groups} = useSelector(state => state.groupsReducer);

    const [showAreas, setShowAreas] = React.useState(true);

    const {
        showPopUp, showAddGroupPopUp,
        showRemoveGroupPopUp, section, selectedGroups
    } = useSelector(state => state.showPopUpReducer);

    const changeMapAreas = () => {
        setShowAreas(!showAreas);
    }

    const removeAllGroupsHandler = () => {
        dispatch(removeAllGroups(groups));
    }

    return (
        <section>
            <div className={'map'}>
                <Map research={firstTable} pollution={secondTable} cities={thirdTable} showAreas={showAreas}/>
                {showPopUp && <PointPopUp groups={groups} section={section}/>}
                {showAddGroupPopUp && <AddGroupPopUp section={section}/>}
                {showRemoveGroupPopUp && <RemoveGroupPopUp groups={selectedGroups}/>}
            </div>
            <div className={'underMap'}>
                <Button text={'Видалити всі дані'} size={{width: 134, height: 30}} fontSize={10} func={removeAllGroupsHandler}/>
                <label className={'showAreasCheckbox'}>
                    <input type="checkbox" id="showAreas"
                           checked={showAreas}
                           onChange={changeMapAreas}/>
                    Відображати області на мапі
                </label>
            </div>
        </section>
    );
}

export default Section;
