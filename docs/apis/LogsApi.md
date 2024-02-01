# LogsApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**logFileHandler**](LogsApi.md#logfilehandler) | **GET** /logs/{logpath} |  |
| [**logFileListHandler**](LogsApi.md#logfilelisthandler) | **GET** /logs/ |  |


## **logFileHandler**
> logFileHandler()


### Example

```typescript
import { SDK, LogFileHandlerParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      logpath: string, // required
    },
  };
  const result: unknown = await sdk.logs.logFileHandler(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **logpath** | [**string**] | path to the log | defaults to undefined |


### Return type

void (empty response body)

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **401** | Unauthorized |  -  |

[[Back to top]](LogsApi.md#logsapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **logFileListHandler**
> logFileListHandler()


### Example

```typescript
import { SDK, LogFileListHandlerParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: unknown = await sdk.logs.logFileListHandler()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

void (empty response body)

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **401** | Unauthorized |  -  |

[[Back to top]](LogsApi.md#logsapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


