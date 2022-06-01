import { Nav } from "react-bootstrap";
import React from "react";
//Gallery, RSVP, Registry, GuestBook, Wedding info

export const Navi = () => (
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/Gallery">Gallery</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/RSVP">RSVP</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/Registry">Registry</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/GeustBook">GuestBook</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="/WeddingInfo">Wedding Info</Nav.Link>
    </Nav.Item>
  </Nav>
);
