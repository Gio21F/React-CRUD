import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

  const { register,handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    props.addUser(data);
    //limpiar los campos
    e.target.reset();
  }


  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type='text' {...register('name', {
            required: { value:true, message:'Campo requerido'}
          })
        } />
      <div>{errors?.name?.message}</div>
      <label>Username</label>
      <input type='text' {...register('username' , {
            required: { value:true, message:'Campo requerido'}
          })
        } />
      <div>{errors?.username?.message}</div>
      <button>Add new user</button>
      </form>
    </Fragment>
    
  )
}

export default AddUserForm;