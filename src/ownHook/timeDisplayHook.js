import {useCallback} from 'react';


const useTiming = () => {

	const timeDisplay = useCallback((g, m, s, ss) => {
		let timer = '';
		if (ss || ss === 0) {

			if (g < 10){
				timer = "0"; 
			} 
			timer += g + ":";

			if (m < 10){
				timer += "0"; 
			} 
			timer += m + ":";

			if (s < 10){
				timer += "0"; 
			} 
			timer += s + ":";
			if (ss < 10){
				timer += "0"; 
			} 
			timer += ss;

		} else {
			if (g < 10){
				timer = "0"; 
			} 
			timer += g + ":";

			if (m < 10){
				timer += "0"; 
			} 
			timer += m + ":";

			if (s < 10){
				timer += "0"; 
			} 
			timer += s;
		}
		return timer;
	}, []);

	return timeDisplay;
} 

export default useTiming;