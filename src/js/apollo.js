import React, { Component } from 'react';
import { Link, Route, Router, hashHistory } from 'react-router';

export default class Apollo extends Component {
	render () {
		return (
				<div className="apollo-wrapper">
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
				<div className="apollo-info">
				<div className="apollo-heading">
					<h1>Apollo Professional Development</h1>
				</div>
				<div className="apollo-about">
					<p>Working with Apollo Education Group to create and re-brand their Wordpress site.site. I was responsible 
					for SEO, Site Security, and Content. I had a hand in Design as well.</p>
					<a href="apollopd.com">Site Link</a>
				</div>
				<div className="apollo-images" id="images">
					<ul>
						<li><img src="../images/apollo2.png"/></li>
						<li><img src="../images/apollo3.png"/></li>
					</ul>
				</div>
				</div>
			</div>





			)
	}
}