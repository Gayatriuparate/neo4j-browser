/**
 * returns the string representation
 * of the requested node property value
 * @param value
 * value has neo4j data type
 */
import { v1 as neo4j } from 'neo4j-driver'
export const getStringValue = value => {
  if (neo4j.isInt(value)) {
    return value.toInt()
  }
  if (neo4j.isPoint(value)) {
    return value.toString()
  }
  if (neo4j.isDate(value)) {
    return value.toString()
  }
  if (neo4j.isTime(value)) {
    return value.toString()
  }
  if (neo4j.isLocalTime(value)) {
    return value.toString()
  }
  if (neo4j.isLocalDateTime(value)) {
    return value.toString()
  }
  if (neo4j.isDuration(value)) {
    return value.toString()
  }
  if (typeof value === 'string') {
    return value
  }
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false'
  }

  return ''
}
