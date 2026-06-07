import { useState } from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Flame, Soup, Cake, Coffee, Sparkles } from 'lucide-react';
import { MagicCard, FilterTabs, DetailModal } from '@/components/ui';
import { recipesData } from '@/data';
import type { Recipe } from '@/types';

const categoryTabs = [
  { id: '主食', label: '主食', icon: Flame },
  { id: '汤品', label: '汤品', icon: Soup },
  { id: '甜点', label: '甜点', icon: Cake },
  { id: '饮料', label: '饮料', icon: Coffee },
];

const categoryColors: Record<string, string> = {
  主食: 'from-orange-500 to-red-600',
  汤品: 'from-blue-500 to-cyan-600',
  甜点: 'from-pink-500 to-purple-600',
  饮料: 'from-emerald-500 to-teal-600',
};

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = recipesData.filter((recipe) => {
    if (selectedCategory && recipe.category !== selectedCategory) return false;
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
            食谱大全
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            完整的食谱配方，涵盖主食、汤品、甜点、饮料等各类美食
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="font-display text-sm font-bold text-purple-300 mb-3">食物分类</h3>
          <FilterTabs
            tabs={categoryTabs}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe, index) => (
            <MagicCard
              key={recipe.id}
              delay={index * 0.05}
              onClick={() => setSelectedRecipe(recipe)}
              className="p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${categoryColors[recipe.category]} flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl">{recipe.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {recipe.name}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {categoryTabs.find(c => c.id === recipe.category)?.label}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-xs text-slate-400 mb-2">所需材料：</div>
                {recipe.ingredients.slice(0, 3).map((ing, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{ing.icon}</span>
                    <span className="text-slate-300">
                      {ing.name} × {ing.quantity}
                    </span>
                  </div>
                ))}
                {recipe.ingredients.length > 3 && (
                  <div className="text-xs text-slate-500 pl-7">
                    还有 {recipe.ingredients.length - 3} 种材料...
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-purple-500/20">
                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">{recipe.effect}</span>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-20">
            <UtensilsCrossed className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">没有找到符合条件的食谱</p>
          </div>
        )}

        {/* Detail Modal */}
        <DetailModal
          isOpen={!!selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          title={selectedRecipe?.name || ''}
        >
          {selectedRecipe && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${categoryColors[selectedRecipe.category]} flex items-center justify-center shadow-lg`}>
                  <span className="text-4xl">{selectedRecipe.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {selectedRecipe.name}
                  </h3>
                  <span className="text-sm text-slate-400">
                    {categoryTabs.find(c => c.id === selectedRecipe.category)?.label}
                  </span>
                </div>
              </div>

              {/* Effect */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">效果</span>
                </div>
                <p className="text-white">{selectedRecipe.effect}</p>
              </div>

              {/* Crafting Info */}
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-slate-400 text-sm mb-1">制作工坊</div>
                <div className="text-white font-medium">{selectedRecipe.craftingStation}</div>
              </div>

              {/* Ingredients */}
              <div>
                <h4 className="font-display text-sm font-bold text-purple-300 mb-3">所需材料</h4>
                <div className="grid grid-cols-1 gap-3">
                  {selectedRecipe.ingredients.map((ing, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5"
                    >
                      <span className="text-2xl">{ing.icon}</span>
                      <div className="flex-1">
                        <div className="text-white font-medium">{ing.name}</div>
                      </div>
                      <div className="text-slate-400 font-mono">
                        × {ing.quantity}
                      </div>
                    </div>
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
