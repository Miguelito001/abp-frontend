import React from 'react';
import Header from '../layouts/header';
import '../../Assets/CSS/Home.css';
import agenda from '../../Assets/IMG/agenda.png';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const { username } = location.state;

  return (
    <>
      <div className="background-body">
        <Header username={username} />
        <Body />
      </div>
    </>
  );
}

const Body = () => {
  return (
    <>
      <h2 className="home-heading">Serviços</h2>
      <div className="home-container">
        <div className="home-card">
          <div className="home-card-detail">
            <img src={agenda} alt="Agenda" className="home-card-image" />
            <p>Agendamentos</p>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-detail">
            <img alt="Image" className="home-card-image" />
            <p>Agendamentos</p>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-detail">
            <img alt="Image" className="home-card-image" />
            <p>Agendamentos</p>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-detail">
            <img alt="Image" className="home-card-image" />
            <p>Agendamentos</p>
          </div>
        </div>
        <div className="home-card">
          <div className="home-card-detail">
            <img alt="Image" className="home-card-image" />
            <p>Agendamentos</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;