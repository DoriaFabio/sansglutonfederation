// import { useState } from 'react';
// import VotingCard from '../components/VotingCard';
// import { votingCategories, VotingCategory } from '../data/votazioni';

function Votazioni() {
  // const [categories, setCategories] = useState<VotingCategory[]>(votingCategories);

  // const handleVote = (categoryId: string, nomineeIndex: number) => {
  //   setCategories(prevCategories =>
  //     prevCategories.map(category => {
  //       if (category.id === categoryId) {
  //         return {
  //           ...category,
  //           nominees: category.nominees.map((nominee, index) =>
  //             index === nomineeIndex
  //               ? { ...nominee, votes: nominee.votes + 1 }
  //               : nominee
  //           )
  //         };
  //       }
  //       return category;
  //     })
  //   );
  // };

  return (
    <div className="min-h-screen bg-linear-to-b from-cyan-800 to-cyan-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🗳️ Votazioni della Lega
          </h1>
          <p className="text-xl text-amber-100">
            Vota i migliori (e i peggiori) della settimana!
          </p>
          <p className="text-sm text-white/70 mt-2">
            Ogni utente può votare una volta per categoria
          </p>
        </div>

        <p className='text-center text-2xl text-white font-bold'>Pagina in costruzione...</p>

        {/* Voting Categories Grid
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map(category => (
            <VotingCard
              key={category.id}
              category={category}
              onVote={handleVote}
            />
          ))}
        </div>

         Info Box
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Come funzionano le votazioni?
          </h3>
          <div className="text-white/80 space-y-2">
            <p>✅ Vota il tuo preferito in ogni categoria</p>
            <p>📊 Vedi i risultati in tempo reale dopo aver votato</p>
            <p>🔄 Le votazioni vengono resettate ogni settimana</p>
            <p>🏆 I vincitori vengono annunciati alla fine della giornata</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Votazioni;
