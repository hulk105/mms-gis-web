import React from 'react';

import Aside from './Aside';
import Section from './Section';

import './App.scss';

function App() {

	return (

		<div>
			<header className={ 'header' }>
				<div className={ 'wrapperCenter' }>
					<span className={ 'firstSpan' }>гіс</span>
					<span>Технологія</span>
				</div>
			</header>
			<div className={ 'wrapperCenter' }>
				<div className={ 'main' }>
					<Aside/>
					<Section/>
				</div>
			</div>
		</div>
	);
}

export default App;
