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
    define(['ApiClient', 'model/InlineResponse400', 'model/InlineResponse403', 'model/InlineResponse409', 'model/InlineResponse410', 'model/InlineResponse412', 'model/InlineResponse424', 'model/InlineResponse500', 'model/PatchPaymentInstrumentRequest', 'model/PostPaymentInstrumentRequest', 'model/Tmsv2customersEmbeddedDefaultPaymentInstrument'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse400'), require('../model/InlineResponse403'), require('../model/InlineResponse409'), require('../model/InlineResponse410'), require('../model/InlineResponse412'), require('../model/InlineResponse424'), require('../model/InlineResponse500'), require('../model/PatchPaymentInstrumentRequest'), require('../model/PostPaymentInstrumentRequest'), require('../model/Tmsv2customersEmbeddedDefaultPaymentInstrument'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentInstrumentApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse400, root.CyberSource.InlineResponse403, root.CyberSource.InlineResponse409, root.CyberSource.InlineResponse410, root.CyberSource.InlineResponse412, root.CyberSource.InlineResponse424, root.CyberSource.InlineResponse500, root.CyberSource.PatchPaymentInstrumentRequest, root.CyberSource.PostPaymentInstrumentRequest, root.CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrument);
  }
}(this, function(ApiClient, InlineResponse400, InlineResponse403, InlineResponse409, InlineResponse410, InlineResponse412, InlineResponse424, InlineResponse500, PatchPaymentInstrumentRequest, PostPaymentInstrumentRequest, Tmsv2customersEmbeddedDefaultPaymentInstrument) {
  'use strict';

  /**
   * PaymentInstrument service.
   * @module api/PaymentInstrumentApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PaymentInstrumentApi. 
   * @alias module:api/PaymentInstrumentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the deletePaymentInstrument operation.
     * @callback module:api/PaymentInstrumentApi~deletePaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Payment Instrument
     * |  |  |  | | --- | --- | --- | |**Standalone Payment Instruments**&lt;br&gt;A Payment Instrument represents tokenized payment information such as expiration date, billing address &amp; card type.&lt;br&gt;A Payment Instrument token does not store the card number. A Payment Instrument is associated with an [Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier) that represents either a payment card number, or in the case of an ACH bank account, the routing and account number.&lt;br&gt;**Standalone Payment Instruments do not belong to a [Customer](#token-management_customer_create-a-customer).**|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Deleting a Payment Instrument**&lt;br&gt;Your system can use this API to delete an existing Payment Instrument.&lt;br&gt;Any Instrument Identifiers representing the card number will also be deleted if they are not associated with any other Payment Instruments. 
     * @param {String} paymentInstrumentId The Id of a payment instrument.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {module:api/PaymentInstrumentApi~deletePaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * 
     */
    this.deletePaymentInstrument = function(paymentInstrumentId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('DELETE' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'paymentInstrumentId' is set
      if (paymentInstrumentId === undefined || paymentInstrumentId === null) {
        throw new Error("Missing the required parameter 'paymentInstrumentId' when calling deletePaymentInstrument");
      }


      var pathParams = {
        'paymentInstrumentId': paymentInstrumentId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tms/v1/paymentinstruments/{paymentInstrumentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPaymentInstrument operation.
     * @callback module:api/PaymentInstrumentApi~getPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Payment Instrument
     * |  |  |  | | --- | --- | --- | |**Standalone Payment Instruments**&lt;br&gt;A Payment Instrument represents tokenized payment information such as expiration date, billing address &amp; card type.&lt;br&gt;A Payment Instrument token does not store the card number. A Payment Instrument is associated with an [Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier) that represents either a payment card number, or in the case of an ACH bank account, the routing and account number.&lt;br&gt;**Standalone Payment Instruments do not belong to a [Customer](#token-management_customer_create-a-customer).**|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Retrieving a Payment Instrument**&lt;br&gt;Your system can use this API to retrieve an existing Payment Instrument.&lt;br&gt;To perform a payment with a particular Payment Instrument simply specify the [Payment Instrument Id in the payments request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-payment-instrument-and-shipping-address-token-id_liveconsole-tab-request-body). 
     * @param {String} paymentInstrumentId The Id of a payment instrument.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {module:api/PaymentInstrumentApi~getPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument}
     * 
     */
    this.getPaymentInstrument = function(paymentInstrumentId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'paymentInstrumentId' is set
      if (paymentInstrumentId === undefined || paymentInstrumentId === null) {
        throw new Error("Missing the required parameter 'paymentInstrumentId' when calling getPaymentInstrument");
      }


      var pathParams = {
        'paymentInstrumentId': paymentInstrumentId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrument;

      return this.apiClient.callApi(
        '/tms/v1/paymentinstruments/{paymentInstrumentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchPaymentInstrument operation.
     * @callback module:api/PaymentInstrumentApi~patchPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Payment Instrument
     * |  |  |  | | --- | --- | --- | |**Standalone Payment Instruments**&lt;br&gt;A Payment Instrument represents tokenized payment information such as expiration date, billing address &amp; card type.&lt;br&gt;A Payment Instrument token does not store the card number. A Payment Instrument is associated with an [Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier) that represents either a payment card number, or in the case of an ACH bank account, the routing and account number.&lt;br&gt;**Standalone Payment Instruments do not belong to a [Customer](#token-management_customer_create-a-customer).**|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Updating a Payment Instrument**&lt;br&gt;Your system can use this API to update an existing Payment Instrument. 
     * @param {String} paymentInstrumentId The Id of a payment instrument.
     * @param {module:model/PatchPaymentInstrumentRequest} patchPaymentInstrumentRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {String} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
     * @param {module:api/PaymentInstrumentApi~patchPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument}
     * 
     */
    this.patchPaymentInstrument = function(paymentInstrumentId, patchPaymentInstrumentRequest, opts, callback) {
      opts = opts || {};
      var postBody = patchPaymentInstrumentRequest;

      // verify the required parameter 'paymentInstrumentId' is set
      if (paymentInstrumentId === undefined || paymentInstrumentId === null) {
        throw new Error("Missing the required parameter 'paymentInstrumentId' when calling patchPaymentInstrument");
      }

      // verify the required parameter 'patchPaymentInstrumentRequest' is set
      if (patchPaymentInstrumentRequest === undefined || patchPaymentInstrumentRequest === null) {
        throw new Error("Missing the required parameter 'patchPaymentInstrumentRequest' when calling patchPaymentInstrument");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/PatchPaymentInstrumentRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'paymentInstrumentId': paymentInstrumentId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId'],
        'if-match': opts['ifMatch']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrument;

      return this.apiClient.callApi(
        '/tms/v1/paymentinstruments/{paymentInstrumentId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postPaymentInstrument operation.
     * @callback module:api/PaymentInstrumentApi~postPaymentInstrumentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Payment Instrument
     * |  |  |  | | --- | --- | --- | |**Standalone Payment Instruments**&lt;br&gt;A Payment Instrument represents tokenized payment information such as expiration date, billing address &amp; card type.&lt;br&gt;A Payment Instrument token does not store the card number. A Payment Instrument is associated with an [Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier) that represents either a payment card number, or in the case of an ACH bank account, the routing and account number.&lt;br&gt;**Standalone Payment Instruments do not belong to a [Customer](#token-management_customer_create-a-customer).**&lt;br&gt;&lt;br&gt;**Creating a Payment Instrument**&lt;br&gt;It is recommended you [create a Payment Instrument via a Payment Authorization](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-customer-token-creation_liveconsole-tab-request-body), this can be for a zero amount.&lt;br&gt;In Europe: You should perform Payer Authentication alongside the Authorization.|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Payment Network Tokens**&lt;br&gt;Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.&lt;br&gt;A Payment Network Token will be automatically created and used in future payments if you are enabled for the service.&lt;br&gt;A Payment Network Token can also be [provisioned for an existing Instrument Identifier](#token-management_instrument-identifier_enroll-an-instrument-identifier-for-payment-network-token).&lt;br&gt;For more information about Payment Network Tokens see the Developer Guide.&lt;br&gt;&lt;br&gt;**Payments with Payment Instruments**&lt;br&gt;To perform a payment with a particular Payment Instrument specify the [Payment Instrument in the payment request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-payment-instrument-and-shipping-address-token-id_liveconsole-tab-request-body). 
     * @param {module:model/PostPaymentInstrumentRequest} postPaymentInstrumentRequest 
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {module:api/PaymentInstrumentApi~postPaymentInstrumentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tmsv2customersEmbeddedDefaultPaymentInstrument}
     * 
     */
    this.postPaymentInstrument = function(postPaymentInstrumentRequest, opts, callback) {
      opts = opts || {};
      var postBody = postPaymentInstrumentRequest;

      // verify the required parameter 'postPaymentInstrumentRequest' is set
      if (postPaymentInstrumentRequest === undefined || postPaymentInstrumentRequest === null) {
        throw new Error("Missing the required parameter 'postPaymentInstrumentRequest' when calling postPaymentInstrument");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/PostPaymentInstrumentRequest', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Tmsv2customersEmbeddedDefaultPaymentInstrument;

      return this.apiClient.callApi(
        '/tms/v1/paymentinstruments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
