import React from "react";
import { Component } from "react";
export default class Registrazione extends Component {



  constructor(props) {
    super(props)


  }

  render() {
    console.log(this.registrazione)

    return (

      <div className="container mt-5  " >




        <div className="text-center"><h2>Chi sono</h2></div>

        <div className="row form-group " >
          <div className="col " >

            <div class="card-group">
              <div className="card">
                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/05/11/08/48/woman-2303361_960_720.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">About</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}