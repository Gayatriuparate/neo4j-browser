/**
 * getStringValue method checks the datatype of Node properties value and return
 * convert it into an typeof node properties value. This is basically because
 * When working with Cypher query, you do not define the data type.
 * The data type that best fits your value will be chosen for you.
 * To avoid this issue we are using getStringValue() method.
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
