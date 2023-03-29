const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      created: Joi.boolean().required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),

      aggregators: Joi.array().items(Joi.any()),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      secret: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      is_active: Joi.boolean().allow(null),

      app_id: Joi.string().allow("").required(),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentModel.ErrorCodeAndDescription().required(),

      success: Joi.boolean().required(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      display_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      cod_limit: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_type: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      exp_year: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      exp_month: Joi.number().allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_token: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      nickname: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      card_name: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      display_priority: Joi.number().required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      add_card_enabled: Joi.boolean().allow(null),
    });
  }

  static PaymentOptions() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentModel.RootPaymentMode())
        .required(),
    });
  }

  static PaymentOptionsResponse() {
    return Joi.object({
      payment_options: PaymentModel.PaymentOptions().required(),

      success: Joi.boolean().required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unique_transfer_no: Joi.any().required(),

      is_default: Joi.boolean().required(),

      more_attributes: Joi.any().required(),

      customers: Joi.any().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      country: Joi.string().allow(""),

      pincode: Joi.number(),

      branch_name: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      state: Joi.string().allow(""),

      bank_name: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      city: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      bank_details: PaymentModel.PayoutBankDetails().required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),

      users: Joi.any().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      bank_details: Joi.any().required(),

      created: Joi.boolean().required(),

      payouts: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      payment_status: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      users: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      success: Joi.boolean().required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      config: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static BeneficiaryModeDetails() {
    return Joi.object({
      wallet: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      mobile: Joi.string().allow("").required(),

      address: Joi.string().allow(""),
    });
  }

  static AddBeneficiaryDetailsRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      otp: Joi.string().allow(""),

      delights: Joi.boolean().required(),

      shipment_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      details: PaymentModel.BeneficiaryModeDetails().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),

      message: Joi.string().allow("").required(),

      data: Joi.any(),

      success: Joi.boolean().required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      account_no: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      comment: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean(),

      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),
    });
  }

  static PaymentConfirmationMode() {
    return Joi.object({
      meta: Joi.any(),

      name: Joi.string().allow(""),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),
    });
  }

  static PaymentConfirmationRequest() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(PaymentModel.PaymentConfirmationMode())
        .required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentConfirmationResponse() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static CODdata() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      limit: Joi.number().required(),

      remaining_limit: Joi.number().required(),

      is_active: Joi.boolean().required(),

      usages: Joi.number().required(),
    });
  }

  static GetUserCODLimitResponse() {
    return Joi.object({
      user_cod_data: PaymentModel.CODdata().required(),

      success: Joi.boolean().required(),
    });
  }

  static SetCODForUserRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      merchant_user_id: Joi.string().allow("").required(),

      mobileno: Joi.string().allow("").required(),
    });
  }

  static SetCODOptionResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static RepaymentRequestDetails() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      outstanding_details_id: Joi.number().required(),

      amount: Joi.number().required(),

      aggregator_transaction_id: Joi.string().allow("").required(),

      payment_mode_identifier: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      current_status: Joi.string().allow("").required(),

      fwd_shipment_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),
    });
  }

  static RepaymentDetailsSerialiserPayAll() {
    return Joi.object({
      aggregator_order_id: Joi.string().allow("").required(),

      shipment_details: Joi.array().items(
        PaymentModel.RepaymentRequestDetails()
      ),

      aggregator_transaction_id: Joi.string().allow("").required(),

      total_amount: Joi.number().required(),

      extension_order_id: Joi.string().allow("").allow(null).required(),
    });
  }

  static RepaymentResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }

  static MerchantOnBoardingRequest() {
    return Joi.object({
      user_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      app_id: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      credit_line_id: Joi.string().allow("").required(),
    });
  }

  static MerchantOnBoardingResponse() {
    return Joi.object({
      data: Joi.any().required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
