// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import Main from './main';
import Final from './final';
import Hackathon from './hackathon';

render ((
	<Router history={hashHistory}>
		<Route path="/" component={Main}/>
		<Route path="/final" component={Final}/>
		<Route path="/hackathon" component={Hackathon}/>
	</Router>
		), document.querySelector('.app'));