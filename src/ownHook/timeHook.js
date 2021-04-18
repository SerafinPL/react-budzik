import {} from 'react';


const useShowTime(g,m,s,ss){

	let timer = '';
	if (ss) {

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

}



//const timer = useShowTime(g,m,s,ss);