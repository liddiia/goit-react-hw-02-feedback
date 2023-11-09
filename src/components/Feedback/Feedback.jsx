import css from "./Feedback.module.css"
export const FeedbackOptions = ({onLeaveFeedback, options}) =>{
	return(
		<ul className={css.buttonList}>
		{options.map(option => {
			return(

                <li className={css.item} key={option}>
                    <button type="button" className={css.feedbackButton} onClick={()=>onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            )
		})}
		</ul>
	)
}