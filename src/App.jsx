import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Content} from "./components/content/Content";

const App = () => (
	<div className = 'wrapper'>
		<Header />
		<Content />
		<Footer />
	</div>
);

export default App;
