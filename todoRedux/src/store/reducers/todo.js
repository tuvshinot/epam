import { ADD_TODO, REMOVE_TODO, IS_DONE_TOGGLE } from "../actionTypes";

export default (state = { Listing: [] }, action) => {
  let listing = null;

  switch (action.type) {
    case ADD_TODO:
      let newList = {isDone:false, value:action.value}
      return { Listing: state.Listing.concat(newList) };
    case REMOVE_TODO:
      listing = state.Listing.slice();
      listing.splice(action.idx, 1);
      return { Listing : listing };
    case IS_DONE_TOGGLE:
      listing = state.Listing.slice();
      listing[action.idx].isDone = !listing[action.idx].isDone;
      return {Listing: listing };
    default:
      return state;
  }
};
