# IoK8sApiCoreV1CSIPersistentVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controllerExpandSecretRef** | [**IoK8sApiCoreV1SecretReference**](IoK8sApiCoreV1SecretReference.md) |  | [optional] [default to undefined]
**controllerPublishSecretRef** | [**IoK8sApiCoreV1SecretReference**](IoK8sApiCoreV1SecretReference.md) |  | [optional] [default to undefined]
**driver** | **string** | driver is the name of the driver to use for this volume. Required. | [default to undefined]
**fsType** | **string** | fsType to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. | [optional] [default to undefined]
**nodeExpandSecretRef** | [**IoK8sApiCoreV1SecretReference**](IoK8sApiCoreV1SecretReference.md) |  | [optional] [default to undefined]
**nodePublishSecretRef** | [**IoK8sApiCoreV1SecretReference**](IoK8sApiCoreV1SecretReference.md) |  | [optional] [default to undefined]
**nodeStageSecretRef** | [**IoK8sApiCoreV1SecretReference**](IoK8sApiCoreV1SecretReference.md) |  | [optional] [default to undefined]
**readOnly** | **boolean** | readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write). | [optional] [default to undefined]
**volumeAttributes** | **{ [key: string]: string; }** | volumeAttributes of the volume to publish. | [optional] [default to undefined]
**volumeHandle** | **string** | volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required. | [default to undefined]


