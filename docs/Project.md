# Nitrozenio.Project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**slug** | **String** |  | [optional] 
**public_url** | **String** | Public changelog page URL. &#x60;https://&lt;custom_domain&gt;&#x60; when the project&#39;s custom domain is verified, otherwise &#x60;https://nitrozen.io/c/&lt;slug&gt;&#x60;. Read-only; ignored on create and update. | [optional] [readonly] 
**description** | **String** |  | [optional] 
**customDomain** | **String** |  | [optional] 
**domainVerificationStatus** | **String** |  | [optional] 
**entriesCount** | **Number** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 



## Enum: DomainVerificationStatusEnum


* `pending` (value: `"pending"`)

* `verified` (value: `"verified"`)

* `failed` (value: `"failed"`)




