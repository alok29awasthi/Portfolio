import React from 'react';

import './App.css';
import { Resume, Experience, Contact, AboutMe } from './pages'

import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page-transition" timeout={300}>
          <Routes location={location}>
            <Route path='/' component={<AboutMe />}>
            </Route>
            <Route path='/resume' component={<Resume />}>
            </Route>
            <Route path='/experience' component={<Experience />}>
            </Route>
            <Route path='/contact' component={<Contact />}>
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
)};

export default App;
