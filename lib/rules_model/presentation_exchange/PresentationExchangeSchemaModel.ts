/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BaseIssuanceModel } from '../../index';

/**
 * Class to model the schema as defined by Presentation Exchange.
 */
export class PresentationExchangeSchemaModel {
     /**
   * Create an instance of PresentationExchangeSchemaModel
   * @param url for the schema
   * @param name for the schema
   * @param purpose of the schema
   */
  constructor (

    /**
     * Unique identifier for the requested type
     */
    public uri?: string[],

    /**
     * The resource MAY contain this property, and if present its value SHOULD be a human-friendly name that describes what the Presentation Definition pertains to.
     */
    public name?: string,
    /**
     * The resource MAY contain this property, and if present its value MUST be a string that describes the purpose for which the Presentation Definition’s inputs are being requested.
     */
    public purpose?: string) {
  }

  /**
   * Populate this object from a model
   * @param input model to populate object
   */
  public populateFrom(input: PresentationExchangeSchemaModel): PresentationExchangeSchemaModel {
    this.name = input.name;
    this.purpose = input.purpose;
    this.uri = [];
    for (let inx = 0; input.uri && inx < input.uri.length ; inx++ ) {
      this.uri.push(input.uri[inx]);
    }

    return this;
  }
}