import { AppUsersModule } from './app-users.module';

describe('AppUsersModule', () => {
  let appUsersModule: AppUsersModule;

  beforeEach(() => {
    appUsersModule = new AppUsersModule();
  });

  it('should create an instance', () => {
    expect(appUsersModule).toBeTruthy();
  });
});
