# IoK8sApiCoreV1NFSVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **string** | path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs | [default to undefined]
**readOnly** | **boolean** | readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs | [optional] [default to undefined]
**server** | **string** | server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs | [default to undefined]


