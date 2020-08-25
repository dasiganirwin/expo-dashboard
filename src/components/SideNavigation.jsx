import React from "react";
import {
  Button,
  Card,
  Accordion,
  ButtonGroup,
  useAccordionToggle
} from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ fontWeight: "normal", border: "0" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function SideNavigation() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Overview</CustomToggle>
        </Card.Header>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Exhibitor</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ButtonGroup vertical>
              <Button>Add New Exhibitor</Button>
              <Button>Add Products</Button>
              <Button>View list of Exhibitors</Button>
            </ButtonGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="2">Events</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <ButtonGroup vertical>
              <Button>Add New Event</Button>
              <Button>View list of Events</Button>
            </ButtonGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="3">User Information</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <ButtonGroup vertical>
              <Button>Add New User</Button>
              <Button>View list of Users</Button>
            </ButtonGroup>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default SideNavigation;
