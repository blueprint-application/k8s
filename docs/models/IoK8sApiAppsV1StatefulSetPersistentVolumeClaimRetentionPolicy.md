# IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**whenDeleted** | **string** | WhenDeleted specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is deleted. The default policy of &#x60;Retain&#x60; causes PVCs to not be affected by StatefulSet deletion. The &#x60;Delete&#x60; policy causes those PVCs to be deleted. | [optional] [default to undefined]
**whenScaled** | **string** | WhenScaled specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is scaled down. The default policy of &#x60;Retain&#x60; causes PVCs to not be affected by a scaledown. The &#x60;Delete&#x60; policy causes the associated PVCs for any excess pods above the replica count to be deleted. | [optional] [default to undefined]


