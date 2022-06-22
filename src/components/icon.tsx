import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import Button from "@awsui/components-react/button";
import Icon from "@awsui/components-react/icon"
import React, { Component } from 'react';

class IconExample extends Component {
  render() {
    let names = [
      "add-plus",
      "angle-left-double",
      "angle-left",
      "angle-right-double",
      "angle-right",
      "angle-up",
      "angle-down",
      "arrow-left",
      "bug",
      "call",
      "calendar",
      "caret-down-filled",
      "caret-down",
      "caret-left-filled",
      "caret-right-filled",
      "caret-up-filled",
      "caret-up",
      "contact",
      "close",
      "copy",
      "download",
      "edit",
      "ellipsis",
      "envelope",
      "expand",
      "external",
      "file-open",
      "file",
      "filter",
      "folder-open",
      "folder",
      "heart",
      "key",
      "lock-private",
      "menu",
      "microphone",
      "notification",
      "refresh",
      "search",
      "settings",
      "share",
      "status-in-progress",
      "status-info",
      "status-negative",
      "status-pending",
      "status-positive",
      "status-stopped",
      "status-warning",
      "treeview-collapse",
      "treeview-expand",
      "undo",
      "unlocked",
      "upload",
      "user-profile",
      "view-full",
      "view-horizontal",
      "view-vertical",
      "zoom-in",
      "zoom-out",
    ];

    let variants = [
      "normal",
      "disabled",
      "error",
      "inverted",
      "link",
      "subtle",
      "success",
      "warning"
    ];

    return <Container header={<Header variant="h2">Icons</Header>}>
      <table>
        <tr>
          <th></th>
          {
            variants.map((variant) => <th key={variant}>{variant}</th>)
          }
        </tr>
        <tbody>
          {names.map(function(name) {
            return <tr key={name}>
              <td>{name}</td>
              {
                variants.map(function(variant) {
                  return <td key={name + variant + "td"}><Icon key={name + variant} name={name} variant={variant}></Icon></td>;
                })
              }
            </tr>
          })}
        </tbody>
      </table>
    </Container>
  }
}

export default IconExample;