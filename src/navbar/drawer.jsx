import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
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

const items1 = [
  { title: "Dashboard", icon: "dashboard", link: "/" },
  { title: "Pdf", icon: "pdf", link: "/pdf" },
  //{ title: "Shops", icon: "shopping-cart-loaded", link: "/shops" },
  { title: "Product", icon: "bullish", link: "/product" },
  { title: "Sales", icon: "briefcase", link: "/sales" }
];
const items2 = [
  { title: "Reports", icon: "presentation", link: "/reports" },
  { title: "Settings", icon: "settings", link: "/settings" }
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
