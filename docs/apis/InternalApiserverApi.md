# InternalApiserverApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**getInternalApiserverAPIGroup**](InternalApiserverApi.md#getinternalapiserverapigroup) | **GET** /apis/internal.apiserver.k8s.io/ |  |


## **getInternalApiserverAPIGroup**
> IoK8sApimachineryPkgApisMetaV1APIGroup getInternalApiserverAPIGroup()

get information of a group

### Example

```typescript
import { SDK, GetInternalApiserverAPIGroupParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: IoK8sApimachineryPkgApisMetaV1APIGroup = await sdk.internalApiserver.getInternalApiserverAPIGroup()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**IoK8sApimachineryPkgApisMetaV1APIGroup**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](InternalApiserverApi.md#internalapiserverapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


