class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        const isSubBoxValid = (i,j) => {
            for (let row = i; row < i+ 3; row++) {
                for (let col = j; col < j + 3; col++) {
                    const num = board[row][col]

                    if (num == ".") continue
                    
                    const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

                     if (rows[row].has(num) || cols[col].has(num) || boxes[box].has(num)) return false;

                    rows[row].add(num);
                    cols[col].add(num);
                    boxes[box].add(num);
                }
            }

            return true
        }


        for (let i = 0; i < 9; i += 3){
            for (let j = 0; j < 9; j += 3) {
                if (!isSubBoxValid(i,j)) return false
            }
        }

        return true
    }
}
