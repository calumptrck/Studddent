const localStorageMock = {
  getItem: jest.fn(() => {
    return '{ "up":[], "down":[] }'
  }),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

const JSONMock = {
  parse: jest.fn(),
};

global.localStorage = localStorageMock;
