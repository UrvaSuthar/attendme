import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'class',
  title: 'Classes',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'code',
      title: 'Code',
      type: 'string',
    },
    {
      name: 'students',
      title: 'Students',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'student' }],
        },
      ],
    },
    ],
})
