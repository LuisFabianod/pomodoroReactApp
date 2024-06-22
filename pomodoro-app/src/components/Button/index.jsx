export const Button = ({children, handleFunction, id}) => {
    return (
        <button  className="button" onClick={handleFunction} id={id}>{children}</button>
    )
}