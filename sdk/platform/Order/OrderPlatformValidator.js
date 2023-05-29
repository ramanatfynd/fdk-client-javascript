const Joi = require("joi");

const OrderModel = require("./OrderPlatformModel");
class OrderValidator {
  static createShipmentReport() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
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

  static getMetricCount() {
    return Joi.object({
      fromDate: Joi.string().allow(""),
      toDate: Joi.string().allow(""),
    }).required();
  }

  static getOrderShipmentDetails() {
    return Joi.object({
      orderId: Joi.string().allow("").required(),
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
    }).required();
  }

  static getReportsShipmentListing() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
    }).required();
  }

  static getShipmentDetails() {
    return Joi.object({
      shipmentId: Joi.string().allow("").required(),
      orderingCompanyId: Joi.string().allow(""),
      requestByExt: Joi.string().allow(""),
    }).required();
  }

  static getShipmentHistory() {
    return Joi.object({
      bagId: Joi.number().required(),
    }).required();
  }

  static getShipmentList() {
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

  static getShipmentToManifest() {
    return Joi.object({
      groupEntity: Joi.string().allow("").required(),
      salesChannel: Joi.string().allow(""),
      dpIds: Joi.string().allow(""),
    }).required();
  }

  static getfilters() {
    return Joi.object({
      view: Joi.string().allow("").required(),
    }).required();
  }

  static orderUpdate() {
    return Joi.object({
      body: OrderModel.PlatformOrderUpdate().required(),
    }).required();
  }

  static statusInternalUpdate() {
    return Joi.object({
      body: OrderModel.PlatformShipmentStatusInternal().required(),
    }).required();
  }

  static upsertJioCode() {
    return Joi.object({
      body: OrderModel.JioCodeUpsertPayload().required(),
    }).required();
  }
}

module.exports = OrderValidator;
