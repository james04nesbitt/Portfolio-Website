import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

import Intro from './Intro';
import NAV from './nav';
import Projects from './Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className='Content'>
<NAV />
 <Intro/>
 <Projects/>
 </div>
);