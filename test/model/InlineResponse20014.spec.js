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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.InlineResponse20014();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse20014', function() {
    it('should create an instance of InlineResponse20014', function() {
      // uncomment below and update the code to test InlineResponse20014
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be.a(CyberSource.InlineResponse20014);
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property reportCreatedDate (base name: "reportCreatedDate")', function() {
      // uncomment below and update the code to test the property reportCreatedDate
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property batchId (base name: "batchId")', function() {
      // uncomment below and update the code to test the property batchId
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property batchSource (base name: "batchSource")', function() {
      // uncomment below and update the code to test the property batchSource
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property batchCaEndpoints (base name: "batchCaEndpoints")', function() {
      // uncomment below and update the code to test the property batchCaEndpoints
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property batchCreatedDate (base name: "batchCreatedDate")', function() {
      // uncomment below and update the code to test the property batchCreatedDate
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property merchantReference (base name: "merchantReference")', function() {
      // uncomment below and update the code to test the property merchantReference
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property totals (base name: "totals")', function() {
      // uncomment below and update the code to test the property totals
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property billing (base name: "billing")', function() {
      // uncomment below and update the code to test the property billing
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

    it('should have the property records (base name: "records")', function() {
      // uncomment below and update the code to test the property records
      //var instane = new CyberSource.InlineResponse20014();
      //expect(instance).to.be();
    });

  });

}));
