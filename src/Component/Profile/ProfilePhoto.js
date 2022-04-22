import React from "react";
import Profilepic from "../../Profilepic.jpg";
import '../../profilecss.css'; 


function Profileimg (){
    return(
        <>
        <img className="profileimg" src={Profilepic}></img>
        </>
    )


}
export default Profileimg;