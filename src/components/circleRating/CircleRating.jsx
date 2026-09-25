import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import './CircleRatingStyle.scss'

const CircleRating = ({ rating, textColor }) => {
  console.log(rating, 'rating')
  const safeRating = Number(rating) || 0

  return (
    <div className='circleRating'>
      <CircularProgressbar
        value={safeRating}
        maxValue={10}
        text={safeRating.toFixed(1)}
        styles={buildStyles({
          textColor: textColor || '#000000',
          pathColor:
            safeRating < 5 ? 'red' : safeRating < 7 ? 'orange' : 'green',
          trailColor: 'rgba(255,255,255,0.12)',
          backgroundColor: 'transparent',
        })}
      />
    </div>
  )
}

export default CircleRating
