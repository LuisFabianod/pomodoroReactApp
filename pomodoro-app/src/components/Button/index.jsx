export const Button = ({children, handleFunction}) => {
    return (
        <button  className="button" onClick={handleFunction}>{children}</button>
    )
}