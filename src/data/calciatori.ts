type Ruolo = "P" | "D" | "C" | "A";

export interface Calciatore {
  calciatore: string;
  ruolo: Ruolo;
  squadra: string;
  teamId: string; // ID della squadra del fantacalcio
  qAcq: number;
}

export const Sambuca: Calciatore[] = [
  { calciatore: "Carnesecchi", ruolo: "P", squadra: "Atalanta", teamId: "sambuca-juniors", qAcq: 21 },
  { calciatore: "Rossi F.", ruolo: "P", squadra: "Atalanta", teamId: "sambuca-juniors", qAcq: 1 },
  { calciatore: "Sportiello", ruolo: "P", squadra: "Atalanta", teamId: "sambuca-juniors", qAcq: 1 },
  { calciatore: "Angelino", ruolo: "D", squadra: "Roma", teamId: "sambuca-juniors", qAcq: 30 },
  { calciatore: "Bertola", ruolo: "D", squadra: "Udinese", teamId: "sambuca-juniors", qAcq: 1 },
  { calciatore: "Cambiaso", ruolo: "D", squadra: "Juventus", teamId: "sambuca-juniors", qAcq: 35 },
  { calciatore: "Frese", ruolo: "D", squadra: "Verona", teamId: "sambuca-juniors", qAcq: 4 },
  { calciatore: "Joao Mario", ruolo: "D", squadra: "Juventus", teamId: "sambuca-juniors", qAcq: 4 },
  { calciatore: "Lykogiannis", ruolo: "D", squadra: "Bologna", teamId: "sambuca-juniors", qAcq: 10 },
  { calciatore: "Ostigard", ruolo: "D", squadra: "Genoa", teamId: "sambuca-juniors", qAcq: 5 },
  { calciatore: "Valle", ruolo: "D", squadra: "Como", teamId: "sambuca-juniors", qAcq: 7 },
  { calciatore: "Bernede", ruolo: "C", squadra: "Verona", teamId: "sambuca-juniors", qAcq: 3 },
  { calciatore: "Carboni V.", ruolo: "C", squadra: "Genoa", teamId: "sambuca-juniors", qAcq: 34 },
  { calciatore: "Deiola", ruolo: "C", squadra: "Cagliari", teamId: "sambuca-juniors", qAcq: 1 },
  { calciatore: "Gudmundsson A.", ruolo: "C", squadra: "Fiorentina", teamId: "sambuca-juniors", qAcq: 50 },
  { calciatore: "Maldini", ruolo: "C", squadra: "Atalanta", teamId: "sambuca-juniors", qAcq: 16 },
  { calciatore: "Sorensen O.", ruolo: "C", squadra: "Parma", teamId: "sambuca-juniors", qAcq: 2 },
  { calciatore: "Sucic P.", ruolo: "C", squadra: "Inter", teamId: "sambuca-juniors", qAcq: 33 },
  { calciatore: "Zhegrova", ruolo: "C", squadra: "Juventus", teamId: "sambuca-juniors", qAcq: 35 },
  { calciatore: "Berardi", ruolo: "A", squadra: "Sassuolo", teamId: "sambuca-juniors", qAcq: 43 },
  { calciatore: "Bonny", ruolo: "A", squadra: "Inter", teamId: "sambuca-juniors", qAcq: 8 },
  { calciatore: "Dovbyk", ruolo: "A", squadra: "Roma", teamId: "sambuca-juniors", qAcq: 1 },
  { calciatore: "Ferguson E.", ruolo: "A", squadra: "Roma", teamId: "sambuca-juniors", qAcq: 171 },
  { calciatore: "Sanabria", ruolo: "A", squadra: "Cremonese", teamId: "sambuca-juniors", qAcq: 17 }
];

