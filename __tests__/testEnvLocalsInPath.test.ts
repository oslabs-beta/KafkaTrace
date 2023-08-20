import * as fs from 'fs';
import * as path from 'path';

describe('Check for .env.local file', () => {
  it('should find .env.local in parent directory', () => {
    const parentDirectory = path.resolve(__dirname, '..'); // Go up one level to parent directory
    const envLocalPath = path.join(parentDirectory, '.env.local');

    // Check if the env.locals file exists
    const exists = fs.existsSync(envLocalPath);

    // Perform Jest assertion
    expect(exists).toBe(true);
  });
});




