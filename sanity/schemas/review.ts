export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'rating', title: 'Rating', type: 'number', validation: (Rule: any) => Rule.min(1).max(5) },
    { name: 'text', title: 'Review Text', type: 'text', rows: 4, validation: (Rule: any) => Rule.required() },
    { name: 'date', title: 'Date', type: 'date' },
    { name: 'source', title: 'Source', type: 'string', options: { list: ['Google', 'Yelp', 'Facebook', 'Direct'] } },
  ],
  preview: {
    select: { title: 'name', subtitle: 'rating' },
  },
}
