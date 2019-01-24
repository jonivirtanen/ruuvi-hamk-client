import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'
import { Grid } from 'semantic-ui-react'

const TagList = props => {
  return props.tags.map(tag => (
    <Grid.Column key={tag.ruuviId}>
      <Tag tag={tag} />
    </Grid.Column>
  ))
}

TagList.propTypes = {
  tag: PropTypes.object,
}
export default TagList
