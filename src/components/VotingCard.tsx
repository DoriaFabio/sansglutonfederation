import { useState } from 'react';
import { VotingCategory, Nominee } from '../data/votazioni';

interface VotingCardProps {
  category: VotingCategory;
  onVote: (categoryId: string, nomineeIndex: number) => void;
}

function VotingCard({ category, onVote }: VotingCardProps) {
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedNominee, setSelectedNominee] = useState<number | null>(null);

  const handleVote = (index: number) => {
    if (hasVoted) return;

    setSelectedNominee(index);
    setHasVoted(true);
    onVote(category.id, index);
  };

  const totalVotes = category.nominees.reduce((sum, nominee) => sum + nominee.votes, 0);

  const getPercentage = (votes: number) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes / totalVotes) * 100);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{category.icon}</span>
        <div>
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
          <p className="text-sm text-white/70">{category.description}</p>
        </div>
      </div>

      {/* Nominees */}
      <div className="space-y-3">
        {category.nominees.map((nominee: Nominee, index: number) => {
          const percentage = getPercentage(nominee.votes);
          const isSelected = selectedNominee === index;

          return (
            <div
              key={index}
              onClick={() => handleVote(index)}
              className={`relative overflow-hidden rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                hasVoted
                  ? isSelected
                    ? 'bg-amber-500/30 border-2 border-amber-400'
                    : 'bg-white/5'
                  : 'bg-white/10 hover:bg-white/20 hover:scale-102'
              }`}
            >
              {/* Progress bar */}
              {hasVoted && (
                <div
                  className="absolute top-0 left-0 h-full bg-linear-to-r from-amber-500/20 to-transparent transition-all duration-1000"
                  style={{ width: `${percentage}%` }}
                />
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-white">{nominee.playerName}</h4>
                    <p className="text-sm text-amber-100">{nominee.team}</p>
                  </div>
                  {hasVoted && (
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{percentage}%</p>
                      <p className="text-xs text-white/70">{nominee.votes} voti</p>
                    </div>
                  )}
                </div>
                <p className="text-sm text-white/80 italic">{nominee.reason}</p>
              </div>

              {/* Check icon for selected */}
              {isSelected && hasVoted && (
                <div className="absolute top-2 right-2">
                  <span className="text-2xl">✓</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Total votes */}
      {hasVoted && (
        <div className="mt-4 pt-4 border-t border-white/20 text-center">
          <p className="text-sm text-white/70">
            Totale voti: <span className="font-bold text-white">{totalVotes}</span>
          </p>
        </div>
      )}

      {/* Vote message */}
      {hasVoted && (
        <div className="mt-3 text-center">
          <p className="text-sm text-amber-100">Grazie per aver votato! 🎉</p>
        </div>
      )}
    </div>
  );
}

export default VotingCard;
