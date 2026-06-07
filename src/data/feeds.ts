import type { FeedRecipe } from '@/types';

export const feedRecipesData: FeedRecipe[] = [
  {
    id: 'fr-1',
    creatureId: 'cave-lizard',
    creatureName: '洞穴蜥蜴',
    ingredients: [
      { name: '昆虫腿', quantity: 3, icon: '🦵' },
      { name: '发光苔藓', quantity: 2, icon: '🌿' },
    ],
    craftingStation: '简易熔炉',
    difficulty: '简单',
  },
  {
    id: 'fr-2',
    creatureId: 'frost-wolf',
    creatureName: '霜狼',
    ingredients: [
      { name: '优质肉排', quantity: 5, icon: '🥩' },
      { name: '冰晶', quantity: 3, icon: '❄️' },
      { name: '霜狼毛皮', quantity: 1, icon: '🐺' },
    ],
    craftingStation: '高级熔炉',
    difficulty: '中等',
  },
  {
    id: 'fr-3',
    creatureId: 'lava-lizard',
    creatureName: '熔岩蜥蜴',
    ingredients: [
      { name: '熔岩石', quantity: 5, icon: '🌋' },
      { name: '火焰精华', quantity: 2, icon: '🔥' },
      { name: '优质肉排', quantity: 3, icon: '🥩' },
    ],
    craftingStation: '高级熔炉',
    difficulty: '中等',
  },
  {
    id: 'fr-4',
    creatureId: 'unicorn',
    creatureName: '独角兽',
    ingredients: [
      { name: '精灵花', quantity: 3, icon: '🌸' },
      { name: '独角兽毛', quantity: 5, icon: '🦄' },
      { name: '魔法草', quantity: 5, icon: '🌿' },
      { name: '彩虹草', quantity: 1, icon: '🌈' },
    ],
    craftingStation: '魔法工作台',
    difficulty: '困难',
  },
  {
    id: 'fr-5',
    creatureId: 'cave-bat',
    creatureName: '洞穴蝙蝠',
    ingredients: [
      { name: '昆虫腿', quantity: 5, icon: '🦵' },
      { name: '发光苔藓', quantity: 3, icon: '🌿' },
    ],
    craftingStation: '简易熔炉',
    difficulty: '简单',
  },
  {
    id: 'fr-6',
    creatureId: 'wild-rabbit',
    creatureName: '野兔',
    ingredients: [
      { name: '小麦', quantity: 5, icon: '🌾' },
      { name: '胡萝卜', quantity: 3, icon: '🥕' },
    ],
    craftingStation: '简易熔炉',
    difficulty: '简单',
  },
  {
    id: 'fr-7',
    creatureId: 'star-deer',
    creatureName: '星鹿',
    ingredients: [
      { name: '魔法蒲公英', quantity: 5, icon: '🌼' },
      { name: '星鹿角', quantity: 2, icon: '🦌' },
      { name: '神圣毛皮', quantity: 3, icon: '✨' },
    ],
    craftingStation: '魔法工作台',
    difficulty: '困难',
  },
  {
    id: 'fr-8',
    creatureId: 'fire-elemental',
    creatureName: '火焰元素',
    ingredients: [
      { name: '烈焰花', quantity: 10, icon: '🔥' },
      { name: '熔岩石', quantity: 15, icon: '🌋' },
      { name: '火焰精华', quantity: 5, icon: '🔥' },
      { name: '龙鳞矿', quantity: 3, icon: '🐉' },
    ],
    craftingStation: '元素祭坛',
    difficulty: '困难',
  },
  {
    id: 'fr-9',
    creatureId: 'ice-elemental',
    creatureName: '寒冰元素',
    ingredients: [
      { name: '雪莲花', quantity: 10, icon: '🌺' },
      { name: '冰晶', quantity: 15, icon: '❄️' },
      { name: '寒冰精华', quantity: 5, icon: '❄️' },
      { name: '寒铁', quantity: 5, icon: '⛏️' },
    ],
    craftingStation: '元素祭坛',
    difficulty: '困难',
  },
  {
    id: 'fr-10',
    creatureId: 'forest-spirit',
    creatureName: '森林精灵',
    ingredients: [
      { name: '古树树脂', quantity: 5, icon: '🌳' },
      { name: '精灵花', quantity: 3, icon: '🌸' },
      { name: '魔法草', quantity: 10, icon: '🌿' },
      { name: '自然精华', quantity: 3, icon: '🌿' },
    ],
    craftingStation: '魔法工作台',
    difficulty: '困难',
  },
  {
    id: 'fr-11',
    creatureId: 'golden-butterfly',
    creatureName: '金蝶',
    ingredients: [
      { name: '魔法蒲公英', quantity: 3, icon: '🌼' },
      { name: '蜂蜜', quantity: 5, icon: '🍯' },
      { name: '金色粉末', quantity: 2, icon: '✨' },
    ],
    craftingStation: '简易熔炉',
    difficulty: '简单',
  },
];

export const getFeedRecipeById = (id: string): FeedRecipe | undefined => {
  return feedRecipesData.find(f => f.id === id);
};

export const getFeedRecipesByDifficulty = (difficulty: FeedRecipe['difficulty']): FeedRecipe[] => {
  return feedRecipesData.filter(f => f.difficulty === difficulty);
};
