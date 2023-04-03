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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse200OrderInformationAmountDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse200OrderInformationAmountDetails model module.
   * @module model/InlineResponse200OrderInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse200OrderInformationAmountDetails</code>.
   * @alias module:model/InlineResponse200OrderInformationAmountDetails
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse200OrderInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200OrderInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/InlineResponse200OrderInformationAmountDetails} The populated <code>InlineResponse200OrderInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('billingAmount')) {
        obj['billingAmount'] = ApiClient.convertToType(data['billingAmount'], 'String');
      }
      if (data.hasOwnProperty('setupFee')) {
        obj['setupFee'] = ApiClient.convertToType(data['setupFee'], 'String');
      }
    }
    return obj;
  }

  /**
   * Currency used for the order. Use the three-character [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  #### Used by **Authorization** Required field.  **Authorization Reversal** For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your payment authorization request.  #### PIN Debit Currency for the amount you requested for the PIN debit purchase. This value is returned for partial authorizations. The issuing bank can approve a partial amount if the balance on the debit card is less than the requested transaction amount. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf). Returned by PIN debit purchase.  For PIN debit reversal requests, you must use the same currency that was used for the PIN debit purchase or PIN debit credit that you are reversing. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf).  Required field for PIN Debit purchase and PIN Debit credit requests. Optional field for PIN Debit reversal requests.  #### GPX This field is optional for reversing an authorization or credit.  #### DCC for First Data Your local currency. For details, see the `currency` field description in [Dynamic Currency Conversion For First Data Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/DCC_FirstData_SCMP/DCC_FirstData_SCMP_API.pdf).  #### Tax Calculation Required for international tax and value added tax only. Optional for U.S. and Canadian taxes. Your local currency. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Billing amount for the billing period. 
   * @member {String} billingAmount
   */
  exports.prototype['billingAmount'] = undefined;
  /**
   * Subscription setup fee 
   * @member {String} setupFee
   */
  exports.prototype['setupFee'] = undefined;



  return exports;
}));


