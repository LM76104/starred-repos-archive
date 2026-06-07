import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Gem, Leaf, Bone, Sparkles, X } from 'lucide-react';
import { MagicCard, FilterTabs, DetailModal } from '@/components/ui';
import { mapsData, getAllResources } from '@/data';
import type { Resource } from '@/types';

const typeTabs = [
  { id: 'ore', label: '矿石', icon: Gem },
  { id: 'plant', label: '植物', icon: Leaf },
  { id: 'animal', label: '动物', icon: Bone },
  { id: 'special', label: '特殊', icon: Sparkles },
];

const rarityLabels: Record<string, string> = {
  common: '普通',
  rare: '稀有',
  epic: '史诗',
  legendary: '传说',
};

const rarityColors: Record<string, string> = {
  common: 'border-slate-400',
  rare: 'border-blue-500',
  epic: 'border-purple-500',
  legendary: 'border-yellow-500',
};

export default function MapPage() {
  const [selectedMap, setSelectedMap] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const currentMap = selectedMap ? mapsData.find((m) => m.id === selectedMap) : null;
  const allResources = getAllResources();

  const filteredResources = allResources.filter((r) => {
    if (selectedMap && r.mapId !== selectedMap) return false;
    if (selectedType && r.type !== selectedType) return false;
    if (selectedRarity && r.rarity !== selectedRarity) return false;
    return true;
  });

  const groupedByMap = filteredResources.reduce((acc, resource) => {
    const map = mapsData.find((m) => m.id === resource.mapId);
    if (!acc[resource.mapId]) {
      acc[resource.mapId] = { mapName: map?.name || '', resources: [] };
    }
    acc[resource.mapId].resources.push(resource);
    return acc;
  }, {} as Record<string, { mapName: string; resources: Resource[] }>);

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
            地图资源采集
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            探索各个地图，查找采集物坐标，获取稀有资源
          </p>
        </motion.div>

        {/* Map Selection */}
        <div className="mb-8">
          <h3 className="font-display text-lg font-bold text-purple-300 mb-4">选择地图</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mapsData.map((map) => (
              <MagicCard
                key={map.id}
                delay={mapsData.indexOf(map) * 0.05}
                onClick={() => setSelectedMap(selectedMap === map.id ? null : map.id)}
                className={`p-4 text-center border-2 ${
                  selectedMap === map.id
                    ? 'border-purple-500 bg-purple-600/20'
                    : 'border-transparent'
                }`}
              >
                <div className="text-3xl mb-2">{map.name.includes('黄金') ? '🏖️' : map.name.includes('森林') ? '🌲' : map.name.includes('霜雪') ? '🏔️' : map.name.includes('火山') ? '🌋' : map.name.includes('水晶') ? '💎' : '🌿'}</div>
                <div className="font-medium text-sm text-white">{map.name}</div>
                <div className="text-xs text-slate-400 mt-1">{map.resources.length} 个采集点</div>
              </MagicCard>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-6">
          <div>
            <h3 className="font-display text-sm font-bold text-purple-300 mb-3">资源类型</h3>
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
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl font-bold text-white">
              采集物列表
              <span className="ml-2 text-slate-400 text-base font-normal">
                ({filteredResources.length} 个)
              </span>
            </h3>
          </div>

          {Object.keys(groupedByMap).length === 0 ? (
            <div className="text-center py-20">
              <MapPin className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">没有找到符合条件的采集物</p>
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedByMap).map(([mapId, { mapName, resources }]) => (
                <div key={mapId}>
                  <h4 className="font-display text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {mapName}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {resources.map((resource, index) => (
                      <MagicCard
                        key={resource.id}
                        delay={index * 0.05}
                        onClick={() => setSelectedResource(resource)}
                        className={`p-4 border-2 ${rarityColors[resource.rarity]}`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl resource-${resource.type}`}>
                            {resource.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-bold text-white truncate">{resource.name}</h5>
                              <span className={`text-xs px-2 py-0.5 rounded-full bg-white/10 ${resource.rarity === 'legendary' ? 'text-yellow-400' : resource.rarity === 'epic' ? 'text-purple-400' : resource.rarity === 'rare' ? 'text-blue-400' : 'text-slate-400'}`}>
                                {rarityLabels[resource.rarity]}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 font-mono">
                              坐标: ({resource.coordinates.x}, {resource.coordinates.y})
                            </p>
                            <p className="text-xs text-slate-500 mt-1 truncate">
                              {resource.description}
                            </p>
                          </div>
                        </div>
                      </MagicCard>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detail Modal */}
        <DetailModal
          isOpen={!!selectedResource}
          onClose={() => setSelectedResource(null)}
          title={selectedResource?.name || ''}
        >
          {selectedResource && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl resource-${selectedResource.type}`}>
                  {selectedResource.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      selectedResource.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                      selectedResource.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                      selectedResource.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {rarityLabels[selectedResource.rarity]}
                    </span>
                    <span className="text-slate-400 text-sm">
                      {typeTabs.find(t => t.id === selectedResource.type)?.label}
                    </span>
                  </div>
                  <p className="text-slate-300">{selectedResource.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/5">
                <div>
                  <div className="text-xs text-slate-400 mb-1">地图</div>
                  <div className="text-white font-medium">
                    {mapsData.find(m => m.id === selectedResource.mapId)?.name}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">坐标</div>
                  <div className="text-white font-mono">
                    ({selectedResource.coordinates.x}, {selectedResource.coordinates.y})
                  </div>
                </div>
              </div>
            </div>
          )}
        </DetailModal>
      </div>
    </div>
  );
}
