// Your projects. The Projects section loops over this array.
// To add a project, copy one object and change its fields.
//
// IMPORTANT: only list features and technologies that are really
// implemented in the project. Recruiters may ask about them.

export const projects = [
  {
    id: 'campusshare',
    title: 'CampusShare',

    // From your profile. Edit it so it sounds like you.
    description:
      'A college-exclusive marketplace and sharing platform where students can list, rent, sell, and request items.',

    // Replace these placeholders with features you have confirmed are
    // implemented. If you don't want a features list yet, use: features: []
    features: [
      'YOUR_CONFIRMED_FEATURE_1',
      'YOUR_CONFIRMED_FEATURE_2',
    ],

    // Remove any technology that is not actually used in the project.
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Docker',
      'AWS',
      'GitHub Actions',
    ],

    links: {
      github: 'YOUR_CAMPUSSHARE_GITHUB_URL',
      // Leave as '' until the project is deployed. No button is shown for ''.
      live: '',
    },
  },
]