
import fs from 'fs';
import path from 'path';

const kafkatrace = 'kafkatrace';

describe('NPM Package Installation Test', () => {
  it(`should have installed ${kafkatrace} as a regular dependency`, () => {
    const packagePath = path.join('node_modules', kafkatrace);
    const packageExists = fs.existsSync(packagePath);

    expect(packageExists).toBe(true);
  });
});