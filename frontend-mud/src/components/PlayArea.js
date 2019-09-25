import React, {useState} from 'react'
import {useFetch} from "../utils/useFetch"
// holds the room state and number of tiles in the room.
// valid directions will render a new room

const PlayArea = () =>{

const { loading, data: room, error } = useFetch(
    "https://lambda-mud-test.herokuapp.com/api/adv/rooms"
  )
// [ { name: ocean, position: 123143 } ]
console.log(room, loading,error)
    return (
        <div>
            
        </div>
    )
}
export default PlayArea
