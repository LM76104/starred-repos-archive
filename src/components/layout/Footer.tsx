import { Link } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-purple-500/20 bg-night-900/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">创造与魔法攻略百科</h3>
                <p className="text-xs text-slate-400">最权威的游戏攻略站</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              整合好游快爆、B站雪落倾殇等权威渠道资源，为玩家提供全方位的游戏攻略体验。
              涵盖地图资源、生物植物、饲料食谱、版本更新等核心内容。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-purple-300 mb-4">快速导航</h4>
            <ul className="space-y-2">
              {[
                { path: '/map', label: '地图资源' },
                { path: '/feed', label: '生物饲料' },
                { path: '/recipes', label: '食谱大全' },
                { path: '/creatures', label: '生物图鉴' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-purple-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-sm font-bold text-purple-300 mb-4">更多内容</h4>
            <ul className="space-y-2">
              {[
                { path: '/plants', label: '植物图鉴' },
                { path: '/versions', label: '版本历史' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-purple-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2024 创造与魔法攻略百科. 整合自好游快爆、B站雪落倾殇等权威渠道。
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400" /> for adventurers
          </p>
        </div>
      </div>
    </footer>
  );
}