export const Krusty_krak: Calciatore[] = [
  { calciatore: "Montipò", ruolo: "P", squadra: "Verona", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Perilli", ruolo: "P", squadra: "Verona", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Toniolo", ruolo: "P", squadra: "Verona", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Ceccherini", ruolo: "D", squadra: "Cremonese", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Gigot", ruolo: "D", squadra: "Lazio", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Goglichidze", ruolo: "D", squadra: "Udinese", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Kouassi", ruolo: "D", squadra: "Lecce", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Marianucci", ruolo: "D", squadra: "Napoli", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Pedersen", ruolo: "D", squadra: "Torino", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Sabelli", ruolo: "D", squadra: "Genoa", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Zè Pedro", ruolo: "D", squadra: "Cagliari", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Belahyane", ruolo: "C", squadra: "Lazio", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Diouf", ruolo: "C", squadra: "Inter", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Helgason", ruolo: "C", squadra: "Lecce", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Lorran", ruolo: "C", squadra: "Pisa", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Ondrejka", ruolo: "C", squadra: "Parma", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Ordonez C.", ruolo: "C", squadra: "Parma", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Pisilli", ruolo: "C", squadra: "Roma", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Suslov", ruolo: "C", squadra: "Verona", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Arena A.", ruolo: "A", squadra: "Roma", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Benedyczak", ruolo: "A", squadra: "Parma", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Borrelli", ruolo: "A", squadra: "Cagliari", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Dominguez B.", ruolo: "A", squadra: "Bologna", teamId: "krusty-krab-klub", qAcq: 1 },
  { calciatore: "Pierini", ruolo: "A", squadra: "Sassuolo", teamId: "krusty-krab-klub", qAcq: 1 }
];

export const chiattilos: Calciatore[] = [
  { calciatore: "Israel", ruolo: "P", squadra: "Torino", teamId: "chiattilos", qAcq: 15 },
  { calciatore: "Paleari", ruolo: "P", squadra: "Torino", teamId: "chiattilos", qAcq: 1 },
  { calciatore: "Popa", ruolo: "P", squadra: "Torino", teamId: "chiattilos", qAcq: 1 },
  { calciatore: "Candè", ruolo: "D", squadra: "Sassuolo", teamId: "chiattilos", qAcq: 1 },
  { calciatore: "Casale", ruolo: "D", squadra: "Bologna", teamId: "chiattilos", qAcq: 1 },
  { calciatore: "Gabbia", ruolo: "D", squadra: "Milan", teamId: "chiattilos", qAcq: 13 },
  { calciatore: "Gutierrez", ruolo: "D", squadra: "Napoli", teamId: "chiattilos", qAcq: 6 },
  { calciatore: "Ismajli", ruolo: "D", squadra: "Torino", teamId: "chiattilos", qAcq: 13 },
  { calciatore: "Lucumì", ruolo: "D", squadra: "Bologna", teamId: "chiattilos", qAcq: 15 },
  { calciatore: "Viti", ruolo: "D", squadra: "Fiorentina", teamId: "chiattilos", qAcq: 2 },
  { calciatore: "Wesley", ruolo: "D", squadra: "Roma", teamId: "chiattilos", qAcq: 24 },
  { calciatore: "Brescianini", ruolo: "C", squadra: "Atalanta", teamId: "chiattilos", qAcq: 3 },
  { calciatore: "Harroui", ruolo: "C", squadra: "Verona", teamId: "chiattilos", qAcq: 2 },
  { calciatore: "Ramadani", ruolo: "C", squadra: "Lecce", teamId: "chiattilos", qAcq: 6 },
  { calciatore: "Rowe", ruolo: "C", squadra: "Bologna", teamId: "chiattilos", qAcq: 27 },
  { calciatore: "Serdar", ruolo: "C", squadra: "Verona", teamId: "chiattilos", qAcq: 7 },
  { calciatore: "Tourè I.", ruolo: "C", squadra: "Pisa", teamId: "chiattilos", qAcq: 18 },
  { calciatore: "Vlasic", ruolo: "C", squadra: "Torino", teamId: "chiattilos", qAcq: 30 },
  { calciatore: "Vranckx", ruolo: "C", squadra: "Sassuolo", teamId: "chiattilos", qAcq: 1 },
  { calciatore: "Almqvist", ruolo: "A", squadra: "Parma", teamId: "chiattilos", qAcq: 1 },
  { calciatore: "Camarda", ruolo: "A", squadra: "Lecce", teamId: "chiattilos", qAcq: 5 },
  { calciatore: "Lang", ruolo: "A", squadra: "Napoli", teamId: "chiattilos", qAcq: 13 },
  { calciatore: "Rodriguez Je.", ruolo: "A", squadra: "Como", teamId: "chiattilos", qAcq: 17 },
  { calciatore: "Soulè", ruolo: "A", squadra: "Roma", teamId: "chiattilos", qAcq: 66 }
];