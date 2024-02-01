import { IoK8sApiStorageV1TokenRequestModelOptions as IoK8sApiStorageV1TokenRequest } from '../IoK8sApiStorageV1TokenRequest';

export interface IoK8sApiStorageV1CSIDriverSpecModelOptions {
  attachRequired?: boolean;
  fsGroupPolicy?: string;
  podInfoOnMount?: boolean;
  requiresRepublish?: boolean;
  seLinuxMount?: boolean;
  storageCapacity?: boolean;
  tokenRequests?: Array<IoK8sApiStorageV1TokenRequest>;
  volumeLifecycleModes?: Array<string>;
}
