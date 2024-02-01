# IoK8sApiCoreV1GitRepoVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directory** | **string** | directory is the target directory name. Must not contain or start with \&#39;..\&#39;.  If \&#39;.\&#39; is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name. | [optional] [default to undefined]
**repository** | **string** | repository is the URL | [default to undefined]
**revision** | **string** | revision is the commit hash for the specified revision. | [optional] [default to undefined]


