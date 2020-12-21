import { row_number } from '../op/op-api';

export default function(table, keys = []) {
  return table
    .groupby(keys.length ? keys : table.columnNames())
    .filter(() => row_number() === 1)
    .reify();
}