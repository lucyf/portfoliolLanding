import FirstPageComponent from './components/first-page';
import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EnglishContainer from './containers/english-container';
import SpanishContainer from './containers/spanish-container';




function App() {
  return (
      <BrowserRouter>

            <div className="container-fluid">
              <Switch>
              <Route exact path='/' component={FirstPageComponent}/>
              <Route path='/spanish' component={SpanishContainer}/>
              <Route path='/english' component={EnglishContainer}/>
              </Switch>
        
            </div>

      </BrowserRouter>
  
  );
}

export default App;
