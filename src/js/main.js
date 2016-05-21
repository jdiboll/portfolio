import React, { Component } from 'react';
import { Link, Route, Router, hashHistory } from 'react-router';




export default class Main extends Component {
	render () {
		return (
			<div className="main-wrapper">
				<header>
					<div className="logo">JOSHUA DIBOLL</div>
						<div className="header-list">
						<ul>
							<li><a href="#/#projects">PROJECTS</a></li>
							<li><a href="#/#contact">CONTACT</a></li>
							<li><a href="#/#resume">RESUME</a></li>
						</ul>
					</div>
				</header>
				<div className="home-image">
				<h1>Let's get there together.</h1>
				</div>
				<footer>
					<Link to="/"><i className="fa fa-github"></i></Link>
					<Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
					<Link to="/"><i className="fa fa-medium" aria-hidden="true"></i></Link>
				</footer>
			</div>
			)
	}
}