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
    define(['ApiClient', 'model/InlineResponse2004', 'model/InlineResponse2014', 'model/InlineResponse4042', 'model/ReplayWebhooks', 'model/SaveAsymEgressKey', 'model/UpdateWebhook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2004'), require('../model/InlineResponse2014'), require('../model/InlineResponse4042'), require('../model/ReplayWebhooks'), require('../model/SaveAsymEgressKey'), require('../model/UpdateWebhook'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ManageWebhooksApi = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2004, root.CyberSource.InlineResponse2014, root.CyberSource.InlineResponse4042, root.CyberSource.ReplayWebhooks, root.CyberSource.SaveAsymEgressKey, root.CyberSource.UpdateWebhook);
  }
}(this, function(ApiClient, InlineResponse2004, InlineResponse2014, InlineResponse4042, ReplayWebhooks, SaveAsymEgressKey, UpdateWebhook) {
  'use strict';

  /**
   * ManageWebhooks service.
   * @module api/ManageWebhooksApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ManageWebhooksApi. 
   * @alias module:api/ManageWebhooksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the deleteWebhookSubscription operation.
     * @callback module:api/ManageWebhooksApi~deleteWebhookSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Webhook Subscription
     * Delete the webhook. Please note that deleting a particular webhook does not delete the history of the webhook notifications.
     * @param {String} webhookId The webhook identifier.
     * @param {module:api/ManageWebhooksApi~deleteWebhookSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * 
     * DISCLAIMER : Cybersource may allow Customer to access, use, and/or test a Cybersource product or service that may still be in development or has not been market-tested ("Beta Product") solely for the purpose of evaluating the functionality or marketability of the Beta Product (a "Beta Evaluation"). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer's participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period ("Beta Product Form"). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer's use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. Cybersource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided "AS IS" and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.
     */
    this.deleteWebhookSubscription = function(webhookId, callback) {
      var postBody = null;
      if ('DELETE' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling deleteWebhookSubscription");
      }


      var pathParams = {
        'webhookId': webhookId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/notification-subscriptions/v1/webhooks/{webhookId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllWebhooks operation.
     * @callback module:api/ManageWebhooksApi~getAllWebhooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2004>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Details On All Created Webhooks
     * Retrieve a list of all previously created webhooks.
     * @param {String} organizationId The Organization Identifier.
     * @param {String} productId The Product Identifier.
     * @param {String} eventType The Event Type.
     * @param {module:api/ManageWebhooksApi~getAllWebhooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse2004>}
     * 
     * DISCLAIMER : Cybersource may allow Customer to access, use, and/or test a Cybersource product or service that may still be in development or has not been market-tested ("Beta Product") solely for the purpose of evaluating the functionality or marketability of the Beta Product (a "Beta Evaluation"). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer's participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period ("Beta Product Form"). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer's use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. Cybersource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided "AS IS" and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.
     */
    this.getAllWebhooks = function(organizationId, productId, eventType, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'organizationId' is set
      if (organizationId === undefined || organizationId === null) {
        throw new Error("Missing the required parameter 'organizationId' when calling getAllWebhooks");
      }

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getAllWebhooks");
      }

      // verify the required parameter 'eventType' is set
      if (eventType === undefined || eventType === null) {
        throw new Error("Missing the required parameter 'eventType' when calling getAllWebhooks");
      }


      var pathParams = {
      };
      var queryParams = {
        'organizationId': organizationId,
        'productId': productId,
        'eventType': eventType
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = [InlineResponse2004];

      return this.apiClient.callApi(
        '/notification-subscriptions/v1/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookDetails operation.
     * @callback module:api/ManageWebhooksApi~getWebhookDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Details On a Single Webhook
     * Retrieve the details of a specific webhook by supplying the webhook ID in the path.
     * @param {String} webhookId The webhook Identifier
     * @param {module:api/ManageWebhooksApi~getWebhookDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     * 
     * DISCLAIMER : Cybersource may allow Customer to access, use, and/or test a Cybersource product or service that may still be in development or has not been market-tested ("Beta Product") solely for the purpose of evaluating the functionality or marketability of the Beta Product (a "Beta Evaluation"). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer's participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period ("Beta Product Form"). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer's use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. Cybersource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided "AS IS" and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.
     */
    this.getWebhookDetails = function(webhookId, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling getWebhookDetails");
      }


      var pathParams = {
        'webhookId': webhookId
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
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/notification-subscriptions/v1/webhooks/{webhookId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replayPreviousWebhook operation.
     * @callback module:api/ManageWebhooksApi~replayPreviousWebhookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replay Previous Webhooks
     * Initiate a webhook replay request to replay transactions that happened in the past.  Cannot execute more than 1 replay request at a time. While one request is processing, you will not be allowed to execute another replay.  The difference between Start and End time cannot exceed a 24 hour window, and 1 month is the farthest date back that is eligible for replay. 
     * @param {String} webhookId The webhook uuid identifier.
     * @param {Object} opts Optional parameters
     * @param {module:model/ReplayWebhooks} opts.replayWebhooks The request query
     * @param {module:api/ManageWebhooksApi~replayPreviousWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * 
     * DISCLAIMER : Cybersource may allow Customer to access, use, and/or test a Cybersource product or service that may still be in development or has not been market-tested ("Beta Product") solely for the purpose of evaluating the functionality or marketability of the Beta Product (a "Beta Evaluation"). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer's participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period ("Beta Product Form"). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer's use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. Cybersource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided "AS IS" and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.
     */
    this.replayPreviousWebhook = function(webhookId, opts, callback) {
      opts = opts || {};
      var postBody = opts['replayWebhooks'];

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling replayPreviousWebhook");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/ReplayWebhooks', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'webhookId': webhookId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/nrtf/v1/webhooks/{webhookId}/replays', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveAsymEgressKey operation.
     * @callback module:api/ManageWebhooksApi~saveAsymEgressKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2014} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Message Level Encryption
     * Store and manage certificates that will be used to preform Message Level Encryption (MLE). Each new webhook will need its own unique asymmetric certificate. You can either use a digital certificate issued/signed by a CA or self-sign your own using the documentation available on the Developer Guide. 
     * @param {String} vCSenderOrganizationId Sender organization id
     * @param {String} vCPermissions Encoded user permissions returned by the CGK, for the entity user who initiated the boarding
     * @param {module:model/SaveAsymEgressKey} saveAsymEgressKey Provide egress Asymmetric key information to save (create or store)
     * @param {Object} opts Optional parameters
     * @param {String} opts.vCCorrelationId A globally unique id associated with your request
     * @param {module:api/ManageWebhooksApi~saveAsymEgressKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2014}
     * 
     * DISCLAIMER : Cybersource may allow Customer to access, use, and/or test a Cybersource product or service that may still be in development or has not been market-tested ("Beta Product") solely for the purpose of evaluating the functionality or marketability of the Beta Product (a "Beta Evaluation"). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer's participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period ("Beta Product Form"). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer's use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. Cybersource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided "AS IS" and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.
     */
    this.saveAsymEgressKey = function(vCSenderOrganizationId, vCPermissions, saveAsymEgressKey, opts, callback) {
      opts = opts || {};
      var postBody = saveAsymEgressKey;

      // verify the required parameter 'vCSenderOrganizationId' is set
      if (vCSenderOrganizationId === undefined || vCSenderOrganizationId === null) {
        throw new Error("Missing the required parameter 'vCSenderOrganizationId' when calling saveAsymEgressKey");
      }

      // verify the required parameter 'vCPermissions' is set
      if (vCPermissions === undefined || vCPermissions === null) {
        throw new Error("Missing the required parameter 'vCPermissions' when calling saveAsymEgressKey");
      }

      // verify the required parameter 'saveAsymEgressKey' is set
      if (saveAsymEgressKey === undefined || saveAsymEgressKey === null) {
        throw new Error("Missing the required parameter 'saveAsymEgressKey' when calling saveAsymEgressKey");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/SaveAsymEgressKey', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'v-c-correlation-id': opts['vCCorrelationId'],
        'v-c-sender-organization-id': vCSenderOrganizationId,
        'v-c-permissions': vCPermissions
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2014;

      return this.apiClient.callApi(
        '/kms/egress/v2/keys-asym', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWebhookSubscription operation.
     * @callback module:api/ManageWebhooksApi~updateWebhookSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Webhook Subscription
     * Update the webhook subscription using PATCH.
     * @param {String} webhookId The Webhook Identifier.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateWebhook} opts.updateWebhook The webhook payload or changes to apply.
     * @param {module:api/ManageWebhooksApi~updateWebhookSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * 
     * DISCLAIMER : Cybersource may allow Customer to access, use, and/or test a Cybersource product or service that may still be in development or has not been market-tested ("Beta Product") solely for the purpose of evaluating the functionality or marketability of the Beta Product (a "Beta Evaluation"). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer's participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period ("Beta Product Form"). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer's use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. Cybersource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided "AS IS" and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.
     */
    this.updateWebhookSubscription = function(webhookId, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateWebhook'];

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling updateWebhookSubscription");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/UpdateWebhook', this.apiClient.merchantConfig.runEnvironment);

      var pathParams = {
        'webhookId': webhookId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/notification-subscriptions/v1/webhooks/{webhookId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
