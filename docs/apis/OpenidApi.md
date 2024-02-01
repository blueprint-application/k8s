# OpenidApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**getServiceAccountIssuerOpenIDKeyset**](OpenidApi.md#getserviceaccountissueropenidkeyset) | **GET** /openid/v1/jwks/ |  |


## **getServiceAccountIssuerOpenIDKeyset**
> string getServiceAccountIssuerOpenIDKeyset()

get service account issuer OpenID JSON Web Key Set (contains public token verification keys)

### Example

```typescript
import { SDK, GetServiceAccountIssuerOpenIDKeysetParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: string = await sdk.openid.getServiceAccountIssuerOpenIDKeyset()
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
 - **Accept**: application/jwk-set+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](OpenidApi.md#openidapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


