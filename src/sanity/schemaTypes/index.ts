import { type SchemaTypeDefinition } from 'sanity'
import { post } from '../lib/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
}
