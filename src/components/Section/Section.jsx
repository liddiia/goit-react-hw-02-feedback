import css from "./Section.module.css"
import { FeedbackOptions } from "../Feedback/Feedback";
import { Notification } from "./Notification";
import { StatisticsList } from "../Statistic/Statistics";
export const Section = ({state, onLeaveFeedback,countTotalFeedback,countPositiveFeedbackPercentage})=>{
	return(
		<section className={css.container}>
			<h1 className={css.titel}>Pleace leave feedback</h1>
			<div >
				<FeedbackOptions
				onLeaveFeedback={onLeaveFeedback}
				options={Object.keys(state)}
				/>
			</div>
			{countTotalFeedback>0?
				<StatisticsList
				good={state.good}
				neutral={state.neutral}
				bad={state.bad}
				total={countTotalFeedback}
				positivePercentage={countPositiveFeedbackPercentage}/>:<Notification/>}
			
		</section>
	)
}
