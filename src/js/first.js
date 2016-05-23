import React, { Component } from 'react';
import { Link, Route, Router, hashHistory } from 'react-router';

export default class First extends Component {
	render () {
		return (
				<div className="first-wrapper">
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
				<div className="first-info">
					<div className="first-heading">
						<h1>Life in a Box</h1>
					</div>
					<div className="first-about">
						<p>My very first project. Using only HTML and CSS, I created my first static webpage
						that would be the platform on which I would build my skills</p>
						<a href="https://github.com/jdiboll/life_in_a_box"><i className="fa fa-github"></i></a>
					</div>
				<div className="first-images" id="images">
					<ul>
						<li><img src="../images/first2.png"/></li>
						<li><img src="../images/first3.png"/></li>
					</ul>
				</div>
				</div>
			</div>
			)
	}
}