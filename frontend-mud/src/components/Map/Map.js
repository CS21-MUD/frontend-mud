import React from 'react'
import styled from "styled-components"
const CornerMap = styled.div`
    background: #000;
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: 40px;
    right: 40px;
    display: grid;
    overflow: scroll;
    .player-location{
        background: yellow;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
     .generic-location{
        background: #3AA1FF;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
  
`

const Map = (props) =>  {
    //map takes in the rooms location and renders them appropriately along with the player-location
    const generateLinks = (rooms) =>{
        for (let i = 0; i <rooms.length ; i++) {
            const id = i;
            // check if the current room has next id in any of the properties
            //if it has the next id the player is allowed to move there
        }
    };
    const [playerPosition, setplayerPosition] = React.useState(props.rooms[0].id)
    console.log(props);
    const handleKeypress = (key)=>{
        console.log(key);
        console.log(playerPosition)
        const room = props.rooms.filter((room)=> room.id === playerPosition)[0];
        console.log(room);
        let notLastRoom = props.rooms[props.rooms.length-1 ].id - 1 > playerPosition;
        console.log(props.rooms[playerPosition]);
        console.log(playerPosition)

            //north
        if(key === "w" && room.n_to > 0 && notLastRoom){
            console.log("going north")
            setplayerPosition(room.n_to)
        }
        else if(key === "a" && room.w_to >0 && notLastRoom){
            console.log("going north")
            setplayerPosition(room.w_to)
        }
        else if(key === "s" && room.s_to >0 && notLastRoom){
            console.log("going north")
            setplayerPosition(room.s_to)
        }
        else if(key === "d" && room.e_to >0 && notLastRoom){
            console.log("going north")
            setplayerPosition(room.e_to)
        }

         else{
            console.log("defaulting")
            console.log("cant go that way")
        }


    }

    if(props.rooms){
        generateLinks(props.rooms)
    }

    React.useEffect(()=>{
        const keypress = (e)=>{
            handleKeypress(e.key)
        };
        window.addEventListener("keypress",keypress );
        return () => window.removeEventListener("keypress", keypress)
        // eslint-disable-next-line
    }, []);

    return (
        <CornerMap>
            {props.rooms && props.rooms.sort((room1, room2)=> room1.id - room2.id).map((room,i)=>{
                if(room.id === playerPosition){
                    return <div className="player-location" />
                }
                else{
                    return  <div className={"generic-location"}>{i}</div>
                }

            })}
        </CornerMap>

    )
}

export default Map