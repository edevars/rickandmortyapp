import React,{Component} from 'react'
import './App.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      characters: [],
    }
  }

  async componentDidMount(){
     const request = await fetch('https://rickandmortyapi.com/api/character/')
     const respuesta = await request.json()
     
     this.setState({
       characters: respuesta.results
     })

     console.log(this.state.characters)
     
  }

    render(){
      return(
        <div>
          {
            this.state.characters.map(
              (personaje) => {
                return(
                  <div key={personaje.id} className="card">
                    <img src={personaje.image} alt={personaje.name}></img>
                    <h1>
                      {personaje.name}
                    </h1>
                  </div>
                )
              }
            )
          }
        </div>
      )
    }
}

export default App



