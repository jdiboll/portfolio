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
							<li><a href="#projects">PROJECTS</a></li>
							<li><a href="#contact">CONTACT</a></li>
							<li><a href="https://docs.google.com/document/d/1t9qsk_Zeb_kZetrYZ8bHhavsKKJaHhYq6LbP0RzjzgU/edit?usp=sharing">RESUME</a></li>
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
					<ul>
					<li><div className="final-project">
						<h4>Inside The Park</h4>
						<Link to="/final" ><img src="../images/insidethepark04.png"/></Link>
					</div></li>
					<li><div className="hackathon">
						<h4>Mudr</h4>
						<Link to="/hackathon"><img src="../images/hackathon1.png"/></Link>
					</div></li>
					<li><div className="iron-pics">
						<h4>Iron Pics</h4>
						<Link to="/group"><img src="../images/group1.png"/></Link>
					</div></li>
					<li><div className="ye-olde">
						<h4>Ye' Olde</h4>
						<Link to="/olde"><img src="../images/yeolde1.png"/></Link>
					</div></li>
					<li><div className="first-project">
						<h4>Life in a Box</h4>
						<Link to="/first"><img src="../images/first1.png"/></Link>
					</div></li>
					</ul>
				</div>
				<div className="contact-list" id="contact">
					<h2>Contact Me</h2>
					<ul>
						<li><i className="fa fa-phone" aria-hidden="true"></i>Call me at (334)328-1727</li>
						<li><i className="fa fa-envelope" aria-hidden="true"></i>Message me at joshuadiboll@gmail.com</li>
					</ul>
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