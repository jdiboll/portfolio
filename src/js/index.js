// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import Main from './main';

render ((
	<Router history={hashHistory}>
		<Route path="/" component={Main}/>
	</Router>
		), document.querySelector('.app'));