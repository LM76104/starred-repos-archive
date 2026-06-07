import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Zap, Minus, Sparkles, FileText } from 'lucide-react';
import { MagicCard } from '@/components/ui';
import { getVersionById } from '@/data';

export default function VersionDetailPage() {
  const { versionId } = useParams<{ versionId: string }>();
  const version = versionId ? getVersionById(versionId) : null;

  if (!version) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">版本未找到</h2>
          <Link
            to="/versions"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            <ArrowLeft className="w-4 h-4" />
            返回版本历史
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/versions"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>返回版本历史</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 font-mono text-lg">
              v{version.versionNumber}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-5 h-5" />
              {version.releaseDate}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {version.title}
          </h1>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl">
          <MagicCard className="p-4 text-center border-2 border-emerald-500/30" delay={0.1}>
            <Zap className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-emerald-400">{version.added.length}</div>
            <div className="text-xs text-slate-400">新增内容</div>
          </MagicCard>
          <MagicCard className="p-4 text-center border-2 border-red-500/30" delay={0.2}>
            <Minus className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-red-400">{version.removed.length}</div>
            <div className="text-xs text-slate-400">删除内容</div>
          </MagicCard>
          <MagicCard className="p-4 text-center border-2 border-blue-500/30" delay={0.3}>
            <Sparkles className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-400">{version.changed.length}</div>
            <div className="text-xs text-slate-400">变更内容</div>
          </MagicCard>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Added */}
          {version.added.length > 0 && (
            <MagicCard className="p-6" delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="font-display text-xl font-bold text-white">新增内容</h2>
              </div>
              <ul className="space-y-3">
                {version.added.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </MagicCard>
          )}

          {/* Removed */}
          {version.removed.length > 0 && (
            <MagicCard className="p-6" delay={0.3}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <Minus className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="font-display text-xl font-bold text-white">删除内容</h2>
              </div>
              <ul className="space-y-3">
                {version.removed.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </MagicCard>
          )}

          {/* Changed */}
          {version.changed.length > 0 && (
            <MagicCard className="p-6 lg:col-span-2" delay={0.4}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="font-display text-xl font-bold text-white">变更内容</h2>
              </div>
              <ul className="space-y-3">
                {version.changed.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </MagicCard>
          )}
        </div>

        {/* Guide Section */}
        <MagicCard className="p-8 max-w-4xl" delay={0.5}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white">版本攻略</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            {version.guide.split('\n').map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </MagicCard>
      </div>
    </div>
  );
}
