import { parse } from 'fast-xml-parser'
import type { XmlParser, XmlString } from '../types'

const options = {
  attributeNamePrefix: '',
  textNodeName: 'text',
  ignoreAttributes: false,
  ignoreNameSpace: true,
  allowBooleanAttributes: true,
  // ignoreRootElement: true, // TODO: awaiting https://github.com/NaturalIntelligence/fast-xml-parser/issues/282
}

export const xmlParser: XmlParser = {
  parse: (xmlString: XmlString) => parse(xmlString, options),
}
