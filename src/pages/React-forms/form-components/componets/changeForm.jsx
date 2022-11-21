import React from 'react';
import { useForm } from 'react-hook-form';

function ChangeForm({ task, id, arrayConst, setarray }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(arrayConst);
    const newAray = [...arrayConst];
    newAray.map((array, i) => {
      id === array.id ? (array.name = data.name) : array;
    });
    setarray(newAray);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        style={{
          background: 'rgb(255, 255, 255,0)',
        }}
        type="text"
        {...register('name', { required: true, maxLength: 80 })}
        defaultValue={task}
      />

      <button type="submit">Изменить</button>
    </form>
  );
}

export default ChangeForm;
