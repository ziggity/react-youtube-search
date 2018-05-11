import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCgf_yZdSWhy_Qjxj7B3JytDd20fGm2i18';


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}
ReactDOM.render(
    <App />,  document.querySelector('.container'));
