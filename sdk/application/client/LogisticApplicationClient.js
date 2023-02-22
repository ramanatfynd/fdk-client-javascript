const APIClient = require("../ApplicationAPIClient");
const Paginator = require("../../common/Paginator");
const constructUrl = require("../constructUrl");
const { FDKClientValidationError } = require("../../common/FDKError");
const LogisticValidator = require("../models/LogisticValidator");

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getPincodeCity: "/service/application/logistics/v1.0/pincode/{pincode}",
      getTatProduct: "/service/application/logistics/v1.0/",
      upsertZoneControllerView:
        "/service/application/logistics/v1.0/pincode/zones",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.pincode - A `pincode` contains a specific address of
   *   a location.
   * @returns {Promise<PincodeApiResponse>} - Success response
   * @summary: Get Pincode API
   * @description: Get pincode data
   */
  getPincodeCity({ pincode } = {}) {
    const { error } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPincodeCity"],
        params: { pincode },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {TATViewRequest} arg.body
   * @returns {Promise<TATViewResponse>} - Success response
   * @summary: Get TAT API
   * @description: Get TAT data
   */
  getTatProduct({ body } = {}) {
    const { error } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getTatProduct"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetZoneFromPincodeViewRequest} arg.body
   * @returns {Promise<GetZoneFromPincodeViewResponse>} - Success response
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  upsertZoneControllerView({ body } = {}) {
    const { error } = LogisticValidator.upsertZoneControllerView().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["upsertZoneControllerView"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }
}

module.exports = Logistic;
