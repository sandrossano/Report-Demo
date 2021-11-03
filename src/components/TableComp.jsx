import React, { useState } from "react";
import { connect } from "react-redux";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
/*import "ag-grid-community/dist/styles/ag-theme-balham.css";*/
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

let TableComp = (props) => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    console.log(params);
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.columnApi.autoSizeAllColumns();
    //params.api.sizeColumnsToFit();
    window.agGrid = params.api;

    const updateData = (data) => {
      document.querySelector("#everyone").checked = true;
      setRowData(data);
    };

    // fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
    //  .then((resp) => resp.json())
    //  .then((data) => updateData(data));
    var dummy = [
      {
        athlete: "Michael Phelps",
        age: 23,
        country: "United States",
        year: 2008,
        date: "24/08/2008",
        sport: "Swimming",
        gold: 8,
        silver: 0,
        bronze: 0,
        total: 8
      },
      {
        athlete: "Michael Phelps",
        age: 19,
        country: "United States",
        year: 2004,
        date: "29/08/2004",
        sport: "Swimming",
        gold: 6,
        silver: 0,
        bronze: 2,
        total: 8
      },
      {
        athlete: "Michael Phelps",
        age: 27,
        country: "United States",
        year: 2012,
        date: "12/08/2012",
        sport: "Swimming",
        gold: 4,
        silver: 2,
        bronze: 0,
        total: 6
      },
      {
        athlete: "Natalie Coughlin",
        age: 25,
        country: "United States",
        year: 2008,
        date: "24/08/2008",
        sport: "Swimming",
        gold: 1,
        silver: 2,
        bronze: 3,
        total: 6
      },
      {
        athlete: "Aleksey Nemov",
        age: 24,
        country: "Russia",
        year: 2000,
        date: "01/10/2000",
        sport: "Gymnastics",
        gold: 2,
        silver: 1,
        bronze: 3,
        total: 6
      },
      {
        athlete: "Alicia Coutts",
        age: 24,
        country: "Australia",
        year: 2012,
        date: "12/08/2012",
        sport: "Swimming",
        gold: 1,
        silver: 3,
        bronze: 1,
        total: 5
      },
      {
        athlete: "Missy Franklin",
        age: 17,
        country: "United States",
        year: 2012,
        date: "12/08/2012",
        sport: "Swimming",
        gold: 4,
        silver: 0,
        bronze: 1,
        total: 5
      }
    ];
    updateData(dummy);
  };

  const externalFilterChanged = (newValue) => {
    ageType = newValue;
    gridApi.onFilterChanged();
  };

  const isExternalFilterPresent = () => {
    return ageType !== "everyone";
  };

  const doesExternalFilterPass = (node) => {
    switch (ageType) {
      case "below25":
        return node.data.age < 25;
      case "between25and50":
        return node.data.age >= 25 && node.data.age <= 50;
      case "above50":
        return node.data.age > 50;
      case "dateAfter2008":
        return asDate(node.data.date) > new Date(2008, 1, 1);
      default:
        return true;
    }
  };

  const onFirstDataRendered = (params) => {
    if (window.innerWidth < 700) params.columnApi.autoSizeAllColumns();
    else params.api.sizeColumnsToFit();
  };
  const onBtnExport = () => {
    gridApi.exportDataAsCsv();
  };

  const onGridSizeChanged = (params) => {
    var gridWidth = document.getElementById("grid-wrapper").offsetWidth;
    var columnsToShow = [];
    var columnsToHide = [];
    var totalColsWidth = 0;
    var allColumns = params.columnApi.getAllColumns();
    for (var i = 0; i < allColumns.length; i++) {
      var column = allColumns[i];
      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > gridWidth) {
        columnsToHide.push(column.colId);
      } else {
        columnsToShow.push(column.colId);
      }
    }
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    if (window.innerWidth < 700) params.columnApi.autoSizeAllColumns();
    else params.api.sizeColumnsToFit();
  };

  return (
    <div style={{ width: "100%" }}>
      <div id="grid-wrapper" style={{ width: "100%", height: "100%" }}>
        <div className="test-header">
          <label class="radio-inline">
            <input
              type="radio"
              name="filter"
              id="everyone"
              description="Tutti"
              onChange={() => externalFilterChanged("everyone")}
            />
            Tutti
          </label>
          <label class="radio-inline">
            <input
              type="radio"
              name="filter"
              id="below25"
              onChange={() => externalFilterChanged("below25")}
            />
            &lt; 25 Anni
          </label>
          <label class="radio-inline">
            <input
              type="radio"
              name="filter"
              id="between25and50"
              onChange={() => externalFilterChanged("between25and50")}
            />
            Tra 25 Anni e 50 Anni
          </label>
          <label class="radio-inline">
            <input
              type="radio"
              name="filter"
              id="above50"
              onChange={() => externalFilterChanged("above50")}
            />
            &gt; 50 Anni
          </label>
          <label class="radio-inline">
            <input
              type="radio"
              name="filter"
              id="dateAfter2008"
              onChange={() => externalFilterChanged("dateAfter2008")}
            />
            Dopo il 01/01/2018
          </label>
        </div>
        {/* 
        <button onClick={() => onBtnExport()}>
          Download file csv (api.exportDataAsCsv())
        </button>*/}
        <div
        /*style={{
            height: "calc(100% - 10vh)",
            width: "100%"
          }}*/
        >
          <div
            id="myGrid"
            style={{
              height: "65vh",
              width: "100%"
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              rowData={rowData}
              onGridReady={onGridReady}
              isExternalFilterPresent={isExternalFilterPresent}
              doesExternalFilterPass={doesExternalFilterPass}
              onFirstDataRendered={onFirstDataRendered}
              onGridSizeChanged={onGridSizeChanged}
              statusBar={{ items: [{ component: "agAggregationComponent" }] }}
              defaultColDef={{
                //filter: "agTextColumnFilter",
                filter: true,
                sortable: true,
                resizable: true,
                filterParams: {
                  buttons: ["reset", "apply"],
                  closeOnApply: true,
                  suppressAndOrCondition: true
                }
              }}
            >
              <AgGridColumn field="athlete" minWidth={100} />
              <AgGridColumn
                field="age"
                filter="agNumberColumnFilter"
                maxWidth={200}
              />
              <AgGridColumn field="country" />
              <AgGridColumn
                field="year"
                maxWidth={200}
                filter="agNumberColumnFilter"
              />
              <AgGridColumn
                field="date"
                filter="agDateColumnFilter"
                filterParams={dateFilterParams}
              />
              <AgGridColumn field="gold" filter="agNumberColumnFilter" />
              <AgGridColumn field="silver" filter="agNumberColumnFilter" />
              <AgGridColumn field="bronze" filter="agNumberColumnFilter" />
            </AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
};

var dateFilterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    var cellDate = asDate(cellValue);
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  }
};
var ageType = "everyone";
function asDate(dateAsString) {
  var splitFields = dateAsString.split("/");
  return new Date(splitFields[2], splitFields[1], splitFields[0]);
}
/* DECOMMENTARE PER IMPORTARE DA DATA.JS
IN AgGridReact
columnDefs={props.columnDefs}
            rowData={props.rowData}

function mapStateToProps(state) {
  return {
    columnDefs: state.columnDefs,
    rowData: state.rowData
  };
}
export default connect(mapStateToProps)(TableComp);
*/
export default TableComp;
