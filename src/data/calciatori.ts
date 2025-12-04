type Ruolo = "P" | "D" | "C" | "A";

export interface Calciatore {
  calciatore: string;
  ruolo: Ruolo;
  fvmp: number;
  squadra: string;
  teamId: string; // ID della squadra del fantacalcio
  qAcq: number;
  qAtt: number;
}

export const Sambuca: Calciatore[] = [
  { calciatore: "Carnesecchi", ruolo: "P", fvmp: 30, squadra: "Atalanta", teamId: "sambuca-juniors", qAcq: 21, qAtt: 16 },
  { calciatore: "Rossi F.", ruolo: "P", fvmp: 1, squadra: "Atalanta", teamId: "sambuca-juniors", qAcq: 1, qAtt: 1 },
  { calciatore: "Sportiello", ruolo: "P", fvmp: 1, squadra: "Atalanta", teamId: "sambuca-juniors", qAcq: 1, qAtt: 1 },
  { calciatore: "Angelino", ruolo: "D", fvmp: 8, squadra: "Roma", teamId: "sambuca-juniors", qAcq: 30, qAtt: 7 },
  { calciatore: "Bertola", ruolo: "D", fvmp: 5, squadra: "Udinese", teamId: "sambuca-juniors", qAcq: 1, qAtt: 6 },
  { calciatore: "Cambiaso", ruolo: "D", fvmp: 16, squadra: "Juventus", teamId: "sambuca-juniors", qAcq: 35, qAtt: 11 },
  { calciatore: "Frese", ruolo: "D", fvmp: 5, squadra: "Verona", teamId: "sambuca-juniors", qAcq: 4, qAtt: 4 },
  { calciatore: "Joao Mario", ruolo: "D", fvmp: 5, squadra: "Juventus", teamId: "sambuca-juniors", qAcq: 4, qAtt: 3 },
  { calciatore: "Lykogiannis", ruolo: "D", fvmp: 6, squadra: "Bologna", teamId: "sambuca-juniors", qAcq: 10, qAtt: 3 },
  { calciatore: "Ostigard", ruolo: "D", fvmp: 17, squadra: "Genoa", teamId: "sambuca-juniors", qAcq: 5, qAtt: 12 },
  { calciatore: "Valle", ruolo: "D", fvmp: 7, squadra: "Como", teamId: "sambuca-juniors", qAcq: 7, qAtt: 10 },
  { calciatore: "Bernede", ruolo: "C", fvmp: 5, squadra: "Verona", teamId: "sambuca-juniors", qAcq: 3, qAtt: 5 },
  { calciatore: "Carboni V.", ruolo: "C", fvmp: 7, squadra: "Genoa", teamId: "sambuca-juniors", qAcq: 34, qAtt: 5 },
  { calciatore: "Deiola", ruolo: "C", fvmp: 7, squadra: "Cagliari", teamId: "sambuca-juniors", qAcq: 1, qAtt: 6 },
  { calciatore: "Gudmundsson A.", ruolo: "C", fvmp: 23, squadra: "Fiorentina", teamId: "sambuca-juniors", qAcq: 50, qAtt: 16 },
  { calciatore: "Maldini", ruolo: "C", fvmp: 7, squadra: "Atalanta", teamId: "sambuca-juniors", qAcq: 16, qAtt: 3 },
  { calciatore: "Sorensen O.", ruolo: "C", fvmp: 6, squadra: "Parma", teamId: "sambuca-juniors", qAcq: 2, qAtt: 5 },
  { calciatore: "Sucic P.", ruolo: "C", fvmp: 12, squadra: "Inter", teamId: "sambuca-juniors", qAcq: 33, qAtt: 14 },
  { calciatore: "Zhegrova", ruolo: "C", fvmp: 6, squadra: "Juventus", teamId: "sambuca-juniors", qAcq: 35, qAtt: 12 },
  { calciatore: "Berardi", ruolo: "A", fvmp: 60, squadra: "Sassuolo", teamId: "sambuca-juniors", qAcq: 43, qAtt: 25 },
  { calciatore: "Bonny", ruolo: "A", fvmp: 28, squadra: "Inter", teamId: "sambuca-juniors", qAcq: 8, qAtt: 16 },
  { calciatore: "Dovbyk", ruolo: "A", fvmp: 26, squadra: "Roma", teamId: "sambuca-juniors", qAcq: 1, qAtt: 18 },
  { calciatore: "Ferguson E.", ruolo: "A", fvmp: 16, squadra: "Roma", teamId: "sambuca-juniors", qAcq: 171, qAtt: 14 },
  { calciatore: "Sanabria", ruolo: "A", fvmp: 5, squadra: "Cremonese", teamId: "sambuca-juniors", qAcq: 17, qAtt: 5 }
];

