
function Button(props){


    return(
        <div className="button">
            <button onClick={props.onClick}> Click for GIFs</button>
        </div>
    )
}
export default Button