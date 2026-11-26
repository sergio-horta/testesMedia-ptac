import { describe, test, expect } from 'vitest';
import { media } from '../src/media.js';

describe("media", () => {
    test("média de [1, 2, 3] é 2", () => {
        expect(media([1, 2, 3])).toBe(2);
    });

    test("array vazio lança erro", () => {
        expect(() => media([])).toThrow("Não é possível calcular a média de um array vazio");
    });
});