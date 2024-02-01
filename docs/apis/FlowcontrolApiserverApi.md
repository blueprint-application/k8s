# FlowcontrolApiserverApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**getFlowcontrolApiserverAPIGroup**](FlowcontrolApiserverApi.md#getflowcontrolapiserverapigroup) | **GET** /apis/flowcontrol.apiserver.k8s.io/ |  |


## **getFlowcontrolApiserverAPIGroup**
> IoK8sApimachineryPkgApisMetaV1APIGroup getFlowcontrolApiserverAPIGroup()

get information of a group

### Example

```typescript
import { SDK, GetFlowcontrolApiserverAPIGroupParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: IoK8sApimachineryPkgApisMetaV1APIGroup = await sdk.flowcontrolApiserver.getFlowcontrolApiserverAPIGroup()
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

[[Back to top]](FlowcontrolApiserverApi.md#flowcontrolapiserverapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


