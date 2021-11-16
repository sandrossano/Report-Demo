import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Email",
        field: "email",
        //width: "200px",
        cellStyle: {
          textAlign: "right"
        }
      },
      {
        title: "Nome e Cognome",
        field: "descr",
        //width: "300px",
        cellStyle: {
          textAlign: "right"
        }
      },
      {
        title: "Unità di appartenenza",
        field: "sched",
        type: "numeric",
        //width: "100px",
        cellStyle: {
          textAlign: "right"
        }
      },
      {
        title: "Telefono",
        field: "tel",
        type: "numeric",
        //width: "50px",
        cellStyle: {
          textAlign: "right"
        }
      },
      {
        title: "Alert",
        field: "active",
        lookup: { 11: "Report 1", 22: "Report 2", 33: "Report 3" },
        //width: "60px",
        cellStyle: {
          textAlign: "right"
        }
      }
    ],
    data: [
      {
        email: "demo1@goriacqua.it",
        descr: "Mario Rossi",
        sched: "FOGNARIO",
        tel: "3332220011",
        active: 11
      },
      {
        email: "demo2@goriacqua.it",
        descr: "Giuseppe Verdi",
        tel: "3332220011",
        sched: "IDRICO",
        active: 22
      }
    ]
  });

  return (
    <MaterialTable
      title="Schedule Email"
      columns={state.columns}
      data={state.data}
      options={
        {
          // tableLayout: "fixed"
        }
      }
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
