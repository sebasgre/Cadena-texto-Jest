class Crossword {
    constructor(grid, clues) {
        this.grid = grid;
        this.clues = clues;
    }

    displayGrid() {
        for (const row of this.grid) {
            console.log(row.join(' '));
        }
    }

    displayClues() {
        this.clues.forEach((clue, index) => {
            console.log(`Clue ${index + 1}: ${clue}`);
        });
    }
}

const crosswordGrid = [
    ['C', 'R', 'O', 'S', 'S', 'W', 'O', 'R', 'D'],
    ['A', 'P', 'P', 'L', 'E', 'J', 'S', 'A', 'V'],
    ['V', 'I', 'N', 'E', 'G', 'A', 'R', 'L', 'N'],
    ['I', 'N', 'S', 'E', 'C', 'T', 'O', 'R', 'N'],
    ['R', 'E', 'A', 'C', 'T', 'R', 'U', 'E', 'L'],
];

const crosswordClues = [
    'Un lenguaje de programación popular para la web.',
    'Un popular sistema operativo móvil.',
    'Un lenguaje de marcado para crear páginas web.',
    'Una herramienta para el manejo de dependencias en JavaScript.',
    'Un popular marco de trabajo para construir aplicaciones web interactivas.',
];

const crossword = new Crossword(crosswordGrid, crosswordClues);

console.log('Crucigrama:');
crossword.displayGrid();

console.log('\nClaves:');
crossword.displayClues();

module.exports = Crossword;
