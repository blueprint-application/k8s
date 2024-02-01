# IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claimName** | **string** | claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims | [default to undefined]
**readOnly** | **boolean** | readOnly Will force the ReadOnly setting in VolumeMounts. Default false. | [optional] [default to undefined]


