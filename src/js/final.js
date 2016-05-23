import React, { Component } from 'react';
import { Link, Route, Router, hashHistory } from 'react-router';

export default class Final extends Component {
	render () {
		return (
				<div className="final-wrapper">
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
				<div className="final-info">
				<div className="final-heading">
					<h1>Inside The Park</h1>
				</div>
				<div className="final-about">
					<p>This was my final project at The Iron Yard: A web application that offers a convenient and abundant resource for planning a 
					classic American road trip for baseball fans. I was responsible for Design, UI, and Development.</p>
					<a href="https://github.com/insidethepark/frontend"><i className="fa fa-github"></i></a>
				</div>
				<div className="final-images" id="images">
					<ul>
						<li><img src="../images/insidethepark1.png"/></li>
						<li><img src="../images/insidethepark2.png"/></li>
					</ul>
				</div>
				</div>
			</div>





			)
	}
}