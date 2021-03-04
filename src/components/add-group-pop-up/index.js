import React from 'react';
import {useDispatch} from 'react-redux';
import {addNewGroup, closeError, showError, showPopUpClose} from "../../Rudux/action";
import Input from "../popUp/input";
import Button from "../button/button";

const AddGroupPopUp = ({section}) => {
  const dispatch = useDispatch();

  const [dataForm, setDataForm] = React.useState({
    tag: '',
    section: section
  });

  const [rollDown, setRollback] = React.useState(false);
  const [turnBack, setTurnBack] = React.useState(false);

  const inputHandler = (e) => {
    dispatch(closeError);
    setDataForm({...dataForm, [e.target.name]: e.target.value});
  };

  const closeGroupPopUp = () => {
    dispatch(showPopUpClose);
  };
  const turnBackHandler = () => {
    setRollback(false);
    setTurnBack(!turnBack);
  };

  const rollDownHandler = () => {
    setRollback(!rollDown);
    setTurnBack(false);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const {tag, section} = dataForm;

    if (tag && section) {
      setDataForm({
        tag: '',
        section: ''
      });
      dispatch(showPopUpClose);
      dispatch(addNewGroup(dataForm));

    } else {
      dispatch(showError);
    }
  };

  return (
      <div className={`popUp ${turnBack ? 'activePopUp' : ''} ${rollDown ? 'activeRollDown' : ''}`}>
        <div className={'windowControl'}>
          <div className={'wrapperControl'}>
            <div className="roll" onClick={rollDownHandler}/>
            <div className="turnBack" onClick={turnBackHandler}/>
            <div className="close" onClick={closeGroupPopUp}/>
          </div>
        </div>
        {!rollDown && (<>
          <div className="popUp__title">
					<span>
					Група
				</span>
          </div>
          <div className={`popUp__body `}>
            <form className="wrapper" onSubmit={submitHandler}>
              <Input
                  text={'Тег'}
                  name={'tag'}
                  type={'text'}
                  value={dataForm.tag}
                  func={inputHandler}/>
              <div className={'error'}>{error && 'Всі поля мають бути заповнені'}</div>
              <div>
                <Button
                    func={null}
                    text={'Додати'}
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

export default AddGroupPopUp;
