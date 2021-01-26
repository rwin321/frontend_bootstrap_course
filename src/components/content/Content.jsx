import React from 'react'
import './Content.css'

export const Content = () => {
	return (
		<div className = 'wrapper'>
			<div className = 'container'>
				<div className = 'row'>
					<div className = 'col-12 col-sm-5 col-md-3 order-sm-last'>
						<h3>
							Some title
						</h3>
					</div>
					<div className = 'col col-sm col-md order-sm-first'>
						<h2>
							Some bigger title
						</h2>
						<p>some paragraph</p>
					</div>
				</div>
				<div className = 'row'>
					<div className = 'col-12 col-sm-5 col-md-3'>
						<h3>
							Lorem ipsum dolor sit amet
						</h3>
					</div>
					<div className = 'col col-sm col-md'>
						<h2>
							Lorem ipsum dolor sit
							amet, consectetur
						</h2>
						<h3>Some smaller paragraph</h3>
						<p>some text</p>
					</div>
				</div>
				<div className = 'row'>
					<div className = 'col-12 col-sm-5 col-md-3 order-sm-last'>
						<h3>
							Lorem ipsum dolor sit amet
						</h3>
					</div>
					<div className = 'col col-sm col-md order-sm-first'>
						<h2>
							Lorem ipsum dolor sit
							amet, consectetur
						</h2>
						<p>some paragraph</p>
						<h3>some smaller paragraph</h3>
						<p>some text</p>
					</div>
				</div>
			</div>
		</div>
	)
}