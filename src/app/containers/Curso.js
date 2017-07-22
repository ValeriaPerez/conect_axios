import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';

class Curso extends Component {
  // siempre va a poner esto !simpre¡

  handleClick = () => {
    this.props.actions.incrementar();
  }

  handleRestar = () => {
    this.props.actions.decrementar();
  }

  handleMultiplicar = () => {
    this.props.actions.multiplicar();
  }

  //  puede ser para poner un loading
  componentWillMount() {
    console.log('me voy a montar');
  }
  // ejecuta el metodo cuando el componente termino de montarse, cuando quiero cargar un catalogo usamos este
  componentDidMount() {
    this.props.actions.traerPersonas();
    this.props.actions.traerEspecies();
    this.props.actions.traerVehiculos();
    console.log('Ya quede');
    
  }
  render() {
    return (
      <div className="container">
        <div>
          <button style={{widht: '100px', background: 'black', color: 'white', marginLeft: '10px'}} onClick={this.handleClick}>SUMAR</button>
          <button style={{widht: '100px', background: 'black', color: 'white', marginLeft: '10px'}} onClick={this.handleRestar}>RESTAR</button>
          <button style={{widht: '100px', background: 'black', color: 'white', marginLeft: '10px'}} onClick={this.handleMultiplicar}>MULTIPLICAR X 2</button>
          <h2>{this.props.numero}</h2>
        </div>
        {this.props.catalogos.error}
        {this.props.catalogos.loading ? <img src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif" /> : null}
        <div className="container__people">
          <h2>Personas</h2>
          {this.props.catalogos.personas.map((person, index) => {
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
        {this.props.catalogos.error}
        {this.props.catalogos.loading ? <img src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif" /> : null}
        <div className="container__species">
          <h2>Especies</h2>
          {this.props.catalogos.especies.map((itemSpecies, index) => {
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
        {this.props.catalogos.error}
        {this.props.catalogos.loading ? <img src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif" /> : null}
        <div className="container__vehicles">
          <h2>Vehiculos</h2>
          {this.props.catalogos.vehiculos.map((itemVehicles, index) => {
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

Curso.propTypes = {
  numero: PropTypes.number.isRequired,
  catalogos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    numero: state.numero,
    catalogos: state.catalogos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Curso);
