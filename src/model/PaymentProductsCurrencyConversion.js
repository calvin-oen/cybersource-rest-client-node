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
    define(['ApiClient', 'model/PaymentProductsCurrencyConversionConfigurationInformation', 'model/PaymentProductsPayerAuthenticationSubscriptionInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentProductsCurrencyConversionConfigurationInformation'), require('./PaymentProductsPayerAuthenticationSubscriptionInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentProductsCurrencyConversion = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentProductsCurrencyConversionConfigurationInformation, root.CyberSource.PaymentProductsPayerAuthenticationSubscriptionInformation);
  }
}(this, function(ApiClient, PaymentProductsCurrencyConversionConfigurationInformation, PaymentProductsPayerAuthenticationSubscriptionInformation) {
  'use strict';




  /**
   * The PaymentProductsCurrencyConversion model module.
   * @module model/PaymentProductsCurrencyConversion
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentProductsCurrencyConversion</code>.
   * @alias module:model/PaymentProductsCurrencyConversion
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentProductsCurrencyConversion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentProductsCurrencyConversion} obj Optional instance to populate.
   * @return {module:model/PaymentProductsCurrencyConversion} The populated <code>PaymentProductsCurrencyConversion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptionInformation')) {
        obj['subscriptionInformation'] = PaymentProductsPayerAuthenticationSubscriptionInformation.constructFromObject(data['subscriptionInformation']);
      }
      if (data.hasOwnProperty('configurationInformation')) {
        obj['configurationInformation'] = PaymentProductsCurrencyConversionConfigurationInformation.constructFromObject(data['configurationInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentProductsPayerAuthenticationSubscriptionInformation} subscriptionInformation
   */
  exports.prototype['subscriptionInformation'] = undefined;
  /**
   * @member {module:model/PaymentProductsCurrencyConversionConfigurationInformation} configurationInformation
   */
  exports.prototype['configurationInformation'] = undefined;



  return exports;
}));


