import React, { useState, useEffect } from "react";
import "./form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";

import Logo from "../../images/khana.png"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


import { Link, useHistory } from "react-router-dom";
import khana from "../../images/khana.png"


import { auth, signInWithEmailAndPassword } from "../router/firebase";

function Signin() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const history = useHistory();
  // useEffect(()=>{
  //   setemail(null);
  //   setpassword(null)
  // },[])


  const sign = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      history.push("./Reqtab")


    } catch (err) {

      console.log(err)
    }
  }

  return (
    <div>
      <>

        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand >< img className="Logo" src={khana} /></Navbar.Brand>


            <Nav className="me-auto">

              <Nav.Link className="login">
                <Link style={{ color: '#009387', textDecoration: 'none' }} to="/">GoBack</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>


      </>
      <div style={{ marginLeft: '300px' }}>



        <div className="center" style={{ paddingTop: "100px", border: '2px solid #009387', width: '700px' }}>
          {/* <div style={{textAligin:'center'}}>

   <img style={{paddingLeft:'100px',width:"200px"}}  src={Logo}/>
              </div> */}

          <h1 style={{ color: "#009387" }}>Sign In Form</h1>
          <div className="form" style={{ paddingTop: "30px" }}>


            <div className="txt">
              <input value={email} onChange={(ev) => { setemail(ev.target.value) }} type="text" required />
              <span></span>
              <label for="Username" >E-mail</label>
            </div>
            <div className="txt">
              <input value={password} onChange={(ev) => { setpassword(ev.target.value) }} type="password" required />
              <span></span>
              <label for="Password">Password</label>
            </div>

            <button className="submit" style={{ backgroundColor: '#009387', color: '#fff' }} onClick={sign}> Login</button>
            <div>


            </div>
          </div>
        </div>

      </div>
    </div>


  )
}

export default Signin;