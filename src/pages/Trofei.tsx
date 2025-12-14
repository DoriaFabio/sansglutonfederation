import { useState } from 'react';
import TrophyCard from '../components/TrophyCard';
import { trophies } from '../data/trofei';

type FilterType = 'all' | 'gold' | 'silver' | 'bronze' | 'special' | 'unlocked' | 'locked';

function Trofei() {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTrophies = trophies.filter(trophy => {
    if (filter === 'all') return true;
    if (filter === 'unlocked') return trophy.unlocked;
    if (filter === 'locked') return !trophy.unlocked;
    return trophy.category === filter;
  });

  const stats = {
    total: trophies.length,
    unlocked: trophies.filter(t => t.unlocked).length,
    gold: trophies.filter(t => t.category === 'gold').length,
    silver: trophies.filter(t => t.category === 'silver').length,
    bronze: trophies.filter(t => t.category === 'bronze').length,
    special: trophies.filter(t => t.category === 'special').length,
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-cyan-800 to-cyan-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="md:text-5xl text-4xl font-bold text-white mb-4">
            🏆 Bacheca Trofei
          </h1>
          <p className="text-[18px] md:text-xl text-amber-100 mb-6">
            Achievement e riconoscimenti della lega
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-white text-cyan-900'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Tutti ({stats.total})
          </button>
          <button
            onClick={() => setFilter('unlocked')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'unlocked'
                ? 'bg-green-700 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Sbloccati ({stats.unlocked})
          </button>
          <button
            onClick={() => setFilter('locked')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'locked'
                ? 'bg-red-800 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Bloccati ({stats.total - stats.unlocked})
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('gold')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'gold'
                ? 'bg-yellow-500 text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            🥇 Oro ({stats.gold})
          </button>
          <button
            onClick={() => setFilter('silver')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'silver'
                ? 'bg-gray-300 text-gray-900'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            🥈 Argento ({stats.silver})
          </button>
          <button
            onClick={() => setFilter('bronze')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'bronze'
                ? 'bg-orange-600 text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            🥉 Bronzo ({stats.bronze})
          </button>
          <button
            onClick={() => setFilter('special')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filter === 'special'
                ? 'bg-purple-500 text-white'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            🎭 Speciali ({stats.special})
          </button>
        </div>

        {/* Trophies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrophies.map(trophy => (
            <TrophyCard key={trophy.id} trophy={trophy} />
          ))}
        </div>

        {/* Empty State */}
        {filteredTrophies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-white/70">
              Nessun trofeo trovato con questo filtro
            </p>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Come funzionano i Trofei?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">🥇</div>
              <h4 className="font-bold text-amber-100 mb-1">Trofei d&apos;Oro</h4>
              <p className="text-sm text-white/70">
                Achievement prestigiosi per i migliori
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🥈</div>
              <h4 className="font-bold text-gray-300 mb-1">Trofei d&apos;Argento</h4>
              <p className="text-sm text-white/70">
                Riconoscimenti importanti
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🥉</div>
              <h4 className="font-bold text-orange-400 mb-1">Trofei di Bronzo</h4>
              <p className="text-sm text-white/70">
                Momenti memorabili
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎭</div>
              <h4 className="font-bold text-purple-300 mb-1">Trofei Speciali</h4>
              <p className="text-sm text-white/70">
                Per situazioni... particolari 😅
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trofei;
