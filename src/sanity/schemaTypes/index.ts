import { type SchemaTypeDefinition } from 'sanity'
import { Category } from '../category'
import { product } from './product'
import { orderType } from './orderType'
import { salesType } from './salesType'
import { blockContentType } from './blockContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,Category,product,orderType,salesType],
}
