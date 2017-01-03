// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import Main from './main';
import Final from './final';
import Apollo from './apollo';
import Hackathon from './hackathon';
import Group from './group';
import Olde from './olde';
import First from './first';


render ((
	<Router history={hashHistory}>
		<Route path="/" component={Main}/>
		<Route path="/final" component={Final}/>
		<Route path="/hackathon" component={Hackathon}/>
		<Route path="/group" component={Group}/>
		<Route path="/olde" component={Olde}/>
		<Route path="/first" component={First}/>
		<Route path="/apollo" component={Apollo}/>
	</Router>
		), document.querySelector('.app'));