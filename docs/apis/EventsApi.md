# EventsApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**getEventsAPIGroup**](EventsApi.md#geteventsapigroup) | **GET** /apis/events.k8s.io/ |  |


## **getEventsAPIGroup**
> IoK8sApimachineryPkgApisMetaV1APIGroup getEventsAPIGroup()

get information of a group

### Example

```typescript
import { SDK, GetEventsAPIGroupParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: IoK8sApimachineryPkgApisMetaV1APIGroup = await sdk.events.getEventsAPIGroup()
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

[[Back to top]](EventsApi.md#eventsapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


