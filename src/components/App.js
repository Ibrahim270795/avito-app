import React, { useEffect } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useDispatch } from 'react-redux'
import { loadImages } from '../redux/actions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages())
  },[])

  return (
    <div className="app">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
