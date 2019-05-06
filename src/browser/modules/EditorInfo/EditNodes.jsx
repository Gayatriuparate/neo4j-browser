/* This module depicts the behaviour of the edit drawer that displays
* the all drawerSections of edit drawer
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
