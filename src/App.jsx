import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Aboutus} from "./components/aboutus/aboutus";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Content} from "./components/content/Content";
import { Route, Switch, Redirect } from 'react-router-dom'


const App = () => (
	<div className = 'wrapper'>
		{/*<Header />*/}
		<Switch>
			<Route path='/' exact
			       render={ () => <Redirect to='/home' /> } />
			<Route path='/home' exact render={ Content } />
			<Route path='/aboutus' exact render={ Aboutus } />
		</Switch>
		{/*<Footer />*/}
	</div>
);

export default App;
