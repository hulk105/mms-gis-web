import {types} from './types';
import {Group} from "../model/group.js";

export const showOpen = (section) => ({
    type: types.SHOW_POPUP,
    payload: section
});

export const showPopUpClose = ({
    type: types.SHOW_CLOSE
});

export const showError = ({
    type: types.SHOW_ERROR
});

export const closeError = ({
    type: types.CLOSE_ERROR
});

export const showAddGroupPopUp = (section) => ({
    type: types.SHOW_ADD_GROUP_POP_UP,
    payload: section
});

export const closeAddGroupPopUp = ({
    type: types.CLOSE_ADD_GROUP_POP_UP
});

export const changeAreas = (showAreas) => ({
    type: types.CHANGE_AREAS,
    payload: showAreas
});

export const showRemoveGroupPopUp = (section, groups) => ({
    type: types.SHOW_REMOVE_GROUP_POP_UP,
    payload: [section, groups]
})

export const closeRemoveGroupPopUp = ({
    type: types.CLOSE_REMOVE_GROUP_POP_UP
})

export const addTableRow = (data) => ({
    type: types.ADD_ROW_FIRST_TABLE,
    payload: data
});

export const deleteRowFirstTable = (id) => ({
    type: types.DELETE_ROW_FIRST_TABLE,
    payload: id
});

export const setIdFirstTable = (id) => ({
    type: types.SET_ID_FIRST_TABLE,
    payload: id
});

export const deleteRowSecondTable = (id) => ({
    type: types.DELETE_ROW_SECOND_TABLE,
    payload: id
});

export const setIdSecondTable = (id) => ({
    type: types.SET_ID_SECOND_TABLE,
    payload: id
});

export const deleteRowThirdTable = (id) => ({
    type: types.DELETE_ROW_THIRD_TABLE,
    payload: id
});

export const setIdThirdTable = (id) => ({
    type: types.SET_ID_THIRD_TABLE,
    payload: id
});

export const clearIdFirst = ({
    type: types.CLEAR_SELECTED_ID_FIRST
});

export const clearIdSecond = ({
    type: types.CLEAR_SELECTED_ID_SECOND
});


export const clearIdThird = ({
    type: types.CLEAR_SELECTED_ID_THIRD
});

export const postSave = (bool) => ({
    type: types.POST_SAVE,
    payload: bool
})

export const getTables = () => async (dispatch) => {
    try {
        fetchAndParse(dispatch, '/group?section=RESEARCH', types.PUT_FIRST_TABLE);
        fetchAndParse(dispatch, '/group?section=INFLUENCE', types.PUT_SECOND_TABLE);
        fetchAndParse(dispatch, '/group?section=CITIES', types.PUT_THIRD_TABLE);
    } catch (error) {
        console.log(error);
    }
};

function fetchAndParse(dispatch, url, type) {
    fetch(url).then(async (data) => {
            if (data.ok) {
                const groupsJSON = await data.json();
                const groups = groupsJSON.map(groupsJSON => new Group(groupsJSON));
                dispatch({type, payload: groups});
            } else {
                dispatch({type, payload: []});
            }
        })
        .catch(error => {
            console.log('Connection error', error);
            dispatch({type, payload: []});
        });
}

export const addNewPoint = (pointInfo) => async (dispatch) => {
    try {
        await fetch('/point', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(pointInfo)
        });
        dispatch(getTables());
    } catch (error) {
        console.log(error);
    }
};

export const deleteSelectedPoint = (id) => async (dispatch) => {
    try {
        await fetch(`/point/${id}`, {method: 'delete'});
        dispatch(getTables());
    } catch (error) {
        console.log(error);
    }
};

export const getAllGroups = () => async (dispatch) => {
    fetchAndParse(dispatch,'/group/all', types.PUT_GROUPS);
}

export const addNewGroup = (groupInfo) => async (dispatch) => {
    try {
        await fetch('/group',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(groupInfo)
        })
        dispatch(getTables());
    } catch (error) {
        console.log(error);
    }
}

export const removeGroup = (id) => async (dispatch) => {
    try {
        await fetch(`/group/${id}`, {method: 'delete'});
        dispatch(getTables());
    } catch (error) {
        console.log(error);
    }
}

export const removeAllGroups = (groups) => async (dispatch) => {
    try {
        for(let i = 0; i < groups.length; i++){
            await fetch(`/group/${groups[i].id}`, {method: 'delete'});
        }
        dispatch(getTables());
    }catch (error){
        console.log(error);
    }
}
