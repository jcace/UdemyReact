import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

// Normalize - make sure all browsers start from the same place when styling
// Fixes cross-browser issues, force the same styles.

import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));