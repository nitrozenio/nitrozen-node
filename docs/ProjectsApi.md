# NitrozenApi.ProjectsApi

All URIs are relative to *https://nitrozen.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectsGet**](ProjectsApi.md#projectsGet) | **GET** /projects | List projects
[**projectsPost**](ProjectsApi.md#projectsPost) | **POST** /projects | Create a project
[**projectsProjectDelete**](ProjectsApi.md#projectsProjectDelete) | **DELETE** /projects/{project} | Delete a project
[**projectsProjectGet**](ProjectsApi.md#projectsProjectGet) | **GET** /projects/{project} | Get a project
[**projectsProjectPut**](ProjectsApi.md#projectsProjectPut) | **PUT** /projects/{project} | Update a project



## projectsGet

> ProjectsGet200Response projectsGet()

List projects

Returns all projects owned by the authenticated user.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.ProjectsApi();
apiInstance.projectsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ProjectsGet200Response**](ProjectsGet200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsPost

> ProjectsPost201Response projectsPost(projectInput)

Create a project

Creates a new changelog project. The slug is auto-generated from the name.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.ProjectsApi();
let projectInput = {"name":"My Product","description":"Changelog for My Product"}; // ProjectInput | 
apiInstance.projectsPost(projectInput, (error, data, response) => {
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
 **projectInput** | [**ProjectInput**](ProjectInput.md)|  | 

### Return type

[**ProjectsPost201Response**](ProjectsPost201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectsProjectDelete

> projectsProjectDelete(project)

Delete a project

Permanently deletes a project and all its entries.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.ProjectsApi();
let project = 56; // Number | Project ID
apiInstance.projectsProjectDelete(project, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsProjectGet

> ProjectsPost201Response projectsProjectGet(project)

Get a project

Returns a single project by ID.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.ProjectsApi();
let project = 56; // Number | Project ID
apiInstance.projectsProjectGet(project, (error, data, response) => {
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

### Return type

[**ProjectsPost201Response**](ProjectsPost201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectsProjectPut

> ProjectsPost201Response projectsProjectPut(project, projectInput)

Update a project

Updates an existing project&#39;s name and description.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.ProjectsApi();
let project = 56; // Number | Project ID
let projectInput = new NitrozenApi.ProjectInput(); // ProjectInput | 
apiInstance.projectsProjectPut(project, projectInput, (error, data, response) => {
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
 **projectInput** | [**ProjectInput**](ProjectInput.md)|  | 

### Return type

[**ProjectsPost201Response**](ProjectsPost201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

