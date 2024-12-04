const table = document.querySelector('#myTable');

function createTable()
{
  const noOfRows =prompt('Iput number of rows');
  const noOfCols =prompt('Input number of columns');
  for(let i=0;i<noOfRows;i++)
  {
    let row = table.insertRow(i);
    for(let j=0;j<noOfCols;j++)
    {
      let cols = row.insertCell(j);
      cols.textContent = `Row-${i} Column-${j}`;
    }
  }
}