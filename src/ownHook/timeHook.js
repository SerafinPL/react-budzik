

const useShowTime = (g,m,s,ss) => {

	let timer = '';
	if (ss) {

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
	console.log(timer);
	return timer;

}


export default useShowTime;
//const timer = useShowTime(g,m,s,ss);