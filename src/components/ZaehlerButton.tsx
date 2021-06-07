import React, {useState} from 'react'
import {IZaehler as Props} from '../App'

type IProps = {
    setZahl : React.Dispatch<React.SetStateAction<Props["zaehler"]>>
    zaehler: Props["zaehler"]
}

const ZaehlerButton: React.FC<IProps> = ({setZahl, zaehler}) => {

    const [input, setInput] = useState({
        number: 1
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.number) return

        setZahl(
            
             {
                 number: input.number     
            }
            
        );

        setInput({
            number: ++input.number
        })
    }

    return (
        <div >
            <input
                type='number'
                onChange={handleChange}
                name="number"
                value={input.number}
            />
            <button
                onClick={handleClick}
            >
                Change Number
            </button>
            
        </div>
    )
}

export default ZaehlerButton
