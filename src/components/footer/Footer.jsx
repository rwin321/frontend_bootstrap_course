import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import {NavLink} from 'react-router-dom'

export const Footer = () => {
	return (
			<div className = 'container'>
				<div className='row'>
					<div className='col-4 offset-1 col-sm-2'>
						<h5>list paragraph</h5>
						<ul>
							<NavLink to='/'>
								<li><span>Home</span></li>
							</NavLink>
							<NavLink to='/about'>
								<li><span>About</span></li>
							</NavLink>
							<NavLink to='/menu'>
								<li><span>Menu</span></li>
							</NavLink>
							<NavLink to='/contact'>
								<li><span>Contact</span></li>
							</NavLink>
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
					<div className='col-12 col-sm-4'>
						<h3>Some socilaweb paragraph</h3>
						<div className='social-links'>
							<a href = 'https://www.google.com/'>google</a>
							<a href = 'https://www.google.com/'>google</a>
							<a href = 'https://www.google.com/'>google</a>
							<a href = 'https://www.google.com/'>google</a>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-auto'>
						<small>&copy; Copyright 2058, Example Corporation</small>
					</div>
				</div>
			</div>
	)
}