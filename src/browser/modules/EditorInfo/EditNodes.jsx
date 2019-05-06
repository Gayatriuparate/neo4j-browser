/*
 * This module depicts the edit drawer that displays the node relationship
 * properties
 */

import React, { Component } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerSection
} from 'browser-components/drawer'
import { ViewProperties } from './ViewProperties'

export class EditNodes extends Component {
  render () {
    return (
      <Drawer id='db-drawer'>
        <DrawerHeader>Editor</DrawerHeader>
        <DrawerBody>
          <DrawerSection>
            <ViewProperties ShowProperties={this.props.nodeProperties} />
          </DrawerSection>
        </DrawerBody>
      </Drawer>
    )
  }
}
