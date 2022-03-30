export default {
  name: 'crewMember',
  title: 'Crew Member',
  type: 'object',
  fields: [
    {
      name: 'department',
      title: 'Department',
      type: 'string',
    },
    {
      name: 'job',
      title: 'Job',
      type: 'string',
    },
    {
      name: 'actor',
      title: 'Actor',
      type: 'reference',
      to: [{type: 'actor'}],
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    },
    {
      name: 'externalCreditId',
      title: 'External Credit ID',
      type: 'string',
    },
  ],
  preview: {
    select: {
      name: 'actor.name',
      job: 'job',
      department: 'department',
      media: 'actor.image',
    },
    prepare(selection) {
      const {name, job, department, media} = selection
      return {
        title: name,
        subtitle: `${job} [${department}]`,
        media,
      }
    },
  },
}
