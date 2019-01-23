import React, { Component } from 'react'
import ruuviService from './services/ruuvi'
import Weather from './components/Weather/Weather'
import { Grid, Header } from 'semantic-ui-react'
class App extends Component {
  constructor() {
    super()
    this.state = {
      tags: [],
      weather: [
        {'time': '10:00', 'value': 15},
        {'time': '11:00', 'value': 15},
        {'time': '12:00', 'value': 15},
      ],
      alsu: true
    }
  }

  componentDidMount() {
    ruuviService.getAll()
      .then(data => {
        this.setState({
          tags: data
        })
      })    
  }

  render() {
    return (
      <Grid style={{height: '100vh'}}>
        <Grid.Row style={{height: '50%'}}>
          <Grid.Column width={8} color='orange'>
            <Header as='h1' floated='left'>Ruuvi Tags</Header>
            
          </Grid.Column>
          <Grid.Column width={8} color='green'>
            <Header as='h1' floated='right'>Sää</Header>
            <Weather weather={this.state.weather}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{height: '50%'}}>
          <Grid.Column width={8} color='blue'>
            <Header as='h1' floated='left'>Linja-autot</Header>
          </Grid.Column>
          <Grid.Column width={8} color='red' textAlign='center'>
            <Header as='h1' floated='right'>Alsun striimi</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>       
    )
  }
}

export default App
