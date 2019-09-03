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
    root.CyberSource.Ptsv2payoutsProcessingInformationPayoutsOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2payoutsProcessingInformationPayoutsOptions model module.
   * @module model/Ptsv2payoutsProcessingInformationPayoutsOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2payoutsProcessingInformationPayoutsOptions</code>.
   * @alias module:model/Ptsv2payoutsProcessingInformationPayoutsOptions
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Ptsv2payoutsProcessingInformationPayoutsOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2payoutsProcessingInformationPayoutsOptions} obj Optional instance to populate.
   * @return {module:model/Ptsv2payoutsProcessingInformationPayoutsOptions} The populated <code>Ptsv2payoutsProcessingInformationPayoutsOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('acquirerMerchantId')) {
        obj['acquirerMerchantId'] = ApiClient.convertToType(data['acquirerMerchantId'], 'String');
      }
      if (data.hasOwnProperty('acquirerBin')) {
        obj['acquirerBin'] = ApiClient.convertToType(data['acquirerBin'], 'String');
      }
      if (data.hasOwnProperty('retrievalReferenceNumber')) {
        obj['retrievalReferenceNumber'] = ApiClient.convertToType(data['retrievalReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('accountFundingReferenceId')) {
        obj['accountFundingReferenceId'] = ApiClient.convertToType(data['accountFundingReferenceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * This field identifies the card acceptor for defining the point of service terminal in both local and interchange environments. An acquirer-assigned code identifying the card acceptor for the transaction.  Depending on the acquirer and merchant billing and reporting requirements, the code can represent a merchant, a specific merchant location, or a specific merchant location terminal. Acquiring Institution Identification Code uniquely identifies the merchant. The value from the original is required in any subsequent messages, including reversals, chargebacks, and representments. * Applicable only for CTV for Payouts. 
   * @member {String} acquirerMerchantId
   */
  exports.prototype['acquirerMerchantId'] = undefined;
  /**
   * This code identifies the financial institution acting as the acquirer of this customer transaction. The acquirer is the member or system user that signed the merchant or ADM or dispensed cash.  This number is usually Visa-assigned. * Applicable only for CTV for Payouts. 
   * @member {String} acquirerBin
   */
  exports.prototype['acquirerBin'] = undefined;
  /**
   * This field contains a number that is used with other data elements as a key to identify and track all messages related to a given cardholder transaction; that is, to a given transaction set.  Format:   Positions 1-4: The yddd equivalent of the date, where y = 0-9 and ddd = 001 – 366.   Positions 5-12: A unique identification number generated by the merchant  * Applicable only for CTV for Payouts. 
   * @member {String} retrievalReferenceNumber
   */
  exports.prototype['retrievalReferenceNumber'] = undefined;
  /**
   * Visa-generated transaction identifier (TID) that is unique for each original authorization and financial request. * Applicable only for CTV for Payouts. 
   * @member {String} accountFundingReferenceId
   */
  exports.prototype['accountFundingReferenceId'] = undefined;



  return exports;
}));


