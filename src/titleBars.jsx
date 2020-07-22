import React from 'react';
import './App.css';

const TitleBar = () => {
  return (
    <table className='titleBar'>
      <tbody>
        <tr>
          <td>
            <img src='IMDB.png' width='100' alt='IMDB icon'></img>
          </td>
          <td width='8' />
          <td>
            <h4>The Movie Database</h4>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TitleBar;
