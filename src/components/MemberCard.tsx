import type { HallOfFameMember } from '../types/hallOfFame';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

interface MemberCardProps {
  member: HallOfFameMember;
  onClick: () => void;
}

const achievementIcons = {
  Placement: Briefcase,
  Hackathon: Award,
  'Higher Studies': GraduationCap,
  Alumni: Users,
};

export function MemberCard({ member, onClick }: MemberCardProps) {
  const Icon = achievementIcons[member.achievement_type];

  return (
    <div
      onClick={onClick}
      className="bg-zinc-900 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 border border-zinc-800 hover:border-amber-500/50"
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-zinc-800">
        <img
          src={member.photo_url}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-3 right-3 bg-amber-500 text-zinc-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Icon size={14} />
          {member.achievement_type}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
        <p className="text-amber-500 text-sm font-semibold mb-2">
          {member.branch} • {member.batch}
        </p>
        <p className="text-zinc-400 text-sm line-clamp-2">
          {member.achievement_title}
        </p>
        {member.company && (
          <p className="text-zinc-500 text-xs mt-2">
            {member.company}
          </p>
        )}
      </div>
    </div>
  );
}
