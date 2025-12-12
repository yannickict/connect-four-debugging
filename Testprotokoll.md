# Testprotokoll

## Fehler 1: Programmabsturz bei ungültiger Eingabe

### Beschreibung
Das Programm stürzt ab, sobald der Spieler eine ungültige Eingabe macht (z. B. einen Buchstaben statt einer Zahl).
Die Benutzereingabe wird nicht überprüft oder validiert.

### Eingabe
1. Spiel starten: `deno run main.ts`
2. Spalte `x` eingeben

### Spielbrett zum Zeitpunkt des Absturzes
0 1 2 3 4 5 6

Player x: x

yaml
Copy code

---

## Fehler 2: Programmabsturz bei voller Spalte

### Beschreibung
Das Programm stürzt ab, wenn eine Spalte vollständig gefüllt ist und der Spieler versucht,
einen weiteren Stein in diese Spalte einzuwerfen.

### Eingabe
1. Spiel starten: `deno run main.ts`
2. Siebenmal hintereinander Spalte `3` eingeben

### Spielbrett nach 6 Eingaben (kurz vor dem Absturz)
0 1 2 3 4 5 6
_ _ _ x _ _ _
_ _ _ o _ _ _
_ _ _ x _ _ _
_ _ _ o _ _ _
_ _ _ x _ _ _
_ _ _ o _ _ _

yaml
Copy code

---

## Fehler 3: Fehlerhafte Berechnung eines diagonalen Gewinners

### Beschreibung
- Diagonale Siege werden nicht korrekt erkannt
- Statt der tatsächlichen Diagonalen werden Werte der Hauptdiagonale des Spielfelds verwendet

### Beispiel
Beim Versuch, einen diagonalen Gewinn (vier Steine in einer Diagonale) zu erzielen,
überprüft das Programm die falschen Felder. Dadurch wird der Gewinn entweder falsch erkannt
oder gar nicht erkannt.

### Eingabe
1. Spiel starten: `deno run main.ts`
2. Eingabereihenfolge:  
   `0, 0, 0, 0, 1, 1, 2, 1, 6, 3, 6, 2`

### Spielbrett
0 1 2 3 4 5 6

o _ _ _ _ _ _
x o _ _ _ _ _
o o o _ _ _ x
x x x o _ _ x

Copy code
