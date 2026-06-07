import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Map, Utensils, BookOpen, Leaf, Sparkles, ArrowRight, Clock, Star } from 'lucide-react';
import { MagicCard } from '@/components/ui';
import { getLatestVersion, versionsData } from '@/data';

const quickLinks = [
  {
    icon: Map,
    title: '地图资源',
    description: '采集物坐标大全',
    path: '/map',
    color: 'from-emerald-500 to-emerald-700',
    delay: 0.1,
  },
  {
    icon: Utensils,
    title: '生物饲料',
    description: '驯养配方攻略',
    path: '/feed',
    color: 'from-orange-500 to-orange-700',
    delay: 0.2,
  },
  {
    icon: BookOpen,
    title: '食谱大全',
    description: '完整食谱配方',
    path: '/recipes',
    color: 'from-red-500 to-red-700',
    delay: 0.3,
  },
  {
    icon: Leaf,
    title: '生物图鉴',
    description: '生物植物详解',
    path: '/creatures',
    color: 'from-purple-500 to-purple-700',
    delay: 0.4,
  },
];

export default function Home() {
  const latestVersion = getLatestVersion();
  const recentVersions = versionsData.slice(-3).reverse();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-night-900" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse_glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl animate-pulse_glow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-purple-300">最权威的游戏攻略站</span>
            </motion.div>

            {/* Title */}
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
                创造与魔法
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-slate-300">攻略百科</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              整合好游快爆、B站雪落倾殇等权威渠道资源，涵盖地图资源、生物植物、
              饲料食谱、版本更新等全方位攻略内容。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/map"
                className="magic-button flex items-center gap-2 text-lg px-8 py-3"
              >
                开始探索
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/versions"
                className="px-8 py-3 rounded-xl border border-purple-500/30 text-purple-300 hover:bg-purple-600/20 transition-all flex items-center gap-2"
              >
                版本历史
              </Link>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 opacity-30 animate-float">
            <span className="text-6xl">🌟</span>
          </div>
          <div className="absolute top-40 right-20 opacity-30 animate-float" style={{ animationDelay: '2s' }}>
            <span className="text-5xl">✨</span>
          </div>
          <div className="absolute bottom-20 left-20 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
            <span className="text-4xl">💎</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-purple-400"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              快速导航
            </h2>
            <p className="text-slate-400">选择你需要的攻略内容</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <MagicCard delay={link.delay} className="p-6 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{link.title}</h3>
                  <p className="text-sm text-slate-400">{link.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-purple-400 text-sm">
                    <span>查看详情</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </MagicCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Version Section */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              最新版本
            </h2>
            <p className="text-slate-400">了解最新的游戏更新内容</p>
          </motion.div>

          <MagicCard className="max-w-4xl mx-auto p-8" delay={0.1}>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Version Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium">
                    v{latestVersion.versionNumber}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {latestVersion.releaseDate}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {latestVersion.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {latestVersion.guide.split('\n')[0]}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-2xl font-bold text-emerald-400">{latestVersion.added.length}</div>
                    <div className="text-xs text-slate-400">新增内容</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <div className="text-2xl font-bold text-red-400">{latestVersion.removed.length}</div>
                    <div className="text-xs text-slate-400">删除内容</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-400">{latestVersion.changed.length}</div>
                    <div className="text-xs text-slate-400">变更内容</div>
                  </div>
                </div>

                <Link
                  to={`/versions/${latestVersion.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
                >
                  查看完整攻略
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Recent Versions List */}
              <div className="md:w-72 border-t md:border-t-0 md:border-l border-purple-500/20 pt-6 md:pt-0 md:pl-8">
                <h4 className="font-display text-sm font-bold text-slate-400 mb-4">近期版本</h4>
                <div className="space-y-3">
                  {recentVersions.map((version) => (
                    <Link
                      key={version.id}
                      to={`/versions/${version.id}`}
                      className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-sm font-medium text-white">{version.versionNumber}</span>
                      </div>
                      <p className="text-xs text-slate-400">{version.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </MagicCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '6+', label: '探索地图' },
              { value: '50+', label: '采集资源' },
              { value: '40+', label: '食谱配方' },
              { value: '20+', label: '版本历史' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-purple-500/10"
              >
                <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
