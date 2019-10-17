// Code MovieReviews Here
import React from 'react'

const Review = ({display_title, mpaa_rating, headline}) => {
  return (
    <div className='review'>
      <h3>{display_title}</h3>
      <ul>
        <li>
          <h4>{headline}</h4>
        </li>
        <li>
          <h4>{mpaa_rating}</h4>
        </li>
      </ul>
    </div>
  )
}

const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Review)}</div>

export default MovieReviews