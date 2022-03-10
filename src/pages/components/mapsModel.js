import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import ReactMapGL, { Marker } from 'react-map-gl';
import { IoLocationSharp } from "react-icons/io5";



export default function MapsModel({ show, hide, location, setLocation }) {
  
    const [viewport, setViewport]  =useState({
        longitude: 73.0479,
        latitude: 33.6844,
        zoom: 6,
        pitch: 0,
        bearing: 0,
  });
  const onClick = event => {
    setLocation(event.lngLat)
    hide();
  };

  return (
    <Modal
      show={show}
      onHide={hide}
      animation
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title>Add Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{width:"100%", height:"60vh"}}>
            <ReactMapGL
                {...viewport}
                width='100%'
                height='100%'
                onViewportChange={setViewport}
                mapboxApiAccessToken={process.env.REACT_APP_TOKEN}
                onClick={setLocation && onClick}
                >
                {location &&
                 <Marker longitude={location[0]} latitude={location[1]} anchor="bottom" >
                    <IoLocationSharp title="userlocation" size={18} className="mr-2" />
                 </Marker>
                }
            </ReactMapGL>
            </div>
        </Modal.Body>
    </Modal>
  )
}
