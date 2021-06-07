import React, {useState, useEffect} from 'react'
import { IZaehler as Props } from "../App";

type IZaehler = {
    zaehler: Props["zaehler"]    
};

const TypeTest: React.FC<IZaehler> = ({zaehler}) => {

    

    return (
        <div className='changingNumber'>

            <h1>{zaehler.number}</h1>

        </div>
    )
}

export default TypeTest
