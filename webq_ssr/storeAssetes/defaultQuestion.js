import contentTypes from './contentTypes'
import { TEXT_QUESTION } from './questionsDataTypes'

export default {
  dataType: { ...JSON.parse(JSON.stringify(TEXT_QUESTION)) },
  type: { ...JSON.parse(JSON.stringify(contentTypes[0].value)) },
  name: 'defaultQuestion',
  content: 'שאלה לדוגמא',
  required: true,
  label: 'the label',
  style: { }
}
