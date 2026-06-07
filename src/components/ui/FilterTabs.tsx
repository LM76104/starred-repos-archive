interface FilterTabsProps {
  tabs: { id: string; label: string }[];
  selected: string | null;
  onSelect: (id: string | null) => void;
}

export default function FilterTabs({ tabs, selected, onSelect }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
          selected === null
            ? 'bg-purple-600 text-white shadow-magic'
            : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
        }`}
      >
        全部
      </button>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onSelect(tab.id)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            selected === tab.id
              ? 'bg-purple-600 text-white shadow-magic'
              : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
