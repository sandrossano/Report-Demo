import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import { Image } from "react-native";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemLink,
  Divider,
  Drawer
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Icon from "../components/Icon";
import { useHistory } from "react-router";
import CryptoJS from "crypto-js";

const items1 = [
  //  { title: "Dashboard", icon: "dashboard", link: "/" },
  { title: "Pdf", icon: "pdf", link: "/pdf" },
  //{ title: "Shops", icon: "shopping-cart-loaded", link: "/shops" },
  { title: "Scadenziario", icon: "schedule", link: "/product" },
  { title: "Reports", icon: "presentation", link: "/reports" }
  //{ title: "Sales", icon: "briefcase", link: "/sales" }
];
const items2 = [
  { title: "Alert", icon: "email", link: "/settings" },
  { title: "Referenti", icon: "user", link: "/sales" }
];
const styles = (theme) => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const DrawerComponent = (props) => {
  const { classes } = props;
  const history = useHistory();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawerHandler}
      onKeyDown={props.toggleDrawerHandler}
    >
      <div style={{ padding: "15px 15px 10px 15px" }}>
        <Image
          style={{
            height: 75,
            resizeMode: "contain"
          }}
          source={{
            uri: "logo.png"
          }}
        />
      </div>
      <List>
        {items1.map((text, index) => (
          <Link to={text.link} style={{ textDecoration: "none" }}>
            <ListItem button key={text.title}>
              <ListItemIcon>
                <Icon
                  size={32}
                  icon={text.icon}
                  style={{ marginBottom: "5px" }}
                  type="color"
                />
                {/*  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                 */}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {items2.map((text, index) => (
          <Link to={text.link} style={{ textDecoration: "none" }}>
            <ListItem button key={text.title}>
              <ListItemIcon>
                <Icon
                  size={32}
                  icon={text.icon}
                  style={{ marginBottom: "5px" }}
                  type="color"
                />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          </Link>
        ))}
        <ListItem
          button
          key={"Torna al Portale"}
          onClick={() => {
            //sessionStorage.clear();
            //window.open("/login", "_self");
            var d = new Date();
            var link =
              "https://demodash.awskeytech.com/?US=" +
              window.sessionStorage.getItem("user") +
              "&TK=" +
              CryptoJS.MD5(d.getHours() + d.getMinutes() + "").toString();
            window.open(link, "_self");
          }}
        >
          <ListItemIcon>
            <Icon
              size={32}
              icon={"home"}
              style={{ marginBottom: "5px" }}
              type="color"
            />
          </ListItemIcon>
          <ListItemText primary={"Torna al Portale"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Drawer open={props.open} onClose={props.toggleDrawerHandler}>
      {sideList()}
    </Drawer>
  );
};

export default withStyles(styles)(DrawerComponent);
