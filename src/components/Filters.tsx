import { Search, X } from 'lucide-react';
import type { FilterOptions } from '../types/hallOfFame';

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  batches: string[];
  branches: string[];
}

export function Filters({ filters, onFilterChange, batches, branches }: FiltersProps) {
  const achievementTypes = ['All', 'Placement', 'Hackathon', 'Higher Studies', 'Alumni'];

  const handleReset = () => {
    onFilterChange({
      batch: 'All',
      branch: 'All',
      achievementType: 'All',
      searchQuery: '',
    });
  };

  const hasActiveFilters =
    filters.batch !== 'All' ||
    filters.branch !== 'All' ||
    filters.achievementType !== 'All' ||
    filters.searchQuery !== '';

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" size={20} />
        <input
          type="text"
          placeholder="Search by name..."
          value={filters.searchQuery}
          onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-zinc-400 text-sm mb-2 font-semibold">Batch</label>
          <select
            value={filters.batch}
            onChange={(e) => onFilterChange({ ...filters, batch: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
          >
            <option value="All">All Batches</option>
            {batches.map((batch) => (
              <option key={batch} value={batch}>
                {batch}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-zinc-400 text-sm mb-2 font-semibold">Branch</label>
          <select
            value={filters.branch}
            onChange={(e) => onFilterChange({ ...filters, branch: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
          >
            <option value="All">All Branches</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-zinc-400 text-sm mb-2 font-semibold">Achievement Type</label>
          <select
            value={filters.achievementType}
            onChange={(e) => onFilterChange({ ...filters, achievementType: e.target.value })}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
          >
            {achievementTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'All' ? 'All Types' : type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={handleReset}
          className="flex items-center gap-2 text-amber-500 hover:text-amber-400 text-sm font-semibold transition-colors"
        >
          <X size={16} />
          Reset Filters
        </button>
      )}
    </div>
  );
}
