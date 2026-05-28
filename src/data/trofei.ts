export interface Trophy {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'gold' | 'silver' | 'bronze' | 'special';
  winner?: {
    teamName: string;
    ownerName: string;
    value?: string | number;
  };
  unlocked: boolean;
}

export const trophies: Trophy[] = [
  // Trofei d'Oro
  {
    id: "campione-fanta",
    title: "Re del Fantacalcio",
    description: "Squadra campione della stagione",
    icon: "👑",
    category: "gold",
    winner: {
      teamName: "Brunori Sassuolo",
      ownerName: "Leonardo Miresse",
      value: "68 punti"
    },
    unlocked: true
  },
  {
    id: "campione-coppa",
    title: "Re della Coppa",
    description: "Squadra vincitrice della Coppa",
    icon: "👑",
    winner: {
      teamName: "Barchillona",
      ownerName: "Giuseppe Capocotta",
      value: "Vittoria in finale contro De Paul Fiction"
    },
    category: "gold",
    unlocked: true
  },
  {
    id: "finale-coppa perdente",
    title: "Finalista Sfortunato",
    description: "Squadra finalista della Coppa",
    icon: "😢",
    winner: {
      teamName: "De Paul Fiction",
      ownerName: "Riccardo Pecorini",
      value: "Sconfitta in finale contro Barchillona"
    },
    category: "gold",
    unlocked: true
  },
  
  // Trofei d'Argento
  {
    id: "miglior-attacco",
    title: "Capocannoniere",
    description: "Squadra con più gol segnati",
    icon: "⚽",
    category: "silver",
    unlocked: true,
    winner: {
      teamName: "Brunori Sassuolo",
      ownerName: "Leonardo Miresse",
      value: "94 gol segnati"
    }
  },
  {
    id: "miglior-difesa",
    title: "Muro Invalicabile",
    description: "Squadra con meno gol subiti",
    icon: "🛡️",
    category: "silver",
    unlocked: true,
    winner: {
      teamName: "Sambuca Juniors",
      ownerName: "Jacopo Vannucchi",
      value: "52 gol subiti"
    }
  },
  {
    id: "re-mercato",
    title: "Re del Mercato",
    description: "Miglior gestione del mercato",
    icon: "💼", 
    category: "silver",
    unlocked: false,
    winner: {
      teamName: "Barchillona",
      ownerName: "Giuseppe Capocotta",
      value: "Acquisti chiave come Vlahovic, Kvaratskhelia e Malen"
    }
  },

  // Trofei di Bronzo
  {
    id: "serie-vincente",
    title: "Striscia Vincente",
    description: "Più vittorie consecutive",
    icon: "🔥",
    category: "bronze",
    unlocked: true,
    winner: {
      teamName: "Brunori Sassuolo",
      ownerName: "Leonardo Miresse",
      value: "14 vittorie consecutive"
    }
  },

  {
    id: "goleada",
    title: "Goleada",
    description: "Vittoria con più scarto",
    icon: "💥",
    category: "bronze",
    unlocked: true,
    winner: {
      teamName: "Brunori Sassuolo, Barchillona e Club D. Regatas Mugiwara",
      ownerName: "Leonardo Miresse, Giuseppe Capocotta e Duccio Gabbiai",
      value: "Vittoria 7-1 rispettivamente contro Lecrerkusen, One Pisa e Barchillona"
    }
  },

  // Trofei Speciali (divertenti/imbarazzanti)
  {
    id: "bidone-oro",
    title: "Bidone d'Oro",
    description: "Acquisto più costoso e deludente",
    icon: "🗑️",
    category: "special",
    unlocked: true,
    winner: {
      teamName: "Sambuca Juniors",
      ownerName: "Jacopo Vannucchi",
      value: "Acquisto di E.Ferguson a 171 crediti, che ha segnato solo 3 gol e 2 assist in tutta la stagione"
    }
  },

  {
    id: "peggior-difesa",
    title: "Difesa di Carta",
    description: "Squadra con più gol subiti",
    icon: "📉",
    category: "special",
    unlocked: true,
    winner: {
      teamName: "Godo Glimt",
      ownerName: "Matteo Speciale",
      value: "80 gol subiti"
    }
  },

  {
    id: "peggior-attacco",
    title: "Attacco Inesistente",
    description: "Squadra con meno gol segnati",
    icon: "🚫",
    category: "special",
    unlocked: true,
    winner: {
      teamName: "Krusty Krak Klub",
      ownerName: "Lorenzo Tucci",
      value: "19 gol segnati"
    }
  },

  {
    id: "rigori-sbagliati",
    title: "Rigori Sbagliati",
    description: "Maggior numero di rigori sbagliati",
    icon: "⚽❌",
    category: "special",
    unlocked: true,
    winner: {
      teamName: "De Paul Fiction",
      ownerName: "Riccardo Pecorini",
      value: "3 rigori sbagliati da Dybala, Malen e Calhanoglu"
    }
  },

  {
    id: "rosso-facile",
    title: "Cartellino Facile",
    description: "Più espulsioni in stagione",
    icon: "🟥",
    category: "special",
    unlocked: true,
    winner: {
      teamName: "Chiattillos FC",
      ownerName: "Fabio Doria",
      value: "6 espulsioni di giocatori chiave durante la stagione: Toure, Wesley (2), Kabasele, Ilkhan e Jesus Rodriguez"
    }
  },
];
