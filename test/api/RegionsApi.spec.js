/*
 * Ukraine Alert API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0
 * Contact: support@stfalcon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.52
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
    factory(root.expect, root.UkraineAlertApi);
  }
}(this, function(expect, UkraineAlertApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UkraineAlertApi.RegionsApi();
  });

  describe('(package)', function() {
    describe('RegionsApi', function() {
      describe('apiV3RegionsGet', function() {
        it('should call apiV3RegionsGet successfully', function(done) {
          // TODO: uncomment apiV3RegionsGet call and complete the assertions
          /*

          instance.apiV3RegionsGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(UkraineAlertApi.RegionsViewModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
