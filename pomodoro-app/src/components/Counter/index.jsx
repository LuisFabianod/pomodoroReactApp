import { useContext} from "react"
import { CounterContext } from "../../Context/CounterContext"
import { formatCounter } from "./utils/formatCounter"

export const Counter = () => {
    const { counter } = useContext(CounterContext)

    return (
        <h1>{formatCounter(counter)}</h1>
    )
}