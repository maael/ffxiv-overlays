import {jobRoleMap} from './roles';
import {JobAbbreviations, RoleColours, RoleColoursLight, RoleColoursDark} from './types';

export default function jobColours (job: JobAbbreviations, modifier?: 'light' | 'dark'): RoleColours {
  const role = jobRoleMap[job];
  if (modifier === 'light') return RoleColoursLight[role] || RoleColoursLight.default;
  else if (modifier === 'dark') return RoleColoursDark[role] || RoleColoursDark.default;
  else return RoleColours[role] || RoleColours.default;
};