import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

  const { register,handleSubmit, formState: { errors }, setValue} = useForm({
    defaultValues: props.currentUser
  });
  //Identificar
  setValue('name',props.currentUser.name);
  setValue('username',props.currentUser.username);

  const onSubmit = (data, e) => {
    console.log(data);
    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);
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
      <button>Edit user</button>
      </form>
    </Fragment>
    
  )
}

export default EditUserForm;