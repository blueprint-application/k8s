# IoK8sApimachineryPkgApisMetaV1StatusDetailsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**causes** | [**Array&lt;IoK8sApimachineryPkgApisMetaV1StatusCause&gt;**](IoK8sApimachineryPkgApisMetaV1StatusCause.md) | The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. | [optional] [default to undefined]
**group** | **string** | The group attribute of the resource associated with the status StatusReason. | [optional] [default to undefined]
**kind** | **string** | The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [optional] [default to undefined]
**name** | **string** | The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). | [optional] [default to undefined]
**retryAfterSeconds** | **number** | If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. | [optional] [default to undefined]
**uid** | **string** | UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids | [optional] [default to undefined]


