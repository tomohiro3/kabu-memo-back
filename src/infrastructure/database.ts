type MockData = {
  name: string;
  code: number;
  market: string;
  industry33: string;
  industry17: string;
  freeKeywords: string;
};

class MockDataBaseClient {
  mockData: MockData;
  constructor() {
    this.mockData = {
      name: 'mockName',
      code: 9999,
      market: '東1',
      industry33: 'ゴム',
      industry17: '化学',
      freeKeywords: '資本提携',
    };
  }

  execute() {
    return this.mockData;
  }
}

export function createDbClient() {
  return new MockDataBaseClient();
}
