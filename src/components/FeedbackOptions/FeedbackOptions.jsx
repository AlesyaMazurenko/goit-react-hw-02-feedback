import React from "react";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
         
            <ul className='Feedback__list'>
                {Object.keys(options).map(key =>
                (
                    <li className='Feedback__item'>
                        <button type="button" key={key} onClick={() => onLeaveFeedback(key)} className='Feedback_btn'>{key}</button>
                    </li>
                )
                )}
                   
                    {/* <li className='Feedback__item'>
                        <button type="button" onClick={onNeutral} className='Feedback_btn'>Neutral</button>
                    </li>
                    <li className='Feedback__item'>
                        <button type="button" onClick={onBad} className='Feedback_btn'>Bad</button>
                    </li> */}
                </ul>        
    )
}