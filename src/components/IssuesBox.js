import React, { Component } from 'react';
import IssuesList from './IssuesList';
import { IssuesContainer, InfoMessage } from '../css/main';

export default class IssuesBox extends Component {
  constructor(props) {
    super();
    this.state = {
      repository: props.repository,
      issues: [],
    };
  }


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
              <select>
                <option> Abertas </option>
              </select>
            </header> :
            <InfoMessage> Selecione um repositório </InfoMessage>
        }

        <IssuesList />
      </IssuesContainer>
    );
  }
}

