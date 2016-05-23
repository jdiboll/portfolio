import React, { Component } from 'react';
import { Link, Route, Router, hashHistory } from 'react-router';

export default class Hackathon extends Component {
	render () {
		return (
				<div className="hakathon-wrapper">
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
				<div className="hackathon-info">
					<div className="hackathon-heading">
						<h1>Mudr</h1>
					</div>
					<div className="hackathon-about">
						<p>Hackathon project at The Iron Yard. My first experience with the Hackathon atmosphere. A social 
						media app that dealt with users seeking and providing encouragement I was rsponsable for development</p>
						<a href="https://github.com/mudr/frontend"><i className="fa fa-github"></i></a>
					</div>
				<div className="hackathon-images">
					<ul>
						<li><img src="../images/hackathon2.png"/></li>
						<li><img src="../images/hackathon3.png"/></li>
					</ul>
				</div>
				</div>
			</div>
			)
	}
}