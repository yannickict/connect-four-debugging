import { assertEquals } from "@std/assert";
import { Board, Player } from "./board.ts";

Deno.test("dummy", () => {
  const board = new Board();
  const winner = board.winner(Player.PlayerX, 1, 1);
  assertEquals(winner, Player.Nobody);
});

Deno.test("diagonal winner - falling diagonal", () => {
  const board = new Board();
  
  // Stelle folgende Konstellation her (Falling Diagonal von links-oben nach rechts-unten):
  // 0 1 2 3 4 5 6
  // _ _ _ _ _ _ _
  // _ _ _ x _ _ _
  // _ _ x o _ _ _
  // _ x o o _ _ _
  // x o o o _ _ _
  // o o o o _ _ _
  
  // Spalte 0: unterste Position x
  board.makeMove(Player.PlayerO, 0); // row 5
  board.makeMove(Player.PlayerX, 0); // row 4 - X an (4,0)
  
  // Spalte 1: zwei O, dann X
  board.makeMove(Player.PlayerO, 1); // row 5
  board.makeMove(Player.PlayerO, 1); // row 4
  board.makeMove(Player.PlayerX, 1); // row 3 - X an (3,1)
  
  // Spalte 2: drei O, dann X
  board.makeMove(Player.PlayerO, 2); // row 5
  board.makeMove(Player.PlayerO, 2); // row 4
  board.makeMove(Player.PlayerO, 2); // row 3
  board.makeMove(Player.PlayerX, 2); // row 2 - X an (2,2)
  
  // Spalte 3: vier O, dann X
  board.makeMove(Player.PlayerO, 3); // row 5
  board.makeMove(Player.PlayerO, 3); // row 4
  board.makeMove(Player.PlayerO, 3); // row 3
  board.makeMove(Player.PlayerO, 3); // row 2
  const row = board.makeMove(Player.PlayerX, 3); // row 1 - X an (1,3)
  
  // Jetzt sollte X gewinnen (Diagonale: (4,0) -> (3,1) -> (2,2) -> (1,3))
  const winner = board.winner(Player.PlayerX, row, 3);
  assertEquals(winner, Player.PlayerX);
});
