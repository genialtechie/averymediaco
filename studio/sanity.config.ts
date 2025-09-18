import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {cloudinaryAssetSourcePlugin} from 'sanity-plugin-cloudinary'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Avery',

  projectId: '25c8k47q',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), cloudinaryAssetSourcePlugin()],

  schema: {
    types: schemaTypes,
  },
})
