# IoK8sApiCoreV1VolumeMountModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mountPath** | **string** | Path within the container at which the volume should be mounted.  Must not contain \&#39;:\&#39;. | [default to undefined]
**mountPropagation** | **string** | mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. | [optional] [default to undefined]
**name** | **string** | This must match the Name of a Volume. | [default to undefined]
**readOnly** | **boolean** | Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. | [optional] [default to undefined]
**subPath** | **string** | Path within the volume from which the container\&#39;s volume should be mounted. Defaults to \&quot;\&quot; (volume\&#39;s root). | [optional] [default to undefined]
**subPathExpr** | **string** | Expanded path within the volume from which the container\&#39;s volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container\&#39;s environment. Defaults to \&quot;\&quot; (volume\&#39;s root). SubPathExpr and SubPath are mutually exclusive. | [optional] [default to undefined]


