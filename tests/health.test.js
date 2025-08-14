import { describe, it } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import app from '../server.js';

describe('GET /health', () => {
  it('should return status ok', async () => {
    const response = await request(app).get('/health');
    assert.strictEqual(response.status, 200);
    assert.deepStrictEqual(response.body, { status: 'ok' });
  });
});