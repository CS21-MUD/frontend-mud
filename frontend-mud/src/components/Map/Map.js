import React from 'react'

import styled from "styled-components"
const CornerMap = styled.div`
    background: #000;
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: 40px;
    right: 40px;
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

    return (
        <CornerMap>
            {props.rooms && props.rooms.map(room => {
             return   <div className="generic-location"></div>
            })}
        </CornerMap>
    )
}

export default Map