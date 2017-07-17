import React, {Component} from 'react';
import axios from 'axios';

export default class Curso extends Component {
  // siempre va a poner esto !simpre¡
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      people: [],
      species: [],
      vehicles: []
    };
  }
  //  puede ser para poner un loading
  componentWillMount() {
    console.log('me voy a montar');
  }
  // ejecuta el metodo cuando el componente termino de montarse, cuando quiero cargar un catalogo usamos este
  componentDidMount() {
    console.log('Ya quede');
    axios.get('http://swapi.co/api/people')
      .then(response => {
        this.setState({
          loading: false,
          people: response.data.results
        });
        console.log(response.data.results);
      });

    axios.get('http://swapi.co/api/vehicles')
      .then(response => {
        this.setState({
          loading: false,
          vehicles: response.data.results
        });
        console.log(response.data.results);
      });

    axios.get('http://swapi.co/api/species')
      .then(response => {
        this.setState({
          loading: false,
          species: response.data.results
        });
        console.log(response.data.results);
      });
  }
  render() {
    return (
      <div className="container">
        {this.state.loading ? 'Cargando...' : null}
        <div className="container__people">
          <h2>Personas</h2>
          {this.state.people.map((person, index) => {
            return (
              <ul key={index}>
                <li>Nombre: {person.name}</li>
                <li>Genero: {person.gender}</li>
                <li>Cumplaños: {person.birth_year}</li>
                <li>Color de ojos: {person.eye_color}</li>
                <li>Color de piel: {person.skin_color}</li>
              </ul>
            );
          })}
        </div>
        <div className="container__species">
          <h2>Especies</h2>
          {this.state.species.map((itemSpecies, index) => {
            return (
              <ul key={index}>
                <li>Especie: {itemSpecies.name}</li>
                <li>Clasificación: {itemSpecies.classification}</li>
                <li>DEsignación: {itemSpecies.designation}</li>
                <li>Altura: {itemSpecies.average_height}</li>
                <li>Tono de piel: {itemSpecies.skin_colors}</li>
              </ul>
            );
          })}
        </div>
        <div className="container__vehicles">
          <h2>Vehiculos</h2>
          {this.state.vehicles.map((itemVehicles, index) => {
            return (
              <ul key={index}>
                <li>Nombre: {itemVehicles.name}</li>
                <li>Modelo: {itemVehicles.model}</li>
                <li>Manufactura: {itemVehicles.manufacturer}</li>
                <li>Precio: {itemVehicles.cost_in_credits}</li>
                <li>Número de pasajeros: {itemVehicles.passengers}</li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}
