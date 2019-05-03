/*
 * This model depicts the behaviour of the edit drawer that displays the node relationship
 properties
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
import { toString } from 'neo4j-driver/lib/v1/integer.js'

export class EditNodes extends Component {
  render () {
    let content = null
    let itemProperties = this.props.Node_properties._fields[0].properties
    content = _.map(itemProperties, (value, key) => {
      if (typeof value !== 'String') {
        return (
          <div>
            {key}:{value.toString()}
          </div>
        )
      }
      return (
        <div>
          {key}:{value}
        </div>
      )
    })

    return (
      <Drawer id='db-drawer'>
        <DrawerHeader>Editor</DrawerHeader>
        <DrawerBody>
          <DrawerSection>
            <DrawerSectionBody>
              <DrawerSubHeader>
                properties:
                {content}
              </DrawerSubHeader>
            </DrawerSectionBody>
          </DrawerSection>
        </DrawerBody>
      </Drawer>
    )
  }
}
