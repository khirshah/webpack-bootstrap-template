import _ from 'lodash';
import 'bootstrap';
import '../styles/style.scss';

function container() {
  const container = document.createElement('div');
  container.classList.add('container-fluid');

  const tableContainer = document.createElement('div');
  tableContainer.classList.add('col-md-4');
  const table = createTable();
  tableContainer.appendChild(table);
  container.appendChild(tableContainer);

  return container;
}

function createTable() {
  const table = document.createElement('table');
  table.classList.add('table');
  table.classList.add('table-dark');


  for (let i = 0; i < 5; ++i) {
    const row = document.createElement('tr');
    for (let j = 0; j < 3; ++j) {
      const col = document.createElement('td');
      col.innerHTML="sometext"
      row.appendChild(col)
    }
    table.appendChild(row)
  }
  return table;
}

document.body.appendChild(container());