# IoK8sApiCoreV1ConfigMapNodeConfigSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kubeletConfigKey** | **string** | KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases. | [default to undefined]
**name** | **string** | Name is the metadata.name of the referenced ConfigMap. This field is required in all cases. | [default to undefined]
**namespace** | **string** | Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases. | [default to undefined]
**resourceVersion** | **string** | ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status. | [optional] [default to undefined]
**uid** | **string** | UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status. | [optional] [default to undefined]


