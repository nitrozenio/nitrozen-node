# NitrozenApi.UsersApi

All URIs are relative to *https://nitrozen.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userGet**](UsersApi.md#userGet) | **GET** /user | Get current user
[**userUsageGet**](UsersApi.md#userUsageGet) | **GET** /user/usage | Get usage statistics



## userGet

> UserGet200Response userGet()

Get current user

Returns the authenticated user&#39;s profile and plan details.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.UsersApi();
apiInstance.userGet((error, data, response) => {
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

[**UserGet200Response**](UserGet200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userUsageGet

> UserUsageGet200Response userUsageGet()

Get usage statistics

Returns current usage counts and plan limits.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.UsersApi();
apiInstance.userUsageGet((error, data, response) => {
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

[**UserUsageGet200Response**](UserUsageGet200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

