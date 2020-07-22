import React from 'react';

const InputBox = props => {
  return (
    <input
      style={{
        display: 'block',
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        padding: 16,
        fontSize: 25,
        color: 'white'
      }}
      onChange={props.searchChange}
      placeholder='Enter a Movie Name'
    />
  );
};

export default InputBox;
