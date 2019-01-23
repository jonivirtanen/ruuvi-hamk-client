import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'


class Weather extends Component {
  
  render() {
    return (
      <div>
        <Table>
          <Table.Header>Hämeenlinna, Katinen</Table.Header>
          <Table.Body>
            {this.props.weather.map(p => (
              <Table.Row key={ p.time }>
                <Table.Cell>{ p.time }</Table.Cell>
                <Table.Cell>{ p.value }</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default Weather