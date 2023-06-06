import React from 'react'
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function Result(props) {

 const handleClose =()=>{props.setShow(false)}

  

  return (
    <div>
      <Modal show={props.show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>{props.result}</>
        </Modal.Body>
        
      </Modal>

    </div>
  )
}

Result.defaultProps = {
    result: "",
    show: false
}
  
 Result.propTypes = {
    result: PropTypes.string,
    show: PropTypes.bool,
  }