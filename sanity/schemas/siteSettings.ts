export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site Title', type: 'string' },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'address', title: 'Address', type: 'text', rows: 2 },
    { name: 'hours', title: 'Business Hours', type: 'text', rows: 3 },
    { name: 'logo', title: 'Logo', type: 'image' },
    { name: 'ogImage', title: 'OG Image', type: 'image' },
  ],
}
