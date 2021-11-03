import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Email", field: "email" },
      { title: "Descrizione", field: "descr" },
      { title: "Schedule", field: "sched", type: "numeric" },
      {
        title: "Active",
        field: "active",
        lookup: { 34: "Attivo", 63: "Disattivo" }
      }
    ],
    data: [
      { email: "demo@keytech.srl", descr: "Keytech Srl", sched: 6, active: 34 },
      {
        email: "demo2@keytech.srl",
        descr: "Keytech Srl 2",
        sched: 1,
        active: 63
      }
    ]
  });

  return (
    <MaterialTable
      title="Schedule Email"
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
