import React, { Component } from 'react'

export class MultipleImage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            img:"https://i.pinimg.com/736x/84/0f/25/840f250727bbe369447d47af3704e8df.jpg",
        }
    }
 ram=()=>{
    this.setState({img:"https://i.pinimg.com/736x/84/0f/25/840f250727bbe369447d47af3704e8df.jpg"}) 
    console.log("ram");
 }
 
 tiger=()=>{
    this.setState({img:"https://stat4.bollywoodhungama.in/wp-content/uploads/2023/08/Tiger-Shroff-1-4.jpg"}) 
    console.log("tiger");
 }
 kaipulla=()=>{
    this.setState({img:"https://sg-res.9appsdownloading.com/sg/res/jpg/d4/32/0c789b89ba70affe5eb2e5de5a35-v9y4.jpg?x-oss-process=style/mq200"}) 
    console.log("kaipulla");
 }
 hrithik=()=>{
    this.setState({img:"https://www.bollywoodhungama.com/wp-content/uploads/2017/02/Hrithik-Roshan-54.jpg"}) 
    console.log("hrithik");
 }
 das=()=>{
    this.setState({img:"https://www.filmibeat.com/wimg/mobi/2022/06/arjun-das_8.jpg"}) 
    console.log("Arjun Das");
 }
    
    render() {
        return (
            <div>
                <img src= {this.state.img} alt="" height="300px" width="500px"/>
                <div>
                <button type="button" onClick={()=>this.ram()}>Ramcharan</button>
                <button type="button" onClick={()=>this.tiger()}>Tiger-Shroff</button>
                <button type="button" onClick={()=>this.kaipulla()}>Kaipulla</button>
                <button type="button" onClick={()=>this.hrithik()}>Hrithik</button>
                <button type="button" onClick={()=>this.das()}>Arjun Das</button>
                </div>
               
            </div>
          
        )
    }
}

export default MultipleImage
