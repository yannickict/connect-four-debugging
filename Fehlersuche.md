# Fehlersuche Diagonaler Gewinner
## Debugging Vorgehen
Ich habe zuerst in `board.ts` nach der Methode `diagonalWinner()` gesucht, da sie für die Erkennung diagonaler Gewinne zuständig ist. Anschließend habe ich mir die Methode `getDiagonals()` genauer angesehen, weil der Fehler vermutlich in der Berechnung bzw. Auswahl der Diagonalen liegt.

Zur Fehlersuche habe ich das Programm im Debugger gestartet und den Ablauf Schritt für Schritt verfolgt. Dabei habe ich gezielt darauf geachtet, an welcher Stelle die Logik von der erwarteten Funktion abweicht oder falsche Werte verarbeitet werden. Den entsprechenden Codeabschnitt habe ich dann detailliert analysiert und sowohl im Debugger als auch gedanklich nachvollzogen, bis klar war, wo genau der Fehler entsteht.
