import React from 'react';
const NotMatching = (props) => {
    return (
        <>
            <div className='bg-slate-800 text-green-400 mx-2 my-2 my-2 px-2 py-2 rounded-lg text-3xl'>
                <h1 className='flex justify-center ' >{props.x} {props.y} {props.z}</h1>
                <h1 className='text-center' >This is Not Matching</h1>
                
            </div>
        </>
    );

};

export default NotMatching;