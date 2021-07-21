import React from 'react';
import { StyledGrid, Container, Table, TH, TD, TR, TBODY, TrashButton } from './Grid.Style';

const Grid = ({ columnHeaders, tableDataSource, onChange}) => {

  const head = () => {
    const columns = columnHeaders.map((column) => {
      return <TH key={column.value}>{column.value}</TH>;
    });
    return <TR>{columns}</TR>;
  };

  const rows = () => {
    const tableRows = tableDataSource.map((element,index) => {
      const tdata = columnHeaders.map((column) => {
        if(column.type === 'boolean'){
          return <TD key={column.key}>
          <input
            type="radio"
            onClick={(e) => e.stopPropagation()}
            onChange = {(e) => onChange(element)}
            name='select'
          />
        </TD>;
        }else if(column.type === 'actionButton'){
          return (
            <TD key={column.key}>
              <TrashButton
                onClick={() => {
                  document.querySelector("input[type=radio]:checked").checked = 0;
                  column.func(element.userId);
                }}
              />
            </TD>
          );
        }else{
          return (<TD key={column.key}>{element[column.key]}</TD>)
        }
      });
      return <TR value={element} key={index}>{tdata}</TR>;
    });
    return tableRows;
  };

  return (
    <Container>
      <StyledGrid>
        <Table>
          <thead>{head()}</thead>
          <TBODY>{rows()}</TBODY>
        </Table>
      </StyledGrid>
    </Container>
  );
};

export default Grid;
