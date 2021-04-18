import React from 'react';

const FullContext = React.createContext({
	
	//to clock 
	addAlarms: ()=> {},
	alarms:  [],
	time: '',

	//to countDown
	addCountdowns: ()=> {},
	countdowns: [],

	//to stopwatch
	addStopwatch: ()=> {},
	addStopLists: ()=> {},
	changePlay: ()=> {},
	playState: false,
	stopwatch: '',
	stopList: [],
	startTimeSW: new Date(),
	setStartTimeSW: ()=> {},

	// to all
	timing: ()=> {}
});

export default FullContext;