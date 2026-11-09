export interface TeamMember {
  name: string;
  role: string;
  avatar?: string;
}

export interface TeamGroup {
  id: 'leadership' | 'education' | 'software' | 'creative' | 'relations';
  name: string;
  description: string;
  members: TeamMember[];
}

export const rosterPeriod = '2026 — 2027';

export const teamGroups: TeamGroup[] = [
  {
    id: 'leadership',
    name: 'Core Leadership',
    description: 'Community coordination, direction, and continuity.',
    members: [
      { name: 'Yeni Natalia', role: 'Vice Commander' },
      { name: 'Ahmad Ghumaydi', role: 'Commander' },
      { name: 'Dwi Margaretta S', role: 'General Secretary & Finance' },
    ],
  },
  {
    id: 'education',
    name: 'Education & Research',
    description: 'Research, learning, and skills development.',
    members: [
      { name: 'Wihdatu Nuuro Ahmadi', role: 'Offensive Lead' },
      { name: 'Muhammad Fahjri', role: 'Defensive Lead' },
      { name: 'Agung Syaputra', role: 'Lab & Infrastructure' },
      { name: 'Ananda Al Buchkori', role: 'Lab & Infrastructure' },
    ],
  },
  {
    id: 'software',
    name: 'Software Development',
    description: 'Software development and technical experiments.',
    members: [
      { name: 'Alif Agus Lerian', role: 'Software Development Lead' },
      { name: 'Sidiq Fatuh Rahman', role: 'Vice Software Development Lead' },
    ],
  },
  {
    id: 'creative',
    name: 'Creative & Branding',
    description: 'Identity, design, and visual communication.',
    members: [
      { name: 'Zalwanda Vadissa Arla', role: 'Social Media Specialist' },
      { name: 'Naufal Farid', role: 'Content Designer & Documentation' },
    ],
  },
  {
    id: 'relations',
    name: 'Public Relations',
    description: 'External relations and collaboration.',
    members: [
      { name: 'Rivina Kayla Nazeva', role: 'Alumni Liaison' },
      { name: 'M. Sultan Haidar', role: 'External Partnership' },
    ],
  },
];
