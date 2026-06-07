import type { Recipe } from '@/types';

export const recipesData: Recipe[] = [
  // 主食类
  {
    id: 'r-1',
    name: '烤鱼排',
    category: '主食',
    ingredients: [
      { name: '鲜鱼', quantity: 2, icon: '🐟' },
      { name: '盐', quantity: 1, icon: '🧂' },
    ],
    craftingStation: '简易熔炉',
    effect: '恢复30点饥饿值',
    icon: '🍳',
  },
  {
    id: 'r-2',
    name: '肉排套餐',
    category: '主食',
    ingredients: [
      { name: '优质肉排', quantity: 3, icon: '🥩' },
      { name: '烤土豆', quantity: 2, icon: '🥔' },
      { name: '蘑菇', quantity: 2, icon: '🍄' },
    ],
    craftingStation: '高级熔炉',
    effect: '恢复50点饥饿值，附带饱腹感',
    icon: '🍖',
  },
  {
    id: 'r-3',
    name: '海鲜意面',
    category: '主食',
    ingredients: [
      { name: '鲜虾', quantity: 5, icon: '🦐' },
      { name: '小麦', quantity: 3, icon: '🌾' },
      { name: '番茄', quantity: 2, icon: '🍅' },
    ],
    craftingStation: '高级熔炉',
    effect: '恢复45点饥饿值，提升速度',
    icon: '🍝',
  },
  {
    id: 'r-4',
    name: '面包篮',
    category: '主食',
    ingredients: [
      { name: '小麦', quantity: 5, icon: '🌾' },
      { name: '蜂蜜', quantity: 2, icon: '🍯' },
    ],
    craftingStation: '简易熔炉',
    effect: '恢复20点饥饿值',
    icon: '🍞',
  },
  // 汤品类
  {
    id: 'r-5',
    name: '蘑菇汤',
    category: '汤品',
    ingredients: [
      { name: '蘑菇', quantity: 5, icon: '🍄' },
      { name: '牛奶', quantity: 1, icon: '🥛' },
    ],
    craftingStation: '简易熔炉',
    effect: '恢复25点饥饿值，恢复5点生命',
    icon: '🍲',
  },
  {
    id: 'r-6',
    name: '鱼汤',
    category: '汤品',
    ingredients: [
      { name: '鲜鱼', quantity: 3, icon: '🐟' },
      { name: '海带', quantity: 2, icon: '🌿' },
      { name: '盐', quantity: 1, icon: '🧂' },
    ],
    craftingStation: '简易熔炉',
    effect: '恢复30点饥饿值，提升水下呼吸',
    icon: '🐟',
  },
  {
    id: 'r-7',
    name: '羊肉汤',
    category: '汤品',
    ingredients: [
      { name: '羊排', quantity: 3, icon: '🥩' },
      { name: '萝卜', quantity: 3, icon: '🥕' },
      { name: '香草', quantity: 2, icon: '🌿' },
    ],
    craftingStation: '高级熔炉',
    effect: '恢复40点饥饿值，驱寒效果',
    icon: '🍖',
  },
  // 甜点类
  {
    id: 'r-8',
    name: '蜂蜜蛋糕',
    category: '甜点',
    ingredients: [
      { name: '小麦', quantity: 3, icon: '🌾' },
      { name: '蜂蜜', quantity: 4, icon: '🍯' },
      { name: '鸡蛋', quantity: 2, icon: '🥚' },
    ],
    craftingStation: '简易熔炉',
    effect: '恢复15点饥饿值，甜蜜心情',
    icon: '🍰',
  },
  {
    id: 'r-9',
    name: '彩虹果冻',
    category: '甜点',
    ingredients: [
      { name: '彩虹草', quantity: 2, icon: '🌈' },
      { name: '糖', quantity: 3, icon: '🍬' },
      { name: '牛奶', quantity: 2, icon: '🥛' },
    ],
    craftingStation: '魔法工作台',
    effect: '恢复20点饥饿值，魅力提升',
    icon: '🧁',
  },
  {
    id: 'r-10',
    name: '冰激凌',
    category: '甜点',
    ingredients: [
      { name: '牛奶', quantity: 2, icon: '🥛' },
      { name: '冰晶', quantity: 3, icon: '❄️' },
      { name: '蜂蜜', quantity: 2, icon: '🍯' },
    ],
    craftingStation: '简易熔炉',
    effect: '消暑解热，恢复10点饥饿值',
    icon: '🍦',
  },
  // 饮料类
  {
    id: 'r-11',
    name: '魔法药水',
    category: '饮料',
    ingredients: [
      { name: '魔法草', quantity: 3, icon: '🌿' },
      { name: '水', quantity: 1, icon: '💧' },
      { name: '紫水晶', quantity: 1, icon: '💜' },
    ],
    craftingStation: '魔法工作台',
    effect: '恢复魔力值30点',
    icon: '🧪',
  },
  {
    id: 'r-12',
    name: '生命药水',
    category: '饮料',
    ingredients: [
      { name: '魔法草', quantity: 5, icon: '🌿' },
      { name: '雪莲花', quantity: 2, icon: '🌺' },
      { name: '蜂蜜', quantity: 2, icon: '🍯' },
    ],
    craftingStation: '魔法工作台',
    effect: '恢复生命值50点',
    icon: '❤️',
  },
  {
    id: 'r-13',
    name: '火焰药剂',
    category: '饮料',
    ingredients: [
      { name: '烈焰花', quantity: 5, icon: '🔥' },
      { name: '熔岩石', quantity: 3, icon: '🌋' },
      { name: '火焰精华', quantity: 2, icon: '🔥' },
    ],
    craftingStation: '元素祭坛',
    effect: '获得火焰抗性',
    icon: '🔥',
  },
  {
    id: 'r-14',
    name: '冰霜药剂',
    category: '饮料',
    ingredients: [
      { name: '雪莲花', quantity: 5, icon: '🌺' },
      { name: '冰晶', quantity: 5, icon: '❄️' },
      { name: '寒冰精华', quantity: 2, icon: '❄️' },
    ],
    craftingStation: '元素祭坛',
    effect: '获得冰冻抗性，移动速度提升',
    icon: '❄️',
  },
  {
    id: 'r-15',
    name: '精灵果汁',
    category: '饮料',
    ingredients: [
      { name: '精灵花', quantity: 3, icon: '🌸' },
      { name: '蜂蜜', quantity: 3, icon: '🍯' },
      { name: '魔法泉水', quantity: 2, icon: '💧' },
    ],
    craftingStation: '魔法工作台',
    effect: '全属性短暂提升',
    icon: '✨',
  },
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipesData.find(r => r.id === id);
};

export const getRecipesByCategory = (category: Recipe['category']): Recipe[] => {
  return recipesData.filter(r => r.category === category);
};
