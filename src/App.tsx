import Form from "@awsui/components-react/form";
import FormField from "@awsui/components-react/form-field";
import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import AppLayout from "@awsui/components-react/app-layout";
import SideNavigation from "@awsui/components-react/side-navigation";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AlertExample from "./components/alert"
import ButtonExample from "./components/button"
import IconExample from "./components/icon"

function App() {
  /**
   * Create a component under /components
   * And then import it and add it to this list to let it show up as a route and in the side nav
   */
  const componentMapping = {
    AlertExample,
    ButtonExample,
    IconExample,
  };

  function getComponentItems() {
    let keys = Object.keys(componentMapping);
    let items = []
    keys.forEach((componentKey) => {
      let component = componentMapping[componentKey];
      let componentVisualName = component.name[0].toUpperCase() + component.name.substring(1, component.name.length - 'Example'.length)
      let componentItem = {
        type: 'link',
        text: componentVisualName,
        href: '/' + componentVisualName,
        element: component
      };
      items.push(componentItem);
    });

    return items;
  }

  return (
    <AppLayout
      navigation={
        <SideNavigation
          header={{
            text: 'AWS-UI React Component Examples',
            href: '/'
          }}
          items={getComponentItems()}
        />
      }
      content={
        <Form
          header={
            <Header variant="h1">
              AWS-UI Examples
            </Header>
          }
        >
          <BrowserRouter>
            <Routes>
              {getComponentItems().map(function(component)  {
                return <Route key={component.href} path={component.href} element={React.createElement(component.element, {})}/>
              })}
            </Routes>
          </BrowserRouter>
        </Form>
      }
    />
  );
}

export default App;
