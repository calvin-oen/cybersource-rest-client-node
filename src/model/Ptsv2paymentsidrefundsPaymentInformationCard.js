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
    root.CyberSource.Ptsv2paymentsidrefundsPaymentInformationCard = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsidrefundsPaymentInformationCard model module.
   * @module model/Ptsv2paymentsidrefundsPaymentInformationCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidrefundsPaymentInformationCard</code>.
   * @alias module:model/Ptsv2paymentsidrefundsPaymentInformationCard
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Ptsv2paymentsidrefundsPaymentInformationCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidrefundsPaymentInformationCard} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidrefundsPaymentInformationCard} The populated <code>Ptsv2paymentsidrefundsPaymentInformationCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }
      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('accountEncoderId')) {
        obj['accountEncoderId'] = ApiClient.convertToType(data['accountEncoderId'], 'String');
      }
      if (data.hasOwnProperty('issueNumber')) {
        obj['issueNumber'] = ApiClient.convertToType(data['issueNumber'], 'String');
      }
      if (data.hasOwnProperty('startMonth')) {
        obj['startMonth'] = ApiClient.convertToType(data['startMonth'], 'String');
      }
      if (data.hasOwnProperty('startYear')) {
        obj['startYear'] = ApiClient.convertToType(data['startYear'], 'String');
      }
      if (data.hasOwnProperty('sourceAccountType')) {
        obj['sourceAccountType'] = ApiClient.convertToType(data['sourceAccountType'], 'String');
      }
      if (data.hasOwnProperty('sourceAccountTypeDetails')) {
        obj['sourceAccountTypeDetails'] = ApiClient.convertToType(data['sourceAccountTypeDetails'], 'String');
      }
    }
    return obj;
  }

  /**
   * The customer’s payment card number, also known as the Primary Account Number (PAN). You can also use this field for encoded account numbers.  #### FDMS Nashville Required. String (19)  #### GPX Required if `pointOfSaleInformation.entryMode=keyed`. However, this field is optional if your account is configured for relaxed requirements for address data and expiration date. **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  #### All other processors Required if `pointOfSaleInformation.entryMode=keyed`. However, this field is optional if your account is configured for relaxed requirements for address data and expiration date. **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Two-digit month in which the payment card expires.  Format: `MM`.  Valid values: `01` through `12`. Leading 0 is required.  #### Barclays and Streamline For Maestro (UK Domestic) and Maestro (International) cards on Barclays and Streamline, this must be a valid value (`01` through `12`) but is not required to be a valid expiration date. In other words, an expiration date that is in the past does not cause CyberSource to reject your request. However, an invalid expiration date might cause the issuer to reject your request.  #### Encoded Account Numbers For encoded account numbers (_type_=039), if there is no expiration date on the card, use `12`.  #### FDMS Nashville Required field.  #### All other processors Required if `pointOfSaleInformation.entryMode=keyed`. However, this field is optional if your account is configured for relaxed requirements for address data and expiration date. **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  #### Google Pay transactions For PAN-based Google Pay transactions, this field is returned in the API response. 
   * @member {String} expirationMonth
   */
  exports.prototype['expirationMonth'] = undefined;
  /**
   * Four-digit year in which the payment card expires.  Format: `YYYY`.  #### Barclays and Streamline For Maestro (UK Domestic) and Maestro (International) cards on Barclays and Streamline, this must be a valid value (`1900` through `3000`) but is not required to be a valid expiration date. In other words, an expiration date that is in the past does not cause CyberSource to reject your request. However, an invalid expiration date might cause the issuer to reject your request.  #### Encoded Account Numbers For encoded account numbers (**_type_**`=039`), if there is no expiration date on the card, use `2021`.  #### FDMS Nashville Required field.  #### FDC Nashville Global and FDMS South You can send in 2 digits or 4 digits. If you send in 2 digits, they must be the last 2 digits of the year.  #### All other processors Required if `pointOfSaleInformation.entryMode=keyed`. However, this field is optional if your account is configured for relaxed requirements for address data and expiration date. **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  #### Google Pay transactions For PAN-based Google Pay transactions, this field is returned in the API response. 
   * @member {String} expirationYear
   */
  exports.prototype['expirationYear'] = undefined;
  /**
   * Three-digit value that indicates the card type.  **IMPORTANT** It is strongly recommended that you include the card type field in request messages even if it is optional for your processor and card type. Omitting the card type can cause the transaction to be processed with the wrong card type.  Possible values: - `001`: Visa. For card-present transactions on all processors except SIX, the Visa Electron card type is processed the same way that the Visa debit card is processed. Use card type value `001` for Visa Electron. - `002`: Mastercard, Eurocard[^1], which is a European regional brand of Mastercard. - `003`: American Express - `004`: Discover - `005`: Diners Club - `006`: Carte Blanche[^1] - `007`: JCB[^1] - `014`: Enroute[^1] - `021`: JAL[^1] - `024`: Maestro (UK Domestic)[^1] - `031`: Delta[^1]: Use this value only for Ingenico ePayments. For other processors, use `001` for all Visa card types. - `033`: Visa Electron[^1]. Use this value only for Ingenico ePayments and SIX. For other processors, use `001` for all Visa card types. - `034`: Dankort[^1] - `036`: Cartes Bancaires[^1,4] - `037`: Carta Si[^1] - `039`: Encoded account number[^1] - `040`: UATP[^1] - `042`: Maestro (International)[^1] - `050`: Hipercard[^2,3] - `051`: Aura - `054`: Elo[^3] - `062`: China UnionPay  [^1]: For this card type, you must include the `paymentInformation.card.type` or `paymentInformation.tokenizedCard.type` field in your request for an authorization or a stand-alone credit. [^2]: For this card type on Cielo 3.0, you must include the `paymentInformation.card.type` or `paymentInformation.tokenizedCard.type` field in a request for an authorization or a stand-alone credit. This card type is not supported on Cielo 1.5. [^3]: For this card type on Getnet and Rede, you must include the `paymentInformation.card.type` or `paymentInformation.tokenizedCard.type` field in a request for an authorization or a stand-alone credit. [^4]: For this card type, you must include the `paymentInformation.card.type` in your request for any payer authentication services.  #### Used by **Authorization** Required for Carte Blanche and JCB. Optional for all other card types.  #### Card Present reply This field is included in the reply message when the client software that is installed on the POS terminal uses the token management service (TMS) to retrieve tokenized payment details. You must contact customer support to have your account enabled to receive these fields in the credit reply message.  Returned by the Credit service.  This reply field is only supported by the following processors: - American Express Direct - Credit Mutuel-CIC - FDC Nashville Global - OmniPay Direct - SIX  #### Google Pay transactions For PAN-based Google Pay transactions, this field is returned in the API response.  #### GPX This field only supports transactions from the following card types: - Visa - Mastercard - AMEX - Discover - Diners - JCB - Union Pay International 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Identifier for the issuing bank that provided the customer’s encoded account number. Contact your processor for the bank’s ID. 
   * @member {String} accountEncoderId
   */
  exports.prototype['accountEncoderId'] = undefined;
  /**
   * Number of times a Maestro (UK Domestic) card has been issued to the account holder. The card might or might not have an issue number. The number can consist of one or two digits, and the first digit might be a zero. When you include this value in your request, include exactly what is printed on the card. A value of 2 is different than a value of 02. Do not include the field, even with a blank value, if the card is not a Maestro (UK Domestic) card.  **Note** The issue number is not required for Maestro (UK Domestic) transactions. 
   * @member {String} issueNumber
   */
  exports.prototype['issueNumber'] = undefined;
  /**
   * Month of the start of the Maestro (UK Domestic) card validity period. Do not include the field, even with a blank value, if the card is not a Maestro (UK Domestic) card. `Format: MM`. Possible values: 01 through 12.  **Note** The start date is not required for Maestro (UK Domestic) transactions. 
   * @member {String} startMonth
   */
  exports.prototype['startMonth'] = undefined;
  /**
   * Year of the start of the Maestro (UK Domestic) card validity period. Do not include the field, even with a blank value, if the card is not a Maestro (UK Domestic) card. `Format: YYYY`.  **Note** The start date is not required for Maestro (UK Domestic) transactions. 
   * @member {String} startYear
   */
  exports.prototype['startYear'] = undefined;
  /**
   * Flag that specifies the type of account associated with the card. The cardholder provides this information during the payment process.  This field is required in the following cases:   - Debit transactions on Cielo and Comercio Latino.   - Transactions with Brazilian-issued cards on CyberSource through VisaNet.   - Applicable only for CyberSource through VisaNet (CtV).  **Note** Combo cards in Brazil contain credit and debit functionality in a single card. Visa systems use a credit bank identification number (BIN) for this type of card. Using the BIN to determine whether a card is debit or credit can cause transactions with these cards to be processed incorrectly. CyberSource strongly recommends that you include this field for combo card transactions.  Possible values include the following.   - `CHECKING`: Checking account  - `CREDIT`: Credit card account  - `SAVING`: Saving account  - `LINE_OF_CREDIT`: Line of credit or credit portion of combo card  - `PREPAID`: Prepaid card account or prepaid portion of combo card  - `UNIVERSAL`: Universal account 
   * @member {String} sourceAccountType
   */
  exports.prototype['sourceAccountType'] = undefined;
  /**
   * Type of account that is being used when the value for the override_payment_method field is line of credit (LI) or prepaid card (PP). Possible values for line of credit: - `AGRC`: Visa Agro Custeio - `AGRE`: Visa Agro Electron - `AGRI`: Visa Agro Investimento - `AGRO`: Visa Agro Possible values for prepaid card: - `VVA`: Visa Vale Alimentacao - `VVF`: Visa Vale Flex - `VVR`: Visa Vale Refeicao This field is supported only for combo card transactions in Brazil on CyberSource through VisaNet. 
   * @member {String} sourceAccountTypeDetails
   */
  exports.prototype['sourceAccountTypeDetails'] = undefined;



  return exports;
}));


