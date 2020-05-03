import React from 'react';
import Album from './components/Album';
import Header from './components/Header'
import CssBaseline  from "@material-ui/core/CssBaseline"
function App() {

  return (
    <div>
    <CssBaseline />
    <Header />
    <Album />
    </div>

  );
}

export default App;
