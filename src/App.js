import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ruuviService from './services/ruuvi'
import { Grid, Loader } from 'semantic-ui-react'
import TagElement from './components/Tags/TagElement'
import Tag from './components/Tags/Tag'
import Weather from './components/Weather/Weather'

import './style.css'
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

        objects.push(res)
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

  handleClick = id => {}

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
                        <TagElement
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
          {this.state.tags ? (
            <Route
              exact
              path="/tags/:id"
              render={({ match }) => {
                const restag = this.state.tags.find(
                  t => t.ruuviId === match.params.id
                )
                return <Tag tag={restag} />
              }}
            />
          ) : null}
        </div>
      </Router>
    )
  }
}

export default App
