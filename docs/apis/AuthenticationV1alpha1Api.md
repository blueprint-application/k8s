# AuthenticationV1alpha1Api

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**createAuthenticationV1alpha1SelfSubjectReview**](AuthenticationV1alpha1Api.md#createauthenticationv1alpha1selfsubjectreview) | **POST** /apis/authentication.k8s.io/v1alpha1/selfsubjectreviews |  |
| [**getAuthenticationV1alpha1APIResources**](AuthenticationV1alpha1Api.md#getauthenticationv1alpha1apiresources) | **GET** /apis/authentication.k8s.io/v1alpha1/ |  |


## **createAuthenticationV1alpha1SelfSubjectReview**
> IoK8sApiAuthenticationV1alpha1SelfSubjectReview createAuthenticationV1alpha1SelfSubjectReview(body)

create a SelfSubjectReview

### Example

```typescript
import { SDK, CreateAuthenticationV1alpha1SelfSubjectReviewParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: IoK8sApiAuthenticationV1alpha1SelfSubjectReview = await sdk.authenticationV1alpha1.createAuthenticationV1alpha1SelfSubjectReview(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApiAuthenticationV1alpha1SelfSubjectReview**|  |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |


### Return type

**IoK8sApiAuthenticationV1alpha1SelfSubjectReview**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](AuthenticationV1alpha1Api.md#authenticationv1alpha1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **getAuthenticationV1alpha1APIResources**
> IoK8sApimachineryPkgApisMetaV1APIResourceList getAuthenticationV1alpha1APIResources()

get available resources

### Example

```typescript
import { SDK, GetAuthenticationV1alpha1APIResourcesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: IoK8sApimachineryPkgApisMetaV1APIResourceList = await sdk.authenticationV1alpha1.getAuthenticationV1alpha1APIResources()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**IoK8sApimachineryPkgApisMetaV1APIResourceList**

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

[[Back to top]](AuthenticationV1alpha1Api.md#authenticationv1alpha1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


