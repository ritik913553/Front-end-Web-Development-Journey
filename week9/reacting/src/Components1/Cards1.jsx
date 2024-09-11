import React from 'react'
import Card1 from './Card1'
function Cards1({users , handleRemove}){
    return (
        <div className='w-full max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
            {users.map((user,index)=>{
                return <Card1 handleRemove={handleRemove} key={index} user={user} index={index} />
            })}
            
        </div>
    )
}
export default Cards1;