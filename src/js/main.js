import React, { Component } from 'react';
import { Link, Route, Router, hashHistory } from 'react-router';
import Final from './final';




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
				<div className="about-me">
					<div className="tagline">
						<ul>
							<li><img src="../images/Josh Diboll-06 2015 Headshots at Lenox-0038.jpg"/></li>
							<li><p>Hi, my name is Joshua. I create <strong>functional</strong> web applications 
							that turn the complex <strong>simple.</strong> I'm passionate about the
							 human connection and constantly <strong>curious</strong> why we do what we do.</p></li>
						</ul>
					</div>
				</div>
				<div id="projects" className="project-wrapper">
					<div className="final-project">
						<h4>Inside The Park</h4>
						<Link to="/final" ><img src="../images/Screen Shot 2016-05-21 at 3.43.23 PM.png"/></Link>
					</div>
					<div className="hackathon"></div>
					<div className="iron-pics"></div>
					<div className="ye-olde"></div>
					<div className="first-project"></div>
				</div>
				<footer>
					<ul>
						<li><a href="https://github.com/jdiboll"><i className="fa fa-github"></i></a></li>
						<li><a href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
						<li><a href="https://medium.com/@jdiboll"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
						<li><a href="https://twitter.com/jdiboll233"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
					</ul>
				</footer>
			</div>
			)
	}
}