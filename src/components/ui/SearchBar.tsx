import { Search } from 'lucide-react';
import { useAppStore } from '@/stores/appStore';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ placeholder = '搜索...', className = '' }: SearchBarProps) {
  const { searchQuery, setSearchQuery } = useAppStore();

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-purple-500/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
      />
    </div>
  );
}
