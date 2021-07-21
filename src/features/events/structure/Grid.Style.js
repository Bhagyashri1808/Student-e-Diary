import styled from 'styled-components';
import {Trash} from  'react-bootstrap-icons'


export const TrashButton = styled(Trash)`
height: 3em;
    width: 1.2em;
}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StyledGrid = styled.div`
  color: #929292;
  margin: 0 auto;
  position: relative;
  width: 80%;
  box-shadow: 1px 2px 5px 10px rgba(68, 68, 68, 0.6);
  font-size: 12px;
  font-weight: 500;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TBODY = styled.tbody`
  display: block;
  height:25vh;
  max-height: 50vh;
  overflow: auto;
`;

export const TH = styled.th`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(68 68 68 / 60%);
  height: 50px;
  text-align: left;
  padding-left: 16px;
`;

export const TR = styled.tr`
  display: table;
  table-layout: fixed;
  width: 100%;
`;

export const TD = styled.td`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(68 68 68 / 60%);
  height: 40px;
  text-align: left;
  padding-left: 16px;
`;
