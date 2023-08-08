import { strictEqual } from 'node:assert';
import { existsSync } from 'node:fs';
import { exec } from './helpers.js';
import { codegenRunning, codegenPromise } from './codegen.js';

export async function runtimeTest (fixtures) {
  suite('Runtime', async () => {
    for (const fixture of fixtures) {
      if (fixture.startsWith('dummy_')) continue;
      const runtimeName = fixture.replace(/(\.component)?\.(wat|wasm)$/, '');
      if (!existsSync(`test/runtime/${runtimeName}.ts`))
        continue;
      test(runtimeName, async () => {
        if (codegenRunning) {
          await codegenPromise;
        }
        const { stderr } = await exec(process.argv[0], `test/output/${runtimeName}.js`);
        strictEqual(stderr, '');
      });
    }
  });
}
