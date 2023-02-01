export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    common: Common;
    lead: Lead;
    billing: Billing;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    companyProfile: CompanyProfile;
    fileStorage: FileStorage;
    inventory: Inventory;
    configuration: Configuration;
    analytics: Analytics;
    discount: Discount;
    webhook: Webhook;
    auditTrail: AuditTrail;
    serviceability: Serviceability;
    documentEngine: DocumentEngine;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, GSTDetailsData, PlatformItem, Prices, BagUnit, UserDataInfo, PaymentModeInfo, ShipmentStatus, ShipmentItemFulFillingStore, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, ShipmentPayments, OrderDetailsData, ShipmentStatusData, UserDetailsData, BagConfigs, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, Identifier, FinancialBreakup, OrderBagArticle, PlatformDeliveryAddress, BagGST, OrderBrandName, OrderBags, TrackingList, BagStateMapper, BagStatusHistory, FulfillingStore, DPDetailsData, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Dates, ArticleDetails, BagReturnableCancelableStatus, StoreAddress, StoreEwaybill, StoreEinvoice, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, Store, AffiliateMeta, AffiliateBagDetails, PDFLinks, BuyerDetails, LockData, ShipmentTimeStamp, DebugInfo, EInvoice, EinvoiceInfo, Formatted, ShipmentMeta, AffiliateDetails, Attributes, Item, Dimensions, ReturnConfig, Weight, Article, BagGSTDetails, B2BPODetails, BagMeta, Brand, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, MarketPlacePdf, AffiliateBag, OrderUser, OrderPriority, UserData, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, PaymentMethod, PaymentInfo, LineItem, ProcessingDates, Shipment, TaxInfo, ShippingInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, Media1, CollectionQuery, BannerImage, ImageUrls, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, SeoDetail, UserInfo, CollectionImage, CollectionSchedule, CollectionBanner, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Image, Logo, ProductPublished, Product, ProductListingResponse, TeaserTag, Trader, CustomOrder, TaxIdentifier, NetQuantity, ProductPublish, ProductCreateUpdate, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, WeightResponse, BrandMeta, PriceMeta, Trader1, ManufacturerResponse, CompanyMeta, QuantityBase, Quantities, DimensionResponse, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, LocationIntegrationType, UserSerializer1, LocationTimingSerializer, LocationDayWiseSerializer, GetAddressSerializer, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, ContactDetails, Website, BusinessDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponAction, Validation, DisplayMetaDict, DisplayMeta, UsesRemaining, UsesRestriction, PriceRange, BulkBundleRestriction, PostOrder, PaymentAllowValue, PaymentModes, Restrictions, CouponAuthor, CouponDateMeta, CouponSchedule, State, Validity, Rule, Ownership, RuleDefinition, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, UsesRemaining1, UsesRestriction1, UserRegistered, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionDateMeta, Ownership1, PromotionAuthor, Visibility, PromotionAction, DisplayMeta1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, LoyaltyPoints, RawBreakup, CouponBreakup, DisplayBreakup, CartBreakup, ProductPrice, ProductPriceInfo, CartProductIdentifer, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, ActionQuery, ProductAction, Tags, ProductImage, BaseInfo, CategoryInfo, CartProduct, CouponDetails, PromoMeta, ProductAvailability, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ServiceabilityrErrorResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_Error, EntityRegionView_Items, EntityRegionView_page, EntityRegionView_Response, ListViewProduct, ListViewChannels, ListViewItems, ListViewSummary, ZoneDataItem, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, CreatedByResponse, DocumentsResponse, IntegrationTypeResponse, ContactNumberResponse, ProductReturnConfigResponse, Dp, LogisticsResponse, ModifiedByResponse, EinvoiceResponse, EwayBillResponse, GstCredentialsResponse, MobileNo, ManagerResponse, WarningsResponse, OpeningClosing, TimmingResponse, AddressResponse, ItemResponse, GetStoresViewResponse, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody };
}
import Common = require("./client/CommonPlatformClient");
import Lead = require("./client/LeadPlatformClient");
import Billing = require("./client/BillingPlatformClient");
import Communication = require("./client/CommunicationPlatformClient");
import Payment = require("./client/PaymentPlatformClient");
import Order = require("./client/OrderPlatformClient");
import Catalog = require("./client/CatalogPlatformClient");
import CompanyProfile = require("./client/CompanyProfilePlatformClient");
import FileStorage = require("./client/FileStoragePlatformClient");
import Inventory = require("./client/InventoryPlatformClient");
import Configuration = require("./client/ConfigurationPlatformClient");
import Analytics = require("./client/AnalyticsPlatformClient");
import Discount = require("./client/DiscountPlatformClient");
import Webhook = require("./client/WebhookPlatformClient");
import AuditTrail = require("./client/AuditTrailPlatformClient");
import Serviceability = require("./client/ServiceabilityPlatformClient");
import DocumentEngine = require("./client/DocumentEnginePlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
type ApplicationResponse = {
    application?: Application;
};
type Currency = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type Domain = {
    verified?: boolean;
    is_primary?: boolean;
    is_shortlink?: boolean;
    _id?: string;
    name?: string;
    is_predefined?: boolean;
};
type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
type ApplicationCors = {
    domains?: string[];
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationRedirections = {
    redirect_from?: string;
    redirect_to?: string;
    type?: string;
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type SecureUrl = {
    secure_url?: string;
};
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    description?: string;
    channel_type?: string;
    cache_ttl?: number;
    is_internal?: boolean;
    is_active?: boolean;
    _id?: string;
    name?: string;
    owner?: string;
    company_id?: number;
    token?: string;
    redirections?: ApplicationRedirections[];
    meta?: ApplicationMeta[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Domain[];
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
};
type NotFound = {
    message?: string;
};
type BadRequest = {
    message?: string;
};
type LocationDefaultLanguage = {
    name?: string;
    code?: string;
};
type LocationDefaultCurrency = {
    name?: string;
    symbol?: string;
    code?: string;
};
type LocationCountry = {
    capital?: string;
    currency?: string;
    iso2?: string;
    iso3?: string;
    name?: string;
    parent?: string;
    phone_code?: string;
    type?: string;
    uid?: number;
    __v?: number;
    _id?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
};
type Locations = {
    items?: any[];
};
type TicketList = {
    items?: Ticket[];
    filters?: Filter;
    page?: Page;
};
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
type TicketHistoryList = {
    items?: TicketHistory[];
    page?: Page;
};
type CustomFormList = {
    items?: CustomForm[];
    page?: Page;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: any[];
    description?: string;
    header_image?: string;
    priority: any;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: any[];
    description?: string;
    priority: any;
    header_image?: string;
    should_notify?: boolean;
    login_required?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    sub_category?: string;
    source?: string;
    status?: string;
    priority?: any;
    assigned_to?: AgentChangePayload;
    tags?: string[];
};
type AgentChangePayload = {
    agent_id: string;
};
type CreateVideoRoomResponse = {
    unique_name: string;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CreateVideoRoomPayload = {
    unique_name: string;
    notify?: NotifyUser[];
};
type NotifyUser = {
    country_code: string;
    phone_number: string;
};
type Filter = {
    priorities: Priority[];
    categories?: TicketCategory[];
    statuses: Status[];
    assignees: any[];
};
type TicketHistoryPayload = {
    value: any;
    type: any;
};
type CustomFormSubmissionPayload = {
    response: any[];
    attachments?: TicketAsset[];
};
type GetTokenForVideoRoomResponse = {
    access_token: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Participant[];
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
};
type Email = {
    primary?: boolean;
    verified?: boolean;
    email?: string;
    active?: boolean;
};
type Debug = {
    source?: string;
    platform?: string;
};
type SubmitCustomFormResponse = {
    message: string;
    ticket: Ticket;
};
type TicketContext = {
    application_id?: string;
    company_id: string;
};
type CreatedOn = {
    user_agent: string;
};
type TicketAsset = {
    display?: string;
    value: string;
    type: any;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: TicketAsset[];
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: any;
    category: string;
    content: TicketContent;
    _custom_json?: any;
};
type Priority = {
    key: any;
    display: string;
    color: string;
};
type Status = {
    key: string;
    display: string;
    color: string;
};
type TicketFeedbackForm = {
    title: string;
    display?: any[];
};
type TicketFeedbackList = {
    items?: TicketFeedback[];
};
type TicketFeedbackPayload = {
    form_response?: any;
};
type SubmitButton = {
    title: string;
    title_color: string;
    background_color: string;
};
type PollForAssignment = {
    duration: number;
    message: string;
    success_message: string;
    failure_message: string;
};
type CustomForm = {
    application_id: string;
    slug: string;
    header_image?: string;
    title: string;
    description?: string;
    priority: Priority;
    login_required: boolean;
    should_notify: boolean;
    success_message?: string;
    submit_button?: SubmitButton;
    inputs: any[];
    created_on?: CreatedOn;
    poll_for_assignment?: PollForAssignment;
    _id: string;
};
type CommunicationDetails = {
    type?: string;
    title?: string;
    value?: string;
    description?: string;
    enabled?: boolean;
};
type SupportGeneralConfig = {
    _id?: string;
    support_email?: CommunicationDetails;
    support_phone?: CommunicationDetails;
    support_faq?: CommunicationDetails;
    show_communication_info?: boolean;
    support_communication?: CommunicationDetails;
    show_support_dris?: boolean;
    integration?: any;
};
type FeedbackForm = {
    inputs?: any;
    title?: string;
    timestamps?: any;
};
type TicketSubCategory = {
    key: string;
    display: string;
    sub_categories?: TicketSubCategory;
};
type TicketCategory = {
    display: string;
    key: string;
    sub_categories?: TicketCategory;
    group_id?: number;
    feedback_form?: FeedbackForm;
};
type CategoryData = {
    list?: TicketCategory;
};
type IntegrationConfig = {
    _id?: string;
    integration_type: string;
    base_url?: string;
    create_ticket_apikey?: string;
    update_ticket_apikey?: string;
    category_sync_apikey?: string;
    category_data?: CategoryData;
    webhook_apikey?: string;
    config_completed?: boolean;
    allow_ticket_creation: boolean;
    show_listing: boolean;
};
type FeedbackResponseItem = {
    display: string;
    key: string;
    value: string;
};
type TicketFeedback = {
    _id: string;
    ticket_id: string;
    company_id: string;
    response: FeedbackResponseItem[];
    category?: string;
    user?: any;
    updated_at?: string;
    created_at?: string;
};
type TicketHistory = {
    type: string;
    value: any;
    ticket_id: string;
    created_on?: CreatedOn;
    created_by?: any;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type Ticket = {
    context?: TicketContext;
    created_on?: CreatedOn;
    response_id?: string;
    content?: TicketContent;
    category: string;
    sub_category?: string;
    source: any;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: string[];
    _custom_json?: any;
    is_feedback_pending?: boolean;
    integration?: any;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type AvailablePageSchema = {
    value?: string;
    text?: string;
    path?: string;
    type?: string;
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    theme?: string;
    seo?: AvailablePageSeo;
    props?: any[];
    _id?: string;
};
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
type AvailablePageSeo = {
    title?: string;
    description?: string;
    _id?: string;
};
type AvailablePageSchemaSections = {
    name?: string;
    label?: string;
    props?: any;
    blocks?: any[];
    preset?: any;
    predicate?: AvailablePagePredicate;
};
type AvailablePageScreenPredicate = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type AvailablePageUserPredicate = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type AvailablePageRoutePredicate = {
    selected?: string;
    exact_url?: string;
    query?: any;
};
type AvailablePagePredicate = {
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    route?: AvailablePageRoutePredicate;
};
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
type PaginationSchema = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: ThemesSchema[];
    page?: PaginationSchema;
};
type AddThemeRequestSchema = {
    theme_id?: string;
};
type UpgradableThemeSchema = {
    parent_theme?: string;
    applied_theme?: string;
    upgrade?: boolean;
};
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegNotFoundSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type FontsSchemaItems = {
    family?: string;
    variants?: string[];
    subsets?: string[];
    version?: string;
    last_modified?: string;
    files?: FontsSchemaItemsFiles;
    category?: string;
    kind?: string;
};
type FontsSchemaItemsFiles = {
    regular?: string;
    italic?: string;
    bold?: string;
};
type ThemesSchema = {
    application?: string;
    applied?: boolean;
    customized?: boolean;
    published?: boolean;
    archived?: boolean;
    created_at?: string;
    updated_at?: string;
    version?: string;
    parent_theme_version?: string;
    parent_theme?: string;
    information?: Information;
    tags?: string[];
    src?: Src;
    assets?: AssetsSchema;
    available_sections?: availableSectionSchema[];
    styles?: any;
    config?: Config;
    font?: Font;
    _id?: string;
    __v?: number;
    colors?: Colors;
};
type availableSectionSchema = {
    blocks?: Blocks[];
    name?: string;
    label?: string;
    props?: BlocksProps[];
};
type Information = {
    images?: Images;
    features?: string[];
    name?: string;
    description?: string;
};
type Images = {
    desktop?: string[];
    android?: string[];
    ios?: string[];
    thumbnail?: string[];
};
type Src = {
    link?: string;
};
type AssetsSchema = {
    umd_js?: UmdJs;
    common_js?: CommonJs;
    css?: Css;
};
type UmdJs = {
    link?: string;
    links?: string[];
};
type CommonJs = {
    link?: string;
};
type Css = {
    link?: string;
    links?: string[];
};
type Sections = {
    attributes?: string;
};
type Config = {
    preset?: Preset;
    global_schema?: GlobalSchema;
    current?: string;
    list?: ListSchemaItem[];
};
type Preset = {
    pages?: AvailablePageSchema[];
};
type GlobalSchema = {
    props?: GlobalSchemaProps[];
};
type ListSchemaItem = {
    global_config?: any;
    page?: ConfigPage[];
    name?: string;
};
type Colors = {
    bg_color?: string;
    primary_color?: string;
    secondary_color?: string;
    accent_color?: string;
    link_color?: string;
    button_secondary_color?: string;
};
type Custom = {
    props?: any;
};
type ConfigPage = {
    settings?: any;
    page?: string;
};
type Font = {
    family?: string;
    variants?: Variants;
};
type Variants = {
    medium?: Medium;
    semi_bold?: SemiBold;
    bold?: Bold;
    light?: Light;
    regular?: Regular;
};
type Medium = {
    name?: string;
    file?: string;
};
type SemiBold = {
    name?: string;
    file?: string;
};
type Bold = {
    name?: string;
    file?: string;
};
type Light = {
    name?: string;
    file?: string;
};
type Regular = {
    name?: string;
    file?: string;
};
type Blocks = {
    type?: string;
    name?: string;
    props?: BlocksProps[];
};
type GlobalSchemaProps = {
    id?: string;
    label?: string;
    type?: string;
    category?: string;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type BlockUserRequestSchema = {
    status?: boolean;
    user_id?: string[];
    reason?: string;
};
type ArchiveUserRequestSchema = {
    user_id?: string;
};
type DeleteApplicationUserRequestSchema = {
    user_id?: string;
    reason?: string;
    reason_id?: string;
    request_id?: string;
    otp?: string;
};
type UnDeleteUserRequestSchema = {
    user_id?: string;
    reason?: string;
    reason_id?: string;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    first_name?: string;
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    country_code?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profile_pic_url?: string;
    android_hash?: string;
    sender?: string;
    register_token?: string;
};
type EditProfileMobileSchema = {
    phone?: string;
    country_code?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    register_token?: string;
};
type VerifyEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    register_token?: string;
    otp?: string;
};
type VerifyOtpRequestSchema = {
    request_id?: string;
    register_token?: string;
    otp?: string;
};
type SendMobileOtpRequestSchema = {
    mobile?: string;
    country_code?: string;
    action?: string;
    token?: string;
    android_hash?: string;
    force?: string;
    captcha_code?: string;
};
type UpdatePasswordRequestSchema = {
    old_password?: string;
    new_password?: string;
};
type FormRegisterRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
};
type TokenRequestBodySchema = {
    token?: string;
};
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
type CodeRequestBodySchema = {
    code?: string;
};
type SendResetPasswordEmailRequestSchema = {
    email?: string;
    captcha_code?: string;
};
type SendResetPasswordMobileRequestSchema = {
    country_code?: string;
    mobile?: string;
    captcha_code?: string;
};
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    country_code?: string;
    captcha_code?: string;
    mobile?: string;
};
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type OAuthRequestAppleSchema = {
    user_identifier?: string;
    oauth?: OAuthRequestAppleSchemaOauth;
    profile?: OAuthRequestAppleSchemaProfile;
};
type UserObjectSchema = {
    user?: UserSchema;
};
type AuthSuccess = {
    register_token?: string;
    user_exists?: boolean;
    user?: UserSchema;
};
type SendOtpResponse = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    email?: string;
    resend_email_token?: string;
    register_token?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type ProfileEditSuccess = {
    user?: UserSchema;
    register_token?: string;
    resend_email_token?: string;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    email?: string;
    request_id?: string;
    country_code?: string;
    mobile?: string;
    success?: boolean;
    message?: string;
    resend_timer?: number;
    resend_token?: string;
};
type LoginSuccess = {
    user?: UserSchema;
    request_id?: string;
    register_token?: string;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    user_exists?: boolean;
    register_token?: string;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    email?: string;
    resend_timer?: number;
    resend_token?: string;
    resend_email_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type VerifyEmailSuccess = {
    message?: string;
};
type HasPasswordSuccess = {
    result?: boolean;
};
type LogoutSuccess = {
    logout?: boolean;
};
type BlockUserSuccess = {
    success?: boolean;
};
type ArchiveUserSuccess = {
    success?: boolean;
};
type DeleteUserSuccess = {
    success?: boolean;
};
type UnDeleteUserSuccess = {
    success?: boolean;
};
type OtpSuccess = {
    resend_timer?: number;
    resend_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
};
type EmailOtpSuccess = {
    success?: boolean;
};
type SessionListSuccess = {
    sessions?: string[];
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
};
type UserSearchResponseSchema = {
    users?: UserSchema[];
};
type CustomerListResponseSchema = {
    items?: UserSchema[];
    page?: PaginationSchema;
};
type SessionListResponseSchema = {
    items?: string[];
};
type SessionDeleteResponseSchema = {
    items?: string[];
};
type UnauthorizedSchema = {
    message?: string;
};
type UnauthenticatedSchema = {
    authenticated?: boolean;
};
type NotFoundSchema = {
    message?: string;
};
type AuthenticationInternalServerErrorSchema = {
    message?: string;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type ProfileEditSuccessSchema = {
    email?: string;
    verify_email_otp?: boolean;
    verify_email_link?: boolean;
    verify_mobile_otp?: boolean;
    user?: string;
    register_token?: string;
    user_exists?: boolean;
};
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
type OAuthRequestSchemaOauth2 = {
    access_token?: string;
    expiry?: number;
    refresh_token?: string;
};
type OAuthRequestSchemaProfile = {
    last_name?: string;
    image?: string;
    id?: string;
    email?: string;
    full_name?: string;
    first_name?: string;
};
type OAuthRequestAppleSchemaOauth = {
    identity_token?: string;
};
type OAuthRequestAppleSchemaProfile = {
    last_name?: string;
    full_name?: string;
    first_name?: string;
};
type AuthSuccessUser = {
    first_name?: string;
    last_name?: string;
    debug?: AuthSuccessUserDebug;
    active?: boolean;
    emails?: AuthSuccessUserEmails;
};
type AuthSuccessUserDebug = {
    platform?: string;
};
type AuthSuccessUserEmails = {
    email?: string;
    verified?: boolean;
    primary?: boolean;
    active?: boolean;
};
type CreateUserRequestSchema = {
    phone_number: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    username: string;
    meta?: any;
};
type CreateUserResponseSchema = {
    user?: UserSchema;
};
type CreateUserSessionRequestSchema = {
    domain?: string;
    max_age?: number;
    user_id?: string;
};
type CreateUserSessionResponseSchema = {
    domain?: string;
    max_age?: number;
    secure?: boolean;
    http_only?: boolean;
    cookie?: any;
};
type PlatformSchema = {
    display?: string;
    look_and_feel?: LookAndFeel;
    updated_at?: string;
    active?: boolean;
    forgot_password?: boolean;
    login?: Login;
    skip_captcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    _id?: string;
    social?: Social;
    required_fields?: RequiredFields;
    register_required_fields?: RegisterRequiredFields;
    skip_login?: boolean;
    flash_card?: FlashCard;
    subtext?: string;
    social_tokens?: SocialTokens;
    created_at?: string;
    register?: boolean;
    mobile_image?: string;
    desktop_image?: string;
    delete_account_day?: number;
    delete_account_reasons?: DeleteAccountReasons[];
    delete_account_consent?: any;
};
type LookAndFeel = {
    card_position?: string;
    background_color?: string;
};
type Login = {
    password?: boolean;
    otp?: boolean;
};
type MetaSchema = {
    fynd_default?: boolean;
};
type Social = {
    account_kit?: boolean;
    facebook?: boolean;
    google?: boolean;
    apple?: boolean;
};
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
type PlatformEmail = {
    is_required?: boolean;
    level?: string;
};
type PlatformMobile = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
type RegisterRequiredFieldsEmail = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFieldsMobile = {
    is_required?: boolean;
    level?: string;
};
type FlashCard = {
    text?: string;
    text_color?: string;
    background_color?: string;
};
type SocialTokens = {
    facebook?: Facebook;
    account_kit?: Accountkit;
    google?: Google;
};
type DeleteAccountReasons = {
    reason_text?: string;
    reason_id?: string;
    show_text_area?: boolean;
};
type DeleteAccountConsent = {
    consent_text?: string;
};
type Facebook = {
    app_id?: string;
};
type Accountkit = {
    app_id?: string;
};
type Google = {
    app_id?: string;
};
type UpdateUserRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    external_id?: string;
    meta?: any;
};
type UserSchema = {
    application_id?: string;
    user_id?: string;
    first_name?: string;
    meta?: any;
    last_name?: string;
    phone_numbers?: PhoneNumber[];
    emails?: Email[];
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    debug?: Debug;
    has_old_password_hash?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: number;
};
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    returns?: string;
    faq?: ApplicationLegalFAQ[];
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
type PathMappingSchema = {
    application?: string;
    _id?: string;
    redirect_from?: string;
    redirect_to?: string;
    updated_at?: string;
    created_at?: string;
    __source?: TagSourceSchema;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SeoSchema = {
    app?: string;
    _id?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    custom_meta_tags?: any[];
    details?: Detail;
    created_at?: string;
    updated_at?: string;
};
type CustomMetaTag = {
    name?: string;
    content?: string;
    _id?: string;
};
type Detail = {
    title?: string;
    description?: string;
};
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
type EditorMeta = {
    foreground_color?: string;
    background_color?: string;
    content_type?: string;
    content?: string;
};
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
type AdminAnnouncementSchema = {
    _id?: string;
    platforms?: string[];
    title?: string;
    announcement?: string;
    pages?: AnnouncementPageSchema[];
    editor_meta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    app?: string;
    modified_at?: string;
    _schedule?: ScheduleSchema;
};
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
type ScheduleStartSchema = {
    start?: string;
    end?: string;
};
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
type BlogSchema = {
    _id?: string;
    _custom_json?: any;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    seo?: SEO;
    _schedule?: CronSchedule;
    title?: string;
    date_meta?: DateMeta;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SEOImage = {
    url?: string;
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type BlogRequest = {
    application?: string;
    _custom_json?: any;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    title?: string;
    seo?: SEO;
    _schedule?: CronSchedule;
};
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type DataLoaderResponseSchema = {
    application?: string;
    company?: string;
    _id?: string;
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
};
type DataLoaderResetResponseSchema = {
    reset?: string;
};
type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationReference;
};
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    en_us?: Language;
};
type Language = {
    display?: string;
};
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
type ActionPage = {
    params?: any;
    query?: any;
    url?: string;
    type: any;
};
type NavigationReference = {
    acl?: string[];
    tags?: string[];
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: SubNavigationReference[];
};
type SubNavigationReference = {
    acl?: string[];
    tags?: string[];
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference[];
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type ConfigurationSchema = {
    sleep_time?: number;
    start_on_launch?: boolean;
    duration?: number;
    slide_direction?: string;
};
type SlideshowMedia = {
    type?: string;
    url?: string;
    bg_color?: string;
    duration?: number;
    auto_decide_duration?: boolean;
    action?: Action;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refresh_rate?: number;
    refresh_pages?: string[];
};
type FaqResponseSchema = {
    faqs?: FaqSchema[];
};
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
type HandpickedTagSchema = {
    position?: string;
    attributes?: any;
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    content?: string;
};
type RemoveHandpickedSchema = {
    tags?: string[];
};
type CreateTagSchema = {
    name?: string;
    sub_type?: string;
    _id?: string;
    type?: string;
    url?: string;
    position?: string;
    attributes?: any;
    pages?: any[];
    content?: string;
};
type CreateTagRequestSchema = {
    tags?: CreateTagSchema[];
};
type DataLoaderSchema = {
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
    _id?: string;
};
type DataLoaderSourceSchema = {
    type?: string;
    id?: string;
};
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
type TagDeleteSuccessResponse = {
    success?: boolean;
};
type ContentAPIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: any;
};
type CommonError = {
    message?: string;
};
type CategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: string[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    _id?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type FAQCategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: ChildrenSchema[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type FaqSchema = {
    slug?: string;
    application?: string;
    _id?: string;
    question?: string;
    answer?: string;
    tags?: string[];
};
type FAQ = {
    slug?: string;
    question?: string;
    answer?: string;
};
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
type CreateFaqSchema = {
    faq?: FAQ;
};
type GetFaqSchema = {
    faqs?: FaqSchema[];
};
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
type GetFaqCategoriesSchema = {
    categories?: CategorySchema[];
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type LandingPageGetResponse = {
    items?: LandingPageSchema[];
    page?: Page;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
};
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
};
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
type Orientation = {
    portrait?: string[];
    landscape?: string[];
};
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference[];
};
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: string[];
    orientation?: Orientation;
    navigation?: NavigationReference[];
};
type CustomPageSchema = {
    _id?: string;
    platform?: string;
    title?: string;
    slug?: string;
    type?: string;
    orientation?: string;
    application?: string;
    description?: string;
    published?: boolean;
    tags?: string[];
    content?: any[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: any;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type FeatureImage = {
    secure_url?: string;
};
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
type PageSpec = {
    specifications?: any[];
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PageSpecItem = {
    page_type?: string;
    display_name?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
type PageSchema = {
    _id?: string;
    application?: string;
    component_ids?: string[];
    content?: any[];
    content_path?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    page_meta?: any[];
    _schedule?: ScheduleSchema;
    _custom_json?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
    archived?: boolean;
};
type CreatedBySchema = {
    id?: string;
};
type PageContent = {
    type?: string;
    value?: any;
};
type PageMeta = {
    key?: string;
    value?: any;
};
type PageRequest = {
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    _custom_json?: any;
    orientation?: string;
    content?: any[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    seo?: SEO;
    title?: string;
};
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
type PagePublishRequest = {
    publish?: boolean;
};
type PageMetaSchema = {
    system_pages?: NavigationSchema[];
    custom_pages?: PageSchema[];
    application_id?: string;
};
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
type SlideshowSchema = {
    _id?: string;
    slug?: string;
    date_meta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia[];
    active?: boolean;
    archived?: boolean;
    _custom_json?: any;
};
type SlideshowRequest = {
    slug?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
    active?: boolean;
};
type Support = {
    created?: boolean;
    _id?: string;
    config_type?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    contact?: ContactSchema;
};
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: EmailProperties[];
};
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
type TagsSchema = {
    application?: string;
    _id?: string;
    tags?: TagSchema[];
};
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    _id?: string;
    position?: string;
    attributes?: any;
    content?: string;
    pages?: any[];
    __source?: TagSourceSchema;
};
type TagSourceSchema = {
    type?: string;
    id?: string;
};
type UnauthenticatedUser = {
    message?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type ResourceNotFound = {
    message?: string;
};
type InternalServerError = {
    message?: string;
    code?: string;
};
type CheckValidityResponse = {
    is_valid?: boolean;
    discount_amount?: number;
};
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type DetailedPlanComponents = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    enabled?: boolean;
    display_text?: string;
};
type DetailedPlan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
    components?: DetailedPlanComponents[];
};
type SubscriptionTrialPeriod = {
    start_date?: string;
    end_date?: string;
};
type EntityChargePrice = {
    amount: number;
    currency_code: string;
};
type EntityChargeRecurring = {
    interval: string;
};
type ChargeLineItem = {
    name: string;
    term: string;
    pricing_type: string;
    price: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    trial_days?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateSubscriptionCharge = {
    name: string;
    trial_days?: number;
    line_items: ChargeLineItem[];
    is_test?: boolean;
    return_url: string;
};
type CurrentPeriod = {
    start_date?: string;
    end_date?: string;
};
type SubscriptionCharge = {
    _id?: string;
    name?: string;
    term?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    activated_on?: string;
    cancelled_on?: string;
    billing_date?: string;
    current_period?: CurrentPeriod;
    status?: string;
    is_test?: boolean;
    metadata?: any;
};
type EntitySubscription = {
    _id?: string;
    name?: string;
    status?: string;
    company_id?: number;
    activated_on?: string;
    cancelled_on?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
    metadata?: any;
    line_items?: SubscriptionCharge[];
};
type CreateSubscriptionResponse = {
    subscription?: EntitySubscription;
    confirm_url?: string;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    address_lines?: string[];
    name?: string;
    email?: string;
    phone?: string;
};
type InvoiceDetailsStatusTrail = {
    _id?: string;
    value?: string;
    timestamp?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    cvc_check?: string;
    address_line1_check?: string;
    address_postal_code_check?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: string[];
    preferred?: string;
};
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    last4?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    wallet?: string;
    country?: string;
    funding?: string;
    exp_year?: number;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    exp_month?: number;
    fingerprint?: string;
    generated_from?: string;
    three_d_secure_usage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
};
type InvoiceDetailsPaymentMethods = {
    id?: number;
    type?: string;
    pg_payment_method_id?: string;
    data?: InvoiceDetailsPaymentMethodsData;
    is_default?: boolean;
};
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    _id?: string;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicePaymentMethod;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceItems = {
    _id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unit_amount?: number;
    amount?: number;
    type?: string;
    invoice_id?: string;
    created_at?: string;
    modified_at?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: InvoiceItems[];
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    address_lines?: string[];
};
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoicesData = {
    _id?: string;
    client?: InvoicesDataClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    period?: InvoicesDataPeriod;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicesDataPaymentMethod;
    invoice_items?: InvoiceItems[];
};
type Invoices = {
    data?: InvoicesData[];
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
type Phone = {
    phone_number?: string;
    phone_country_code?: string;
};
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
};
type SubscriptionCustomer = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    _id?: string;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
    created_at?: string;
    modified_at?: string;
    data?: any;
};
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
};
type SubscriptionCurrentPeriod = {
    start?: string;
    end?: string;
};
type SubscriptionPauseCollection = {
    behavior?: string;
    resume_at?: string;
};
type SubscriptionTrial = {
    start?: string;
    end?: string;
};
type SubscriptionInvoiceSettings = {
    generation?: boolean;
    charging?: boolean;
};
type Subscription = {
    current_period?: SubscriptionCurrentPeriod;
    pause_collection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    cancel_at_period_end?: boolean;
    _id?: string;
    subscriber_id?: string;
    plan_id?: string;
    product_suite_id?: string;
    plan_data?: Plan;
    current_status?: string;
    collection_method?: string;
    created_at?: string;
    modified_at?: string;
    latest_invoice?: string;
};
type SubscriptionStatus = {
    is_enabled?: boolean;
    subscription?: Subscription;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
};
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
type SubscriptionLimitTeam = {
    limit?: number;
};
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    marketplace?: SubscriptionLimitMarketplace;
    other_platform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
};
type SubscriptionActivateReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    plan_id?: string;
    payment_method?: string;
};
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
type CancelSubscriptionReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    subscription_id?: string;
};
type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
};
type StatsImported = {
    count?: number;
};
type StatsProcessedEmail = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessedSms = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
type Stats = {
    _id?: string;
    imported?: any;
    processed?: any;
};
type GetStats = {
    items?: Stats[];
};
type CampaignReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type RecipientHeaders = {
    email?: string;
};
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
type CampignEmailProvider = {
    _id?: string;
    from_name?: string;
    from_email?: string;
};
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
type Campaign = {
    recipient_headers?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: any[];
    is_active?: boolean;
    _id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Campaigns = {
    items?: Campaign[];
    page?: Page;
};
type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
type BigqueryHeadersResHeaders = {
    name?: string;
    type?: string;
};
type BigqueryHeadersRes = {
    headers?: BigqueryHeadersResHeaders[];
};
type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
type GetNRecordsCsvResItems = {
    phone_number?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
};
type GetNRecordsCsvRes = {
    items?: GetNRecordsCsvResItems[];
};
type AudienceReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    _id?: string;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Audiences = {
    items?: Audience[];
    page?: Page;
};
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    is_default?: boolean;
};
type EmailProviderReq = {
    name?: string;
    description?: string;
    api_key?: string;
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
    _id?: string;
    name?: string;
    description?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailProviders = {
    items?: EmailProvider[];
    page?: Page;
};
type EmailTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateKeys = {
    to?: string;
    cc?: string;
    bcc?: string;
};
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
type EmailTemplateReq = {
    name?: string;
    description?: string;
    keys?: EmailTemplateKeys;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
    priority?: string;
};
type TemplateAndType = {
    template_type?: string;
    template?: string;
};
type EmailTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemEmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EmailTemplates = {
    items?: EmailTemplate[];
    page?: Page;
};
type SystemEmailTemplates = {
    items?: SystemEmailTemplate[];
    page?: Page;
};
type PayloadEmailTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadEmailProviderStructure = {
    _id?: string;
};
type PayloadEmailStructure = {
    template?: PayloadEmailTemplateStructure;
    provider?: PayloadEmailProviderStructure;
};
type PayloadSmsTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadSmsProviderStructure = {
    _id?: string;
};
type PayloadSmsStructure = {
    template?: PayloadSmsTemplateStructure;
    provider?: PayloadSmsProviderStructure;
};
type PayloadStructure = {
    data?: any[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
    application?: string;
};
type MetaStructure = {
    job_type?: string;
    action?: string;
    trace?: string;
    timestamp?: string;
};
type EngineRequest = {
    payload?: PayloadStructure;
    meta?: MetaStructure;
};
type EngineResponse = {
    success?: boolean;
};
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplate = {
    sms?: EventSubscriptionTemplateSms;
    email?: EventSubscriptionTemplateEmail;
};
type EventSubscription = {
    template?: EventSubscriptionTemplate;
    is_default?: boolean;
    _id?: string;
    application?: string;
    event?: string;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EventSubscriptions = {
    items?: EventSubscription[];
    page?: Page;
};
type TriggerJobResponse = {
    status?: number;
};
type TriggerJobRequest = {
    job_id?: string;
};
type Job = {
    completed?: boolean;
    is_active?: boolean;
    _id?: string;
    campaign?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Jobs = {
    items?: Job[];
    page?: Page;
};
type JobLog = {
    imported?: any;
    processed?: any;
    _id?: string;
    job?: string;
    campaign?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type JobLogs = {
    items?: JobLog[];
    page?: Page;
};
type LogEmail = {
    template?: string;
};
type LogPushnotification = {
    pushtokens?: string[];
};
type LogMeta = {
    type?: string;
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
};
type Log = {
    email?: LogEmail;
    pushnotification?: LogPushnotification;
    meta?: LogMeta;
    _id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expire_at?: string;
    created_at?: string;
};
type Logs = {
    items?: Log[];
    page?: Page;
};
type SendOtpSmsCommsTemplate = {
    key?: string;
    value?: string;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: string;
};
type SendOtpCommsReqData = {
    send_same_otp_to_channel?: boolean;
    mobile?: string;
    country_code?: string;
    to?: string;
};
type SendOtpCommsReqSms = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpSmsCommsTemplate;
};
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpSmsCommsTemplate;
};
type SendOtpCommsResSms = {
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    resend_timer?: number;
};
type SendOtpCommsResEmail = {
    success?: boolean;
    request_id?: string;
    message?: string;
    to?: string;
    resend_timer?: number;
};
type SendOtpCommsReq = {
    data?: SendOtpCommsReqData;
    sms?: SendOtpCommsReqSms;
    email?: SendOtpCommsReqEmail;
};
type SendOtpCommsRes = {
    sms?: SendOtpCommsResSms;
    email?: SendOtpCommsResEmail;
};
type VerifyOtpCommsReq = {
    request_id?: string;
    otp?: string;
};
type VerifyOtpCommsSuccessRes = {
    success?: boolean;
    mobile?: string;
    country_code?: string;
    message?: string;
};
type VerifyOtpCommsErrorRes = {
    success?: boolean;
    message?: string;
};
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
};
type PushtokenRes = {
    _id?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
    platform?: string;
    application_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    expired_at?: string;
};
type SmsProviderReq = {
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    type?: string;
    provider?: string;
};
type SmsProvider = {
    rpt?: number;
    type?: string;
    provider?: string;
    _id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsProviders = {
    items?: SmsProvider[];
    page?: Page;
};
type SmsTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateMessage = {
    template_type?: string;
    template?: string;
};
type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    attachments?: any[];
    priority?: string;
};
type SmsTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    priority?: string;
    tags?: any[];
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemSmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SmsTemplates = {
    items?: SmsTemplate[];
    page?: Page;
};
type SystemSmsTemplates = {
    items?: SystemSmsTemplate[];
    page?: Page;
};
type Notification = {
    title?: string;
    body?: string;
    subtitle?: string;
    icon?: string;
    deeplink?: string;
    click_action?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemNotificationSettings = {
    sound?: boolean;
    priority?: string;
    time_to_live?: string;
};
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationUser;
    _id?: string;
    group?: string;
    created_at?: string;
};
type SystemNotificationsPage = {
    type?: string;
    current?: number;
    size?: number;
    item_total?: number;
    has_next?: boolean;
};
type SystemNotifications = {
    items?: SystemNotification[];
    last_read_anchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    aggregators?: any[];
    success: boolean;
    created: boolean;
    display_fields: string[];
    excluded_fields: string[];
    app_id: string;
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    config_type: string;
    is_active?: boolean;
    secret: string;
    key: string;
    merchant_salt: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
};
type PaymentGatewayToBeReviewed = {
    aggregator: string[];
    success: boolean;
};
type ErrorCodeAndDescription = {
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    display_name?: string;
    logos?: PaymentModeLogo;
    package_name?: string;
    code?: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_fingerprint?: string;
    aggregator_name: string;
    nickname?: string;
    timeout?: number;
    card_token?: string;
    card_brand_image?: string;
    expired?: boolean;
    code?: string;
    intent_app?: IntentApp[];
    display_priority?: number;
    card_reference?: string;
    card_id?: string;
    card_issuer?: string;
    fynd_vpa?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    intent_app_error_list?: string[];
    name?: string;
    card_number?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    logo_url?: PaymentModeLogo;
    card_type?: string;
    cod_limit?: number;
    card_isin?: string;
    intent_flow?: boolean;
    remaining_limit?: number;
    card_brand?: string;
    exp_month?: number;
    display_name?: string;
    exp_year?: number;
    cod_limit_per_order?: number;
    card_name?: string;
    retry_count?: number;
    merchant_code?: string;
};
type RootPaymentMode = {
    aggregator_name?: string;
    display_name: string;
    add_card_enabled?: boolean;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    name: string;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    display_priority: number;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    unique_transfer_no: any;
    customers: any;
    is_active: boolean;
    more_attributes: any;
    payouts_aggregators: any[];
    is_default: boolean;
    transfer_type: string;
};
type PayoutBankDetails = {
    account_type: string;
    city?: string;
    state?: string;
    pincode?: number;
    bank_name?: string;
    country?: string;
    account_holder?: string;
    branch_name?: string;
    ifsc_code: string;
    account_no?: string;
};
type PayoutRequest = {
    aggregator: string;
    is_active: boolean;
    bank_details: PayoutBankDetails;
    users: any;
    transfer_type: string;
    unique_external_id: string;
};
type PayoutResponse = {
    unique_transfer_no: string;
    aggregator: string;
    success: boolean;
    payment_status: string;
    is_active: boolean;
    created: boolean;
    payouts: any;
    bank_details: any;
    users: any;
    transfer_type: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
};
type UpdatePayoutRequest = {
    is_default: boolean;
    is_active: boolean;
    unique_external_id: string;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    data: any[];
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    aggregator: string;
    success: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    message: string;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    bank_name: string;
    account_holder: string;
    branch_name: string;
    ifsc_code: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    branch_name: string;
    bank_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    title: string;
    beneficiary_id: string;
    mobile?: string;
    address: string;
    branch_name?: string;
    subtitle: string;
    modified_on: string;
    id: number;
    comment?: string;
    transfer_mode: string;
    created_on: string;
    is_active: boolean;
    account_holder: string;
    delights_user_name?: string;
    display_name: string;
    bank_name: string;
    email: string;
    ifsc_code: string;
    account_no: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_id?: string;
    payment_gateway?: string;
    current_status?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    mode: string;
    amount: number;
    name?: string;
    meta?: MultiTenderPaymentMeta;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    order_id: string;
    message: string;
    success: boolean;
};
type CODdata = {
    usages: number;
    remaining_limit: number;
    limit: number;
    is_active: boolean;
    user_id: string;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    merchant_user_id: string;
    mobileno: string;
    is_active: boolean;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type GSTDetailsData = {
    value_of_good: number;
    gst_fee: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gstin_code: string;
};
type PlatformItem = {
    department_id?: number;
    l1_category?: string[];
    color?: string;
    code?: string;
    l3_category_name?: string;
    images?: string[];
    size?: string;
    id?: number;
    image?: string[];
    can_return?: boolean;
    name?: string;
    l3_category?: number;
    can_cancel?: boolean;
};
type Prices = {
    price_effective?: number;
    fynd_credits?: number;
    refund_amount?: number;
    promotion_effective_discount?: number;
    cod_charges?: number;
    amount_paid?: number;
    coupon_value?: number;
    discount?: number;
    delivery_charge?: number;
    cashback?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    tax_collected_at_source?: number;
    price_marked?: number;
    cashback_applied?: number;
    refund_credit?: number;
};
type BagUnit = {
    bag_id: number;
    gst?: GSTDetailsData;
    item?: PlatformItem;
    status: any;
    total_shipment_bags: number;
    ordering_channel: string;
    item_quantity: number;
    can_return?: boolean;
    shipment_id: string;
    prices?: Prices;
    can_cancel?: boolean;
};
type UserDataInfo = {
    first_name?: string;
    avis_user_id?: string;
    uid?: number;
    last_name?: string;
    email?: string;
    is_anonymous_user?: boolean;
    gender?: string;
    mobile?: string;
    name?: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentStatus = {
    hex_code: string;
    status: string;
    title: string;
    ops_status: string;
    actual_status: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    total_shipments_in_order: number;
    fulfilling_centre: string;
    shipment_created_at: number;
    sla?: any;
    total_bags_count: number;
    bags?: BagUnit[];
    id: string;
    payment_methods?: any;
    user?: UserDataInfo;
    application?: any;
    payment_mode_info?: PaymentModeInfo;
    created_at: string;
    prices?: Prices;
    shipment_status?: ShipmentStatus;
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
};
type FilterInfoOption = {
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    type: string;
    options?: FilterInfoOption[];
    text: string;
    value: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    page?: any;
    filters?: FiltersInfo[];
    applied_filters?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type ShipmentPayments = {
    mode: string;
    logo?: string;
    source?: string;
};
type OrderDetailsData = {
    fynd_order_id: string;
    tax_details?: any;
    order_date?: string;
    cod_charges?: string;
    ordering_channel_logo?: any;
    order_value?: string;
    source?: string;
    ordering_channel?: string;
    affiliate_id?: string;
};
type ShipmentStatusData = {
    status?: string;
    id?: number;
    shipment_id?: string;
    bag_list?: number[];
    created_at?: string;
};
type UserDetailsData = {
    city: string;
    address: string;
    country: string;
    pincode: string;
    email: string;
    phone: string;
    name: string;
    state: string;
};
type BagConfigs = {
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
    allow_force_return: boolean;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type AppliedPromos = {
    buy_rules?: BuyRules[];
    promotion_name?: string;
    promo_id?: string;
    promotion_type?: string;
    amount?: number;
    article_quantity?: number;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    price_effective: number;
    promotion_effective_discount: number;
    discount: number;
    pm_price_split: any;
    cashback: number;
    amount_paid_roundoff?: number;
    gst_fee: string;
    tax_collected_at_source?: number;
    item_name: string;
    cashback_applied: number;
    fynd_credits: number;
    cod_charges: number;
    price_marked: number;
    added_to_fynd_cash: boolean;
    identifiers: Identifier;
    delivery_charge: number;
    refund_credit: number;
    total_units: number;
    gst_tag: string;
    amount_paid: number;
    gst_tax_percentage: number;
    coupon_value: number;
    size: string;
    hsn_code: string;
    value_of_good: number;
    transfer_price: number;
    brand_calculated_amount: number;
    coupon_effective_discount: number;
};
type OrderBagArticle = {
    return_config?: any;
    uid?: string;
    identifiers?: any;
};
type PlatformDeliveryAddress = {
    city?: string;
    address2?: string;
    address_type?: string;
    address_category?: string;
    area?: string;
    country?: string;
    latitude?: number;
    contact_person?: string;
    pincode?: string;
    address1?: string;
    email?: string;
    phone?: string;
    landmark?: string;
    longitude?: number;
    updated_at?: string;
    version?: string;
    created_at?: string;
    state?: string;
};
type BagGST = {
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
    hsn_code?: string;
    value_of_good?: number;
    gst_fee?: number;
    brand_calculated_amount?: number;
    gstin_code?: string;
};
type OrderBrandName = {
    created_on: number;
    brand_name: string;
    id: number;
    modified_on?: number;
    logo: string;
    company: string;
};
type OrderBags = {
    bag_configs?: BagConfigs;
    identifier?: string;
    quantity?: number;
    parent_promo_bags?: any;
    applied_promos?: AppliedPromos[];
    current_status?: string;
    entity_type?: string;
    line_number?: number;
    can_return?: boolean;
    bag_id: number;
    item?: PlatformItem;
    display_name?: string;
    financial_breakup?: FinancialBreakup[];
    article?: OrderBagArticle;
    delivery_address?: PlatformDeliveryAddress;
    prices?: Prices;
    gst_details?: BagGST;
    can_cancel?: boolean;
    seller_identifier?: string;
    brand?: OrderBrandName;
};
type TrackingList = {
    status: string;
    text: string;
    is_current?: boolean;
    is_passed?: boolean;
    time?: string;
};
type BagStateMapper = {
    state_type: string;
    app_state_name?: string;
    journey_type: string;
    display_name: string;
    notify_customer?: boolean;
    app_display_name?: string;
    bs_id: number;
    app_facing?: boolean;
    is_active?: boolean;
    name: string;
};
type BagStatusHistory = {
    created_at: string;
    bag_id: number;
    state_id: number;
    store_id: number;
    reasons?: any[];
    status: string;
    forward?: boolean;
    delivery_partner_id?: number;
    state_type?: string;
    bag_state_mapper: BagStateMapper;
    updated_at?: string;
    display_name?: boolean;
    app_display_name?: boolean;
    delivery_awb_number?: string;
    shipment_id: string;
    bsh_id: number;
    kafka_sync?: boolean;
};
type FulfillingStore = {
    city: string;
    meta: any;
    code: string;
    address: string;
    country: string;
    contact_person: string;
    id: string;
    pincode: string;
    phone: string;
    fulfillment_channel: string;
    store_name: string;
    state: string;
};
type DPDetailsData = {
    gst_tag?: string;
    track_url?: string;
    eway_bill_id?: string;
    country?: string;
    id?: string;
    pincode?: string;
    name?: string;
    awb_no?: string;
};
type ShipmentInfoResponse = {
    refund_details?: any;
    order_type: string;
    priority_text?: string;
    can_break: string;
    child_nodes?: string[];
    secured_delivery_flag?: string;
    payments?: ShipmentPayments;
    total_items?: number;
    journey_type?: string;
    delivery_status: any[];
    order?: OrderDetailsData;
    lock_status: string;
    is_invoiced: boolean;
    bank_data?: any;
    affiliate_shipment_id: string;
    platform_logo: boolean;
    company: any;
    invoice: any;
    escalation?: any;
    shipment_images?: string[];
    go_green?: boolean;
    forward_shipment_status?: any[];
    email_id: string;
    status?: ShipmentStatusData;
    current_shipment_status: any;
    mid?: string;
    can_return?: boolean;
    ordering_store: any;
    due_date?: string;
    shipment_quantity?: number;
    is_fynd_coupon: boolean;
    shipment_status?: string;
    beneficiary_details?: boolean;
    forward_tracking_list?: any[];
    packaging_type?: string;
    vertical?: string;
    total_bags?: number;
    delivery_details?: UserDetailsData;
    credit_note_id: string;
    order_status: any;
    refund_text?: string;
    bags?: OrderBags[];
    enable_dp_tracking?: string;
    is_pdsr?: string;
    items: any[];
    tracking_list?: TrackingList[];
    bag_status_history?: BagStatusHistory[];
    delivery_slot?: any;
    operational_status?: string;
    prices?: Prices;
    order_created_time?: string;
    tracking_url: string;
    user_info?: any;
    fulfilling_store?: FulfillingStore;
    is_fynd_store?: string;
    gst_details?: GSTDetailsData;
    is_packaging_order: boolean;
    can_cancel?: boolean;
    dp_details?: DPDetailsData;
    kirana_store_id?: string;
    pay_button?: string;
    forward_order_status?: any[];
    billing_details?: UserDetailsData;
    picked_date?: string;
    enable_tracking?: boolean;
    user_agent?: string;
    replacement_details?: string;
    fyndstore_emp: any;
    user_id: string;
    is_not_fynd_source: boolean;
    status_progress: number;
    coupon?: any;
    shipment_id: string;
    payment_mode?: string;
    custom_meta?: any[];
};
type OrderDict = {
    fynd_order_id: string;
    shipment_count: number;
    order_date: string;
};
type PlatformShipment = {
    priority_text?: string;
    payments?: ShipmentPayments;
    total_items?: number;
    journey_type?: string;
    order?: OrderDetailsData;
    platform_logo?: string;
    shipment_images?: string[];
    status?: ShipmentStatusData;
    shipment_quantity?: number;
    shipment_status?: string;
    packaging_type?: string;
    vertical?: string;
    total_bags?: number;
    delivery_details?: UserDetailsData;
    bags?: OrderBags[];
    enable_dp_tracking?: string;
    tracking_list?: TrackingList[];
    bag_status_history?: BagStatusHistory[];
    delivery_slot?: any;
    operational_status?: string;
    prices?: Prices;
    fulfilling_store?: FulfillingStore;
    gst_details?: GSTDetailsData;
    dp_details?: DPDetailsData;
    billing_details?: UserDetailsData;
    picked_date?: string;
    user_agent?: string;
    coupon?: any;
    shipment_id: string;
    payment_mode?: string;
    custom_meta?: any[];
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    success: boolean;
    shipments?: PlatformShipment[];
    custom_meta?: any[];
};
type SubLane = {
    total_items?: number;
    text?: string;
    actions?: any[];
    index?: number;
    value?: string;
};
type SuperLane = {
    options?: SubLane[];
    total_items?: number;
    text: string;
    value: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    display?: string;
    name?: string;
    value?: string;
};
type PlatformOrderItems = {
    meta?: any;
    order_id?: string;
    total_order_value?: number;
    shipments?: PlatformShipment[];
    order_value?: number;
    user_info?: UserDataInfo;
    payment_mode?: string;
    order_created_time?: string;
    channel?: PlatformChannel;
    breakup_values?: PlatformBreakupValues[];
};
type OrderListingResponse = {
    message?: string;
    total_count?: number;
    lane?: string;
    items?: PlatformOrderItems[];
    page?: Page;
    success?: boolean;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    options?: Options[];
    text: string;
    key: string;
    value: number;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    last_location_recieved_at?: string;
    meta?: any;
    raw_status?: string;
    account_name?: string;
    status?: string;
    awb?: string;
    reason?: string;
    updated_at?: string;
    shipment_type?: string;
    updated_time?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_name?: string;
    status?: string;
    report_type?: string;
    report_id?: string;
    s3_key?: string;
    request_details?: any;
    report_requested_at?: string;
    display_name?: string;
    report_created_at?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    item_id?: string;
    article_id?: string;
    jio_code?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    type?: string;
    message?: string;
    value?: string;
};
type JioCodeUpsertResponse = {
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    data?: any[];
    success?: boolean;
    identifier?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    store_code?: string;
    store_id?: string;
    label?: any;
    invoice_status?: string;
    company_id?: string;
    data?: any;
    store_name?: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
    batch_id: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    file_name?: string;
    size?: number;
    namespace?: string;
    upload?: FileUploadResponse;
    content_type?: string;
    file_path?: string;
    method?: string;
    cdn?: URL;
    operation?: string;
    tags?: string[];
};
type bulkListingData = {
    store_code?: string;
    failed_shipments?: any[];
    successful_shipments?: any[];
    id?: string;
    failed?: number;
    batch_id?: string;
    total?: number;
    store_id?: number;
    status?: string;
    file_name?: string;
    processing_shipments?: string[];
    successful?: number;
    user_name?: string;
    company_id?: number;
    store_name?: string;
    processing?: number;
    excel_url?: string;
    user_id?: string;
    uploaded_on?: string;
};
type BulkListingPage = {
    type?: string;
    total?: number;
    has_next?: boolean;
    current?: number;
    size?: number;
    has_previous?: boolean;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    success?: boolean;
    page?: BulkListingPage;
    error?: string;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    sales_channels?: string;
    dp_name?: string;
    lane?: string;
    sales_channel_name?: string;
    dp_ids?: string;
    date_range?: DateRange;
    stores?: string;
    store_name?: string;
};
type GeneratedManifestItem = {
    status?: string;
    manifest_id?: string;
    company_id?: number;
    created_at?: string;
    is_active?: boolean;
    filters?: ManifestFilter;
    created_by?: string;
};
type ManifestPage = {
    total?: number;
    type?: string;
    has_next?: boolean;
    current?: string;
    size?: string;
    has_previous?: boolean;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
};
type ManifestDetailItem = {
    order_id?: string;
    awb?: string;
    invoice_id?: string;
    item_qty?: number;
    shipment_id?: string;
};
type ManifestDetailTotalShipmentPricesCount = {
    shipment_count?: number;
    total_price?: number;
};
type ManifestDetailMeta = {
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
    filters?: ManifestFilter;
};
type ManifestDetail = {
    meta?: ManifestDetailMeta;
    status?: string;
    manifest_id?: string;
    uid?: number;
    id?: number;
    company_id?: number;
    user_id?: number;
    created_at?: string;
    is_active?: boolean;
    filters?: ManifestFilter;
    created_by?: string;
};
type ManifestDetailResponse = {
    items?: ManifestDetailItem[];
    page?: ManifestPage;
    manifest_details?: ManifestDetail[];
    additional_shipment_count?: number;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    display_name?: string;
    qc_type?: string[];
    id?: number;
    question_set?: QuestionSet[];
};
type PlatformShipmentReasonsResponse = {
    success?: boolean;
    reasons?: Reason[];
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    total_shipments_count?: number;
    company_id?: string;
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    batch_id?: string;
};
type BulkActionDetailsResponse = {
    message?: string;
    error?: string[];
    status?: boolean;
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    uploaded_by?: string;
    success?: string;
    failed_records?: string[];
    uploaded_on?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type ArticleDetails = {
    status?: any;
};
type BagReturnableCancelableStatus = {
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
};
type StoreAddress = {
    city: string;
    contact_person: string;
    pincode: number;
    phone: string;
    state: string;
    country: string;
    longitude: number;
    updated_at: string;
    country_code: string;
    address2?: string;
    landmark?: string;
    version?: string;
    address_type: string;
    address_category: string;
    latitude: number;
    area?: string;
    address1: string;
    email?: string;
    created_at: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    username?: string;
    user?: string;
    enabled: boolean;
    password?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type Document = {
    verified: boolean;
    ds_type: string;
    url?: string;
    value: string;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    username?: string;
    password?: string;
    user?: string;
};
type StoreMeta = {
    gst_credentials: StoreGstCredentials;
    notification_emails?: string[];
    documents?: StoreDocuments;
    einvoice_portal_details?: EInvoicePortalDetails;
    stage: string;
    ewaybill_portal_details?: any;
    display_name: string;
    timing?: any[];
    additional_contact_details?: any;
    gst_number?: string;
    product_return_config?: any;
};
type Store = {
    city: string;
    order_integration_id?: string;
    store_active_from?: string;
    contact_person: string;
    pincode: string;
    phone: number;
    fulfillment_channel: string;
    store_email: string;
    alohomora_user_id?: number;
    login_username: string;
    location_type: string;
    is_active?: boolean;
    state: string;
    store_address_json?: StoreAddress;
    brand_store_tags?: string[];
    country: string;
    longitude: number;
    updated_at?: string;
    vat_no?: string;
    name: string;
    address2?: string;
    code?: string;
    company_id: number;
    parent_store_id?: number;
    mall_name?: string;
    packaging_material_count?: number;
    s_id: string;
    brand_id?: any;
    is_enabled_for_recon?: boolean;
    meta: StoreMeta;
    is_archived?: boolean;
    latitude: number;
    address1: string;
    created_at: string;
    mall_area?: string;
};
type AffiliateMeta = {
    order_item_id?: string;
    channel_shipment_id?: string;
    channel_order_id?: string;
    loyalty_discount?: number;
    coupon_code?: string;
    size_level_total_qty?: number;
    is_priority?: boolean;
    due_date?: string;
    box_type?: string;
    employee_discount?: number;
    quantity?: number;
};
type AffiliateBagDetails = {
    loyalty_discount?: number;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type PDFLinks = {
    invoice_a4?: string;
    label_a4?: string;
    label_type: string;
    invoice_type: string;
    invoice_pos?: string;
    credit_note_url?: string;
    label?: string;
    label_a6?: string;
    label_pos?: string;
    invoice_a6?: string;
    po_invoice?: string;
    b2b?: string;
    invoice?: string;
};
type BuyerDetails = {
    city: string;
    address: string;
    pincode: number;
    ajio_site_id?: string;
    name: string;
    state: string;
    gstin: string;
};
type LockData = {
    mto?: boolean;
    locked?: boolean;
    lock_message?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type EInvoice = {
    signed_qr_code?: string;
    irn?: string;
    signed_invoice?: string;
    error_message?: string;
    error_code?: string;
    acknowledge_no?: number;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentMeta = {
    return_awb_number?: string;
    store_invoice_updated_date?: string;
    b2b_buyer_details?: BuyerDetails;
    order_type?: string;
    dp_sort_key?: string;
    bag_weight?: any;
    auto_trigger_dp_assignment_acf: boolean;
    assign_dp_from_sb?: boolean;
    forward_affiliate_order_id?: string;
    return_affiliate_shipment_id?: string;
    return_store_node?: number;
    lock_data?: LockData;
    weight: number;
    same_store_available: boolean;
    ewaybill_info?: any;
    external?: any;
    dp_options?: any;
    due_date?: string;
    timestamp?: ShipmentTimeStamp;
    box_type?: string;
    debug_info?: DebugInfo;
    awb_number?: string;
    return_details?: any;
    fulfilment_priority_text?: string;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_order_id?: string;
    marketplace_store_id?: string;
    dp_name?: string;
    shipment_weight?: number;
    dp_id?: string;
    packaging_name?: string;
    formatted?: Formatted;
    po_number?: string;
    b2c_buyer_details?: any;
    shipment_volumetric_weight?: number;
    forward_affiliate_shipment_id?: string;
};
type AffiliateDetails = {
    pdf_links?: PDFLinks;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_id?: string;
    affiliate_store_id: string;
    affiliate_bag_id: string;
    ad_id?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_shipment_id: string;
};
type Attributes = {
    primary_material?: string;
    brand_name?: string;
    essential?: string;
    primary_color_hex?: string;
    gender?: string[];
    marketer_name?: string;
    primary_color?: string;
    name?: string;
    marketer_address?: string;
};
type Item = {
    l2_category?: string[];
    branch_url?: string;
    l3_category?: number;
    department_id?: number;
    can_return?: boolean;
    slug_key: string;
    name: string;
    last_updated_at?: string;
    item_id: number;
    color?: string;
    l3_category_name?: string;
    l1_category_id?: number;
    code?: string;
    image: string[];
    gender?: string;
    brand_id: number;
    can_cancel?: boolean;
    meta?: any;
    l1_category?: string[];
    attributes: Attributes;
    size: string;
    brand: string;
    webstore_product_url?: string;
    l2_category_id?: number;
};
type Dimensions = {
    width?: number;
    unit?: string;
    length?: number;
    height?: number;
    is_default?: boolean;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Weight = {
    shipping?: number;
    is_default?: boolean;
    unit?: string;
};
type Article = {
    identifiers: Identifier;
    code?: string;
    raw_meta?: any;
    esp_modified?: any;
    is_set?: boolean;
    seller_identifier: string;
    child_details?: any;
    size: string;
    a_set?: any;
    _id: string;
    dimensions?: Dimensions;
    return_config?: ReturnConfig;
    uid: string;
    weight?: Weight;
};
type BagGSTDetails = {
    cgst_gst_fee: string;
    gst_tag: string;
    is_default_hsn_code?: boolean;
    gst_tax_percentage: number;
    hsn_code_id: string;
    sgst_tax_percentage: number;
    igst_tax_percentage: number;
    hsn_code: string;
    value_of_good: number;
    gst_fee: number;
    tax_collected_at_source: number;
    igst_gst_fee: string;
    brand_calculated_amount: number;
    sgst_gst_fee: string;
    cgst_tax_percentage: number;
    gstin_code?: string;
};
type B2BPODetails = {
    item_base_price?: number;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    docker_number?: string;
    total_gst_percentage?: number;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Brand = {
    created_on?: number;
    credit_note_expiry_days?: number;
    brand_name: string;
    pickup_location?: string;
    start_date?: string;
    invoice_prefix?: string;
    script_last_ran?: string;
    modified_on?: number;
    logo?: string;
    credit_note_allowed?: boolean;
    brand_id: number;
    is_virtual_invoice?: boolean;
    company: string;
};
type BagDetailsPlatformResponse = {
    qc_required?: any;
    dates?: Dates;
    article_details?: ArticleDetails;
    journey_type: string;
    identifier?: string;
    quantity?: number;
    parent_promo_bags?: any;
    applied_promos?: any[];
    current_status: BagStatusHistory;
    status: BagReturnableCancelableStatus;
    reasons?: any[];
    entity_type?: string;
    line_number?: number;
    ordering_store?: Store;
    bag_update_time?: number;
    no_of_bags_order?: number;
    affiliate_bag_details: AffiliateBagDetails;
    affiliate_details?: AffiliateDetails;
    item: Item;
    b_id: number;
    restore_coupon?: boolean;
    display_name?: string;
    financial_breakup: FinancialBreakup[];
    article: Article;
    bag_status_history?: BagStatusHistory;
    operational_status?: string;
    prices: Prices;
    gst_details: BagGSTDetails;
    meta?: BagMeta;
    tags?: string[];
    restore_promos?: any;
    seller_identifier?: string;
    brand: Brand;
    original_bag_list?: number[];
    current_operational_status: BagStatusHistory;
    bag_status: BagStatusHistory[];
    shipment_id?: string;
    b_type?: string;
    order_integration_id?: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    current: number;
    size: number;
    item_total: number;
    page_type: string;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    shipment_id?: string;
    status?: number;
    message?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    error_trace?: string;
    status: number;
    message: string;
};
type StoreReassign = {
    affiliate_bag_id?: string;
    reason_ids?: number[];
    set_id?: string;
    affiliate_id?: string;
    bag_id?: number;
    item_id?: string;
    fynd_order_id?: string;
    mongo_article_id?: string;
    store_id: number;
    affiliate_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    reason_text: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    id?: string;
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entity_type: string;
    action_type: string;
    entities: Entities[];
};
type Bags = {
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    is_bag_locked?: boolean;
    bags?: Bags[];
    affiliate_id?: string;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    shipment_id?: string;
    status?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    logo_url?: string;
    company_id?: number;
    created_at?: string;
    platform_id?: string;
    from_datetime?: string;
    description?: string;
    title?: string;
    platform_name?: string;
    id: number;
    to_datetime?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    success: boolean;
    message: string;
};
type Click2CallResponse = {
    status: boolean;
    call_id: string;
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasonsFilters = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ReasonsData = {
    products?: ProductsReasons[];
    entities?: EntitiesReasons[];
};
type Products = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type DataUpdates = {
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
};
type ShipmentsRequest = {
    identifier: string;
    reasons?: ReasonsData;
    products?: Products[];
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    task?: boolean;
    statuses?: StatuesRequest[];
    force_transition?: boolean;
};
type ShipmentsResponse = {
    stack_trace?: string;
    exception?: string;
    code?: string;
    meta?: any;
    identifier?: string;
    status?: number;
    message?: string;
    final_state?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    name: string;
    created_at: string;
    secret: string;
    updated_at: string;
    description?: string;
    meta?: AffiliateAppConfigMeta[];
    token: string;
    id: string;
    owner: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    id: string;
    token: string;
    config?: AffiliateConfig;
};
type OrderConfig = {
    bag_end_state?: string;
    store_lookup?: string;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
    affiliate: Affiliate;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    fynd_store_id: string;
    transfer_price: number;
    _id: string;
    identifier: any;
    item_id: number;
    item_size: string;
    quantity: number;
    delivery_charge: number;
    affiliate_store_id: string;
    sku: string;
    modified_on: string;
    seller_identifier: string;
    unit_price: number;
    pdf_links?: MarketPlacePdf;
    price_marked: number;
    amount_paid: number;
    avl_qty: number;
    company_id: number;
    discount: number;
    price_effective: number;
    store_id: number;
    affiliate_meta: any;
    hsn_code_id: string;
};
type OrderUser = {
    first_name: string;
    email: string;
    last_name: string;
    mobile: number;
    state: string;
    address2?: string;
    city: string;
    country: string;
    phone: number;
    address1?: string;
    pincode: string;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type ArticleDetails1 = {
    category: any;
    brand_id: number;
    attributes: any;
    dimension: any;
    _id: string;
    quantity: number;
    weight: any;
};
type ShipmentDetails = {
    articles: ArticleDetails1[];
    dp_id?: number;
    shipments: number;
    fulfillment_id: number;
    meta?: any;
    box_type?: string;
    affiliate_shipment_id: string;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentConfig = {
    source: string;
    to_pincode: string;
    action: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
    identifier: string;
    location_details?: LocationDetails;
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    delivery_charges: number;
    bags: AffiliateBag[];
    order_value: number;
    discount: number;
    billing_address: OrderUser;
    shipping_address: OrderUser;
    payment?: any;
    order_priority?: OrderPriority;
    cod_charges: number;
    coupon?: string;
    user: UserData;
    payment_mode: string;
    items: any;
    affiliate_order_id?: string;
    shipment?: ShipmentData;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    affiliate_id: string;
    order_info: OrderInfo;
};
type CreateOrderResponse = {
    fynd_order_id: string;
};
type DispatchManifest = {
    manifest_id: string;
};
type SuccessResponse = {
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    id: number;
    slug: string;
    description: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    type: string;
    l2_detail?: string;
    l3_detail?: string;
    bag_id?: number;
    user: string;
    createdat: string;
    ticket_url?: string;
    ticket_id?: string;
    l1_detail?: string;
    message: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    customer_name: string;
    phone_number: number;
    country_code: string;
    order_id: string;
    brand_name: string;
    amount_paid: number;
    payment_mode: string;
    shipment_id: number;
    message: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    bag_list?: number[];
    remarks?: string;
    meta: Meta;
    id: number;
    shipment_id?: string;
    status?: string;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    errors?: string[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    qc_required: string;
    shipment_ids?: string[];
    dp_id: number;
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    breakup?: any[];
    amount: any;
    name: string;
    rate: number;
};
type Charge = {
    type: string;
    name: string;
    code?: string;
    amount: any;
    tax?: Tax;
};
type PaymentMethod = {
    name: string;
    collect_by: string;
    transaction_data?: any;
    amount: number;
    mode: string;
    meta?: any;
    refund_by: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type LineItem = {
    charges: Charge[];
    meta?: any;
    quantity?: number;
    external_line_id?: string;
    custom_messasge?: string;
    seller_identifier: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    dp_pickup_slot?: any;
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
    dispatch_after_date?: string;
};
type Shipment = {
    line_items: LineItem[];
    location_id: number;
    meta?: any;
    priority?: number;
    external_shipment_id?: number;
    processing_dates?: ProcessingDates;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ShippingInfo = {
    external_customer_code?: string;
    title?: string;
    landmark?: string;
    state: string;
    state_code?: string;
    address1: string;
    floor_no?: string;
    first_name: string;
    address_type?: string;
    shipping_type?: string;
    middle_name?: string;
    geo_location?: any;
    country_code?: string;
    gender?: string;
    address2?: string;
    country: string;
    slot?: any[];
    house_no?: string;
    alternate_mobile_number?: string;
    primary_mobile_number: string;
    alternate_email?: string;
    last_name?: string;
    primary_email: string;
    city: string;
    customer_code?: string;
    pincode: string;
};
type BillingInfo = {
    external_customer_code?: string;
    title?: string;
    state: string;
    state_code?: string;
    address1: string;
    floor_no?: string;
    first_name: string;
    middle_name?: string;
    country_code?: string;
    gender?: string;
    address2?: string;
    country: string;
    house_no?: string;
    alternate_mobile_number?: string;
    primary_mobile_number: string;
    alternate_email?: string;
    last_name?: string;
    primary_email: string;
    city: string;
    customer_code?: string;
    pincode: string;
};
type CreateOrderAPI = {
    external_creation_date?: string;
    charges: Charge[];
    external_order_id?: string;
    payment_info: PaymentInfo;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    meta?: any;
    shipping_info: ShippingInfo;
    currency_info?: any;
    billing_info: BillingInfo;
};
type CreateOrderErrorReponse = {
    stack_trace?: string;
    exception?: string;
    code?: string;
    info?: any;
    meta?: string;
    request_id?: string;
    status: number;
    message: string;
};
type PaymentMethods = {
    collect_by?: string;
    mode?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    source?: string;
    mode_of_payment?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
    shipment_assignment?: string;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    acknowledged?: boolean;
    is_upserted?: boolean;
};
type UploadConsent = {
    manifest_id: string;
    consent_url: string;
};
type PlatformOrderUpdate = {
    order_id: string;
};
type ResponseDetail = {
    success?: boolean;
    message?: string[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    start_date: string;
    end_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
};
type GetSearchWordsData = {
    app_id?: string;
    words?: string[];
    uid?: string;
    result?: any;
    _custom_json?: any;
    is_active?: boolean;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    app_id?: string;
    words?: string[];
    result: SearchKeywordResult;
    _custom_json?: any;
    is_active?: boolean;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    words?: string[];
    uid?: string;
    results?: any[];
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type AutocompletePageAction = {
    query?: any;
    url?: string;
    type?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    words?: string[];
    results?: AutocompleteResult[];
    _custom_json?: any;
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    words?: string[];
    _custom_json?: any;
    results?: any[];
};
type ProductBundleItem = {
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    max_quantity: number;
    auto_select?: boolean;
    product_uid: number;
    min_quantity: number;
};
type GetProductBundleCreateResponse = {
    created_on?: string;
    name: string;
    modified_on?: string;
    page_visibility?: string[];
    choice: string;
    logo?: string;
    modified_by?: any;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    meta?: any;
    slug: string;
    is_active: boolean;
    company_id?: number;
    created_by?: any;
    id?: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    created_on?: string;
    name: string;
    modified_on?: string;
    page_visibility?: string[];
    choice: string;
    logo?: string;
    modified_by?: any;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    meta?: any;
    slug: string;
    is_active: boolean;
    company_id?: number;
    created_by?: any;
};
type LimitedProductData = {
    identifier?: any;
    quantity?: number;
    attributes?: any;
    name?: string;
    short_description?: string;
    item_code?: string;
    sizes?: string[];
    uid?: number;
    country_of_origin?: string;
    slug?: string;
    images?: string[];
    price?: any;
};
type Size = {
    display?: string;
    is_available?: boolean;
    quantity?: number;
    value?: string;
};
type Price = {
    currency?: string;
    max_effective?: number;
    max_marked?: number;
    min_marked?: number;
    min_effective?: number;
};
type GetProducts = {
    product_details?: LimitedProductData;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    max_quantity?: number;
    auto_select?: boolean;
    price?: Price;
    product_uid?: number;
    min_quantity?: number;
};
type GetProductBundleResponse = {
    name?: string;
    page_visibility?: string[];
    choice?: string;
    logo?: string;
    same_store_assignment?: boolean;
    products?: GetProducts[];
    slug?: string;
    meta?: any;
    is_active?: boolean;
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    name: string;
    modified_on?: string;
    page_visibility?: string[];
    choice: string;
    logo?: string;
    modified_by?: any;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    meta?: any;
    slug: string;
    is_active: boolean;
    company_id?: number;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    image?: string;
    description?: string;
    guide?: Guide;
    name: string;
    created_on?: string;
    modified_on?: string;
    tag?: string;
    brand_id?: number;
    modified_by?: any;
    subtitle?: string;
    title: string;
    active?: boolean;
    company_id?: number;
    created_by?: any;
    id?: string;
};
type SizeGuideResponse = {
    created_on?: string;
    name?: string;
    guide?: any;
    modified_by?: any;
    brand_id?: number;
    tag?: string;
    title?: string;
    modified_on?: string;
    subtitle?: string;
    active?: boolean;
    company_id?: number;
    created_by?: any;
    id?: string;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type OwnerAppItemResponse = {
    is_gift?: boolean;
    is_cod?: boolean;
    seo?: SEOData;
    moq?: MOQData;
    alt_text?: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type ApplicationItemMeta = {
    is_gift?: boolean;
    is_cod?: boolean;
    seo?: ApplicationItemSEO;
    _custom_meta?: MetaFields[];
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
    alt_text?: any;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type PageResponseType = {
    has_next: boolean;
    next: number;
    total_count: number;
    current: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    unit?: string;
    name: string;
    priority: number;
    logo?: string;
    slug?: string;
    is_active: boolean;
    key?: string;
    display_type: string;
};
type AppConfigurationDetail = {
    app_id: string;
    template_slugs?: string[];
    attributes?: AttributeDetailsGroup[];
    name?: string;
    priority: number;
    logo?: string;
    slug: string;
    is_active: boolean;
    is_default: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    app_id: string;
    name?: string;
    default_key: string;
    priority: number;
    logo?: string;
    is_active: boolean;
    key: string;
    is_default: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    filter_types?: string[];
    key?: string;
    units?: any[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    variant?: any;
    compare?: any;
    detail?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    priority: number;
    logo?: string;
    size?: ProductSize;
    title?: string;
    subtitle?: string;
    is_active: boolean;
    key: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    name: string;
    priority: number;
    logo?: string;
    size: ProductSize;
    is_active: boolean;
    key: string;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    condition?: string;
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    map?: any;
    value?: string;
};
type ConfigurationListingFilterConfig = {
    value_config?: ConfigurationListingFilterValue;
    type: string;
    name?: string;
    priority: number;
    logo?: string;
    display_name?: string;
    is_active: boolean;
    key: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    name?: string;
    priority: number;
    logo?: string;
    is_active: boolean;
    key: string;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppCatalogConfiguration = {
    app_id: string;
    config_type: string;
    type?: string;
    product?: ConfigurationProduct;
    created_on?: string;
    listing?: ConfigurationListing;
    modified_by?: any;
    id?: string;
    modified_on?: string;
    created_by?: any;
    config_id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    app_id: string;
    config_type: string;
    type?: string;
    product?: ConfigurationProduct;
    created_on?: string;
    listing?: ConfigurationListing;
    modified_by?: any;
    modified_on?: string;
    created_by?: any;
    config_id?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    app_id: string;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    display: string;
    name: string;
    logo?: string;
    operators?: string[];
    kind?: string;
};
type ProductFiltersValue = {
    display: string;
    selected_min?: number;
    max?: number;
    display_format?: string;
    count?: number;
    query_format?: string;
    min?: number;
    currency_symbol?: string;
    value: any;
    currency_code?: string;
    is_selected: boolean;
    selected_max?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type BannerImage = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type GetCollectionDetailNest = {
    type?: string;
    name?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    priority?: number;
    is_active?: boolean;
    app_id?: string;
    cron?: any;
    logo?: Media1;
    uid?: string;
    slug?: string;
    meta?: any;
    query?: CollectionQuery[];
    _schedule?: any;
    banners?: ImageUrls;
    description?: string;
    tag?: string[];
    visible_facets_keys?: string[];
    badge?: any;
    action?: Action;
};
type CollectionListingFilterType = {
    name?: string;
    is_selected?: boolean;
    display?: string;
};
type CollectionListingFilterTag = {
    name?: string;
    is_selected?: boolean;
    display?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
    page?: Page;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type UserInfo = {
    username?: string;
    uid?: string;
    email?: string;
    user_id?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionSchedule = {
    end?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    cron?: string;
    start?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CreateCollection = {
    type: string;
    seo?: SeoDetail;
    name: string;
    allow_sort?: boolean;
    modified_by?: UserInfo;
    allow_facets?: boolean;
    _custom_json?: any;
    is_active?: boolean;
    priority?: number;
    app_id: string;
    _locale_language?: any;
    tags?: string[];
    created_by?: UserInfo;
    is_visible?: boolean;
    logo: CollectionImage;
    slug: string;
    meta?: any;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    banners: CollectionBanner;
    description?: string;
    published?: boolean;
    sort_on?: string;
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
};
type CollectionCreateResponse = {
    type?: string;
    name?: string;
    allow_sort?: boolean;
    allow_facets?: boolean;
    priority?: number;
    is_active?: boolean;
    app_id?: string;
    cron?: any;
    logo?: BannerImage;
    slug?: string;
    meta?: any;
    query?: CollectionQuery[];
    _schedule?: any;
    banners?: ImageUrls;
    description?: string;
    sort_on?: string;
    tag?: string[];
    visible_facets_keys?: string[];
    badge?: any;
};
type CollectionDetailResponse = {
    app_id?: string;
    query?: CollectionQuery[];
    type?: string;
    description?: string;
    name?: string;
    allow_sort?: boolean;
    priority?: number;
    logo?: Media1;
    tag?: string[];
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    cron?: any;
    slug?: string;
    meta?: any;
    badge?: any;
    is_active?: boolean;
    _schedule?: any;
    banners?: ImageUrls;
};
type UpdateCollection = {
    type?: string;
    seo?: SeoDetail;
    name?: string;
    allow_sort?: boolean;
    modified_by?: UserInfo;
    allow_facets?: boolean;
    _custom_json?: any;
    is_active?: boolean;
    priority?: number;
    _locale_language?: any;
    tags?: string[];
    is_visible?: boolean;
    logo?: CollectionImage;
    slug?: string;
    meta?: any;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    banners?: CollectionBanner;
    description?: string;
    published?: boolean;
    sort_on?: string;
    visible_facets_keys?: string[];
    badge?: CollectionBadge;
};
type ProductDetailAttribute = {
    value?: string;
    key?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    name?: string;
    uid?: number;
    action?: Action;
    logo?: Media1;
};
type Price1 = {
    currency_code?: string;
    currency_symbol?: string;
    max?: number;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    rating_count?: number;
    image_nature?: string;
    type?: string;
    name?: string;
    teaser_tag?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    medias?: Media1[];
    item_code?: string;
    rating?: number;
    brand?: ProductBrand;
    discount?: string;
    price?: ProductListingPrice;
    tryouts?: string[];
    has_variant?: boolean;
    item_type?: string;
    attributes?: any;
    product_online_date?: string;
    uid?: number;
    slug: string;
    promo_meta?: any;
    color?: string;
    description?: string;
    short_description?: string;
    highlights?: string[];
    sellable?: boolean;
    similars?: string[];
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
    type?: string;
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightItem = {
    sellable_count?: number;
    count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightBrand = {
    article_freshness?: number;
    total_articles?: number;
    name?: string;
    available_sizes?: number;
    available_articles?: number;
    total_sizes?: number;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brand_distribution?: CatalogInsightBrand;
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    brand_ids?: number[];
    opt_level: string;
    platform?: string;
    store_ids?: number[];
    enabled?: boolean;
    company_id?: number;
};
type CompanyOptIn = {
    brand_ids: number[];
    opt_level: string;
    created_on: number;
    platform: string;
    store_ids: number[];
    modified_by?: any;
    enabled: boolean;
    modified_on: number;
    company_id: number;
    created_by?: any;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    uid?: number;
    company_type?: string;
    business_type?: string;
};
type CompanyBrandDetail = {
    brand_id?: number;
    company_id?: number;
    total_article?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    company?: string;
    store?: number;
    brand?: number;
};
type StoreDetail = {
    company_id?: number;
    additional_contacts?: any[];
    created_on?: string;
    name?: string;
    store_type?: string;
    display_name?: string;
    address?: any;
    uid?: number;
    manager?: any;
    modified_on?: string;
    documents?: any[];
    timing?: any;
    store_code?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    allowed_values?: string[];
    type: string;
    mandatory?: boolean;
    format?: string;
    multi?: boolean;
    range?: AttributeSchemaRange;
};
type GenderDetail = {
    filters?: AttributeMasterFilter;
    description?: string;
    name?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    logo?: string;
    departments?: string[];
    is_nested?: boolean;
    slug?: string;
    meta?: AttributeMasterMeta;
    schema?: AttributeMaster;
    id?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    code?: string;
    meta?: any;
    status?: number;
    errors?: any;
};
type UserSerializer = {
    contact?: string;
    username?: string;
    user_id?: string;
    uid?: string;
    _id?: string;
};
type GetDepartment = {
    created_by?: UserSerializer;
    item_type?: string;
    created_on?: string;
    name?: string;
    page_no?: number;
    priority_order?: number;
    synonyms?: string[];
    logo?: string;
    modified_by?: UserSerializer;
    uid?: number;
    search?: string;
    slug?: string;
    modified_on?: string;
    is_active?: boolean;
    page_size?: number;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    code?: string;
    meta?: any;
    status?: number;
    errors?: any;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    name: string;
    priority_order: number;
    synonyms?: string[];
    logo: string;
    platforms?: any;
    uid?: number;
    tags?: string[];
    slug?: string;
    _custom_json?: any;
    is_active?: boolean;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    username: string;
    super_user?: boolean;
    contact?: string;
    user_id: string;
};
type DepartmentModel = {
    verified_on?: string;
    _id?: any;
    _cls?: any;
    created_on: string;
    name: any;
    priority_order: number;
    synonyms?: any[];
    logo: string;
    modified_by?: UserDetail;
    uid?: number;
    verified_by?: UserDetail;
    slug?: any;
    modified_on: string;
    _custom_json?: any;
    is_active?: boolean;
    created_by?: UserDetail;
};
type ProductTemplate = {
    description?: string;
    is_active?: boolean;
    name?: string;
    attributes?: string[];
    created_on?: string;
    is_expirable: boolean;
    is_archived?: boolean;
    logo?: string;
    tag?: string;
    modified_by?: any;
    departments?: string[];
    slug: string;
    modified_on?: string;
    categories?: string[];
    is_physical: boolean;
    created_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    name?: any;
    variants?: any;
    country_of_origin?: any;
    teaser_tag?: any;
    is_active?: any;
    multi_size?: any;
    trader_type?: any;
    item_code?: any;
    is_dependent?: any;
    command?: any;
    product_group_tag?: any;
    tags?: any;
    trader?: any;
    custom_order?: any;
    item_type?: any;
    media?: any;
    sizes?: any;
    no_of_boxes?: any;
    slug?: any;
    hsn_code?: any;
    size_guide?: any;
    description?: any;
    brand_uid?: any;
    currency?: any;
    short_description?: any;
    category_slug?: any;
    product_publish?: any;
    highlights?: any;
    return_config?: any;
};
type GlobalValidation = {
    type?: string;
    description?: string;
    properties?: Properties;
    definitions?: any;
    title?: string;
    required?: string[];
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    description?: string;
    is_active?: boolean;
    name?: string;
    attributes?: string[];
    is_expirable: boolean;
    is_archived?: boolean;
    logo?: string;
    tag?: string;
    departments?: string[];
    slug: string;
    categories?: string[];
    is_physical: boolean;
    id?: string;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
};
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
type HSNData = {
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type ProductDownloadItemsData = {
    type?: string;
    templates?: string[];
    brand?: string[];
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    url?: string;
    template_tags?: any;
    task_id?: string;
    completed_on?: string;
    id?: string;
    seller_id?: number;
    status?: string;
    data?: ProductDownloadItemsData;
    created_by?: VerifiedBy;
    trigger_on?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type Category = {
    created_by?: any;
    level: number;
    tryouts?: string[];
    is_active: boolean;
    created_on?: string;
    name: string;
    media?: Media2;
    priority?: number;
    modified_by?: any;
    uid?: number;
    departments: number[];
    slug?: string;
    modified_on?: string;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    hierarchy?: Hierarchy[];
    id?: string;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    level: number;
    tryouts?: string[];
    is_active: boolean;
    name: string;
    media?: Media2;
    priority?: number;
    departments: number[];
    slug?: string;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    hierarchy?: Hierarchy[];
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type Image = {
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
};
type Logo = {
    secure_url?: string;
    url?: string;
    aspect_ratio_f?: number;
    aspect_ratio?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Product = {
    variant_group?: any;
    image_nature?: string;
    primary_color?: string;
    name?: string;
    variants?: any;
    country_of_origin?: string;
    _custom_json?: any;
    is_active?: boolean;
    multi_size?: boolean;
    images?: Image[];
    all_sizes?: any[];
    l3_mapping?: string[];
    item_code?: string;
    is_dependent?: boolean;
    brand?: Brand;
    is_physical?: boolean;
    id?: string;
    is_set?: boolean;
    custom_order?: any;
    item_type?: string;
    media?: Media1[];
    category_uid?: number;
    sizes?: any[];
    is_expirable?: boolean;
    uid?: number;
    departments?: number[];
    slug?: string;
    template_tag?: string;
    tax_identifier?: any;
    hsn_code?: string;
    color?: string;
    size_guide?: string;
    description?: string;
    brand_uid?: number;
    currency?: string;
    short_description?: string;
    category_slug?: string;
    product_publish?: ProductPublished;
    highlights?: string[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type Trader = {
    name: any;
    type?: string;
    address?: string[];
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdate = {
    variants_group?: any;
    name: any;
    is_image_less_product?: boolean;
    variants?: any;
    country_of_origin: string;
    _custom_json?: any;
    teaser_tag?: TeaserTag;
    bulk_job_id?: string;
    requester?: string;
    is_active?: boolean;
    multi_size?: boolean;
    change_request_id?: any;
    item_code: any;
    is_dependent?: boolean;
    variant_media?: any;
    product_group_tag?: string[];
    tags?: string[];
    trader: Trader[];
    is_set?: boolean;
    custom_order?: CustomOrder;
    item_type: string;
    media?: Media1[];
    uid?: number;
    no_of_boxes?: number;
    departments: number[];
    slug: string;
    template_tag: string;
    company_id: number;
    tax_identifier: TaxIdentifier;
    net_quantity?: NetQuantity;
    size_guide?: string;
    description?: string;
    brand_uid: number;
    category_slug: string;
    short_description?: string;
    currency: string;
    product_publish?: ProductPublish;
    highlights?: string[];
    return_config: ReturnConfig;
    action?: string;
};
type AttributeMasterSerializer = {
    created_on?: string;
    name?: string;
    modified_by?: any;
    is_nested?: boolean;
    filters: AttributeMasterFilter;
    details: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    tags?: string[];
    created_by?: any;
    unit?: string;
    variant?: boolean;
    logo?: string;
    departments: string[];
    slug: string;
    modified_on?: string;
    synonyms?: any;
    schema: AttributeMaster;
    description?: string;
    raw_key?: string;
    suggestion?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    stage?: string;
    failed_records?: string[];
    file_path?: string;
    failed?: number;
    created_on?: string;
    template?: ProductTemplate;
    cancelled_records?: string[];
    modified_by?: UserDetail1;
    total?: number;
    modified_on?: string;
    template_tag?: string;
    is_active?: boolean;
    company_id?: number;
    succeed?: number;
    created_by?: UserDetail1;
    cancelled?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    username?: string;
    uid?: string;
    email?: string;
    user_id?: string;
};
type BulkJob = {
    stage?: string;
    file_path?: string;
    failed?: number;
    custom_template_tag?: string;
    created_on: string;
    cancelled_records?: any[];
    template_tag?: string;
    tracking_url?: string;
    modified_by?: UserInfo1;
    total: number;
    modified_on?: string;
    failed_records?: any[];
    is_active?: boolean;
    company_id: number;
    succeed?: number;
    created_by?: UserInfo1;
    cancelled?: number;
};
type BulkResponse = {
    batch_id: string;
    created_on: string;
    modified_by?: UserInfo1;
    modified_on?: string;
    is_active?: boolean;
    created_by?: UserInfo1;
};
type BulkProductRequest = {
    template_tag: string;
    company_id: number;
    data: any[];
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    stage?: string;
    company_id?: number;
    file_path?: string;
    failed?: number;
    created_on?: string;
    cancelled_records?: string[];
    tracking_url?: string;
    modified_by?: UserCommon;
    id?: string;
    total?: number;
    modified_on?: string;
    failed_records?: string[];
    is_active?: boolean;
    retry?: number;
    succeed?: number;
    created_by?: UserCommon;
    cancelled?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductBulkAssets = {
    company_id?: number;
    url: string;
    user: any;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    inventory_updated_on?: string;
    quantity?: number;
    currency?: string;
    store?: any;
    sellable_quantity?: number;
    uid?: string;
    seller_identifier?: string;
    size?: string;
    price_effective?: number;
    item_id?: number;
    identifiers?: any;
    price?: number;
    price_transfer?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ItemQuery = {
    uid?: number;
    item_code?: string;
    brand_uid?: number;
};
type GTIN = {
    primary?: boolean;
    gtin_value: any;
    gtin_type: string;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    name?: string;
    size_distribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    is_set?: boolean;
    quantity: number;
    identifiers: GTIN[];
    currency: string;
    set?: InventorySet;
    item_length?: number;
    store_code: string;
    expiration_date?: string;
    size: any;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    price_effective: number;
    item_height?: number;
    price?: number;
    item_width?: number;
    price_transfer?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type BrandMeta = {
    name: string;
    id: number;
};
type PriceMeta = {
    marked: number;
    effective: number;
    tp_notes?: any;
    currency: string;
    transfer: number;
    updated_at?: string;
};
type Trader1 = {
    name: string;
    type: string;
    address: string[];
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type CompanyMeta = {
    id: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
};
type DimensionResponse = {
    unit: string;
    height: number;
    width: number;
    length: number;
    is_default: boolean;
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type InventorySellerResponse = {
    identifier: any;
    weight: WeightResponse;
    raw_meta?: any;
    store: StoreMeta;
    modified_by?: UserSerializer;
    seller_identifier: string;
    country_of_origin: string;
    trace_id?: string;
    _custom_json?: any;
    item_id: number;
    is_active?: boolean;
    added_on_store?: string;
    total_quantity: number;
    set?: InventorySet;
    brand: BrandMeta;
    fragile: boolean;
    expiration_date?: string;
    track_inventory?: boolean;
    tags?: string[];
    price: PriceMeta;
    trader?: Trader1[];
    manufacturer: ManufacturerResponse;
    created_by?: UserSerializer;
    stage?: string;
    is_set?: boolean;
    uid: string;
    company: CompanyMeta;
    meta?: any;
    quantities?: Quantities;
    tax_identifier?: any;
    fynd_meta?: any;
    dimension: DimensionResponse;
    fynd_item_code: string;
    size: string;
    return_config?: ReturnConfig1;
    fynd_article_code: string;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    stage?: string;
    file_path?: string;
    failed?: number;
    created_on?: string;
    modified_on?: string;
    cancelled_records?: string[];
    modified_by?: any;
    total?: number;
    cancelled?: number;
    failed_records?: string[];
    is_active?: boolean;
    company_id?: number;
    succeed?: number;
    created_by?: any;
    id?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    quantity?: number;
    price_marked?: number;
    currency?: string;
    expiration_date?: string;
    seller_identifier: string;
    item_dimensions_unit_of_measure?: string;
    trace_id?: string;
    tags?: string[];
    item_weight_unit_of_measure?: string;
    price_effective?: number;
    price?: number;
    store_code: string;
    total_quantity?: number;
};
type InventoryBulkRequest = {
    company_id: number;
    sizes: InventoryJobPayload[];
    batch_id: string;
    user?: any;
};
type InventoryExportJob = {
    url?: string;
    task_id: string;
    request_params?: any;
    seller_id: number;
    status?: string;
    completed_on?: string;
    trigger_on?: string;
};
type InventoryExportRequest = {
    store?: number[];
    type?: string;
    brand?: number[];
};
type InventoryExportResponse = {
    task_id: string;
    request_params?: any;
    seller_id: number;
    status?: string;
    trigger_on?: string;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    price_marked?: number;
    expiration_date?: string;
    seller_identifier: string;
    trace_id?: string;
    store_id: number;
    tags?: string[];
    price_effective?: number;
    total_quantity?: number;
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    company_id: number;
    meta?: any;
};
type InventoryFailedReason = {
    errors?: string;
    message: string;
};
type InventoryResponseItem = {
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    tax2?: number;
    threshold2?: number;
    hs2_code?: string;
    threshold1?: number;
    tax1?: number;
    tax_on_mrp?: boolean;
    modified_on?: string;
    company_id?: number;
    tax_on_esp?: boolean;
    hsn_code?: string;
    id?: string;
};
type PageResponse = {
    has_next?: boolean;
    item_total?: number;
    size?: number;
    current?: string;
    has_previous?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    tax2?: number;
    threshold2?: number;
    hs2_code: string;
    threshold1: number;
    tax1: number;
    tax_on_mrp: boolean;
    uid?: number;
    is_active?: boolean;
    company_id: number;
    tax_on_esp?: boolean;
    hsn_code: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    cess?: number;
    rate: number;
    effective_date: string;
    threshold: number;
};
type HSNDataInsertV2 = {
    created_by?: any;
    type: string;
    description: string;
    taxes: TaxSlab[];
    created_on?: string;
    modified_by?: any;
    country_code: string;
    modified_on?: string;
    reporting_hsn: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type ArticleQuery = {
    item_id: number;
    size: string;
    ignored_stores?: number[];
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type AssignStoreArticle = {
    quantity?: number;
    group_id?: string;
    meta?: any;
    query?: ArticleQuery;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    app_id: string;
    channel_identifier?: string;
    store_ids?: number[];
    articles: AssignStoreArticle[];
    pincode: string;
    company_id?: number;
    channel_type?: string;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    company_id?: number;
    quantity: number;
    price_marked?: number;
    strategy_wise_listing?: any[];
    index?: number;
    s_city?: string;
    uid?: string;
    size: string;
    store_id?: number;
    group_id?: string;
    meta?: any;
    status: boolean;
    item_id: number;
    article_assignment: ArticleAssignment1;
    price_effective?: number;
    _id?: string;
    store_pincode?: number;
};
type BrandItem = {
    name?: string;
    logo?: Media;
    uid?: number;
    departments?: string[];
    slug?: string;
    discount?: string;
    action?: Action;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    priority_order?: number;
    logo?: Media;
    uid?: number;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type ThirdLevelChild = {
    childs?: any[];
    name?: string;
    uid?: number;
    _custom_json?: any;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    childs?: ThirdLevelChild[];
    name?: string;
    uid?: number;
    _custom_json?: any;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
};
type Child = {
    childs?: SecondLevelChild[];
    name?: string;
    uid?: number;
    _custom_json?: any;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
};
type CategoryItems = {
    childs?: Child[];
    name?: string;
    uid?: number;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
};
type CategoryListingResponse = {
    departments?: DepartmentIdentifier[];
    data?: DepartmentCategoryTree[];
};
type ApplicationProductListingResponse = {
    filters?: ProductFilters[];
    page: Page;
    sort_on?: ProductSortOn[];
    operators?: any;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    rating_count?: number;
    image_nature?: string;
    type?: string;
    name?: string;
    teaser_tag?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    medias?: Media1[];
    item_code?: string;
    rating?: number;
    brand?: ProductBrand;
    tryouts?: string[];
    has_variant?: boolean;
    item_type?: string;
    attributes?: any;
    product_online_date?: string;
    uid?: number;
    slug: string;
    promo_meta?: any;
    color?: string;
    description?: string;
    short_description?: string;
    highlights?: string[];
    similars?: string[];
};
type InventoryPage = {
    has_next?: boolean;
    next_id?: string;
    type: string;
    item_total: number;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    opening?: LocationTimingSerializer;
};
type GetAddressSerializer = {
    state?: string;
    longitude?: number;
    address1?: string;
    address_type?: string;
    address2?: string;
    city?: string;
    landmark?: string;
    latitude?: number;
    country_code?: string;
    pincode?: number;
    country?: string;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    stage?: string;
    verified_on?: string;
    addresses?: GetAddressSerializer[];
    created_on?: string;
    name?: string;
    business_type?: string;
    modified_by?: UserSerializer2;
    uid?: number;
    company_type?: string;
    reject_reason?: string;
    verified_by?: UserSerializer2;
    modified_on?: string;
    created_by?: UserSerializer2;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type InvoiceCredSerializer = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobile_no: SellerPhoneNumber;
};
type GetLocationSerializer = {
    verified_on?: string;
    created_on?: string;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    integration_type?: LocationIntegrationType;
    modified_by?: UserSerializer1;
    _custom_json?: any;
    timing?: LocationDayWiseSerializer[];
    code: string;
    display_name: string;
    phone_number: string;
    documents?: Document[];
    created_by?: UserSerializer1;
    stage?: string;
    address: GetAddressSerializer;
    uid?: number;
    company?: GetCompanySerializer;
    modified_on?: string;
    warnings?: any;
    product_return_config?: ProductReturnConfigSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    verified_by?: UserSerializer1;
    manager?: LocationManagerSerializer;
    store_type?: string;
    notification_emails?: string[];
};
type LocationListSerializer = {
    items?: GetLocationSerializer[];
    page?: Page;
};
type ApplicationBrandJson = {
    _custom_json: any;
};
type ApplicationCategoryJson = {
    _custom_json: any;
};
type ApplicationDepartment = {
    app_id: string;
    name?: string;
    logo?: string;
    uid: number;
    _custom_json?: any;
    is_active?: boolean;
};
type ApplicationDepartmentListingResponse = {
    items?: ApplicationDepartment[];
    page: Page;
};
type ApplicationDepartmentJson = {
    _custom_json: any;
};
type ApplicationStoreJson = {
    _custom_json: any;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type GetCompanyProfileSerializerResponse = {
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    stage?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    modified_on?: string;
    warnings?: any;
    name?: string;
    business_info?: string;
    documents?: Document[];
    _custom_json?: any;
    business_type: string;
    verified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    contact_details?: ContactDetails;
    mode?: string;
    notification_emails?: string[];
    uid: number;
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    created_on?: string;
    taxes?: CompanyTaxesSerializer[];
    company_type: string;
};
type CreateUpdateAddressSerializer = {
    pincode: number;
    city: string;
    address_type: string;
    country: string;
    address1: string;
    landmark?: string;
    latitude: number;
    address2?: string;
    state: string;
    country_code?: string;
    longitude: number;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type UpdateCompany = {
    notification_emails?: string[];
    warnings?: any;
    documents?: Document[];
    _custom_json?: any;
    business_type?: string;
    addresses?: CreateUpdateAddressSerializer[];
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    taxes?: CompanyTaxesSerializer1[];
    reject_reason?: string;
    contact_details?: ContactDetails;
    company_type?: string;
    name?: string;
    business_info?: string;
};
type ProfileSuccessResponse = {
    uid?: number;
    success?: boolean;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    uid?: number;
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    stage?: string;
    company_documents?: DocumentsObj;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    verified_on?: string;
    stage?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    logo?: string;
    slug_key?: string;
    synonyms?: string[];
    reject_reason?: string;
    modified_on?: string;
    warnings?: any;
    name: string;
    _custom_json?: any;
    verified_by?: UserSerializer;
    description?: string;
    mode?: string;
    uid?: number;
    _locale_language?: any;
    created_on?: string;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    logo: string;
    _locale_language?: any;
    _custom_json?: any;
    brand_tier?: string;
    banner?: BrandBannerSerializer;
    company_id?: number;
    synonyms?: string[];
    description?: string;
    name: string;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanyDetails = {
    website_url?: string;
    socials?: CompanySocialAccounts[];
};
type CompanySerializer = {
    notification_emails?: string[];
    uid?: number;
    details?: CompanyDetails;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    business_type: string;
    verified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    market_channels?: string[];
    stage?: string;
    created_by?: UserSerializer;
    created_on?: string;
    reject_reason?: string;
    modified_on?: string;
    company_type: string;
    modified_by?: UserSerializer;
    name?: string;
};
type CompanyBrandSerializer = {
    uid?: number;
    brand?: GetBrandResponseSerializer;
    verified_on?: string;
    verified_by?: UserSerializer;
    stage?: string;
    created_by?: UserSerializer;
    created_on?: string;
    reject_reason?: string;
    modified_on?: string;
    warnings?: any;
    modified_by?: UserSerializer;
    company?: CompanySerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    uid?: number;
    company: number;
};
type LocationSerializer = {
    manager?: LocationManagerSerializer;
    uid?: number;
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
    documents?: Document[];
    _custom_json?: any;
    address: GetAddressSerializer;
    store_type?: string;
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    timing?: LocationDayWiseSerializer[];
    code: string;
    display_name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    warnings?: any;
    name: string;
    company: number;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _ArticleQuery = {
    ignored_stores?: number[];
    item_id?: number;
    size?: string;
};
type _AssignStoreArticle = {
    article_assignment?: _ArticleAssignment;
    query?: _ArticleQuery;
    group_id?: string;
    meta?: any;
    quantity?: number;
};
type AssignStoreRequestValidator = {
    pincode?: string;
    app_id?: string;
    company_id?: number;
    store_ids?: number[];
    articles?: _AssignStoreArticle[];
    channel_identifier?: string;
    channel_type?: string;
};
type AssignStoreResponseSerializer = {
    article_assignment?: _ArticleAssignment;
    _id?: string;
    uid?: string;
    s_city?: string;
    store_id?: number;
    item_id?: number;
    index?: number;
    preice_effective?: number;
    meta?: any;
    company_id?: number;
    price_marked?: number;
    store_pincode?: string;
    status?: boolean;
    quantity?: number;
    size?: string;
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
};
type Upload = {
    expiry: number;
    url: string;
};
type StartResponse = {
    file_name: string;
    file_path: string;
    content_type: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    tags?: string[];
};
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: string[];
    params?: any;
};
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: boolean;
    tags?: string[];
    created_on: string;
    modified_on: string;
};
type Opts = {
    attempts?: number;
    timestamp?: number;
    delay?: number;
};
type CopyFileTask = {
    id: string;
    name: string;
    data: BulkRequest;
    opts: Opts;
    progress: number;
    delay: number;
    timestamp: number;
    attempts_made: number;
    stacktrace?: string[];
    finished_on: number;
    processed_on: number;
};
type BulkUploadResponse = {
    tracking_url: string;
    task: CopyFileTask;
};
type ReqConfiguration = {
    concurrency?: number;
};
type Destination = {
    namespace: string;
    rewrite: string;
    basepath?: string;
};
type BulkRequest = {
    urls: string[];
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Urls[];
};
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
type DbRecord = {
    success: boolean;
    tags: string[];
    _id: string;
    file_name: string;
    operation?: string;
    namespace: string;
    content_type: string;
    file_path: string;
    upload: Upload;
    cdn: CDN;
    created_on: string;
    modified_on: string;
};
type BrowseResponse = {
    items: DbRecord[];
    page: Page;
};
type RedirectDevice = {
    link?: string;
    type?: string;
};
type WebRedirect = {
    link?: string;
    type?: string;
};
type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: WebRedirect;
    force_web?: boolean;
};
type CampaignShortLink = {
    source?: string;
    medium?: string;
};
type Attribution = {
    campaign_cookie_expiry?: string;
};
type SocialMediaTags = {
    title?: string;
    description?: string;
    image?: string;
};
type ShortLinkReq = {
    title: string;
    url: string;
    hash?: string;
    active?: boolean;
    expire_at?: string;
    enable_tracking?: boolean;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type UrlInfo = {
    original?: string;
    short?: string;
    hash?: string;
};
type ShortLinkRes = {
    title?: string;
    url?: UrlInfo;
    created_by?: string;
    app_redirect?: boolean;
    fallback?: string;
    active?: boolean;
    _id?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    application?: string;
    user_id?: string;
    created_at?: string;
    meta?: any;
    updated_at?: string;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: ShortLinkRes[];
    page?: Page;
};
type ErrorRes = {
    message?: string;
};
type GCompany = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    name?: string;
    stores?: GStore[];
    gstores?: GStore[];
};
type GStore = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    code?: string;
    name?: string;
    data?: StoreData;
};
type Metum = {
    _id?: string;
    name?: string;
    value?: string;
};
type ResponseEnvelopeListSlingshotConfigurationDetail = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: SlingshotConfigurationDetail[];
    payload?: SlingshotConfigurationDetail[];
    trace_id?: string;
    page?: Page;
};
type SlingshotConfigurationDetail = {
    integration?: SlingshotIntegration;
    companies?: GCompany[];
};
type SlingshotIntegration = {
    _id?: string;
    description?: string;
    name?: string;
    slug?: string;
    meta?: Metum[];
};
type StoreData = {
    location_id?: string;
};
type KafkaMetaModel = {
    job_type?: string;
    batch_id?: number;
    action?: string;
    trace?: string[];
    created_on?: string;
    created_timestamp?: number;
};
type SuppressStoreModel = {
    stores?: number[];
};
type SuppressStorePayload = {
    payload?: SuppressStoreModel[];
    meta?: KafkaMetaModel;
};
type KafkaResponse = {
    offset?: number;
    partition?: number;
};
type ResponseEnvelopeKafkaResponse = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: KafkaResponse;
    payload?: KafkaResponse;
    trace_id?: string;
    page?: Page;
};
type DataTresholdDTO = {
    min_price?: number;
    safe_stock?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type JobConfigDTO = {
    integration: string;
    integration_data?: any;
    company_name?: string;
    company_id: number;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
    job_code?: string;
    alias?: string;
};
type TaskDTO = {
    type?: number;
    group_list?: GenericDTO[];
};
type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: string;
    payload?: string;
    trace_id?: string;
    page?: Page;
};
type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    access_key?: string;
    secret_key?: string;
    local_file_path?: string;
    archive_path?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zip_format?: string;
    file_regex?: string;
    archive_config?: ArchiveConfig;
};
type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archive_dir?: string;
};
type Audit = {
    created_by?: string;
    modified_by?: string;
    created_on?: string;
    modified_on?: string;
};
type CatalogMasterConfig = {
    source_slug?: string;
};
type CompanyConfig = {
    company_id?: number;
    exclude_steps?: number[];
    hidden_closet_keys?: string[];
    open_tags?: any;
    tax_identifiers?: string[];
    delete_quantity_threshold?: number;
};
type DBConfig = {
    vendor?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    dbname?: string;
    query?: string;
    procedure?: boolean;
    driver_class?: string;
    jdbc_url?: string;
    optional_properties?: any;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intf_article_id?: PropBeanDTO;
    price_effective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
type DocMappingConfig = {
    properties?: any;
    junk_data_threshold_count?: number;
    prop_bean_configs?: PropBeanConfig[];
    unwind_field?: string;
    default_headers?: DefaultHeadersDTO;
};
type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    read_from_content?: boolean;
    filter_based_on_recepients?: boolean;
    pcol?: string;
    subject_line_regex?: string;
    sender_address?: string;
    local_dir?: string;
    folder_name_hierarchies?: string[];
    attachment_regex?: string;
    body_content_regex?: string;
    password_protected?: boolean;
    zip_format?: string;
    attachment_mandate?: boolean;
    filter_files_after_extraction?: boolean;
    archive_config?: ArchiveConfig;
    read_all_unread_mails?: boolean;
    content_type?: string;
    downloadable_link?: boolean;
    properties?: any;
};
type FTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    local_dir?: string;
    remote_dir?: string;
    zip_file_regex?: string;
    archive_config?: ArchiveConfig;
    file_regex?: string;
    zip_format?: string;
    read_all_files?: boolean;
};
type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    file_has_header?: boolean;
    header_index?: number;
    header_array?: string[];
    data_start_index?: number;
    prop_bean_configs?: PropBeanConfig[];
    junk_data_threshold_count?: number;
    file_type?: string;
    line_validity_check?: boolean;
    sheet_names?: string[];
    read_all_sheets?: boolean;
    quote_char?: string;
    escape_char?: string;
    default_headers?: DefaultHeadersDTO;
};
type GoogleSpreadSheetConfig = {
    range?: string;
    sheet_id?: string;
    client_secret_location?: string;
    cred_storage_directory?: string;
    local_dir?: string;
    archive_config?: ArchiveConfig;
};
type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    request_params?: any;
    http_method?: string;
    request_payload?: string;
    local_path?: string;
    archive_config?: ArchiveConfig;
};
type JobConfig = {
    _id?: number;
    job_code?: string;
    task_type?: string;
    sync_delay?: number;
    cron_expression?: string;
    store_filter?: StoreFilter;
    process_config?: ProcessConfig;
    store_config?: StoreConfig[];
    properties?: any;
    immediate_first_run?: boolean;
    disable?: boolean;
    dependent_job_codes?: string[];
    company_config?: CompanyConfig[];
    company_ids?: number[];
    tax_identifiers?: string[];
    priority?: string;
    period_threshold?: number;
    period_threshold_type?: string;
    db_connection_profile?: DBConnectionProfile;
    params?: any;
    open_tags?: any;
    delete_quantity_threshold?: number;
    catalog_master_config?: CatalogMasterConfig;
    aggregator_types?: string[];
    integration_type?: string;
    min_price?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
type JobConfigRawDTO = {
    integration: string;
    company_name: string;
    company_id: number;
    data?: JobConfig;
};
type JsonDocConfig = {
    prop_bean_configs?: PropBeanConfig[];
};
type LocalFileConfig = {
    retries?: number;
    interval?: number;
    local_dir?: string;
    working_dir?: string;
    unzip?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type MongoDocConfig = {
    collection_name?: string;
    find_query?: any;
    projection_query?: any;
    prop_bean_configs?: PropBeanConfig[];
    aggregate_pipeline?: any[];
    skip_save?: boolean;
};
type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumer_key?: string;
    consumer_secret?: string;
    token?: string;
    token_secret?: string;
    rest_url?: string;
    rest_base_url?: string;
    function_name?: string;
};
type ProcessConfig = {
    db_config?: DBConfig;
    db_param_config?: DBParamConfig;
    sftp_config?: SFTPConfig;
    aws_s3_config?: AWSS3config;
    mongo_doc_config?: MongoDocConfig;
    ftp_config?: FTPConfig;
    email_config?: EmailConfig;
    file_config?: FileConfig;
    json_doc_config?: JsonDocConfig;
    doc_mapping_config?: DocMappingConfig;
    task_step_config?: TaskStepConfig;
    http_config?: HttpConfig;
    local_file_config?: LocalFileConfig;
    oauth_config?: OAuthConfig;
    google_spreadsheet_config?: GoogleSpreadSheetConfig;
};
type PropBeanConfig = {
    required?: boolean;
    mapping?: any;
    optional?: boolean;
    send?: Send;
    validations?: any[];
    values?: string[];
    include?: boolean;
    source_field?: string;
    source_fields?: string[];
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    source_field?: string;
    source_fields?: string[];
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigRawDTO[];
    payload?: JobConfigRawDTO[];
    trace_id?: string;
    page?: Page;
};
type SFTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    private_key_path?: string;
    strict_host_key_checking?: boolean;
    local_dir?: string;
    remote_dir?: string;
    password_protected?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type Send = {
    raw?: boolean;
    processed?: boolean;
};
type StoreConfig = {
    job_code?: string;
    storeid?: string;
    store_alias?: string;
    store_file_regex?: string;
    store_file_name?: string;
    process_config?: ProcessConfig;
    properties?: any;
};
type StoreFilter = {
    include_tags?: string[];
    exclude_tags?: string[];
    query?: any;
};
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: TaskParam[];
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    task_configs?: TaskConfig[];
    task_config_ids?: number[];
    task_config_group_ids?: number[];
};
type JobStepsDTO = {
    step_name?: string;
    type?: string;
    step_execution_time?: number;
    start_count?: number;
    end_count?: number;
    deleted_count?: number;
    processed_start_time?: string;
    processed_at?: string;
};
type ResponseEnvelopeListJobStepsDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobStepsDTO[];
    payload?: JobStepsDTO[];
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO[];
    payload?: JobConfigDTO[];
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    trace_id?: string;
    page?: Page;
};
type JobHistoryDto = {
    total_added_count?: number;
    total_updated_count?: number;
    total_suppressed_count?: number;
    total_initial_count?: number;
    job_id?: number;
    status?: string;
    job_code?: string;
    processed_on?: string;
    filename?: string[];
    error_type?: string;
    message?: string;
};
type JobMetricsDto = {
    job_code?: string;
    is_run_more_than_usual?: string;
    job_history?: JobHistoryDto[];
    total_success_count?: number;
    total_failure_count?: number;
    total_warning_count?: number;
    total_suppressed_count?: number;
    total_job_runs?: number;
};
type ResponseEnvelopeJobMetricsDto = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobMetricsDto;
    payload?: JobMetricsDto;
    trace_id?: string;
    page?: Page;
};
type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modified_by?: string;
    created_by?: string;
    modified_on?: string;
    created_on?: string;
    active?: boolean;
    type?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigListDTO[];
    payload?: JobConfigListDTO[];
    trace_id?: string;
    page?: Page;
};
type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    article_assignment?: ArticleAssignmentConfig;
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    business?: string;
    comms_enabled?: boolean;
    platforms?: string[];
    _id?: string;
    loyalty_points?: LoyaltyPointsConfig;
    app?: string;
    created_at?: string;
    updated_at?: string;
    modified_by?: string;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    out_of_stock?: boolean;
    only_verified_products?: boolean;
    franchise_enabled?: boolean;
    exclude_category?: any[];
    image?: string[];
    company_store?: any[];
};
type InventoryBrand = {
    criteria?: string;
    brands?: any[];
};
type InventoryStore = {
    criteria?: string;
    stores?: any[];
    rules?: AppStoreRules;
};
type AppStoreRules = {
    companies?: number[];
    brands?: any[];
};
type InventoryCategory = {
    criteria?: string;
    categories?: any[];
};
type InventoryPrice = {
    min?: number;
    max?: number;
};
type InventoryDiscount = {
    min?: number;
    max?: number;
};
type AuthenticationConfig = {
    required?: boolean;
    provider?: string;
};
type ArticleAssignmentConfig = {
    rules?: ArticleAssignmentRules;
    post_order_reassignment?: boolean;
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: any[];
};
type AppCartConfig = {
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    bulk_coupons?: boolean;
    revenue_engine_coupon?: boolean;
};
type DeliveryCharges = {
    enabled?: boolean;
    charges?: Charges;
};
type Charges = {
    threshold?: number;
    charges?: number;
};
type AppPaymentConfig = {
    callback_url?: CallbackUrl;
    methods?: Methods;
    payment_selection_lock?: PaymentSelectionLock;
    mode_of_payment?: string;
    source?: string;
    enabled?: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
};
type CallbackUrl = {
    app?: string;
    web?: string;
};
type Methods = {
    pl?: PaymentModeConfig;
    card?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    wl?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
};
type PaymentModeConfig = {
    enabled?: boolean;
};
type PaymentSelectionLock = {
    enabled?: boolean;
    default_options?: string;
    payment_identifier?: string;
};
type AppOrderConfig = {
    enabled?: boolean;
    force_reassignment?: boolean;
    message?: string;
};
type AppLogisticsConfig = {
    logistics_by_seller?: boolean;
    serviceability_check?: boolean;
    same_day_delivery?: boolean;
    dp_assignment?: boolean;
};
type LoyaltyPointsConfig = {
    enabled?: boolean;
    auto_apply?: boolean;
};
type AppInventoryPartialUpdate = {
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyalty_points?: LoyaltyPointsConfig;
    comms_enabled?: boolean;
};
type BrandCompanyInfo = {
    company_name?: string;
    company_id?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    search_text?: string;
};
type CompanyByBrandsResponse = {
    items?: BrandCompanyInfo[];
    page?: Page;
};
type StoreByBrandsRequest = {
    company_id?: number;
    brands: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: BrandStoreInfo[];
    page?: Page;
};
type BrandStoreInfo = {
    store_name?: string;
    store_id?: number;
    store_type?: string;
    store_code?: string;
    store_address?: OptedStoreAddress;
    company?: OptedCompany;
};
type CompanyBrandInfo = {
    name?: string;
    value?: number;
    brand_logo_url?: string;
    brand_banner_url?: string;
    brand_banner_portrait_url?: string;
};
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
type CreateApplicationRequest = {
    app?: App;
    configuration?: AppInventory;
    domain?: AppDomain;
};
type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
type ApplicationsResponse = {
    items?: Application[];
    page?: Page;
};
type MobileAppConfiguration = {
    is_active?: boolean;
    _id?: string;
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    application?: string;
    platform_type?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    package_name?: string;
};
type LandingImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type SplashImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type MobileAppConfigRequest = {
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    is_active?: boolean;
};
type BuildVersionHistory = {
    versions?: BuildVersion;
    latest_available_version_name?: string;
};
type BuildVersion = {
    _id?: string;
    application?: string;
    platform_type?: string;
    build_status?: string;
    version_name?: string;
    version_code?: number;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type AppSupportedCurrency = {
    _id?: string;
    supported_currency?: string[];
    application?: string;
    default_currency?: DefaultCurrency;
    created_at?: string;
    updated_at?: string;
};
type DefaultCurrency = {
    ref?: string;
    code?: string;
};
type CurrencyConfig = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type DomainAdd = {
    name?: string;
};
type DomainAddRequest = {
    domain?: DomainAdd;
};
type DomainsResponse = {
    domains?: Domain[];
};
type UpdateDomain = {
    _id?: string;
};
type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    action?: string;
};
type DomainStatusRequest = {
    domain_url?: string;
};
type DomainStatus = {
    display?: string;
    status?: boolean;
};
type DomainStatusResponse = {
    connected?: boolean;
    status?: DomainStatus[];
};
type DomainSuggestionsRequest = {
    domain_url?: string;
    custom?: boolean;
};
type DomainSuggestion = {
    name: string;
    unsupported?: boolean;
    is_available: boolean;
    price?: number;
    currency?: string;
};
type DomainSuggestionsResponse = {
    domains?: DomainSuggestion[];
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn[];
    page?: Page;
};
type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: string;
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
type CompanyValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type InventoryValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type OrderValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type IntegrationMeta = {
    is_public?: boolean;
    _id?: string;
    name?: string;
    value?: string;
};
type Integration = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: any;
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel[];
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: any[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: IntegrationMeta[];
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    data?: any;
};
type UpdateIntegrationLevelRequest = {
    items?: IntegrationLevel[];
};
type OptedStoreIntegration = {
    other_opted?: boolean;
    other_integration?: IntegrationOptIn;
    other_entity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: string[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: any[];
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type OtherEntityData = {
    article_identifier?: string;
};
type App = {
    company_id?: string;
    channel_type?: string;
    auth?: ApplicationAuth;
    name?: string;
    desc?: string;
};
type AppInventory = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: string[];
    franchise_enabled?: boolean;
    out_of_stock?: boolean;
    only_verified_products?: boolean;
    payment?: InventoryPaymentConfig;
    article_assignment?: InventoryArticleAssignment;
};
type AppDomain = {
    name?: string;
};
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
type AppInventoryCompanies = {
    uid?: number;
    name?: string;
    company_type?: string;
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type AppInventoryStores = {
    _id?: string;
    modified_on?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    company_id?: number;
};
type FilterOrderingStoreRequest = {
    all_stores?: boolean;
    deployed_stores?: number[];
    q?: string;
};
type DeploymentMeta = {
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
};
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
type OtherSellerCompany = {
    uid?: number;
    name?: string;
};
type OtherSellerApplication = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OtherSellerCompany;
    opt_type?: string;
};
type OtherSellerApplications = {
    items?: OtherSellerApplication[];
    page?: Page;
};
type OptedApplicationResponse = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OptedCompany;
    opted_inventory?: OptedInventory;
    opt_out_inventory?: OptOutInventory;
};
type OptedCompany = {
    uid?: number;
    name?: string;
};
type OptedInventory = {
    opt_type?: OptType;
    items?: any;
};
type OptType = {
    key?: string;
    display?: string;
};
type OptedStore = {
    name?: string;
    store_code?: string;
    _id?: string;
    modified_on?: string;
    uid?: number;
    address?: OptedStoreAddress;
    display_name?: string;
    store_type?: string;
    company_id?: number;
};
type OptOutInventory = {
    store: number[];
    company: number[];
};
type TokenResponse = {
    tokens?: Tokens;
    _id?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fynd_rewards?: FyndRewards;
    google_map?: GoogleMap;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
};
type Credentials = {
    ios?: Ios;
    android?: Android;
    project_id?: string;
    gcm_sender_id?: string;
    application_id?: string;
    api_key?: string;
};
type Ios = {
    application_id?: string;
    api_key?: string;
};
type Android = {
    application_id?: string;
    api_key?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    app_id?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    write_key?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    api_key?: string;
};
type Freshchat = {
    credentials?: FreshchatCredentials;
    enabled?: boolean;
};
type FreshchatCredentials = {
    app_id?: string;
    app_key?: string;
    web_token?: string;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    api_key?: string;
};
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    public_key?: string;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    api_key?: string;
};
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
type Credit = {
    enabled?: boolean;
};
type Debit = {
    enabled?: boolean;
    auto_apply?: boolean;
    strategy_channel?: string;
};
type ProductDetailFeature = {
    similar?: string[];
    seller_selection?: boolean;
    update_product_meta?: boolean;
    request_product?: boolean;
};
type LaunchPage = {
    page_type?: string;
    params?: any;
    query?: any;
};
type LandingPageFeature = {
    launch_page?: LaunchPage;
    continue_as_guest?: boolean;
    login_btn_text?: string;
    show_domain_textbox?: boolean;
    show_register_btn?: boolean;
};
type RegistrationPageFeature = {
    ask_store_address?: boolean;
};
type AppFeature = {
    product_detail?: ProductDetailFeature;
    landing_page?: LandingPageFeature;
    registration_page?: RegistrationPageFeature;
    home_page?: HomePageFeature;
    common?: CommonFeature;
    cart?: CartFeature;
    qr?: QrFeature;
    pcr?: PcrFeature;
    order?: OrderFeature;
    _id?: string;
    app?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type HomePageFeature = {
    order_processing?: boolean;
};
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    listing_price?: ListingPriceFeature;
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
    reward_points?: RewardPointsConfig;
};
type CommunicationOptinDialogFeature = {
    visibility?: boolean;
};
type DeploymentStoreSelectionFeature = {
    enabled?: boolean;
    type?: string;
};
type ListingPriceFeature = {
    value?: string;
};
type CurrencyFeature = {
    value?: string[];
    type?: string;
    default_currency?: string;
};
type RevenueEngineFeature = {
    enabled?: boolean;
};
type FeedbackFeature = {
    enabled?: boolean;
};
type CompareProductsFeature = {
    enabled?: boolean;
};
type CartFeature = {
    gst_input?: boolean;
    staff_selection?: boolean;
    placing_for_customer?: boolean;
    google_map?: boolean;
    revenue_engine_coupon?: boolean;
};
type QrFeature = {
    application?: boolean;
    products?: boolean;
    collections?: boolean;
};
type PcrFeature = {
    staff_selection?: boolean;
};
type OrderFeature = {
    buy_again?: boolean;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type UnhandledError = {
    message?: string;
};
type InvalidPayloadRequest = {
    message?: string;
};
type SuccessMessageResponse = {
    message?: string;
};
type InventoryBrandRule = {
    criteria?: string;
    brands?: number[];
};
type StoreCriteriaRule = {
    companies?: number[];
    brands?: number[];
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: StoreCriteriaRule[];
    stores?: number[];
};
type InventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: string[];
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRule;
};
type CompanyAboutAddress = {
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    address_type?: string;
};
type UserEmail = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
type UserPhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    country_code?: number;
    phone?: string;
};
type ApplicationInformation = {
    address?: InformationAddress;
    support?: InformationSupport;
    social_links?: SocialLinks;
    links?: Links;
    copyright_text?: string;
    _id?: string;
    business_highlights?: BusinessHighlights;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type InformationAddress = {
    loc?: string;
    address_line?: string[];
    phone?: InformationPhone;
    city?: string;
    country?: string;
    pincode?: number;
};
type InformationPhone = {
    code?: string;
    number?: string;
};
type InformationSupport = {
    phone?: string[];
    email?: string[];
    timing?: string;
};
type SocialLinks = {
    facebook?: FacebookLink;
    instagram?: InstagramLink;
    twitter?: TwitterLink;
    pinterest?: PinterestLink;
    google_plus?: GooglePlusLink;
    youtube?: YoutubeLink;
    linked_in?: LinkedInLink;
    vimeo?: VimeoLink;
    blog_link?: BlogLink;
};
type FacebookLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type InstagramLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type TwitterLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type PinterestLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type GooglePlusLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type YoutubeLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type LinkedInLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type VimeoLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type BlogLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type Links = {
    title?: string;
    link?: string;
};
type BusinessHighlights = {
    _id?: string;
    title?: string;
    icon?: string;
    sub_title?: string;
};
type ApplicationDetail = {
    name: string;
    description: string;
    logo: SecureUrl;
    mobile_logo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
    domain?: Domain;
    domains?: Domain[];
    _id?: string;
};
type CurrenciesResponse = {
    items?: Currency[];
};
type AppCurrencyResponse = {
    application?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: Currency[];
};
type StoreLatLong = {
    type?: string;
    coordinates?: number[];
};
type OptedStoreAddress = {
    state?: string;
    address1?: string;
    lat_long?: StoreLatLong;
    address2?: string;
    pincode?: number;
    country?: string;
    city?: string;
};
type OrderingStore = {
    address?: OptedStoreAddress;
    _id?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    pincode?: number;
    code?: string;
};
type OrderingStores = {
    page?: Page;
    items?: OrderingStore[];
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
};
type OrderingStoresResponse = {
    page?: Page;
    items?: OrderingStore[];
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    description?: string;
    title?: string;
    remove?: DisplayMetaDict;
};
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    types?: string[];
    networks?: string[];
    uses?: PaymentAllowValue;
};
type Restrictions = {
    platforms?: string[];
    user_type?: string;
    user_groups?: number[];
    uses?: UsesRestriction;
    price_range?: PriceRange;
    bulk_bundle?: BulkBundleRestriction;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    post_order?: PostOrder;
    payments?: any;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponSchedule = {
    cron?: string;
    end?: string;
    next_schedule?: any[];
    duration?: number;
    start?: string;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type Validity = {
    priority?: number;
};
type Rule = {
    max?: number;
    key?: number;
    discount_qty?: number;
    min?: number;
    value?: number;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type RuleDefinition = {
    calculate_on: string;
    is_exact?: boolean;
    applicable_on: string;
    scope?: string[];
    value_type: string;
    auto_apply?: boolean;
    type: string;
    currency_code?: string;
};
type CouponAdd = {
    action?: CouponAction;
    validation?: Validation;
    display_meta: DisplayMeta;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    state?: State;
    validity: Validity;
    tags?: string[];
    code: string;
    rule: Rule[];
    ownership: Ownership;
    rule_definition: RuleDefinition;
    type_slug: string;
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
};
type SuccessMessage = {
    message?: string;
    success?: boolean;
};
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
type CouponUpdate = {
    action?: CouponAction;
    validation?: Validation;
    display_meta: DisplayMeta;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    state?: State;
    validity: Validity;
    tags?: string[];
    code: string;
    rule: Rule[];
    ownership: Ownership;
    rule_definition: RuleDefinition;
    type_slug: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type Restrictions1 = {
    order_quantity?: number;
    platforms?: string[];
    anonymous_users?: boolean;
    uses: UsesRestriction1;
    user_groups?: number[];
    user_id?: string[];
    user_registered?: UserRegistered;
    post_order?: PostOrder1;
    payments?: PromotionPaymentModes[];
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type DisplayMeta1 = {
    offer_text?: string;
    name?: string;
    description?: string;
};
type CompareObject = {
    less_than_equals?: number;
    greater_than?: number;
    greater_than_equals?: number;
    less_than?: number;
    equals?: number;
};
type ItemCriteria = {
    item_category?: number[];
    available_zones?: string[];
    item_exclude_id?: number[];
    all_items?: boolean;
    item_size?: string[];
    cart_unique_item_amount?: CompareObject;
    item_brand?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_sku?: string[];
    item_company?: number[];
    cart_quantity?: CompareObject;
    item_id?: number[];
    item_exclude_company?: number[];
    item_store?: number[];
    cart_total?: CompareObject;
    item_exclude_store?: number[];
    item_exclude_brand?: number[];
    item_sku?: string[];
    buy_rules?: string[];
    item_exclude_category?: number[];
};
type DiscountOffer = {
    discount_price?: number;
    discount_amount?: number;
    partial_can_ret?: boolean;
    min_offer_quantity?: number;
    discount_percentage?: number;
    apportion_discount?: boolean;
    code?: string;
    max_usage_per_transaction?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
};
type DiscountRule = {
    offer: DiscountOffer;
    buy_condition: string;
    discount_type: string;
    item_criteria: ItemCriteria;
};
type PromotionSchedule = {
    cron?: string;
    end?: string;
    published: boolean;
    next_schedule?: any[];
    duration?: number;
    start: string;
};
type PromotionListItem = {
    calculate_on?: string;
    apply_all_discount?: boolean;
    _custom_json?: any;
    code?: string;
    restrictions?: Restrictions1;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    currency?: string;
    apply_exclusive?: string;
    promo_group: string;
    ownership: Ownership1;
    author?: PromotionAuthor;
    apply_priority?: number;
    mode: string;
    visiblility?: Visibility;
    application_id: string;
    post_order_action?: PromotionAction;
    display_meta: DisplayMeta1;
    buy_rules: any;
    discount_rules: DiscountRule[];
    promotion_type: string;
    _schedule?: PromotionSchedule;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    calculate_on?: string;
    apply_all_discount?: boolean;
    _custom_json?: any;
    code?: string;
    restrictions?: Restrictions1;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    currency?: string;
    apply_exclusive?: string;
    promo_group: string;
    ownership: Ownership1;
    author?: PromotionAuthor;
    apply_priority?: number;
    mode: string;
    visiblility?: Visibility;
    application_id: string;
    post_order_action?: PromotionAction;
    display_meta: DisplayMeta1;
    buy_rules: any;
    discount_rules: DiscountRule[];
    promotion_type: string;
    _schedule?: PromotionSchedule;
};
type PromotionUpdate = {
    calculate_on?: string;
    apply_all_discount?: boolean;
    _custom_json?: any;
    code?: string;
    restrictions?: Restrictions1;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    currency?: string;
    apply_exclusive?: string;
    promo_group: string;
    ownership: Ownership1;
    author?: PromotionAuthor;
    apply_priority?: number;
    mode: string;
    visiblility?: Visibility;
    application_id: string;
    post_order_action?: PromotionAction;
    display_meta: DisplayMeta1;
    buy_rules: any;
    discount_rules: DiscountRule[];
    promotion_type: string;
    _schedule?: PromotionSchedule;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    subtitle?: string;
    description?: string;
    title?: string;
    is_hidden?: boolean;
    example?: string;
    created_on?: string;
    modified_on?: string;
    type?: string;
    entity_type?: string;
    entity_slug?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    applicable?: number;
    total?: number;
    description?: string;
};
type RawBreakup = {
    subtotal?: number;
    gst_charges?: number;
    vog?: number;
    convenience_fee?: number;
    delivery_charge?: number;
    cod_charge?: number;
    you_saved?: number;
    fynd_cash?: number;
    total?: number;
    mrp_total?: number;
    coupon?: number;
    discount?: number;
};
type CouponBreakup = {
    minimum_cart_value?: number;
    coupon_type?: string;
    is_applied?: boolean;
    uid?: string;
    max_discount_value?: number;
    title?: string;
    description?: string;
    sub_title?: string;
    message?: string;
    type?: string;
    code?: string;
    coupon_value?: number;
    value?: number;
};
type DisplayBreakup = {
    display?: string;
    key?: string;
    currency_symbol?: string;
    currency_code?: string;
    message?: string[];
    value?: number;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
};
type ProductPrice = {
    add_on?: number;
    currency_symbol?: string;
    effective?: number;
    marked?: number;
    currency_code?: string;
    selling?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type FreeGiftItem = {
    item_id?: number;
    item_price_details?: any;
    item_name?: string;
    item_images_url?: string[];
    item_slug?: string;
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    article_id?: string;
    quantity?: number;
    free_gift_item_details?: FreeGiftItem;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
};
type AppliedPromotion = {
    applied_free_articles?: AppliedFreeArticles[];
    promo_id?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
    offer_text?: string;
    promotion_type?: string;
    promotion_name?: string;
    discount_rules?: DiscountRulesApp[];
    amount?: number;
    promotion_group?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    url?: string;
    type?: string;
};
type Tags = {
    tags?: any;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CartProduct = {
    action?: ProductAction;
    name?: string;
    uid?: number;
    teaser_tag?: Tags;
    slug?: string;
    _custom_json?: any;
    images?: ProductImage[];
    type?: string;
    brand?: BaseInfo;
    tags?: string[];
    categories?: CategoryInfo[];
};
type CouponDetails = {
    code?: string;
    discount_single_quantity?: number;
    discount_total_quantity?: number;
};
type PromoMeta = {
    message?: string;
};
type ProductAvailability = {
    sizes?: string[];
    out_of_stock?: boolean;
    is_valid?: boolean;
    other_store_quantity?: number;
    deliverable?: boolean;
};
type BasePrice = {
    currency_code?: string;
    marked?: number;
    effective?: number;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    uid?: string;
    is_gift_visible?: boolean;
    size?: string;
    identifier?: any;
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
    seller?: BaseInfo;
    store?: BaseInfo;
    extra_meta?: any;
    gift_card?: any;
    quantity?: number;
    product_group_tags?: string[];
    type?: string;
    seller_identifier?: string;
    is_gift?: boolean;
};
type CartProductInfo = {
    is_set?: boolean;
    discount?: string;
    bulk_offer?: any;
    price?: ProductPriceInfo;
    identifiers: CartProductIdentifer;
    parent_item_identifiers?: any;
    promotions_applied?: AppliedPromotion[];
    price_per_unit?: ProductPriceInfo;
    key?: string;
    product?: CartProduct;
    quantity?: number;
    message?: string;
    coupon_message?: string;
    coupon?: CouponDetails;
    promo_meta?: PromoMeta;
    availability?: ProductAvailability;
    article?: ProductArticle;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    city?: string;
    landmark?: string;
    area_code_slug?: string;
    name?: string;
    area_code: string;
    phone?: number;
    country?: string;
    country_code?: string;
    address?: string;
    area?: string;
    email?: string;
    state?: string;
    address_type?: string;
    meta?: any;
    pincode?: number;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
};
type PromiseTimestamp = {
    min?: number;
    max?: number;
};
type PromiseFormatted = {
    min?: string;
    max?: string;
};
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
};
type OpenApiCartServiceabilityResponse = {
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    message?: string;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type OpenApiOrderItem = {
    product_id: number;
    cashback_applied: number;
    employee_discount?: number;
    delivery_charges: number;
    price_marked: number;
    payment_methods: MultiTenderPaymentMethod[];
    coupon_effective_discount: number;
    extra_meta?: any;
    cod_charges: number;
    price_effective: number;
    quantity?: number;
    size: string;
    amount_paid: number;
    loyalty_discount?: number;
    meta?: CartItemMeta;
    discount: number;
    files?: OpenApiFiles[];
};
type OpenApiPlatformCheckoutReq = {
    employee_discount?: any;
    cashback_applied: number;
    comment?: string;
    gstin?: string;
    delivery_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    cart_items: OpenApiOrderItem[];
    order_id?: string;
    coupon_value: number;
    billing_address: ShippingAddress;
    shipping_address?: ShippingAddress;
    cart_value: number;
    cod_charges: number;
    coupon?: string;
    coupon_code: string;
    loyalty_discount?: number;
    payment_mode?: string;
    currency_code?: string;
    affiliate_order_id?: string;
    files?: OpenApiFiles[];
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    order_id: string;
    message?: string;
    success?: boolean;
};
type AbandonedCart = {
    _id: string;
    promotion?: any;
    order_id?: string;
    shipments?: any[];
    buy_now?: boolean;
    last_modified: string;
    pick_up_customer_details?: any;
    fynd_credits?: any;
    cart_value?: number;
    expire_at: string;
    articles: any[];
    meta?: any;
    created_on: string;
    bulk_coupon_discount?: number;
    is_active?: boolean;
    coupon?: any;
    payment_mode?: string;
    cashback: any;
    discount?: number;
    app_id?: string;
    is_archive?: boolean;
    uid: number;
    comment?: string;
    delivery_charges?: any;
    payment_methods?: any[];
    is_default: boolean;
    payments?: any;
    checkout_mode?: string;
    fc_index_map?: number[];
    merge_qty?: boolean;
    cod_charges?: any;
    user_id: string;
    gstin?: string;
};
type AbandonedCartResponse = {
    result?: any;
    success?: boolean;
    items?: AbandonedCart[];
    page?: Page;
    message?: string;
};
type AddProductCart = {
    item_id?: number;
    article_id?: string;
    gift_message?: string;
    pos?: boolean;
    seller_id?: number;
    parent_item_identifiers?: any;
    article_assignment?: any;
    display?: string;
    extra_meta?: any;
    quantity?: number;
    product_group_tags?: string[];
    item_size?: string;
    store_id?: number;
    is_gift?: boolean;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    buy_now?: boolean;
    gstin?: string;
    restrict_checkout?: boolean;
    last_modified?: string;
    comment?: string;
    coupon_text?: string;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    items?: CartProductInfo[];
    currency?: CartCurrency;
    message?: string;
    id?: string;
    delivery_charge_info?: string;
};
type AddCartDetailResponse = {
    partial?: boolean;
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    article_id?: string;
    item_index?: number;
    gift_message?: string;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    extra_meta?: any;
    quantity?: number;
    item_size?: string;
    is_gift?: boolean;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
};
type AppUser = {
    _id?: string;
    active?: boolean;
    application_id?: string;
    block_reason?: string;
    updated_at?: string;
    updated_by?: string;
    user_id?: string;
};
type E = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type Giveaway = {
    _id?: string;
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    audience?: RewardsAudience;
    banner_image?: Asset;
    created_at?: string;
    description?: string;
    name?: string;
    rule?: RewardsRule;
    title?: string;
    updated_at?: string;
};
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
};
type HistoryPretty = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
type HistoryRes = {
    items?: HistoryPretty[];
    page?: Page;
    points?: number;
};
type Offer = {
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    banner_image?: Asset;
    created_at?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    sub_text?: string;
    text?: string;
    type?: string;
    updated_at?: string;
    updated_by?: string;
    url?: string;
};
type Points = {
    available?: number;
};
type Referral = {
    code?: string;
};
type RewardUser = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    referral?: Referral;
    uid?: number;
    updated_at?: string;
    user_block_reason?: string;
    user_id?: string;
};
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
};
type Schedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
};
type ShareMessages = {
    email?: string;
    facebook?: string;
    fallback?: string;
    message?: string;
    messenger?: string;
    sms?: string;
    text?: string;
    twitter?: string;
    whatsapp?: string;
};
type UserRes = {
    points?: Points;
    user?: RewardUser;
};
type StatGroup = {
    key?: string;
    url?: string;
    title?: string;
};
type StatsGroups = {
    groups?: StatGroup[];
};
type StatsGroupComponent = {
    key?: string;
    url?: string;
    title?: string;
    type?: string;
    filters?: any;
};
type StatsGroupComponents = {
    title?: string;
    components?: StatsGroupComponent[];
};
type StatsRes = {
    key?: string;
    title?: string;
    type?: string;
    data?: any;
};
type ReceivedAt = {
    value?: string;
};
type AbandonCartsDetail = {
    properties_cart_id?: string;
    context_traits_first_name?: string;
    context_traits_last_name?: string;
    context_traits_phone_number?: string;
    context_traits_email?: string;
    context_app_application_id?: string;
    properties_breakup_values_raw_total?: string;
    received_at?: ReceivedAt;
};
type AbandonCartsList = {
    items?: AbandonCartsDetail[];
    cart_total?: string;
    page?: Page;
};
type AbandonCartDetail = {
    _id?: string;
    user_id?: string;
    cart_value?: string;
    articles?: any[];
    breakup?: any;
    address?: any;
};
type ExportJobReq = {
    marketplace_name?: string;
    start_time?: string;
    end_time?: string;
    event_type?: string;
    trace_id?: string;
};
type ExportJobRes = {
    status?: string;
    job_id?: string;
};
type ExportJobStatusRes = {
    status?: string;
    job_id?: string;
    download_url?: string;
};
type GetLogsListReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
};
type MkpLogsResp = {
    start_time_iso?: string;
    end_time_iso?: string;
    event_type?: string;
    trace_id?: string;
    count?: string;
    status?: string;
};
type GetLogsListRes = {
    items?: MkpLogsResp[];
    page?: Page;
};
type SearchLogReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
    identifier?: string;
    identifier_value?: string;
};
type LogInfo = {
    _id?: string;
    status?: string;
    event_type?: string;
    marketplace_name?: string;
    event?: string;
    trace_id?: string;
    company_id?: number;
    brand_id?: number;
    store_code?: string;
    store_id?: number;
    item_id?: number;
    article_id?: string;
    seller_identifier?: string;
};
type SearchLogRes = {
    items?: LogInfo[];
    page?: Page;
};
type ValidityObject = {
    start: string;
    end: string;
};
type CreateUpdateDiscount = {
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids: string[];
    extension_ids: string[];
    job_type: string;
    discount_type: string;
    discount_level: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
};
type DiscountJob = {
    _id: string;
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids?: string[];
    job_type?: string;
    discount_type?: string;
    discount_level?: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
    created_on: string;
    modified_on: string;
    created_by: UserDetails;
    modified_by: UserDetails;
    meta?: any;
};
type ListOrCalender = {
    items: DiscountJob[];
    page: Page;
};
type DiscountItems = {
    item_code?: string;
    brand_uid?: number;
    seller_identifier?: string;
    discount_type: string;
    value: number;
};
type BulkDiscount = {
    company_id: number;
    items: DiscountItems[];
};
type FileJobResponse = {
    stage: string;
    total: number;
    failed: number;
    company_id: number;
    body?: any;
    type: string;
    file_type: string;
};
type DownloadFileJob = {
    brand_ids?: number[];
    store_ids?: number[];
};
type CancelJobResponse = {
    success: boolean;
};
type UserDetails = {
    username: string;
    user_id: string;
};
type BadRequestObject = {
    message: string;
};
type AddProxyReq = {
    attached_path?: string;
    proxy_url?: string;
};
type AddProxyResponse = {
    _id?: string;
    attached_path?: string;
    proxy_url?: string;
    company_id?: string;
    application_id?: string;
    extension_id?: string;
    created_at?: string;
    modified_at?: string;
};
type APIError = {
    code?: string;
    message?: string;
    info?: string;
    request_id?: string;
    meta?: any;
};
type RemoveProxyResponse = {
    message?: string;
    data?: any;
};
type EventConfig = {
    id?: number;
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
};
type EventConfigList = {
    items?: EventConfig[];
    page?: Page;
};
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
};
type EventProcessedStatus = {
    id?: number;
    subscriber_id?: string;
    attempt?: number;
    response_code?: string;
    response_message?: string;
    created_on?: string;
    processed_on?: string;
    status?: boolean;
};
type EventPayload = {
    id?: number;
    event_trace_id?: string;
    message_id?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
    status?: boolean;
};
type SubscriberConfig = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: any;
    email_id?: string;
    auth_meta?: AuthMeta;
    event_id?: number[];
};
type SubscriberResponse = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    email_id?: string;
    status?: any;
    auth_meta?: AuthMeta;
    created_on?: string;
    updated_on?: string;
    event_configs?: EventConfig[];
};
type SubscriberEvent = {
    id?: number;
    subscriber_id?: number;
    event_id?: number;
    created_date?: string;
};
type AuthMeta = {
    type?: string;
    secret?: string;
};
type Association = {
    company_id?: number;
    application_id?: string[];
    extension_id?: string;
    criteria?: string;
};
type EventConfigBase = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    log_payload: any;
};
type CreateLogResponse = {
    message?: string;
    internal_message?: string;
};
type LogMetaObj = {
    modifier?: any;
    application?: string;
    entity?: EntityObject;
    device_info?: any;
    location?: any;
};
type EntityObject = {
    id?: string;
    type?: string;
    action?: string;
};
type LogSchemaResponse = {
    docs?: LogDocs[];
};
type LogDocs = {
    entity?: EntityObj;
    modifier?: Modifier;
    device_info?: DeviceInfo;
    location?: Location;
    _id?: string;
    company?: string;
    application?: string;
    sessions?: string;
    date?: string;
    logs?: any;
};
type EntityObj = {
    id?: string;
    type?: string;
    action?: string;
    entity_details?: any;
};
type Modifier = {
    user_id?: string;
    as_administrator?: boolean;
    user_details?: any;
};
type DeviceInfo = {
    user_agent?: string;
    extra_meta?: any;
};
type Location = {
    extra_meta?: any;
};
type EntityTypesResponse = {
    items?: EntityTypeObj[];
};
type EntityTypeObj = {
    entity_value?: string;
    display_name?: string;
};
type ServiceabilityrErrorResponse = {
    type: string;
    message: string;
    value: string;
};
type ApplicationServiceabilityConfig = {
    channel_id: string;
    channel_type: string;
    serviceability_type: string;
};
type ApplicationServiceabilityConfigResponse = {
    error?: ServiceabilityrErrorResponse;
    success: boolean;
    data?: ApplicationServiceabilityConfig;
};
type EntityRegionView_Request = {
    parent_id?: string[];
    sub_type: string[];
};
type EntityRegionView_Error = {
    type?: string;
    message?: string;
    value?: string;
};
type EntityRegionView_Items = {
    sub_type: string;
    name: string;
    uid: string;
};
type EntityRegionView_page = {
    has_next: boolean;
    item_total: number;
    current: number;
    type: string;
    size: number;
};
type EntityRegionView_Response = {
    error: EntityRegionView_Error;
    success: boolean;
    data: EntityRegionView_Items[];
    page: EntityRegionView_page;
};
type ListViewProduct = {
    count: number;
    type: string;
};
type ListViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ListViewItems = {
    product: ListViewProduct;
    slug: string;
    is_active: boolean;
    company_id: number;
    name: string;
    pincodes_count: number;
    channels: ListViewChannels;
    zone_id: string;
    stores_count: number;
};
type ListViewSummary = {
    total_active_zones: number;
    total_pincodes_served: number;
    total_zones: number;
};
type ZoneDataItem = {
    has_next: boolean;
    item_total: number;
    type: string;
    current: number;
    size: number;
};
type ListViewResponse = {
    items: ListViewItems[];
    summary: ListViewSummary[];
    page: ZoneDataItem[];
};
type CompanyStoreView_PageItems = {
    has_next: boolean;
    item_total: number;
    current: number;
    type: string;
    size: number;
};
type CompanyStoreView_Response = {
    items?: any[];
    page: CompanyStoreView_PageItems[];
};
type GetZoneDataViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ZoneProductTypes = {
    type: string;
    tags: string[];
};
type ZoneMappingType = {
    pincode?: string[];
    state?: string[];
    country: string;
};
type UpdateZoneData = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneUpdateRequest = {
    data: UpdateZoneData;
    identifier: string;
};
type ZoneSuccessResponse = {
    status_code: number;
    success: boolean;
};
type GetZoneDataViewItems = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
    stores_count: number;
    pincodes_count: number;
};
type GetSingleZoneDataViewResponse = {
    data: GetZoneDataViewItems;
};
type CreateZoneData = {
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneRequest = {
    data: CreateZoneData;
    identifier: string;
};
type ZoneResponse = {
    status_code: number;
    zone_id: string;
    success: boolean;
};
type GetZoneFromPincodeViewRequest = {
    pincode: string;
    country: string;
};
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: string[];
};
type CreatedByResponse = {
    username?: string;
    user_id?: string;
};
type DocumentsResponse = {
    verified?: boolean;
    legal_name?: string;
    type?: string;
    value?: string;
};
type IntegrationTypeResponse = {
    inventory?: string;
    order?: string;
};
type ContactNumberResponse = {
    number?: string;
    country_code?: number;
};
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
type Dp = {
    payment_mode?: string;
    transport_mode?: string;
    assign_dp_from_sb?: boolean;
    lm_priority?: number;
    rvp_priority?: number;
    external_account_id?: string;
    operations?: string[];
    area_code?: number;
    fm_priority?: number;
    internal_account_id?: string;
};
type LogisticsResponse = {
    override?: boolean;
    dp?: Dp;
};
type ModifiedByResponse = {
    username?: string;
    user_id?: string;
};
type EinvoiceResponse = {
    enabled?: boolean;
};
type EwayBillResponse = {
    enabled?: boolean;
};
type GstCredentialsResponse = {
    e_invoice?: EinvoiceResponse;
    e_waybill?: EwayBillResponse;
};
type MobileNo = {
    number?: string;
    country_code?: number;
};
type ManagerResponse = {
    mobile_no?: MobileNo;
    name?: string;
    email?: string;
};
type WarningsResponse = {
    store_address?: string;
};
type OpeningClosing = {
    hour?: number;
    minute?: number;
};
type TimmingResponse = {
    open?: boolean;
    weekday?: string;
    opening?: OpeningClosing;
    closing?: OpeningClosing;
};
type AddressResponse = {
    address2?: string;
    state?: string;
    landmark?: string;
    longitude?: number;
    pincode?: number;
    address1?: string;
    city?: string;
    country?: string;
    latitude?: number;
};
type ItemResponse = {
    store_type?: string;
    created_by?: CreatedByResponse;
    verified_on?: string;
    documents?: DocumentsResponse[];
    integration_type?: IntegrationTypeResponse;
    contact_numbers?: ContactNumberResponse[];
    sub_type?: string;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigResponse;
    created_on?: string;
    logistics?: LogisticsResponse;
    uid?: number;
    display_name?: string;
    verified_by?: ModifiedByResponse;
    code?: string;
    modified_on?: string;
    gst_credentials?: GstCredentialsResponse;
    manager?: ManagerResponse;
    warnings?: WarningsResponse;
    _cls?: string;
    _custom_json?: any;
    name?: string;
    timing?: TimmingResponse[];
    address?: AddressResponse;
    company_id?: number;
    company?: number;
    modified_by?: ModifiedByResponse;
    stage?: string;
};
type GetStoresViewResponse = {
    items?: ItemResponse[];
    page: PageResponse;
};
type GenerateBulkInvoiceLabelShipment = {
    store_id: number;
    from_date: string;
    to_date: string;
    document_type: string;
    shipment_ids?: string[];
};
type GenerateBulkInvoiceOrLabelUrl = {
    uid: string;
    document_type: string;
    batch_id: number;
};
type DocumentType = {
    invoice: string;
    label: string;
};
type BulkListBadRequestResponse = {
    success?: boolean;
    error?: string;
};
type BulkListFailedResponse = {
    success?: boolean;
    error?: string;
};
type SuccessResponseGenerateBulkShipment = {
    success: boolean;
    job_id: number;
    trace_id?: string;
};
type SuccessResponseBulkStatus = {
    success: boolean;
    status: string;
    trace_id?: string;
};
type GenerateBulkUrlSuccessResponse = {
    url: string;
    uid: string;
    expires_in: number;
    presigned_type: string;
};
type InternalErrorResponseGenerateBulkShipment = {
    success: boolean;
    error: string;
};
type BadRequestResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
    request_id?: string;
    exception?: string;
    stack_trace?: string;
    meta?: any;
};
type InternalErrorResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
};
type GenerateBulkShipment = {
    uid: string;
    store_code: string;
    batch_id: string;
    document_type: string;
};
type GenerateBulkUrl = {
    expires_in?: number;
    document_type: string;
    batch_id: string;
};
type GetBulkStatusRequest = {
    batch_id: string;
};
type BadRequestResponseGenerateBulkItemParameters = {
    missing_property?: string;
    type?: string;
};
type BadRequestResponseGenerateBulkItem = {
    keyword?: string;
    data_path?: string;
    schema_path?: string;
    parameters?: BadRequestResponseGenerateBulkItemParameters;
    message?: string;
};
type SuccessResponseGenerateBulk = {
    success: boolean;
};
type BadRequestResponseGenerateBulk = {
    success: boolean;
    error_message: BadRequestResponseGenerateBulkItem[];
};
type InternalErrorResponseGenerateBulk = {
    success: boolean;
    error_message?: string;
};
type ShippingToAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type SellerAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type BoxDetails = {
    box_id: string;
    total_quantity: string;
    package_count: string;
    dimension: string;
    weight: string;
};
type GenerateBulkBoxLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    box_details: BoxDetails[];
};
type GenerateBulkShipmentLabel = {
    label_type: string;
    uid: string;
    template_id: number;
    shipments: ShipmentDetails[];
};
type GenerateNoc = {
    uid: string;
    seller_name: string;
    seller_gstin: string;
    fc_gstin: string;
    template_id: number;
    fc_address: SellerAddress;
    seller_address: SellerAddress;
};
type PackageDetails = {
    package_id: string;
    item_quantity: string;
    package_type: string;
    packaging_type: string;
    dimension: string;
    weight: string;
};
type PackageItemDetails = {
    jio_code: string;
    item_name: string;
    mrp: string;
    country_of_origin: string;
    best_before_date: string;
    ean: string;
    package_details: PackageDetails[];
};
type GenerateBulkPackageLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    item_details: PackageItemDetails[];
};
type SignedSuccessResponse = {
    uid?: string;
    url?: string;
    expires_in?: number;
};
type BulkPresignedSuccessResponse = {
    success: string;
    batch_id?: string;
    presigned_type?: string;
    presigned_url: string;
    expires_in?: number;
};
type SignedBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type SignedFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusSuccessResponse = {
    success?: boolean;
    status?: string;
};
type StatusBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type GenerateManifest = {
    store_id: number;
    from_date: string;
    to_date: string;
    shipment_ids?: string[];
};
type GeneratePresignedManifestUrl = {
    manifest_id: string;
    uid: string;
};
type ManifestLink = {
    name: string;
    manifest_id: string;
};
type GenerateManifestUrlSuccessResponse = {
    url: string;
    uid: string;
    manifest_id: string;
    expires_in: number;
    presigned_type: string;
};
type ManifestListFailedResponse = {
    success?: boolean;
    error?: string;
};
type InvoiceLabelPresignedRequestBody = {
    document_type: string;
    entity_id: string;
    expires_in?: number;
};
