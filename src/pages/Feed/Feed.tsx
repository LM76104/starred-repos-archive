import { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, ChefHat, Check } from 'lucide-react';
import { MagicCard, FilterTabs, DetailModal } from '@/components/ui';
import { feedRecipesData } from '@/data';
import type { FeedRecipe } from '@/types';

const difficultyTabs = [
  { id: '简单', label: '简单' },
  { id: '中等', label: '中等' },
  { id: '困难', label: '困难' },
];

const difficultyColors: Record<string, { bg: string; text: string; border: string }> = {
  简单: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  中等: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  困难: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/30' },
};

export default function FeedPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<FeedRecipe | null>(null);

  const filteredRecipes = feedRecipesData.filter((recipe) => {
    if (selectedDifficulty && recipe.difficulty !== selectedDifficulty) return false;
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
            生物饲料配方
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            掌握各种生物的饲料配方，成功驯服你的伙伴
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-6">
          <div>
            <h3 className="font-display text-sm font-bold text-purple-300 mb-3">制作难度</h3>
            <FilterTabs
              tabs={difficultyTabs}
              selected={selectedDifficulty}
              onSelect={setSelectedDifficulty}
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe, index) => (
            <MagicCard
              key={recipe.id}
              delay={index * 0.05}
              onClick={() => setSelectedRecipe(recipe)}
              className={`p-6 border-2 ${difficultyColors[recipe.difficulty].border}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {recipe.creatureName}
                  </h3>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${difficultyColors[recipe.difficulty].bg} ${difficultyColors[recipe.difficulty].text}`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-slate-400 mb-2">所需材料：</div>
                {recipe.ingredients.map((ing, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{ing.icon}</span>
                    <span className="text-slate-300">
                      {ing.name} × {ing.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-purple-500/20">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <FlaskConical className="w-4 h-4" />
                  <span>{recipe.craftingStation}</span>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-20">
            <FlaskConical className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">没有找到符合条件的配方</p>
          </div>
        )}

        {/* Detail Modal */}
        <DetailModal
          isOpen={!!selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          title={`${selectedRecipe?.creatureName || ''} 饲料配方`}
        >
          {selectedRecipe && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                  <ChefHat className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {selectedRecipe.creatureName}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${difficultyColors[selectedRecipe.difficulty].bg} ${difficultyColors[selectedRecipe.difficulty].text}`}>
                    {selectedRecipe.difficulty}
                  </span>
                </div>
              </div>

              {/* Crafting Info */}
              <div className="p-4 rounded-xl bg-white/5">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <FlaskConical className="w-5 h-5" />
                  <span>制作工坊</span>
                </div>
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

              {/* Tips */}
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <div className="text-yellow-400 font-medium mb-1">制作提示</div>
                    <p className="text-sm text-slate-300">
                      确保携带足够的材料，饲料制作成功后可立即使用。
                      不同难度的配方成功率不同，建议多加练习。
                    </p>
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
