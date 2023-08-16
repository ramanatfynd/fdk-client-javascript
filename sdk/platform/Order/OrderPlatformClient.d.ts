export = Order;
declare class Order {
    constructor(config: any);
    config: any;
    /**
     * @param {OrderPlatformValidator.AttachOrderUserParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AttachOrderUserResponse>} - Success response
     * @name attachOrderUser
     * @summary:
     * @description: Attach Order User - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/attachOrderUser/).
     */
    attachOrderUser({ body }?: OrderPlatformValidator.AttachOrderUserParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.AttachOrderUserResponse>;
    /**
     * @param {OrderPlatformValidator.CheckOrderStatusParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name checkOrderStatus
     * @summary:
     * @description: Check order status - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/checkOrderStatus/).
     */
    checkOrderStatus({ body }?: OrderPlatformValidator.CheckOrderStatusParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.Click2CallParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.Click2CallResponse>} - Success response
     * @name click2Call
     * @summary:
     * @description: Click to Call - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/click2Call/).
     */
    click2Call({ caller, receiver, bagId, callerId, method }?: OrderPlatformValidator.Click2CallParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.Click2CallResponse>;
    /**
     * @param {OrderPlatformValidator.CreateChannelConfigParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateChannelConfigResponse>} -
     *   Success response
     * @name createChannelConfig
     * @summary:
     * @description: createChannelConfig - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createChannelConfig/).
     */
    createChannelConfig({ body }?: OrderPlatformValidator.CreateChannelConfigParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.CreateChannelConfigResponse>;
    /**
     * @param {OrderPlatformValidator.CreateOrderParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateOrderResponse>} - Success response
     * @name createOrder
     * @summary:
     * @description: Create Order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/createOrder/).
     */
    createOrder({ body }?: OrderPlatformValidator.CreateOrderParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.CreateOrderResponse>;
    /**
     * @param {OrderPlatformValidator.DispatchManifestParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name dispatchManifest
     * @summary:
     * @description: Dispatch Manifest - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/dispatchManifest/).
     */
    dispatchManifest({ body }?: OrderPlatformValidator.DispatchManifestParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.DownloadBulkActionTemplateParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name downloadBulkActionTemplate
     * @summary:
     * @description: Download bulk actions seller templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadBulkActionTemplate/).
     */
    downloadBulkActionTemplate({ templateSlug }?: OrderPlatformValidator.DownloadBulkActionTemplateParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.DownloadLanesReportParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkReportsDownloadResponse>} -
     *   Success response
     * @name downloadLanesReport
     * @summary:
     * @description: downloads lanes shipment/orders. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/downloadLanesReport/).
     */
    downloadLanesReport({ body }?: OrderPlatformValidator.DownloadLanesReportParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.BulkReportsDownloadResponse>;
    /**
     * @param {OrderPlatformValidator.FetchCreditBalanceDetailParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>}
     *   - Success response
     *
     * @name fetchCreditBalanceDetail
     * @summary:
     * @description: Fetch Credit Balance Detail - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchCreditBalanceDetail/).
     */
    fetchCreditBalanceDetail({ body }?: OrderPlatformValidator.FetchCreditBalanceDetailParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.FetchCreditBalanceResponsePayload>;
    /**
     * @param {OrderPlatformValidator.FetchRefundModeConfigParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RefundModeConfigResponsePayload>} -
     *   Success response
     * @name fetchRefundModeConfig
     * @summary:
     * @description: Fetch Refund Mode Config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/fetchRefundModeConfig/).
     */
    fetchRefundModeConfig({ body }?: OrderPlatformValidator.FetchRefundModeConfigParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.RefundModeConfigResponsePayload>;
    /**
     * @param {OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>} -
     *   Success response
     * @name generatePOSReceiptByOrderId
     * @summary:
     * @description: Generate POS recipt by order id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/generatePOSReceiptByOrderId/).
     */
    generatePOSReceiptByOrderId({ orderId, shipmentId, documentType }?: OrderPlatformValidator.GeneratePOSReceiptByOrderIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.GeneratePosOrderReceiptResponse>;
    /**
     * @param {OrderPlatformValidator.GetAllowedStateTransitionParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.RoleBaseStateTransitionMapping>} -
     *   Success response
     * @name getAllowedStateTransition
     * @summary: To fetch next state transitions.
     * @description: This endpoint will fetch next possible states based on logged in user
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAllowedStateTransition/).
     */
    getAllowedStateTransition({ orderingChannel, status }?: OrderPlatformValidator.GetAllowedStateTransitionParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.RoleBaseStateTransitionMapping>;
    /**
     * @param {OrderPlatformValidator.GetAnnouncementsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.AnnouncementsResponse>} - Success response
     * @name getAnnouncements
     * @summary:
     * @description: Get Announcements - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getAnnouncements/).
     */
    getAnnouncements({ date }?: OrderPlatformValidator.GetAnnouncementsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.AnnouncementsResponse>;
    /**
     * @param {OrderPlatformValidator.GetBagByIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BagDetailsPlatformResponse>} -
     *   Success response
     * @name getBagById
     * @summary:
     * @description: Get Order Bag Details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBagById/).
     */
    getBagById({ bagId, channelBagId, channelId }?: OrderPlatformValidator.GetBagByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.BagDetailsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.GetBagsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetBagsPlatformResponse>} - Success response
     * @name getBags
     * @summary:
     * @description: Get Bags for the order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBags/).
     */
    getBags({ bagIds, shipmentIds, orderIds, channelBagIds, channelShipmentIds, channelOrderIds, channelId, pageNo, pageSize, }?: OrderPlatformValidator.GetBagsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.GetBagsPlatformResponse>;
    /**
     * @param {OrderPlatformValidator.GetBulkActionTemplateParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BulkActionTemplateResponse>} -
     *   Success response
     * @name getBulkActionTemplate
     * @summary:
     * @description: Get Bulk Action seller templates. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkActionTemplate/).
     */
    getBulkActionTemplate({ headers }?: any): Promise<OrderPlatformModel.BulkActionTemplateResponse>;
    /**
     * @param {OrderPlatformValidator.GetBulkShipmentExcelFileParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FileResponse>} - Success response
     * @name getBulkShipmentExcelFile
     * @summary:
     * @description: Generate Bulk Shipment Excel Report. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getBulkShipmentExcelFile/).
     */
    getBulkShipmentExcelFile({ salesChannels, dpIds, fromDate, toDate, stores, tags, bagStatus, paymentMethods, fileType, timeToDispatch, pageNo, pageSize, }?: OrderPlatformValidator.GetBulkShipmentExcelFileParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.FileResponse>;
    /**
     * @param {OrderPlatformValidator.GetChannelConfigParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateChannelConfigData>} - Success response
     * @name getChannelConfig
     * @summary:
     * @description: getChannelConfig - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getChannelConfig/).
     */
    getChannelConfig({ headers }?: any): Promise<OrderPlatformModel.CreateChannelConfigData>;
    /**
     * @param {OrderPlatformValidator.GetLaneConfigParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.LaneConfigResponse>} - Success response
     * @name getLaneConfig
     * @summary:
     * @description: Get lane config for the order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getLaneConfig/).
     */
    getLaneConfig({ superLane, groupEntity, fromDate, toDate, dpIds, stores, salesChannels, paymentMode, bagStatus, searchType, searchValue, tags, timeToDispatch, paymentMethods, myOrders, }?: OrderPlatformValidator.GetLaneConfigParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.LaneConfigResponse>;
    /**
     * @param {OrderPlatformValidator.GetOrderByIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderDetailsResponse>} - Success response
     * @name getOrderById
     * @summary:
     * @description: Get Order Details by ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrderById/).
     */
    getOrderById({ orderId }?: OrderPlatformValidator.GetOrderByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.OrderDetailsResponse>;
    /**
     * @param {OrderPlatformValidator.GetOrdersParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderListingResponse>} - Success response
     * @name getOrders
     * @summary:
     * @description: Get Orders Listing - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getOrders/).
     */
    getOrders({ lane, searchType, bagStatus, timeToDispatch, paymentMethods, tags, searchValue, fromDate, toDate, dpIds, stores, salesChannels, pageNo, pageSize, isPrioritySort, customMeta, myOrders, customerId, }?: OrderPlatformValidator.GetOrdersParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.OrderListingResponse>;
    /**
     * @param {OrderPlatformValidator.GetRoleBasedActionsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.GetActionsResponse>} - Success response
     * @name getRoleBasedActions
     * @summary:
     * @description: Get Role Based Actions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getRoleBasedActions/).
     */
    getRoleBasedActions({ headers }?: any): Promise<OrderPlatformModel.GetActionsResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentByIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentInfoResponse>} - Success response
     * @name getShipmentById
     * @summary:
     * @description: Get shipment details for the given shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentById/).
     */
    getShipmentById({ channelShipmentId, shipmentId }?: OrderPlatformValidator.GetShipmentByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.ShipmentInfoResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentHistoryParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name getShipmentHistory
     * @summary:
     * @description: Get Shipment History - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentHistory/).
     */
    getShipmentHistory({ shipmentId, bagId }?: OrderPlatformValidator.GetShipmentHistoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentReasonsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>} -
     *   Success response
     * @name getShipmentReasons
     * @summary: Get reasons behind full or partial cancellation of a shipment
     * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipmentReasons/).
     */
    getShipmentReasons({ shipmentId, bagId, state }?: OrderPlatformValidator.GetShipmentReasonsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.PlatformShipmentReasonsResponse>;
    /**
     * @param {OrderPlatformValidator.GetShipmentsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>}
     *   - Success response
     *
     * @name getShipments
     * @summary:
     * @description: Get Shipments Listing for the company id - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getShipments/).
     */
    getShipments({ lane, bagStatus, statusOverrideLane, timeToDispatch, searchType, searchValue, fromDate, toDate, dpIds, stores, salesChannels, pageNo, pageSize, fetchActiveShipment, excludeLockedShipments, paymentMethods, channelShipmentId, channelOrderId, customMeta, orderingChannel, companyAffiliateTag, myOrders, platformUserId, tags, customerId, }?: OrderPlatformValidator.GetShipmentsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.ShipmentInternalPlatformViewResponse>;
    /**
     * @param {OrderPlatformValidator.GetStateTransitionMapParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BagStateTransitionMap>} - Success response
     * @name getStateTransitionMap
     * @summary:
     * @description: Get State Transition Map - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getStateTransitionMap/).
     */
    getStateTransitionMap({ headers }?: any): Promise<OrderPlatformModel.BagStateTransitionMap>;
    /**
     * @param {OrderPlatformValidator.GetfiltersParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.FiltersResponse>} - Success response
     * @name getfilters
     * @summary:
     * @description: Get Listing Filters - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/getfilters/).
     */
    getfilters({ view, groupEntity }?: OrderPlatformValidator.GetfiltersParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.FiltersResponse>;
    /**
     * @param {OrderPlatformValidator.InvalidateShipmentCacheParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>} -
     *   Success response
     * @name invalidateShipmentCache
     * @summary:
     * @description: Invalidate shipment Cache - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/invalidateShipmentCache/).
     */
    invalidateShipmentCache({ body }?: OrderPlatformValidator.InvalidateShipmentCacheParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.InvalidateShipmentCacheResponse>;
    /**
     * @param {OrderPlatformValidator.OrderUpdateParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ResponseDetail>} - Success response
     * @name orderUpdate
     * @summary:
     * @description: Update Order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/orderUpdate/).
     */
    orderUpdate({ body }?: OrderPlatformValidator.OrderUpdateParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.ResponseDetail>;
    /**
     * @param {OrderPlatformValidator.PostShipmentHistoryParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.ShipmentHistoryResponse>} - Success response
     * @name postShipmentHistory
     * @summary:
     * @description: Post shipment history - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/postShipmentHistory/).
     */
    postShipmentHistory({ body }?: OrderPlatformValidator.PostShipmentHistoryParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.ShipmentHistoryResponse>;
    /**
     * @param {OrderPlatformValidator.ProcessManifestParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.CreateOrderResponse>} - Success response
     * @name processManifest
     * @summary:
     * @description: Process Manifest - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/processManifest/).
     */
    processManifest({ body }?: OrderPlatformValidator.ProcessManifestParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.CreateOrderResponse>;
    /**
     * @param {OrderPlatformValidator.ReassignLocationParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.StoreReassignResponse>} - Success response
     * @name reassignLocation
     * @summary:
     * @description: Reassign Location - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/reassignLocation/).
     */
    reassignLocation({ body }?: OrderPlatformValidator.ReassignLocationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.StoreReassignResponse>;
    /**
     * @param {OrderPlatformValidator.SendSmsNinjaParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.OrderStatusResult>} - Success response
     * @name sendSmsNinja
     * @summary:
     * @description: Send SMS Ninja Panel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendSmsNinja/).
     */
    sendSmsNinja({ body }?: OrderPlatformValidator.SendSmsNinjaParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.OrderStatusResult>;
    /**
     * @param {OrderPlatformValidator.SendUserMobileOTPParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SendUserMobileOtpResponse>} - Success response
     * @name sendUserMobileOTP
     * @summary:
     * @description: Send User Mobile OTP - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/sendUserMobileOTP/).
     */
    sendUserMobileOTP({ body }?: OrderPlatformValidator.SendUserMobileOTPParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.SendUserMobileOtpResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateAddressParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.BaseResponse>} - Success response
     * @name updateAddress
     * @summary:
     * @description: Update Address for the order - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateAddress/).
     */
    updateAddress({ shipmentId, addressCategory, name, address, addressType, pincode, phone, email, landmark, city, state, country, }?: OrderPlatformValidator.UpdateAddressParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.BaseResponse>;
    /**
     * @param {OrderPlatformValidator.UpdatePackagingDimensionsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>}
     *   - Success response
     *
     * @name updatePackagingDimensions
     * @summary:
     * @description: Update Packaging Dimensions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updatePackagingDimensions/).
     */
    updatePackagingDimensions({ body }?: OrderPlatformValidator.UpdatePackagingDimensionsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.UpdatePackagingDimensionsResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentLockParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdateShipmentLockResponse>} -
     *   Success response
     * @name updateShipmentLock
     * @summary:
     * @description: update shipment/bag lock and check status - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentLock/).
     */
    updateShipmentLock({ body }?: OrderPlatformValidator.UpdateShipmentLockParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.UpdateShipmentLockResponse>;
    /**
     * @param {OrderPlatformValidator.UpdateShipmentStatusParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>}
     *   - Success response
     *
     * @name updateShipmentStatus
     * @summary:
     * @description: This API is for Shipment State transition or Shipment data update or both below example is for partial state transition with data update - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/updateShipmentStatus/).
     */
    updateShipmentStatus({ body }?: OrderPlatformValidator.UpdateShipmentStatusParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.UpdateShipmentStatusResponseBody>;
    /**
     * @param {OrderPlatformValidator.UploadConsentParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.SuccessResponse>} - Success response
     * @name uploadConsent
     * @summary:
     * @description: Upload Consent - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/uploadConsent/).
     */
    uploadConsent({ body }?: OrderPlatformValidator.UploadConsentParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.SuccessResponse>;
    /**
     * @param {OrderPlatformValidator.VerifyMobileOTPParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderPlatformModel.VerifyOtpResponse>} - Success response
     * @name verifyMobileOTP
     * @summary:
     * @description: Verify Mobile OTP - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/order/verifyMobileOTP/).
     */
    verifyMobileOTP({ body }?: OrderPlatformValidator.VerifyMobileOTPParam, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderPlatformModel.VerifyOtpResponse>;
}
import OrderPlatformValidator = require("./OrderPlatformValidator");
import OrderPlatformModel = require("./OrderPlatformModel");
