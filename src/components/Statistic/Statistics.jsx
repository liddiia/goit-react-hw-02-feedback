 import css from "./Statistics.module.css"
 export const StatisticsList = ({good, neutral, bad, total, positivePercentage})=>{
	return (
		<dir className={css.statisticsCont}>
		<h2 className={css.title}>Statistics</h2>
			<ul className={css.list}>
 				<li className={css.item}>Good: <span>{good}</span></li>
 				<li className={css.item}>Neuteral: <span>{neutral}</span></li>
 				<li className={css.item}>Bad: <span>{bad}</span></li>
 				<li className={css.item}>Total: <span>{total}</span></li>
 				<li className={css.item}>Positive percentage: <span>{positivePercentage} %</span></li>
			</ul>
		</dir>
 	)
 }
