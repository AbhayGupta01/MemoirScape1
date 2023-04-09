import React, {useState} from 'react';
import {Container} from '@material-ui/core';
/////not sure if it works
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import {getPosts} from './actions/posts'
import Navbar from './components/Navbar/Navbar'
import useStyles from './styles';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () =>{
  const [change, setChange] = useState(false)
  const user = JSON.parse(localStorage.getItem('profile'));


return (
<BrowserRouter>
  <Container maxWidth='xl'>
  <Navbar change={change} setChange={setChange}/>
    <Routes>
      <Route path='/' exact element={ <Navigate  replace={true} to="/posts" />} />
      <Route path="/posts" exact element={< Home />}/>
      <Route path="/posts/search" exact element={< Home />}/>
      <Route path="/posts/:id"  element={< PostDetails />}/>
      <Route path='/auth' exact element={!user?<Auth/>:<Navigate to="/posts" />}/>
    </Routes>
  </Container>
</BrowserRouter>
  );
}


export default App;