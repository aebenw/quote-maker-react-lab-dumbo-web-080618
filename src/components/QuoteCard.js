import React from 'react';
import { connect } from 'react-redux'
import { removeQuote } from '../actions/quotes'
import { upvoteQuote } from '../actions/quotes'
import { downvoteQuote } from '../actions/quotes'

const QuoteCard = (props) => {
  return(
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote}</p>
          <footer>- author <cite title="Source Title">{props.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            onClick={() => props.upvoteQuote(props.id)}
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            onClick={() => props.downvoteQuote(props.id)}
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            onClick={() => props.removeQuote(props.id)}
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {props.votes}
      </div>
    </div>
  </div>

)}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (id) => {
      dispatch(removeQuote(id));
    },
      upvoteQuote: (id) => {
        dispatch(upvoteQuote(id))
    },
    downvoteQuote: (id) => {
      dispatch(downvoteQuote(id))
    }
  }
}
export default connect(null, mapDispatchToProps)(QuoteCard);
