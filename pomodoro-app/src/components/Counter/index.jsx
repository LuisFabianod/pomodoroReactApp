import { useContext} from "react"
import { CounterContext } from "../../Context/CounterContext/counterContext"

export const Counter = () => {

    const { counter, setCounter } = useContext(CounterContext)

    const formatCounter = () => {
        const minutes = Math.floor(counter / 60);
        const seconds = Math.floor(counter % 60);
        return `${( "0" + minutes).slice(-2)}:${( "0" + seconds).slice(-2)}`
    }   

  
    return (
        <h1>{formatCounter()}</h1>
    )
}