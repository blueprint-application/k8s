# IoK8sApiCoreV1RBDVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | **string** | fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd | [optional] [default to undefined]
**image** | **string** | image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it | [default to undefined]
**keyring** | **string** | keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it | [optional] [default to undefined]
**monitors** | **Array&lt;string&gt;** | monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it | [default to undefined]
**pool** | **string** | pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it | [optional] [default to undefined]
**readOnly** | **boolean** | readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it | [optional] [default to undefined]
**secretRef** | [**IoK8sApiCoreV1LocalObjectReference**](IoK8sApiCoreV1LocalObjectReference.md) |  | [optional] [default to undefined]
**user** | **string** | user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it | [optional] [default to undefined]


