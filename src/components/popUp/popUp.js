import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Input from './input';
import Button from '../button/button';
import {closeError, postData, showError, showPopUpClose} from '../../Rudux/action';

import './popUp.scss';

function PopUp() {
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.showPopUpReducer);
    const [dataForm, setDataForm] = React.useState({
        absX: '',
        absY: '',
        longitude: '',
        latitude: '',
        radius: '',
        tag: ''
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
        const {absX, absY, longitude, latitude, radius, tag} = dataForm;

        if (absX && absY && longitude && latitude && radius && tag) {
            setDataForm({
                absX: '',
                absY: '',
                longitude: '',
                latitude: '',
                radius: '',
                tag: ''
            });
            dispatch(showPopUpClose);
            dispatch(postData(dataForm));

        } else {
            dispatch(showError);
        }
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
                            text={'Абс. X'}
                            name={'absX'}
                            type={'number'}
                            value={dataForm.absX}
                            func={inputHandler}/>
                        <Input
                            text={'Абс. Y'}
                            name={'absY'}
                            type={'number'}
                            value={dataForm.absY}
                            func={inputHandler}/>
                        <Input
                            text={'Довгота'}
                            name={'longitude'}
                            type={'number'}
                            value={dataForm.longitude}
                            func={inputHandler}/>
                        <Input
                            text={'Широта'}
                            name={'latitude'}
                            type={'number'}
                            value={dataForm.latitude}
                            func={inputHandler}/>
                        <Input
                            text={'Радіус'}
                            name={'radius'}
                            type={'number'}
                            value={dataForm.radius}
                            func={inputHandler}/>
                        <Input
                            text={'Помітка'}
                            name={'tag'}
                            type={'text'}
                            value={dataForm.tag}
                            func={inputHandler}/>
                        <div className={'error'}>{error && 'Всі поля мають бути заповнені'}</div>
                        <div>
                            <Button
                                func={null}
                                text={'додати ділянку забруднення'}
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

export default PopUp;
