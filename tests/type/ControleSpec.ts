import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import Controler from '../../src/type/Controler.js';

describe('Controler', () => {
    it('controle empty object', () => {
        assert.throws(() => Controler.isValidResume({}), {
            message: `JSON invalide: ✖ Invalid input: expected object, received undefined
  → at labels
✖ Invalid input: expected object, received undefined
  → at basics
✖ Invalid input: expected array, received undefined
  → at work
✖ Invalid input: expected array, received undefined
  → at education
✖ Invalid input: expected array, received undefined
  → at skills
✖ Invalid input: expected array, received undefined
  → at languages
✖ Invalid input: expected array, received undefined
  → at interests`,
            name: 'Error'
        });
    });
});
