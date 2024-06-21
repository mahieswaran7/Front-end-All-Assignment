import React, { Component } from 'react'
import staticData from '../shared/constant/ConstantData'
export class ToggleImage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           img:"https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg",
           name:"leaf"
        }
    }
    
changeImage=()=>{
  if(this.state.name==="leaf"){
    this.setState({img:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"}) 
    console.log("hello");
    this.setState({name:"mountain"});
  }else if(this.state.name==="mountain"){

    this.setState({img:"https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg"}) 
    console.log("BYe");
    this.setState({name:"leaf"});
   
  }
}
  
    render() {
        return (
            <div>
                <img src=  {this.state.img} alt=""/>
                 <p>{this.state.name}</p>

                <button  type="button" onClick={()=>this.changeImage()}>Change Image</button>
            </div>
        )
    }
}

export default ToggleImage
