import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ruuviService from './services/ruuvi'
import { Grid } from 'semantic-ui-react'
import Tag from './components/Tags/Tag'
import './style.css'
import Weather from './components/Weather/Weather'
import json from './ruuviId_names_pair.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      weather: [
        { time: '10:00', value: 15 },
        { time: '11:00', value: 15 },
        { time: '12:00', value: 15 },
      ],
      alsu: true,
    }
  }

  componentDidMount() {
    let objects = []
    ruuviService.getAll().then(data => {
      data.map(tag => {
        const eemelimuuttuja = json.tags.find(t => t.ruuviId === tag.ruuviId)
        const object = {
          name: eemelimuuttuja.name,
          ruuviId: tag.ruuviId,
          temperature: tag.temperature,
        }
        objects.push(object)
        return objects
      })

      this.setState({
        tags: objects,
      })
    })
    setTimeout(() => {
      this.componentDidMount()
    }, 10000)
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Grid style={{ height: '100vh' }}>
                <Grid.Column>
                  <div className="tags">
                    {this.state.tags
                      ? this.state.tags.map(t => (
                          <Tag tag={t} key={t.ruuviId} />
                        ))
                      : 0}
                  </div>
                </Grid.Column>
              </Grid>
            )}
          />
          <Route
            path="/weather"
            render={() => <Weather weather={this.state.weather} />}
          />
        </div>
      </Router>
    )
  }
}

export default App
