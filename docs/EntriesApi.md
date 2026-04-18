# NitrozenApi.EntriesApi

All URIs are relative to *https://nitrozen.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectsProjectEntriesEntryDelete**](EntriesApi.md#projectsProjectEntriesEntryDelete) | **DELETE** /projects/{project}/entries/{entry} | Delete an entry
[**projectsProjectEntriesEntryGet**](EntriesApi.md#projectsProjectEntriesEntryGet) | **GET** /projects/{project}/entries/{entry} | Get an entry
[**projectsProjectEntriesEntryPut**](EntriesApi.md#projectsProjectEntriesEntryPut) | **PUT** /projects/{project}/entries/{entry} | Update an entry
[**projectsProjectEntriesGet**](EntriesApi.md#projectsProjectEntriesGet) | **GET** /projects/{project}/entries | List entries
[**projectsProjectEntriesPost**](EntriesApi.md#projectsProjectEntriesPost) | **POST** /projects/{project}/entries | Create an entry



## projectsProjectEntriesEntryDelete

> projectsProjectEntriesEntryDelete(project, entry)

Delete an entry

Permanently deletes a changelog entry.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.EntriesApi();
let project = 56; // Number | Project ID
let entry = 56; // Number | Entry ID
apiInstance.projectsProjectEntriesEntryDelete(project, entry, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **Number**| Project ID | 
 **entry** | **Number**| Entry ID | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsProjectEntriesEntryGet

> ProjectsProjectEntriesPost201Response projectsProjectEntriesEntryGet(project, entry)

Get an entry

Returns a single entry by ID.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.EntriesApi();
let project = 56; // Number | Project ID
let entry = 56; // Number | Entry ID
apiInstance.projectsProjectEntriesEntryGet(project, entry, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **Number**| Project ID | 
 **entry** | **Number**| Entry ID | 

### Return type

[**ProjectsProjectEntriesPost201Response**](ProjectsProjectEntriesPost201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsProjectEntriesEntryPut

> ProjectsProjectEntriesPost201Response projectsProjectEntriesEntryPut(project, entry, entryInput)

Update an entry

Updates an existing changelog entry.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.EntriesApi();
let project = 56; // Number | Project ID
let entry = 56; // Number | Entry ID
let entryInput = new NitrozenApi.EntryInput(); // EntryInput | 
apiInstance.projectsProjectEntriesEntryPut(project, entry, entryInput, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **Number**| Project ID | 
 **entry** | **Number**| Entry ID | 
 **entryInput** | [**EntryInput**](EntryInput.md)|  | 

### Return type

[**ProjectsProjectEntriesPost201Response**](ProjectsProjectEntriesPost201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsProjectEntriesGet

> ProjectsProjectEntriesGet200Response projectsProjectEntriesGet(project, opts)

List entries

Returns entries for a project with optional filtering and pagination.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.EntriesApi();
let project = 56; // Number | Project ID
let opts = {
  'category': "category_example", // String | Filter by category
  'status': "status_example", // String | Filter by publish status
  'page': 1, // Number | Page number
  'perPage': 15 // Number | Items per page
};
apiInstance.projectsProjectEntriesGet(project, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **Number**| Project ID | 
 **category** | **String**| Filter by category | [optional] 
 **status** | **String**| Filter by publish status | [optional] 
 **page** | **Number**| Page number | [optional] [default to 1]
 **perPage** | **Number**| Items per page | [optional] [default to 15]

### Return type

[**ProjectsProjectEntriesGet200Response**](ProjectsProjectEntriesGet200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsProjectEntriesPost

> ProjectsProjectEntriesPost201Response projectsProjectEntriesPost(project, entryInput)

Create an entry

Creates a new changelog entry. Set &#x60;is_published&#x60; to &#x60;true&#x60; to publish immediately. If &#x60;published_at&#x60; is not provided for a published entry, it defaults to the current time. 

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.EntriesApi();
let project = 56; // Number | Project ID
let entryInput = {"title":"Dark mode support","content":"We've added dark mode across the entire application.","category":"new","is_published":true}; // EntryInput | 
apiInstance.projectsProjectEntriesPost(project, entryInput, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **Number**| Project ID | 
 **entryInput** | [**EntryInput**](EntryInput.md)|  | 

### Return type

[**ProjectsProjectEntriesPost201Response**](ProjectsProjectEntriesPost201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

