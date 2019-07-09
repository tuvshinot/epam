import React from 'react'

export default function ListingItem(props) {
    return (
        <li key={props.idx}
            className={props.list.isDone ? 'Done' : ''} 
            onClick={() => props.isDoneHandler(props.idx)}>
            {props.list.isDone ? <span className="check">Done</span> : ''} 
            {props.list.value} 
            <span className="close" onClick={(e) => props.removeListHandler(e, props.idx)}>x</span>
        </li>
    )
}
