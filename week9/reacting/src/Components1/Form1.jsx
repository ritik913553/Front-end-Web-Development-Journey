import React from 'react'
import { useForm } from 'react-hook-form';

function Form1({handleFormSubmitData}){

    const {register,handleSubmit,reset}=useForm();
    const handleFormSubmit = (data) => {
        handleFormSubmitData(data);
        reset();
    }
    return (
        <div className='mt-10 flex justify-center'>
            <form className='flex gap-10' action="" onSubmit={handleSubmit(handleFormSubmit)}>
                <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Name' />
                <input  {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='email' />
                <input  {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='image url' />
                <input className='px-5 py-1 rounded-md bg-blue-500 cursor-pointer text-white font-semibold' type="submit" />
            </form>
        </div>
    )
}
export default Form1;