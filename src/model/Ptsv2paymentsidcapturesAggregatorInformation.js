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
    define(['ApiClient', 'model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsidcapturesAggregatorInformationSubMerchant'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidcapturesAggregatorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsidcapturesAggregatorInformationSubMerchant);
  }
}(this, function(ApiClient, Ptsv2paymentsidcapturesAggregatorInformationSubMerchant) {
  'use strict';




  /**
   * The Ptsv2paymentsidcapturesAggregatorInformation model module.
   * @module model/Ptsv2paymentsidcapturesAggregatorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidcapturesAggregatorInformation</code>.
   * @alias module:model/Ptsv2paymentsidcapturesAggregatorInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2paymentsidcapturesAggregatorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidcapturesAggregatorInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidcapturesAggregatorInformation} The populated <code>Ptsv2paymentsidcapturesAggregatorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aggregatorId')) {
        obj['aggregatorId'] = ApiClient.convertToType(data['aggregatorId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('subMerchant')) {
        obj['subMerchant'] = Ptsv2paymentsidcapturesAggregatorInformationSubMerchant.constructFromObject(data['subMerchant']);
      }
    }
    return obj;
  }

  /**
   * Value that identifies you as a payment aggregator. Get this value from the processor.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR6 - Position: 95-105 - Field: MasterCard Payment Facilitator ID  **FDC Compass**\\ This value must consist of uppercase characters.  For processor-specific information, see the `aggregator_id` field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} aggregatorId
   */
  exports.prototype['aggregatorId'] = undefined;
  /**
   * Your payment aggregator business name.  **American Express Direct**\\ The maximum length of the aggregator name depends on the length of the sub-merchant name. The combined length for both values must not exceed 36 characters.\\  #### CyberSource through VisaNet With American Express, the maximum length of the aggregator name depends on the length of the sub-merchant name. The combined length for both values must not exceed 36 characters. The value for this field does not map to the TC 33 capture file5.  **FDC Compass**\\ This value must consist of uppercase characters.  For processor-specific information, see the aggregator_name field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsidcapturesAggregatorInformationSubMerchant} subMerchant
   */
  exports.prototype['subMerchant'] = undefined;



  return exports;
}));