export const Krusty_krak: Calciatore[] = [
  { calciatore: "Montipò", ruolo: "P", fvmp: 7, squadra: "Verona", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 12 },
  { calciatore: "Perilli", ruolo: "P", fvmp: 1, squadra: "Verona", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 1 },
  { calciatore: "Toniolo", ruolo: "P", fvmp: 1, squadra: "Verona", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 1 },
  { calciatore: "Ceccherini", ruolo: "D", fvmp: 4, squadra: "Cremonese", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 1 },
  { calciatore: "Gigot", ruolo: "D", fvmp: 2, squadra: "Lazio", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 1 },
  { calciatore: "Goglichidze", ruolo: "D", fvmp: 5, squadra: "Udinese", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 4 },
  { calciatore: "Kouassi", ruolo: "D", fvmp: 3, squadra: "Lecce", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 2 },
  { calciatore: "Marianucci", ruolo: "D", fvmp: 3, squadra: "Napoli", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 1 },
  { calciatore: "Pedersen", ruolo: "D", fvmp: 6, squadra: "Torino", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 5 },
  { calciatore: "Sabelli", ruolo: "D", fvmp: 5, squadra: "Genoa", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 2 },
  { calciatore: "Zè Pedro", ruolo: "D", fvmp: 4, squadra: "Cagliari", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 2 },
  { calciatore: "Belahyane", ruolo: "C", fvmp: 4, squadra: "Lazio", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 2 },
  { calciatore: "Diouf", ruolo: "C", fvmp: 5, squadra: "Inter", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 3 },
  { calciatore: "Helgason", ruolo: "C", fvmp: 4, squadra: "Lecce", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 3 },
  { calciatore: "Lorran", ruolo: "C", fvmp: 7, squadra: "Pisa", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 6 },
  { calciatore: "Ondrejka", ruolo: "C", fvmp: 9, squadra: "Parma", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 5 },
  { calciatore: "Ordonez C.", ruolo: "C", fvmp: 5, squadra: "Parma", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 2 },
  { calciatore: "Pisilli", ruolo: "C", fvmp: 8, squadra: "Roma", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 3 },
  { calciatore: "Suslov", ruolo: "C", fvmp: 7, squadra: "Verona", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 3 },
  { calciatore: "Arena A.", ruolo: "A", fvmp: 1, squadra: "Roma", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 1 },
  { calciatore: "Benedyczak", ruolo: "A", fvmp: 5, squadra: "Parma", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 6 },
  { calciatore: "Borrelli", ruolo: "A", fvmp: 16, squadra: "Cagliari", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 12 },
  { calciatore: "Dominguez B.", ruolo: "A", fvmp: 7, squadra: "Bologna", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 6 },
  { calciatore: "Pierini", ruolo: "A", fvmp: 4, squadra: "Sassuolo", teamId: "krusty-krab-klub", qAcq: 1, qAtt: 2 }
];

