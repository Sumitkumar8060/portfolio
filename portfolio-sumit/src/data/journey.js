// "My Journey" consolidates data that already exists elsewhere, instead
// of duplicating it. Education and Certifications are pulled from their
// own data files and reshaped into a common { title, organization,
// period, description } format.
//
// Achievements, Training, Experience, and Milestones start empty because
// no confirmed content exists yet. Do NOT invent entries here — add a
// real object only when you have real, confirmed information. A category
// with an empty array is automatically hidden from the tabs.
//
// To add a real entry later, e.g. under achievements:
// achievements: [
//   { title: 'Your Achievement', organization: 'Where it happened',
//     period: '2026', description: 'One factual sentence.' }
// ]

import { education } from './education'
import { certifications } from './certifications'

export const journeyData = {
  education: education.map((item) => ({
    title: item.degree,
    organization: item.institution,
    period: item.period,
    description: item.minor ? `Minor: ${item.minor}` : '',
  })),

  certifications: certifications.map((item) => ({
    title: item.title,
    organization: item.issuer,
    period: item.date,
    description: '',
    credentialUrl: item.url,
  })),

  achievements: [],
  training: [],
  experience: [],
  milestones: [],
}