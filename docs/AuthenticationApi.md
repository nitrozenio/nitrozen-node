# NitrozenApi.AuthenticationApi

All URIs are relative to *https://nitrozen.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokensGet**](AuthenticationApi.md#tokensGet) | **GET** /tokens | List API tokens
[**tokensPost**](AuthenticationApi.md#tokensPost) | **POST** /tokens | Create an API token
[**tokensTokenDelete**](AuthenticationApi.md#tokensTokenDelete) | **DELETE** /tokens/{token} | Revoke an API token



## tokensGet

> TokensGet200Response tokensGet()

List API tokens

Returns all API tokens for the authenticated user. Token values are not included.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.AuthenticationApi();
apiInstance.tokensGet((error, data, response) => {
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

[**TokensGet200Response**](TokensGet200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokensPost

> TokensPost201Response tokensPost(tokensPostRequest)

Create an API token

Creates a new API token. The plain-text token is only returned in this response and cannot be retrieved later. 

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.AuthenticationApi();
let tokensPostRequest = {"name":"CI/CD Pipeline"}; // TokensPostRequest | 
apiInstance.tokensPost(tokensPostRequest, (error, data, response) => {
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
 **tokensPostRequest** | [**TokensPostRequest**](TokensPostRequest.md)|  | 

### Return type

[**TokensPost201Response**](TokensPost201Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tokensTokenDelete

> tokensTokenDelete(token)

Revoke an API token

Permanently revokes an API token. Any requests using this token will be rejected.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';
let defaultClient = NitrozenApi.ApiClient.instance;
// Configure Bearer access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new NitrozenApi.AuthenticationApi();
let token = 56; // Number | Token ID
apiInstance.tokensTokenDelete(token, (error, data, response) => {
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
 **token** | **Number**| Token ID | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

