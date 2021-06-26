import React from 'react';
import './App.css';
import Navbar from './components/NavBarElements';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import Session from './pages/session';
import Show from './pages/show';
import User from './pages/user';
import styled from 'styled-components';

const Nav = styled.nav`
// background: #6B6B6B;
background: black;
height: 100px;
display: flex;
justify-content: space-between;
padding: 0.4rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

const NavLink = styled(Link)`
// color: #808080;
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #28ACEA;
}
`;

const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8 rem;
	cursor: pointer;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;

function App() {

  return (
    <div className="App">
      <h1>Lets get started with the Lyrios App!</h1>

        <Navbar />
        <Switch>
          <Route path='/session'>
            <Session/>
          </Route>
          <Route path='/show'>
            <Show/>
          </Route>
          <Route path='/user'>
            <User/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>



    </div>
  );
        }
// function App() {
// return (
// 	<Router>
// 	<Navbar />
// 	<Switch>
// 		<Route path='/' exact component={Home} />
// 		<Route path='/session' component={Session} />
// 		<Route path='/show' component={Show} />
// 		<Route path='/user' component={User} />
// 		{/* <Route path='/team' component={Teams} />
// 		<Route path='/blogs' component={Blogs} />
// 		<Route path='/sign-up' component={SignUp} /> */}
// 	</Switch>
// 	</Router>
// );
// }

export default App;

  // return (


  //   <div className="App">
  //     <h1>Lets get started with the Lyrios App!</h1>
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

