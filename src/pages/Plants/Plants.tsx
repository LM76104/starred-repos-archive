import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, TreeDeciduous, Apple, Gem, Clock, MapPin } from 'lucide-react';
import { MagicCard, FilterTabs, DetailModal } from '@/components/ui';
import { plantsData } from '@/data';
import type { Plant } from '@/types';

const typeTabs = [
  { id: '树木', label: '树木', icon: TreeDeciduous },
  { id: '草药', label: '草药', icon: Leaf },
  { id: '真菌', label: '真菌', icon: Apple },
  { id: '矿物', label: '矿物', icon: Gem },
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

export default function PlantsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const filteredPlants = plantsData.filter((plant) => {
    if (selectedType && plant.type !== selectedType) return false;
    if (selectedRarity && plant.rarity !== selectedRarity) return false;
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
            植物图鉴
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            收录所有植物的详细信息，包括生长时间、用途等
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-6">
          <div>
            <h3 className="font-display text-sm font-bold text-purple-300 mb-3">植物类型</h3>
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
          {filteredPlants.map((plant, index) => (
            <MagicCard
              key={plant.id}
              delay={index * 0.05}
              onClick={() => setSelectedPlant(plant)}
              className="p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-4xl">
                  {plant.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {plant.name}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${rarityBgColors[plant.rarity]} ${rarityTextColors[plant.rarity]}`}>
                    {rarityLabels[plant.rarity]}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                {plant.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300">{plant.habitat}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300">生长时间: {plant.growthTime}</span>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        {filteredPlants.length === 0 && (
          <div className="text-center py-20">
            <Leaf className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">没有找到符合条件的植物</p>
          </div>
        )}

        {/* Detail Modal */}
        <DetailModal
          isOpen={!!selectedPlant}
          onClose={() => setSelectedPlant(null)}
          title={selectedPlant?.name || ''}
        >
          {selectedPlant && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-5xl">
                  {selectedPlant.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {selectedPlant.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${rarityBgColors[selectedPlant.rarity]} ${rarityTextColors[selectedPlant.rarity]}`}>
                    {rarityLabels[selectedPlant.rarity]}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed">
                {selectedPlant.description}
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>栖息地</span>
                  </div>
                  <div className="text-white font-medium">{selectedPlant.habitat}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                    <Clock className="w-4 h-4" />
                    <span>生长时间</span>
                  </div>
                  <div className="text-white font-medium">{selectedPlant.growthTime}</div>
                </div>
              </div>

              {/* Usage */}
              <div>
                <h4 className="font-display text-sm font-bold text-purple-300 mb-3">用途</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPlant.usage.map((use, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm"
                    >
                      {use}
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
