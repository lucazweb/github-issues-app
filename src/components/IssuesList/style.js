import styled from 'styled-components';

export const IssueBox = styled.div`
  width:250px;
  padding:20px;
  float:left;
  background:white;
  border:1px solid #f3f3f3;
  box-shadow:2px 2px 2px #ccc;
  border-radius:3px;
  margin:10px;

  img{
    float: left;
    width:60px;
    border-radius:100%;
    margin-right:10px;
  }

.issue-box-info{
  h3{
    font-size:0.8em;
  }

  button{
    width:135px;
    margin-top:4px;
    padding: 2px 8px;
    border:1px solid transparent;
    background: purple;
    color:white;
    text-align:center;
    float:left;
    transition: all ease 0.4s;
    cursor:pointer;
    &:hover{
      background: #4e034e;
    }
  }
}`;
