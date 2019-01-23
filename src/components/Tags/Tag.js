import React, { Component } from 'react'
import { Segment, Item} from 'semantic-ui-react'

class Tag extends Component {  
  render() {
    const { tag } = this.props
    return (
      <div>
        <Segment raised>
          <Item>
            <Item.Content>
              <Item.Header>{ tag.ruuviId }</Item.Header>
              <Item.Description> Temperature: { tag.temperature } </Item.Description>
            </Item.Content>
          </Item>
        </Segment>
      </div>
    )
  }
}

export default Tag