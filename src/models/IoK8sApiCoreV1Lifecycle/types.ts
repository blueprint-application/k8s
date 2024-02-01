import { IoK8sApiCoreV1LifecycleHandlerModelOptions as IoK8sApiCoreV1LifecycleHandler } from '../IoK8sApiCoreV1LifecycleHandler';

export interface IoK8sApiCoreV1LifecycleModelOptions {
  postStart?: IoK8sApiCoreV1LifecycleHandler;
  preStop?: IoK8sApiCoreV1LifecycleHandler;
}
