import React ,{useState} from "react";
import "../form/form.css"


import  {Link, useHistory}  from "react-router-dom";
 import khana from "../../images/khana.png"


import { auth, createUserWithEmailAndPassword, db,doc ,setDoc} from "../router/firebase"
export default function AddManager() {
  const  [email, setemail]=useState("")
  const  [password, setpassword]=useState("")
 
  const history = useHistory(); 


 
    const sign = async () => {
        try {
       
        
            let { user } = await createUserWithEmailAndPassword(auth, email, password);
            let dataRef = doc(db, 'users', user.uid)
        
alert("succesfuly Added Manager");
setemail("")
setpassword(""
)
            
            await setDoc(dataRef, {
                email: user.email,
                uid: user.uid,
                
            });
           
          
        } catch (err) {
            alert(err)
            
           
        }      }

    return (
        <div>

        <div>

          
         
            <div className="center">
      <h1>AddManager</h1>

   
        <div className="form">

          <img className="khana" src={khana}/>
          
        <div className="txt">
          <input value={email}   onChange={(ev) => { setemail(ev.target.value) }} type="text" required />
          <span></span>
          <label for="Username" >E-mail</label>
        </div>
        <div className="txt">
          <input value={password} onChange={(ev) => { setpassword(ev.target.value) }} type="password" required />
          <span></span>
          <label for="Password">Password</label>
        </div>
        
      <button className="submit"  onClick={sign}> AddManager</button>
        <div>


        </div>
        </div>
    </div>
           
        </div>
        </div>

        
    )
}
