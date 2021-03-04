import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeRemoveGroupPopUp, removeGroup, showError} from "../../Rudux/action";
import Button from "../button/button";

const RemoveGroupPopUp = ({groups}) => {
  const dispatch = useDispatch();
  const {error} = useSelector(state => state.showPopUpReducer);

  const [dataForm, setDataForm] = React.useState({
    groupId: ''
  });

  const [rollDown, setRollback] = React.useState(false);
  const [turnBack, setTurnBack] = React.useState(false);

  const closePopUp = () => {
    dispatch(closeRemoveGroupPopUp);
  };

  const rollDownHandler = () => {
    setRollback(!rollDown);
    setTurnBack(false);
  }

  const turnBackHandler = () => {
    setRollback(false);
    setTurnBack(!turnBack);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const {groupId} = dataForm;

    if (groupId) {
      dispatch(closeRemoveGroupPopUp);
      dispatch(removeGroup(groupId));
    } else {
      dispatch(showError);
    }
  };

  const handleChange = ({target}) => {
    dataForm.groupId = target.value;
    setDataForm({...dataForm, [dataForm.groupId]: target.value});
  };

  return (
      <div className={`popUp ${turnBack ? 'activePopUp' : ''} ${rollDown ? 'activeRollDown' : ''}`}>
        <div className={'windowControl'}>
          <div className={'wrapperControl'}>
            <div className="roll" onClick={rollDownHandler}/>
            <div className="turnBack" onClick={turnBackHandler}/>
            <div className="close" onClick={closePopUp}/>
          </div>
        </div>
        {!rollDown && (<>
          <div className="popUp__title">
					<span>
					Видалити групу
				</span>
          </div>
          <div className={`popUp__body `}>
            <form className="wrapper" onSubmit={submitHandler}>
              <select value={dataForm.groupId} onChange={handleChange}>
                <option>Виберіть групу</option>
                {
                  groups.map((group) => <option value={group.id}>{`${group.id}. ${group.tag}`}</option>)
                }
              </select>
              <div className={'error'}>{error && 'Всі поля мають бути заповнені'}</div>
              <div>
                <Button
                    func={null}
                    text={'Видалити'}
                    size={{width: 262, height: 32}}
                    fontSize={10}/>
              </div>
            </form>
          </div>
        </>)
        }
      </div>)
}

export default RemoveGroupPopUp;
