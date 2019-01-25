import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ruuviService from './services/ruuvi'
import { Grid, Loader } from 'semantic-ui-react'
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
      data.forEach(tag => {
        const foundTag = json.tags.find(t => t.ruuviId === tag.ruuviId)
        let res = { ...tag }
        foundTag
          ? (res = { ...res, name: foundTag.name })
          : (res = { ...res, name: tag.ruuviId })

        console.log(res)

        objects.push({
          name: res.name,
          ruuviId: tag.ruuviId,
          temperature: tag.temperature,
          humidity: tag.humidity,
          pressure: tag.pressure,
        })
      })

      this.setState({
        tags: objects,
      })
    })
    setTimeout(() => {
      this.componentDidMount()
    }, 60000)
  }

  generateColor() {
    return (
      '#' +
      Math.random()
        .toString(16)
        .substr(-6)
    )
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
                    {this.state.tags ? (
                      this.state.tags.map(t => (
                        <Tag
                          tag={t}
                          key={t.ruuviId}
                          hexColor={this.generateColor()}
                        />
                      ))
                    ) : (
                      <Loader active />
                    )}
                  </div>
                </Grid.Column>
              </Grid>
            )}
          />
          <Route
            path="/weather"
            render={() => <Weather weather={this.state.tags} />}
          />
        </div>
      </Router>
    )
  }
}

export default App
