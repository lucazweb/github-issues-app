import React from 'react';
import { SidebarContainer, RepoListBox } from '../css/main';

const SidebarBox = () => (
  <SidebarContainer>
    <input className="search-input" placeholder="user/repository" />
    <button className="btn-search"> OK </button>

    <RepoListBox>
      <li>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="React" />
        <h3>React</h3>
        <span> Facebook</span>
      </li>

    </RepoListBox>
  </SidebarContainer>
);

export default SidebarBox;
