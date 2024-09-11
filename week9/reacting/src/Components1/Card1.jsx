import React from 'react'

function Card1({user,handleRemove,index}){
    return (
        <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
                <div className='image w-[4vw] h-[4vw] rounded-full bg-zinc-200 overflow-hidden '>
                    <img className='w-full h-full object-cover' src={user.image} alt="" />
                </div>
                <h1 className=' mt-1 text-xl font-semibold text-center '>{user.name}</h1>
                <h4 className='opacity-60 text-xs font-semibold'>{user.email}</h4>
                <p className=' mt-1 text-center text-xs font-semibold leading-1 traking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est delectus numquam ad.</p>
                <button onClick={()=>handleRemove(index)} className='px-2 py-1 rounded-md bg-red-600 text-xs font-semibold text-white mt-4'>Remove It</button>
        </div>
    )
}
export default Card1;