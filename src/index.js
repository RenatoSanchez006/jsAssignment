import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div>
      <Typography variant="h3"> Hello World! </Typography>
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
);
