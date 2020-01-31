import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import "rbx/index.css";
import { Card, Title, Content, Footer, Image, Column, Group, Button, Navbar, Item, Brand, Burger, Linl, Dropdown, Divider,
Segment, Field, Control, Menu, Icon, Container, Select, Option} from "rbx";

function App() {
  return( 
  <div>
    <Navbar color="success" height={50}>
        <Navbar.Brand>
          <Navbar.Item href="https://travel-bootcamp.firebaseapp.com/">
            <Title style={{color: "white"}}>GroupFund</Title>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item href="https://travel-bootcamp.firebaseapp.com/">Itinerary</Navbar.Item>
            <Navbar.Item href="https://travel-bootcamp.firebaseapp.com/">Upcoming Trips</Navbar.Item>
            <Navbar.Item dropdown hoverable>
              <Navbar.Link href="https://travel-bootcamp.firebaseapp.com/">
                Suggestions
              </Navbar.Link>
            </Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Navbar.Item as="div">
              <Field kind="group">
                <Control>
                  <Button as="a" color="light" href="https://accounts.google.com/accountchooser/signinchooser?flowName=GlifWebSignIn&flowEntry=AccountChooser">
                    <span>Your Profile</span>
                  </Button>
                </Control>
              </Field>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>

      <Title textAlign="centered"></Title>
      <Title textAlign="centered">Chicago Trip</Title>
      <Title subtitle textAlign="centered">Jan 15-Jan 30</Title>

      <Title textAlign="left" style={{marginLeft: 50}}>Daily Itinerary:</Title>
      <Title subtitle style={{marginLeft: 50}}> Jan 17 </Title>
  </div>
  )
};
export default App;
