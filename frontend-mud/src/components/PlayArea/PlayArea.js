import React, { useEffect, useState } from "react";
import axios from 'axios'
// holds the room state and number of tiles in the room.
// valid directions will render a new room

const PlayArea = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(false);
  useEffect( ()=>{

    axios.get("https://nes-game.herokuapp.com/api/adv/rooms").then(res=> setRooms(res.data) ).catch(err=>setError(true) )

  },[]);



  console.log(rooms);
  if(error){
    return <p>bad boi</p>
  }

  return (
    <div>
      <h1>an array of waifus will be rendered here somehow</h1>
      {rooms && rooms.map(room=>{
        return <h1>{room.model}</h1>
      })}

    </div>
  );
};
export default PlayArea;
