import {defineType, defineField, ValidationContext, type ImageRule, type UrlRule} from 'sanity'

type Parent = {
  mediaType?: 'image' | 'video'
}

export default defineType({
  name: 'mediaItem',
  title: 'Media Item',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      validation: (Rule) => Rule.required(),
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      hidden: ({parent}: {parent: Parent | undefined}) => parent?.mediaType !== 'image',
      validation: (Rule: ImageRule) =>
        Rule.custom((value, context) => {
          const {parent} = context as ValidationContext & {parent: Parent}
          if (parent?.mediaType === 'image' && !value) {
            return 'Image is required when Media Type is Image'
          }
          return true
        }),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      hidden: ({parent}: {parent: Parent | undefined}) => parent?.mediaType !== 'video',
      validation: (Rule: UrlRule) =>
        Rule.uri({}).custom((value, context) => {
          const {parent} = context as ValidationContext & {parent: Parent}
          if (parent?.mediaType === 'video' && !value) {
            return 'Video URL is required when Media Type is Video'
          }
          return true
        }),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
