/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Ptsv2paymentsClientReferenceInformation', 'model/Ptsv2paymentsidreversalsOrderInformation', 'model/Ptsv2paymentsidreversalsPointOfSaleInformation', 'model/Ptsv2paymentsidreversalsProcessingInformation', 'model/Ptsv2paymentsidreversalsReversalInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsClientReferenceInformation'), require('./Ptsv2paymentsidreversalsOrderInformation'), require('./Ptsv2paymentsidreversalsPointOfSaleInformation'), require('./Ptsv2paymentsidreversalsProcessingInformation'), require('./Ptsv2paymentsidreversalsReversalInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.MitReversalRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsClientReferenceInformation, root.CyberSource.Ptsv2paymentsidreversalsOrderInformation, root.CyberSource.Ptsv2paymentsidreversalsPointOfSaleInformation, root.CyberSource.Ptsv2paymentsidreversalsProcessingInformation, root.CyberSource.Ptsv2paymentsidreversalsReversalInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsClientReferenceInformation, Ptsv2paymentsidreversalsOrderInformation, Ptsv2paymentsidreversalsPointOfSaleInformation, Ptsv2paymentsidreversalsProcessingInformation, Ptsv2paymentsidreversalsReversalInformation) {
  'use strict';




  /**
   * The MitReversalRequest model module.
   * @module model/MitReversalRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>MitReversalRequest</code>.
   * @alias module:model/MitReversalRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>MitReversalRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MitReversalRequest} obj Optional instance to populate.
   * @return {module:model/MitReversalRequest} The populated <code>MitReversalRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Ptsv2paymentsClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }
      if (data.hasOwnProperty('reversalInformation')) {
        obj['reversalInformation'] = Ptsv2paymentsidreversalsReversalInformation.constructFromObject(data['reversalInformation']);
      }
      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Ptsv2paymentsidreversalsProcessingInformation.constructFromObject(data['processingInformation']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = Ptsv2paymentsidreversalsOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('pointOfSaleInformation')) {
        obj['pointOfSaleInformation'] = Ptsv2paymentsidreversalsPointOfSaleInformation.constructFromObject(data['pointOfSaleInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsClientReferenceInformation} clientReferenceInformation
   */
  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidreversalsReversalInformation} reversalInformation
   */
  exports.prototype['reversalInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidreversalsProcessingInformation} processingInformation
   */
  exports.prototype['processingInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidreversalsOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidreversalsPointOfSaleInformation} pointOfSaleInformation
   */
  exports.prototype['pointOfSaleInformation'] = undefined;



  return exports;
}));

