# IoK8sApiCoreV1ClusterTrustBundleProjectionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labelSelector** | [**IoK8sApimachineryPkgApisMetaV1LabelSelector**](IoK8sApimachineryPkgApisMetaV1LabelSelector.md) |  | [optional] [default to undefined]
**name** | **string** | Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector. | [optional] [default to undefined]
**optional** | **boolean** | If true, don\&#39;t block pod startup if the referenced ClusterTrustBundle(s) aren\&#39;t available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles. | [optional] [default to undefined]
**path** | **string** | Relative path from the volume root to write the bundle. | [default to undefined]
**signerName** | **string** | Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated. | [optional] [default to undefined]


