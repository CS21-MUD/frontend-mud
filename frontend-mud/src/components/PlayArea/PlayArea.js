import React, { useEffect, useState } from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import styled from "styled-components";
// holds the room state and number of tiles in the room.
// valid directions will render a new room

const PlayAreaContainer = styled.div`
  border: 1px solid red; 
`;

const PlayArea = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(false);
  useEffect( ()=>{
    axiosWithAuth().get("https://nes-game.herokuapp.com/api/adv/rooms").then(res=> setRooms(res.data) ).catch(err=>setError(true) )

  },[]);



  console.log(rooms);
  if(error){
    return <p>bad boi</p>
  }

  return (
    <PlayAreaContainer>
      <h1>an array of waifus will be rendered here somehow</h1>
      {rooms && rooms.map(room=>{
        return <h1>{room.title}</h1>
      })}

    </PlayAreaContainer>
  );
};
export default PlayArea;
