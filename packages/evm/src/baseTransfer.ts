import type {
  Domain,
  Config,
  Domainlike,
  EvmResource,
  Eip1193Provider,
} from '@buildwithsygma/core';
import { utils } from 'ethers';

import type { EvmFee } from './types.js';

export interface BaseTransferParams {
  source: Domainlike;
  destination: Domainlike;
  sourceNetworkProvider: Eip1193Provider;
  sourceAddress: string;
  resource: string | EvmResource;
}

export abstract class BaseTransfer {
  protected sourceNetworkProvider: Eip1193Provider;
  protected sourceAddress: string;
  protected destination: Domain;
  protected config: Config;
  protected source: Domain;
  protected resource: EvmResource;

  protected getDepositData(): string {
    return utils.formatBytes32String('');
  }

  constructor(transfer: BaseTransferParams, config: Config) {
    this.sourceAddress = transfer.sourceAddress;
    this.source = config.getDomain(transfer.source);
    this.destination = config.getDomain(transfer.destination);
    this.sourceNetworkProvider = transfer.sourceNetworkProvider;
    this.config = config;

    const resources = config.getResources(this.source);
    const resource = resources.find(resource => {
      return typeof transfer.resource === 'string'
        ? resource.resourceId === transfer.resource
        : resource.resourceId === transfer.resource.resourceId;
    });

    if (resource) {
      this.resource = resource as EvmResource;
    } else {
      throw new Error('Resource not found.');
    }
  }
  /**
   * Returns fee based on transfer amount.
   * @param amount By default it is original amount passed in constructor
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  async getFee(): Promise<EvmFee> {
    throw new Error('Method not implemented.');
  }
  /**
   *
   * @param destination
   * @returns
   */
  setDesinationDomain(destination: Domainlike): void {
    const domain = this.config.getDomain(destination);
    this.destination = domain;
  }
}