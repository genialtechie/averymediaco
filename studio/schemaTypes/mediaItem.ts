import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'mediaItem',
  title: 'Media Item',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      validation: Rule => Rule.required(),
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'}
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      validation: Rule => Rule.custom((value, {parent}) => parent.mediaType === 'image' && !value ? 'Image is required when Media Type is Image' : true),
      type: 'image',
      hidden: ({parent}) => parent.mediaType !== 'image',
      options: {hotspot: true}
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      validation: Rule => Rule.custom((value, {parent}) => parent.mediaType === 'video' && !value ? 'Video URL is required when Media Type is Video' : true),
      type: 'url',
      hidden: ({parent}) => parent.mediaType !== 'video'
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: Rule => Rule.required()
    })
  ]
})
