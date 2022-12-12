const Joi = require("joi");
const Validator = require("../PlatformModels");
class OrdersValidator {
  static getShipments() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      searchId: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      orderingCompanyId: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isPrioritySort: Joi.boolean(),
      excludeLockedShipments: Joi.boolean(),
      paymentMethods: Joi.string().allow(""),
      channelShipmentId: Joi.string().allow(""),
      channelOrderId: Joi.string().allow(""),
      customMeta: Joi.string().allow(""),
    }).required();
  }

  static getShipmentById() {
    return Joi.object({
      channelShipmentId: Joi.string().allow(""),
      shipmentId: Joi.string().allow(""),
      orderingCompanyId: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
    }).required();
  }

  static getOrderById() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
    }).required();
  }

  static getLaneConfig() {
    return Joi.object({
      superLane: Joi.string().allow(""),
      groupEntity: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      paymentMode: Joi.string().allow(""),
      bagStatus: Joi.string().allow(""),
    }).required();
  }

  static getOrders() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      isPrioritySort: Joi.boolean(),
      customMeta: Joi.string().allow(""),
    }).required();
  }

  static getMetricCount() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  static getfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
      groupEntity: Joi.string().allow(""),
    }).required();
  }

  static createShipmentReport() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  static getReportsShipmentListing() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static upsertJioCode() {
    return Joi.object({
      body: Validator.JioCodeUpsertPayload().required(),
    }).required();
  }

  static getBulkInvoice() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      docType: Joi.string().allow("").required(),
    }).required();
  }

  static getBulkInvoiceLabel() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  static getBulkShipmentExcelFile() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchId: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      orderingCompanyId: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      customerId: Joi.string().allow(""),
      isPrioritySort: Joi.boolean(),
    }).required();
  }

  static getBulkList() {
    return Joi.object({
      lane: Joi.string().allow(""),
      searchType: Joi.string().allow(""),
      searchId: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
      orderingCompanyId: Joi.string().allow(""),
      stores: Joi.string().allow(""),
      salesChannel: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      customerId: Joi.string().allow(""),
      isPrioritySort: Joi.boolean(),
    }).required();
  }

  static getManifestList() {
    return Joi.object({
      status: Joi.string().allow(""),
      storeId: Joi.number(),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      searchValue: Joi.string().allow(""),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  static getManifestDetailsWithShipments() {
    return Joi.object({
      manifestId: Joi.string().allow("").required(),
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
      storeId: Joi.number().required(),
      page: Joi.number(),
      pageSize: Joi.number(),
      lane: Joi.string().allow(""),
      dpIds: Joi.number(),
      searchType: Joi.string().allow(""),
      searchValue: Joi.string().allow(""),
    }).required();
  }

  static getBulkActionFailedReport() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
      reportType: Joi.string().allow(""),
    }).required();
  }

  static getShipmentReasons() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      bagId: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    }).required();
  }

  static bulkActionProcessXlsxFile() {
    return Joi.object({
      body: Validator.BulkActionPayload().required(),
    }).required();
  }

  static bulkActionDetails() {
    return Joi.object({
      batchId: Joi.string().allow("").required(),
    }).required();
  }

  static getBagById() {
    return Joi.object({
      bagId: Joi.string().allow(""),
      channelBagId: Joi.string().allow(""),
      channelId: Joi.string().allow(""),
    }).required();
  }

  static getBags() {
    return Joi.object({
      bagIds: Joi.string().allow(""),
      shipmentIds: Joi.string().allow(""),
      orderIds: Joi.string().allow(""),
      channelBagIds: Joi.string().allow(""),
      channelShipmentIds: Joi.string().allow(""),
      channelOrderIds: Joi.string().allow(""),
      channelId: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }
}
module.exports = OrdersValidator;
