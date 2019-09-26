import PlayArea from "./PlayArea/PlayArea";
// import Map from "./Map/Map";
import React from "react";
import Map from "./Map/Map";

import {axiosWithAuth} from "../utils/axiosWithAuth";
import {useAxiosFetch} from "../utils/useFetch";

const Core = () =>{
    const { loading, data: rooms, error } = useAxiosFetch("https://nes-game.herokuapp.com/api/adv/rooms)", axiosWithAuth().get("https://nes-game.herokuapp.com/api/adv/rooms)") )


    if(loading){
        return <p>Loading...</p>
    }
    console.log(rooms);
    if(error){
        return <p>bad boi</p>
    }
    return <>
        <PlayArea rooms={rooms} /> <Map rooms={rooms} /> 
        </>;
}

export default Core
