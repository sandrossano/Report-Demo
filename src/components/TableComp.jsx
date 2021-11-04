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
    const dummy = [
      {
        ID: 1,
        PlantId: "JPDAMRC11",
        Local: "ACERRA",
        Addr: "STRADA PROV. ACERRA-POMOGLIANO ",
        TpServ: "IDRICO",
        Last: "01/09/2021",
        Prox: "31/08/2026"
      },
      {
        ID: 2,
        PlantId: "JANCAST01",
        Local: "ANACAPRI",
        Addr: "SALITA CAPOSCURO",
        TpServ: "IDRICO",
        Last: "13/02/2019",
        Prox: "12/02/2024"
      },
      {
        ID: 3,
        PlantId: "JANCFST01-FE01",
        Local: "ANACAPRI",
        Addr: "V LA FOLLICARA",
        TpServ: "FOGRNARIO",
        Last: "26/04/2017",
        Prox: "25/04/2022"
      },
      {
        ID: 4,
        PlantId: "JANCFST01-FE02",
        Local: "ANACAPRI",
        Addr: "V LA FOLLICARA",
        TpServ: "FOGRNARIO",
        Last: "26/04/2017",
        Prox: "25/04/2022"
      },
      {
        ID: 5,
        PlantId: "JANCDEP02",
        Local: "ANACAPRI",
        Addr: "LOCALITA LA SELVA",
        TpServ: "DEPURATORE",
        Last: "02/03/2021",
        Prox: "02/03/2023"
      },
      {
        ID: 6,
        PlantId: "JANCFST06",
        Local: "ANACAPRI",
        Addr: "V GROTTA AZZURRA",
        TpServ: "FOGRNARIO",
        Last: "02/03/2021",
        Prox: "01/03/2026"
      },
      {
        ID: 7,
        PlantId: "JANCFST05",
        Local: "ANACAPRI",
        Addr: "V CANNULA",
        TpServ: "FOGRNARIO",
        Last: "01/09/2021",
        Prox: "31/08/2026"
      },
      {
        ID: 8,
        PlantId: "JANCFST04",
        Local: "ANACAPRI",
        Addr: "V MESOLA ",
        TpServ: "FOGRNARIO",
        Last: "01/09/2021",
        Prox: "31/08/2026"
      },
      {
        ID: 9,
        PlantId: "JAGRAST01",
        Local: "ANGRI",
        Addr: "V MONTE TACCARO SNC",
        TpServ: "IDRICO",
        Last: "02/03/2021",
        Prox: "02/03/2024"
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
        {/*
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
        */}
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
              <AgGridColumn
                headerName="Impianto"
                field="PlantId"
                minWidth={100}
              />
              <AgGridColumn
                field="Local"
                headerName="Località"
                filter="agNumberColumnFilter"
                maxWidth={200}
              />
              <AgGridColumn field="Addr" headerName="Indirizzo Fornitura" />
              <AgGridColumn
                field="TpServ"
                headerName="Tipo Fornitura"
                maxWidth={200}
                filter="agNumberColumnFilter"
              />
              <AgGridColumn
                field="Last"
                filter="agDateColumnFilter"
                headerName="Ultima Verifica"
                filterParams={dateFilterParams}
              />
              <AgGridColumn
                field="Prox"
                headerName="Prossima Verifica"
                filter="agNumberColumnFilter"
              />
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
