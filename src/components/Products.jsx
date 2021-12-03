import React from "react";
import axios from "axios";
import COLORS from "../constants/colors";
import DataGrid, {
  Column,
  MasterDetail,
  HeaderFilter,
  SearchPanel,
  ColumnChooser,
  FilterRow,
  Toolbar,
  StateStoring,
  FilterPanel,
  Item
} from "devextreme-react/data-grid";
import { Template } from "devextreme-react/core/template";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Icon from "./Icon";
import Button from "devextreme-react/button";

import service from "./json.js";

const employees = service.getEmployees();

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.calndar = {};
    this.state = {
      visiblePopup: false,
      hh: 5,
      date1: "2021-09-01",
      date2: "2026-08-31",
      openVariant: false,
      variant: [],
      stati: []
    };
  }

  componentDidMount() {
    //var email = window.sessionStorage.getItem("user");
    var variant = [];
    var stati = [];
    var link =
      "https://keytech-demo-backend.herokuapp.com/api/getvariant/PRODUCT";
    axios.get(link).then(
      (result) => {
        for (let i = 0; i < result.data.length; i++) {
          variant.push(result.data[i].variant);
          stati.push(result.data[i].state);
        }

        this.setState({ stati: stati, variant: variant });
      },
      // Nota: è importante gestire gli errori qui
      // invece di un blocco catch() in modo da non fare passare
      // eccezioni da bug reali nei componenti.
      (error) => {
        this.setState({
          //items: []
        });
      }
    );
  }

  onTodoChange(id, value) {
    if (id === "hh") this.setState({ hh: value });
    if (id === "date1") this.setState({ date1: value });
    if (id === "date2") this.setState({ date2: value });
    console.log(value);
  }

  salvaVariante() {
    var nome = prompt("Inserire nome Variante");
    if (nome === undefined || nome === "" || nome === null) {
      return;
    }
    var variant = this.state.variant;
    for (let i = 0; i < variant.length; i++) {
      if (variant[i] === nome) {
        alert("Esiste già una variante con questo nome!");
        return;
      }
    }

    var filter = this.gridRef.current.instance.state();
    //console.log(visibile);
    var obj = JSON.stringify(filter);
    var link =
      "https://keytech-demo-backend.herokuapp.com/api/createvariant/" +
      "PRODUCT" +
      "~" +
      nome +
      "~" +
      window.sessionStorage.getItem("user") +
      "~" +
      obj;
    axios.get(link).then(
      (result) => {
        var stati = this.state.stati;

        stati.push(obj);
        variant.push(nome);
      },
      // Nota: è importante gestire gli errori qui
      // invece di un blocco catch() in modo da non fare passare
      // eccezioni da bug reali nei componenti.
      (error) => {
        this.setState({
          //items: []
        });
      }
    );
  }
  apriVariante() {
    this.setState({
      openVariant: true
    });
  }
  chiudiVariante() {
    this.setState({
      openVariant: false
    });
  }
  caricaVariante(item) {
    var variant = this.state.variant;
    var pos = 0;
    for (let i = 0; i < variant.length; i++) {
      if (variant[i] === item) {
        pos = i;
        break;
      }
    }
    var expr = JSON.parse(this.state.stati[pos]);
    //this.gridRef.current.instance.clearFilter();
    this.gridRef.current.instance.state(expr);
    this.setState({
      openVariant: false
    });
  }
  deleteVariante(item) {
    var variant = this.state.variant;
    var pos = 0;
    for (let i = 0; i < variant.length; i++) {
      if (variant[i] === item) {
        pos = i;
        break;
      }
    }
    //var expr = JSON.parse(this.state.stati[pos]);
    //this.gridRef.current.instance.clearFilter();
    var stati = this.state.stati;

    var link =
      "https://keytech-demo-backend.herokuapp.com/api/deletevariant/" +
      "PRODUCT" +
      "~" +
      variant[pos];
    axios.get(link).then(
      (result) => {
        delete variant[pos];
        delete stati[pos];
        this.setState({
          variant: variant,
          stati: stati,
          openVariant: false
        });
      },
      // Nota: è importante gestire gli errori qui
      // invece di un blocco catch() in modo da non fare passare
      // eccezioni da bug reali nei componenti.
      (error) => {
        this.setState({
          //items: []
        });
      }
    );
  }
  render() {
    function cellRender(data) {
      return (
        <Icon
          size={25}
          icon={data.value}
          /*style={{ marginBottom: "5px" }}*/
          color={COLORS.white}
          type="color"
        />
      );
    }

    return (
      <div>
        <DataGrid
          id={"grid-container"}
          dataSource={employees}
          keyExpr={"ID"}
          columnAutoWidth={false}
          columnHidingEnabled={true}
          showBorders={true}
          ref={this.gridRef}
          allowColumnReordering={true}
        >
          {/*<SearchPanel visible={true} />*/}
          <HeaderFilter visible={true} />
          <SearchPanel visible={true} width={200} />
          <FilterPanel visible={true} />
          <FilterRow visible={true} />
          <StateStoring enabled={false} />
          <Column
            dataField="Stato"
            width={45}
            allowSorting={false}
            cellRender={cellRender}
            caption={"Stato"}
          />
          <Column dataField={"PlantId"} caption={"Id Impianto"} />
          <Column dataField={"Local"} caption={"Località Fornitura"} />
          <Column
            hidingPriority={0}
            dataField={"Addr"}
            caption={"Indirizzo Fornitura"}
          />
          <Column dataField={"TpServ"} caption={"Tipo Servizio"} />
          <Column
            width={90}
            dataField={"Last"}
            caption={"Ultima Verifica"}
            dataType={"date"}
            format="dd/MM/yyyy"
          />
          <Column
            width={90}
            dataField={"Prox"}
            caption={"Prossima Verifica"}
            dataType={"date"}
            format="dd/MM/yyyy"
          />
          <MasterDetail
            enabled={true}
            // component={MasterDetailGrid}
            template={"buttons"}
          />
          <Toolbar>
            {/* <Item location="after">
              <Button
                icon="exportpdf"
                text="Export PDF"
                onClick={(e) => this.exportGrid(e)}
              />
            </Item>*/}
            <Item location="before">
              Varianti: &nbsp;
              <Button
                icon="folder"
                hint="Carica Variante"
                onClick={(e) => this.apriVariante()}
              />
              <Menu
                id="simple-menu"
                //anchorEl={anchorEl}
                //keepMounted
                open={this.state.openVariant}
                onClose={(e) => this.chiudiVariante()}
              >
                {this.state.variant.map((item) => (
                  <MenuItem
                    style={{ minWidth: "150px" }}
                    onClick={(e) => this.caricaVariante(item)}
                  >
                    {item}
                    {this.state.openVariant ? (
                      <ListItemSecondaryAction>
                        <IconButton
                          onClick={(e) => this.deleteVariante(item)}
                          edge="end"
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    ) : null}
                  </MenuItem>
                ))}
              </Menu>
              &nbsp;
              <Button
                icon="save"
                hint="Salva Variante"
                onClick={(e) => this.salvaVariante()}
              />
            </Item>
            <Item location="before" name="searchPanel"></Item>

            <Item>
              <Button
                icon="email"
                text="Email"
                onClick={(e) => this.exportGrid(e)}
              />
            </Item>
            <Item name="columnChooserButton" />
            <Item />
          </Toolbar>
          <ColumnChooser enabled={true} mode="select" />
          <Template name={"buttons"}>
            <Button
              text={"Edit"}
              onClick={() =>
                this.setState({
                  visiblePopup: !this.state.visiblePopup
                })
              }
              //onClick={this.clickHandler}
            />
          </Template>
        </DataGrid>

        {this.state.visiblePopup && (
          <div>
            <div
              onClick={() =>
                this.setState({
                  visiblePopup: false
                })
              }
              className="popup-overlay"
            ></div>
            <div className="popup">
              <button
                onClick={() =>
                  this.setState({
                    visiblePopup: false
                  })
                }
                className="close-popup"
              ></button>
              <div className="popup__content">
                <span className="labelfield">Impianto:</span>
                <span>&nbsp; GROTTA AZZURRA</span>
                <br />
                <hr />
                <div style={{ marginBottom: "-20px" }}>
                  <span className="labelfield">Ultima Verifica:</span>
                  &nbsp;
                  <div className="center" style={{ display: "inline" }}>
                    <input
                      className="inputdate"
                      name="duration"
                      type="date"
                      //placeholder="Num. Anni"
                      //width="50px"
                      value={this.state.date1}
                      onChange={(e) =>
                        this.onTodoChange("date1", e.target.value)
                      }
                    />
                  </div>
                </div>
                <br />
                <hr />
                <div style={{ marginBottom: "-20px" }}>
                  <span className="labelfield">Anni Scadenza:</span>
                  &nbsp;
                  <div className="center" style={{ display: "inline" }}>
                    <input
                      className="inputdurat"
                      name="duration"
                      type="number"
                      placeholder="Num. Anni"
                      //width="50px"
                      value={this.state.hh}
                      onChange={(e) => this.onTodoChange("hh", e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <hr />
                <span className="labelfield">Scar. Atm. </span>
                &nbsp;
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <br />
                <hr />
                <div style={{ marginBottom: "-20px" }}>
                  <span className="labelfield">Prossima Verifica:</span>
                  &nbsp;
                  <div className="center" style={{ display: "inline" }}>
                    <input
                      className="inputdate2"
                      name="duration"
                      type="date"
                      //placeholder="Num. Anni"
                      //width="50px"
                      readOnly
                      value={this.state.date2}
                      onChange={(e) =>
                        this.onTodoChange("date2", e.target.value)
                      }
                    />
                  </div>
                </div>
                <br />
                <hr />
                <span className="labelfield">Note:</span>
                <br />
                <textarea
                  className="inputnote"
                  rows="2"
                  onChange={(e) => this.onTodoChange("note", e.target.value)}
                  name="comment"
                  value={this.state.note}
                  placeholder="Inserire testo..."
                ></textarea>
                <br />
                <hr />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div style={{ display: "inline-block" }}>
                    <button
                      name="done"
                      //type="submit"
                      className="editfield"
                      onClick={() => this.editQuery()}
                    >
                      Modifica
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  /*  const dataGridRef = React.createRef();
  const exportGrid = React.useCallback(() => {
    const doc = new jsPDF();
    const dataGrid = dataGridRef.current.instance;*/
  /*exportGrid = (e) => {
    const doc = new jsPDF();
    const dataGrid = e.current.instance;
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: dataGrid
    }).then(() => {
      doc.save("Customers.pdf");
    });
  };
*/
  clickHandler = (e) => {
    console.log("call Edit_Window");
  };
}

export default Products;
