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
    define(['ApiClient', 'model/OctCreatePaymentRequest', 'model/PtsV2PaymentsPost502Response', 'model/PtsV2PayoutsPost201Response', 'model/PtsV2PayoutsPost400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OctCreatePaymentRequest'), require('../model/PtsV2PaymentsPost502Response'), require('../model/PtsV2PayoutsPost201Response'), require('../model/PtsV2PayoutsPost400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PayoutsApi = factory(root.CyberSource.ApiClient, root.CyberSource.OctCreatePaymentRequest, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.PtsV2PayoutsPost201Response, root.CyberSource.PtsV2PayoutsPost400Response);
  }
}(this, function(ApiClient, OctCreatePaymentRequest, PtsV2PaymentsPost502Response, PtsV2PayoutsPost201Response, PtsV2PayoutsPost400Response) {
  'use strict';

  /**
   * Payouts service.
   * @module api/PayoutsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PayoutsApi. 
   * @alias module:api/PayoutsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the octCreatePayment operation.
     * @callback module:api/PayoutsApi~octCreatePaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2PayoutsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Process a Payout
     * Send funds from a selected funding source to a designated credit/debit card account or a prepaid card using an Original Credit Transaction (OCT). 
     * @param {module:model/OctCreatePaymentRequest} octCreatePaymentRequest 
     * @param {module:api/PayoutsApi~octCreatePaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2PayoutsPost201Response}
     */
    this.octCreatePayment = function(octCreatePaymentRequest, callback) {
      var postBody = octCreatePaymentRequest;

      // verify the required parameter 'octCreatePaymentRequest' is set
      if (octCreatePaymentRequest === undefined || octCreatePaymentRequest === null) {
        throw new Error("Missing the required parameter 'octCreatePaymentRequest' when calling octCreatePayment");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = PtsV2PayoutsPost201Response;

      return this.apiClient.callApi(
        '/pts/v2/payouts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
