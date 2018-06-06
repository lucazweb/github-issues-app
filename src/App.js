import React from 'react';
import styled from 'styled-components';
import './css/global';
import SidebarBox from './components/Sidebar';
import IssuesList from './components/IssuesList';
import { Container, IssuesContainer } from './css/main';


const App = () => (
  <Container className="App">
    <SidebarBox />
    <IssuesContainer>
       <header>
         <div className="repository">
          <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="React" />
          <h3>React</h3>
          <span> Facebook</span>
         </div>

         <select>
           <option> Abertas </option>
         </select>
       </header>

       <IssuesList />

    </IssuesContainer>
  </Container>
);

export default App;
