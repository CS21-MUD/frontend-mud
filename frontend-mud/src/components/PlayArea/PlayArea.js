import React from "react";
// import {axiosWithAuth} from "../../utils/axiosWithAuth";
// import Map from "../Map/Map";
// holds the room state and number of tiles in the room.
// valid directions will render a new room
import styled from "styled-components"
const Tiles = styled.div`
background: #ccc
padding: 10px;
margin: 10px;
// transform: rotate(45deg);
display: grid;
grid-template-columns: 60px 60px;
`
const PlayArea = ({rooms}) => {

  console.log(rooms);
  const numOfPlayTiles = [1,2,3,4,5]
  return (
    <div>
      <h1>an array of waifus will be rendered here somehow</h1>
        {numOfPlayTiles.map(()=> <Tiles />)}
    </div>
  );
};
export default PlayArea;
