import React from 'react';

function RegularError(props){
  const whiteStyle = {
    color: 'white',
  }
  console.log(props);
  return (
    <div>
      <h1 style={whiteStyle}>Ha ocurrido un error</h1>
      <p style={whiteStyle}>{props.error.message}</p>
      <p style={whiteStyle}>{props.info.componentStack}</p>
    </div>
  )
}

export default RegularError;
