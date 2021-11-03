import React, { Component, Fragment } from "react";
import Grid from "./Grid";
import Card from "./Card";
import COLORS from "../constants/colors";
import { Image } from "react-native";
import css from "../styles.css";
import { Link } from "react-router-dom";
import { DesktopWindows } from "@material-ui/icons";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    if (window.sessionStorage.getItem("logged") !== "X") {
      //window.location.href = "/login";
      window.open("/login", "_self");
    } /*else {
      if (window.performance) {
        if (performance.navigation.type == 1) {
          window.open("/", "_self");
        }
      }
    }*/
    window.sessionStorage.getItem("user");
    this.state = {};
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {};

  handleSubmit(event) {}

  render() {
    const infoItems = [
      { title: "Reports", icon: "speaker", number: 36, color: COLORS.green },
      {
        title: "Money",
        icon: "money-bag-pound",
        number: "$ 45,275",
        color: COLORS.yellow
      },
      {
        title: "Average distance",
        icon: "bicycle",
        number: "25, 236",
        color: COLORS.main
      },
      { title: "Dislikes", icon: "thumbs-down", number: 679, color: COLORS.red }
    ];

    return (
      <div>
        <Image
          style={{ height: 150, resizeMode: "contain" }}
          source={{
            uri: "logokey.png"
          }}
        />
        <Grid
          gap="20px"
          rows="100px 100px 100px 100px 100px 100px 100px"
          columns="0.5fr 0.5fr"
          areas={`
            'info1 info2 info5 info6'
            'graph graph'
            'info3 info4'
            'graph graph'
            'weather calendar rise rise'
            'weather calendar rise rise'
            'map map map map'
            'map map map map'
            'map map map map'
          `}
        >
          {infoItems.map((item, idx) => (
            <Card.Info
              title={item.title}
              number={item.number}
              icon={item.icon}
              color={item.color}
              class={css.CardCustom}
              style={{ gridArea: `info${idx + 1}` }}
            >
              {item.title}
            </Card.Info>
          ))}
          {/* <Card style={{ gridArea: "graph" }}>
            
          </Card>

         </Card>
          <Card style={{ gridArea: "weather" }} />
          <Card style={{ gridArea: "calendar" }} />
          <Card style={{ gridArea: "rise" }} />
          <Card style={{ gridArea: "map" }} /> */}
        </Grid>
      </div>
    );
  }
}
export default Dashboard;
