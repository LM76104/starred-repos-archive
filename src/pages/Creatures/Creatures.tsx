import { useState } from 'react';
import { motion } from 'framer-motion';
import { Fish, PawPrint, Bug, Sparkle, MapPin, Heart } from 'lucide-react';
import { MagicCard, FilterTabs, DetailModal } from '@/components/ui';
import { creaturesData } from '@/data';
import type { Creature } from '@/types';

const typeTabs = [
  { id: '哺乳类', label: '哺乳类', icon: PawPrint },
  { id: '爬行类', label: '爬行类', icon: Fish },
  { id: '昆虫类', label: '昆虫类', icon: Bug },
  { id: '元素生物', label: '元素', icon: Sparkle },
];

const rarityLabels: Record<string, string> = {
  common: '普通',
  rare: '稀有',
  epic: '史诗',
  legendary: '传说',
};

const rarityBgColors: Record<string, string> = {
  common: 'bg-slate-500/20',
  rare: 'bg-blue-500/20',
  epic: 'bg-purple-500/20',
  legendary: 'bg-yellow-500/20',
};

const rarityTextColors: Record<string, string> = {
  common: 'text-slate-400',
  rare: 'text-blue-400',
  epic: 'text-purple-400',
  legendary: 'text-yellow-400',
};

export default function CreaturesPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(null);

  const filteredCreatures = creaturesData.filter((creature) => {
    if (selectedType && creature.type !== selectedType) return false;
    if (selectedRarity && creature.rarity !== selectedRarity) return false;
    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            生物图鉴
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            收录所有生物的详细信息，包括栖息地、掉落物品等
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-6">
          <div>
            <h3 className="font-display text-sm font-bold text-purple-300 mb-3">生物类型</h3>
            <FilterTabs
              tabs={typeTabs}
              selected={selectedType}
              onSelect={setSelectedType}
            />
          </div>
          <div>
            <h3 className="font-display text-sm font-bold text-purple-300 mb-3">稀有度</h3>
            <div className="flex flex-wrap gap-2">
              {[null, 'common', 'rare', 'epic', 'legendary'].map((rarity) => (
                <button
                  key={rarity || 'all'}
                  onClick={() => setSelectedRarity(rarity)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedRarity === rarity
                      ? 'bg-purple-600 text-white shadow-magic'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {rarity ? rarityLabels[rarity] : '全部'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreatures.map((creature, index) => (
            <MagicCard
              key={creature.id}
              delay={index * 0.05}
              onClick={() => setSelectedCreature(creature)}
              className="p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-4xl">
                  {creature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {creature.name}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${rarityBgColors[creature.rarity]} ${rarityTextColors[creature.rarity]}`}>
                    {rarityLabels[creature.rarity]}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                {creature.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-300">{creature.habitat}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-slate-300">{creature.diet}</span>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        {filteredCreatures.length === 0 && (
          <div className="text-center py-20">
            <Fish className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">没有找到符合条件的生物</p>
          </div>
        )}

        {/* Detail Modal */}
        <DetailModal
          isOpen={!!selectedCreature}
          onClose={() => setSelectedCreature(null)}
          title={selectedCreature?.name || ''}
        >
          {selectedCreature && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-5xl">
                  {selectedCreature.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {selectedCreature.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${rarityBgColors[selectedCreature.rarity]} ${rarityTextColors[selectedCreature.rarity]}`}>
                    {rarityLabels[selectedCreature.rarity]}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed">
                {selectedCreature.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>栖息地</span>
                  </div>
                  <div className="text-white font-medium">{selectedCreature.habitat}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                    <Heart className="w-4 h-4" />
                    <span>食性</span>
                  </div>
                  <div className="text-white font-medium">{selectedCreature.diet}</div>
                </div>
              </div>

              {/* Drops */}
              <div>
                <h4 className="font-display text-sm font-bold text-purple-300 mb-3">掉落物品</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCreature.drops.map((drop, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-sm"
                    >
                      {drop}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DetailModal>
      </div>
    </div>
  );
}
