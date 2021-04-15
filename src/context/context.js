import React from 'react';

const FullContext = React.createContext({
	alarms: [],
	countdowns: [],
	stopwatch: '',
	addAlarms: ()=> {},
	addCountdowns: ()=> {},
	addStopwatch: ()=> {},
});

export default FullContext;