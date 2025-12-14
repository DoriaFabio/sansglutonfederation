export interface VotingCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  nominees: Nominee[];
}

export interface Nominee {
  playerName: string;
  team: string;
  reason: string;
  votes: number;
}

export const votingCategories: VotingCategory[] = [
  {
    id: "miglior-giocatore",
    title: "Miglior Giocatore della Giornata",
    description: "Chi ha fatto la differenza questa settimana?",
    icon: "⭐",
    nominees: [
      { playerName: "Thuram M.", team: "Inter", reason: "Doppietta decisiva", votes: 0 },
      { playerName: "Leao", team: "Milan", reason: "Gol e assist", votes: 0 },
      { playerName: "Vlahovic", team: "Juventus", reason: "Tripletta", votes: 0 },
    ]
  },
  {
    id: "flop-settimana",
    title: "Flop della Settimana",
    description: "Chi ha deluso le aspettative?",
    icon: "💩",
    nominees: [
      { playerName: "Lukaku", team: "Napoli", reason: "Rigore sbagliato", votes: 0 },
      { playerName: "Dybala", team: "Roma", reason: "Espulso al 30'", votes: 0 },
      { playerName: "Politano", team: "Napoli", reason: "0 in pagella", votes: 0 },
    ]
  },
  {
    id: "gol-piu-bello",
    title: "Gol più Bello",
    description: "Il gol più spettacolare della giornata",
    icon: "🚀",
    nominees: [
      { playerName: "Barella", team: "Inter", reason: "Rovesciata dalla distanza", votes: 0 },
      { playerName: "Kean", team: "Fiorentina", reason: "Slalom tra 4 difensori", votes: 0 },
      { playerName: "Pulisic", team: "Milan", reason: "Tiro al volo impossibile", votes: 0 },
    ]
  },
  {
    id: "portiere-settimana",
    title: "Portiere della Settimana",
    description: "Chi ha salvato la porta?",
    icon: "🧤",
    nominees: [
      { playerName: "Maignan", team: "Milan", reason: "3 parate decisive", votes: 0 },
      { playerName: "Sommer", team: "Inter", reason: "Rigore parato", votes: 0 },
      { playerName: "Di Gregorio", team: "Juventus", reason: "Porta inviolata", votes: 0 },
    ]
  }
];
