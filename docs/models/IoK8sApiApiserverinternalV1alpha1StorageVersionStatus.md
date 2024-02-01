# IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commonEncodingVersion** | **string** | If all API server instances agree on the same encoding storage version, then this field is set to that version. Otherwise this field is left empty. API servers should finish updating its storageVersionStatus entry before serving write operations, so that this field will be in sync with the reality. | [optional] [default to undefined]
**conditions** | [**Array&lt;IoK8sApiApiserverinternalV1alpha1StorageVersionCondition&gt;**](IoK8sApiApiserverinternalV1alpha1StorageVersionCondition.md) | The latest available observations of the storageVersion\&#39;s state. | [optional] [default to undefined]
**storageVersions** | [**Array&lt;IoK8sApiApiserverinternalV1alpha1ServerStorageVersion&gt;**](IoK8sApiApiserverinternalV1alpha1ServerStorageVersion.md) | The reported versions per API server instance. | [optional] [default to undefined]


