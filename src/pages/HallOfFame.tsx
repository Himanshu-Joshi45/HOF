import { useEffect, useState } from 'react';
import { Trophy, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Navbar } from '../components/Navbar';
import type { HallOfFameMember, FilterOptions } from '../types/hallOfFame';
import { MemberCard } from '../components/MemberCard';
import { Filters } from '../components/Filters';
import { MemberDetailPanel } from '../components/MemberDetailPanel';

function HallOfFame() {
  const [members, setMembers] = useState<HallOfFameMember[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<HallOfFameMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<HallOfFameMember | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    batch: 'All',
    branch: 'All',
    achievementType: 'All',
    searchQuery: '',
  });

  const batches = [...new Set(members.map((m) => m.batch))].sort((a, b) => b.localeCompare(a));
  const branches = [...new Set(members.map((m) => m.branch))].sort();

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [members, filters]);

  const fetchMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('hall_of_fame_members')
        .select('*')
        .order('batch', { ascending: false });

      if (error) throw error;
      setMembers(data || []);
    } catch (error) {
      console.error('Error fetching members:', error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...members];

    if (filters.batch !== 'All') {
      filtered = filtered.filter((m) => m.batch === filters.batch);
    }

    if (filters.branch !== 'All') {
      filtered = filtered.filter((m) => m.branch === filters.branch);
    }

    if (filters.achievementType !== 'All') {
      filtered = filtered.filter((m) => m.achievement_type === filters.achievementType);
    }

    if (filters.searchQuery) {
      filtered = filtered.filter((m) =>
        m.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    setFilteredMembers(filtered);
  };

  const handleMemberClick = (member: HallOfFameMember) => {
    setSelectedMember(member);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedMember(null), 500);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="pt-20 bg-gradient-to-b from-zinc-900 to-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Trophy className="text-amber-500" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Hall of Fame</h1>
          </div>
          <p className="text-center text-zinc-400 text-lg max-w-2xl mx-auto">
            Celebrating Excellence at{' '}
            <span className="text-amber-500 font-semibold">
              Poornima College of Engineering
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Filters
          filters={filters}
          onFilterChange={setFilters}
          batches={batches}
          branches={branches}
        />

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-amber-500" size={48} />
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">No members found matching your filters.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-zinc-400 text-sm">
              Showing {filteredMembers.length} of {members.length} members
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
              {filteredMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onClick={() => handleMemberClick(member)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <MemberDetailPanel
        member={selectedMember}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
      />

      <footer className="bg-zinc-900 border-t border-zinc-800 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-zinc-500 text-sm">
            © 2024 Poornima College of Engineering. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HallOfFame;
