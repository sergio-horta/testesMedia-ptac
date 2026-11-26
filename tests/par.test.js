import { describe, test, expect } from 'vitest';
import { par } from '../src/par.js';

describe("par", () => {
    test("2 é par", () => {
        expect(par(2)).toBe(true);
    });

    test("3 não é par", () => {
        expect(par(3)).toBe(false);
    });

    test("0 é par (boundary)", () => {
        expect(par(0)).toBe(true);
    });
});