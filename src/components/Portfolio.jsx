import React from "react";
import { Component } from "react";
import axios from 'axios'
export default class Quiz extends Component {

    constructor(props) {
        super(props)


    }

    componentDidMount() {
        axios.get('https://localhost:8085/quiz/')
            .then((risultato) => {

                let elencoQuiz = [

                ]

                let quiz = {
                    titolo: risultato.data.titolo,

                }

                this.setState((state, props) => {
                    return {
                        quiz: quiz
                    }
                })
            })
            .catch((errore) => {
                console.log(errore)
            })
    }


    render() {
        console.log(this.creaQuiz)

        return (
            <div className="container mt-5  " >



                <div className="text-center"><h2> Portfolio</h2></div>

                <br /> <br />
                <div className="row  " >
                    <div className="col " >
                       <div className="img-fluid"><img src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg" alt="..." class="img-thumbnail"/></div>
                       </div>
                       <div className="col " >
                       <div className="img-fluid"><img src="https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg" alt="..." class="img-thumbnail"/></div>
                    
                    </div>
                    
                </div>

                <div className="row  " >
                    <div className="col " >
                       <div className="img-fluid"><img src="https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_960_720.jpg" alt="..." class="img-thumbnail"/></div>
                       </div>
                       <div className="col " >
                       <div className="img-fluid"><img src="https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295436_960_720.jpg" alt="..." class="img-thumbnail"/></div>
                    
                    </div>
                    
                </div>

                <div className="row  " >
                    <div className="col " >
                       <div className="img-fluid"><img src="https://cdn.pixabay.com/photo/2016/05/02/13/17/deer-1367217_960_720.jpg" alt="..." class="img-thumbnail"/></div>
                       </div>
                       <div className="col " >
                       <div className="img-fluid"><img src="https://cdn.pixabay.com/photo/2016/08/07/16/45/owl-1576572_960_720.jpg" alt="..." class="img-thumbnail"/></div>
                    
                    </div>
                    
                </div>

            </div>



        )
    }

}
