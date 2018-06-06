const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

const JSONMock = {
  parse: jest.fn(),
};

global.localStorage = localStorageMock;
global.JSON = JSONMock;