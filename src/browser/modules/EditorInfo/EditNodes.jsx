/*
 * This module depicts the behaviour of the edit drawer that displays the node relationship
 * properties
 */

import React, { Component } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerSection,
  DrawerSectionBody,
  DrawerSubHeader
} from 'browser-components/drawer'

import * as _ from 'lodash'
import { getStringValue } from './utils'
import { StyledTable, StyledKey, StyledValue } from '../DatabaseInfo/styled'

export class EditNodes extends Component {
  render () {
    let properties = null
    console.log('...', this.props.nodeProperties)
    properties = _.map(this.props.nodeProperties, (value, key) => {
      return (
        <StyledTable>
          <tbody>
            <tr style={{ verticalAlign: 'baseline' }}>
              <StyledKey key={key}>{key}:</StyledKey>
              <StyledValue>{getStringValue(value)}</StyledValue>
            </tr>
          </tbody>
        </StyledTable>
      )
    })

    return (
      <Drawer id='db-drawer'>
        <DrawerHeader>Editor</DrawerHeader>
        <DrawerBody>
          <DrawerSubHeader>properties</DrawerSubHeader>
          <DrawerSectionBody>{properties}</DrawerSectionBody>
        </DrawerBody>
      </Drawer>
    )
  }
}
