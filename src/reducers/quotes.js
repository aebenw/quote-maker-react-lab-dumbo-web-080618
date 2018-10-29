
export default (state = [], action) => {
  switch(action.type){
  case "ADD_QUOTE":
    return [...state, action.quote];

  case "REMOVE_QUOTE":
    const filtered = state.filter(quote => quote.id !== action.quoteId)
    return[...filtered];

  case "UPVOTE_QUOTE":
    let upQuote = state.find(quote => quote.id === action.quoteId)
    // let idx = state.indexOf(upQuote)
    upQuote.votes += 1
    // let changed = state[idx] = upQuote
    // debugger
    return[...state];

  case "DOWNVOTE_QUOTE":
    let downQuote = state.find(quote => quote.id === action.quoteId)
    downQuote.votes > 0 ? downQuote.votes -= 1 : downQuote.votes = 0;
    // downQuote.votes -= 1
    return[...state];

    default:
    return state;
  }
}
