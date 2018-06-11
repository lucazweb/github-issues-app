import React, { Component } from 'react';
import IssuesBox from '../../components/IssuesBox';
import { Container, SidebarContainer, RepoListBox, SideBarMessage } from '../../css/main';
import api from '../../services/api';
import '../../../node_modules/font-awesome/css/font-awesome.css';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
    selectedRepository: null,
    isLoading: false,
  };

  handlerAddRepository = async (e) => {
    e.preventDefault();

    try {
      this.setState({ isLoading: true });
      const response = await api.get(`/repos/${this.state.repositoryInput}`);
      console.log(response.data);
      this.setState({
        repositories: [...this.state.repositories, response.data],
        repositoryInput: '',
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handlerSelectedRepository = (repository) => {
    console.log(repository);
  }

  render() {
    return (
      <Container className="App">
        <SidebarContainer>
          <form onSubmit={this.handlerAddRepository}>
            <input className="search-input" onChange={e => this.setState({ repositoryInput: e.target.value }) } value={this.state.repositoryInput} placeholder="user/repository" />
            <button className="btn-search"> { this.state.isLoading ? <i className="fa fa-spinner" aria-hidden="true"></i> : <i className="fa fa-plus-circle" aria-hidden="true"></i> }  </button>
          </form>
          {
            this.state.repositories.length === 0 && <SideBarMessage> Adicione um repositório <i class="fa fa-hand-pointer-o" aria-hidden="true"></i> </SideBarMessage>
          }

          <RepoListBox>
            {
              this.state.repositories.map(repository => (
                <li onClick={e => {this.setState({ selectedRepository: repository })}} key={repository.id}>
                  <img src={repository.owner.avatar_url} alt={repository.name} />
                  <h3>{repository.name}</h3>
                  <span> {repository.owner.login}</span>
                </li>
              ))
            }
          </RepoListBox>
        </SidebarContainer>
        {
          this.state.selectedRepository !== null &&
          <IssuesBox selectedRepository={this.state.selectedRepository} />
        }

      </Container>
    );
  }
}
