# Changelog

## [1.0.0] - 2026-04-21

Initial public release of the official Nitrozen.io Node.js SDK.

### Added

- Full coverage of all 16 API endpoints across `AuthenticationApi`, `EntriesApi`, `ProjectsApi`, `PublicApi`, and `UsersApi`
- Promise-based API — all methods return a `Promise` when no callback is provided
- Callback support — pass a callback as the last argument for the legacy pattern
- `NitrozenError` class with `statusCode` and `errors` fields for structured error handling
- `ApiClient.create(token)` convenience factory for one-line client setup
- TypeScript declarations (`types/index.d.ts`) covering all models, API classes, and `NitrozenError`
- 19 model classes with `constructFromObject` and `validateJSON` helpers
