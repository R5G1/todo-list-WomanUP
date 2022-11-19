import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PageInfo from './componets/PageInfo';
import './form-style.scss';

function FormContainer() {
  const [arrayConst, setarrayConst] = useState([]);

  const [btnClick, setBtnClick] = useState(false);

  const { register, handleSubmit, watch } = useForm();

  const [image, setImage] = useState('');

  const convert2base64 = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  function onSubmit(data, e) {
    // setarrayConst([...arrayConst, data]);

    if (data.files.length > 0) {
      convert2base64(data.files[0]);
    }

    const file = data.image[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log('Uploaded a file');
    });
    // const newAray = [...arrayConst, data];
    // newAray.map((item) => {
    //   if (item.id.length < 7) item.id = item.id + Date.now().toString();
    // });
    // setarrayConst(newAray);
    // e.target.reset();
  }

  return (
    <div>
      <div className="conteiner">
        {image ? <img src={image} width="450" /> : null}
        <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-main__container">
            <div className="form-main__input-content">
              <label className="form-main__label-input">
                Название задачи:
                <input
                  required
                  className="form-main__input-text"
                  type="text"
                  {...register('name')}
                  placeholder="Название"
                />
              </label>
            </div>
            <div className="form-main__input-content">
              <label className="form-main__label-input">
                Дата завершения:
                <input
                  className="form-main__input-text"
                  type="date"
                  min="2022-10-31"
                  max="2023-01-31"
                  {...register('date')}
                  placeholder="дата"
                  required
                />
              </label>
            </div>
            {!watch('files') || watch('files').length === 0 ? (
              <div className="form-main__input-content">
                <label className="form-main__label-input">
                  Загрузка файла:
                  <input
                    className="form-main__input-text"
                    name="image"
                    type="file"
                    {...register('files')}
                  />
                </label>
              </div>
            ) : (
              <p>{watch('files')[0].name}</p>
            )}
            <div className="form-main__input-content" style={{ display: 'none' }}>
              <label className="form-main__label-input">
                <input
                  className="form-main__input-text"
                  type="text"
                  value={new Date().toLocaleDateString().toString()}
                  {...register('dateNow')}
                />
              </label>
            </div>
            <div className="form-main__input-content" style={{ display: 'none' }}>
              <label className="form-main__label-input">
                <input
                  className="form-main__input-text"
                  type="text"
                  value={false}
                  {...register('task')}
                />
              </label>
            </div>
            <div className="form-main__input-content" style={{ display: 'none' }}>
              <label className="form-main__label-input">
                <input className="form-main__input-text" type="text" {...register('id')} />
              </label>
            </div>
            <button className="form-main__input-btn btn" type="submit">
              Добавить
            </button>
          </div>
        </form>
        <div className="statistics">
          <div className="statistics__quantity">Количество задач: {arrayConst.length}</div>
        </div>
      </div>
      <div className="form-card">
        <div>
          <PageInfo arrayConst={arrayConst} setarray={setarrayConst} btnClick={btnClick} />
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
