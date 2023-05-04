import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'student',
  title: 'Students',
  type: 'document',
  fields: [
    {
      name: 'enrollmentno',
      title: 'Enrollment No.',
      type: 'number',
      validation: (Rule) => Rule.required().min(10000000000).max(99999999999),
      description: 'Please enter your 11 digit enrollment number without any spaces or special characters'
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name:'photo',
      title:'Image Of Students',
      type:'image'
    },
    {
      name: 'class',
      title: 'Class',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'class' }],
        },
      ],
    },
  ]
})
