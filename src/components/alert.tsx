import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import Alert from "@awsui/components-react/alert"
import React, { Component } from 'react';

class AlertExample extends Component {
  render() {
    return <Container header={<Header variant="h2">Alerts</Header>}>
      <SpaceBetween direction="vertical" size="l">
        <Header variant="h3">Success alert</Header>
        <Alert dismissible={true} type="success">Success alert</Alert>
        <Header variant="h3">Error alert</Header>
        <Alert dismissible={false} type="error">Error alert</Alert>
        <Header variant="h3">Warning alert</Header>
        <Alert dismissible={true} type="warning">Warning alert</Alert>
        <Header variant="h3">Info alert</Header>
        <Alert dismissible={false} type="info">Info alert</Alert>
      </SpaceBetween>
    </Container>
  }
}

export default AlertExample;