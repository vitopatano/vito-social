import React, { useContext, useState } from 'react';
import './style.css'
import { AppContext } from '../../context/appcontext'
import { Tpost } from '../../types.ts/commontypes';


function Cards() {
    const context = useContext(AppContext)
    const jsonData = context?.jsonData





    return (
        <div className='gg'>
            {jsonData && jsonData?.map((item) => (
                <div className='carta'>
                    <div className='titolo'>{item.title}</div>
                    <div className='body'>{item.body}</div>
                    <div className='like'>
                        <div className='likes'>{item.reactions.likes} like</div>
                        <div className='comments'>{item.reactions.dislikes}</div>
                    </div>
                </div>

            ))}
        </div>
        // <div className='cards'>
        //     <div className='title'>{jsonData.titolo}</div>
        //     <div className='body'>Contenuto della carta</div>
        //     <div className='likes'>
        //         <div className='like'>100</div>
        //         <div className='comments'>100</div>
        //     </div>
        // </div>
    );
}

export default Cards;