'use strict';

const table = document.querySelectorAll('tr');

const rows = table.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const cells = row.cells;

  const clonedCell = cells[1].cloneNode(true);

  row.insertBefore(clonedCell, cells[cells.length - 1]);
}
