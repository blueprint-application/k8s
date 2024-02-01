# IoK8sApimachineryPkgApisMetaV1OwnerReferenceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **string** | API version of the referent. | [default to undefined]
**blockOwnerDeletion** | **boolean** | If true, AND if the owner has the \&quot;foregroundDeletion\&quot; finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs \&quot;delete\&quot; permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. | [optional] [default to undefined]
**controller** | **boolean** | If true, this reference points to the managing controller. | [optional] [default to undefined]
**kind** | **string** | Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [default to undefined]
**name** | **string** | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names | [default to undefined]
**uid** | **string** | UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids | [default to undefined]


