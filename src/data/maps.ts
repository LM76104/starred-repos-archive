import type { MapData, Resource } from '@/types';

export const mapsData: MapData[] = [
  {
    id: 'golden-coast',
    name: '黄金海岸',
    description: '阳光明媚的海岸线，资源丰富，适合新手玩家探索。',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    resources: [
      { id: 'gc-1', name: '铜矿', type: 'ore', rarity: 'common', coordinates: { x: 120, y: 80 }, mapId: 'golden-coast', description: '最基础的金属矿石，分布广泛。', icon: '⛏️' },
      { id: 'gc-2', name: '锡矿', type: 'ore', rarity: 'common', coordinates: { x: 250, y: 150 }, mapId: 'golden-coast', description: '与铜矿结合可制作青铜。', icon: '⛏️' },
      { id: 'gc-3', name: '沙滩棕榈', type: 'plant', rarity: 'common', coordinates: { x: 300, y: 200 }, mapId: 'golden-coast', description: '海岸常见的植物，可采集果实。', icon: '🌴' },
      { id: 'gc-4', name: '珊瑚', type: 'special', rarity: 'rare', coordinates: { x: 180, y: 280 }, mapId: 'golden-coast', description: '珍贵的海洋装饰材料。', icon: '🪸' },
      { id: 'gc-5', name: '海星', type: 'animal', rarity: 'common', coordinates: { x: 400, y: 120 }, mapId: 'golden-coast', description: '潮汐池中常见的小生物。', icon: '⭐' },
      { id: 'gc-6', name: '珍珠贝', type: 'special', rarity: 'epic', coordinates: { x: 350, y: 320 }, mapId: 'golden-coast', description: '可开出珍珠的珍贵贝类。', icon: '🐚' },
    ],
  },
  {
    id: 'mystic-forest',
    name: '神秘森林',
    description: '古老茂密的魔法森林，蕴含着丰富的草药与稀有矿石。',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    resources: [
      { id: 'mf-1', name: '铁矿', type: 'ore', rarity: 'common', coordinates: { x: 150, y: 100 }, mapId: 'mystic-forest', description: '锻造高级工具的必备材料。', icon: '⛏️' },
      { id: 'mf-2', name: '魔法草', type: 'plant', rarity: 'rare', coordinates: { x: 220, y: 180 }, mapId: 'mystic-forest', description: '蕴含魔力的稀有草药。', icon: '🌿' },
      { id: 'mf-3', name: '古树树脂', type: 'special', rarity: 'epic', coordinates: { x: 300, y: 250 }, mapId: 'mystic-forest', description: '从千年古树中流出的珍贵树脂。', icon: '🌳' },
      { id: 'mf-4', name: '萤火虫', type: 'animal', rarity: 'common', coordinates: { x: 400, y: 150 }, mapId: 'mystic-forest', description: '夜间发光的美丽生物。', icon: '✨' },
      { id: 'mf-5', name: '银矿', type: 'ore', rarity: 'rare', coordinates: { x: 280, y: 320 }, mapId: 'mystic-forest', description: '稀有的贵金属矿石。', icon: '⛏️' },
      { id: 'mf-6', name: '精灵花', type: 'plant', rarity: 'legendary', coordinates: { x: 180, y: 350 }, mapId: 'mystic-forest', description: '只在精灵栖息地生长的神秘花朵。', icon: '🌸' },
    ],
  },
  {
    id: 'frost-peak',
    name: '霜雪之巅',
    description: '高海拔寒冷地区，拥有独特的冰雪资源和珍稀矿物。',
    image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&q=80',
    resources: [
      { id: 'fp-1', name: '冰晶', type: 'special', rarity: 'common', coordinates: { x: 100, y: 120 }, mapId: 'frost-peak', description: '纯净的冰系材料。', icon: '❄️' },
      { id: 'fp-2', name: '寒铁', type: 'ore', rarity: 'rare', coordinates: { x: 200, y: 200 }, mapId: 'frost-peak', description: '在极寒中形成的特殊金属。', icon: '⛏️' },
      { id: 'fp-3', name: '雪莲花', type: 'plant', rarity: 'epic', coordinates: { x: 300, y: 150 }, mapId: 'frost-peak', description: '只在雪山上绽放的名贵药材。', icon: '🌺' },
      { id: 'fp-4', name: '霜狼毛皮', type: 'animal', rarity: 'rare', coordinates: { x: 250, y: 280 }, mapId: 'frost-peak', description: '顶级防寒材料。', icon: '🐺' },
      { id: 'fp-5', name: '钻石', type: 'ore', rarity: 'legendary', coordinates: { x: 400, y: 300 }, mapId: 'frost-peak', description: '最珍贵的矿石之一。', icon: '💎' },
    ],
  },
  {
    id: 'volcano-valley',
    name: '火山谷',
    description: '地热丰富的火山地区，蕴藏着珍贵的熔岩资源和稀有金属。',
    image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&q=80',
    resources: [
      { id: 'vv-1', name: '熔岩石', type: 'ore', rarity: 'common', coordinates: { x: 120, y: 150 }, mapId: 'volcano-valley', description: '火山地区的常见石材。', icon: '🌋' },
      { id: 'vv-2', name: '黑曜石', type: 'ore', rarity: 'rare', coordinates: { x: 220, y: 220 }, mapId: 'volcano-valley', description: '火山玻璃，用途广泛。', icon: '⬛' },
      { id: 'vv-3', name: '烈焰花', type: 'plant', rarity: 'epic', coordinates: { x: 300, y: 180 }, mapId: 'volcano-valley', description: '在火山口附近生长的神奇植物。', icon: '🔥' },
      { id: 'vv-4', name: '熔岩蜥蜴', type: 'animal', rarity: 'rare', coordinates: { x: 350, y: 280 }, mapId: 'volcano-valley', description: '适应高温环境的特殊生物。', icon: '🦎' },
      { id: 'vv-5', name: '龙鳞矿', type: 'ore', rarity: 'legendary', coordinates: { x: 180, y: 350 }, mapId: 'volcano-valley', description: '传说中龙族使用的珍贵材料。', icon: '🐉' },
    ],
  },
  {
    id: 'crystal-cave',
    name: '水晶洞穴',
    description: '地下深处的神秘洞穴，布满了各种珍贵的水晶和矿石。',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
    resources: [
      { id: 'cc-1', name: '水晶簇', type: 'ore', rarity: 'common', coordinates: { x: 150, y: 100 }, mapId: 'crystal-cave', description: '洞穴中最常见的水晶。', icon: '💎' },
      { id: 'cc-2', name: '紫水晶', type: 'ore', rarity: 'rare', coordinates: { x: 250, y: 180 }, mapId: 'crystal-cave', description: '具有魔力的紫色宝石。', icon: '💜' },
      { id: 'cc-3', name: '发光苔藓', type: 'plant', rarity: 'common', coordinates: { x: 300, y: 250 }, mapId: 'crystal-cave', description: '照亮洞穴的生物光源。', icon: '🌿' },
      { id: 'cc-4', name: '洞穴蝙蝠', type: 'animal', rarity: 'common', coordinates: { x: 200, y: 300 }, mapId: 'crystal-cave', description: '栖息在黑暗中的生物。', icon: '🦇' },
      { id: 'cc-5', name: '星光钻石', type: 'ore', rarity: 'legendary', coordinates: { x: 400, y: 200 }, mapId: 'crystal-cave', description: '传说中最为璀璨的宝石。', icon: '✨' },
    ],
  },
  {
    id: 'enchanted-meadow',
    name: '魔法草原',
    description: '广阔繁茂的草原地带，是各种草食动物和药草的天堂。',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    resources: [
      { id: 'em-1', name: '小麦', type: 'plant', rarity: 'common', coordinates: { x: 100, y: 150 }, mapId: 'enchanted-meadow', description: '最基础的农作物。', icon: '🌾' },
      { id: 'em-2', name: '野兔', type: 'animal', rarity: 'common', coordinates: { x: 200, y: 200 }, mapId: 'enchanted-meadow', description: '草原上常见的小动物。', icon: '🐰' },
      { id: 'em-3', name: '魔法蒲公英', type: 'plant', rarity: 'rare', coordinates: { x: 300, y: 120 }, mapId: 'enchanted-meadow', description: '吹散后可传播魔力的神奇植物。', icon: '🌼' },
      { id: 'em-4', name: '独角兽毛', type: 'animal', rarity: 'epic', coordinates: { x: 380, y: 280 }, mapId: 'enchanted-meadow', description: '极其珍贵的魔法材料。', icon: '🦄' },
      { id: 'em-5', name: '彩虹草', type: 'plant', rarity: 'legendary', coordinates: { x: 250, y: 320 }, mapId: 'enchanted-meadow', description: '折射出七彩光芒的珍稀草种。', icon: '🌈' },
    ],
  },
];

export const getAllResources = (): Resource[] => {
  return mapsData.flatMap(map => map.resources);
};

export const getResourceById = (id: string): Resource | undefined => {
  return getAllResources().find(r => r.id === id);
};

export const getResourcesByType = (type: Resource['type']): Resource[] => {
  return getAllResources().filter(r => r.type === type);
};

export const getResourcesByMap = (mapId: string): Resource[] => {
  return mapsData.find(m => m.id === mapId)?.resources || [];
};
