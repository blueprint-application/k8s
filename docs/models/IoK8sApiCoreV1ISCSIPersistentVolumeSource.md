# IoK8sApiCoreV1ISCSIPersistentVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chapAuthDiscovery** | **boolean** | chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication | [optional] [default to undefined]
**chapAuthSession** | **boolean** | chapAuthSession defines whether support iSCSI Session CHAP authentication | [optional] [default to undefined]
**fsType** | **string** | fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi | [optional] [default to undefined]
**initiatorName** | **string** | initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface &lt;target portal&gt;:&lt;volume name&gt; will be created for the connection. | [optional] [default to undefined]
**iqn** | **string** | iqn is Target iSCSI Qualified Name. | [default to undefined]
**iscsiInterface** | **string** | iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to \&#39;default\&#39; (tcp). | [optional] [default to undefined]
**lun** | **number** | lun is iSCSI Target Lun number. | [default to undefined]
**portals** | **Array&lt;string&gt;** | portals is the iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). | [optional] [default to undefined]
**readOnly** | **boolean** | readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. | [optional] [default to undefined]
**secretRef** | [**IoK8sApiCoreV1SecretReference**](IoK8sApiCoreV1SecretReference.md) |  | [optional] [default to undefined]
**targetPortal** | **string** | targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260). | [default to undefined]


