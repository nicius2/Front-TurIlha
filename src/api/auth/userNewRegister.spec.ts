import MockAdapter from 'axios-mock-adapter';
import { api } from '@/lib/api';
import { createNewRegister } from './userNewRegister';
import { describe, beforeEach,afterEach, it, expect } from "@jest/globals"

describe('createNewRegister', () => {
  let mock: InstanceType<typeof MockAdapter>;

  beforeEach(() => {
    mock = new MockAdapter(api);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should return data on successful registration', async () => {
    const data = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password',
      confirmPassword: 'password',
    };
    const responseData = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
    };

    mock.onPost('/user/register', data).reply(200, responseData);

    const result = await createNewRegister(data);

    expect(result).toEqual(responseData);
  });

  it('should throw an error on failed registration', async () => {
    const data = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password',
      confirmPassword: 'password',
    };
    const errorMessage = 'Registration failed';

    mock.onPost('/user/register', data).reply(500, { message: errorMessage });

    await expect(createNewRegister(data)).rejects.toThrow();
  });
});