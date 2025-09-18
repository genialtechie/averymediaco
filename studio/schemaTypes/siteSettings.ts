import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'Displayed in the browser tab and header',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Shown as the meta description for SEO',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Square icon recommended 32×32px or 16×16px',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'wallpaper',
      title: 'Lock Screen Wallpaper',
      type: 'image',
      description: 'Vertical image recommended 1080×1920px or larger',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
  ],
})
