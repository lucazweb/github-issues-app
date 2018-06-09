import React, { Component } from 'react';
import IssuesList from './IssuesList';
import { IssuesContainer, InfoMessage } from '../css/main';
import api from '../services/api';

export default class IssuesBox extends Component {
  constructor() {
    super();
    this.state = {
      repository: null,
      issues: [],
    };
  }

  componentDidMount(){
    console.log(this.props);
    this.handleIssues(this.props.selectedRepository, 'all');
  };

  handleIssues = async (repository, filter) => {
    try {
      const response = await api.get(`/repos/${repository.owner.login}/${repository.name}/issues?state=${filter}`);
      console.log(response);
      this.setState({ issues: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  handleIssuesFilter = (filter) => {
    console.log(filter);
    this.handleIssues(this.props.selectedRepository, filter);
  };

  render() {
    return (
      <IssuesContainer>
        {
          this.props.selectedRepository !== null ?
            <header>
              <div className="repository">
                <img src={this.props.selectedRepository.owner.avatar_url} alt="React" />
                <h3>{this.props.selectedRepository.name}</h3>
                <span> {this.props.selectedRepository.owner.login}</span>
              </div>
              <select onChange={e => this.handleIssuesFilter(e.target.value)}>
                <option value="all"> Todas </option>
                <option value="open"> Abertas </option>
                <option value="closed"> Fechadas </option>
              </select>
            </header> :
            <InfoMessage> Selecione um repositório </InfoMessage>
        }

        <IssuesList issues={this.state.issues} />
      </IssuesContainer>
    );
  }
}

