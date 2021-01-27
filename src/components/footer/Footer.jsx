import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import {NavLink} from 'react-router-dom'

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className = 'container'>
				<div className='row'>
					<div className='col-4 offset-1 col-sm-2'>
						<h5>list paragraph</h5>
						<ul className='list-unstyled'>
								<li>
									<NavLink to='/'><span>Home</span></NavLink>
								</li>
								<li>
									<NavLink to='/aboutus'><span>About us</span></NavLink>
								</li>
								<li>
									<NavLink to='/menu'><span>Menu</span></NavLink>
								</li>
								<li>
									<NavLink to='/contact'><span>Contact</span></NavLink>
								</li>
						</ul>
					</div>
					<div className='col-7 col-sm-5'>
						<h5>some address paragraph</h5>
						<address>
							Sheptitsiy 3a, 56, 3
							Sheptitsiy 3a, 56, 3
							Sheptitsiy 3a, 56, 3
						</address>
					</div>
					<div className='col-12 col-sm-4 align-self-center'>
						<h3 className='text-center'>Some socilaweb paragraph</h3>
						<div className='social-links text-center'>
							<a href = 'https://www.google.com/'>google</a>
							<a href = 'https://www.google.com/'>google</a>
							<a href = 'https://www.google.com/'>google</a>
							<a href = 'https://www.google.com/'>google</a>
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-auto'>
						<small>&copy; Copyright 2058, Example Corporation</small>
					</div>
				</div>
			</div>
		</footer>
	)
}