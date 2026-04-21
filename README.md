# nitrozenio

Official Node.js SDK for the [Nitrozen.io](https://nitrozen.io) changelog API.

## Installation

```shell
npm install nitrozenio
```

## Quick Start

```javascript
const { ApiClient, ProjectsApi, EntriesApi } = require('nitrozenio');

// Create a client with your API token
const client = ApiClient.create('YOUR_API_TOKEN');

// List your projects
const projects = new ProjectsApi(client);
const { data } = await projects.projectsGet();
console.log(data); // Project[]

// Create a changelog entry
const entries = new EntriesApi(client);
const { data: entry } = await entries.projectsProjectEntriesPost(
  data[0].id,
  { title: 'New feature', content: 'We shipped something great.', category: 'new' }
);
console.log(entry);
```

## Authentication

Create an API token on your [API Tokens](https://app.nitrozen.io/api-tokens) page.

Pass it to `ApiClient.create()` to get a ready-to-use client:

```javascript
const { ApiClient } = require('nitrozenio');
const client = ApiClient.create('YOUR_API_TOKEN');
```

You can also rotate tokens dynamically by passing a function:

```javascript
const client = ApiClient.create(() => getTokenFromVault());
```

## Error Handling

All methods return Promises. API errors reject with a `NitrozenError` that carries the HTTP status code and validation details:

```javascript
const { ApiClient, ProjectsApi, NitrozenError } = require('nitrozenio');

const client = ApiClient.create('YOUR_API_TOKEN');
const projects = new ProjectsApi(client);

try {
  const { data } = await projects.projectsProjectGet(999);
} catch (err) {
  if (err instanceof NitrozenError) {
    console.error(err.statusCode); // e.g. 404
    console.error(err.message);    // e.g. "Not found"
    console.error(err.errors);     // validation errors map, if any
  }
}
```

## Callback Style

If you prefer callbacks, pass one as the last argument and the method returns `void` instead of a Promise:

```javascript
const projects = new ProjectsApi(client);
projects.projectsGet(function(error, data) {
  if (error) throw error;
  console.log(data);
});
```

## Public Changelog (no auth)

Published entries for a project are available without authentication:

```javascript
const { ApiClient, PublicApi } = require('nitrozenio');

const api = new PublicApi(new ApiClient());
const { data: entries } = await api.publicProjectsSlugEntriesGet('your-project-slug');
console.log(entries);
```

## Rate Limiting

API rate limits are determined by your plan. When the limit is exceeded the API returns `429 Too Many Requests`. Unauthenticated requests are limited to 60 requests per minute per IP address.

## Pagination

List endpoints accept `page` and `perPage` options and return a `meta` object with pagination details:

```javascript
const { data: entries, meta } = await entriesApi.projectsProjectEntriesGet(
  projectId,
  { page: 2, perPage: 20 }
);
console.log(meta.total, meta.last_page);
```

## API Reference

All URIs are relative to `https://nitrozen.io/api/v1`.

### Authentication

| Method | HTTP | Description |
|--------|------|-------------|
| `tokensGet()` | GET /tokens | List API tokens |
| `tokensPost(body)` | POST /tokens | Create an API token |
| `tokensTokenDelete(id)` | DELETE /tokens/{token} | Revoke an API token |

### Projects

| Method | HTTP | Description |
|--------|------|-------------|
| `projectsGet()` | GET /projects | List projects |
| `projectsPost(body)` | POST /projects | Create a project |
| `projectsProjectGet(id)` | GET /projects/{project} | Get a project |
| `projectsProjectPut(id, body)` | PUT /projects/{project} | Update a project |
| `projectsProjectDelete(id)` | DELETE /projects/{project} | Delete a project |

### Entries

| Method | HTTP | Description |
|--------|------|-------------|
| `projectsProjectEntriesGet(id, opts?)` | GET /projects/{project}/entries | List entries |
| `projectsProjectEntriesPost(id, body)` | POST /projects/{project}/entries | Create an entry |
| `projectsProjectEntriesEntryGet(pid, eid)` | GET /projects/{project}/entries/{entry} | Get an entry |
| `projectsProjectEntriesEntryPut(pid, eid, body)` | PUT /projects/{project}/entries/{entry} | Update an entry |
| `projectsProjectEntriesEntryDelete(pid, eid)` | DELETE /projects/{project}/entries/{entry} | Delete an entry |

### Users

| Method | HTTP | Description |
|--------|------|-------------|
| `userGet()` | GET /user | Get current user |
| `userUsageGet()` | GET /user/usage | Get usage statistics |

### Public

| Method | HTTP | Description |
|--------|------|-------------|
| `publicProjectsSlugEntriesGet(slug)` | GET /public/projects/{slug}/entries | List published entries (no auth) |

## Entry Categories

Valid values for the `category` field: `new` · `improvement` · `fix` · `announcement`
