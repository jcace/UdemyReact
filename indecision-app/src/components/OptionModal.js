import React from 'react';
import Modal from 'react-modal';

// Stateless functional component
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose = {props.handleCloseModal}
    contentLabel="Selected Option"
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>Close</button>
  </Modal>
);

export default OptionModal;

// Create a new event handle in IndecisionApp that clears selectedOption state
// Pass that into optionModal (as prop?)
// Call it on button click