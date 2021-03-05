import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PointPopUp from './components/popUp/pointPopUp';

import {changeAreas} from './Rudux/action';
import './section.scss';
import Map from "./map";
import AddGroupPopUp from "./components/add-group-pop-up";
import RemoveGroupPopUp from "./components/remove-group-pop-up";

function Section() {

    const dispatch = useDispatch();

    const {firstTable} = useSelector(state => state.firstTableReducer);
    const {secondTable} = useSelector(state => state.secondTableReducer);
    const {thirdTable} = useSelector(state => state.thirdTableReducer);

    const {groups} = useSelector(state => state.groupsReducer);

    //const {showAreas} = useSelector(state => state.areasReducer)

    const [showAreas, setShowAreas] = React.useState(true);

    const {
        showPopUp, showAddGroupPopUp,
        showRemoveGroupPopUp, section, selectedGroups
    } = useSelector(state => state.showPopUpReducer);

    const changeMapAreas = () => {
        //dispatch(changeAreas(!showAreas));
        setShowAreas(!showAreas);
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
