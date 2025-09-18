import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: Rule => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'coverImage', title: 'Cover Image', type: 'image', options: {hotspot: true}, validation: Rule => Rule.required()}),
    defineField({name: 'media', title: 'Media Items', type: 'array', of: [{type: 'mediaItem'}], validation: Rule => Rule.required().min(1)}),
    defineField({name: 'tags', title: 'Tags', type: 'array', of: [{type: 'reference', to: {type: 'tag'}}]}),
    defineField({name: 'publishedAt', title: 'Published At', type: 'datetime'})
  ]
})
