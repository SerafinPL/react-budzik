import React, {useState, useRef, useEffect} from 'react';

import classes from './countOutDays.module.css';

import Button from "../Button/Button.js";

const CountOut = props => {
	const refDay = useRef(null);
	const [day, setDay] = useState(1);
	const [month, setMonth] = useState(1);
	const [year, setYear] = useState(2021);
	const [maxDay, setMaxDay] = useState(31);
	const [countingDay, setCountingDay] = useState(0);

	
	const howManyIn02 = (yearNumber) => {
		if (yearNumber % 4 === 0){
				if (yearNumber % 100 === 0){
					if (yearNumber % 400 === 0){setMaxDay(29);} 
					else {setMaxDay(28);}
				} else {setMaxDay(29);}
			} else {setMaxDay(28);}
	}
	

	const changeDay = event => {
		setDay(event.target.value);
	}

	const changeMonth = event => {
		setMonth(event.target.value);
		const m = event.target.value;
		if (m === '1' || m === '3' || m === '5' || m === '7' || m === '8' || m === '10' || m === '12'){
			setMaxDay(31);
		} else if (m === '4' || m === '6' || m === '9' || m === '11') {
			setMaxDay(30);
		} else if (m ===  '2') {
			howManyIn02(year, month);
		}
	}

	const changeYear = event => {
		setYear(event.target.value);
	}
	

	useEffect(() => {
		const m = month;
		if (m === '1' || m === '3' || m === '5' || m === '7' || m === '8' || m === '10' || m === '12'){
			setMaxDay(31);
		} else if (m === '4' || m === '6' || m === '9' || m === '11') {
			setMaxDay(30);
		} else if (m ===  '2') {
			howManyIn02(year, month);
		}
	},[year]);

	useEffect(() => {
		if (refDay.current.value > maxDay) {
			setDay(maxDay);
		}
	},[maxDay]);

	
	
	const count = () => {
		const chosenDate = new Date().setFullYear(year, month, day);
		
		if ( chosenDate > new Date() ) {
			const days = Math.floor(new Date(chosenDate - new Date()) / 86400000);
			const months = days / 30;
			const years = months / 12
			setCountingDay(`zostało ${days} dni to około ${months.toFixed(2)} miesięcy i w przybliżeniu ${years.toFixed(2)} lat.`);

			
		} else {
			const days = Math.floor(new Date(new Date() - chosenDate) / 86400000);
			const months = days / 30;
			const years = months / 12
			setCountingDay(`mineło ${days} dni to około ${months.toFixed(2)} miesięcy i w przybliżeniu ${years.toFixed(2)} lat.`);
		}
		
	}


	return (
			<div className={classes.main}>
				<input ref={refDay} type='number' min='1' max={maxDay} onChange={changeDay} value={day}/>
				<select name="month" onChange={changeMonth} value={month}>
					  <option value="1">Styczeń</option>
					  <option value="2">Luty</option>
					  <option value="3">Marzec</option>
					  <option value="4">Kwiecień</option>
					  <option value="5">Maj</option>
					  <option value="6">Czerwiec</option>
					  <option value="7">Lipiec</option>
					  <option value="8">Sierpień</option>
					  <option value="9">Wrzesień</option>
					  <option value="10">Październik</option>
					  <option value="11">Listopad</option>
					  <option value="12">Grudzień</option>
				</select>
				<input type='number' min='1970' onChange={changeYear} value={year}/>
				<Button func={count}>Oblicz</Button>

				<h3>{countingDay}</h3>


			</div>
			
		);
}

export default CountOut;