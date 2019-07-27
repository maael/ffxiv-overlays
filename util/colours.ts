import {jobRoleMap} from './roles';
import {Roles, JobAbbreviations, RoleColours} from './types';

export default function jobColours (job: JobAbbreviations): RoleColours {
  const role = jobRoleMap[job];
  return RoleColours[role] || RoleColours.default;
};