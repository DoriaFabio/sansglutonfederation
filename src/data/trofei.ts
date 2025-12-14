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
    unlocked: false
  },
  {
    id: "campione-coppa",
    title: "Re della Coppa",
    description: "Squadra vincitrice della Coppa",
    icon: "👑",
    category: "gold",
    unlocked: false
  },
  
  // Trofei d'Argento
  {
    id: "miglior-attacco",
    title: "Capocannoniere",
    description: "Squadra con più gol segnati",
    icon: "⚽",
    category: "silver",
    unlocked: false
  },
  {
    id: "miglior-difesa",
    title: "Muro Invalicabile",
    description: "Squadra con meno gol subiti",
    icon: "🛡️",
    category: "silver",
    unlocked: false
  },

  // Trofei di Bronzo
  {
    id: "serie-vincente",
    title: "Striscia Vincente",
    description: "Più vittorie consecutive",
    icon: "🔥",
    category: "bronze",
    unlocked: false
  },

  {
    id: "goleada",
    title: "Goleada",
    description: "Vittoria con più scarto",
    icon: "💥",
    category: "bronze",
    unlocked: false
  },

  // Trofei Speciali (divertenti/imbarazzanti)
  {
    id: "bidone-oro",
    title: "Bidone d'Oro",
    description: "Acquisto più costoso e deludente",
    icon: "🗑️",
    category: "special",
    unlocked: false
  },

  {
    id: "peggior-difesa",
    title: "Difesa di Carta",
    description: "Squadra con più gol subiti",
    icon: "📉",
    category: "special",
    unlocked: false
  },

  {
    id: "peggior-attacco",
    title: "Attacco Inesistente",
    description: "Squadra con meno gol segnati",
    icon: "🚫",
    category: "special",
    unlocked: false
  },

  {
    id: "rigori-sbagliati",
    title: "Rigori Sbagliati",
    description: "Maggior numero di rigori sbagliati",
    icon: "⚽❌",
    category: "special",
    unlocked: false
  },

  {
    id: "rosso-facile",
    title: "Cartellino Facile",
    description: "Più espulsioni in stagione",
    icon: "🟥",
    category: "special",
    unlocked: false
  }
];
