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
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcDetailsRequest, EdcDevice, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceAddUpdateResponse, EdcAddRequest, EdcDeviceListResponse, FilterInfoOption, FiltersInfo, PaymentModeInfo, ShipmentItemFulFillingStore, Prices, GSTDetailsData, PlatformItem, BagUnit, UserDataInfo, ShipmentStatus, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, ShipmentPayments, ShipmentStatusData, UserDetailsData, DPDetailsData, BagStateMapper, BagStatusHistory, TrackingList, PlatformDeliveryAddress, OrderBagArticle, Identifier, FinancialBreakup, BagConfigs, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, CurrentStatus, BagGST, OrderBrandName, OrderBags, OrderDetailsData, ShipmentInfoResponse, OrderMeta, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, ArticleDetails, Attributes, Item, Weight, Dimensions, ReturnConfig, Article, EInvoice, EinvoiceInfo, DebugInfo, Formatted, ShipmentTimeStamp, LockData, BuyerDetails, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, AffiliateBagDetails, Dates, BagReturnableCancelableStatus, B2BPODetails, BagMeta, BagGSTDetails, Brand, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, UserData, MarketPlacePdf, AffiliateBag, OrderPriority, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, TaxInfo, ShippingInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, PaymentMethod, PaymentInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, MetaFields, ApplicationItemSEO, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionImage, CollectionBanner, SeoDetail, UserInfo, CollectionBadge, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, Media2, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, Image, ReturnConfigResponse, ProductPublished, NetQuantityResponse, Product, ProductListingResponse, TaxIdentifier, TeaserTag, Trader, ProductPublish, CustomOrder, NetQuantity, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, BrandMeta, PriceMeta, CompanyMeta, DimensionResponse, QuantityBase, Quantities, Trader1, ReturnConfig1, ManufacturerResponse, WeightResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, ArticleStoreResponse, BrandMeta1, CompanyMeta1, DimensionResponse1, Quantity, QuantitiesArticle, Trader2, ReturnConfig2, ManufacturerResponse1, WeightResponse1, PriceArticle, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, UserSerializer1, GetAddressSerializer, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer2, LocationIntegrationType, SellerPhoneNumber, LocationManagerSerializer, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, UsesRemaining, UsesRestriction, PostOrder, PriceRange, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, Rule, DisplayMetaDict, DisplayMeta, Validity, CouponAuthor, CouponAction, RuleDefinition, CouponDateMeta, CouponSchedule, State, Ownership, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, DisplayMeta1, PromotionAction, PromotionSchedule, Visibility, UsesRemaining1, UsesRestriction1, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, CompareObject, ItemCriteria, PromotionAuthor, PromotionDateMeta, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductAvailability, PromoMeta, ProductPrice, ProductPriceInfo, CartProductIdentifer, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, CartProductInfo, CouponBreakup, RawBreakup, DisplayBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    priority: PriorityEnum;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: any[];
    description?: string;
    priority: PriorityEnum;
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
    priority?: PriorityEnum;
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
    type: HistoryTypeEnum;
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
    ticket?: Ticket;
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
    type: TicketAssetTypeEnum;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: TicketAsset[];
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: PriorityEnum;
    category: string;
    content: TicketContent;
    _custom_json?: any;
};
type Priority = {
    key: PriorityEnum;
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
    category: TicketCategory;
    sub_category?: string;
    source: TicketSourceEnum;
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
type Activity = {
    current_state?: any;
    document_id?: string;
    previous_state?: any;
};
type ActivityDump = {
    activity?: Activity;
    created_by?: CreatedBy;
    date_meta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entity_id?: string;
    entity_type?: string;
    media_list?: AddMediaRequest[];
    ref_id?: string;
    ref_type?: string;
};
type AddMediaRequest = {
    cloud_id?: string;
    cloud_name?: string;
    cloud_provider?: string;
    entity_id?: string;
    entity_type?: string;
    media_url?: string;
    ref_id?: string;
    ref_type?: string;
    tags?: string[];
    thumbnail_url?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entity_type?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    date_meta?: DateMeta;
    description?: string;
    id?: string;
    name?: string;
    slug?: string;
    tags?: TagMeta[];
};
type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
type CreatedBy = {
    id?: string;
    name?: string;
    tags?: TagMeta[];
};
type CursorGetResponse = {
    items?: any[];
    page?: Page;
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DeviceMeta = {
    app_version?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entity_id?: string;
    entity_type?: string;
};
type FeedbackAttributes = {
    items?: Attribute[];
    page?: Page;
};
type FeedbackError = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type FeedbackState = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
};
type GetResponse = {
    data?: any;
    page?: Page;
};
type GetReviewResponse = {
    facets?: ReviewFacet[];
    items?: any[];
    page?: Page;
    sort?: SortMethod[];
};
type InsertResponse = {
    count?: number;
};
type MediaMeta = {
    max_count?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    max_count: number;
    size: number;
};
type NumberGetResponse = {
    items?: any[];
    page?: Page;
};
type PageCursor = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Attribute[];
    attributes_slugs?: string[];
    ui?: UI;
};
type RatingRequest = {
    attributes: string[];
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entity_id: string;
    entity_type: string;
};
type Review = {
    description?: string;
    header?: string;
    image_meta?: MediaMeta;
    title?: string;
    video_meta?: MediaMeta;
    vote_allowed?: boolean;
};
type ReviewFacet = {
    display?: string;
    name?: string;
    selected?: boolean;
    slug?: string;
    type?: string;
};
type ReviewRequest = {
    description: string;
    header: string;
    image_meta: MediaMetaRequest;
    is_vote_allowed: boolean;
    title: string;
    video_meta: MediaMetaRequest;
};
type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
type SortMethod = {
    name?: string;
    selected?: boolean;
    type?: string;
};
type TagMeta = {
    media?: MediaMeta[];
    name?: string;
    type?: string;
};
type Template = {
    date_meta?: DateMeta;
    entity?: Entity;
    id?: string;
    name?: string;
    rating?: Rating;
    review?: Review;
    state?: FeedbackState;
    tags?: TagMeta[];
};
type TemplateGetResponse = {
    items?: Template[];
    page?: Page;
};
type TemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    template_list: TemplateRequest[];
};
type UI = {
    feedback_question?: string[];
    icon?: UIIcon;
    text?: string[];
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: string[];
};
type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
type UpdateResponse = {
    count?: number;
};
type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributes_rating?: AttributeObject[];
    description?: string;
    device_meta?: DeviceMeta;
    entity_id?: string;
    entity_type?: string;
    media_resource?: MediaMeta[];
    rating?: number;
    review_id?: string;
    template_id?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type UpdateTemplateStatusRequest = {
    active?: boolean;
    archive?: boolean;
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
    android_hash?: string;
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
    session_config?: any;
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
type SessionExpiry = {
    duration?: number;
    type?: string;
    is_rolling?: boolean;
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
    type: PageType;
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
type OneTimeChargeItem = {
    name: string;
    term?: string;
    pricing_type: string;
    price: EntityChargePrice;
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateOneTimeCharge = {
    name: string;
    charge: OneTimeChargeItem;
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
type OneTimeChargeEntity = {
    _id?: string;
    name?: string;
    status?: string;
    activated_on?: string;
    cancelled_on?: string;
    metadata?: any;
    return_url?: string;
    is_test?: boolean;
    pricing_type?: string;
    subscriber_id?: string;
    entity_type?: string;
    entity_id?: string;
    meta?: any;
    price?: EntityChargePrice;
};
type CreateOneTimeChargeResponse = {
    charge?: OneTimeChargeEntity;
    confirm_url?: string;
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
    credit_balance?: number;
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
type BadRequestSchema = {
    status?: string;
    message?: string;
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
    value?: any;
};
type SendOtpSmsCommsProvider = {
    slug?: string;
    _id?: string;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: any;
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
    provider?: SendOtpSmsCommsProvider;
};
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpEmailCommsTemplate;
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
    excluded_fields: string[];
    app_id: string;
    display_fields: string[];
    created: boolean;
    success: boolean;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    secret: string;
    config_type: string;
    merchant_salt: string;
    is_active?: boolean;
    key: string;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
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
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    package_name?: string;
    logos?: PaymentModeLogo;
    display_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_fingerprint?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_type?: string;
    intent_app_error_list?: string[];
    card_reference?: string;
    remaining_limit?: number;
    card_id?: string;
    merchant_code?: string;
    expired?: boolean;
    card_brand_image?: string;
    card_number?: string;
    exp_month?: number;
    display_name?: string;
    exp_year?: number;
    card_isin?: string;
    card_issuer?: string;
    card_name?: string;
    aggregator_name: string;
    nickname?: string;
    cod_limit?: number;
    card_token?: string;
    cod_limit_per_order?: number;
    fynd_vpa?: string;
    timeout?: number;
    retry_count?: number;
    code?: string;
    intent_flow?: boolean;
    intent_app_error_dict_list?: IntentAppErrorList[];
    logo_url?: PaymentModeLogo;
    intent_app?: IntentApp[];
    card_brand?: string;
    display_priority?: number;
    name?: string;
};
type RootPaymentMode = {
    aggregator_name?: string;
    list?: PaymentModeList[];
    save_card?: boolean;
    display_priority: number;
    anonymous_enable?: boolean;
    display_name: string;
    is_pay_by_card_pl?: boolean;
    name: string;
    add_card_enabled?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type Payout = {
    unique_transfer_no: any;
    more_attributes: any;
    transfer_type: string;
    is_active: boolean;
    is_default: boolean;
    payouts_aggregators: any[];
    customers: any;
};
type PayoutsResponse = {
    items: Payout[];
    success: boolean;
};
type PayoutBankDetails = {
    state?: string;
    country?: string;
    account_no?: string;
    account_holder?: string;
    bank_name?: string;
    pincode?: number;
    ifsc_code: string;
    account_type: string;
    city?: string;
    branch_name?: string;
};
type PayoutRequest = {
    transfer_type: string;
    is_active: boolean;
    users: any;
    bank_details: PayoutBankDetails;
    unique_external_id: string;
    aggregator: string;
};
type PayoutResponse = {
    payouts: any;
    unique_transfer_no: string;
    payment_status: string;
    transfer_type: string;
    users: any;
    is_active: boolean;
    created: boolean;
    success: boolean;
    bank_details: any;
    aggregator: string;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
};
type UpdatePayoutRequest = {
    is_default: boolean;
    unique_external_id: string;
    is_active: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    success: boolean;
    data: any[];
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
    success: boolean;
    data: any;
};
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    message: string;
    success: boolean;
    data?: any;
};
type NotFoundResourceError = {
    description: string;
    code: string;
    success: boolean;
};
type BankDetailsForOTP = {
    account_no: string;
    account_holder: string;
    bank_name: string;
    ifsc_code: string;
    branch_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    bank_name: string;
    success?: boolean;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    mobile?: string;
    id: number;
    ifsc_code: string;
    account_holder: string;
    is_active: boolean;
    display_name: string;
    created_on: string;
    beneficiary_id: string;
    email: string;
    branch_name?: string;
    subtitle: string;
    account_no: string;
    bank_name: string;
    title: string;
    address: string;
    delights_user_name?: string;
    comment?: string;
    modified_on: string;
    transfer_mode: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    extra_meta?: any;
    payment_gateway?: string;
    payment_id?: string;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    mode: string;
    name?: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    order_id: string;
    message: string;
    success: boolean;
};
type PlatformPaymentOptions = {
    cod_amount_limit?: number;
    cod_charges?: number;
    anonymous_cod?: boolean;
    methods: any;
    payment_selection_lock?: any;
    enabled: boolean;
    source: string;
    mode_of_payment: string;
    callback_url?: any;
};
type PlatfromPaymentConfig = {
    message: string;
    success: boolean;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    cod_amount_limit?: number;
    cod_charges?: number;
    anonymous_cod?: boolean;
    methods: any;
    payment_selection_lock?: any;
};
type CODdata = {
    remaining_limit: number;
    limit: number;
    is_active: boolean;
    usages: number;
    user_id: string;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    merchant_user_id: string;
    is_active: boolean;
    mobileno: string;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type EdcDetailsRequest = {
    terminal_serial_no: string;
};
type EdcDevice = {
    terminal_serial_no?: string;
    merchant_store_pos_code?: string;
    edc_serial_no?: string;
    is_active?: boolean;
    app_id?: string;
    device_tag?: string;
    store_id?: number;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    is_active?: string;
    terminal_serial_no: string;
    store_id: number;
    device_tag?: string;
};
type EdcDeviceAddUpdateResponse = {
    success: boolean;
};
type EdcAddRequest = {
    terminal_serial_no: string;
    merchant_store_pos_code: string;
    edc_serial_no: string;
    is_active: string;
    device_tag: string;
    store_id: number;
};
type EdcDeviceListResponse = {
    device_list: EdcDevice[];
    success: boolean;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    type: string;
    options?: FilterInfoOption[];
    value: string;
    text: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type Prices = {
    price_effective?: number;
    value_of_good?: number;
    amount_paid?: number;
    amount_paid_roundoff?: number;
    refund_amount?: number;
    coupon_value?: number;
    cod_charges?: number;
    cashback_applied?: number;
    promotion_effective_discount?: number;
    delivery_charge?: number;
    price_marked?: number;
    cashback?: number;
    fynd_credits?: number;
    discount?: number;
    tax_collected_at_source?: number;
    refund_credit?: number;
};
type GSTDetailsData = {
    value_of_good: number;
    gst_fee: number;
    gstin_code: string;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
};
type PlatformItem = {
    id?: number;
    image?: string[];
    size?: string;
    l3_category?: number;
    can_cancel?: boolean;
    color?: string;
    name?: string;
    images?: string[];
    l3_category_name?: string;
    can_return?: boolean;
    department_id?: number;
    code?: string;
    l1_category?: string[];
};
type BagUnit = {
    bag_id: number;
    ordering_channel: string;
    total_shipment_bags: number;
    prices?: Prices;
    can_cancel?: boolean;
    status: any;
    can_return?: boolean;
    shipment_id: string;
    item_quantity: number;
    gst?: GSTDetailsData;
    item?: PlatformItem;
};
type UserDataInfo = {
    uid?: number;
    last_name?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    name?: string;
    first_name?: string;
    email?: string;
    mobile?: string;
};
type ShipmentStatus = {
    title: string;
    status: string;
    actual_status: string;
    ops_status: string;
    hex_code: string;
};
type ShipmentItem = {
    id: string;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    sla?: any;
    created_at: string;
    shipment_created_at: number;
    prices?: Prices;
    total_shipments_in_order: number;
    payment_methods?: any;
    bags?: BagUnit[];
    fulfilling_centre: string;
    total_bags_count: number;
    application?: any;
    user?: UserDataInfo;
    channel?: any;
    shipment_status?: ShipmentStatus;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    applied_filters?: any;
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type FulfillingStore = {
    id: number;
    meta: any;
    fulfillment_channel: string;
    state: string;
    city: string;
    pincode: string;
    store_name: string;
    contact_person: string;
    phone: string;
    address: string;
    code: string;
    country: string;
};
type ShipmentPayments = {
    source?: string;
    logo?: string;
    mode?: string;
};
type ShipmentStatusData = {
    created_at?: string;
    id?: number;
    status?: string;
    shipment_id?: string;
    bag_list?: string[];
};
type UserDetailsData = {
    state: string;
    city: string;
    pincode: string;
    name: string;
    phone: string;
    email?: string;
    address: string;
    country: string;
};
type DPDetailsData = {
    gst_tag?: string;
    id?: number;
    eway_bill_id?: string;
    pincode?: string;
    awb_no?: string;
    track_url?: string;
    name?: string;
    country?: string;
};
type BagStateMapper = {
    app_facing?: boolean;
    notify_customer?: boolean;
    state_type: string;
    bs_id: number;
    is_active?: boolean;
    name: string;
    display_name: string;
    app_state_name?: string;
    journey_type: string;
    app_display_name?: string;
};
type BagStatusHistory = {
    forward?: boolean;
    kafka_sync?: boolean;
    bag_id?: number;
    delivery_awb_number?: string;
    created_at?: string;
    display_name?: string;
    reasons?: any[];
    state_type?: string;
    store_id?: number;
    delivery_partner_id?: number;
    updated_at?: string;
    bsh_id?: number;
    status: string;
    bag_state_mapper?: BagStateMapper;
    state_id?: number;
    shipment_id?: string;
    app_display_name?: string;
};
type TrackingList = {
    time?: string;
    is_current?: boolean;
    status: string;
    is_passed?: boolean;
    text: string;
};
type PlatformDeliveryAddress = {
    landmark?: string;
    created_at?: string;
    latitude?: number;
    address_type?: string;
    state?: string;
    longitude?: number;
    area?: string;
    city?: string;
    pincode?: string;
    updated_at?: string;
    contact_person?: string;
    address_category?: string;
    phone?: string;
    address1?: string;
    email?: string;
    version?: string;
    country?: string;
    address2?: string;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    value_of_good: number;
    transfer_price: number;
    hsn_code: string;
    discount: number;
    coupon_effective_discount: number;
    price_effective: number;
    added_to_fynd_cash: boolean;
    amount_paid_roundoff?: number;
    gst_fee: number;
    total_units: number;
    size: string;
    cod_charges: number;
    cashback_applied: number;
    promotion_effective_discount: number;
    tax_collected_at_source?: number;
    identifiers: Identifier;
    refund_credit: number;
    price_marked: number;
    fynd_credits: number;
    gst_tag: string;
    amount_paid: number;
    coupon_value: number;
    delivery_charge: number;
    cashback: number;
    brand_calculated_amount: number;
    gst_tax_percentage: number;
    item_name: string;
};
type BagConfigs = {
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type AppliedPromos = {
    promotion_name?: string;
    article_quantity?: number;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    promotion_type?: string;
    buy_rules?: BuyRules[];
    amount?: number;
    promo_id?: string;
};
type CurrentStatus = {
    kafka_sync?: boolean;
    delivery_awb_number?: number;
    current_status_id: number;
    created_at?: string;
    bag_id?: number;
    state_type?: string;
    store_id?: number;
    delivery_partner_id?: number;
    updated_at?: number;
    status?: string;
    bag_state_mapper?: BagStateMapper;
    state_id?: number;
    shipment_id?: string;
};
type BagGST = {
    gst_tag?: string;
    value_of_good?: number;
    gst_fee?: number;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    hsn_code?: string;
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
};
type OrderBrandName = {
    id: number;
    company?: string;
    logo: string;
    created_on: string;
    modified_on?: string;
    brand_name: string;
};
type OrderBags = {
    bag_id: number;
    line_number?: number;
    delivery_address?: PlatformDeliveryAddress;
    article?: OrderBagArticle;
    financial_breakup?: FinancialBreakup;
    entity_type?: string;
    item?: PlatformItem;
    seller_identifier?: string;
    identifier?: string;
    display_name?: string;
    quantity?: number;
    bag_configs?: BagConfigs;
    applied_promos?: AppliedPromos[];
    parent_promo_bags?: any;
    can_return?: boolean;
    current_status?: CurrentStatus;
    prices?: Prices;
    gst_details?: BagGST;
    can_cancel?: boolean;
    brand?: OrderBrandName;
};
type OrderDetailsData = {
    order_date?: string;
    ordering_channel?: string;
    fynd_order_id: string;
    tax_details?: any;
    cod_charges?: string;
    order_value?: string;
    source?: string;
    ordering_channel_logo?: any;
    affiliate_id?: string;
};
type ShipmentInfoResponse = {
    replacement_details?: string;
    fulfilling_store?: FulfillingStore;
    shipment_quantity?: number;
    escalation?: any;
    items: any[];
    refund_details?: any;
    credit_note_id: string;
    refund_text?: string;
    user_id: string;
    current_shipment_status: any;
    coupon?: any;
    user_agent?: string;
    child_nodes?: string[];
    mid?: string;
    delivery_slot?: any;
    email_id: string;
    affiliate_shipment_id: string;
    payments?: ShipmentPayments;
    packaging_type?: string;
    invoice: any;
    shipment_id: string;
    payment_mode?: string;
    tracking_url: string;
    shipment_status?: string;
    ordering_store: any;
    user_info?: any;
    forward_tracking_list?: any[];
    fyndstore_emp: any;
    order_created_time?: string;
    priority_text?: string;
    shipment_images?: string[];
    company: any;
    is_pdsr?: string;
    enable_dp_tracking?: boolean;
    order_status: any;
    status?: ShipmentStatusData;
    enable_tracking?: boolean;
    total_items?: number;
    order_type: string;
    is_fynd_coupon: boolean;
    delivery_details?: UserDetailsData;
    vertical?: string;
    journey_type?: string;
    beneficiary_details?: boolean;
    due_date?: string;
    status_progress: number;
    forward_shipment_status?: any[];
    dp_details?: DPDetailsData;
    bag_status_history?: BagStatusHistory[];
    can_break: string;
    is_fynd_store?: string;
    tracking_list?: TrackingList[];
    secured_delivery_flag?: string;
    bags?: OrderBags[];
    can_return?: boolean;
    order?: OrderDetailsData;
    is_invoiced: boolean;
    bank_data?: any;
    platform_logo: boolean;
    total_bags?: number;
    is_not_fynd_source: boolean;
    delivery_status: any[];
    picked_date?: string;
    kirana_store_id?: string;
    prices?: Prices;
    billing_details?: UserDetailsData;
    operational_status?: string;
    can_cancel?: boolean;
    gst_details?: GSTDetailsData;
    custom_meta?: any[];
    lock_status: string;
    is_packaging_order: boolean;
    pay_button?: string;
    go_green?: boolean;
    forward_order_status?: any[];
};
type OrderMeta = {
    staff?: any;
    ordering_store?: number;
    order_platform?: string;
    currency_symbol?: string;
    cart_id?: number;
    order_tags?: any[];
    mongo_cart_id?: number;
    payment_type?: string;
    comment?: string;
    extra_meta?: any;
    order_type?: string;
    order_child_entities?: string[];
    files?: any[];
    customer_note?: string;
    employee_id?: number;
};
type OrderDict = {
    order_date: string;
    meta?: OrderMeta;
    fynd_order_id: string;
    prices?: Prices;
    payment_methods?: any;
};
type PlatformShipment = {
    fulfilling_store?: FulfillingStore;
    shipment_quantity?: number;
    coupon?: any;
    user_agent?: string;
    delivery_slot?: any;
    payments?: ShipmentPayments;
    packaging_type?: string;
    shipment_id: string;
    payment_mode?: string;
    shipment_status?: string;
    priority_text?: string;
    shipment_images?: string[];
    enable_dp_tracking?: boolean;
    status?: ShipmentStatusData;
    total_items?: number;
    delivery_details?: UserDetailsData;
    vertical?: string;
    journey_type?: string;
    dp_details?: DPDetailsData;
    bag_status_history?: BagStatusHistory[];
    tracking_list?: TrackingList[];
    bags?: OrderBags[];
    order?: OrderDetailsData;
    platform_logo?: string;
    total_bags?: number;
    picked_date?: string;
    prices?: Prices;
    billing_details?: UserDetailsData;
    operational_status?: string;
    gst_details?: GSTDetailsData;
    custom_meta?: any[];
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    success: boolean;
    shipments?: PlatformShipment[];
};
type SubLane = {
    index?: number;
    actions?: any[];
    total_items?: number;
    value?: string;
    text?: string;
};
type SuperLane = {
    options?: SubLane[];
    value: string;
    text: string;
    total_items?: number;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    value?: string;
    name?: string;
    display?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    user_info?: UserDataInfo;
    meta?: any;
    order_created_time?: string;
    breakup_values?: PlatformBreakupValues[];
    order_id?: string;
    total_order_value?: number;
    order_value?: number;
    payment_mode?: string;
    channel?: PlatformChannel;
    shipments?: PlatformShipment[];
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    success?: boolean;
    lane?: string;
    page?: Page;
    total_count?: number;
    message?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    options?: Options[];
    value: number;
    text: string;
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    awb?: string;
    meta?: any;
    updated_time?: string;
    account_name?: string;
    updated_at?: string;
    status?: string;
    reason?: string;
    last_location_recieved_at?: string;
    raw_status?: string;
    shipment_type?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    unfulfilled?: FiltersInfo[];
    processed?: FiltersInfo[];
    filters?: FiltersInfo[];
    returned?: FiltersInfo[];
    action_centre?: FiltersInfo[];
};
type FiltersResponse = {
    global_filter?: FiltersInfo[];
    advance_filter?: AdvanceFilterInfo;
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    report_type?: string;
    report_requested_at?: string;
    report_id?: string;
    report_name?: string;
    status?: string;
    display_name?: string;
    request_details?: any;
    s3_key?: string;
    report_created_at?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    jio_code?: string;
    company_id?: string;
    article_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    type?: string;
    value?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    trace_id?: string;
    identifier?: string;
    data?: any[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    store_id?: string;
    store_code?: string;
    store_name?: string;
    company_id?: string;
    invoice?: any;
    label?: any;
    do_invoice_label_generated: boolean;
    data?: any;
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
    operation?: string;
    size?: number;
    file_path?: string;
    method?: string;
    namespace?: string;
    content_type?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    tags?: string[];
    file_name?: string;
};
type bulkListingData = {
    id?: string;
    successful?: number;
    processing_shipments?: string[];
    user_id?: string;
    store_name?: string;
    company_id?: number;
    processing?: number;
    store_id?: number;
    uploaded_on?: string;
    status?: string;
    file_name?: string;
    batch_id?: string;
    total?: number;
    failed_shipments?: any[];
    store_code?: string;
    successful_shipments?: any[];
    failed?: number;
    excel_url?: string;
    user_name?: string;
};
type BulkListingPage = {
    has_previous?: boolean;
    size?: number;
    total?: number;
    current?: number;
    has_next?: boolean;
    type?: string;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    error?: string;
    success?: boolean;
    page?: BulkListingPage;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    question_set?: QuestionSet[];
    id?: number;
    qc_type?: string[];
    display_name?: string;
};
type PlatformShipmentReasonsResponse = {
    reasons?: Reason[];
    success?: boolean;
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    failed_shipments_count?: number;
    company_id?: string;
    total_shipments_count?: number;
    successful_shipments_count?: number;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    batch_id?: string;
};
type BulkActionDetailsResponse = {
    error?: string[];
    success?: string;
    user_id?: string;
    uploaded_by?: string;
    failed_records?: string[];
    uploaded_on?: string;
    status?: boolean;
    data?: BulkActionDetailsDataField[];
    message?: string;
};
type ArticleDetails = {
    status?: any;
};
type Attributes = {
    gender?: string[];
    primary_color?: string;
    marketer_address?: string;
    primary_material?: string;
    primary_color_hex?: string;
    essential?: string;
    name?: string;
    marketer_name?: string;
    brand_name?: string;
};
type Item = {
    last_updated_at?: string;
    webstore_product_url?: string;
    l1_category?: string[];
    branch_url?: string;
    size: string;
    attributes: Attributes;
    item_id: number;
    brand_id: number;
    meta?: any;
    gender?: string;
    image: string[];
    color?: string;
    name: string;
    department_id?: number;
    can_return?: boolean;
    code?: string;
    slug_key: string;
    l1_category_id?: number;
    l3_category?: number;
    l3_category_name?: string;
    can_cancel?: boolean;
    l2_category_id?: number;
    brand: string;
    l2_category?: string[];
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Dimensions = {
    height?: number;
    is_default?: boolean;
    width?: number;
    length?: number;
    unit?: string;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Article = {
    uid: string;
    weight?: Weight;
    raw_meta?: any;
    size: string;
    identifiers: Identifier;
    dimensions?: Dimensions;
    is_set?: boolean;
    return_config?: ReturnConfig;
    seller_identifier: string;
    _id: string;
    a_set?: any;
    esp_modified?: any;
    code?: string;
    child_details?: any;
};
type EInvoice = {
    error_code?: string;
    irn?: string;
    acknowledge_date?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    error_message?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type BuyerDetails = {
    state: string;
    city: string;
    pincode: number;
    name: string;
    gstin: string;
    ajio_site_id?: string;
    address: string;
};
type ShipmentMeta = {
    return_affiliate_shipment_id?: string;
    b2c_buyer_details?: any;
    forward_affiliate_shipment_id?: string;
    return_details?: any;
    dp_sort_key?: string;
    weight: number;
    einvoice_info?: EinvoiceInfo;
    dp_id?: string;
    debug_info?: DebugInfo;
    dp_options?: any;
    return_affiliate_order_id?: string;
    box_type?: string;
    ewaybill_info?: any;
    order_type?: string;
    return_awb_number?: string;
    bag_weight?: any;
    dp_name?: string;
    return_store_node?: number;
    auto_trigger_dp_assignment_acf: boolean;
    formatted?: Formatted;
    fulfilment_priority_text?: string;
    timestamp?: ShipmentTimeStamp;
    lock_data?: LockData;
    assign_dp_from_sb?: boolean;
    forward_affiliate_order_id?: string;
    shipment_volumetric_weight?: number;
    po_number?: string;
    same_store_available: boolean;
    marketplace_store_id?: string;
    external?: any;
    packaging_name?: string;
    shipment_weight?: number;
    store_invoice_updated_date?: string;
    due_date?: string;
    awb_number?: string;
    b2b_buyer_details?: BuyerDetails;
};
type PDFLinks = {
    label_pos?: string;
    po_invoice?: string;
    b2b?: string;
    invoice_a4?: string;
    label_a6?: string;
    invoice_a6?: string;
    label_type: string;
    label_a4?: string;
    credit_note_url?: string;
    invoice?: string;
    invoice_type: string;
    label?: string;
    invoice_pos?: string;
};
type AffiliateMeta = {
    coupon_code?: string;
    channel_shipment_id?: string;
    order_item_id?: string;
    box_type?: string;
    channel_order_id?: string;
    is_priority?: boolean;
    employee_discount?: number;
    due_date?: string;
    loyalty_discount?: number;
    quantity?: number;
    size_level_total_qty?: number;
};
type AffiliateDetails = {
    affiliate_bag_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    affiliate_meta: AffiliateMeta;
    ad_id?: string;
    affiliate_shipment_id: string;
    affiliate_id?: string;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
};
type Document = {
    ds_type: string;
    legal_name: string;
    url?: string;
    value: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    enabled: boolean;
    user?: string;
    username?: string;
    password?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type StoreMeta = {
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    notification_emails?: string[];
    stage: string;
    gst_number?: string;
    product_return_config?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    display_name: string;
    timing?: any[];
    additional_contact_details?: any;
    ewaybill_portal_details?: any;
};
type StoreAddress = {
    state: string;
    longitude: number;
    city: string;
    address_category: string;
    latitude: number;
    address_type: string;
    country_code: string;
    pincode: number;
    contact_person: string;
    email?: string;
    version?: string;
    area?: string;
    address1: string;
    landmark?: string;
    country: string;
    created_at: string;
    updated_at: string;
    phone: string;
    address2?: string;
};
type Store = {
    order_integration_id?: string;
    store_active_from?: string;
    alohomora_user_id?: number;
    state: string;
    longitude: number;
    city: string;
    is_enabled_for_recon?: boolean;
    company_id: number;
    login_username: string;
    parent_store_id?: number;
    packaging_material_count?: number;
    latitude: number;
    store_email: string;
    fulfillment_channel: string;
    mall_name?: string;
    brand_store_tags?: string[];
    pincode: string;
    contact_person: string;
    brand_id?: any;
    meta: StoreMeta;
    location_type: string;
    vat_no?: string;
    is_archived?: boolean;
    name: string;
    address1: string;
    code?: string;
    country: string;
    created_at: string;
    s_id: string;
    store_address_json?: StoreAddress;
    is_active?: boolean;
    updated_at?: string;
    phone: number;
    mall_area?: string;
    address2?: string;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    employee_discount?: number;
    loyalty_discount?: number;
    affiliate_order_id: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
};
type B2BPODetails = {
    po_line_amount?: number;
    partial_can_ret?: boolean;
    item_base_price?: number;
    total_gst_percentage?: number;
    po_tax_amount?: number;
    docker_number?: string;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagGSTDetails = {
    cgst_tax_percentage: number;
    gst_tag: string;
    value_of_good: number;
    gst_fee: number;
    sgst_tax_percentage: number;
    sgst_gst_fee: string;
    hsn_code_id: string;
    igst_tax_percentage: number;
    gstin_code?: string;
    is_default_hsn_code?: boolean;
    igst_gst_fee: string;
    hsn_code: string;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gst_tax_percentage: number;
    cgst_gst_fee: string;
};
type Brand = {
    brand_id: number;
    script_last_ran?: string;
    credit_note_expiry_days?: number;
    company: string;
    pickup_location?: string;
    credit_note_allowed?: boolean;
    invoice_prefix?: string;
    start_date?: string;
    logo?: string;
    created_on?: number;
    is_virtual_invoice?: boolean;
    modified_on?: number;
    brand_name: string;
};
type BagDetailsPlatformResponse = {
    article_details?: ArticleDetails;
    b_id: number;
    order_integration_id?: string;
    line_number?: number;
    qc_required?: any;
    bag_update_time?: number;
    no_of_bags_order?: number;
    shipment_id?: string;
    item: Item;
    financial_breakup: FinancialBreakup[];
    entity_type?: string;
    article: Article;
    affiliate_details?: AffiliateDetails;
    ordering_store?: Store;
    affiliate_bag_details: AffiliateBagDetails;
    reasons?: any[];
    bag_status: BagStatusHistory[];
    dates?: Dates;
    status: BagReturnableCancelableStatus;
    seller_identifier?: string;
    current_operational_status: BagStatusHistory;
    display_name?: string;
    identifier?: string;
    restore_coupon?: boolean;
    tags?: string[];
    quantity?: number;
    journey_type: string;
    restore_promos?: any;
    meta?: BagMeta;
    original_bag_list?: number[];
    applied_promos?: any[];
    bag_status_history?: BagStatusHistory;
    parent_promo_bags?: any;
    current_status: BagStatusHistory;
    b_type?: string;
    prices: Prices;
    operational_status?: string;
    gst_details: BagGSTDetails;
    brand: Brand;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    item_total: number;
    size: number;
    current: number;
    has_next: boolean;
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
    shipment_id?: string;
    status?: number;
    message?: string;
    error?: string;
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
    affiliate_order_id?: string;
    set_id?: string;
    store_id: number;
    fynd_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    mongo_article_id?: string;
    reason_ids?: number[];
    affiliate_id?: string;
    item_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    entity_type: string;
    action: string;
    action_type: string;
};
type Bags = {
    bag_id?: number;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    is_bag_locked?: boolean;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    shipment_id?: string;
    status?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    lock_status?: boolean;
    original_filter?: OriginalFilter;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    id: number;
    description?: string;
    platform_name?: string;
    company_id?: number;
    platform_id?: string;
    to_datetime?: string;
    from_datetime?: string;
    title?: string;
    created_at?: string;
    logo_url?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    success: boolean;
    message: string;
};
type Click2CallResponse = {
    call_id: string;
    status: boolean;
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasonsFilters = {
    line_number?: number;
    identifier?: string;
    quantity?: number;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type Products = {
    line_number?: number;
    identifier?: string;
    quantity?: number;
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
    identifier: string;
    products?: Products[];
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    status?: string;
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
    force_transition?: boolean;
    task?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    identifier?: string;
    final_state?: any;
    stack_trace?: string;
    code?: string;
    status?: number;
    message?: string;
    exception?: string;
    meta?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    id: string;
    token: string;
    updated_at: string;
    description?: string;
    name: string;
    owner: string;
    secret: string;
    meta?: AffiliateAppConfigMeta[];
    created_at: string;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    id: string;
    token: string;
    config?: AffiliateConfig;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    affiliate: Affiliate;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    store_lookup?: string;
    article_lookup?: string;
    bag_end_state?: string;
};
type OrderUser = {
    address2?: string;
    city: string;
    country: string;
    state: string;
    pincode: string;
    email: string;
    first_name: string;
    mobile: number;
    address1?: string;
    phone: number;
    last_name: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    price_marked: number;
    affiliate_store_id: string;
    modified_on: string;
    company_id: number;
    hsn_code_id: string;
    item_id: number;
    discount: number;
    store_id: number;
    identifier: any;
    seller_identifier: string;
    pdf_links?: MarketPlacePdf;
    fynd_store_id: string;
    avl_qty: number;
    unit_price: number;
    transfer_price: number;
    _id: string;
    price_effective: number;
    item_size: string;
    delivery_charge: number;
    affiliate_meta: any;
    quantity: number;
    sku: string;
    amount_paid: number;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
};
type ArticleDetails1 = {
    _id: string;
    weight: any;
    category: any;
    brand_id: number;
    dimension: any;
    quantity: number;
    attributes: any;
};
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails1[];
    fulfillment_id: number;
};
type ShipmentDetails = {
    box_type?: string;
    shipments: number;
    fulfillment_id: number;
    dp_id?: number;
    meta?: any;
    affiliate_shipment_id: string;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    identifier: string;
    to_pincode: string;
    source: string;
    location_details?: LocationDetails;
    action: string;
    journey: string;
    shipment: ShipmentDetails[];
    payment_mode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    user: UserData;
    affiliate_order_id?: string;
    discount: number;
    bags: AffiliateBag[];
    delivery_charges: number;
    shipping_address: OrderUser;
    order_value: number;
    items: any;
    cod_charges: number;
    payment_mode: string;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    shipment?: ShipmentData;
    payment?: any;
    coupon?: string;
};
type CreateOrderPayload = {
    affiliate_id: string;
    order_config: OrderConfig;
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
    display_text: string;
    slug: string;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    user: string;
    bag_id?: number;
    type: string;
    l1_detail?: string;
    l2_detail?: string;
    message: string;
    l3_detail?: string;
    ticket_id?: string;
    createdat: string;
    ticket_url?: string;
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
    order_id: string;
    country_code: string;
    shipment_id: number;
    payment_mode: string;
    message: string;
    brand_name: string;
    phone_number: number;
    amount_paid: number;
};
type SendSmsPayload = {
    bag_id: number;
    data?: SmsDataPayload;
    slug: string;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    id: number;
    shipment_id?: string;
    status?: string;
    meta: Meta;
    remarks?: string;
    bag_list?: number[];
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type OrderStatusData = {
    errors?: string[];
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    dp_id: number;
    shipment_ids?: string[];
    order_type: string;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ShippingInfo = {
    geo_location?: any;
    city: string;
    state: string;
    house_no?: string;
    primary_email: string;
    country: string;
    last_name?: string;
    address2?: string;
    pincode: string;
    country_code?: string;
    state_code?: string;
    customer_code?: string;
    first_name: string;
    primary_mobile_number: string;
    shipping_type?: string;
    middle_name?: string;
    address_type?: string;
    floor_no?: string;
    alternate_email?: string;
    external_customer_code?: string;
    slot?: any[];
    landmark?: string;
    gender?: string;
    alternate_mobile_number?: string;
    address1: string;
    title?: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_by_date?: string;
    customer_pickup_slot?: any;
    pack_by_date?: string;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
};
type Tax = {
    breakup?: any[];
    name: string;
    rate: number;
    amount: any;
};
type Charge = {
    name: string;
    tax?: Tax;
    amount: any;
    type: string;
    code?: string;
};
type LineItem = {
    seller_identifier: string;
    external_line_id?: string;
    custom_messasge?: string;
    quantity?: number;
    meta?: any;
    charges?: Charge[];
};
type Shipment = {
    priority?: number;
    external_shipment_id?: string;
    processing_dates?: ProcessingDates;
    location_id: number;
    meta?: any;
    line_items: LineItem[];
};
type PaymentMethod = {
    name: string;
    amount: number;
    refund_by: string;
    transaction_data?: any;
    meta?: any;
    collect_by: string;
    mode: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type BillingInfo = {
    city: string;
    state: string;
    house_no?: string;
    primary_email: string;
    country: string;
    last_name?: string;
    address2?: string;
    pincode: string;
    country_code?: string;
    state_code?: string;
    customer_code?: string;
    first_name: string;
    primary_mobile_number: string;
    middle_name?: string;
    floor_no?: string;
    alternate_email?: string;
    external_customer_code?: string;
    gender?: string;
    alternate_mobile_number?: string;
    address1: string;
    title?: string;
};
type CreateOrderAPI = {
    tax_info?: TaxInfo;
    external_order_id?: string;
    shipping_info: ShippingInfo;
    shipments: Shipment[];
    currency_info?: any;
    meta?: any;
    external_creation_date?: string;
    charges?: Charge[];
    payment_info: PaymentInfo;
    billing_info: BillingInfo;
};
type CreateOrderErrorReponse = {
    info?: any;
    stack_trace?: string;
    code?: string;
    status: number;
    request_id?: string;
    message: string;
    exception?: string;
    meta?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    collect_by?: string;
    refund_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
    location_reassignment?: boolean;
    lock_states?: string[];
    payment_info?: CreateChannelPaymentInfo;
    logo_url?: any;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_upserted?: boolean;
    is_inserted?: boolean;
};
type UploadConsent = {
    consent_url: string;
    manifest_id: string;
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
    mobile: number;
    start_date: string;
    order_details?: FyndOrderIdList[];
    end_date: string;
};
type GetSearchWordsData = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    uid?: string;
    result?: any;
    words?: string[];
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
    result: SearchKeywordResult;
    words?: string[];
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    results?: any[];
    app_id?: string;
    uid?: string;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type Media = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type AutocompletePageAction = {
    query?: any;
    url?: string;
    params?: any;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    logo?: Media;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    results?: AutocompleteResult[];
    app_id?: string;
    is_active?: boolean;
    words?: string[];
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    _custom_json?: any;
    words?: string[];
    results?: any[];
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    max_quantity: number;
    allow_remove?: boolean;
    min_quantity: number;
    auto_select?: boolean;
    product_uid: number;
};
type GetProductBundleCreateResponse = {
    company_id?: number;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    modified_by?: any;
    slug: string;
    is_active: boolean;
    page_visibility?: string[];
    created_by?: any;
    name: string;
    modified_on?: string;
    created_on?: string;
    choice: string;
    logo?: string;
    meta?: any;
    id?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    company_id?: number;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    modified_by?: any;
    slug: string;
    is_active: boolean;
    page_visibility?: string[];
    created_by?: any;
    name: string;
    modified_on?: string;
    created_on?: string;
    choice: string;
    logo?: string;
    meta?: any;
};
type Size = {
    quantity?: number;
    display?: string;
    value?: string;
    is_available?: boolean;
};
type LimitedProductData = {
    sizes?: string[];
    attributes?: any;
    item_code?: string;
    uid?: number;
    images?: string[];
    slug?: string;
    quantity?: number;
    identifier?: any;
    name?: string;
    country_of_origin?: string;
    price?: any;
    short_description?: string;
};
type Price = {
    min_effective?: number;
    max_marked?: number;
    currency?: string;
    max_effective?: number;
    min_marked?: number;
};
type GetProducts = {
    sizes?: Size[];
    max_quantity?: number;
    auto_select?: boolean;
    product_details?: LimitedProductData;
    allow_remove?: boolean;
    min_quantity?: number;
    auto_add_to_cart?: boolean;
    price?: Price;
    product_uid?: number;
};
type GetProductBundleResponse = {
    company_id?: number;
    same_store_assignment?: boolean;
    products?: GetProducts[];
    page_visibility?: string[];
    slug?: string;
    is_active?: boolean;
    name?: string;
    choice?: string;
    logo?: string;
    meta?: any;
};
type ProductBundleUpdateRequest = {
    company_id?: number;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    modified_by?: any;
    slug: string;
    is_active: boolean;
    page_visibility?: string[];
    name: string;
    modified_on?: string;
    choice: string;
    logo?: string;
    meta?: any;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    company_id?: number;
    tag?: string;
    image?: string;
    modified_by?: any;
    subtitle?: string;
    created_by?: any;
    name: string;
    modified_on?: string;
    title: string;
    created_on?: string;
    guide?: Guide;
    active?: boolean;
    id?: string;
    brand_id?: number;
    description?: string;
};
type SizeGuideResponse = {
    company_id?: number;
    tag?: string;
    modified_by?: any;
    created_by?: any;
    subtitle?: string;
    modified_on?: string;
    name?: string;
    title?: string;
    created_on?: string;
    guide?: any;
    active?: boolean;
    id?: string;
    brand_id?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type OwnerAppItemResponse = {
    is_gift?: boolean;
    seo?: SEOData;
    alt_text?: any;
    is_cod?: boolean;
    moq?: MOQData;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
    alt_text?: any;
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    data: any[];
    values?: any[];
    condition?: any[];
};
type PageResponseType = {
    has_next: boolean;
    total_count: number;
    next: number;
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
    key?: string;
    priority: number;
    display_type: string;
    is_active: boolean;
    slug?: string;
    name: string;
    unit?: string;
    logo?: string;
};
type AppConfigurationDetail = {
    attributes?: AttributeDetailsGroup[];
    priority: number;
    app_id: string;
    template_slugs?: string[];
    is_active: boolean;
    slug: string;
    name?: string;
    is_default: boolean;
    logo?: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    key: string;
    priority: number;
    app_id: string;
    is_active: boolean;
    default_key: string;
    name?: string;
    is_default: boolean;
    logo?: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    compare?: any;
    detail?: any;
    variant?: any;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    key?: string;
    units?: any[];
    filter_types?: string[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    key: string;
    priority: number;
    is_active: boolean;
    subtitle?: string;
    size?: ProductSize;
    title?: string;
    logo?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    key: string;
    priority: number;
    display_type: string;
    is_active: boolean;
    name: string;
    size: ProductSize;
    logo?: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationListingSortConfig = {
    key: string;
    priority: number;
    is_active: boolean;
    name?: string;
    logo?: string;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    value?: string;
    condition?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    key: string;
    priority: number;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    name?: string;
    type: string;
    display_name?: string;
    logo?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppCatalogConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    modified_by?: any;
    created_by?: any;
    modified_on?: string;
    type?: string;
    created_on?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    modified_by?: any;
    created_by?: any;
    modified_on?: string;
    type?: string;
    created_on?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    app_id: string;
    config_id?: string;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersValue = {
    currency_symbol?: string;
    is_selected: boolean;
    currency_code?: string;
    selected_min?: number;
    value: any;
    display_format?: string;
    min?: number;
    query_format?: string;
    display: string;
    count?: number;
    selected_max?: number;
    max?: number;
};
type ProductFiltersKey = {
    display: string;
    name: string;
    operators?: string[];
    kind?: string;
    logo?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators: any;
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type GetCollectionDetailNest = {
    banners?: ImageUrls;
    app_id?: string;
    allow_sort?: boolean;
    action?: Action;
    meta?: any;
    description?: string;
    visible_facets_keys?: string[];
    cron?: any;
    is_active?: boolean;
    slug?: string;
    query?: CollectionQuery[];
    logo?: Media1;
    badge?: any;
    allow_facets?: boolean;
    tag?: string[];
    priority?: number;
    _schedule?: any;
    uid?: string;
    name?: string;
    type?: string;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: GetCollectionDetailNest[];
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type UserInfo = {
    uid?: string;
    username?: string;
    user_id?: string;
    email?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionSchedule = {
    start?: string;
    cron?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    end?: string;
};
type CreateCollection = {
    sort_on?: string;
    banners: CollectionBanner;
    app_id: string;
    allow_sort?: boolean;
    published?: boolean;
    meta?: any;
    description?: string;
    visible_facets_keys?: string[];
    _custom_json?: any;
    seo?: SeoDetail;
    slug: string;
    is_active?: boolean;
    created_by?: UserInfo;
    query?: CollectionQuery[];
    logo: CollectionImage;
    badge?: CollectionBadge;
    tags?: string[];
    allow_facets?: boolean;
    priority?: number;
    _schedule?: CollectionSchedule;
    name: string;
    modified_by?: UserInfo;
    is_visible?: boolean;
    type: string;
    _locale_language?: any;
};
type CollectionCreateResponse = {
    sort_on?: string;
    banners?: ImageUrls;
    app_id?: string;
    allow_sort?: boolean;
    meta?: any;
    description?: string;
    visible_facets_keys?: string[];
    cron?: any;
    is_active?: boolean;
    slug?: string;
    query?: CollectionQuery[];
    logo?: BannerImage;
    badge?: any;
    allow_facets?: boolean;
    tag?: string[];
    priority?: number;
    _schedule?: any;
    name?: string;
    type?: string;
};
type CollectionDetailResponse = {
    visible_facets_keys?: string[];
    allow_facets?: boolean;
    tag?: string[];
    banners?: ImageUrls;
    app_id?: string;
    cron?: any;
    priority?: number;
    allow_sort?: boolean;
    _schedule?: any;
    badge?: any;
    is_active?: boolean;
    slug?: string;
    name?: string;
    type?: string;
    query?: CollectionQuery[];
    logo?: Media1;
    meta?: any;
    description?: string;
};
type UpdateCollection = {
    sort_on?: string;
    banners?: CollectionBanner;
    allow_sort?: boolean;
    published?: boolean;
    meta?: any;
    description?: string;
    visible_facets_keys?: string[];
    _custom_json?: any;
    seo?: SeoDetail;
    slug?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    logo?: CollectionImage;
    badge?: CollectionBadge;
    tags?: string[];
    allow_facets?: boolean;
    priority?: number;
    _schedule?: CollectionSchedule;
    name?: string;
    modified_by?: UserInfo;
    is_visible?: boolean;
    type?: string;
    _locale_language?: any;
};
type ProductBrand = {
    uid?: number;
    logo?: Media1;
    name?: string;
    action?: Action;
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
    brand?: ProductBrand;
    promo_meta?: any;
    discount?: string;
    highlights?: string[];
    tryouts?: string[];
    has_variant?: boolean;
    rating_count?: number;
    description?: string;
    teaser_tag?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    medias?: Media1[];
    attributes?: any;
    uid?: number;
    item_type?: string;
    name?: string;
    image_nature?: string;
    sellable?: boolean;
    short_description?: string;
    product_online_date?: string;
    item_code?: string;
    rating?: number;
    similars?: string[];
    type?: string;
    color?: string;
    price?: ProductListingPrice;
};
type GetCollectionItemsResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    page?: Page;
    items?: ProductListingDetail[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
    type?: string;
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightBrand = {
    article_freshness?: number;
    available_sizes?: number;
    available_articles?: number;
    total_articles?: number;
    name?: string;
    total_sizes?: number;
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightResponse = {
    brand_distribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    company_id?: number;
    enabled?: boolean;
    store_ids?: number[];
    opt_level: string;
    platform?: string;
    brand_ids?: number[];
};
type CompanyOptIn = {
    company_id: number;
    enabled: boolean;
    modified_by?: any;
    created_by?: any;
    store_ids: number[];
    opt_level: string;
    platform: string;
    modified_on: number;
    created_on: number;
    brand_ids: number[];
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    uid?: number;
    business_type?: string;
    name?: string;
    company_type?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_name?: string;
    total_article?: number;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    company?: string;
    store?: number;
    brand?: number;
};
type StoreDetail = {
    company_id?: number;
    manager?: any;
    store_type?: string;
    uid?: number;
    additional_contacts?: any[];
    name?: string;
    documents?: any[];
    modified_on?: string;
    display_name?: string;
    created_on?: string;
    address?: any;
    timing?: any;
    store_code?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    multi?: boolean;
    range?: AttributeSchemaRange;
    mandatory?: boolean;
    type: string;
    format?: string;
    allowed_values?: string[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type GenderDetail = {
    is_nested?: boolean;
    schema?: AttributeMaster;
    departments?: string[];
    details?: AttributeMasterDetails;
    slug?: string;
    name?: string;
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    logo?: string;
    meta?: AttributeMasterMeta;
    id?: string;
    description?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    message?: string;
    errors?: any;
    code?: string;
    status?: number;
    meta?: any;
};
type UserSerializer = {
    user_id?: string;
    contact?: string;
    _id?: string;
    uid?: string;
    username?: string;
};
type GetDepartment = {
    page_size?: number;
    modified_by?: UserSerializer;
    uid?: number;
    is_active?: boolean;
    slug?: string;
    created_by?: UserSerializer;
    name?: string;
    search?: string;
    modified_on?: string;
    priority_order?: number;
    created_on?: string;
    item_type?: string;
    logo?: string;
    synonyms?: string[];
    page_no?: number;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    message?: string;
    errors?: any;
    code?: string;
    status?: number;
    meta?: any;
};
type DepartmentCreateUpdate = {
    _custom_json?: any;
    uid?: number;
    is_active?: boolean;
    slug?: string;
    name: string;
    tags?: string[];
    priority_order: number;
    _cls?: string;
    logo: string;
    synonyms?: string[];
    platforms?: any;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    user_id: string;
    username: string;
    super_user?: boolean;
    contact?: string;
};
type DepartmentModel = {
    logo: any;
    _custom_json?: any;
    verified_on?: string;
    _id?: any;
    modified_by?: UserDetail;
    slug?: any;
    uid?: number;
    created_by?: UserDetail;
    is_active?: boolean;
    modified_on: string;
    name: any;
    priority_order: number;
    created_on: string;
    _cls?: any;
    verified_by?: UserDetail;
    synonyms?: any[];
};
type ProductTemplate = {
    departments?: string[];
    attributes?: string[];
    tag?: string;
    categories?: string[];
    is_archived?: boolean;
    is_expirable?: boolean;
    modified_by?: any;
    slug: string;
    is_active?: boolean;
    created_by?: any;
    name?: string;
    modified_on?: string;
    created_on?: string;
    attributes_schema?: any[];
    logo?: string;
    is_physical: boolean;
    description?: string;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    sizes?: any;
    brand_uid?: any;
    highlights?: any;
    currency?: any;
    hsn_code?: any;
    command?: any;
    description?: any;
    teaser_tag?: any;
    trader?: any;
    no_of_boxes?: any;
    media?: any;
    category_slug?: any;
    slug?: any;
    is_active?: any;
    trader_type?: any;
    return_config?: any;
    product_publish?: any;
    tags?: any;
    custom_order?: any;
    multi_size?: any;
    is_dependent?: any;
    item_type?: any;
    country_of_origin?: any;
    name?: any;
    short_description?: any;
    size_guide?: any;
    variants?: any;
    item_code?: any;
    product_group_tag?: any;
};
type GlobalValidation = {
    definitions?: any;
    required?: string[];
    properties?: Properties;
    type?: string;
    title?: string;
    description?: string;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    departments?: string[];
    attributes?: string[];
    tag?: string;
    categories?: string[];
    is_archived?: boolean;
    id?: string;
    is_expirable?: boolean;
    slug: string;
    is_active?: boolean;
    name?: string;
    attributes_schema?: any[];
    logo?: string;
    is_physical: boolean;
    description?: string;
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
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    templates?: string[];
    brand?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    url?: string;
    task_id?: string;
    created_by?: VerifiedBy;
    template_tags?: any;
    trigger_on?: string;
    seller_id?: number;
    completed_on?: string;
    status?: string;
    data?: ProductDownloadItemsData;
    id?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Category = {
    hierarchy?: Hierarchy[];
    priority?: number;
    media?: Media2;
    level: number;
    marketplaces?: CategoryMapping;
    uid?: number;
    slug?: string;
    is_active: boolean;
    created_by?: any;
    name: string;
    tryouts?: string[];
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    id?: string;
    synonyms?: string[];
    departments: number[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    hierarchy?: Hierarchy[];
    priority?: number;
    media?: Media2;
    level: number;
    marketplaces?: CategoryMapping;
    slug?: string;
    is_active: boolean;
    name: string;
    tryouts?: string[];
    synonyms?: string[];
    departments: number[];
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
type Logo = {
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type Image = {
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type ReturnConfigResponse = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type Product = {
    sizes?: any[];
    brand_uid?: number;
    all_sizes?: any[];
    brand?: Brand;
    template_tag?: string;
    highlights?: string[];
    primary_color?: string;
    verified_on?: string;
    category?: any;
    all_identifiers?: string[];
    currency?: string;
    hsn_code?: string;
    all_company_ids?: number[];
    tax_identifier?: any;
    created_on?: string;
    verified_by?: VerifiedBy;
    description?: string;
    moq?: any;
    teaser_tag?: any;
    _custom_json?: any;
    trader?: any[];
    company_id?: number;
    no_of_boxes?: number;
    category_slug?: string;
    media?: Media1[];
    slug?: string;
    is_active?: boolean;
    images?: Image[];
    created_by?: any;
    return_config?: ReturnConfigResponse;
    product_publish?: ProductPublished;
    id?: string;
    pending?: string;
    is_physical?: boolean;
    departments?: number[];
    custom_order?: any;
    tags?: string[];
    attributes?: any;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    is_dependent?: boolean;
    uid?: number;
    item_type?: string;
    country_of_origin?: string;
    l3_mapping?: string[];
    name?: string;
    variant_media?: any;
    modified_on?: string;
    image_nature?: string;
    short_description?: string;
    net_quantity?: NetQuantityResponse;
    size_guide?: string;
    is_set?: boolean;
    variants?: any;
    variant_group?: any;
    item_code?: string;
    is_expirable?: boolean;
    modified_by?: any;
    stage?: string;
    product_group_tag?: string[];
    color?: string;
    category_uid?: number;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code?: string;
    hsn_code_id?: string;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductCreateUpdateSchemaV2 = {
    sizes: any[];
    brand_uid: number;
    template_tag: string;
    highlights?: string[];
    currency: string;
    action?: string;
    tax_identifier: TaxIdentifier;
    description?: string;
    company_id: number;
    teaser_tag?: TeaserTag;
    _custom_json?: any;
    trader: Trader[];
    no_of_boxes?: number;
    category_slug: string;
    media?: Media1[];
    slug: string;
    is_active?: boolean;
    bulk_job_id?: string;
    return_config: ReturnConfig;
    product_publish?: ProductPublish;
    tags?: string[];
    custom_order?: CustomOrder;
    departments: number[];
    change_request_id?: any;
    attributes: any;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    is_dependent?: boolean;
    uid?: number;
    item_type: string;
    variant_media?: any;
    country_of_origin: string;
    name: string;
    short_description?: string;
    net_quantity?: NetQuantity;
    size_guide?: string;
    is_set?: boolean;
    variant_group?: any;
    variants?: any;
    requester?: string;
    item_code: string;
    product_group_tag?: string[];
};
type ProductVariants = {
    brand_uid?: number;
    item_code?: string;
    media?: Media1[];
    uid?: number;
    name?: string;
    category_uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    suggestion?: string;
    created_on?: string;
    filters: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    description?: string;
    schema: AttributeMaster;
    slug: string;
    created_by?: any;
    logo?: string;
    tags?: string[];
    departments: string[];
    name?: string;
    modified_on?: string;
    unit?: string;
    is_nested?: boolean;
    details: AttributeMasterDetails;
    modified_by?: any;
    raw_key?: string;
    variant?: boolean;
    synonyms?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    brand_uid: number;
    template_tag: string;
    highlights?: string[];
    currency: string;
    action?: string;
    tax_identifier: TaxIdentifier;
    description?: string;
    company_id: number;
    teaser_tag?: TeaserTag;
    _custom_json?: any;
    trader: Trader[];
    no_of_boxes?: number;
    category_slug: string;
    media?: Media1[];
    slug: string;
    is_active?: boolean;
    bulk_job_id?: string;
    return_config: ReturnConfig;
    product_publish?: ProductPublish;
    tags?: string[];
    custom_order?: CustomOrder;
    departments: number[];
    change_request_id?: any;
    multi_size?: boolean;
    is_image_less_product?: boolean;
    is_dependent?: boolean;
    uid?: number;
    item_type: string;
    variant_media?: any;
    country_of_origin: string;
    name: any;
    short_description?: string;
    net_quantity?: NetQuantity;
    size_guide?: string;
    is_set?: boolean;
    variant_group?: any;
    variants?: any;
    requester?: string;
    item_code: any;
    product_group_tag?: string[];
};
type ValidateIdentifier = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type AllSizes = {
    identifiers?: ValidateIdentifier[];
    item_width: number;
    item_height: number;
    item_weight: number;
    item_length: number;
    item_dimensions_unit_of_measure: string;
    size: any;
    item_weight_unit_of_measure: any;
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    company_id?: number;
    file_path?: string;
    template_tag?: string;
    template?: ProductTemplate;
    total?: number;
    modified_by?: UserDetail1;
    cancelled?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    failed?: number;
    created_by?: UserDetail1;
    stage?: string;
    modified_on?: string;
    succeed?: number;
    failed_records?: string[];
    created_on?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    uid?: string;
    username?: string;
    user_id?: string;
    email?: string;
};
type BulkJob = {
    company_id: number;
    file_path?: string;
    template_tag?: string;
    modified_by?: UserInfo1;
    cancelled?: number;
    is_active?: boolean;
    cancelled_records?: any[];
    created_by?: UserInfo1;
    succeed?: number;
    modified_on?: string;
    failed?: number;
    failed_records?: any[];
    total?: number;
    created_on: string;
    stage?: string;
    tracking_url?: string;
    custom_template_tag?: string;
};
type BulkResponse = {
    batch_id: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    created_by?: UserInfo1;
    modified_on?: string;
    created_on: string;
};
type BulkProductRequest = {
    company_id: number;
    data: any[];
    template_tag: string;
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    user_id?: string;
    username?: string;
    company_id?: number;
};
type Items = {
    company_id?: number;
    file_path?: string;
    retry?: number;
    total?: number;
    modified_by?: UserCommon;
    cancelled?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    created_by?: UserCommon;
    succeed?: number;
    modified_on?: string;
    failed?: number;
    stage?: string;
    failed_records?: string[];
    created_on?: string;
    id?: string;
    tracking_url?: string;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    company_id?: number;
    url: string;
    user: any;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    size?: string;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    seller_identifier?: string;
    identifiers?: any;
    sellable_quantity?: number;
    store?: any;
    uid?: string;
    currency?: string;
    quantity?: number;
    size?: string;
    price?: number;
    price_transfer?: number;
    inventory_updated_on?: string;
    price_effective?: number;
    item_id?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: any;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    quantity?: number;
    name?: string;
    size_distribution: SizeDistribution;
};
type InvSize = {
    identifiers: GTIN[];
    is_set?: boolean;
    expiration_date?: string;
    item_width?: number;
    item_height?: number;
    item_weight?: number;
    set?: InventorySet;
    item_length?: number;
    item_dimensions_unit_of_measure?: string;
    size: any;
    item_weight_unit_of_measure?: string;
    price?: number;
    quantity: number;
    currency: string;
    price_transfer?: number;
    price_effective: number;
    store_code: string;
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    company_id: number;
    sizes: InvSize[];
    item: ItemQuery;
};
type BrandMeta = {
    id: number;
    name: string;
};
type PriceMeta = {
    marked: number;
    tp_notes?: any;
    currency: string;
    updated_at?: string;
    effective: number;
    transfer: number;
};
type CompanyMeta = {
    id: number;
};
type DimensionResponse = {
    height: number;
    length: number;
    is_default: boolean;
    unit: string;
    width: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type ReturnConfig1 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type InventorySellerResponse = {
    store: StoreMeta;
    brand: BrandMeta;
    raw_meta?: any;
    price: PriceMeta;
    company: CompanyMeta;
    size: string;
    tax_identifier?: any;
    fynd_item_code: string;
    dimension: DimensionResponse;
    quantities?: Quantities;
    meta?: any;
    _custom_json?: any;
    trader?: Trader1[];
    expiration_date?: string;
    is_active?: boolean;
    created_by?: UserSerializer;
    set?: InventorySet;
    return_config?: ReturnConfig1;
    tags?: string[];
    item_id: number;
    total_quantity: number;
    seller_identifier: string;
    uid: string;
    country_of_origin: string;
    identifier: any;
    manufacturer: ManufacturerResponse;
    is_set?: boolean;
    fynd_meta?: any;
    modified_by?: UserSerializer;
    track_inventory?: boolean;
    trace_id?: string;
    weight: WeightResponse;
    stage?: string;
    fragile: boolean;
    fynd_article_code: string;
    added_on_store?: string;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    company_id?: number;
    file_path?: string;
    total?: number;
    modified_by?: any;
    cancelled?: number;
    is_active?: boolean;
    cancelled_records?: string[];
    created_by?: any;
    failed?: number;
    modified_on?: string;
    stage?: string;
    succeed?: number;
    failed_records?: string[];
    created_on?: string;
    id?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    total_quantity?: number;
    seller_identifier: string;
    price_marked?: number;
    expiration_date?: string;
    trace_id?: string;
    currency?: string;
    item_dimensions_unit_of_measure?: string;
    quantity?: number;
    tags?: string[];
    price?: number;
    item_weight_unit_of_measure?: string;
    price_effective?: number;
    store_code: string;
};
type InventoryBulkRequest = {
    company_id: number;
    sizes: InventoryJobPayload[];
    batch_id: string;
    user?: any;
};
type InventoryExportJob = {
    status?: string;
    task_id: string;
    trigger_on?: string;
    seller_id: number;
    completed_on?: string;
    request_params?: any;
    url?: string;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    status?: string;
    task_id: string;
    trigger_on?: string;
    seller_id: number;
    request_params?: any;
};
type ArticleStoreResponse = {
    uid?: number;
    store_type?: string;
    name?: string;
    store_code?: string;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type DimensionResponse1 = {
    height?: number;
    length?: number;
    width?: number;
    unit?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
    damaged?: Quantity;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type ReturnConfig2 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type PriceArticle = {
    marked?: number;
    tp_notes?: any;
    currency?: string;
    effective?: number;
    transfer?: number;
};
type GetInventories = {
    store?: ArticleStoreResponse;
    brand?: BrandMeta1;
    company?: CompanyMeta1;
    size?: string;
    tax_identifier?: any;
    dimension?: DimensionResponse1;
    quantities?: QuantitiesArticle;
    trader?: Trader2[];
    expiration_date?: string;
    created_by?: UserSerializer;
    return_config?: ReturnConfig2;
    inventory_updated_on?: string;
    id?: string;
    tags?: string[];
    item_id?: number;
    total_quantity?: number;
    seller_identifier?: string;
    platforms?: any;
    uid?: string;
    country_of_origin?: string;
    identifier?: any;
    manufacturer?: ManufacturerResponse1;
    is_set?: boolean;
    modified_by?: UserSerializer;
    track_inventory?: boolean;
    trace_id?: string;
    weight?: WeightResponse1;
    stage?: string;
    price?: PriceArticle;
    date_meta?: DateMeta;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
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
    total_quantity?: number;
    seller_identifier: string;
    price_marked?: number;
    expiration_date?: string;
    trace_id?: string;
    store_id: number;
    tags?: string[];
    price_effective?: number;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    meta?: any;
    payload?: InventoryPayload[];
};
type InventoryFailedReason = {
    message: string;
    errors?: string;
};
type InventoryResponseItem = {
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type PageResponse = {
    has_previous?: boolean;
    item_total?: number;
    has_next?: boolean;
    size?: number;
    current?: string;
};
type HsnCodesObject = {
    company_id?: number;
    threshold1?: number;
    tax_on_esp?: boolean;
    tax_on_mrp?: boolean;
    threshold2?: number;
    hsn_code?: string;
    modified_on?: string;
    tax2?: number;
    id?: string;
    tax1?: number;
    hs2_code?: string;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    company_id: number;
    threshold1: number;
    tax_on_esp?: boolean;
    tax_on_mrp: boolean;
    threshold2?: number;
    uid?: number;
    is_active?: boolean;
    hsn_code: string;
    tax2?: number;
    tax1: number;
    hs2_code: string;
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
    rate: number;
    cess?: number;
    effective_date: string;
    threshold: number;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    modified_by?: any;
    reporting_hsn: string;
    created_by?: any;
    hsn_code: string;
    modified_on?: string;
    type: string;
    created_on?: string;
    country_code: string;
    description: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    discount?: string;
    banners?: ImageUrls;
    uid?: number;
    slug?: string;
    name?: string;
    action?: Action;
    logo?: Media;
    departments?: string[];
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    uid?: number;
    slug?: string;
    name?: string;
    priority_order?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    banners?: ImageUrls;
    childs?: any[];
    uid?: number;
    slug?: string;
    name?: string;
    action?: Action;
};
type SecondLevelChild = {
    _custom_json?: any;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    uid?: number;
    slug?: string;
    name?: string;
    action?: Action;
};
type Child = {
    _custom_json?: any;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    uid?: number;
    slug?: string;
    name?: string;
    action?: Action;
};
type CategoryItems = {
    banners?: ImageUrls;
    childs?: Child[];
    uid?: number;
    slug?: string;
    name?: string;
    action?: Action;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
type ApplicationProductListingResponse = {
    sort_on?: ProductSortOn[];
    page: Page;
    operators?: any;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type ProductDetail = {
    brand?: ProductBrand;
    promo_meta?: any;
    highlights?: string[];
    tryouts?: string[];
    has_variant?: boolean;
    rating_count?: number;
    description?: string;
    teaser_tag?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    slug: string;
    medias?: Media1[];
    attributes?: any;
    uid?: number;
    item_type?: string;
    name?: string;
    image_nature?: string;
    short_description?: string;
    product_online_date?: string;
    item_code?: string;
    rating?: number;
    similars?: string[];
    type?: string;
    color?: string;
};
type InventoryPage = {
    has_previous?: boolean;
    next_id?: string;
    item_total: number;
    has_next?: boolean;
    type: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type UserSerializer1 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetAddressSerializer = {
    address1?: string;
    state?: string;
    address_type?: string;
    address2?: string;
    country?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    city?: string;
    country_code?: string;
    pincode?: number;
};
type GetCompanySerializer = {
    reject_reason?: string;
    verified_on?: string;
    modified_by?: UserSerializer1;
    uid?: number;
    created_by?: UserSerializer1;
    modified_on?: string;
    name?: string;
    stage?: string;
    company_type?: string;
    created_on?: string;
    business_type?: string;
    verified_by?: UserSerializer1;
    addresses?: GetAddressSerializer[];
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
};
type UserSerializer2 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobile_no: SellerPhoneNumber;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type GetLocationSerializer = {
    verified_on?: string;
    company?: GetCompanySerializer;
    code: string;
    notification_emails?: string[];
    created_on?: string;
    address: GetAddressSerializer;
    timing?: LocationDayWiseSerializer[];
    verified_by?: UserSerializer2;
    _custom_json?: any;
    created_by?: UserSerializer2;
    uid?: number;
    integration_type?: LocationIntegrationType;
    modified_on?: string;
    name: string;
    display_name: string;
    manager?: LocationManagerSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    phone_number?: string;
    store_type?: string;
    modified_by?: UserSerializer2;
    contact_numbers?: SellerPhoneNumber[];
    gst_credentials?: InvoiceDetailsSerializer;
    stage?: string;
    documents?: Document[];
    warnings?: any;
};
type LocationListSerializer = {
    page?: Page;
    items?: GetLocationSerializer[];
};
type ApplicationBrandJson = {
    _custom_json: any;
};
type ApplicationCategoryJson = {
    _custom_json: any;
};
type ApplicationDepartment = {
    _custom_json?: any;
    app_id: string;
    is_active?: boolean;
    uid: number;
    name?: string;
    logo?: string;
};
type ApplicationDepartmentListingResponse = {
    page: Page;
    items?: ApplicationDepartment[];
};
type ApplicationDepartmentJson = {
    _custom_json: any;
};
type ApplicationStoreJson = {
    _custom_json: any;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type GetCompanyProfileSerializerResponse = {
    name?: string;
    uid: number;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    franchise_enabled?: boolean;
    verified_on?: string;
    business_info?: string;
    created_on?: string;
    created_by?: UserSerializer;
    mode?: string;
    business_details?: BusinessDetails;
    modified_on?: string;
    warnings?: any;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    notification_emails?: string[];
    stage?: string;
    company_type: string;
    taxes?: CompanyTaxesSerializer[];
    business_type: string;
    contact_details?: ContactDetails;
    documents?: Document[];
    modified_by?: UserSerializer;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    address1: string;
    state: string;
    address2?: string;
    country: string;
    city: string;
    pincode: number;
    latitude: number;
    landmark?: string;
    address_type: string;
    longitude: number;
    country_code?: string;
};
type UpdateCompany = {
    name?: string;
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    business_info?: string;
    notification_emails?: string[];
    company_type?: string;
    taxes?: CompanyTaxesSerializer1[];
    business_type?: string;
    contact_details?: ContactDetails;
    warnings?: any;
    reject_reason?: string;
    documents?: Document[];
    addresses?: CreateUpdateAddressSerializer[];
    _custom_json?: any;
};
type ProfileSuccessResponse = {
    success?: boolean;
    uid?: number;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    company_documents?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
    uid?: number;
    store?: DocumentsObj;
    brand?: DocumentsObj;
    store_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    name: string;
    description?: string;
    uid?: number;
    verified_by?: UserSerializer;
    verified_on?: string;
    slug_key?: string;
    created_on?: string;
    banner?: BrandBannerSerializer;
    created_by?: UserSerializer;
    mode?: string;
    _locale_language?: any;
    logo?: string;
    modified_on?: string;
    warnings?: any;
    reject_reason?: string;
    _custom_json?: any;
    synonyms?: string[];
    stage?: string;
    modified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    name: string;
    logo: string;
    synonyms?: string[];
    banner?: BrandBannerSerializer;
    brand_tier?: string;
    company_id?: number;
    description?: string;
    uid?: number;
    _custom_json?: any;
    _locale_language?: any;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanyDetails = {
    website_url?: string;
    socials?: CompanySocialAccounts[];
};
type CompanySerializer = {
    name?: string;
    verified_on?: string;
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    notification_emails?: string[];
    stage?: string;
    company_type: string;
    modified_on?: string;
    created_by?: UserSerializer;
    business_type: string;
    details?: CompanyDetails;
    uid?: number;
    reject_reason?: string;
    modified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    _custom_json?: any;
    verified_by?: UserSerializer;
    market_channels?: string[];
};
type CompanyBrandSerializer = {
    brand?: GetBrandResponseSerializer;
    verified_on?: string;
    company?: CompanySerializer;
    created_on?: string;
    stage?: string;
    modified_on?: string;
    created_by?: UserSerializer;
    warnings?: any;
    uid?: number;
    reject_reason?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    company: number;
    uid?: number;
};
type HolidayDateSerializer = {
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    title: string;
    holiday_type: string;
};
type LocationSerializer = {
    name: string;
    company: number;
    notification_emails?: string[];
    stage?: string;
    code: string;
    gst_credentials?: InvoiceDetailsSerializer;
    holiday?: HolidaySchemaSerializer[];
    contact_numbers?: SellerPhoneNumber[];
    store_type?: string;
    warnings?: any;
    uid?: number;
    documents?: Document[];
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    address: GetAddressSerializer;
    timing?: LocationDayWiseSerializer[];
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
    size?: string;
    item_id?: number;
};
type _AssignStoreArticle = {
    group_id?: string;
    article_assignment?: _ArticleAssignment;
    meta?: any;
    query?: _ArticleQuery;
    quantity?: number;
};
type AssignStoreRequestValidator = {
    store_ids?: number[];
    channel_identifier?: string;
    articles?: _AssignStoreArticle[];
    pincode?: string;
    company_id?: number;
    app_id?: string;
    channel_type?: string;
};
type AssignStoreResponseSerializer = {
    s_city?: string;
    article_assignment?: _ArticleAssignment;
    size?: string;
    status?: boolean;
    price_effective?: number;
    store_pincode?: string;
    item_id?: number;
    _id?: string;
    company_id?: number;
    uid?: string;
    index?: number;
    meta?: any;
    price_marked?: number;
    store_id?: number;
    quantity?: number;
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
    integration_data?: any;
    company_name?: string;
    integration: string;
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
    company_name: string;
    integration: string;
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
    empty_cart?: boolean;
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
    only_deployed?: boolean;
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
    phone?: InformationPhone[];
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
    slug?: string;
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
type UsesRemaining = {
    total?: number;
    user?: number;
    app?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    types?: string[];
    uses?: PaymentAllowValue;
    codes?: string[];
};
type Restrictions = {
    platforms?: string[];
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    post_order?: PostOrder;
    user_groups?: number[];
    user_type?: string;
    price_range?: PriceRange;
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
};
type Rule = {
    key?: number;
    min?: number;
    discount_qty?: number;
    max?: number;
    value?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
    apply?: DisplayMetaDict;
    description?: string;
    auto?: DisplayMetaDict;
};
type Validity = {
    priority?: number;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type RuleDefinition = {
    currency_code?: string;
    scope?: string[];
    type: string;
    auto_apply?: boolean;
    value_type: string;
    applicable_on: string;
    is_exact?: boolean;
    calculate_on: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponSchedule = {
    cron?: string;
    next_schedule?: any[];
    start?: string;
    duration?: number;
    end?: string;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type CouponAdd = {
    restrictions?: Restrictions;
    rule: Rule[];
    display_meta: DisplayMeta;
    code: string;
    validity: Validity;
    author?: CouponAuthor;
    action?: CouponAction;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    tags?: string[];
    state?: State;
    ownership: Ownership;
    type_slug: string;
    validation?: Validation;
};
type CouponsResponse = {
    page?: Page;
    items?: CouponAdd;
};
type SuccessMessage = {
    success?: boolean;
    message?: string;
};
type OperationErrorResponse = {
    success?: boolean;
    message?: string;
};
type CouponUpdate = {
    restrictions?: Restrictions;
    rule: Rule[];
    display_meta: DisplayMeta;
    code: string;
    validity: Validity;
    author?: CouponAuthor;
    action?: CouponAction;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    tags?: string[];
    state?: State;
    ownership: Ownership;
    type_slug: string;
    validation?: Validation;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type DisplayMeta1 = {
    offer_label?: string;
    description?: string;
    name?: string;
    offer_text?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionSchedule = {
    cron?: string;
    next_schedule?: any[];
    start: string;
    duration?: number;
    end?: string;
    published: boolean;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    uses?: PaymentAllowValue1;
    codes?: string[];
};
type Restrictions1 = {
    platforms?: string[];
    uses: UsesRestriction1;
    user_id?: string[];
    order_quantity?: number;
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    user_groups?: number[];
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
};
type CompareObject = {
    greater_than_equals?: number;
    less_than_equals?: number;
    greater_than?: number;
    less_than?: number;
    equals?: number;
};
type ItemCriteria = {
    item_exclude_sku?: string[];
    all_items?: boolean;
    item_category?: number[];
    item_store?: number[];
    cart_quantity?: CompareObject;
    item_exclude_id?: number[];
    item_id?: number[];
    item_exclude_category?: number[];
    item_company?: number[];
    item_brand?: number[];
    item_exclude_store?: number[];
    buy_rules?: string[];
    item_size?: string[];
    product_tags?: string[];
    item_sku?: string[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_brand?: number[];
    item_exclude_company?: number[];
    available_zones?: string[];
    cart_unique_item_amount?: CompareObject;
    cart_total?: CompareObject;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DiscountOffer = {
    discount_price?: number;
    discount_amount?: number;
    code?: string;
    partial_can_ret?: boolean;
    min_offer_quantity?: number;
    discount_percentage?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
    apportion_discount?: boolean;
};
type DiscountRule = {
    buy_condition: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
    discount_type: string;
};
type PromotionListItem = {
    code?: string;
    currency?: string;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    application_id: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    promotion_type: string;
    buy_rules: any;
    author?: PromotionAuthor;
    promo_group: string;
    date_meta?: PromotionDateMeta;
    apply_exclusive?: string;
    apply_priority?: number;
    calculate_on?: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    mode: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    code?: string;
    currency?: string;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    application_id: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    promotion_type: string;
    buy_rules: any;
    author?: PromotionAuthor;
    promo_group: string;
    date_meta?: PromotionDateMeta;
    apply_exclusive?: string;
    apply_priority?: number;
    calculate_on?: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    mode: string;
};
type PromotionUpdate = {
    code?: string;
    currency?: string;
    apply_all_discount?: boolean;
    ownership: Ownership1;
    application_id: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    promotion_type: string;
    buy_rules: any;
    author?: PromotionAuthor;
    promo_group: string;
    date_meta?: PromotionDateMeta;
    apply_exclusive?: string;
    apply_priority?: number;
    calculate_on?: string;
    _custom_json?: any;
    discount_rules: DiscountRule[];
    stackable?: boolean;
    mode: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    subtitle?: string;
    example?: string;
    entity_slug?: string;
    type?: string;
    is_hidden?: boolean;
    created_on?: string;
    title?: string;
    description?: string;
    entity_type?: string;
    modified_on?: string;
};
type CartItem = {
    quantity?: number;
    size: string;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductAvailability = {
    sizes?: string[];
    is_valid?: boolean;
    out_of_stock?: boolean;
    deliverable?: boolean;
    other_store_quantity?: number;
};
type PromoMeta = {
    message?: string;
};
type ProductPrice = {
    currency_code?: string;
    add_on?: number;
    currency_symbol?: string;
    selling?: number;
    marked?: number;
    effective?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
};
type FreeGiftItem = {
    item_images_url?: string[];
    item_price_details?: any;
    item_id?: number;
    item_brand_name?: string;
    item_name?: string;
    item_slug?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    promotion_type?: string;
    offer_text?: string;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    promotion_group?: string;
    amount?: number;
    article_quantity?: number;
    promo_id?: string;
    promotion_name?: string;
    applied_free_articles?: AppliedFreeArticles[];
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type BasePrice = {
    marked?: number;
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    extra_meta?: any;
    uid?: string;
    seller?: BaseInfo;
    quantity?: number;
    type?: string;
    price?: ArticlePriceInfo;
    size?: string;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    store?: BaseInfo;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
    url?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    type?: string;
    url?: string;
};
type CartProduct = {
    uid?: number;
    type?: string;
    images?: ProductImage[];
    categories?: CategoryInfo[];
    action?: ProductAction;
    name?: string;
    net_quantity?: NetQuantity;
    slug?: string;
    brand?: BaseInfo;
};
type CartProductInfo = {
    availability?: ProductAvailability;
    key?: string;
    quantity?: number;
    coupon_message?: string;
    promo_meta?: PromoMeta;
    price?: ProductPriceInfo;
    message?: string;
    discount?: string;
    identifiers: CartProductIdentifer;
    is_set?: boolean;
    bulk_offer?: any;
    parent_item_identifiers?: any;
    price_per_unit?: ProductPriceInfo;
    promotions_applied?: AppliedPromotion[];
    article?: ProductArticle;
    product?: CartProduct;
};
type CouponBreakup = {
    uid?: string;
    minimum_cart_value?: number;
    code?: string;
    type?: string;
    coupon_type?: string;
    is_applied?: boolean;
    sub_title?: string;
    max_discount_value?: number;
    title?: string;
    description?: string;
    coupon_value?: number;
    message?: string;
    value?: number;
};
type RawBreakup = {
    mrp_total?: number;
    convenience_fee?: number;
    total?: number;
    gst_charges?: number;
    discount?: number;
    cod_charge?: number;
    vog?: number;
    fynd_cash?: number;
    you_saved?: number;
    coupon?: number;
    subtotal?: number;
    delivery_charge?: number;
};
type DisplayBreakup = {
    key?: string;
    currency_code?: string;
    currency_symbol?: string;
    display?: string;
    message?: string[];
    value?: number;
};
type LoyaltyPoints = {
    total?: number;
    is_applied?: boolean;
    applicable?: number;
    description?: string;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    message?: string;
};
type OpenApiErrorResponse = {
    success?: boolean;
    errors?: any;
    message?: string;
};
type ShippingAddress = {
    country_code?: string;
    phone?: number;
    meta?: any;
    area_code_slug?: string;
    pincode?: number;
    city?: string;
    area?: string;
    address_type?: string;
    name?: string;
    landmark?: string;
    area_code: string;
    address?: string;
    state?: string;
    country?: string;
    email?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
};
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
type PromiseFormatted = {
    max?: string;
    min?: string;
};
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
};
type OpenApiCartServiceabilityResponse = {
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
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
    extra_meta?: any;
    cod_charges: number;
    employee_discount?: number;
    cashback_applied: number;
    meta?: CartItemMeta;
    quantity?: number;
    price_effective: number;
    coupon_effective_discount: number;
    discount: number;
    files?: OpenApiFiles[];
    product_id: number;
    amount_paid: number;
    size: string;
    price_marked: number;
    delivery_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
};
type OpenApiPlatformCheckoutReq = {
    cod_charges: number;
    employee_discount?: any;
    cashback_applied: number;
    shipping_address?: ShippingAddress;
    payment_mode?: string;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    order_id?: string;
    cart_items: OpenApiOrderItem[];
    delivery_charges: number;
    coupon?: string;
    coupon_value: number;
    comment?: string;
    coupon_code: string;
    currency_code?: string;
    billing_address: ShippingAddress;
    files?: OpenApiFiles[];
    gstin?: string;
    affiliate_order_id?: string;
    cart_value: number;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    order_ref_id?: string;
    order_id: string;
    message?: string;
};
type AbandonedCart = {
    uid: number;
    checkout_mode?: string;
    merge_qty?: boolean;
    is_default: boolean;
    last_modified: string;
    is_archive?: boolean;
    pick_up_customer_details?: any;
    expire_at: string;
    payment_methods?: any[];
    created_on: string;
    promotion?: any;
    gstin?: string;
    shipments?: any[];
    coupon?: any;
    delivery_charges?: any;
    cart_value?: number;
    _id: string;
    fc_index_map?: number[];
    app_id?: string;
    cod_charges?: any;
    is_active?: boolean;
    discount?: number;
    user_id: string;
    payment_mode?: string;
    bulk_coupon_discount?: number;
    payments?: any;
    order_id?: string;
    comment?: string;
    meta?: any;
    buy_now?: boolean;
    fynd_credits?: any;
    cashback: any;
    articles: any[];
};
type AbandonedCartResponse = {
    success?: boolean;
    result?: any;
    page?: Page;
    message?: string;
    items?: AbandonedCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    comment?: string;
    checkout_mode?: string;
    buy_now?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    is_valid?: boolean;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    last_modified?: string;
    gstin?: string;
    delivery_charge_info?: string;
    coupon_text?: string;
    message?: string;
    id?: string;
    delivery_promise?: ShipmentPromise;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type AddProductCart = {
    extra_meta?: any;
    quantity?: number;
    store_id?: number;
    pos?: boolean;
    display?: string;
    article_id?: string;
    item_id?: number;
    seller_id?: number;
    product_group_tags?: string[];
    item_size?: string;
    article_assignment?: any;
    parent_item_identifiers?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    partial?: boolean;
    message?: string;
};
type UpdateProductCart = {
    extra_meta?: any;
    quantity?: number;
    article_id?: string;
    item_index?: number;
    identifiers: CartProductIdentifer;
    item_id?: number;
    item_size?: string;
    parent_item_identifiers?: any;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
};
type E = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
};
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
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
type Schedule = {
    duration?: number;
    end?: string;
    start?: string;
    cron?: string;
};
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
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
type ShareMessages = {
    email?: number;
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
type Points = {
    available?: number;
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
type Referral = {
    code?: string;
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
type GiveawayAudience = {
    audience_id?: string;
    current_count?: number;
};
type HistoryRes = {
    items?: PointsHistory[];
    page?: Page;
    points?: number;
};
type PointsHistory = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    meta?: any;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
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
    status?: SubscriberStatus;
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
    status?: SubscriberStatus;
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
