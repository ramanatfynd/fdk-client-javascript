const Joi = require("joi");

class OrderModel {
  static OrderPage() {
    return Joi.object({
      item_total: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static BagsForReorderArticleAssignment() {
    return Joi.object({
      strategy: Joi.string().allow(""),

      level: Joi.string().allow(""),
    });
  }

  static BagsForReorder() {
    return Joi.object({
      item_size: Joi.string().allow(""),

      article_assignment: OrderModel.BagsForReorderArticleAssignment(),

      item_id: Joi.number(),

      store_id: Joi.number(),

      quantity: Joi.number(),

      seller_id: Joi.number(),
    });
  }

  static BreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static UserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ShipmentPayment() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      mop: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static TimeStampData() {
    return Joi.object({
      min: Joi.string().allow(""),

      max: Joi.string().allow(""),
    });
  }

  static Promise() {
    return Joi.object({
      show_promise: Joi.boolean(),

      timestamp: OrderModel.TimeStampData(),
    });
  }

  static NestedTrackingDetails() {
    return Joi.object({
      is_passed: Joi.boolean(),

      status: Joi.string().allow(""),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),
    });
  }

  static TrackingDetails() {
    return Joi.object({
      tracking_details: Joi.array().items(OrderModel.NestedTrackingDetails()),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      status: Joi.string().allow(""),
    });
  }

  static ShipmentTotalDetails() {
    return Joi.object({
      pieces: Joi.number(),

      sizes: Joi.number(),

      total_price: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      value_of_good: Joi.number(),

      cod_charges: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid: Joi.number(),

      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),

      added_to_fynd_cash: Joi.boolean(),

      coupon_value: Joi.number(),

      gst_tax_percentage: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      coupon_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      fynd_credits: Joi.number(),

      discount: Joi.number(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      name: Joi.string().allow(""),

      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static FulfillingCompany() {
    return Joi.object({
      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static DeliveryAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      longitude: Joi.number(),

      created_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      name: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow(""),

      hex_code: Joi.string().allow(""),
    });
  }

  static Invoice() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static ItemBrand() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      code: Joi.string().allow(""),

      brand: OrderModel.ItemBrand(),

      size: Joi.string().allow(""),
    });
  }

  static AppliedFreeArticles() {
    return Joi.object({
      free_gift_item_details: Joi.any(),

      article_id: Joi.string().allow(""),

      parent_item_identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      applied_free_articles: Joi.array().items(
        OrderModel.AppliedFreeArticles()
      ),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static Identifiers() {
    return Joi.object({
      ean: Joi.string().allow(""),

      sku_code: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      total_units: Joi.number(),

      value_of_good: Joi.number(),

      cod_charges: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid: Joi.number(),

      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),

      item_name: Joi.string().allow(""),

      added_to_fynd_cash: Joi.boolean(),

      coupon_value: Joi.number(),

      gst_tax_percentage: Joi.number(),

      promotion_effective_discount: Joi.number(),

      identifiers: OrderModel.Identifiers(),

      refund_credit: Joi.number(),

      coupon_effective_discount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      fynd_credits: Joi.number(),

      discount: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      size: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      journey_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      item: OrderModel.Item(),

      delivery_date: Joi.string().allow(""),

      returnable_date: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      seller_identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      financial_breakup: Joi.array().items(OrderModel.FinancialBreakup()),

      can_cancel: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      parent_promo_bags: Joi.any(),

      line_number: Joi.number(),

      id: Joi.number(),

      can_return: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static ShipmentUserInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static Shipments() {
    return Joi.object({
      track_url: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      show_track_link: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      payment: OrderModel.ShipmentPayment(),

      comment: Joi.string().allow(""),

      promise: OrderModel.Promise(),

      tracking_details: Joi.array().items(OrderModel.TrackingDetails()),

      returnable_date: Joi.string().allow(""),

      total_details: OrderModel.ShipmentTotalDetails(),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.FulfillingStore(),

      can_cancel: Joi.boolean(),

      refund_details: Joi.any(),

      need_help_url: Joi.string().allow(""),

      fulfilling_company: OrderModel.FulfillingCompany(),

      delivery_address: OrderModel.DeliveryAddress(),

      shipment_status: OrderModel.ShipmentStatus(),

      size_info: Joi.any(),

      awb_no: Joi.string().allow(""),

      beneficiary_details: Joi.boolean(),

      invoice: OrderModel.Invoice(),

      delivery_date: Joi.string().allow(""),

      total_bags: Joi.number(),

      shipment_created_at: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      can_break: Joi.any(),

      dp_name: Joi.string().allow(""),

      traking_no: Joi.string().allow(""),

      show_download_invoice: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      user_info: OrderModel.ShipmentUserInfo(),

      order_type: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      can_return: Joi.boolean(),
    });
  }

  static OrderSchema() {
    return Joi.object({
      bags_for_reorder: Joi.array().items(OrderModel.BagsForReorder()),

      total_shipments_in_order: Joi.number(),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.BreakupValues()),

      user_info: OrderModel.UserInfo(),

      shipments: Joi.array().items(OrderModel.Shipments()),
    });
  }

  static OrderStatuses() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.number(),

      is_selected: Joi.boolean(),
    });
  }

  static OrderFilters() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.OrderStatuses()),
    });
  }

  static OrderList() {
    return Joi.object({
      page: OrderModel.OrderPage(),

      items: Joi.array().items(OrderModel.OrderSchema()),

      filters: OrderModel.OrderFilters(),
    });
  }

  static ApefaceApiError() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OrderById() {
    return Joi.object({
      order: OrderModel.OrderSchema(),
    });
  }

  static ShipmentById() {
    return Joi.object({
      shipment: OrderModel.Shipments(),
    });
  }

  static ResponseGetInvoiceShipment() {
    return Joi.object({
      presigned_type: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      presigned_url: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static Track() {
    return Joi.object({
      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static ShipmentTrack() {
    return Joi.object({
      results: Joi.array().items(OrderModel.Track()),
    });
  }

  static CustomerDetailsResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static SendOtpToCustomerResponse() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      resend_timer: Joi.number(),
    });
  }

  static VerifyOtp() {
    return Joi.object({
      request_id: Joi.string().allow(""),

      otp_code: Joi.string().allow(""),
    });
  }

  static VerifyOtpResponse() {
    return Joi.object({
      success: Joi.boolean(),
    });
  }

  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  static BagReasons() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      reasons: Joi.array().items(OrderModel.BagReasons()),

      meta: OrderModel.BagReasonMeta(),

      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static ShipmentBagReasons() {
    return Joi.object({
      success: Joi.boolean(),

      reasons: Joi.array().items(OrderModel.BagReasons()),
    });
  }

  static ShipmentReason() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      feedback_type: Joi.string().allow(""),

      flow: Joi.string().allow(""),

      priority: Joi.number(),

      reason_id: Joi.number(),

      show_text_area: Joi.boolean(),
    });
  }

  static ShipmentReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.ShipmentReason()),
    });
  }

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsDataUpdatesFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
    });
  }

  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static DataUpdates() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsDataUpdates()),

      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
    });
  }

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      data: OrderModel.ProductsReasonsData(),

      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),
    });
  }

  static EntityReasonData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static EntitiesReasons() {
    return Joi.object({
      data: OrderModel.EntityReasonData(),

      filters: Joi.array().items(Joi.any()),
    });
  }

  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons()),

      entities: Joi.array().items(OrderModel.EntitiesReasons()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static StatusesBodyResponse() {
    return Joi.object({
      shipments: Joi.array().items(Joi.any()),
    });
  }

  static ShipmentApplicationStatusResponse() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatusesBodyResponse()),
    });
  }

  static ErrorResponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number(),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").allow(null),
    });
  }
}
module.exports = OrderModel;
