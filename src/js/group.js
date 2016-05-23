import React, { Component } from 'react';
import { Link, Route, Router, hashHistory } from 'react-router';

export default class Group extends Component {
	render () {
		return (
				<div className="group-wrapper">
				<header>
					<div className="logo"><Link to="/">JOSHUA DIBOLL</Link></div>
						<div className="header-list">
							<ul>
								<li><a href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
								<li><a href="https://medium.com/@jdiboll"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
								<li><a href="https://twitter.com/jdiboll233"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							</ul>
						</div>
				</header>
				<div className="group-info">
					<div className="group-heading">
						<h1>Iron Pics</h1>
					</div>
					<div className="group-about">
						<p>A picture-guessing game created in as a group project. The first project created using a backend, I was responsible for 
						development and specifically design.</p>
						<a href="https://github.com/picturegame/javascript"><i className="fa fa-github"></i></a>
					</div>
				<div className="group-images" id="images">
					<ul>
						<li><img src="../images/group2.png"/></li>
						<li><img src="../images/grou3.png"/></li>
					</ul>
				</div>
				</div>
			</div>
			)
	}
}