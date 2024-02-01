# RbacAuthorizationApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**getRbacAuthorizationAPIGroup**](RbacAuthorizationApi.md#getrbacauthorizationapigroup) | **GET** /apis/rbac.authorization.k8s.io/ |  |


## **getRbacAuthorizationAPIGroup**
> IoK8sApimachineryPkgApisMetaV1APIGroup getRbacAuthorizationAPIGroup()

get information of a group

### Example

```typescript
import { SDK, GetRbacAuthorizationAPIGroupParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: IoK8sApimachineryPkgApisMetaV1APIGroup = await sdk.rbacAuthorization.getRbacAuthorizationAPIGroup()
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

[[Back to top]](RbacAuthorizationApi.md#rbacauthorizationapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


