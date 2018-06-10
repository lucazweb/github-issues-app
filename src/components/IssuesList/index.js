import React, { Fragment } from 'react';
import { IssueBox } from './style';

const IssuesList = ({ issues }) => (
  <Fragment>
    {
      issues.map(issue => (
        <IssueBox key={issue.id}>
          <a title={issue.user.login} href={issue.user.html_url}><img src={issue.user.avatar_url} alt={issue.user.login} /> </a>
          <div className="issue-box-info">
            <h3> {issue.title} </h3>
            <a title={issue.title} target="blank" href={issue.html_url}> Abrir ISSUE </a>
          </div>
        </IssueBox>
      ))
    }

  </Fragment>
);

export default IssuesList;
