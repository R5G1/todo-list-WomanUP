import './PageInfo.scss';
import { useState } from 'react';
import DataCalc from './dataCalc';
import ShowImage from './showImage';
import ChangeForm from './changeForm';

/**
 * 2
 * outputting the fill-in form
 */

function PageInfo({ arrayConst, setarray, btnClick }) {
  const text = 'Cписок пуст';

  function remove(id) {
    const newAray = [...arrayConst];
    setarray(
      newAray.filter((item, index) => {
        return item.id != id;
      })
    );
  }

  function completed(id) {
    const newAray = [...arrayConst];
    newAray.map((array, i) => {
      id === array.id ? (array.task === true ? (array.task = false) : (array.task = true)) : array;
    });
    return setarray(newAray);
  }
  const listItems = arrayConst.map((item, index) => (
    <div className="column__content-stylys" key={item.id.toString()}>
      <div className="comment">
        <div
          className="comment-conteiner"
          /**
           * 2.1
           * calculation by date, colour change if date is less than the current date
           */
          style={
            item.task === true
              ? { background: 'rgba(43, 255, 0, 0.322)' }
              : DataCalc(item.dateNow, item.date) === false
              ? { background: 'rgb(204, 44, 44)' }
              : { background: 'rgb(255, 255, 255)' }
          }
        >
          <button
            className="comment-btn btn"
            onClick={() => {
              remove(item.id);
            }}
          >
            Удалить
          </button>
          <button
            className="comment-btn btn"
            onClick={() => {
              completed(item.id);
            }}
          >
            {item.task === true ? 'не завершено' : 'завершено'}
          </button>
          <div className="comment__info">
            <div className="comment__info-text">
              <p>создана: </p>
              <p>{item.dateNow}</p>
            </div>

            <div className="comment__info-text">
              {
                /**
                 * 2.2
                 * image processing , output
                 */
                item.files[0] ? <ShowImage file={item.files[0]} /> : ''
              }
            </div>
            <h3 className="comment__info-text">
              <p>Название задачи</p>
              <p>{item.title}</p>
            </h3>
            <div className="comment__info-text">
              <p
              /**
               * 2.3
               * Changing the fields in the output form
               */
              >
                задачa:{' '}
              </p>
              <ChangeForm
                task={item.name}
                id={item.id}
                arrayConst={arrayConst}
                setarray={setarray}
              />
            </div>

            <div className="comment__info-text">
              <p> дата завершения </p>
              <p style={btnClick ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {item.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="column__content">
      {arrayConst.length > 0 ? listItems : <h4 className="comment-avatar__text-h4">{text}</h4>}
    </div>
  );
}
export default PageInfo;
