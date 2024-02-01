# IoK8sApiStorageV1VolumeAttachmentSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attacher** | **string** | attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName(). | [default to undefined]
**nodeName** | **string** | nodeName represents the node that the volume should be attached to. | [default to undefined]
**source** | [**IoK8sApiStorageV1VolumeAttachmentSource**](IoK8sApiStorageV1VolumeAttachmentSource.md) |  | [default to undefined]


