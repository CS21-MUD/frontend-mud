import React from "react";
import { useFetch } from "../../utils/useFetch";
// holds the room state and number of tiles in the room.
// valid directions will render a new room

const PlayArea = () => {
  //    { bool,    array,      bool  }
  const { loading, data: room, error } = useFetch(
    "https://lambda-mud-test.herokuapp.com/api/adv/rooms"
  );

  //return loading or error states instead of app
  if (loading) return <h1>loading...</h1>;
  if (error) return <p>{error}</p>;

  const rooms = JSON.parse(room.rooms)
  console.log(rooms)
  return (
    <div>
      <h1>an array of tiles will be rendered here somehow</h1>
      {rooms && rooms.map(room=>{
        return <h1>{room.model}</h1>
      })}
     
    </div>
  );
};
export default PlayArea;
