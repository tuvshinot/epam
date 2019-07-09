import React from 'react';
import ListingItem from './ListingItem/ListingItem';
import './Listing.css';

const listing = (props) => {
    const listing = props.listings.map((list, idx) => {
        return <ListingItem idx={idx}
            list={list}
            isDoneHandler={props.isDoneHandler}
            removeListHandler={props.removeListHandler} />
    })

    const toDo = (
        <ul className="Listing">
            {listing}
        </ul>
    )

    return props.listings.length !== 0 ? toDo : <h1 style={{ paddingBottom: '25px', color: '#f44336' }}>Start Your Schedule Now!</h1>
}

export default listing;
