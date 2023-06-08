

const Button = (props) =>{

    console.log(props, typeof props)

    // props = { btnText:"Apple"}
    

    return(
        <div>
             {/* <p> {a} </p>
             <p>  {6+3+5} </p> */}
             <button className="btn">
                   {props.btnText}
             </button>
        </div>
        
    )


}


export default Button