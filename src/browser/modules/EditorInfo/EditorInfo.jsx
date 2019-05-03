/*
 * This model depicts the behaviour of the edit drawer.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withBus } from 'react-suber'
import { EditNodes } from './EditNodes'

export class EditorInfo extends Component {
  render () {
    return (
      <div>
        <EditNodes
          nodeProperties={this.props.nodeProperties._fields[0].properties}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    nodeProperties: state.itemEditor.selectedItem
  }
}

export default withBus(connect(mapStateToProps)(EditorInfo))
