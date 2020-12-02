import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const Foxes = () => {
  const [foxes, setFoxes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      for (let i = 1; i <= 30; i++) {
        axios.get('https://randomfox.ca/floof/').then((resposta) => {
          setFoxes(resposta.data);
        });
      }
    };
    fetchData();
  }, []);

  if (foxes === null) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <img className="img-foxes" src={foxes.image} />;
    </div>
  );
};

export default Foxes;
