import React from 'react';
import ReactDOM from 'react-dom';

import AccountComp from './AccountComp';

it('AccountComp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
