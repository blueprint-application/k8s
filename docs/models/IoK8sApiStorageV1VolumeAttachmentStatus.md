# IoK8sApiStorageV1VolumeAttachmentStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachError** | [**IoK8sApiStorageV1VolumeError**](IoK8sApiStorageV1VolumeError.md) |  | [optional] [default to undefined]
**attached** | **boolean** | attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. | [default to undefined]
**attachmentMetadata** | **{ [key: string]: string; }** | attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher. | [optional] [default to undefined]
**detachError** | [**IoK8sApiStorageV1VolumeError**](IoK8sApiStorageV1VolumeError.md) |  | [optional] [default to undefined]


