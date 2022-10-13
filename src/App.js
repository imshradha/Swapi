import React, { useState, useEffect } from 'react';
import {Container, Dimmer, Loader} from 'semantic-ui-react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import People from './Components/People';
import PeopleDetails from './Components/PeopleDetails';

function App() {
  const [people, setPeople] = useState([])
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPeople = async() => {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results)
      setLoading(false)
    }

    // const fetchDetails = async() => {
    //   let res = await fetch('https://swapi.dev/api/people/:id/');
    //   let data = await res.json();
    //   setDetails(data.allow);
    //   setLoading(false)
    // }

    fetchPeople();
    
    
    //fetchDetails();

  }, [])

  console.log('People ', people);
  //2console.log('Details ', details);
  
  return (
      <Router>
      <Navbar/>
      <Container>
      {loading ? (
        <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
        </Dimmer>
      ): (
        <Routes>
      <Route path='/people' element={<People data={people}/>}> </Route>
      <Route path='/people-detail' element={<PeopleDetails data={details}/>}> </Route>
      </Routes>
      )}
      </Container>
      </Router>
  );
}

export default App;