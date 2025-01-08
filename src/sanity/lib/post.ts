import { defineField, defineArrayMember, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  type: 'document',
  title: 'Post Doc',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Post Title',
      description: 'Title of the post',
      validation: (Rule: any) => Rule.max(96).required()
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slug for the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),

    defineField({
      name: 'text',
      type: 'text',
      title: 'Summary',
      description: 'Summary of the post'
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }],
      description: 'Author of the post'
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Image for the post'
    }),

    // defineField({
    //   name: 'content',
    //   type: 'array',
    //   title: 'Content',
    //   description: 'Content of the post',
    //   of: [
    //     defineArrayMember({
    //       type: 'block',
    //       styles: [
    //         { title: 'Normal', value: 'normal' },
    //         { title: 'Heading 1', value: 'h1' },
    //         { title: 'Heading 2', value: 'h2' },
    //         { title: 'Quote', value: 'blockquote' }
    //       ],
    //       marks: {
    //         decorators: [
    //           { title: 'Strong', value: 'strong' },
    //           { title: 'Emphasis', value: 'em' },
    //           { title: 'Code', value: 'code' }
    //         ],
    //         annotations: [
    //           {
    //             name: 'link',
    //             type: 'object',
    //             title: 'URL',
    //             fields: [
    //               {
    //                 name: 'href',
    //                 type: 'url',
    //                 title: 'URL',
    //                 validation: (Rule: any) =>
    //                   Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] })
    //               },
    //               {
    //                 name: 'openInNewTab',
    //                 type: 'boolean',
    //                 title: 'Open in new tab'
    //               }
    //             ]
    //           }
    //         ]
    //       }
    //     })
    //   ]
    // }),

    defineField({
      name: 'comments',
      type: 'array',
      title: 'Comments',
      description: 'Comments on the post',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
              description: 'Name of the commenter',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'comment',
              type: 'text',
              title: 'Comment',
              description: 'Content of the comment',
              validation: (Rule: any) => Rule.required().max(500)
            },
            {
              name: 'date',
              type: 'datetime',
              title: 'Date',
              description: 'Date of the comment'
            }
          ]
        })
      ]
    })

    // Uncomment the block below to add a 'gender' field with options
    /*
    {
      name: 'gender',
      type: 'string',
      title: 'Gender',
      options: {
        list: [
          { title: 'Male', value: 'male' },
          { title: 'Female', value: 'female' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: Rule => Rule.required().error('Gender is required'),
    },
    */
  ]
})
