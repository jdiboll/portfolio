import { Component } from 'react';
import { render } from 'react-dom';
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
				<footer>
					<Link to="/"><i class="fa fa-github" aria-hidden="true"></i></Link>
					<Link to="/"><i class="fa fa-linkedin" aria-hidden="true"></i></Link>
					<Link to="/"><i class="fa fa-medium" aria-hidden="true"></i></Link>
				</footer>
			</div>





			)
	}
}