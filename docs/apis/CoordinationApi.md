# CoordinationApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**getCoordinationAPIGroup**](CoordinationApi.md#getcoordinationapigroup) | **GET** /apis/coordination.k8s.io/ |  |


## **getCoordinationAPIGroup**
> IoK8sApimachineryPkgApisMetaV1APIGroup getCoordinationAPIGroup()

get information of a group

### Example

```typescript
import { SDK, GetCoordinationAPIGroupParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: IoK8sApimachineryPkgApisMetaV1APIGroup = await sdk.coordination.getCoordinationAPIGroup()
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

[[Back to top]](CoordinationApi.md#coordinationapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


