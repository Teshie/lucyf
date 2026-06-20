import boards from "../data/board.json";

type Cell = number | "FREE";
type BoardGrid = Cell[][];

function cellToInt(cell: Cell): number {
  if (cell === "FREE") return 0;
  return cell;
}

function lineMatched(nums: number[], calledSet: Set<number>): boolean {
  for (const n of nums) {
    if (n === 0) continue;
    if (!calledSet.has(n)) return false;
  }
  return true;
}

/** Mirrors server checkBingo in back/ws.go */
export function checkBoardBingo(boardNumber: number, called: number[]): boolean {
  if (boardNumber <= 0) return false;
  const board = (boards as BoardGrid[])[boardNumber - 1];
  if (!board) return false;

  const calledSet = new Set(called);
  const b = board.map((row) => row.map(cellToInt));

  for (let r = 0; r < 5; r++) {
    const line = [b[r][0], b[r][1], b[r][2], b[r][3], b[r][4]];
    if (lineMatched(line, calledSet)) return true;
  }
  for (let c = 0; c < 5; c++) {
    const line = [b[0][c], b[1][c], b[2][c], b[3][c], b[4][c]];
    if (lineMatched(line, calledSet)) return true;
  }
  const diag = [b[0][0], b[1][1], b[2][2], b[3][3], b[4][4]];
  if (lineMatched(diag, calledSet)) return true;
  const adiag = [b[0][4], b[1][3], b[2][2], b[3][1], b[4][0]];
  if (lineMatched(adiag, calledSet)) return true;
  const corners = [b[0][0], b[0][4], b[4][0], b[4][4]];
  if (lineMatched(corners, calledSet)) return true;
  return false;
}

export function hasAnyBingo(
  boardNumbers: (number | null | undefined)[],
  called: number[]
): boolean {
  return boardNumbers.some(
    (bno) => bno != null && bno > 0 && checkBoardBingo(bno, called)
  );
}
