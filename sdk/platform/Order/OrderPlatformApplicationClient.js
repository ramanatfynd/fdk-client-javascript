const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const OrderValidator = require("./OrderPlatformApplicationValidator");
const OrderModel = require("./OrderPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Order {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] -
   * @param {string} [arg.searchType] -
   * @param {string} [arg.searchId] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {string} [arg.dpIds] -
   * @param {string} [arg.orderingCompanyId] -
   * @param {string} [arg.stores] -
   * @param {string} [arg.salesChannel] -
   * @param {string} [arg.requestByExt] -
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.customerId] -
   * @param {boolean} [arg.isPrioritySort] -
   * @returns {Promise<ShipmentInternalPlatformViewResponse>} - Success response
   * @summary:
   * @description:
   */
  async getApplicationShipments({
    lane,
    searchType,
    searchId,
    fromDate,
    toDate,
    dpIds,
    orderingCompanyId,
    stores,
    salesChannel,
    requestByExt,
    pageNo,
    pageSize,
    customerId,
    isPrioritySort,
  } = {}) {
    const { error } = OrderValidator.getApplicationShipments().validate(
      {
        lane,
        searchType,
        searchId,
        fromDate,
        toDate,
        dpIds,
        orderingCompanyId,
        stores,
        salesChannel,
        requestByExt,
        pageNo,
        pageSize,
        customerId,
        isPrioritySort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = OrderValidator.getApplicationShipments().validate(
      {
        lane,
        searchType,
        searchId,
        fromDate,
        toDate,
        dpIds,
        orderingCompanyId,
        stores,
        salesChannel,
        requestByExt,
        pageNo,
        pageSize,
        customerId,
        isPrioritySort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getApplicationShipments",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["lane"] = lane;
    query_params["search_type"] = searchType;
    query_params["search_id"] = searchId;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["dp_ids"] = dpIds;
    query_params["ordering_company_id"] = orderingCompanyId;
    query_params["stores"] = stores;
    query_params["sales_channel"] = salesChannel;
    query_params["request_by_ext"] = requestByExt;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["customer_id"] = customerId;
    query_params["is_priority_sort"] = isPrioritySort;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/application/${this.applicationId}/shipments`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = OrderModel.ShipmentInternalPlatformViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getApplicationShipments",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Order;
