import React from 'react';
import './Listing.css';

const listing = (props) => {
    const listing = props.listings.map((list, idx) => {
        return <li key={idx}
                    className={list.isDone ? 'Done' : ''} 
                    onClick={() => props.isDoneHandler(idx)}>
                    {list.isDone ? <span className="check">Done</span> : ''} 
                    {list.value} 
                    <span className="close" onClick={(e) => props.removeListHandler(e, idx)}>x</span>
                </li>
    })

    const toDo = (
        <ul className="Listing">
            {listing}
        </ul>
    )

    return props.listings.length !== 0 ? toDo : <h1 style={{paddingBottom:'25px', color:'#f44336'}}>Start Your Schedule Now!</h1> 
}

export default listing;
