export default {
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'serviceType', title: 'Service Type', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 4 },
    { name: 'beforeImages', title: 'Before Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'afterImages', title: 'After Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'completionDate', title: 'Completion Date', type: 'date' },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
  ],
  preview: {
    select: { title: 'title', media: 'afterImages.0' },
  },
}
