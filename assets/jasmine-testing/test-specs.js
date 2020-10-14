/* jasmine testing */

/* theme button tests */ 
describe("Game", function() {
    describe("winter test", function() {
        it("should set winter theme", function() {
            switchWinter();
            expect(localTheme).toBe("winter");
        });
    });
});


describe("Game", function() {
    describe("galaxy test", function() {
        it("should set galaxy theme", function() {
            switchGalaxy();
            expect(localTheme).toBe("galaxy");
        });
    });
});


describe("Game", function() {
    describe("summer test", function() {
        it("should set summer theme", function() {
            switchSummer();
            expect(localTheme).toBe("summer");
        });
    });
});


/* score test */
describe("Game", function() {
    describe("score test", function() {
        it("should show 0", function() {
            resetGame();
            expect(score).toBe(0);
        });
    });
});


