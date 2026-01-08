import type { HallOfFameMember } from '../types/hallOfFame';
import { X, Award, Briefcase, GraduationCap, Users, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface MemberDetailPanelProps {
  member: HallOfFameMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const achievementIcons = {
  Placement: Briefcase,
  Hackathon: Award,
  'Higher Studies': GraduationCap,
  Alumni: Users,
};

export function MemberDetailPanel({ member, isOpen, onClose }: MemberDetailPanelProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!member) return null;

  const Icon = achievementIcons[member.achievement_type];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] bg-zinc-900 border-l border-zinc-800 z-50 transform transition-transform duration-500 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg z-10"
        >
          <X size={24} />
        </button>

        <div className="relative h-80 overflow-hidden">
          <img
            src={member.photo_url}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-amber-500 text-zinc-900 px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
                <Icon size={16} />
                {member.achievement_type}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
            <p className="text-amber-500 text-lg font-semibold">
              {member.branch} • Batch of {member.batch}
            </p>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-2">Achievement</h3>
            <p className="text-white text-lg font-semibold">{member.achievement_title}</p>
            {member.company && (
              <div className="mt-2 flex items-center gap-2 text-zinc-400">
                <Briefcase size={16} />
                <span>{member.company}</span>
                {member.position && <span>• {member.position}</span>}
              </div>
            )}
            {member.package && (
              <p className="text-emerald-400 font-semibold mt-1">{member.package}</p>
            )}
          </div>

          <div>
            <h3 className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-3">About</h3>
            <p className="text-zinc-300 leading-relaxed">{member.bio}</p>
          </div>

          {member.skills.length > 0 && (
            <div>
              <h3 className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg text-sm border border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {member.achievements.length > 0 && (
            <div>
              <h3 className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {member.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-zinc-300">
                    <Award size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 border-t border-zinc-800">
            <h3 className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-3">Connect</h3>
            <div className="flex gap-3">
              {member.linkedin_url && (
                <a
                  href={member.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="text-sm font-semibold">LinkedIn</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {member.github_url && (
                <a
                  href={member.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm font-semibold">GitHub</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
