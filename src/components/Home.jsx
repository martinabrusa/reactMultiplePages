import React from "react";
import { Component } from "react";
export default class Login extends Component {



  constructor(props) {
    super(props)


  }



  render() {
    console.log(this.login)

    return (
      <body style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_960_720.jpg")`,
        color: "white",
        backgroundSize: 'cover',
        height: '100vh'
      }} >
        <div className="container mt-5  "  >






          <div className="row form-group " >
            <div className="col " >
              <label className=" text-center" >Email</label>
              <input type="email" class="form-control" id="mail" placeholder="Inserisci email"></input>

            </div>


          </div>

          <div className="row form-group " >
            <div className="col " >
              <label className=" text-center" >Nome</label>
              <input type="text" class="form-control" id="name" placeholder="Inserisci nome"></input>
            </div>
            <div className="col " >
              <label className=" text-center" >Cognome</label>
              <input type="text" class="form-control" id="surname" placeholder="Inserisci il cognome"></input>
            </div>
          </div>
          <br /><br /><br />
          <h2 className="text-center">Serve un preventivo?? Contattami</h2>
          <h3 className="text-center">Descrivi il tuo progetto</h3>
          <br />
          <textarea className="mx-auto d-block"></textarea>
          <br /><br />
          <div><button type="button" class="btn btn-primary mx-auto d-block">Contattami</button></div>

        </div>


      </body>
    )
  }

}