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
    define(['ApiClient', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions);
  }
}(this, function(ApiClient, Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions) {
  'use strict';




  /**
   * The Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation model module.
   * @module model/Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation</code>.
   * @alias module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation} obj Optional instance to populate.
   * @return {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation} The populated <code>Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billPaymentProgramEnabled')) {
        obj['billPaymentProgramEnabled'] = ApiClient.convertToType(data['billPaymentProgramEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('bankTransferOptions')) {
        obj['bankTransferOptions'] = Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions.constructFromObject(data['bankTransferOptions']);
      }
    }
    return obj;
  }

  /**
   * Flag that indicates that this is a payment for a bill or for an existing contractual loan. For processor-specific details, see the `bill_payment` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  Possible Values: - `true`: Bill payment or loan payment. - `false` (default): Not a bill payment or loan payment. 
   * @member {Boolean} billPaymentProgramEnabled
   */
  exports.prototype['billPaymentProgramEnabled'] = undefined;
  /**
   * @member {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions} bankTransferOptions
   */
  exports.prototype['bankTransferOptions'] = undefined;



  return exports;
}));


