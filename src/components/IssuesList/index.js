import React, { Fragment } from 'react';
import { IssueBox } from './style';

const IssuesList = () => (
  <Fragment>
    <IssueBox>
      <img src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
      <div className="issue-box-info">
        <h3> Problem doing something </h3>
        <button> Abrir ISSUE </button>
      </div>
    </IssueBox>
  </Fragment>
);

export default IssuesList;
