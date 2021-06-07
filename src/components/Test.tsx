import React, {useState} from 'react'
import { IState as Props } from "../App";


interface IProps {
    person: Props["person"]
}


const Test: React.FC<IProps> = ({ person }) => {

    const readPerson = () => {
        return person.map(item => {
            return(

                <>

                    <ul>
                        <h1 >{item.name}</h1>
                        <h2>You are {item.age} old</h2>
                        <p>{item.note}</p>
                    </ul>



                </>


            )
        })
    }




    return (
        
        <div>
            {readPerson()}
        </div>
        
    )
}

export default Test

