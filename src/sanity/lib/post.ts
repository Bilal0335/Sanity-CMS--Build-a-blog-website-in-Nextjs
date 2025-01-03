import { validation } from 'sanity'

export const post = {
  name: 'post',
  type: 'document',
  title: 'Post Doc',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Post Title',
      validation: (Rule: any) => Rule.required().error('Title is required')
    }
    // {
    //   name: 'gender',
    //   type: 'string',
    //   title: 'Gender',
    //   options: {
    //     list: [
    //       { title: 'Male', value: 'male' },
    //       { title: 'Female', value: 'female' },
    //       { title: 'Other', value: 'other' }
    //     ],
    //     layout: 'radio',
    //     direction: 'horizontal'
    //   },
    //   validation: Rule => Rule.required().error('Gender is required')
    // }
  ]
}
