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
    define(['ApiClient', 'model/CreateBillingAgreement', 'model/IntimateBillingAgreement', 'model/ModifyBillingAgreement', 'model/PtsV2CreditsPost201Response1', 'model/PtsV2PaymentsPost502Response', 'model/PtsV2PaymentsRefundPost400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateBillingAgreement'), require('../model/IntimateBillingAgreement'), require('../model/ModifyBillingAgreement'), require('../model/PtsV2CreditsPost201Response1'), require('../model/PtsV2PaymentsPost502Response'), require('../model/PtsV2PaymentsRefundPost400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.BillingAgreementsApi = factory(root.CyberSource.ApiClient, root.CyberSource.CreateBillingAgreement, root.CyberSource.IntimateBillingAgreement, root.CyberSource.ModifyBillingAgreement, root.CyberSource.PtsV2CreditsPost201Response1, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.PtsV2PaymentsRefundPost400Response);
  }
}(this, function(ApiClient, CreateBillingAgreement, IntimateBillingAgreement, ModifyBillingAgreement, PtsV2CreditsPost201Response1, PtsV2PaymentsPost502Response, PtsV2PaymentsRefundPost400Response) {
  'use strict';

  /**
   * BillingAgreements service.
   * @module api/BillingAgreementsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new BillingAgreementsApi. 
   * @alias module:api/BillingAgreementsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the billingAgreementsDeRegistration operation.
     * @callback module:api/BillingAgreementsApi~billingAgreementsDeRegistrationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2CreditsPost201Response1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Standing Instruction Cancellation or Modification
     * Standing Instruction with or without Token
     * @param {module:model/ModifyBillingAgreement} modifyBillingAgreement 
     * @param {String} id ID for de-registration or cancellation of Billing Agreement
     * @param {module:api/BillingAgreementsApi~billingAgreementsDeRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2CreditsPost201Response1}
     * 
     */
    this.billingAgreementsDeRegistration = function(modifyBillingAgreement, id, callback) {
      var postBody = modifyBillingAgreement;

      // verify the required parameter 'modifyBillingAgreement' is set
      if (modifyBillingAgreement === undefined || modifyBillingAgreement === null) {
        throw new Error("Missing the required parameter 'modifyBillingAgreement' when calling billingAgreementsDeRegistration");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling billingAgreementsDeRegistration");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/ModifyBillingAgreement', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'id': id
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
      var returnType = PtsV2CreditsPost201Response1;

      return this.apiClient.callApi(
        '/pts/v2/billing-agreements/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the billingAgreementsIntimation operation.
     * @callback module:api/BillingAgreementsApi~billingAgreementsIntimationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2CreditsPost201Response1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Standing Instruction intimation
     * Standing Instruction with or without Token.
     * @param {module:model/IntimateBillingAgreement} intimateBillingAgreement 
     * @param {String} id ID for intimation of Billing Agreement
     * @param {module:api/BillingAgreementsApi~billingAgreementsIntimationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2CreditsPost201Response1}
     * 
     */
    this.billingAgreementsIntimation = function(intimateBillingAgreement, id, callback) {
      var postBody = intimateBillingAgreement;

      // verify the required parameter 'intimateBillingAgreement' is set
      if (intimateBillingAgreement === undefined || intimateBillingAgreement === null) {
        throw new Error("Missing the required parameter 'intimateBillingAgreement' when calling billingAgreementsIntimation");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling billingAgreementsIntimation");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/IntimateBillingAgreement', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'id': id
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
      var returnType = PtsV2CreditsPost201Response1;

      return this.apiClient.callApi(
        '/pts/v2/billing-agreements/{id}/intimations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the billingAgreementsRegistration operation.
     * @callback module:api/BillingAgreementsApi~billingAgreementsRegistrationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PtsV2CreditsPost201Response1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Standing Instruction completion registration
     * Standing Instruction with or without Token. Transaction amount in case First payment is coming along with registration. Only 2 decimal places allowed
     * @param {module:model/CreateBillingAgreement} createBillingAgreement 
     * @param {module:api/BillingAgreementsApi~billingAgreementsRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PtsV2CreditsPost201Response1}
     * 
     */
    this.billingAgreementsRegistration = function(createBillingAgreement, callback) {
      var postBody = createBillingAgreement;

      // verify the required parameter 'createBillingAgreement' is set
      if (createBillingAgreement === undefined || createBillingAgreement === null) {
        throw new Error("Missing the required parameter 'createBillingAgreement' when calling billingAgreementsRegistration");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CreateBillingAgreement', this.apiClient.merchantConfig.runEnvironment);

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
      var returnType = PtsV2CreditsPost201Response1;

      return this.apiClient.callApi(
        '/pts/v2/billing-agreements', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
