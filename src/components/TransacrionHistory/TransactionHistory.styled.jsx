import styled from '@emotion/styled';
export const Table = styled.table`
  width: 90%;
`;
export const TableHead = styled.thead`
  & tr {
    background-color: #c4e5c4;
  }
  & th {
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    color: black;
    font-size: 12px;
    letter-spacing: 2px;
  }
`;
export const TableBody = styled.tbody`
  & tr {
    td:first-of-type {
      text-align: left;
      padding-left: 40px;
      text-transform: capitalize;
    }
  }
  & tr:nth-of-type(even) {
    background-color: #e4e4c4;
  }
  & tr:nth-of-type(odd) {
    background-color: white;
  }
  & td {
    padding: 10px;
    text-align: center;
    color: #454545;
    font-family: system-ui;
    font-size: 12px;
  }
`;