export const chiattilos: Calciatore[] = [
  { calciatore: "Israel", ruolo: "P", fvmp: 5, squadra: "Torino", teamId: "chiattilos", qAcq: 15, qAtt: 4 },
  { calciatore: "Paleari", ruolo: "P", fvmp: 5, squadra: "Torino", teamId: "chiattilos", qAcq: 1, qAtt: 6 },
  { calciatore: "Popa", ruolo: "P", fvmp: 1, squadra: "Torino", teamId: "chiattilos", qAcq: 1, qAtt: 1 },
  { calciatore: "Candè", ruolo: "D", fvmp: 4, squadra: "Sassuolo", teamId: "chiattilos", qAcq: 1, qAtt: 4 },
  { calciatore: "Casale", ruolo: "D", fvmp: 4, squadra: "Bologna", teamId: "chiattilos", qAcq: 1, qAtt: 2 },
  { calciatore: "Gabbia", ruolo: "D", fvmp: 9, squadra: "Milan", teamId: "chiattilos", qAcq: 13, qAtt: 9 },
  { calciatore: "Gutierrez", ruolo: "D", fvmp: 5, squadra: "Napoli", teamId: "chiattilos", qAcq: 6, qAtt: 4 },
  { calciatore: "Ismajli", ruolo: "D", fvmp: 6, squadra: "Torino", teamId: "chiattilos", qAcq: 13, qAtt: 6 },
  { calciatore: "Lucumì", ruolo: "D", fvmp: 7, squadra: "Bologna", teamId: "chiattilos", qAcq: 15, qAtt: 8 },
  { calciatore: "Viti", ruolo: "D", fvmp: 4, squadra: "Fiorentina", teamId: "chiattilos", qAcq: 2, qAtt: 2 },
  { calciatore: "Wesley", ruolo: "D", fvmp: 22, squadra: "Roma", teamId: "chiattilos", qAcq: 24, qAtt: 13 },
  { calciatore: "Brescianini", ruolo: "C", fvmp: 8, squadra: "Atalanta", teamId: "chiattilos", qAcq: 3, qAtt: 8 },
  { calciatore: "Harroui", ruolo: "C", fvmp: 7, squadra: "Verona", teamId: "chiattilos", qAcq: 2, qAtt: 3 },
  { calciatore: "Ramadani", ruolo: "C", fvmp: 6, squadra: "Lecce", teamId: "chiattilos", qAcq: 6, qAtt: 6 },
  { calciatore: "Rowe", ruolo: "C", fvmp: 10, squadra: "Bologna", teamId: "chiattilos", qAcq: 27, qAtt: 9 },
  { calciatore: "Serdar", ruolo: "C", fvmp: 9, squadra: "Verona", teamId: "chiattilos", qAcq: 7, qAtt: 12 },
  { calciatore: "Tourè I.", ruolo: "C", fvmp: 12, squadra: "Pisa", teamId: "chiattilos", qAcq: 18, qAtt: 11 },
  { calciatore: "Vlasic", ruolo: "C", fvmp: 16, squadra: "Torino", teamId: "chiattilos", qAcq: 30, qAtt: 11 },
  { calciatore: "Vranckx", ruolo: "C", fvmp: 5, squadra: "Sassuolo", teamId: "chiattilos", qAcq: 1, qAtt: 4 },
  { calciatore: "Almqvist", ruolo: "A", fvmp: 5, squadra: "Parma", teamId: "chiattilos", qAcq: 1, qAtt: 4 },
  { calciatore: "Camarda", ruolo: "A", fvmp: 7, squadra: "Lecce", teamId: "chiattilos", qAcq: 5, qAtt: 8 },
  { calciatore: "Lang", ruolo: "A", fvmp: 13, squadra: "Napoli", teamId: "chiattilos", qAcq: 13, qAtt: 13 },
  { calciatore: "Rodriguez Je.", ruolo: "A", fvmp: 12, squadra: "Como", teamId: "chiattilos", qAcq: 17, qAtt: 8 },
  { calciatore: "Soulè", ruolo: "A", fvmp: 79, squadra: "Roma", teamId: "chiattilos", qAcq: 66, qAtt: 26 }
];