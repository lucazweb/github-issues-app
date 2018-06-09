import React, { Fragment } from 'react';
import { IssueBox } from './style';

const IssuesList = ({ issues }) => (
  <Fragment>
    {
      issues.map(issue => (
        <IssueBox key={issue.id}>
          <img src={issue.user.avatar_url} alt={issue.user.login} />
          <div className="issue-box-info">
            <h3> {issue.title} </h3>
            <button> Abrir ISSUE </button>
          </div>
        </IssueBox>
      ))
    }

  </Fragment>
);

export default IssuesList;
