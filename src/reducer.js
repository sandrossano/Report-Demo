import { columnDefs, rowData } from "./components/data.js";

let initialState = {
  columnDefs: columnDefs,
  rowData: rowData
};
export let reducer = (state = initialState, action) => {
  return state;
};
