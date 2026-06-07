import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, Sparkles, Zap, Minus } from 'lucide-react';
import { MagicCard } from '@/components/ui';
import { versionsData, getLatestVersion } from '@/data';

export default function VersionsPage() {
  const latestVersion = getLatestVersion();

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
            版本历史
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            完整的版本演进记录，了解每一次更新带来的变化
          </p>
        </motion.div>

        {/* Latest Version Highlight */}
        <Link to={`/versions/${latestVersion.id}`}>
          <MagicCard className="max-w-4xl mx-auto p-8 mb-12 border-2 border-yellow-500/30" delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">最新版本</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-display text-2xl font-bold text-white">
                    v{latestVersion.versionNumber}
                  </h2>
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
                    {latestVersion.title}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {latestVersion.releaseDate}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-xl font-bold text-emerald-400">{latestVersion.added.length}</div>
                    <div className="text-xs text-slate-400">新增</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <div className="text-xl font-bold text-red-400">{latestVersion.removed.length}</div>
                    <div className="text-xs text-slate-400">删除</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="text-xl font-bold text-blue-400">{latestVersion.changed.length}</div>
                    <div className="text-xs text-slate-400">变更</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <span>查看详情</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </MagicCard>
        </Link>

        {/* Version Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-xl font-bold text-white mb-6">版本时间轴</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-6">
              {versionsData.slice().reverse().map((version, index) => (
                <motion.div
                  key={version.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 border-4 border-night-900 z-10" />

                  {/* Content Card */}
                  <Link
                    to={`/versions/${version.id}`}
                    className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left md:order-3'
                    }`}
                  >
                    <MagicCard className="p-5" delay={index * 0.05 + 0.2}>
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-sm font-mono">
                          v{version.versionNumber}
                        </span>
                        <span className="text-xs text-slate-500">{version.releaseDate}</span>
                      </div>
                      <h4 className="font-display text-lg font-bold text-white mb-2">
                        {version.title}
                      </h4>

                      {/* Change Summary */}
                      <div className="space-y-1">
                        {version.added.length > 0 && (
                          <div className={`flex items-center gap-2 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            <Zap className="w-4 h-4 text-emerald-400" />
                            <span className="text-slate-400">
                              {version.added.length} 项新增
                            </span>
                          </div>
                        )}
                        {version.removed.length > 0 && (
                          <div className={`flex items-center gap-2 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            <Minus className="w-4 h-4 text-red-400" />
                            <span className="text-slate-400">
                              {version.removed.length} 项删除
                            </span>
                          </div>
                        )}
                        {version.changed.length > 0 && (
                          <div className={`flex items-center gap-2 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-slate-400">
                              {version.changed.length} 项变更
                            </span>
                          </div>
                        )}
                      </div>

                      <div className={`mt-3 flex items-center gap-1 text-purple-400 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span>查看详情</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </MagicCard>
                  </Link>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
