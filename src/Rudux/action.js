import {types} from './types';

export const showOpen = ({
    type: types.SHOW_POPUP
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

export const addTableRow = (data) => ({
    type: types.ADD_ROW_FIRST_TABLE,
    payload: data
});


export const deleteTableRow = (id) => ({
    type: types.DELETE_ROW_FIRST_TABLE,
    payload: id
});

export const setIdFirstTable = (id) => ({
    type: types.SET_ID_FIRST_TABLE,
    payload: id
});

export const setIdSecondTable = (id) => ({
    type: types.SET_ID_SECOND_TABLE,
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

//Async
export const getGisData = () => async (dispatch) => {
    try {
        fetchAndParse(dispatch, '/gis/all', types.PUT_FIRST_TABLE)
    } catch (error) {
        console.log(error);
    }
}

export const getTables = () => async (dispatch) => {
    try {
        fetchAndParse(dispatch, '/gis/all', types.PUT_FIRST_TABLE);
        fetchAndParse(dispatch, '/influence/all', types.PUT_SECOND_TABLE);
        fetchAndParse(dispatch, '/city/all', types.PUT_THIRD_TABLE);

    } catch (error) {
        console.log(error);
    }
};

function fetchAndParse(dispatch, url, type) {
    fetch(url)
        .then(async (data) => {
            if (data.ok) {
                const json = await data.json();
                dispatch({type, payload: json});
            }
        }).catch(error => {
        console.log('Connection error', error);
        dispatch({type, payload: []});
    });
}

export const postData = (body) => async (dispatch) => {
    const {longitude, latitude, ...rest} = body;
    const newRow = {...rest, id: 0, point: {x: longitude, y: latitude}};

    try {
        const data = await fetch('/gis', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(newRow)
        });
        const dataResponse = await data.json();
        dispatch(postSave(false));
        dispatch(addTableRow(dataResponse));
    } catch (error) {
        console.log(error);
    }
};


export const deleteGis = (id) => async (dispatch) => {
    try {
        await fetch(`/gis/${id}`, {method: 'delete'});
        dispatch(deleteTableRow(id));
    } catch (error) {
        console.log(error);
    }
};
