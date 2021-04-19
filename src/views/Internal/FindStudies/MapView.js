import React, { useState, useEffect, Component } from 'react';
import GoogleMapReact from 'google-map-react';
import StudyCardSmall from "views/Internal/StudyCardSmall";
import { Spinner } from "components";
import { FaNotesMedical } from "react-icons/fa";
import {
  Grid,
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  IconButton,
  Tooltip,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  FormControl,
  FormLabel,
  Switch,
  Tag,
  TagLabel,
  TagCloseButton,
 } from "@chakra-ui/react";
 
function MapView(props) {
  const {loc, user, studies, conditions, handleConditions} = props

  const [location, setLocation] = useState()

  const [selected, setSelected] = useState()

  useEffect(() => {
    setLocation(loc)
  }, [loc])

  const handleClick = (nctID) => {
    let study = ""
    studies.map((val, idx) => {
      if (val.id == nctID) {
        study = val
      }
    })
    const locations = study['locations']
    if (locations) {
      setLocation(prev => ({zoom: prev.zoom, center: {lat: (locations[0]).latitude, lng: (locations[0]).longitude}}))
      setSelected(study)
    }
  }

  if (!location) return <Spinner/>
 
    return (
      // Important! Always set the container height explicitly
      <Grid gap="25px" templateColumns="1fr">
      {selected ? (<StudyCardSmall study={selected} user={user} conditions={conditions} handleConditions={handleConditions}/>) : (<></>)}
      <div style={{ height: '50vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAed_hgBp7VzxxTXlC9Buh9l_6gmNgNK1g" }}
          center={location.center}
          zoom={location.zoom}
        >
          {studies.map((study, idx) => {
              const lat = study.locations.length == 0 ? 1 : study.locations[0].latitude
              if (lat == 1) return
              const lng = study.locations[0].longitude
              return(
              <FaNotesMedical
              lat={lat}
              lng={lng}
              key={idx}
              id={study.id}
              size={30}
              color={"red"}
              onClick={(e) => {handleClick(e.nativeEvent.target.id)}} />
              )
          })}
        </GoogleMapReact>
      </div>
      </Grid>
    );
}
 
export default MapView;