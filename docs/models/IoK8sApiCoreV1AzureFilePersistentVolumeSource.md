# IoK8sApiCoreV1AzureFilePersistentVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**readOnly** | **boolean** | readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] [default to undefined]
**secretName** | **string** | secretName is the name of secret that contains Azure Storage Account Name and Key | [default to undefined]
**secretNamespace** | **string** | secretNamespace is the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod | [optional] [default to undefined]
**shareName** | **string** | shareName is the azure Share Name | [default to undefined]


