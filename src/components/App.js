import React, { useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { loadImages } from '../redux/actions';
import { Route } from 'react-router-dom';
import Modal from './Modal';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  return (
    <Route path="/:id?">
      <div className="app">
        <Header />
        <Modal />
        <Content />
        <Footer />
      </div>
    </Route>
  );
}

export default App;
