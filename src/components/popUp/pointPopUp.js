import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Input from './input';
import Button from '../button/button';
import {closeError, addNewPoint, showError, showPopUpClose} from '../../Rudux/action';

import './popUp.scss';

function PointPopUp({groups, section}) {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.showPopUpReducer);
    const [dataForm, setDataForm] = React.useState({
        x: '',
        y: '',
        groupId: ''
    });
    const [roll, setRoll] = React.useState(false);
    const [turnBack, setTurnBack] = React.useState(false);

    const showClose = () => {
        dispatch(showPopUpClose);
    };
    const turnHandle = () => {
        setRoll(false);
        setTurnBack(!turnBack);
    };

    const rollHandle = () => {
        setRoll(!roll);
        setTurnBack(false);
    };

    const inputHandler = (e) => {
        const tag = e.target.name === 'tag' ? e.target.value : Number(e.target.value);
        dispatch(closeError);
        setDataForm({...dataForm, [e.target.name]: tag});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const {x, y, groupId} = dataForm;

        if (x && y && groupId) {
            setDataForm({
                x: '',
                y: '',
                groupId: ''
            });
            dispatch(showPopUpClose);
            dispatch(addNewPoint(dataForm));

        } else {
            dispatch(showError);
        }
    };

    const handleChange = ({ target }) => {
        dataForm.groupId = target.value;
        setDataForm({...dataForm,[dataForm.groupId]:target.value});
    };

    return (
        <div className={`popUp ${turnBack ? 'activePopUp' : ''} ${roll ? 'activeRollDown' : ''}`}>
            <div className={'windowControl'}>
                <div className={'wrapperControl'}>
                    <div className="roll" onClick={rollHandle}/>
                    <div className="turnBack" onClick={turnHandle}/>
                    <div className="close" onClick={showClose}/>
                </div>
            </div>
            {!roll && (<>
                <div className="popUp__title">
					<span>
					Позиціонування
				</span>
                </div>
                <div className={`popUp__body `}>
                    <form className="wrapper" onSubmit={submitHandler}>
                        <Input
                            text={'Довгота'}
                            name={'x'}
                            type={'number'}
                            value={dataForm.x}
                            func={inputHandler}/>
                        <Input
                            text={'Широта'}
                            name={'y'}
                            type={'number'}
                            value={dataForm.y}
                            func={inputHandler}/>
                        <select value={dataForm.groupId}  onChange={handleChange}>
                            <option>Виберіть групу</option>
                            {
                                groups.filter((group)=> group.section === section)
                                    .map((group)=>
                                        <option value={group.id} >{`${group.id}. ${group.tag}`}</option>)
                            }
                        </select>
                        <div className={'error'}>{error && 'Всі поля мають бути заповнені'}</div>
                        <div>
                            <Button
                                func={null}
                                text={'Додати точку'}
                                size={{width: 262, height: 32}}
                                fontSize={10}/>
                        </div>
                    </form>
                </div>
            </>)
            }
        </div>
    );

}

export default PointPopUp;
