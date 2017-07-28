import React from 'react'
import logo from '../styles/logo.svg'

const Navbar = ()=>{
	const navItems=['How we work', 'Companies', 'Testimonials', 'Contact Us']
	const navBtns=['Sign Up', 'Login']
	return <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
		<button className="navbar-toggler navbar-toggler-right"
			type="button" data-toggle="collapse"
			data-target="#navbarNavAltMarkup"
			aria-controls="navbarNavAltMarkup"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<a className="navbar-brand"> <img src={logo} className="App-logo" alt="logo" /></a>
		<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
			<div className="navbar-nav ">
				{navItems.map(item => <a key={item} className="nav-item nav-link" >{item}</a>)}
				{navBtns.map(item => <button key={item}
					type="button"
					className="nav-item nav-link btn btn-outline-secondary"
					style={{marginLeft:15, width:150}}>
						{item}
				</button>)}
			</div>
		</div>
</nav>
	}

	export default Navbar