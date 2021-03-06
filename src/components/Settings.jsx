import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Report", field: "email" },
      { title: "Referente", field: "descr" },
      { title: "Mesi alla Scadenza", field: "sched", type: "numeric" },
      {
        title: "Attivo",
        field: "active",
        lookup: { 34: "Attivo", 63: "Disattivo" }
      }
    ],
    data: [
      { email: "Report 1", descr: "Mario Rossi", sched: 3, active: 34 },
      {
        email: "Report 2",
        descr: "Giovanni Azzurro",
        sched: 1,
        active: 63
      },
      {
        email: "Report 3",
        descr: "Giuseppe Verdi",
        sched: 1,
        active: 63
      }
    ]
  });

  return (
    <MaterialTable
      title="ALERT"
      columns={state.columns}
      data={state.data}
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
