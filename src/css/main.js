import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding:0 10px;
`;

export const SidebarContainer = styled.div`
  width:25%;
  float: left;
  padding:10px;
  min-height:800px;
  border-right:1px solid #ccc;
  .search-input{
    width:82%;
    float:left;
    padding:10px;
    font-size:1.2em;
    border:none;
    border: 1px solid #f3f3f3;
    border-radius:3px;
    color:#666;
    background:#f3f3f3;
  }

  .btn-search{
    padding: 0.675rem .75rem;
    border:none;
    font-size: 1.1em;
    background: #669966;
    border: 1px solid #669966;
    color:white;
    width:42px;
    cursor: pointer;
    &:hover{
      background:green;
    }
  }

`;

export const IssuesContainer = styled.div`
  width:75%;
  float:left;
   header{
    width:100%;
    padding:4px 12px;
    height:80px;
    border-bottom:1px solid #f3f3f3;
    float:left;
      .repository{
        width:200px;
        float:left;
        padding-top:10px;
        padding-bottom:10px;
        img{
          width:40px;
          height:auto;
          float:left;
          margin-right:5px;
        }
        h3{
          font-size:1em;
          margin-top:0px;
          margin-bottom:2px;
          color: #666;
          font-weight: normal;
        }
        span{
          color:#333;
          font-size:0.9em;
        }
      }

      select{
        float:right;
        padding:4px;
        font-size:1em;
        color:#333;
        min-width:200px;
        margin-top:20px;
      }
    }

`;

export const RepoListBox = styled.ul`
  margin:10px 0;
  padding:0;
  list-style:none;
  float:left;
  width:100%;
  li{
    width:100%;
    float:left;
    border-bottom:1px solid #f3f3f3;
    padding-top:10px;
    padding-bottom:10px;
    img{
      width:40px;
      height:auto;
      float:left;
      margin-right:5px;
    }
    h3{
      font-size:1em;
      margin-top:0px;
      margin-bottom:2px;
      color: #666;
      font-weight: normal;
    }
    span{
      color:#333;
      font-size:0.9em;
    }
  }
`;

export const InfoMessage = styled.h2`
  font-size:1.3em;
  text-align:center;
  color: #666;
  padding:12px;
  font-weight: normal;

`;
