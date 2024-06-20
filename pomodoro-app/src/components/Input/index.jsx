export const Input = ({labelText, classNameMinutes, classNameSeconds}) => {

    return(
        <div className='input-wrapper'>
        <div className='label'>
            <label>{labelText}</label>
        </div>   
        <div className='input'>               
            <input type="number" name={classNameMinutes} className={classNameMinutes} placeholder='00' />
            <p>:</p>
            <input type="number" name={classNameSeconds} className={classNameSeconds} placeholder='00' />
        </div>  
    </div>
    )
   
};
