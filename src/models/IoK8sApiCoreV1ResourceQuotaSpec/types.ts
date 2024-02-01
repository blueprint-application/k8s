import { IoK8sApiCoreV1ScopeSelectorModelOptions as IoK8sApiCoreV1ScopeSelector } from '../IoK8sApiCoreV1ScopeSelector';

export interface IoK8sApiCoreV1ResourceQuotaSpecModelOptions {
  hard?: { [key: string]: string };
  scopeSelector?: IoK8sApiCoreV1ScopeSelector;
  scopes?: Array<string>;
}
