export interface HallOfFameMember {
  id: string;
  name: string;
  photo_url: string;
  branch: string;
  batch: string;
  achievement_type: 'Placement' | 'Hackathon' | 'Higher Studies' | 'Alumni';
  achievement_title: string;
  company?: string;
  position?: string;
  package?: string;
  bio: string;
  skills: string[];
  linkedin_url?: string;
  github_url?: string;
  achievements: string[];
  created_at: string;
  updated_at: string;
}

export interface FilterOptions {
  batch: string;
  branch: string;
  achievementType: string;
  searchQuery: string;
}
