# NitrozenApi.PublicApi

All URIs are relative to *https://nitrozen.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicProjectsSlugEntriesGet**](PublicApi.md#publicProjectsSlugEntriesGet) | **GET** /public/projects/{slug}/entries | List published entries (public)



## publicProjectsSlugEntriesGet

> PublicProjectsSlugEntriesGet200Response publicProjectsSlugEntriesGet(slug)

List published entries (public)

Returns all published entries for a project. No authentication required.

### Example

```javascript
import NitrozenApi from 'nitrozen_api';

let apiInstance = new NitrozenApi.PublicApi();
let slug = "slug_example"; // String | Project slug
apiInstance.publicProjectsSlugEntriesGet(slug, (error, data, response) => {
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
 **slug** | **String**| Project slug | 

### Return type

[**PublicProjectsSlugEntriesGet200Response**](PublicProjectsSlugEntriesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

