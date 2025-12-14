import { Trophy } from '../data/trofei';

interface TrophyCardProps {
  trophy: Trophy;
}

function TrophyCard({ trophy }: TrophyCardProps) {
  const getCategoryColor = () => {
    switch (trophy.category) {
      case 'gold':
        return 'from-yellow-500/30 to-yellow-600/30 border-yellow-400';
      case 'silver':
        return 'from-gray-300/30 to-gray-400/30 border-gray-300';
      case 'bronze':
        return 'from-orange-600/30 to-orange-700/30 border-orange-500';
      case 'special':
        return 'from-purple-500/30 to-pink-500/30 border-purple-400';
      default:
        return 'from-white/10 to-white/5 border-white/20';
    }
  };

  const getCategoryBadge = () => {
    switch (trophy.category) {
      case 'gold':
        return '🥇';
      case 'silver':
        return '🥈';
      case 'bronze':
        return '🥉';
      case 'special':
        return '🎭';
      default:
        return '🏆';
    }
  };

  return (
    <div
      className={`relative bg-linear-to-br ${getCategoryColor()} backdrop-blur-sm rounded-xl p-6 border-2 transition-all duration-300 ${
        trophy.unlocked
          ? 'hover:scale-105 hover:shadow-2xl'
          : 'opacity-50 grayscale'
      }`}
    >
      {/* Category Badge */}
      <div className="absolute top-4 right-4 text-3xl">
        {getCategoryBadge()}
      </div>

      {/* Trophy Icon */}
      <div className="text-center mb-4">
        <div className={`text-7xl mb-2 ${!trophy.unlocked && 'filter blur-sm'}`}>
          {trophy.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">
          {trophy.title}
        </h3>
        <p className="text-sm text-white/80">
          {trophy.description}
        </p>
      </div>

      {/* Winner Info */}
      {trophy.unlocked && trophy.winner ? (
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-xs text-white/60 mb-2">VINCITORE</p>
            <h4 className="text-lg font-bold text-amber-100">
              {trophy.winner.teamName}
            </h4>
            <p className="text-sm text-white/80">
              {trophy.winner.ownerName}
            </p>
            {trophy.winner.value && (
              <p className="text-sm text-white/70 mt-2 font-mono">
                {trophy.winner.value}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-6 pt-4 border-t border-white/20 text-center">
          <p className="text-sm text-white/60">
            {trophy.unlocked ? 'Nessun vincitore ancora' : '🔒 Bloccato'}
          </p>
          {!trophy.unlocked && (
            <p className="text-xs text-white/40 mt-1">
              Questo trofeo verrà assegnato durante la stagione
            </p>
          )}
        </div>
      )}

      {/* Unlocked indicator */}
      {trophy.unlocked && (
        <div className="absolute top-2 left-2">
          <span className="inline-block bg-green-500/80 text-white text-xs px-2 py-1 rounded-full">
            ✓ Sbloccato
          </span>
        </div>
      )}
    </div>
  );
}

export default TrophyCard;
