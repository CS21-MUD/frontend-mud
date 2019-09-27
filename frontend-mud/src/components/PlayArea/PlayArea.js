import React from "react";
// import {axiosWithAuth} from "../../utils/axiosWithAuth";
// import Map from "../Map/Map";
// holds the room state and number of tiles in the room.
// valid directions will render a new room
import styled from "styled-components"
const Tiles = styled.div`
background: #ccc
padding 10px;
transform: rotate(45deg);
margin: 10px;
`
const PlayArea = ({rooms}) => {


  console.log(rooms);

  return (
    <div>
      <h1>render things here</h1>
      {rooms && rooms.map(room=>{
        return <Tiles />
      })}
      


    </div>
  );
};
export default PlayArea;
