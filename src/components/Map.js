import React from "react"

function Map(props){
console.log(props)
const {mapping} =props
console.log('mapping',mapping)
return(
    <div className="map">
        {mapping.map((item,index)=>{
    return <img  src={item.images.fixed_height_small.url} key={index}/>
    })
    }
    
    </div>
)

}
export default Map