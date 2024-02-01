import { IoK8sApiCoreV1NamespaceConditionModelOptions as IoK8sApiCoreV1NamespaceCondition } from '../IoK8sApiCoreV1NamespaceCondition';

export interface IoK8sApiCoreV1NamespaceStatusModelOptions {
  conditions?: Array<IoK8sApiCoreV1NamespaceCondition>;
  phase?: string;
}
