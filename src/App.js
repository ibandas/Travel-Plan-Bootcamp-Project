import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import "rbx/index.css";
import { Card, Title, Content, Footer, Image, Column, Group, Button, Navbar, Item, Brand, Burger, Linl, Dropdown, Divider,
Segment, Field, Control, Menu, Icon, Container, Select, Option} from "rbx";

import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDVtdJ4ht4S_B8GS1z-xi7x8Hizip5GHW8",
  authDomain: "travel-bootcamp.firebaseapp.com",
  databaseURL: "https://travel-bootcamp.firebaseio.com",
  projectId: "travel-bootcamp",
  storageBucket: "travel-bootcamp.appspot.com",
  messagingSenderId: "68718694979",
  appId: "1:68718694979:web:14ee7aeae3acd8ebdefaf6"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

function App() {
  const [data, setData] = useState({});
  const possibleEvents = Object.values(data);
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/data/test1.json');
      const json = await response.json();
      setData(json);
    };
    fetchEvents();
  }, []);
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
      <Column.Group multiline={true}>
        {!possibleEvents ? "Loading events..." : 
        possibleEvents.map(event => <Event key={event.address_line1} icon={event.icon_id} name={event.name} votes={event.num_votes}></Event>)}
      </Column.Group>
  </div>
  )
};

const Event = ({icon, name, votes}) => {
  return (
    <Column size={12}>
    <Card>
  <Card.Header>{name} <Button>Upvote!</Button> Current Count: {votes}</Card.Header>
    </Card>
    </Column>
  )
};

export default App;
