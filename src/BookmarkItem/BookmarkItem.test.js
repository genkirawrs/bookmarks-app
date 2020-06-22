import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkItem from './BookmarkItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const num = 3;
  ReactDOM.render(<BookmarkItem title='test' url='https://google.com' rating={num} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
