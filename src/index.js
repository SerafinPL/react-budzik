import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router } from 'react-router-dom'



import App from './App';


		ReactDOM.render(
			//<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Router>
				<App/>
			</Router>,
			//</BrowserRouter>,
  			document.getElementById('root')
  		);
	
		
	

  	

  	