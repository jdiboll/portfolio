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
				<div id="projects" className="project-wrapper">
				<div className="about-me">
					<div className="tagline">
						<ul>
							<li><img src="../images/Josh Diboll-06 2015 Headshots at Lenox-0038.jpg"/></li>
							<li><p>Hi, my name is Joshua. I create <strong>functional</strong> web applications 
							that make the complex, <strong>simple.</strong> </p></li>
						</ul>
					</div>
				</div>
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