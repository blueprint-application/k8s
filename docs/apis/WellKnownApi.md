# WellKnownApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**getServiceAccountIssuerOpenIDConfiguration**](WellKnownApi.md#getserviceaccountissueropenidconfiguration) | **GET** /.well-known/openid-configuration/ |  |


## **getServiceAccountIssuerOpenIDConfiguration**
> string getServiceAccountIssuerOpenIDConfiguration()

get service account issuer OpenID configuration, also known as the \'OIDC discovery doc\'

### Example

```typescript
import { SDK, GetServiceAccountIssuerOpenIDConfigurationParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: string = await sdk.wellKnown.getServiceAccountIssuerOpenIDConfiguration()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**string**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](WellKnownApi.md#wellknownapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


