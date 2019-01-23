import React from 'react'
import Tag from './Tag'
import { Grid } from 'semantic-ui-react'

const TagList = (props) => {
  return (
    props.tags.map(tag => 
      <Grid.Column key={ tag.ruuviId }>
        <Tag tag={ tag } />
      </Grid.Column>
    )
  )
}

export default TagList