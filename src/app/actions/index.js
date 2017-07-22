import axios from 'axios';

export function incrementar() {
  return {
    type: 'INCREMENTAR'
  };
}

export function decrementar() {
  return {
    type: 'DECREMENTAR'
  };
}

export function multiplicar() {
  return {
    type: 'MULTIPLICAR'
  };
}

export function traerPersonas() {
  return {
    type: 'TRAER_PERSONAS',
    payload: axios.get('http://swapi.co/api/people/')
  };
}

export function traerEspecies() {
  return {
    type: 'TRAER_ESPECIES',
    payload: axios.get('http://swapi.co/api/species')
  };
}

export function traerVehiculos() {
  return {
    type: 'TRAER_VEHICULOS',
    payload: axios.get('http://swapi.co/api/vehicles')
  };
}
