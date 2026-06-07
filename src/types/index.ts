// 地图数据
export interface MapData {
  id: string;
  name: string;
  description: string;
  image: string;
  resources: Resource[];
}

// 采集物数据
export interface Resource {
  id: string;
  name: string;
  type: 'ore' | 'plant' | 'animal' | 'special';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  coordinates: { x: number; y: number };
  mapId: string;
  description: string;
  icon: string;
}

// 饲料配方
export interface FeedRecipe {
  id: string;
  creatureId: string;
  creatureName: string;
  ingredients: Ingredient[];
  craftingStation: string;
  difficulty: '简单' | '中等' | '困难';
}

export interface Ingredient {
  name: string;
  quantity: number;
  icon: string;
}

// 食谱
export interface Recipe {
  id: string;
  name: string;
  category: '主食' | '汤品' | '甜点' | '饮料';
  ingredients: Ingredient[];
  craftingStation: string;
  effect: string;
  icon: string;
}

// 生物
export interface Creature {
  id: string;
  name: string;
  type: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  description: string;
  habitat: string;
  diet: string;
  icon: string;
  drops: string[];
}

// 植物
export interface Plant {
  id: string;
  name: string;
  type: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  description: string;
  habitat: string;
  growthTime: string;
  icon: string;
  usage: string[];
}

// 版本
export interface Version {
  id: string;
  versionNumber: string;
  releaseDate: string;
  title: string;
  added: string[];
  removed: string[];
  changed: string[];
  guide: string;
}

// 稀有度映射
export const rarityColors: Record<string, { bg: string; border: string; text: string }> = {
  common: { bg: 'bg-rarity-common', border: 'border-slate-400', text: 'rarity-common' },
  rare: { bg: 'bg-rarity-rare', border: 'border-blue-500', text: 'rarity-rare' },
  epic: { bg: 'bg-rarity-epic', border: 'border-purple-500', text: 'rarity-epic' },
  legendary: { bg: 'bg-rarity-legendary', border: 'border-yellow-500', text: 'rarity-legendary' },
};

// 稀有度中文
export const rarityLabels: Record<string, string> = {
  common: '普通',
  rare: '稀有',
  epic: '史诗',
  legendary: '传说',
};
