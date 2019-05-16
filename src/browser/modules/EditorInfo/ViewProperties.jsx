/**
 * This module depicts the one Section of the edit drawer that displays the node relationship
 * properties
 */

import React, { Component } from 'react'
import {
  DrawerSection,
  DrawerSectionBody,
  DrawerSubHeader
} from 'browser-components/drawer'

import * as _ from 'lodash'
import { getStringValue } from './utils'
import { StyledTable, StyledKey, StyledValue } from '../DatabaseInfo/styled'

export const ViewProperties = props => {
  const properties = _.map(props.ShowProperties, (value, key) => {
    return (
      <tr style={{ verticalAlign: 'baseline' }}>
        <StyledKey key={key}>{key}:</StyledKey>
        <StyledValue>{getStringValue(value)}</StyledValue>
      </tr>
    )
  })
  return (
    <DrawerSection>
      <DrawerSubHeader>Properties</DrawerSubHeader>
      <StyledTable>
        <tbody>
          <DrawerSectionBody>{properties}</DrawerSectionBody>
        </tbody>
      </StyledTable>
    </DrawerSection>
  )
}
