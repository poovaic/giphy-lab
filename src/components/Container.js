import {CallApi} from '../services/CallApi'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Map from './Map'
import Input from './Input'
import Button from './Button'

function Container(){
    const[pic,setPic]=useState([])
    const[gif,setGif]=useState([])

    const giphyApi = async()=>{
    let res = await CallApi(gif)
    console.log(res)
    //let output=res.data.data;
    //console.log('output',output)
    setPic(()=>{
        let output=res.data.data;
        return output;
    })
   

    }
    console.log('pic',pic)
    // let url = (output.map((item,index)=>{
    //  return <img  src={item.images.fixed_height_small.url} key={index}/>
    //     }))
    // console.log('url',url)
    // setPic(url)

    // }
    
    return(
        <div>
        <div className="b-and-i">
       
        <Input fun={(e)=>setGif(e.target.value)}    />
        <Button onClick={giphyApi}/>
        {/* <div>{pic}</div> */}
        </div>
        
        <div className='display'>
        <Map mapping={pic}/>
        </div>
        </div>
    )
}

export default Container




// function Container(){
    
//     const[gif,setGif]=useState([])
    
  
//     const handleClick= async(link)=>{
//         let res = await callApi(link)
//         console.log(res);

//     }
//    function inputBox(){

//    }

//     return(
//         <div>
        
//         <Input onChange={(e)=> inputBox(e)}/>
//         <Map/>
//         </div>
//     )
// }
// export default Container