const Crossword = require("./crossword");
describe("Crossword", () => {
    const crosswordGrid = [
        ['C', 'R', 'O', 'S', 'S', 'W', 'O', 'R', 'D'],
        ['A', 'P', 'P', 'L', 'E', 'J', 'S', 'A', 'V'],
        ['V', 'I', 'N', 'E', 'G', 'A', 'R', 'L', 'N'],
        ['I', 'N', 'S', 'E', 'C', 'T', 'O', 'R', 'N'],
        ['R', 'E', 'A', 'T', 'R', 'U', 'E', 'L'],
    ];

    const crosswordClues = [
        'Un lenguaje de programación popular para la web.',
        'Un popular sistema operativo móvil.',
        'Un lenguaje de marcado para crear páginas web.',
        'Una herramienta para el manejo de dependencias en JavaScript.',
        'Un popular marco de trabajo para construir aplicaciones web interactivas.',
    ];

    let crossword;

    beforeEach(() => {
        crossword = new Crossword(crosswordGrid, crosswordClues);
    });


    it("should display the grid correctly", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
        crossword.displayGrid();
        expect(consoleSpy).toHaveBeenCalledWith("C R O S S W O R D");
        expect(consoleSpy).toHaveBeenCalledWith("A P P L E J S A V");
        expect(consoleSpy).toHaveBeenCalledWith("V I N E G A R L N");
        expect(consoleSpy).toHaveBeenCalledWith("I N S E C T O R N");
        expect(consoleSpy).toHaveBeenCalledWith("R E A T R U E L");
        consoleSpy.mockRestore();
    });

    it("should display the clues correctly", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => { });
        crossword.displayClues();
        crosswordClues.forEach((clue, index) => {
            expect(consoleSpy).toHaveBeenCalledWith(`Clue ${index + 1}: ${clue}`);
        });
        consoleSpy.mockRestore();
    });
});
