import './PageInfo.scss';
import { useState } from 'react';
import DataCalc from './dataCalc';

function PageInfo({ arrayConst, setarray, btnClick }) {
  const text = 'Cписок пуст';
  const [btnCompleted, setBtnCompleted] = useState(true);

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
              <p>задачa: </p>
              <div className="form-main__input-content">
                <label className="form-main__label-input">
                  <textarea
                    style={{
                      maxWidth: '200px',
                      minWidth: '150px',
                      maxHeight: '100px',
                      background: 'rgb(255, 255, 255,0)',
                    }}
                    required
                    maxLength={'45'}
                    className="form-main__input-text"
                    type="text"
                    defaultValue={item.name}
                  />
                </label>
              </div>
            </div>

            <div className="comment__info-text">
              <p>{DataCalc(item.dateNow, item.date).toString()}</p>

              <p> дата завершения </p>
              <p style={btnClick ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {item.date}
              </p>
              <p>{item.newPrice}</p>
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
