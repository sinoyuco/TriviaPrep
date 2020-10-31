import React from 'react';
import Header from './layers/header';
import Footer from './layers/footer';
import Landing from './layers/landing';
import TriviaContainer from './trivia_container';
import Results from './layers/results';
import { Switch, Route} from 'react-router-dom';
import Modal from './layers/modal';


const App = () => (
    <div className="app-main">
        <Header/>
        <Modal/>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/trivia" component={TriviaContainer} />
            <Route exact path="/results" component={Results}/>
        </Switch>
        <Footer/>
    </div>
);

export default App;