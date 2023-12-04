import type { X2jOptions, validationOptions } from 'fast-xml-parser'
import { XMLParser } from 'fast-xml-parser'
import type { XmlParser, XmlString } from '../types'

const options: Partial<validationOptions & X2jOptions> = {
  allowBooleanAttributes: true,
  attributeNamePrefix: '',
  ignoreAttributes: false,
  ignoreDeclaration: true,
  parseAttributeValue: true,
  textNodeName: 'text',
}

const parser = new XMLParser(options)

export const xmlParser: XmlParser = {
  parse: <T = unknown>(xmlString: XmlString): T => parser.parse(xmlString),
}
