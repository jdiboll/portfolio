import React, { Component } from 'react';
import { Link, Route, Router, hashHistory } from 'react-router';

export default class Olde extends Component {
	render () {
		return (
				<div className="Olde-wrapper">
				<header>
					<div className="logo">JOSHUA DIBOLL</div>
						<div className="header-list">
							<ul>
								<li><a href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
								<li><a href="https://medium.com/@jdiboll"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
								<li><a href="https://twitter.com/jdiboll233"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							</ul>
						</div>
				</header>
				<div className="Olde-info">
					<div className="Olde-heading">
						<h1>Mudr</h1>
					</div>
					<div className="Olde-about">
						<p>Creating a wep page for an imaginary restaurant. Ye' Olde was a group project
						in which I was was responsible only for development</p>
						<a href="https://github.com/jdiboll/restaurant"><i className="fa fa-github"></i></a>
					</div>
				<div className="Olde-images">
					<ul>
						<li><img src="../images/yeolde2.png"/></li>
						<li><img src="../images/yeolde3.png"/></li>
					</ul>
				</div>
				</div>
			</div>
			)
	}
}