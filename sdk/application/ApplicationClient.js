const axios = require('axios');
const camelCase = require("camelcase");
const {
    CatalogValidator,
    CartValidator,
    CommonValidator,
    LeadValidator,
    ThemeValidator,
    UserValidator,
    ContentValidator,
    CommunicationValidator,
    ShareValidator,
    FileStorageValidator,
    ConfigurationValidator,
    PaymentValidator,
    OrderValidator,
    RewardsValidator,
    PosCartValidator,
    LogisticValidator
    
} = require('./ApplicationModels');



const APIClient = require("./ApplicationAPIClient");
const Paginator = require("../common/Paginator");
const { FDKClientValidationError } = require("../common/FDKError");


const constructUrl = ({url, params}) => {
    return url.split("/")
        .map((word) => {
            if (word[0] === "{" && word[word.length - 1] === "}") {
                word = params[camelCase(word.slice(1, word.length - 1))];
            }
            return word;
        })
        .join("/");
}

class ApplicationClient{

    constructor(config){
        this.config = config;
        this.catalog = new Catalog(config);
        this.cart = new Cart(config);
        this.common = new Common(config);
        this.lead = new Lead(config);
        this.theme = new Theme(config);
        this.user = new User(config);
        this.content = new Content(config);
        this.communication = new Communication(config);
        this.share = new Share(config);
        this.fileStorage = new FileStorage(config);
        this.configuration = new Configuration(config);
        this.payment = new Payment(config);
        this.order = new Order(config);
        this.rewards = new Rewards(config);
        this.posCart = new PosCart(config);
        this.logistic = new Logistic(config);
        
    }
    setCookie(cookie){
        this.config.cookie = cookie;
    }
}


class Catalog {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getProductDetailBySlug: "/service/application/catalog/v1.0/products/{slug}/",
            getProductSizesBySlug: "/service/application/catalog/v1.0/products/{slug}/sizes/",
            getProductPriceBySlug: "/service/application/catalog/v1.0/products/{slug}/sizes/{size}/pincode/{pincode}/price/",
            getProductSellersBySlug: "/service/application/catalog/v1.0/products/{slug}/sizes/{size}/pincode/{pincode}/sellers/",
            getProductComparisonBySlugs: "/service/application/catalog/v1.0/products/compare/",
            getSimilarComparisonProductBySlug: "/service/application/catalog/v1.0/products/{slug}/similar/compare/",
            getComparedFrequentlyProductBySlug: "/service/application/catalog/v1.0/products/{slug}/similar/compared-frequently/",
            getProductSimilarByIdentifier: "/service/application/catalog/v1.0/products/{slug}/similar/{similar_type}/",
            getProductVariantsBySlug: "/service/application/catalog/v1.0/products/{slug}/variants/",
            getProductStockByIds: "/service/application/catalog/v1.0/products/stock-status/",
            getProductStockForTimeByIds: "/service/application/catalog/v1.0/products/stock-status/poll/",
            getProducts: "/service/application/catalog/v1.0/products/",
            getBrands: "/service/application/catalog/v1.0/brands/",
            getBrandDetailBySlug: "/service/application/catalog/v1.0/brands/{slug}/",
            getCategories: "/service/application/catalog/v1.0/categories/",
            getCategoryDetailBySlug: "/service/application/catalog/v1.0/categories/{slug}/",
            getHomeProducts: "/service/application/catalog/v1.0/home/listing/",
            getDepartments: "/service/application/catalog/v1.0/departments/",
            getSearchResults: "/service/application/catalog/v1.0/auto-complete/",
            getCollections: "/service/application/catalog/v1.0/collections/",
            getCollectionItemsBySlug: "/service/application/catalog/v1.0/collections/{slug}/items/",
            getCollectionDetailBySlug: "/service/application/catalog/v1.0/collections/{slug}/",
            getFollowedListing: "/service/application/catalog/v1.0/follow/{collection_type}/",
            followById: "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
            unfollowById: "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/",
            getFollowerCountById: "/service/application/catalog/v1.0/follow/{collection_type}/{collection_id}/count/",
            getFollowIds: "/service/application/catalog/v1.0/follow/ids/",
            getStores: "/service/application/catalog/v1.0/locations/",
            getInStockLocations: "/service/application/catalog/v1.0/in-stock/locations/",
            getLocationDetailsById: "/service/application/catalog/v1.0/locations/{location_id}/",
            getProductBundlesBySlug: "/service/application/catalog/v1.0/product-grouping/",
            getProductPriceBySlugV2: "/service/application/catalog/v2.0/products/{slug}/sizes/{size}/price/",
            getProductSellersBySlugV2: "/service/application/catalog/v2.0/products/{slug}/sizes/{size}/sellers/"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get a product
    * @description: Use this API to retrieve a product by its slug value.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    
    * @return {Promise<ProductDetail>} - success response
    **/
        getProductDetailBySlug({
            slug
            
        } = {}) {
            const { error } = CatalogValidator.getProductDetailBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductDetailBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the sizes of a product
    * @description: A product can have multiple sizes. Use this API to fetch all the available sizes of a product.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {number} [arg.storeId] - The ID of the store that is selling the product, e.g. 1,2,3.
    
    
    * @return {Promise<ProductSizes>} - success response
    **/
        getProductSizesBySlug({
            slug,
            storeId
            
        } = {}) {
            const { error } = CatalogValidator.getProductSizesBySlug().validate({ slug,
            storeId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['store_id'] = storeId;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductSizesBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the price of a product size at a PIN Code
    * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
    * @param {string} arg.pincode - The PIN Code of the area near which the selling locations should be searched, e.g. 400059
    * @param {number} [arg.storeId] - The ID of the store that is selling the product, e.g. 1,2,3.
    
    
    * @return {Promise<ProductSizePriceResponse>} - success response
    **/
        getProductPriceBySlug({
            slug,
            size,
            pincode,
            storeId
            
        } = {}) {
            const { error } = CatalogValidator.getProductPriceBySlug().validate({ slug,
            size,
            pincode,
            storeId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['store_id'] = storeId;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductPriceBySlug"],
                        params: { slug, size, pincode }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the sellers of a product size at a PIN Code
    * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
    * @param {string} arg.pincode - The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059
    * @param {string} [arg.strategy] - Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<ProductSizeSellersResponse>} - success response
    **/
        getProductSellersBySlug({
            slug,
            size,
            pincode,
            strategy,
            pageNo,
            pageSize
            
        } = {}) {
            const { error } = CatalogValidator.getProductSellersBySlug().validate({ slug,
            size,
            pincode,
            strategy,
            pageNo,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['strategy'] = strategy;
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductSellersBySlug"],
                        params: { slug, size, pincode }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get the sellers of a product size at a PIN Code
    * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
    * @param {string} arg.pincode - The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059
    * @param {string} [arg.strategy] - Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getProductSellersBySlugPaginator( { slug, size, pincode, strategy, pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getProductSellersBySlug({
                        slug:slug ,
                        size:size ,
                        pincode:pincode ,
                        strategy:strategy ,
                        pageNo:pageNo ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Compare products
    * @description: Use this API to compare the features of products belonging to the same category. Note that at least one slug is mandatory in the request query.
    * @param {Object} arg - arg object.
    * @param {Array<string>} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/.
    
    
    * @return {Promise<ProductsComparisonResponse>} - success response
    **/
        getProductComparisonBySlugs({
            slug
            
        } = {}) {
            const { error } = CatalogValidator.getProductComparisonBySlugs().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['slug'] = slug;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductComparisonBySlugs"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get comparison between similar products
    * @description: Use this API to compare a given product automatically with similar products. Only one slug is needed.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    
    * @return {Promise<ProductCompareResponse>} - success response
    **/
        getSimilarComparisonProductBySlug({
            slug
            
        } = {}) {
            const { error } = CatalogValidator.getSimilarComparisonProductBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getSimilarComparisonProductBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get comparison between frequently compared products with the given product
    * @description: Use this API to compare a given product automatically with products that are frequently compared with it. Only one slug is needed.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    
    * @return {Promise<ProductFrequentlyComparedSimilarResponse>} - success response
    **/
        getComparedFrequentlyProductBySlug({
            slug
            
        } = {}) {
            const { error } = CatalogValidator.getComparedFrequentlyProductBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getComparedFrequentlyProductBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get similar products
    * @description: Use this API to retrieve products similar to the one specified by its slug. You can search not only similar looking products, but also those that are sold by same seller, or those that belong to the same category, price, specifications, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.similarType - Similarity criteria such as basic, visual, price, seller, category and spec. Visual - Products having similar patterns, Price - Products in similar price range, Seller - Products sold by the same seller, Category - Products belonging to the same category, e.g. sports shoes, Spec - Products having similar specifications, e.g. phones with same memory.
    
    
    * @return {Promise<SimilarProductByTypeResponse>} - success response
    **/
        getProductSimilarByIdentifier({
            slug,
            similarType
            
        } = {}) {
            const { error } = CatalogValidator.getProductSimilarByIdentifier().validate({ slug,
            similarType
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductSimilarByIdentifier"],
                        params: { slug, similarType }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get variant of a particular product
    * @description: A product can have a different type of variants such as colour, shade, memory. Use this API to fetch all the available variants of a product using its slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    
    * @return {Promise<ProductVariantsResponse>} - success response
    **/
        getProductVariantsBySlug({
            slug
            
        } = {}) {
            const { error } = CatalogValidator.getProductVariantsBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductVariantsBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. Use this API to retrieve stock of multiple products (up to 50) at a time.
    * @param {Object} arg - arg object.
    * @param {string} [arg.itemId] - The Item ID of the product (Max. 50 allowed)
    * @param {string} [arg.alu] - ALU of the product (limited upto 50 ALU identifier in a single request)
    * @param {string} [arg.skuCode] - Stock-keeping Unit of the product (limited upto 50 SKU Code in a single request)
    * @param {string} [arg.ean] - European Article Number of the product (limited upto 50 EAN identifier in a single request)
    * @param {string} [arg.upc] - Universal Product Code of the product (limited upto 50 UPC identifier in a single request)
    
    
    * @return {Promise<ProductStockStatusResponse>} - success response
    **/
        getProductStockByIds({
            itemId,
            alu,
            skuCode,
            ean,
            upc
            
        } = {}) {
            const { error } = CatalogValidator.getProductStockByIds().validate({ itemId,
            alu,
            skuCode,
            ean,
            upc
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['item_id'] = itemId;
            query_params['alu'] = alu;
            query_params['sku_code'] = skuCode;
            query_params['ean'] = ean;
            query_params['upc'] = upc;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductStockByIds"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
    * @param {Object} arg - arg object.
    * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    
    
    * @return {Promise<ProductStockPolling>} - success response
    **/
        getProductStockForTimeByIds({
            timestamp,
            pageSize,
            pageId
            
        } = {}) {
            const { error } = CatalogValidator.getProductStockForTimeByIds().validate({ timestamp,
            pageSize,
            pageId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['timestamp'] = timestamp;
            query_params['page_size'] = pageSize;
            query_params['page_id'] = pageId;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductStockForTimeByIds"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                    
                        
                    
                

    /**
    *
    * @summary: Get the stock of a product
    * @description: Retrieve the available stock of the products. Use this API to get the stock status of products whose inventory is updated at the specified time
    * @param {Object} arg - arg object.
    * @param {string} arg.timestamp - Timestamp in UTC format (2020-07-23T10:27:50Z)
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getProductStockForTimeByIdsPaginator( { timestamp, pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "cursor";
                    const data = await this.getProductStockForTimeByIds({
                        timestamp:timestamp ,
                        pageSize:pageSize ,
                        pageId:pageId 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get all the products
    * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query for entering partial or full name of product, brand, category, or collection.
    * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
    * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {string} [arg.pageType] - Available pagination types are cursor or number.
    
    
    * @return {Promise<ProductListingResponse>} - success response
    **/
        getProducts({
            q,
            f,
            filters,
            sortOn,
            pageId,
            pageSize,
            pageNo,
            pageType
            
        } = {}) {
            const { error } = CatalogValidator.getProducts().validate({ q,
            f,
            filters,
            sortOn,
            pageId,
            pageSize,
            pageNo,
            pageType
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['q'] = q;
            query_params['f'] = f;
            query_params['filters'] = filters;
            query_params['sort_on'] = sortOn;
            query_params['page_id'] = pageId;
            query_params['page_size'] = pageSize;
            query_params['page_no'] = pageNo;
            query_params['page_type'] = pageType;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProducts"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                    
                        
                    
                
                    
                        
                    
                    
                
                    
                    
                
                    
                    
                

    /**
    *
    * @summary: Get all the products
    * @description: Use this API to list all the products. You may choose a sort order or make arbitrary search queries by entering the product name, brand, category or collection.
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query for entering partial or full name of product, brand, category, or collection.
    * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
    * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getProductsPaginator( { q, f, filters, sortOn, pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "cursor";
                    const data = await this.getProducts({
                        q:q ,
                        f:f ,
                        filters:filters ,
                        sortOn:sortOn ,
                        pageId:pageId ,
                        pageSize:pageSize ,
                        pageNo:pageNo ,
                        pageType:pageType 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get all the brands
    * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<BrandListingResponse>} - success response
    **/
        getBrands({
            department,
            pageNo,
            pageSize
            
        } = {}) {
            const { error } = CatalogValidator.getBrands().validate({ department,
            pageNo,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['department'] = department;
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getBrands"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                        
                    
                    
                
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get all the brands
    * @description: A brand is the name under which a product is sold. Use this API to list all the brands. You can also filter the brands by department.
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getBrandsPaginator( { department, pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getBrands({
                        department:department ,
                        pageNo:pageNo ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get metadata of a brand
    * @description: Fetch metadata of a brand such as name, information, logo, banner, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/.
    
    
    * @return {Promise<BrandDetailResponse>} - success response
    **/
        getBrandDetailBySlug({
            slug
            
        } = {}) {
            const { error } = CatalogValidator.getBrandDetailBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getBrandDetailBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: List all the categories
    * @description: Use this API to list all the categories. You can also filter the categories by department.
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See the list of available departments below. Also, you can get available departments from the endpoint /service/application/catalog/v1.0/departments/
    
    
    * @return {Promise<CategoryListingResponse>} - success response
    **/
        getCategories({
            department
            
        } = {}) {
            const { error } = CatalogValidator.getCategories().validate({ department
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['department'] = department;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCategories"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get metadata of a category
    * @description: Fetch metadata of a category such as name, information, logo, banner, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a brand. You can get slug value from the endpoint /service/application/catalog/v1.0/brands/.
    
    
    * @return {Promise<CategoryMetaResponse>} - success response
    **/
        getCategoryDetailBySlug({
            slug
            
        } = {}) {
            const { error } = CatalogValidator.getCategoryDetailBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCategoryDetailBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a random order.
    * @param {Object} arg - arg object.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<HomeListingResponse>} - success response
    **/
        getHomeProducts({
            sortOn,
            pageId,
            pageSize
            
        } = {}) {
            const { error } = CatalogValidator.getHomeProducts().validate({ sortOn,
            pageId,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['sort_on'] = sortOn;
            query_params['page_id'] = pageId;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getHomeProducts"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                        
                    
                    
                
                    
                    
                        
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a random order.
    * @param {Object} arg - arg object.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getHomeProductsPaginator( { sortOn, pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "cursor";
                    const data = await this.getHomeProducts({
                        sortOn:sortOn ,
                        pageId:pageId ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: List all the departments
    * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<DepartmentResponse>} - success response
    **/
        getDepartments({
            
        } = {}) {
            const { error } = CatalogValidator.getDepartments().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getDepartments"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get relevant suggestions for a search query
    * @description: Retrieves a list of suggestions for a given search query. Each suggestion is a valid search term that's generated on the basis of query. This is particularly useful to enhance the user experience while using the search tool.
    * @param {Object} arg - arg object.
    * @param {string} arg.q - The search query for entering partial or full name of a product, brand or category. For example, if the given search query `q` is _ski_, the relevant search suggestions could be _skirt_, _ski shoes_, __skin cream_ etc.
    
    
    * @return {Promise<AutoCompleteResponse>} - success response
    **/
        getSearchResults({
            q
            
        } = {}) {
            const { error } = CatalogValidator.getSearchResults().validate({ q
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['q'] = q;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getSearchResults"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: List all the collections
    * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    * @param {Array<string>} [arg.tag] - List of tags  to filter collections
    
    
    * @return {Promise<GetCollectionListingResponse>} - success response
    **/
        getCollections({
            pageNo,
            pageSize,
            tag
            
        } = {}) {
            const { error } = CatalogValidator.getCollections().validate({ pageNo,
            pageSize,
            tag
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            query_params['tag'] = tag;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCollections"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: List all the collections
    * @description: Collections are a great way to organize your products and can improve the ability for customers to find items quickly and efficiently.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    * @param {Array<string>} [arg.tag] - List of tags  to filter collections
    
    **/
                getCollectionsPaginator( { pageSize, tag
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getCollections({
                        pageNo:pageNo ,
                        pageSize:pageSize ,
                        tag:tag 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get the items in a collection
    * @description: Get items in a collection specified by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/.
    * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
    * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<ProductListingResponse>} - success response
    **/
        getCollectionItemsBySlug({
            slug,
            f,
            filters,
            sortOn,
            pageId,
            pageSize
            
        } = {}) {
            const { error } = CatalogValidator.getCollectionItemsBySlug().validate({ slug,
            f,
            filters,
            sortOn,
            pageId,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['f'] = f;
            query_params['filters'] = filters;
            query_params['sort_on'] = sortOn;
            query_params['page_id'] = pageId;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCollectionItemsBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                    
                        
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get the items in a collection
    * @description: Get items in a collection specified by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/.
    * @param {string} [arg.f] - The search filter parameters. Filter parameters will be passed in f parameter as shown in the example below. Double Pipe (||) denotes the OR condition, whereas Triple-colon (:::) indicates a new filter paramater applied as an AND condition.
    * @param {boolean} [arg.filters] - This is a boolean value, True for fetching all filter parameters and False for disabling the filter parameters.
    * @param {string} [arg.sortOn] - The order in which the list of products should be sorted, e.g. popularity, price, latest and discount, in either ascending or descending order. See the supported values below.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getCollectionItemsBySlugPaginator( { slug, f, filters, sortOn, pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "cursor";
                    const data = await this.getCollectionItemsBySlug({
                        slug:slug ,
                        f:f ,
                        filters:filters ,
                        sortOn:sortOn ,
                        pageId:pageId ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get a particular collection
    * @description: Get the details of a collection by its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint /service/application/catalog/v1.0/collections/.
    
    
    * @return {Promise<CollectionDetailResponse>} - success response
    **/
        getCollectionDetailBySlug({
            slug
            
        } = {}) {
            const { error } = CatalogValidator.getCollectionDetailBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCollectionDetailBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get a list of followed Products, Brands, Collections
    * @description: Users can follow a product they like. This API retrieves the products the user have followed.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
    * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
    * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
    
    
    * @return {Promise<GetFollowListingResponse>} - success response
    **/
        getFollowedListing({
            collectionType,
            pageId,
            pageSize
            
        } = {}) {
            const { error } = CatalogValidator.getFollowedListing().validate({ collectionType,
            pageId,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_id'] = pageId;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getFollowedListing"],
                        params: { collectionType }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                        
                    
                    
                
                    
                    
                        
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get a list of followed Products, Brands, Collections
    * @description: Users can follow a product they like. This API retrieves the products the user have followed.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
    * @param {number} [arg.pageSize] - Page ID to retrieve next set of results.
    
    **/
                getFollowedListingPaginator( { collectionType, pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "cursor";
                    const data = await this.getFollowedListing({
                        collectionType:collectionType ,
                        pageId:pageId ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Follow an entity (product/brand/collection)
    * @description: Follow a particular entity such as product, brand, collection specified by its ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
    * @param {string} arg.collectionId - The ID of the collection type.
    
    
    * @return {Promise<FollowPostResponse>} - success response
    **/
        followById({
            collectionType,
            collectionId
            
        } = {}) {
            const { error } = CatalogValidator.followById().validate({ collectionType,
            collectionId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["followById"],
                        params: { collectionType, collectionId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Unfollow an entity (product/brand/collection)
    * @description: You can undo a followed product, brand or collection by its ID. This action is referred as _unfollow_.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection followed, i.e. products, brands, or collections.
    * @param {string} arg.collectionId - The ID of the collection type.
    
    
    * @return {Promise<FollowPostResponse>} - success response
    **/
        unfollowById({
            collectionType,
            collectionId
            
        } = {}) {
            const { error } = CatalogValidator.unfollowById().validate({ collectionType,
            collectionId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "delete",
                    constructUrl({
                        url: this._urls["unfollowById"],
                        params: { collectionType, collectionId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get Follow Count
    * @description: Get the total count of followers for a given collection type and collection ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.collectionType - Type of collection, i.e. products, brands, or collections.
    * @param {string} arg.collectionId - The ID of the collection type.
    
    
    * @return {Promise<FollowerCountResponse>} - success response
    **/
        getFollowerCountById({
            collectionType,
            collectionId
            
        } = {}) {
            const { error } = CatalogValidator.getFollowerCountById().validate({ collectionType,
            collectionId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getFollowerCountById"],
                        params: { collectionType, collectionId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the IDs of followed products, brands and collections.
    * @description: You can get the IDs of all the followed Products, Brands and Collections. Pass collection_type as query parameter to fetch specific Ids
    * @param {Object} arg - arg object.
    * @param {string} [arg.collectionType] - Type of collection, i.e. products, brands, collections.
    
    
    * @return {Promise<FollowIdsResponse>} - success response
    **/
        getFollowIds({
            collectionType
            
        } = {}) {
            const { error } = CatalogValidator.getFollowIds().validate({ collectionType
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['collection_type'] = collectionType;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getFollowIds"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get store meta information.
    * @description: Use this API to get a list of stores in a specific application.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - Search a store by its name or store_code.
    * @param {string} [arg.city] - Search stores by the city in which they are situated.
    * @param {number} [arg.range] - Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range
    * @param {number} [arg.latitude] - Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788
    * @param {number} [arg.longitude] - Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114
    
    
    * @return {Promise<StoreListingResponse>} - success response
    **/
        getStores({
            pageNo,
            pageSize,
            q,
            city,
            range,
            latitude,
            longitude
            
        } = {}) {
            const { error } = CatalogValidator.getStores().validate({ pageNo,
            pageSize,
            q,
            city,
            range,
            latitude,
            longitude
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            query_params['q'] = q;
            query_params['city'] = city;
            query_params['range'] = range;
            query_params['latitude'] = latitude;
            query_params['longitude'] = longitude;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getStores"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get store meta information.
    * @description: Use this API to get a list of stores in a specific application.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - Search a store by its name or store_code.
    * @param {string} [arg.city] - Search stores by the city in which they are situated.
    * @param {number} [arg.range] - Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range
    * @param {number} [arg.latitude] - Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788
    * @param {number} [arg.longitude] - Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114
    
    **/
                getStoresPaginator( { pageSize, q, city, range, latitude, longitude
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getStores({
                        pageNo:pageNo ,
                        pageSize:pageSize ,
                        q:q ,
                        city:city ,
                        range:range ,
                        latitude:latitude ,
                        longitude:longitude 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get store meta information.
    * @description: Use this API to get a list of stores in a specific application.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - Search a store by its name or store_code.
    * @param {string} [arg.city] - Search stores by the city in which they are situated.
    * @param {number} [arg.range] - Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range
    * @param {number} [arg.latitude] - Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788
    * @param {number} [arg.longitude] - Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114
    
    
    * @return {Promise<ApplicationStoreListing>} - success response
    **/
        getInStockLocations({
            pageNo,
            pageSize,
            q,
            city,
            range,
            latitude,
            longitude
            
        } = {}) {
            const { error } = CatalogValidator.getInStockLocations().validate({ pageNo,
            pageSize,
            q,
            city,
            range,
            latitude,
            longitude
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            query_params['q'] = q;
            query_params['city'] = city;
            query_params['range'] = range;
            query_params['latitude'] = latitude;
            query_params['longitude'] = longitude;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getInStockLocations"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get store meta information.
    * @description: Use this API to get a list of stores in a specific application.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    * @param {string} [arg.q] - Search a store by its name or store_code.
    * @param {string} [arg.city] - Search stores by the city in which they are situated.
    * @param {number} [arg.range] - Use this to retrieve stores within a particular range in meters, e.g. 10000, to indicate a 10km range
    * @param {number} [arg.latitude] - Latitude of the location from where one wants to retreive the nearest stores, e.g. 72.8691788
    * @param {number} [arg.longitude] - Longitude of the location from where one wants to retreive the nearest stores, e.g. 19.1174114
    
    **/
                getInStockLocationsPaginator( { pageSize, q, city, range, latitude, longitude
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getInStockLocations({
                        pageNo:pageNo ,
                        pageSize:pageSize ,
                        q:q ,
                        city:city ,
                        range:range ,
                        latitude:latitude ,
                        longitude:longitude 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get store meta information.
    * @description: Use this API to get meta details for a store.
    * @param {Object} arg - arg object.
    * @param {number} arg.locationId - Unique Location ID.
    
    
    * @return {Promise<StoreDetails>} - success response
    **/
        getLocationDetailsById({
            locationId
            
        } = {}) {
            const { error } = CatalogValidator.getLocationDetailsById().validate({ locationId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getLocationDetailsById"],
                        params: { locationId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get product bundles
    * @description: Use this API to retrieve products bundles to the one specified by its slug.
    * @param {Object} arg - arg object.
    * @param {string} [arg.slug] - Product slug for which bundles need to be fetched.
    * @param {string} [arg.id] - Product uid
    
    
    * @return {Promise<ProductBundle>} - success response
    **/
        getProductBundlesBySlug({
            slug,
            id
            
        } = {}) {
            const { error } = CatalogValidator.getProductBundlesBySlug().validate({ slug,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['slug'] = slug;
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductBundlesBySlug"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the price of a product size at a PIN Code
    * @description: Prices may vary for different sizes of a product. Use this API to retrieve the price of a product size at all the selling locations near to a PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
    * @param {number} [arg.storeId] - The ID of the store that is selling the product, e.g. 1,2,3.
    * @param {string} [arg.pincode] - The PIN Code of the area near which the selling locations should be searched, e.g. 400059.
    
    
    * @return {Promise<ProductSizePriceResponseV2>} - success response
    **/
        getProductPriceBySlugV2({
            slug,
            size,
            storeId,
            pincode
            
        } = {}) {
            const { error } = CatalogValidator.getProductPriceBySlugV2().validate({ slug,
            size,
            storeId,
            pincode
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['store_id'] = storeId;
            query_params['pincode'] = pincode;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductPriceBySlugV2"],
                        params: { slug, size }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the sellers of a product size at a PIN Code
    * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
    * @param {string} [arg.pincode] - The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059
    * @param {string} [arg.strategy] - Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<ProductSizeSellersResponseV2>} - success response
    **/
        getProductSellersBySlugV2({
            slug,
            size,
            pincode,
            strategy,
            pageNo,
            pageSize
            
        } = {}) {
            const { error } = CatalogValidator.getProductSellersBySlugV2().validate({ slug,
            size,
            pincode,
            strategy,
            pageNo,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['pincode'] = pincode;
            query_params['strategy'] = strategy;
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getProductSellersBySlugV2"],
                        params: { slug, size }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get the sellers of a product size at a PIN Code
    * @description: A product of a particular size may be sold by multiple sellers. Use this API to fetch the sellers having the stock of a particular size at a given PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} arg.size - A string indicating the size of the product, e.g. S, M, XL. You can get slug value from the endpoint /service/application/catalog/v1.0/products/sizes
    * @param {string} [arg.pincode] - The 6-digit PIN Code of the area near which the selling locations should be searched, e.g. 400059
    * @param {string} [arg.strategy] - Sort stores on the basis of strategy. eg, fast-delivery, low-price, optimal.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getProductSellersBySlugV2Paginator( { slug, size, pincode, strategy, pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getProductSellersBySlugV2({
                        slug:slug ,
                        size:size ,
                        pincode:pincode ,
                        strategy:strategy ,
                        pageNo:pageNo ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
}

class Cart {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getCart: "/service/application/cart/v1.0/detail",
            getCartLastModified: "/service/application/cart/v1.0/detail",
            addItems: "/service/application/cart/v1.0/detail",
            updateCart: "/service/application/cart/v1.0/detail",
            getItemCount: "/service/application/cart/v1.0/basic",
            getCoupons: "/service/application/cart/v1.0/coupon",
            applyCoupon: "/service/application/cart/v1.0/coupon",
            removeCoupon: "/service/application/cart/v1.0/coupon",
            getBulkDiscountOffers: "/service/application/cart/v1.0/bulk-price",
            applyRewardPoints: "/service/application/cart/v1.0/redeem/points/",
            getAddresses: "/service/application/cart/v1.0/address",
            addAddress: "/service/application/cart/v1.0/address",
            getAddressById: "/service/application/cart/v1.0/address/{id}",
            updateAddress: "/service/application/cart/v1.0/address/{id}",
            removeAddress: "/service/application/cart/v1.0/address/{id}",
            selectAddress: "/service/application/cart/v1.0/select-address",
            selectPaymentMode: "/service/application/cart/v1.0/payment",
            validateCouponForPayment: "/service/application/cart/v1.0/payment/validate/",
            getShipments: "/service/application/cart/v1.0/shipment",
            checkoutCart: "/service/application/cart/v1.0/checkout",
            updateCartMeta: "/service/application/cart/v1.0/meta",
            getCartShareLink: "/service/application/cart/v1.0/share-cart",
            getCartSharedItems: "/service/application/cart/v1.0/share-cart/{token}",
            updateCartWithSharedItems: "/service/application/cart/v1.0/share-cart/{token}/{action}",
            getPromotionOffers: "/service/application/cart/v1.0/available-promotions",
            getLadderOffers: "/service/application/cart/v1.0/available-ladder-prices"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Fetch all items added to the cart
    * @description: Use this API to get details of all the items added to a cart.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    
    * @return {Promise<CartDetailResponse>} - success response
    **/
        getCart({
            id,
            i,
            b,
            assignCardId
            
        } = {}) {
            const { error } = CartValidator.getCart().validate({ id,
            i,
            b,
            assignCardId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            query_params['i'] = i;
            query_params['b'] = b;
            query_params['assign_card_id'] = assignCardId;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCart"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Fetch last-modified timestamp
    * @description: Use this API to fetch Last-Modified timestamp in header metadata.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    
    
    * @return {Promise<any>} - success response
    **/
        getCartLastModified({
            id
            
        } = {}) {
            const { error } = CartValidator.getCartLastModified().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "head",
                    constructUrl({
                        url: this._urls["getCartLastModified"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Add items to cart
    * @description: Use this API to add items to the cart.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    
    * @param {AddCartRequest} arg.body
    * @return {Promise<AddCartDetailResponse>} - success response
    **/
        addItems({
            body,
            i,
            b
            
        } = {}) {
            const { error } = CartValidator.addItems().validate({ body,
            i,
            b
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['i'] = i;
            query_params['b'] = b;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["addItems"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Update items in the cart
    * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    
    * @param {UpdateCartRequest} arg.body
    * @return {Promise<UpdateCartDetailResponse>} - success response
    **/
        updateCart({
            body,
            id,
            i,
            b
            
        } = {}) {
            const { error } = CartValidator.updateCart().validate({ body,
            id,
            i,
            b
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            query_params['i'] = i;
            query_params['b'] = b;
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["updateCart"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Count items in the cart
    * @description: Use this API to get the total number of items present in cart.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - The unique identifier of the cart.
    
    
    * @return {Promise<CartItemCountResponse>} - success response
    **/
        getItemCount({
            id
            
        } = {}) {
            const { error } = CartValidator.getItemCount().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getItemCount"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Fetch Coupon
    * @description: Use this API to get a list of available coupons along with their details.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    
    
    * @return {Promise<GetCouponResponse>} - success response
    **/
        getCoupons({
            id
            
        } = {}) {
            const { error } = CartValidator.getCoupons().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCoupons"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Apply Coupon
    * @description: Use this API to apply coupons on items in the cart.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {string} [arg.id] - 
    
    * @param {ApplyCouponRequest} arg.body
    * @return {Promise<CartDetailResponse>} - success response
    **/
        applyCoupon({
            body,
            i,
            b,
            p,
            id
            
        } = {}) {
            const { error } = CartValidator.applyCoupon().validate({ body,
            i,
            b,
            p,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['i'] = i;
            query_params['b'] = b;
            query_params['p'] = p;
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["applyCoupon"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - The unique identifier of the cart
    
    
    * @return {Promise<CartDetailResponse>} - success response
    **/
        removeCoupon({
            id
            
        } = {}) {
            const { error } = CartValidator.removeCoupon().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "delete",
                    constructUrl({
                        url: this._urls["removeCoupon"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get discount offers based on quantity
    * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - The Item ID of the product
    * @param {string} [arg.articleId] - Article Mongo ID
    * @param {number} [arg.uid] - UID of the product
    * @param {string} [arg.slug] - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    
    * @return {Promise<BulkPriceResponse>} - success response
    **/
        getBulkDiscountOffers({
            itemId,
            articleId,
            uid,
            slug
            
        } = {}) {
            const { error } = CartValidator.getBulkDiscountOffers().validate({ itemId,
            articleId,
            uid,
            slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['item_id'] = itemId;
            query_params['article_id'] = articleId;
            query_params['uid'] = uid;
            query_params['slug'] = slug;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getBulkDiscountOffers"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Apply reward points at cart
    * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    
    * @param {RewardPointRequest} arg.body
    * @return {Promise<CartDetailResponse>} - success response
    **/
        applyRewardPoints({
            body,
            id,
            i,
            b
            
        } = {}) {
            const { error } = CartValidator.applyRewardPoints().validate({ body,
            id,
            i,
            b
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            query_params['i'] = i;
            query_params['b'] = b;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["applyRewardPoints"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Fetch address
    * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {string} [arg.cartId] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    
    * @return {Promise<GetAddressesResponse>} - success response
    **/
        getAddresses({
            cartId,
            mobileNo,
            checkoutMode,
            tags,
            isDefault
            
        } = {}) {
            const { error } = CartValidator.getAddresses().validate({ cartId,
            mobileNo,
            checkoutMode,
            tags,
            isDefault
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['cart_id'] = cartId;
            query_params['mobile_no'] = mobileNo;
            query_params['checkout_mode'] = checkoutMode;
            query_params['tags'] = tags;
            query_params['is_default'] = isDefault;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAddresses"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Add address to an account
    * @description: Use this API to add an address to an account.
    * @param {Object} arg - arg object.
    
    * @param {Address} arg.body
    * @return {Promise<SaveAddressResponse>} - success response
    **/
        addAddress({
            body
            
        } = {}) {
            const { error } = CartValidator.addAddress().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["addAddress"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Fetch a single address by its ID
    * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {string} arg.id - 
    * @param {string} [arg.cartId] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    
    * @return {Promise<Address>} - success response
    **/
        getAddressById({
            id,
            cartId,
            mobileNo,
            checkoutMode,
            tags,
            isDefault
            
        } = {}) {
            const { error } = CartValidator.getAddressById().validate({ id,
            cartId,
            mobileNo,
            checkoutMode,
            tags,
            isDefault
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['cart_id'] = cartId;
            query_params['mobile_no'] = mobileNo;
            query_params['checkout_mode'] = checkoutMode;
            query_params['tags'] = tags;
            query_params['is_default'] = isDefault;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAddressById"],
                        params: { id }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Update address added to an account
    * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID allotted to the selected address
    
    * @param {Address} arg.body
    * @return {Promise<UpdateAddressResponse>} - success response
    **/
        updateAddress({
            id,
            body
            
        } = {}) {
            const { error } = CartValidator.updateAddress().validate({ id,
            body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["updateAddress"],
                        params: { id }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Remove address associated with an account
    * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID allotted to the selected address
    
    
    * @return {Promise<DeleteAddressResponse>} - success response
    **/
        removeAddress({
            id
            
        } = {}) {
            const { error } = CartValidator.removeAddress().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "delete",
                    constructUrl({
                        url: this._urls["removeAddress"],
                        params: { id }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Select an address from available addresses
    * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
    * @param {Object} arg - arg object.
    * @param {string} [arg.cartId] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    
    * @param {SelectCartAddressRequest} arg.body
    * @return {Promise<CartDetailResponse>} - success response
    **/
        selectAddress({
            body,
            cartId,
            i,
            b
            
        } = {}) {
            const { error } = CartValidator.selectAddress().validate({ body,
            cartId,
            i,
            b
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['cart_id'] = cartId;
            query_params['i'] = i;
            query_params['b'] = b;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["selectAddress"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Update cart payment
    * @description: Use this API to update cart payment.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    
    * @param {UpdateCartPaymentRequest} arg.body
    * @return {Promise<CartDetailResponse>} - success response
    **/
        selectPaymentMode({
            body,
            id
            
        } = {}) {
            const { error } = CartValidator.selectPaymentMode().validate({ body,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["selectPaymentMode"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Verify the coupon eligibility against the payment mode
    * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    
    * @return {Promise<PaymentCouponValidate>} - success response
    **/
        validateCouponForPayment({
            id,
            addressId,
            paymentMode,
            paymentIdentifier,
            aggregatorName,
            merchantCode
            
        } = {}) {
            const { error } = CartValidator.validateCouponForPayment().validate({ id,
            addressId,
            paymentMode,
            paymentIdentifier,
            aggregatorName,
            merchantCode
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            query_params['address_id'] = addressId;
            query_params['payment_mode'] = paymentMode;
            query_params['payment_identifier'] = paymentIdentifier;
            query_params['aggregator_name'] = aggregatorName;
            query_params['merchant_code'] = merchantCode;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["validateCouponForPayment"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.p] - This is a boolean value. Select `true` for getting a payment option in response.
    * @param {string} [arg.id] - The unique identifier of the cart
    * @param {string} [arg.addressId] - ID allotted to the selected address
    * @param {string} [arg.areaCode] - The PIN Code of the destination address, e.g. 400059
    
    
    * @return {Promise<CartShipmentsResponse>} - success response
    **/
        getShipments({
            p,
            id,
            addressId,
            areaCode
            
        } = {}) {
            const { error } = CartValidator.getShipments().validate({ p,
            id,
            addressId,
            areaCode
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['p'] = p;
            query_params['id'] = id;
            query_params['address_id'] = addressId;
            query_params['area_code'] = areaCode;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getShipments"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Checkout all items in the cart
    * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be directly generated, whereas for other checkout modes, user will be redirected to a payment gateway.
    * @param {Object} arg - arg object.
    
    * @param {CartCheckoutDetailRequest} arg.body
    * @return {Promise<CartCheckoutResponse>} - success response
    **/
        checkoutCart({
            body
            
        } = {}) {
            const { error } = CartValidator.checkoutCart().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["checkoutCart"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Update the cart meta
    * @description: Use this API to update cart meta like checkout_mode and gstin.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - The unique identifier of the cart
    
    * @param {CartMetaRequest} arg.body
    * @return {Promise<CartMetaResponse>} - success response
    **/
        updateCartMeta({
            body,
            id
            
        } = {}) {
            const { error } = CartValidator.updateCartMeta().validate({ body,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["updateCartMeta"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Generate token for sharing the cart
    * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
    * @param {Object} arg - arg object.
    
    * @param {GetShareCartLinkRequest} arg.body
    * @return {Promise<GetShareCartLinkResponse>} - success response
    **/
        getCartShareLink({
            body
            
        } = {}) {
            const { error } = CartValidator.getCartShareLink().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getCartShareLink"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get details of a shared cart
    * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Token of the shared short link
    
    
    * @return {Promise<SharedCartResponse>} - success response
    **/
        getCartSharedItems({
            token
            
        } = {}) {
            const { error } = CartValidator.getCartSharedItems().validate({ token
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCartSharedItems"],
                        params: { token }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Merge or replace existing cart
    * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Token of the shared short link
    * @param {string} arg.action - Operation to perform on the existing cart merge or replace.
    
    
    * @return {Promise<SharedCartResponse>} - success response
    **/
        updateCartWithSharedItems({
            token,
            action
            
        } = {}) {
            const { error } = CartValidator.updateCartWithSharedItems().validate({ token,
            action
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["updateCartWithSharedItems"],
                        params: { token, action }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Fetch available promotions
    * @description: Use this API to get top 5 offers available for current product
    * @param {Object} arg - arg object.
    * @param {string} [arg.slug] - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {number} [arg.pageSize] - Number of offers to be fetched to show
    
    
    * @return {Promise<PromotionOffersResponse>} - success response
    **/
        getPromotionOffers({
            slug,
            pageSize
            
        } = {}) {
            const { error } = CartValidator.getPromotionOffers().validate({ slug,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['slug'] = slug;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getPromotionOffers"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Fetch ladder price promotion
    * @description: Use this API to get applicable ladder price promotion for current product
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    * @param {string} [arg.promotionId] - Get ladder information of given promotion id explicitely
    * @param {number} [arg.pageSize] - Number of offers to be fetched to show
    
    
    * @return {Promise<LadderPriceOffers>} - success response
    **/
        getLadderOffers({
            slug,
            promotionId,
            pageSize
            
        } = {}) {
            const { error } = CartValidator.getLadderOffers().validate({ slug,
            promotionId,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['slug'] = slug;
            query_params['promotion_id'] = promotionId;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getLadderOffers"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
}

class Common {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getLocations: "/service/common/configuration/v1.0/location"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get countries, states, cities
    * @description: 
    * @param {Object} arg - arg object.
    * @param {string} [arg.locationType] - Provide location type to query on. Possible values : country, state, city
    * @param {string} [arg.id] - Field is optional when location_type is country. If querying for state, provide id of country. If querying for city, provide id of state.
    
    
    * @return {Promise<Locations>} - success response
    **/
        getLocations({
            locationType,
            id
            
        } = {}) {
            const { error } = CommonValidator.getLocations().validate({ locationType,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['location_type'] = locationType;
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getLocations"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
}

class Lead {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getTicket: "/service/application/lead/v1.0/ticket/{id}",
            createHistory: "/service/application/lead/v1.0/ticket/{ticket_id}/history",
            createTicket: "/service/application/lead/v1.0/ticket/",
            getCustomForm: "/service/application/lead/v1.0/form/{slug}",
            submitCustomForm: "/service/application/lead/v1.0/form/{slug}/submit",
            getParticipantsInsideVideoRoom: "/service/application/lead/v1.0/video/room/{unique_name}/participants",
            getTokenForVideoRoom: "/service/application/lead/v1.0/video/room/{unique_name}/token"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get Ticket with the specific id
    * @description: Get Ticket with the specific id, this is used to view the ticket details
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID of ticket to be retrieved
    
    
    * @return {Promise<Ticket>} - success response
    **/
        getTicket({
            id
            
        } = {}) {
            const { error } = LeadValidator.getTicket().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getTicket"],
                        params: { id }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Create history for specific Ticket
    * @description: Create history for specific Ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Ticket ID for which history is created
    
    * @param {TicketHistoryPayload} arg.body
    * @return {Promise<TicketHistory>} - success response
    **/
        createHistory({
            ticketId,
            body
            
        } = {}) {
            const { error } = LeadValidator.createHistory().validate({ ticketId,
            body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["createHistory"],
                        params: { ticketId }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Create Ticket
    * @description: This is used to Create Ticket.
    * @param {Object} arg - arg object.
    
    * @param {AddTicketPayload} arg.body
    * @return {Promise<Ticket>} - success response
    **/
        createTicket({
            body
            
        } = {}) {
            const { error } = LeadValidator.createTicket().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["createTicket"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get specific Custom Form using it's slug
    * @description: Get specific Custom Form using it's slug, this is used to view the form.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of form whose response is getting submitted
    
    
    * @return {Promise<CustomForm>} - success response
    **/
        getCustomForm({
            slug
            
        } = {}) {
            const { error } = LeadValidator.getCustomForm().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCustomForm"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Submit Response for a specific Custom Form using it's slug
    * @description: Submit Response for a specific Custom Form using it's slug, this response is then used to create a ticket on behalf of the user.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of form whose response is getting submitted
    
    * @param {CustomFormSubmissionPayload} arg.body
    * @return {Promise<SubmitCustomFormResponse>} - success response
    **/
        submitCustomForm({
            slug,
            body
            
        } = {}) {
            const { error } = LeadValidator.submitCustomForm().validate({ slug,
            body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["submitCustomForm"],
                        params: { slug }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get participants of a specific Video Room using it's unique name
    * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    
    * @return {Promise<GetParticipantsInsideVideoRoomResponse>} - success response
    **/
        getParticipantsInsideVideoRoom({
            uniqueName
            
        } = {}) {
            const { error } = LeadValidator.getParticipantsInsideVideoRoom().validate({ uniqueName
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getParticipantsInsideVideoRoom"],
                        params: { uniqueName }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get Token to join a specific Video Room using it's unqiue name
    * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    
    * @return {Promise<GetTokenForVideoRoomResponse>} - success response
    **/
        getTokenForVideoRoom({
            uniqueName
            
        } = {}) {
            const { error } = LeadValidator.getTokenForVideoRoom().validate({ uniqueName
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getTokenForVideoRoom"],
                        params: { uniqueName }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
}

class Theme {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getAllPages: "/service/application/theme/v1.0/{theme_id}/page",
            getPage: "/service/application/theme/v1.0/{theme_id}/{page_value}",
            getAppliedTheme: "/service/application/theme/v1.0/applied-theme",
            getThemeForPreview: "/service/application/theme/v1.0/{theme_id}/preview"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get all pages of a theme
    * @description: Use this API to retrieve all the available pages of a theme by its ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - ID of the theme to be retrieved
    
    
    * @return {Promise<AllAvailablePageSchema>} - success response
    **/
        getAllPages({
            themeId
            
        } = {}) {
            const { error } = ThemeValidator.getAllPages().validate({ themeId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAllPages"],
                        params: { themeId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get page of a theme
    * @description: Use this API to retrieve a page of a theme.
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - ID of the theme to be retrieved
    * @param {string} arg.pageValue - Value of the page to be retrieved
    
    
    * @return {Promise<AvailablePageSchema>} - success response
    **/
        getPage({
            themeId,
            pageValue
            
        } = {}) {
            const { error } = ThemeValidator.getPage().validate({ themeId,
            pageValue
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getPage"],
                        params: { themeId, pageValue }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the theme currently applied to an application
    * @description: An application has multiple themes, but only one theme can be applied at a time. Use this API to retrieve the theme currently applied to the application.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<ThemesSchema>} - success response
    **/
        getAppliedTheme({
            
        } = {}) {
            const { error } = ThemeValidator.getAppliedTheme().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAppliedTheme"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get a theme for a preview
    * @description: A theme can be previewed before applying it. Use this API to retrieve the preview of a theme by its ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - ID of the theme to be retrieved
    
    
    * @return {Promise<ThemesSchema>} - success response
    **/
        getThemeForPreview({
            themeId
            
        } = {}) {
            const { error } = ThemeValidator.getThemeForPreview().validate({ themeId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getThemeForPreview"],
                        params: { themeId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
}

class User {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            loginWithFacebook: "/service/application/user/authentication/v1.0/login/facebook-token",
            loginWithGoogle: "/service/application/user/authentication/v1.0/login/google-token",
            loginWithGoogleAndroid: "/service/application/user/authentication/v1.0/login/google-android",
            loginWithGoogleIOS: "/service/application/user/authentication/v1.0/login/google-ios",
            loginWithAppleIOS: "/service/application/user/authentication/v1.0/login/apple-ios",
            loginWithOTP: "/service/application/user/authentication/v1.0/login/otp",
            loginWithEmailAndPassword: "/service/application/user/authentication/v1.0/login/password",
            sendResetPasswordEmail: "/service/application/user/authentication/v1.0/login/password/reset",
            forgotPassword: "/service/application/user/authentication/v1.0/login/password/reset/forgot",
            sendResetToken: "/service/application/user/authentication/v1.0/login/password/reset/token",
            loginWithToken: "/service/application/user/authentication/v1.0/login/token",
            registerWithForm: "/service/application/user/authentication/v1.0/register/form",
            verifyEmail: "/service/application/user/authentication/v1.0/verify/email",
            verifyMobile: "/service/application/user/authentication/v1.0/verify/mobile",
            hasPassword: "/service/application/user/authentication/v1.0/has-password",
            updatePassword: "/service/application/user/authentication/v1.0/password",
            logout: "/service/application/user/authentication/v1.0/logout",
            sendOTPOnMobile: "/service/application/user/authentication/v1.0/otp/mobile/send",
            verifyMobileOTP: "/service/application/user/authentication/v1.0/otp/mobile/verify",
            sendOTPOnEmail: "/service/application/user/authentication/v1.0/otp/email/send",
            verifyEmailOTP: "/service/application/user/authentication/v1.0/otp/email/verify",
            getLoggedInUser: "/service/application/user/authentication/v1.0/session",
            getListOfActiveSessions: "/service/application/user/authentication/v1.0/sessions",
            getPlatformConfig: "/service/application/user/platform/v1.0/config",
            updateProfile: "/service/application/user/profile/v1.0/detail",
            addMobileNumber: "/service/application/user/profile/v1.0/mobile",
            deleteMobileNumber: "/service/application/user/profile/v1.0/mobile",
            setMobileNumberAsPrimary: "/service/application/user/profile/v1.0/mobile/primary",
            sendVerificationLinkToMobile: "/service/application/user/profile/v1.0/mobile/link/send",
            addEmail: "/service/application/user/profile/v1.0/email",
            deleteEmail: "/service/application/user/profile/v1.0/email",
            setEmailAsPrimary: "/service/application/user/profile/v1.0/email/primary",
            sendVerificationLinkToEmail: "/service/application/user/profile/v1.0/email/link/send"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Login or Register using Facebook
    * @description: Use this API to login or register using Facebook credentials.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {OAuthRequestSchema} arg.body
    * @return {Promise<AuthSuccess>} - success response
    **/
        loginWithFacebook({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.loginWithFacebook().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["loginWithFacebook"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Login or Register using Google
    * @description: Use this API to login or register using Google Account credentials.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {OAuthRequestSchema} arg.body
    * @return {Promise<AuthSuccess>} - success response
    **/
        loginWithGoogle({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.loginWithGoogle().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["loginWithGoogle"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Login or Register using Google on Android
    * @description: Use this API to login or register in Android app using Google Account credentials.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {OAuthRequestSchema} arg.body
    * @return {Promise<AuthSuccess>} - success response
    **/
        loginWithGoogleAndroid({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.loginWithGoogleAndroid().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["loginWithGoogleAndroid"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Login or Register using Google on iOS
    * @description: Use this API to login or register in iOS app using Google Account credentials.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {OAuthRequestSchema} arg.body
    * @return {Promise<AuthSuccess>} - success response
    **/
        loginWithGoogleIOS({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.loginWithGoogleIOS().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["loginWithGoogleIOS"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Login or Register using Apple on iOS
    * @description: Use this API to login or register in iOS app using Apple Account credentials.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {OAuthRequestAppleSchema} arg.body
    * @return {Promise<AuthSuccess>} - success response
    **/
        loginWithAppleIOS({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.loginWithAppleIOS().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["loginWithAppleIOS"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Login or Register with OTP
    * @description: Use this API to login or register with a One-time Password (OTP) sent via Email or SMS.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {SendOtpRequestSchema} arg.body
    * @return {Promise<SendOtpResponse>} - success response
    **/
        loginWithOTP({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.loginWithOTP().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["loginWithOTP"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Login or Register with password
    * @description: Use this API to login or register using an email address and password.
    * @param {Object} arg - arg object.
    
    * @param {PasswordLoginRequestSchema} arg.body
    * @return {Promise<LoginSuccess>} - success response
    **/
        loginWithEmailAndPassword({
            body
            
        } = {}) {
            const { error } = UserValidator.loginWithEmailAndPassword().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["loginWithEmailAndPassword"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Reset Password
    * @description: Use this API to reset a password using the link sent on email.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {SendResetPasswordEmailRequestSchema} arg.body
    * @return {Promise<ResetPasswordSuccess>} - success response
    **/
        sendResetPasswordEmail({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.sendResetPasswordEmail().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["sendResetPasswordEmail"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Forgot Password
    * @description: Use this API to reset a password using the code sent on email or SMS.
    * @param {Object} arg - arg object.
    
    * @param {ForgotPasswordRequestSchema} arg.body
    * @return {Promise<LoginSuccess>} - success response
    **/
        forgotPassword({
            body
            
        } = {}) {
            const { error } = UserValidator.forgotPassword().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["forgotPassword"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Reset Password using token
    * @description: Use this API to send code to reset password.
    * @param {Object} arg - arg object.
    
    * @param {CodeRequestBodySchema} arg.body
    * @return {Promise<ResetPasswordSuccess>} - success response
    **/
        sendResetToken({
            body
            
        } = {}) {
            const { error } = UserValidator.sendResetToken().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["sendResetToken"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Login or Register with token
    * @description: Use this API to login or register using a token for authentication.
    * @param {Object} arg - arg object.
    
    * @param {TokenRequestBodySchema} arg.body
    * @return {Promise<LoginSuccess>} - success response
    **/
        loginWithToken({
            body
            
        } = {}) {
            const { error } = UserValidator.loginWithToken().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["loginWithToken"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Registration using a form
    * @description: Use this API to perform user registration by sending form data in the request body.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {FormRegisterRequestSchema} arg.body
    * @return {Promise<RegisterFormSuccess>} - success response
    **/
        registerWithForm({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.registerWithForm().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["registerWithForm"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Verify email
    * @description: Use this API to send a verification code to verify an email.
    * @param {Object} arg - arg object.
    
    * @param {CodeRequestBodySchema} arg.body
    * @return {Promise<VerifyEmailSuccess>} - success response
    **/
        verifyEmail({
            body
            
        } = {}) {
            const { error } = UserValidator.verifyEmail().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["verifyEmail"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Verify mobile
    * @description: Use this API to send a verification code to verify a mobile number.
    * @param {Object} arg - arg object.
    
    * @param {CodeRequestBodySchema} arg.body
    * @return {Promise<VerifyEmailSuccess>} - success response
    **/
        verifyMobile({
            body
            
        } = {}) {
            const { error } = UserValidator.verifyMobile().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["verifyMobile"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Check password
    * @description: Use this API to check if user has created a password for login.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<HasPasswordSuccess>} - success response
    **/
        hasPassword({
            
        } = {}) {
            const { error } = UserValidator.hasPassword().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["hasPassword"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Update user password
    * @description: Use this API to update the password.
    * @param {Object} arg - arg object.
    
    * @param {UpdatePasswordRequestSchema} arg.body
    * @return {Promise<VerifyEmailSuccess>} - success response
    **/
        updatePassword({
            body
            
        } = {}) {
            const { error } = UserValidator.updatePassword().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["updatePassword"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Logs out currently logged in user
    * @description: Use this API to check to logout a user from the app.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<LogoutSuccess>} - success response
    **/
        logout({
            
        } = {}) {
            const { error } = UserValidator.logout().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["logout"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Send OTP on mobile
    * @description: Use this API to send an OTP to a mobile number.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {SendMobileOtpRequestSchema} arg.body
    * @return {Promise<OtpSuccess>} - success response
    **/
        sendOTPOnMobile({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.sendOTPOnMobile().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["sendOTPOnMobile"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Verify OTP on mobile
    * @description: Use this API to verify the OTP received on a mobile number.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {VerifyOtpRequestSchema} arg.body
    * @return {Promise<VerifyOtpSuccess>} - success response
    **/
        verifyMobileOTP({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.verifyMobileOTP().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["verifyMobileOTP"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Send OTP on email
    * @description: Use this API to send an OTP to an email ID.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {SendEmailOtpRequestSchema} arg.body
    * @return {Promise<EmailOtpSuccess>} - success response
    **/
        sendOTPOnEmail({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.sendOTPOnEmail().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["sendOTPOnEmail"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Verify OTP on email
    * @description: Use this API to verify the OTP received on an email ID.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {VerifyEmailOtpRequestSchema} arg.body
    * @return {Promise<VerifyOtpSuccess>} - success response
    **/
        verifyEmailOTP({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.verifyEmailOTP().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["verifyEmailOTP"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get logged in user
    * @description: Use this API  to get the details of a logged in user.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<UserObjectSchema>} - success response
    **/
        getLoggedInUser({
            
        } = {}) {
            const { error } = UserValidator.getLoggedInUser().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getLoggedInUser"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get list of sessions
    * @description: Use this API to retrieve all active sessions of a user.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<SessionListSuccess>} - success response
    **/
        getListOfActiveSessions({
            
        } = {}) {
            const { error } = UserValidator.getListOfActiveSessions().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getListOfActiveSessions"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get platform configurations
    * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
    * @param {Object} arg - arg object.
    * @param {string} [arg.name] - Name of the application, e.g. Fynd
    
    
    * @return {Promise<PlatformSchema>} - success response
    **/
        getPlatformConfig({
            name
            
        } = {}) {
            const { error } = UserValidator.getPlatformConfig().validate({ name
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['name'] = name;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getPlatformConfig"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Edit Profile Details
    * @description: Use this API to update details in the user profile. Details can be first name, last name, gender, email, phone number, or profile picture.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {EditProfileRequestSchema} arg.body
    * @return {Promise<ProfileEditSuccess>} - success response
    **/
        updateProfile({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.updateProfile().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["updateProfile"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Add mobile number to profile
    * @description: Use this API to add a new mobile number to a profile.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {EditMobileRequestSchema} arg.body
    * @return {Promise<VerifyMobileOTPSuccess>} - success response
    **/
        addMobileNumber({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.addMobileNumber().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["addMobileNumber"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Delete mobile number from profile
    * @description: Use this API to delete a mobile number from a profile.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    * @param {boolean} arg.active - This is a boolean value to check if mobile number is active 1.True - Number is active 2. False - Number is inactive
    * @param {boolean} arg.primary - This is a boolean value to check if mobile number is primary number (main number) 1. True - Number is primary 2. False - Number is not primary
    * @param {boolean} arg.verified - This is a boolean value to check if mobile number is verified 1. True - Number is verified 2.False - Number is not verified yet
    * @param {string} arg.countryCode - Country code of the phone number, e.g. 91
    * @param {string} arg.phone - Phone number
    
    
    * @return {Promise<LoginSuccess>} - success response
    **/
        deleteMobileNumber({
            active,
            primary,
            verified,
            countryCode,
            phone,
            platform
            
        } = {}) {
            const { error } = UserValidator.deleteMobileNumber().validate({ active,
            primary,
            verified,
            countryCode,
            phone,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            query_params['active'] = active;
            query_params['primary'] = primary;
            query_params['verified'] = verified;
            query_params['country_code'] = countryCode;
            query_params['phone'] = phone;
            

            return APIClient.execute(
                    this._conf,
                    "delete",
                    constructUrl({
                        url: this._urls["deleteMobileNumber"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Set mobile as primary
    * @description: Use this API to set a mobile number as primary. Primary number is a verified number used for all future communications.
    * @param {Object} arg - arg object.
    
    * @param {SendVerificationLinkMobileRequestSchema} arg.body
    * @return {Promise<LoginSuccess>} - success response
    **/
        setMobileNumberAsPrimary({
            body
            
        } = {}) {
            const { error } = UserValidator.setMobileNumberAsPrimary().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["setMobileNumberAsPrimary"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Send verification link to mobile
    * @description: Use this API to send a verification link to a mobile number
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {SendVerificationLinkMobileRequestSchema} arg.body
    * @return {Promise<SendMobileVerifyLinkSuccess>} - success response
    **/
        sendVerificationLinkToMobile({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.sendVerificationLinkToMobile().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["sendVerificationLinkToMobile"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Add email to profile
    * @description: Use this API to add a new email address to a profile
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {EditEmailRequestSchema} arg.body
    * @return {Promise<VerifyEmailOTPSuccess>} - success response
    **/
        addEmail({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.addEmail().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["addEmail"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Delete email from profile
    * @description: Use this API to delete an email address from a profile
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    * @param {boolean} arg.active - This is a boolean value to check if email ID is active 1. True - Email ID is active 2.False - Email ID is inactive
    * @param {boolean} arg.primary - This is a boolean value to check if email ID is primary (main email ID) 1. True - Email ID is primary 2.False - Email ID is not primary
    * @param {boolean} arg.verified - This is a boolean value to check if email ID is verified 1. True - Email ID is verified 2.False - Email ID is not verified yet
    * @param {string} arg.email - The email ID to delete
    
    
    * @return {Promise<LoginSuccess>} - success response
    **/
        deleteEmail({
            active,
            primary,
            verified,
            email,
            platform
            
        } = {}) {
            const { error } = UserValidator.deleteEmail().validate({ active,
            primary,
            verified,
            email,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            query_params['active'] = active;
            query_params['primary'] = primary;
            query_params['verified'] = verified;
            query_params['email'] = email;
            

            return APIClient.execute(
                    this._conf,
                    "delete",
                    constructUrl({
                        url: this._urls["deleteEmail"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Set email as primary
    * @description: Use this API to set an email address as primary. Primary email ID is a email address used for all future communications.
    * @param {Object} arg - arg object.
    
    * @param {EditEmailRequestSchema} arg.body
    * @return {Promise<LoginSuccess>} - success response
    **/
        setEmailAsPrimary({
            body
            
        } = {}) {
            const { error } = UserValidator.setEmailAsPrimary().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["setEmailAsPrimary"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Send verification link to email
    * @description: Use this API to send verification link to an email address.
    * @param {Object} arg - arg object.
    * @param {string} [arg.platform] - ID of the application
    
    * @param {EditEmailRequestSchema} arg.body
    * @return {Promise<SendEmailVerifyLinkSuccess>} - success response
    **/
        sendVerificationLinkToEmail({
            body,
            platform
            
        } = {}) {
            const { error } = UserValidator.sendVerificationLinkToEmail().validate({ body,
            platform
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['platform'] = platform;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["sendVerificationLinkToEmail"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
}

class Content {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getAnnouncements: "/service/application/content/v1.0/announcements",
            getBlog: "/service/application/content/v1.0/blogs/{slug}",
            getBlogs: "/service/application/content/v1.0/blogs/",
            getDataLoaders: "/service/application/content/v1.0/data-loader",
            getFaqs: "/service/application/content/v1.0/faq",
            getFaqCategories: "/service/application/content/v1.0/faq/categories",
            getFaqBySlug: "/service/application/content/v1.0/faq/{slug}",
            getFaqCategoryBySlug: "/service/application/content/v1.0/faq/category/{slug}",
            getFaqsByCategorySlug: "/service/application/content/v1.0/faq/category/{slug}/faqs",
            getLandingPage: "/service/application/content/v1.0/landing-page",
            getLegalInformation: "/service/application/content/v1.0/legal",
            getNavigations: "/service/application/content/v1.0/navigations/",
            getSEOConfiguration: "/service/application/content/v1.0/seo",
            getSlideshows: "/service/application/content/v1.0/slideshow/",
            getSlideshow: "/service/application/content/v1.0/slideshow/{slug}",
            getSupportInformation: "/service/application/content/v1.0/support",
            getTags: "/service/application/content/v1.0/tags",
            getPage: "/service/application/content/v2.0/pages/{slug}",
            getPages: "/service/application/content/v2.0/pages/"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get live announcements
    * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<AnnouncementsResponseSchema>} - success response
    **/
        getAnnouncements({
            
        } = {}) {
            const { error } = ContentValidator.getAnnouncements().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAnnouncements"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get a blog
    * @description: Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a blog. You can get slug value from the endpoint /service/application/content/v1.0/blogs/.
    * @param {string} [arg.rootId] - ID given to the HTML element
    
    
    * @return {Promise<BlogSchema>} - success response
    **/
        getBlog({
            slug,
            rootId
            
        } = {}) {
            const { error } = ContentValidator.getBlog().validate({ slug,
            rootId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['root_id'] = rootId;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getBlog"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get a list of blogs
    * @description: Use this API to get all the blogs.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1. 
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<BlogGetResponse>} - success response
    **/
        getBlogs({
            pageNo,
            pageSize
            
        } = {}) {
            const { error } = ContentValidator.getBlogs().validate({ pageNo,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getBlogs"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get a list of blogs
    * @description: Use this API to get all the blogs.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getBlogsPaginator( { pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getBlogs({
                        pageNo:pageNo ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get the data loaders associated with an application
    * @description: Use this API to get all selected data loaders of the application in the form of tags.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<DataLoaderSchema>} - success response
    **/
        getDataLoaders({
            
        } = {}) {
            const { error } = ContentValidator.getDataLoaders().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getDataLoaders"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get a list of FAQs
    * @description: Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<FaqResponseSchema>} - success response
    **/
        getFaqs({
            
        } = {}) {
            const { error } = ContentValidator.getFaqs().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getFaqs"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get a list of FAQ categories
    * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<GetFaqCategoriesSchema>} - success response
    **/
        getFaqCategories({
            
        } = {}) {
            const { error } = ContentValidator.getFaqCategories().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getFaqCategories"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get an FAQ
    * @description: Use this API to get a particular FAQ by its slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an FAQ. You can get slug value from the endpoint /service/application/content/v1.0/faq.
    
    
    * @return {Promise<FaqSchema>} - success response
    **/
        getFaqBySlug({
            slug
            
        } = {}) {
            const { error } = ContentValidator.getFaqBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getFaqBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the FAQ category
    * @description: FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an FAQ category. You can get slug value from the endpoint /service/application/content/v1.0/faq/categories.
    
    
    * @return {Promise<GetFaqCategoryBySlugSchema>} - success response
    **/
        getFaqCategoryBySlug({
            slug
            
        } = {}) {
            const { error } = ContentValidator.getFaqCategoryBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getFaqCategoryBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get FAQs using the slug of FAQ category
    * @description: FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of an FAQ category. You can get slug value from the endpoint /service/application/content/v1.0/faq/categories.
    
    
    * @return {Promise<GetFaqSchema>} - success response
    **/
        getFaqsByCategorySlug({
            slug
            
        } = {}) {
            const { error } = ContentValidator.getFaqsByCategorySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getFaqsByCategorySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the landing page
    * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<LandingPageSchema>} - success response
    **/
        getLandingPage({
            
        } = {}) {
            const { error } = ContentValidator.getLandingPage().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getLandingPage"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get legal information
    * @description: Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<ApplicationLegal>} - success response
    **/
        getLegalInformation({
            
        } = {}) {
            const { error } = ContentValidator.getLegalInformation().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getLegalInformation"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the navigation
    * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1. 
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<NavigationGetResponse>} - success response
    **/
        getNavigations({
            pageNo,
            pageSize
            
        } = {}) {
            const { error } = ContentValidator.getNavigations().validate({ pageNo,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getNavigations"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get the navigation
    * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getNavigationsPaginator( { pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getNavigations({
                        pageNo:pageNo ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get the SEO of an application
    * @description: Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<SeoComponent>} - success response
    **/
        getSEOConfiguration({
            
        } = {}) {
            const { error } = ContentValidator.getSEOConfiguration().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getSEOConfiguration"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the slideshows
    * @description: Use this API to get a list of slideshows along with their details.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1. 
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<SlideshowGetResponse>} - success response
    **/
        getSlideshows({
            pageNo,
            pageSize
            
        } = {}) {
            const { error } = ContentValidator.getSlideshows().validate({ pageNo,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getSlideshows"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get the slideshows
    * @description: Use this API to get a list of slideshows along with their details.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getSlideshowsPaginator( { pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getSlideshows({
                        pageNo:pageNo ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get a slideshow
    * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a slideshow. You can get slug value from the endpoint /service/application/content/v1.0/slideshow/.
    
    
    * @return {Promise<SlideshowSchema>} - success response
    **/
        getSlideshow({
            slug
            
        } = {}) {
            const { error } = ContentValidator.getSlideshow().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getSlideshow"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the support information
    * @description: Use this API to get contact details for customer support including emails and phone numbers.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<Support>} - success response
    **/
        getSupportInformation({
            
        } = {}) {
            const { error } = ContentValidator.getSupportInformation().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getSupportInformation"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get the tags associated with an application
    * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<TagsSchema>} - success response
    **/
        getTags({
            
        } = {}) {
            const { error } = ContentValidator.getTags().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getTags"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get a page
    * @description: Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a page. You can get slug value from the endpoint /service/application/content/v2.0/pages/.
    * @param {string} [arg.rootId] - ID given to the HTML element
    
    
    * @return {Promise<PageSchema>} - success response
    **/
        getPage({
            slug,
            rootId
            
        } = {}) {
            const { error } = ContentValidator.getPage().validate({ slug,
            rootId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['root_id'] = rootId;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getPage"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get all pages
    * @description: Use this API to get a list of pages.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1. 
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<PageGetResponse>} - success response
    **/
        getPages({
            pageNo,
            pageSize
            
        } = {}) {
            const { error } = ContentValidator.getPages().validate({ pageNo,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getPages"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get all pages
    * @description: Use this API to get a list of pages.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getPagesPaginator( { pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getPages({
                        pageNo:pageNo ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
}

class Communication {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getCommunicationConsent: "/service/application/communication/v1.0/consent",
            upsertCommunicationConsent: "/service/application/communication/v1.0/consent",
            upsertAppPushtoken: "/service/application/communication/v1.0/pn-token"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get communication consent
    * @description: Use this API to retrieve the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<CommunicationConsent>} - success response
    **/
        getCommunicationConsent({
            
        } = {}) {
            const { error } = CommunicationValidator.getCommunicationConsent().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCommunicationConsent"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Upsert communication consent
    * @description: Use this API to update and insert the consent provided by the user for receiving communication messages over Email/SMS/WhatsApp.
    * @param {Object} arg - arg object.
    
    * @param {CommunicationConsentReq} arg.body
    * @return {Promise<CommunicationConsentRes>} - success response
    **/
        upsertCommunicationConsent({
            body
            
        } = {}) {
            const { error } = CommunicationValidator.upsertCommunicationConsent().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["upsertCommunicationConsent"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Upsert push token of a user
    * @description: Use this API to update and insert the push token of the user.
    * @param {Object} arg - arg object.
    
    * @param {PushtokenReq} arg.body
    * @return {Promise<PushtokenRes>} - success response
    **/
        upsertAppPushtoken({
            body
            
        } = {}) {
            const { error } = CommunicationValidator.upsertAppPushtoken().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["upsertAppPushtoken"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
}

class Share {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getApplicationQRCode: "/service/application/share/v1.0/qr/",
            getProductQRCodeBySlug: "/service/application/share/v1.0/qr/products/{slug}/",
            getCollectionQRCodeBySlug: "/service/application/share/v1.0/qr/collection/{slug}/",
            getUrlQRCode: "/service/application/share/v1.0/qr/url/",
            createShortLink: "/service/application/share/v1.0/links/short-link/",
            getShortLinkByHash: "/service/application/share/v1.0/links/short-link/{hash}/",
            getOriginalShortLinkByHash: "/service/application/share/v1.0/links/short-link/{hash}/original/"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Create QR Code of an app
    * @description: Use this API to create a QR code of an app for sharing it with users who want to use the app.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<QRCodeResp>} - success response
    **/
        getApplicationQRCode({
            
        } = {}) {
            const { error } = ShareValidator.getApplicationQRCode().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getApplicationQRCode"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Create QR Code of a product
    * @description: Use this API to create a QR code of a product for sharing it with users who want to view/purchase the product.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint.
    
    
    * @return {Promise<QRCodeResp>} - success response
    **/
        getProductQRCodeBySlug({
            slug
            
        } = {}) {
            const { error } = ShareValidator.getProductQRCodeBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getProductQRCodeBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Create QR Code of a collection
    * @description: Use this API to create a QR code of a collection of products for sharing it with users who want to view/purchase the collection.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A short, human-readable, URL-friendly identifier of a collection. You can get slug value from the endpoint.
    
    
    * @return {Promise<QRCodeResp>} - success response
    **/
        getCollectionQRCodeBySlug({
            slug
            
        } = {}) {
            const { error } = ShareValidator.getCollectionQRCodeBySlug().validate({ slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getCollectionQRCodeBySlug"],
                        params: { slug }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Create QR Code of a URL
    * @description: Use this API to create a QR code of a URL for sharing it with users who want to visit the link.
    * @param {Object} arg - arg object.
    * @param {string} arg.url - A link or a web address
    
    
    * @return {Promise<QRCodeResp>} - success response
    **/
        getUrlQRCode({
            url
            
        } = {}) {
            const { error } = ShareValidator.getUrlQRCode().validate({ url
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['url'] = url;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getUrlQRCode"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Create a short link
    * @description: Use this API to create a short link that is easy to write/share/read as compared to long URLs.
    * @param {Object} arg - arg object.
    
    * @param {ShortLinkReq} arg.body
    * @return {Promise<ShortLinkRes>} - success response
    **/
        createShortLink({
            body
            
        } = {}) {
            const { error } = ShareValidator.createShortLink().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["createShortLink"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get short link by hash
    * @description: Use this API to get a short link by using a hash value.
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - A string value used for converting long URL to short URL and vice-versa.
    
    
    * @return {Promise<ShortLinkRes>} - success response
    **/
        getShortLinkByHash({
            hash
            
        } = {}) {
            const { error } = ShareValidator.getShortLinkByHash().validate({ hash
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getShortLinkByHash"],
                        params: { hash }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get original link by hash
    * @description: Use this API to retrieve the original link from a short-link by using a hash value.
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - A string value used for converting long URL to short URL and vice-versa.
    
    
    * @return {Promise<ShortLinkRes>} - success response
    **/
        getOriginalShortLinkByHash({
            hash
            
        } = {}) {
            const { error } = ShareValidator.getOriginalShortLinkByHash().validate({ hash
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getOriginalShortLinkByHash"],
                        params: { hash }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
}

class FileStorage {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            startUpload: "/service/application/assets/v1.0/namespaces/{namespace}/upload/start/",
            completeUpload: "/service/application/assets/v1.0/namespaces/{namespace}/upload/complete/",
            signUrls: "/service/application/assets/v1.0/sign-urls/"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Initiates an upload and returns a storage link that is valid for 30 minutes. You can use the storage link to make subsequent upload request with file buffer or blob.
    * @description: Use this API to perform the first step of uploading (i.e. **Start**) an arbitrarily sized buffer or blob.

The three major steps are:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns a storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.

### Complete
After successfully upload, call the `completeUpload` API to finish the upload process.
This operation will return the URL of the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - Name of the bucket created for storing objects.
    
    * @param {StartRequest} arg.body
    * @return {Promise<StartResponse>} - success response
    **/
        startUpload({
            namespace,
            body
            
        } = {}) {
            const { error } = FileStorageValidator.startUpload().validate({ namespace,
            body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["startUpload"],
                        params: { namespace }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Completes the upload process. After successfully uploading a file, call this API to finish the upload process.
    * @description: Use this API to perform the third step of uploading (i.e. **Complete**) an arbitrarily sized buffer or blob.

The three major steps are:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `startUpload`.
It returns a storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.

### Complete
After successfully upload, call the `completeUpload` API to finish the upload process.
This operation will return the URL of the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - Name of the bucket created for storing objects.
    
    * @param {StartResponse} arg.body
    * @return {Promise<CompleteResponse>} - success response
    **/
        completeUpload({
            namespace,
            body
            
        } = {}) {
            const { error } = FileStorageValidator.completeUpload().validate({ namespace,
            body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["completeUpload"],
                        params: { namespace }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Explain here
    * @description: Describe here
    * @param {Object} arg - arg object.
    
    * @param {SignUrlRequest} arg.body
    * @return {Promise<SignUrlResponse>} - success response
    **/
        signUrls({
            body
            
        } = {}) {
            const { error } = FileStorageValidator.signUrls().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["signUrls"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
}

class Configuration {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getApplication: "/service/application/configuration/v1.0/application",
            getOwnerInfo: "/service/application/configuration/v1.0/about",
            getBasicDetails: "/service/application/configuration/v1.0/detail",
            getIntegrationTokens: "/service/application/configuration/v1.0/token",
            getOrderingStores: "/service/application/configuration/v1.0/ordering-store/stores",
            getStoreDetailById: "/service/application/configuration/v1.0/ordering-store/stores/{store_id}",
            getFeatures: "/service/application/configuration/v1.0/feature",
            getContactInfo: "/service/application/configuration/v1.0/information",
            getCurrencies: "/service/application/configuration/v1.0/currencies",
            getCurrencyById: "/service/application/configuration/v1.0/currency/{id}",
            getAppCurrencies: "/service/application/configuration/v1.0/currency",
            getLanguages: "/service/application/configuration/v1.0/languages",
            getOrderingStoreCookie: "/service/application/configuration/v1.0/ordering-store/select",
            removeOrderingStoreCookie: "/service/application/configuration/v1.0/ordering-store/select",
            getAppStaffs: "/service/application/configuration/v1.0/staff"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get current application details
    * @description: Use this API to get the current application details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<Application>} - success response
    **/
        getApplication({
            
        } = {}) {
            const { error } = ConfigurationValidator.getApplication().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getApplication"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get application, owner and seller information
    * @description: Use this API to get the current application details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<ApplicationAboutResponse>} - success response
    **/
        getOwnerInfo({
            
        } = {}) {
            const { error } = ConfigurationValidator.getOwnerInfo().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getOwnerInfo"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get basic application details
    * @description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<ApplicationDetail>} - success response
    **/
        getBasicDetails({
            
        } = {}) {
            const { error } = ConfigurationValidator.getBasicDetails().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getBasicDetails"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get integration tokens
    * @description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<AppTokenResponse>} - success response
    **/
        getIntegrationTokens({
            
        } = {}) {
            const { error } = ConfigurationValidator.getIntegrationTokens().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getIntegrationTokens"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get deployment stores
    * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
    * @param {string} [arg.q] - Store code or name of the ordering store.
    
    
    * @return {Promise<OrderingStores>} - success response
    **/
        getOrderingStores({
            pageNo,
            pageSize,
            q
            
        } = {}) {
            const { error } = ConfigurationValidator.getOrderingStores().validate({ pageNo,
            pageSize,
            q
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            query_params['q'] = q;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getOrderingStores"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                    
                
                    
                        
                    
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get deployment stores
    * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
    * @param {string} [arg.q] - Store code or name of the ordering store.
    
    **/
                getOrderingStoresPaginator( { pageSize, q
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "number";
                    const data = await this.getOrderingStores({
                        pageNo:pageNo ,
                        pageSize:pageSize ,
                        q:q 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get ordering store details
    * @description: Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders).
    * @param {Object} arg - arg object.
    * @param {number} arg.storeId - Store uid
    
    
    * @return {Promise<OrderingStore>} - success response
    **/
        getStoreDetailById({
            storeId
            
        } = {}) {
            const { error } = ConfigurationValidator.getStoreDetailById().validate({ storeId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getStoreDetailById"],
                        params: { storeId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get features of application
    * @description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<AppFeatureResponse>} - success response
    **/
        getFeatures({
            
        } = {}) {
            const { error } = ConfigurationValidator.getFeatures().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getFeatures"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get application information
    * @description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<ApplicationInformation>} - success response
    **/
        getContactInfo({
            
        } = {}) {
            const { error } = ConfigurationValidator.getContactInfo().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getContactInfo"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get all currencies list
    * @description: Use this API to get a list of currencies available. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<CurrenciesResponse>} - success response
    **/
        getCurrencies({
            
        } = {}) {
            const { error } = ConfigurationValidator.getCurrencies().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCurrencies"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get currency by its ID
    * @description: Use this API to retrieve a currency using its ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Object ID assigned to the currency
    
    
    * @return {Promise<Currency>} - success response
    **/
        getCurrencyById({
            id
            
        } = {}) {
            const { error } = ConfigurationValidator.getCurrencyById().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCurrencyById"],
                        params: { id }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get currencies enabled in the application
    * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<AppCurrencyResponse>} - success response
    **/
        getAppCurrencies({
            
        } = {}) {
            const { error } = ConfigurationValidator.getAppCurrencies().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAppCurrencies"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get list of languages
    * @description: Use this API to get a list of languages supported in the application.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<LanguageResponse>} - success response
    **/
        getLanguages({
            
        } = {}) {
            const { error } = ConfigurationValidator.getLanguages().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getLanguages"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get an Ordering Store signed cookie on selection of ordering store.
    * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.
    * @param {Object} arg - arg object.
    
    * @param {OrderingStoreSelectRequest} arg.body
    * @return {Promise<SuccessMessageResponse>} - success response
    **/
        getOrderingStoreCookie({
            body
            
        } = {}) {
            const { error } = ConfigurationValidator.getOrderingStoreCookie().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getOrderingStoreCookie"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Unset the Ordering Store signed cookie.
    * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<SuccessMessageResponse>} - success response
    **/
        removeOrderingStoreCookie({
            
        } = {}) {
            const { error } = ConfigurationValidator.removeOrderingStoreCookie().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "delete",
                    constructUrl({
                        url: this._urls["removeOrderingStoreCookie"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get a list of staff.
    * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.orderIncent] - This is a boolean value. Select `true` to retrieve the staff members eligible for getting incentives on orders.
    * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in retrieving staff members working at a particular ordering store.
    * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving the details of a particular staff member.
    
    
    * @return {Promise<AppStaffResponse>} - success response
    **/
        getAppStaffs({
            orderIncent,
            orderingStore,
            user
            
        } = {}) {
            const { error } = ConfigurationValidator.getAppStaffs().validate({ orderIncent,
            orderingStore,
            user
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['order_incent'] = orderIncent;
            query_params['ordering_store'] = orderingStore;
            query_params['user'] = user;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAppStaffs"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
}

class Payment {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getAggregatorsConfig: "/service/application/payment/v1.0/config/aggregators/key",
            attachCardToCustomer: "/service/application/payment/v1.0/card/attach",
            getActiveCardAggregator: "/service/application/payment/v1.0/card/aggregator",
            getActiveUserCards: "/service/application/payment/v1.0/cards",
            deleteUserCard: "/service/application/payment/v1.0/card/remove",
            verifyCustomerForPayment: "/service/application/payment/v1.0/payment/customer/validation",
            verifyAndChargePayment: "/service/application/payment/v1.0/payment/confirm/charge",
            initialisePayment: "/service/application/payment/v1.0/payment/request",
            checkAndUpdatePaymentStatus: "/service/application/payment/v1.0/payment/confirm/polling",
            getPaymentModeRoutes: "/service/application/payment/v1.0/payment/options",
            getPosPaymentModeRoutes: "/service/application/payment/v1.0/payment/options/pos",
            getRupifiBannerDetails: "/service/application/payment/v1.0/rupifi/banner",
            getEpaylaterBannerDetails: "/service/application/payment/v1.0/epaylater/banner",
            getActiveRefundTransferModes: "/service/application/payment/v1.0/refund/transfer-mode",
            enableOrDisableRefundTransferMode: "/service/application/payment/v1.0/refund/transfer-mode",
            getUserBeneficiariesDetail: "/service/application/payment/v1.0/refund/user/beneficiary",
            verifyIfscCode: "/service/application/payment/v1.0/ifsc-code/verify",
            getOrderBeneficiariesDetail: "/service/application/payment/v1.0/refund/order/beneficiaries",
            verifyOtpAndAddBeneficiaryForBank: "/service/application/payment/v1.0/refund/verification/bank",
            addBeneficiaryDetails: "/service/application/payment/v1.0/refund/account",
            addRefundBankAccountUsingOTP: "/service/application/payment/v1.0/refund/account/otp",
            verifyOtpAndAddBeneficiaryForWallet: "/service/application/payment/v1.0/refund/verification/wallet",
            updateDefaultBeneficiary: "/service/application/payment/v1.0/refund/beneficiary/default",
            customerCreditSummary: "/service/application/payment/v1.0/payment/credit-summary/",
            redirectToAggregator: "/service/application/payment/v1.0/payment/redirect-to-aggregator/",
            checkCredit: "/service/application/payment/v1.0/check-credits/",
            customerOnboard: "/service/application/payment/v1.0/credit-onboard/"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get payment gateway keys
    * @description: Use this API to retrieve the payment gateway key, secrets, merchant, SDK/API details to complete a payment at front-end.
    * @param {Object} arg - arg object.
    * @param {string} [arg.xApiToken] - Used for basic authentication.
    * @param {boolean} [arg.refresh] - This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one.
    
    
    * @return {Promise<AggregatorsConfigDetailResponse>} - success response
    **/
        getAggregatorsConfig({
            xApiToken,
            refresh
            
        } = {}) {
            const { error } = PaymentValidator.getAggregatorsConfig().validate({ xApiToken,
            refresh
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['refresh'] = refresh;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAggregatorsConfig"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Attach a saved card to customer.
    * @description: Use this API to attach a customer's saved card at the payment gateway, such as Stripe, Juspay.
    * @param {Object} arg - arg object.
    
    * @param {AttachCardRequest} arg.body
    * @return {Promise<AttachCardsResponse>} - success response
    **/
        attachCardToCustomer({
            body
            
        } = {}) {
            const { error } = PaymentValidator.attachCardToCustomer().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["attachCardToCustomer"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Fetch active payment gateway for card payments
    * @description: Use this API to retrieve an active payment aggregator along with the Customer ID. This is applicable for cards payments only.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.refresh] - 
    
    
    * @return {Promise<ActiveCardPaymentGatewayResponse>} - success response
    **/
        getActiveCardAggregator({
            refresh
            
        } = {}) {
            const { error } = PaymentValidator.getActiveCardAggregator().validate({ refresh
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['refresh'] = refresh;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getActiveCardAggregator"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Fetch the list of cards saved by the user
    * @description: Use this API to retrieve a list of cards stored by user from an active payment gateway.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.forceRefresh] - 
    
    
    * @return {Promise<ListCardsResponse>} - success response
    **/
        getActiveUserCards({
            forceRefresh
            
        } = {}) {
            const { error } = PaymentValidator.getActiveUserCards().validate({ forceRefresh
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['force_refresh'] = forceRefresh;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getActiveUserCards"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Delete a card
    * @description: Use this API to delete a card added by a user on the payment gateway and clear the cache.
    * @param {Object} arg - arg object.
    
    * @param {DeletehCardRequest} arg.body
    * @return {Promise<DeleteCardsResponse>} - success response
    **/
        deleteUserCard({
            body
            
        } = {}) {
            const { error } = PaymentValidator.deleteUserCard().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["deleteUserCard"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Validate customer for payment
    * @description: Use this API to check if the customer is eligible to use credit-line facilities such as Simpl Pay Later and Rupifi.
    * @param {Object} arg - arg object.
    
    * @param {ValidateCustomerRequest} arg.body
    * @return {Promise<ValidateCustomerResponse>} - success response
    **/
        verifyCustomerForPayment({
            body
            
        } = {}) {
            const { error } = PaymentValidator.verifyCustomerForPayment().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["verifyCustomerForPayment"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Verify and charge payment
    * @description: Use this API to verify and check the status of a payment transaction (server-to-server) made through aggregators like Simpl and Mswipe.
    * @param {Object} arg - arg object.
    
    * @param {ChargeCustomerRequest} arg.body
    * @return {Promise<ChargeCustomerResponse>} - success response
    **/
        verifyAndChargePayment({
            body
            
        } = {}) {
            const { error } = PaymentValidator.verifyAndChargePayment().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["verifyAndChargePayment"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Initialize a payment (server-to-server) for UPI and BharatQR
    * @description: PUse this API to inititate payment using UPI, BharatQR, wherein the UPI requests are send to the app and QR code is displayed on the screen.
    * @param {Object} arg - arg object.
    
    * @param {PaymentInitializationRequest} arg.body
    * @return {Promise<PaymentInitializationResponse>} - success response
    **/
        initialisePayment({
            body
            
        } = {}) {
            const { error } = PaymentValidator.initialisePayment().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["initialisePayment"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Performs continuous polling to check status of payment on the server
    * @description: Use this API to perform continuous polling at intervals to check the status of payment until timeout.
    * @param {Object} arg - arg object.
    
    * @param {PaymentStatusUpdateRequest} arg.body
    * @return {Promise<PaymentStatusUpdateResponse>} - success response
    **/
        checkAndUpdatePaymentStatus({
            body
            
        } = {}) {
            const { error } = PaymentValidator.checkAndUpdatePaymentStatus().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["checkAndUpdatePaymentStatus"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get applicable payment options
    * @description: Use this API to get all valid payment options for doing a payment.
    * @param {Object} arg - arg object.
    * @param {number} arg.amount - Payable amount.
    * @param {string} arg.cartId - Identifier of the cart.
    * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
    * @param {string} arg.checkoutMode - Option to checkout for self or for others.
    * @param {boolean} [arg.refresh] - This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one.
    * @param {string} [arg.cardReference] - Card reference id of user's debit or credit card.
    * @param {string} [arg.userDetails] - URIencoded JSON containing details of an anonymous user.
    
    
    * @return {Promise<PaymentModeRouteResponse>} - success response
    **/
        getPaymentModeRoutes({
            amount,
            cartId,
            pincode,
            checkoutMode,
            refresh,
            cardReference,
            userDetails
            
        } = {}) {
            const { error } = PaymentValidator.getPaymentModeRoutes().validate({ amount,
            cartId,
            pincode,
            checkoutMode,
            refresh,
            cardReference,
            userDetails
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['amount'] = amount;
            query_params['cart_id'] = cartId;
            query_params['pincode'] = pincode;
            query_params['checkout_mode'] = checkoutMode;
            query_params['refresh'] = refresh;
            query_params['card_reference'] = cardReference;
            query_params['user_details'] = userDetails;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getPaymentModeRoutes"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get applicable payment options for Point-of-Sale (POS)
    * @description: Use this API to get all valid payment options for doing a payment in POS.
    * @param {Object} arg - arg object.
    * @param {number} arg.amount - Payable amount.
    * @param {string} arg.cartId - Identifier of the cart.
    * @param {string} arg.pincode - The PIN Code of the destination address, e.g. 400059
    * @param {string} arg.checkoutMode - Option to checkout for self or for others.
    * @param {boolean} [arg.refresh] - This is a boolean value. Select `true` to remove temporary cache files on payment gateway and replace with the latest one.
    * @param {string} [arg.cardReference] - Card reference id of user's debit or credit card.
    * @param {string} arg.orderType - The order type of shipment * HomeDelivery - If the customer wants the order home-delivered * PickAtStore - If the customer wants the handover of an order at the store itself.
    * @param {string} [arg.userDetails] - URIencoded JSON containing details of an anonymous user.
    
    
    * @return {Promise<PaymentModeRouteResponse>} - success response
    **/
        getPosPaymentModeRoutes({
            amount,
            cartId,
            pincode,
            checkoutMode,
            orderType,
            refresh,
            cardReference,
            userDetails
            
        } = {}) {
            const { error } = PaymentValidator.getPosPaymentModeRoutes().validate({ amount,
            cartId,
            pincode,
            checkoutMode,
            orderType,
            refresh,
            cardReference,
            userDetails
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['amount'] = amount;
            query_params['cart_id'] = cartId;
            query_params['pincode'] = pincode;
            query_params['checkout_mode'] = checkoutMode;
            query_params['refresh'] = refresh;
            query_params['card_reference'] = cardReference;
            query_params['order_type'] = orderType;
            query_params['user_details'] = userDetails;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getPosPaymentModeRoutes"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get CreditLine Offer
    * @description: Get CreditLine Offer if user is tentatively approved by rupifi
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<RupifiBannerResponse>} - success response
    **/
        getRupifiBannerDetails({
            
        } = {}) {
            const { error } = PaymentValidator.getRupifiBannerDetails().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getRupifiBannerDetails"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get Epaylater Enabled
    * @description: Get Epaylater Enabled if user is tentatively approved by epaylater
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<EpaylaterBannerResponse>} - success response
    **/
        getEpaylaterBannerDetails({
            
        } = {}) {
            const { error } = PaymentValidator.getEpaylaterBannerDetails().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getEpaylaterBannerDetails"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Lists the mode of refund
    * @description: Use this API to retrieve eligible refund modes (such as Netbanking) and add the beneficiary details.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<TransferModeResponse>} - success response
    **/
        getActiveRefundTransferModes({
            
        } = {}) {
            const { error } = PaymentValidator.getActiveRefundTransferModes().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getActiveRefundTransferModes"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Enable/Disable a mode for transferring a refund
    * @description: Activate or Deactivate Transfer Mode to collect Beneficiary Details for Refund
    * @param {Object} arg - arg object.
    
    * @param {UpdateRefundTransferModeRequest} arg.body
    * @return {Promise<UpdateRefundTransferModeResponse>} - success response
    **/
        enableOrDisableRefundTransferMode({
            body
            
        } = {}) {
            const { error } = PaymentValidator.enableOrDisableRefundTransferMode().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["enableOrDisableRefundTransferMode"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Lists the beneficiary of a refund
    * @description: Use this API to get the details of all active beneficiary added by a user for refund.
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    
    
    * @return {Promise<OrderBeneficiaryResponse>} - success response
    **/
        getUserBeneficiariesDetail({
            orderId
            
        } = {}) {
            const { error } = PaymentValidator.getUserBeneficiariesDetail().validate({ orderId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['order_id'] = orderId;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getUserBeneficiariesDetail"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Verify IFSC Code
    * @description: Use this API to check whether the 11-digit IFSC code is valid and to fetch the bank details for refund.
    * @param {Object} arg - arg object.
    * @param {string} [arg.ifscCode] - A 11-digit alphanumeric code that uniquely identifies a bank branch.
    
    
    * @return {Promise<IfscCodeResponse>} - success response
    **/
        verifyIfscCode({
            ifscCode
            
        } = {}) {
            const { error } = PaymentValidator.verifyIfscCode().validate({ ifscCode
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['ifsc_code'] = ifscCode;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["verifyIfscCode"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Lists the beneficiary of a refund
    * @description: Use this API to get the details of all active beneficiary added by a user for refund.
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    
    
    * @return {Promise<OrderBeneficiaryResponse>} - success response
    **/
        getOrderBeneficiariesDetail({
            orderId
            
        } = {}) {
            const { error } = PaymentValidator.getOrderBeneficiariesDetail().validate({ orderId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['order_id'] = orderId;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getOrderBeneficiariesDetail"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Verify the beneficiary details using OTP
    * @description: Use this API to perform an OTP validation before saving the beneficiary details added for a refund.
    * @param {Object} arg - arg object.
    
    * @param {AddBeneficiaryViaOtpVerificationRequest} arg.body
    * @return {Promise<AddBeneficiaryViaOtpVerificationResponse>} - success response
    **/
        verifyOtpAndAddBeneficiaryForBank({
            body
            
        } = {}) {
            const { error } = PaymentValidator.verifyOtpAndAddBeneficiaryForBank().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["verifyOtpAndAddBeneficiaryForBank"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Save bank details for cancelled/returned order
    * @description: Use this API to save the bank details for a returned or cancelled order to refund the amount.
    * @param {Object} arg - arg object.
    
    * @param {AddBeneficiaryDetailsRequest} arg.body
    * @return {Promise<RefundAccountResponse>} - success response
    **/
        addBeneficiaryDetails({
            body
            
        } = {}) {
            const { error } = PaymentValidator.addBeneficiaryDetails().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["addBeneficiaryDetails"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Save bank details for cancelled/returned order
    * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
    * @param {Object} arg - arg object.
    
    * @param {AddBeneficiaryDetailsOTPRequest} arg.body
    * @return {Promise<RefundAccountResponse>} - success response
    **/
        addRefundBankAccountUsingOTP({
            body
            
        } = {}) {
            const { error } = PaymentValidator.addRefundBankAccountUsingOTP().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["addRefundBankAccountUsingOTP"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Send OTP on adding a wallet beneficiary
    * @description: Use this API to send an OTP while adding a wallet beneficiary by mobile no. verification.
    * @param {Object} arg - arg object.
    
    * @param {WalletOtpRequest} arg.body
    * @return {Promise<WalletOtpResponse>} - success response
    **/
        verifyOtpAndAddBeneficiaryForWallet({
            body
            
        } = {}) {
            const { error } = PaymentValidator.verifyOtpAndAddBeneficiaryForWallet().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["verifyOtpAndAddBeneficiaryForWallet"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Set a default beneficiary for a refund
    * @description: Use this API to set a default beneficiary for getting a refund.
    * @param {Object} arg - arg object.
    
    * @param {SetDefaultBeneficiaryRequest} arg.body
    * @return {Promise<SetDefaultBeneficiaryResponse>} - success response
    **/
        updateDefaultBeneficiary({
            body
            
        } = {}) {
            const { error } = PaymentValidator.updateDefaultBeneficiary().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["updateDefaultBeneficiary"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: API to fetch the customer credit summary
    * @description: Use this API to fetch the customer credit summary.
    * @param {Object} arg - arg object.
    * @param {string} [arg.aggregator] - 
    
    
    * @return {Promise<CustomerCreditSummaryResponse>} - success response
    **/
        customerCreditSummary({
            aggregator
            
        } = {}) {
            const { error } = PaymentValidator.customerCreditSummary().validate({ aggregator
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['aggregator'] = aggregator;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["customerCreditSummary"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: API to get the redirect url to redirect the user to aggregator's page
    * @description: Use this API to get the redirect url to redirect the user to aggregator's page
    * @param {Object} arg - arg object.
    * @param {string} [arg.source] - 
    
    
    * @return {Promise<RedirectToAggregatorResponse>} - success response
    **/
        redirectToAggregator({
            source
            
        } = {}) {
            const { error } = PaymentValidator.redirectToAggregator().validate({ source
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['source'] = source;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["redirectToAggregator"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: API to fetch the customer credit summary
    * @description: Use this API to fetch the customer credit summary.
    * @param {Object} arg - arg object.
    * @param {string} [arg.aggregator] - 
    
    
    * @return {Promise<CheckCreditResponse>} - success response
    **/
        checkCredit({
            aggregator
            
        } = {}) {
            const { error } = PaymentValidator.checkCredit().validate({ aggregator
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['aggregator'] = aggregator;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["checkCredit"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: API to fetch the customer credit summary
    * @description: Use this API to fetch the customer credit summary.
    * @param {Object} arg - arg object.
    
    * @param {CustomerOnboardingRequest} arg.body
    * @return {Promise<CustomerOnboardingResponse>} - success response
    **/
        customerOnboard({
            body
            
        } = {}) {
            const { error } = PaymentValidator.customerOnboard().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["customerOnboard"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
}

class Order {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getOrders: "/service/application/order/v1.0/orders",
            getOrderById: "/service/application/order/v1.0/orders/{order_id}",
            getShipmentById: "/service/application/order/v1.0/orders/shipments/{shipment_id}",
            getShipmentReasons: "/service/application/order/v1.0/orders/shipments/{shipment_id}/reasons",
            updateShipmentStatus: "/service/application/order/v1.0/orders/shipments/{shipment_id}/status",
            trackShipment: "/service/application/order/v1.0/orders/shipments/{shipment_id}/track",
            getPosOrderById: "/service/application/order/v1.0/orders/pos-order/{order_id}",
            getCustomerDetailsByShipmentId: "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/customer-details",
            sendOtpToShipmentCustomer: "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/send/",
            verifyOtpShipmentCustomer: "/service/application/order/v1.0/orders/{order_id}/shipments/{shipment_id}/otp/verify"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get all orders
    * @description: Use this API to retrieve all the orders.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results. Default value is 1.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page. Default value is 10.
    * @param {string} [arg.fromDate] - The date from which the orders should be retrieved.
    * @param {string} [arg.toDate] - The date till which the orders should be retrieved.
    * @param {number} [arg.status] - A filter to retrieve orders by their current status such as _placed_, _delivered_, etc.
    
    
    * @return {Promise<OrderList>} - success response
    **/
        getOrders({
            pageNo,
            pageSize,
            fromDate,
            toDate,
            status
            
        } = {}) {
            const { error } = OrderValidator.getOrders().validate({ pageNo,
            pageSize,
            fromDate,
            toDate,
            status
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_no'] = pageNo;
            query_params['page_size'] = pageSize;
            query_params['from_date'] = fromDate;
            query_params['to_date'] = toDate;
            query_params['status'] = status;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getOrders"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get details of an order
    * @description: Use this API to retrieve order details such as tracking details, shipment, store information using Fynd Order ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    
    
    * @return {Promise<OrderById>} - success response
    **/
        getOrderById({
            orderId
            
        } = {}) {
            const { error } = OrderValidator.getOrderById().validate({ orderId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getOrderById"],
                        params: { orderId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get details of a shipment
    * @description: Use this API to retrieve shipment details such as price breakup, tracking details, store information, etc. using Shipment ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    
    * @return {Promise<ShipmentById>} - success response
    **/
        getShipmentById({
            shipmentId
            
        } = {}) {
            const { error } = OrderValidator.getShipmentById().validate({ shipmentId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getShipmentById"],
                        params: { shipmentId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get reasons behind full or partial cancellation of a shipment
    * @description: Use this API to retrieve the issues that led to the cancellation of bags within a shipment.
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    
    * @return {Promise<ShipmentReasons>} - success response
    **/
        getShipmentReasons({
            shipmentId
            
        } = {}) {
            const { error } = OrderValidator.getShipmentReasons().validate({ shipmentId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getShipmentReasons"],
                        params: { shipmentId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Update the shipment status
    * @description: Use this API to update the status of a shipment using its shipment ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    * @param {ShipmentStatusUpdateBody} arg.body
    * @return {Promise<ShipmentStatusUpdate>} - success response
    **/
        updateShipmentStatus({
            shipmentId,
            body
            
        } = {}) {
            const { error } = OrderValidator.updateShipmentStatus().validate({ shipmentId,
            body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["updateShipmentStatus"],
                        params: { shipmentId }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Track shipment
    * @description: Use this API to track a shipment using its shipment ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    
    * @return {Promise<ShipmentTrack>} - success response
    **/
        trackShipment({
            shipmentId
            
        } = {}) {
            const { error } = OrderValidator.trackShipment().validate({ shipmentId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["trackShipment"],
                        params: { shipmentId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get POS Order
    * @description: Use this API to retrieve a POS order and all its details such as tracking details, shipment, store information using Fynd Order ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    
    
    * @return {Promise<PosOrderById>} - success response
    **/
        getPosOrderById({
            orderId
            
        } = {}) {
            const { error } = OrderValidator.getPosOrderById().validate({ orderId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getPosOrderById"],
                        params: { orderId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get Customer Details by Shipment Id
    * @description: Use this API to retrieve customer details such as mobileno using Shipment ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    
    * @return {Promise<CustomerDetailsByShipmentId>} - success response
    **/
        getCustomerDetailsByShipmentId({
            orderId,
            shipmentId
            
        } = {}) {
            const { error } = OrderValidator.getCustomerDetailsByShipmentId().validate({ orderId,
            shipmentId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCustomerDetailsByShipmentId"],
                        params: { orderId, shipmentId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Send and Resend Otp code to Order-Shipment customer
    * @description: Use this API to send OTP to the customer of the mapped Shipment.
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    
    * @return {Promise<sendOTPApplicationResponse>} - success response
    **/
        sendOtpToShipmentCustomer({
            orderId,
            shipmentId
            
        } = {}) {
            const { error } = OrderValidator.sendOtpToShipmentCustomer().validate({ orderId,
            shipmentId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["sendOtpToShipmentCustomer"],
                        params: { orderId, shipmentId }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Verify Otp code
    * @description: Use this API to verify OTP and create a session token with custom payload.
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - A unique number used for identifying and tracking your orders.
    * @param {string} arg.shipmentId - ID of the shipment. An order may contain multiple items and may get divided into one or more shipment, each having its own ID.
    
    * @param {ReqBodyVerifyOTPShipment} arg.body
    * @return {Promise<ResponseVerifyOTPShipment>} - success response
    **/
        verifyOtpShipmentCustomer({
            orderId,
            shipmentId,
            body
            
        } = {}) {
            const { error } = OrderValidator.verifyOtpShipmentCustomer().validate({ orderId,
            shipmentId,
            body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["verifyOtpShipmentCustomer"],
                        params: { orderId, shipmentId }
                    }),
                    query_params,
                    body,
            );
        }
        
    
}

class Rewards {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getPointsOnProduct: "/service/application/rewards/v1.0/catalogue/offer/order/",
            getOfferByName: "/service/application/rewards/v1.0/offers/{name}/",
            getOrderDiscount: "/service/application/rewards/v1.0/user/offers/order-discount/",
            getUserPoints: "/service/application/rewards/v1.0/user/points/",
            getUserPointsHistory: "/service/application/rewards/v1.0/user/points/history/",
            getUserReferralDetails: "/service/application/rewards/v1.0/user/referral/",
            redeemReferralCode: "/service/application/rewards/v1.0/user/referral/redeem/"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get the eligibility of reward points on a product
    * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
    * @param {Object} arg - arg object.
    
    * @param {CatalogueOrderRequest} arg.body
    * @return {Promise<CatalogueOrderResponse>} - success response
    **/
        getPointsOnProduct({
            body
            
        } = {}) {
            const { error } = RewardsValidator.getPointsOnProduct().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getPointsOnProduct"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get offer by name
    * @description: Use this API to get the offer details and configuration by entering the name of the offer.
    * @param {Object} arg - arg object.
    * @param {string} arg.name - The name given to the offer.
    
    
    * @return {Promise<Offer>} - success response
    **/
        getOfferByName({
            name
            
        } = {}) {
            const { error } = RewardsValidator.getOfferByName().validate({ name
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getOfferByName"],
                        params: { name }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Calculates the discount on order-amount
    * @description: Use this API to calculate the discount on order-amount based on all the amount range configured in order_discount.
    * @param {Object} arg - arg object.
    
    * @param {OrderDiscountRequest} arg.body
    * @return {Promise<OrderDiscountResponse>} - success response
    **/
        getOrderDiscount({
            body
            
        } = {}) {
            const { error } = RewardsValidator.getOrderDiscount().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getOrderDiscount"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get reward points available with a user
    * @description: Use this API to retrieve total available points of a user for current application
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<PointsResponse>} - success response
    **/
        getUserPoints({
            
        } = {}) {
            const { error } = RewardsValidator.getUserPoints().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getUserPoints"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get all transactions of reward points
    * @description: Use this API to get a list of points transactions. The list of points history is paginated.
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    
    * @return {Promise<PointsHistoryResponse>} - success response
    **/
        getUserPointsHistory({
            pageId,
            pageSize
            
        } = {}) {
            const { error } = RewardsValidator.getUserPointsHistory().validate({ pageId,
            pageSize
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['page_id'] = pageId;
            query_params['page_size'] = pageSize;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getUserPointsHistory"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
            
            
                
                    
                    
                        
                    
                
                    
                        
                    
                    
                

    /**
    *
    * @summary: Get all transactions of reward points
    * @description: Use this API to get a list of points transactions. The list of points history is paginated.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
    
    **/
                getUserPointsHistoryPaginator( { pageSize
                } = {}){
                const paginator = new Paginator();
                const callback = async () => {
                    const pageId = paginator.nextId;
                    const pageNo = paginator.pageNo;
                    const pageType = "cursor";
                    const data = await this.getUserPointsHistory({
                        pageId:pageId ,
                        pageSize:pageSize 
                        }) 
                        paginator.setPaginator({
                            hasNext: data.page.has_next ? true : false,
                            nextId: data.page.next_id,
                        });
                    return data; 
                };
                paginator.setCallback(callback);
                return paginator;
            }
        
    
    /**
    *
    * @summary: Get referral details of a user
    * @description: Use this API to retrieve the referral details a user has configured in the application.
    * @param {Object} arg - arg object.
    
    
    * @return {Promise<ReferralDetailsResponse>} - success response
    **/
        getUserReferralDetails({
            
        } = {}) {
            const { error } = RewardsValidator.getUserReferralDetails().validate({  },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getUserReferralDetails"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Redeems a referral code and credits reward points to users
    * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
    * @param {Object} arg - arg object.
    
    * @param {RedeemReferralCodeRequest} arg.body
    * @return {Promise<RedeemReferralCodeResponse>} - success response
    **/
        redeemReferralCode({
            body
            
        } = {}) {
            const { error } = RewardsValidator.redeemReferralCode().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["redeemReferralCode"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
}

class PosCart {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getCart: "/service/application/pos/cart/v1.0/detail",
            getCartLastModified: "/service/application/pos/cart/v1.0/detail",
            addItems: "/service/application/pos/cart/v1.0/detail",
            updateCart: "/service/application/pos/cart/v1.0/detail",
            getItemCount: "/service/application/pos/cart/v1.0/basic",
            getCoupons: "/service/application/pos/cart/v1.0/coupon",
            applyCoupon: "/service/application/pos/cart/v1.0/coupon",
            removeCoupon: "/service/application/pos/cart/v1.0/coupon",
            getBulkDiscountOffers: "/service/application/pos/cart/v1.0/bulk-price",
            applyRewardPoints: "/service/application/pos/cart/v1.0/redeem/points/",
            getAddresses: "/service/application/pos/cart/v1.0/address",
            addAddress: "/service/application/pos/cart/v1.0/address",
            getAddressById: "/service/application/pos/cart/v1.0/address/{id}",
            updateAddress: "/service/application/pos/cart/v1.0/address/{id}",
            removeAddress: "/service/application/pos/cart/v1.0/address/{id}",
            selectAddress: "/service/application/pos/cart/v1.0/select-address",
            selectPaymentMode: "/service/application/pos/cart/v1.0/payment",
            validateCouponForPayment: "/service/application/pos/cart/v1.0/payment/validate/",
            getShipments: "/service/application/pos/cart/v1.0/shipment",
            updateShipments: "/service/application/pos/cart/v1.0/shipment",
            checkoutCart: "/service/application/pos/cart/v1.0/checkout",
            updateCartMeta: "/service/application/pos/cart/v1.0/meta",
            getAvailableDeliveryModes: "/service/application/pos/cart/v1.0/available-delivery-mode",
            getStoreAddressByUid: "/service/application/pos/cart/v1.0/store-address",
            getCartShareLink: "/service/application/pos/cart/v1.0/share-cart",
            getCartSharedItems: "/service/application/pos/cart/v1.0/share-cart/{token}",
            updateCartWithSharedItems: "/service/application/pos/cart/v1.0/share-cart/{token}/{action}"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Fetch all items added to the cart
    * @description: Use this API to get details of all the items added to a cart.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {number} [arg.assignCardId] - 
    
    
    * @return {Promise<CartDetailResponse>} - success response
    **/
        getCart({
            id,
            i,
            b,
            assignCardId
            
        } = {}) {
            const { error } = PosCartValidator.getCart().validate({ id,
            i,
            b,
            assignCardId
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            query_params['i'] = i;
            query_params['b'] = b;
            query_params['assign_card_id'] = assignCardId;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCart"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Fetch last-modified timestamp
    * @description: Use this API to fetch Last-Modified timestamp in header metadata.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    
    
    * @return {Promise<any>} - success response
    **/
        getCartLastModified({
            id
            
        } = {}) {
            const { error } = PosCartValidator.getCartLastModified().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "head",
                    constructUrl({
                        url: this._urls["getCartLastModified"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Add items to cart
    * @description: Use this API to add items to the cart.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    
    * @param {AddCartRequest} arg.body
    * @return {Promise<AddCartDetailResponse>} - success response
    **/
        addItems({
            body,
            i,
            b
            
        } = {}) {
            const { error } = PosCartValidator.addItems().validate({ body,
            i,
            b
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['i'] = i;
            query_params['b'] = b;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["addItems"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Update items in the cart
    * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    
    * @param {UpdateCartRequest} arg.body
    * @return {Promise<UpdateCartDetailResponse>} - success response
    **/
        updateCart({
            body,
            id,
            i,
            b
            
        } = {}) {
            const { error } = PosCartValidator.updateCart().validate({ body,
            id,
            i,
            b
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            query_params['i'] = i;
            query_params['b'] = b;
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["updateCart"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Count items in the cart
    * @description: Use this API to get the total number of items present in cart.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - The unique identifier of the cart.
    
    
    * @return {Promise<CartItemCountResponse>} - success response
    **/
        getItemCount({
            id
            
        } = {}) {
            const { error } = PosCartValidator.getItemCount().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getItemCount"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Fetch Coupon
    * @description: Use this API to get a list of available coupons along with their details.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    
    
    * @return {Promise<GetCouponResponse>} - success response
    **/
        getCoupons({
            id
            
        } = {}) {
            const { error } = PosCartValidator.getCoupons().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCoupons"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Apply Coupon
    * @description: Use this API to apply coupons on items in the cart.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    * @param {boolean} [arg.p] - 
    * @param {string} [arg.id] - 
    
    * @param {ApplyCouponRequest} arg.body
    * @return {Promise<CartDetailResponse>} - success response
    **/
        applyCoupon({
            body,
            i,
            b,
            p,
            id
            
        } = {}) {
            const { error } = PosCartValidator.applyCoupon().validate({ body,
            i,
            b,
            p,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['i'] = i;
            query_params['b'] = b;
            query_params['p'] = p;
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["applyCoupon"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Remove Coupon Applied
    * @description: Remove Coupon applied on the cart by passing uid in request body.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - The unique identifier of the cart
    
    
    * @return {Promise<CartDetailResponse>} - success response
    **/
        removeCoupon({
            id
            
        } = {}) {
            const { error } = PosCartValidator.removeCoupon().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "delete",
                    constructUrl({
                        url: this._urls["removeCoupon"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get discount offers based on quantity
    * @description: Use this API to get a list of applicable offers along with current, next and best offer for given product. Either one of uid, item_id, slug should be present.
    * @param {Object} arg - arg object.
    * @param {number} [arg.itemId] - The Item ID of the product
    * @param {string} [arg.articleId] - Article Mongo ID
    * @param {number} [arg.uid] - UID of the product
    * @param {string} [arg.slug] - A short, human-readable, URL-friendly identifier of a product. You can get slug value from the endpoint /service/application/catalog/v1.0/products/
    
    
    * @return {Promise<BulkPriceResponse>} - success response
    **/
        getBulkDiscountOffers({
            itemId,
            articleId,
            uid,
            slug
            
        } = {}) {
            const { error } = PosCartValidator.getBulkDiscountOffers().validate({ itemId,
            articleId,
            uid,
            slug
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['item_id'] = itemId;
            query_params['article_id'] = articleId;
            query_params['uid'] = uid;
            query_params['slug'] = slug;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getBulkDiscountOffers"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Apply reward points at cart
    * @description: Use this API to redeem a fixed no. of reward points by applying it to the cart.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    
    * @param {RewardPointRequest} arg.body
    * @return {Promise<CartDetailResponse>} - success response
    **/
        applyRewardPoints({
            body,
            id,
            i,
            b
            
        } = {}) {
            const { error } = PosCartValidator.applyRewardPoints().validate({ body,
            id,
            i,
            b
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            query_params['i'] = i;
            query_params['b'] = b;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["applyRewardPoints"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Fetch address
    * @description: Use this API to get all the addresses associated with an account. If successful, returns a Address resource in the response body specified in GetAddressesResponse.attibutes listed below are optional <ul> <li> <font color="monochrome">uid</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {string} [arg.cartId] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    
    * @return {Promise<GetAddressesResponse>} - success response
    **/
        getAddresses({
            cartId,
            mobileNo,
            checkoutMode,
            tags,
            isDefault
            
        } = {}) {
            const { error } = PosCartValidator.getAddresses().validate({ cartId,
            mobileNo,
            checkoutMode,
            tags,
            isDefault
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['cart_id'] = cartId;
            query_params['mobile_no'] = mobileNo;
            query_params['checkout_mode'] = checkoutMode;
            query_params['tags'] = tags;
            query_params['is_default'] = isDefault;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAddresses"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Add address to an account
    * @description: Use this API to add an address to an account.
    * @param {Object} arg - arg object.
    
    * @param {Address} arg.body
    * @return {Promise<SaveAddressResponse>} - success response
    **/
        addAddress({
            body
            
        } = {}) {
            const { error } = PosCartValidator.addAddress().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["addAddress"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Fetch a single address by its ID
    * @description: Use this API to get an addresses using its ID. If successful, returns a Address resource in the response body specified in `Address`. Attibutes listed below are optional <ul> <li> <font color="monochrome">mobile_no</font></li> <li> <font color="monochrome">checkout_mode</font></li> <li> <font color="monochrome">tags</font></li> <li> <font color="monochrome">default</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {string} arg.id - 
    * @param {string} [arg.cartId] - 
    * @param {string} [arg.mobileNo] - 
    * @param {string} [arg.checkoutMode] - 
    * @param {string} [arg.tags] - 
    * @param {boolean} [arg.isDefault] - 
    
    
    * @return {Promise<Address>} - success response
    **/
        getAddressById({
            id,
            cartId,
            mobileNo,
            checkoutMode,
            tags,
            isDefault
            
        } = {}) {
            const { error } = PosCartValidator.getAddressById().validate({ id,
            cartId,
            mobileNo,
            checkoutMode,
            tags,
            isDefault
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['cart_id'] = cartId;
            query_params['mobile_no'] = mobileNo;
            query_params['checkout_mode'] = checkoutMode;
            query_params['tags'] = tags;
            query_params['is_default'] = isDefault;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAddressById"],
                        params: { id }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Update address added to an account
    * @description: <p>Use this API to update an existing address in the account. Request object should contain attributes mentioned in  <font color="blue">Address </font> can be updated. These attributes are:</p> <ul> <li> <font color="monochrome">is_default_address</font></li> <li> <font color="monochrome">landmark</font></li> <li> <font color="monochrome">area</font></li> <li> <font color="monochrome">pincode</font></li> <li> <font color="monochrome">email</font></li> <li> <font color="monochrome">address_type</font></li> <li> <font color="monochrome">name</font></li> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">address</font></li> </ul>
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID allotted to the selected address
    
    * @param {Address} arg.body
    * @return {Promise<UpdateAddressResponse>} - success response
    **/
        updateAddress({
            id,
            body
            
        } = {}) {
            const { error } = PosCartValidator.updateAddress().validate({ id,
            body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["updateAddress"],
                        params: { id }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Remove address associated with an account
    * @description: Use this API to delete an address by its ID. This will returns an object that will indicate whether the address was deleted successfully or not.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - ID allotted to the selected address
    
    
    * @return {Promise<DeleteAddressResponse>} - success response
    **/
        removeAddress({
            id
            
        } = {}) {
            const { error } = PosCartValidator.removeAddress().validate({ id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "delete",
                    constructUrl({
                        url: this._urls["removeAddress"],
                        params: { id }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Select an address from available addresses
    * @description: <p>Select Address from all addresses associated with the account in order to ship the cart items to that address, otherwise default address will be selected implicitly. See `SelectCartAddressRequest` in schema of request body for the list of attributes needed to select Address from account. On successful request, this API returns a Cart object. Below address attributes are required. <ul> <li> <font color="monochrome">address_id</font></li> <li> <font color="monochrome">billing_address_id</font></li> <li> <font color="monochrome">uid</font></li> </ul></p>
    * @param {Object} arg - arg object.
    * @param {string} [arg.cartId] - 
    * @param {boolean} [arg.i] - 
    * @param {boolean} [arg.b] - 
    
    * @param {SelectCartAddressRequest} arg.body
    * @return {Promise<CartDetailResponse>} - success response
    **/
        selectAddress({
            body,
            cartId,
            i,
            b
            
        } = {}) {
            const { error } = PosCartValidator.selectAddress().validate({ body,
            cartId,
            i,
            b
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['cart_id'] = cartId;
            query_params['i'] = i;
            query_params['b'] = b;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["selectAddress"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Update cart payment
    * @description: Use this API to update cart payment.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    
    * @param {UpdateCartPaymentRequest} arg.body
    * @return {Promise<CartDetailResponse>} - success response
    **/
        selectPaymentMode({
            body,
            id
            
        } = {}) {
            const { error } = PosCartValidator.selectPaymentMode().validate({ body,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["selectPaymentMode"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Verify the coupon eligibility against the payment mode
    * @description: Use this API to validate a coupon against the payment mode such as NetBanking, Wallet, UPI etc.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    * @param {string} [arg.addressId] - 
    * @param {string} [arg.paymentMode] - 
    * @param {string} [arg.paymentIdentifier] - 
    * @param {string} [arg.aggregatorName] - 
    * @param {string} [arg.merchantCode] - 
    
    
    * @return {Promise<PaymentCouponValidate>} - success response
    **/
        validateCouponForPayment({
            id,
            addressId,
            paymentMode,
            paymentIdentifier,
            aggregatorName,
            merchantCode
            
        } = {}) {
            const { error } = PosCartValidator.validateCouponForPayment().validate({ id,
            addressId,
            paymentMode,
            paymentIdentifier,
            aggregatorName,
            merchantCode
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            query_params['address_id'] = addressId;
            query_params['payment_mode'] = paymentMode;
            query_params['payment_identifier'] = paymentIdentifier;
            query_params['aggregator_name'] = aggregatorName;
            query_params['merchant_code'] = merchantCode;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["validateCouponForPayment"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get delivery date and options before checkout
    * @description: Use this API to get shipment details, expected delivery date, items and price breakup of the shipment.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pickAtStoreUid] - 
    * @param {number} [arg.orderingStoreId] - 
    * @param {boolean} [arg.p] - This is a boolean value. Select `true` for getting a payment option in response.
    * @param {string} [arg.id] - The unique identifier of the cart
    * @param {string} [arg.addressId] - ID allotted to the selected address
    * @param {string} [arg.areaCode] - The PIN Code of the destination address, e.g. 400059
    * @param {string} [arg.orderType] - The order type of shipment HomeDelivery - If the customer wants the order home-delivered PickAtStore - If the customer wants the handover of an order at the store itself.
    
    
    * @return {Promise<CartShipmentsResponse>} - success response
    **/
        getShipments({
            pickAtStoreUid,
            orderingStoreId,
            p,
            id,
            addressId,
            areaCode,
            orderType
            
        } = {}) {
            const { error } = PosCartValidator.getShipments().validate({ pickAtStoreUid,
            orderingStoreId,
            p,
            id,
            addressId,
            areaCode,
            orderType
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['pick_at_store_uid'] = pickAtStoreUid;
            query_params['ordering_store_id'] = orderingStoreId;
            query_params['p'] = p;
            query_params['id'] = id;
            query_params['address_id'] = addressId;
            query_params['area_code'] = areaCode;
            query_params['order_type'] = orderType;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getShipments"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Update shipment delivery type and quantity before checkout
    * @description: Use this API to update the delivery type and quantity as per customer's preference for either store pick-up or home-delivery.
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.i] - This is a boolean value. Select `true` to retrieve all the items added in the cart.
    * @param {boolean} [arg.p] - This is a boolean value. Select `true` for getting a payment option in response.
    * @param {string} [arg.id] - The unique identifier of the cart
    * @param {string} [arg.addressId] - ID allotted to an address
    * @param {string} [arg.orderType] - The order type of shipment HomeDelivery - If the customer wants the order home-delivered PickAtStore - If the customer wants the handover of an order at the store itself.
    
    * @param {UpdateCartShipmentRequest} arg.body
    * @return {Promise<CartShipmentsResponse>} - success response
    **/
        updateShipments({
            body,
            i,
            p,
            id,
            addressId,
            orderType
            
        } = {}) {
            const { error } = PosCartValidator.updateShipments().validate({ body,
            i,
            p,
            id,
            addressId,
            orderType
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['i'] = i;
            query_params['p'] = p;
            query_params['id'] = id;
            query_params['address_id'] = addressId;
            query_params['order_type'] = orderType;
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["updateShipments"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Checkout all items in the cart
    * @description: Use this API to checkout all items in the cart for payment and order generation. For COD, order will be generated directly, whereas for other checkout modes, user will be redirected to a payment gateway.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - 
    
    * @param {CartPosCheckoutDetailRequest} arg.body
    * @return {Promise<CartCheckoutResponse>} - success response
    **/
        checkoutCart({
            body,
            id
            
        } = {}) {
            const { error } = PosCartValidator.checkoutCart().validate({ body,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["checkoutCart"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Update the cart meta
    * @description: Use this API to update cart meta like checkout_mode and gstin.
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - The unique identifier of the cart
    
    * @param {CartMetaRequest} arg.body
    * @return {Promise<CartMetaResponse>} - success response
    **/
        updateCartMeta({
            body,
            id
            
        } = {}) {
            const { error } = PosCartValidator.updateCartMeta().validate({ body,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "put",
                    constructUrl({
                        url: this._urls["updateCartMeta"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get available delivery modes for cart
    * @description: Use this API to get the delivery modes (home-delivery/store-pickup) along with a list of pickup stores available for a given cart at a given PIN Code. User can then view the address of a pickup store with the help of store-address API.
    * @param {Object} arg - arg object.
    * @param {string} arg.areaCode - 
    * @param {string} [arg.id] - 
    
    
    * @return {Promise<CartDeliveryModesResponse>} - success response
    **/
        getAvailableDeliveryModes({
            areaCode,
            id
            
        } = {}) {
            const { error } = PosCartValidator.getAvailableDeliveryModes().validate({ areaCode,
            id
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['area_code'] = areaCode;
            query_params['id'] = id;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getAvailableDeliveryModes"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Get list of stores for give uids
    * @description: Use this API to get the store details by entering the unique identifier of the pickup stores shown in the response of available-delivery-mode API.
    * @param {Object} arg - arg object.
    * @param {number} arg.storeUid - 
    
    
    * @return {Promise<StoreDetailsResponse>} - success response
    **/
        getStoreAddressByUid({
            storeUid
            
        } = {}) {
            const { error } = PosCartValidator.getStoreAddressByUid().validate({ storeUid
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            query_params['store_uid'] = storeUid;
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getStoreAddressByUid"],
                        params: {  }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Generate token for sharing the cart
    * @description: Use this API to generate a shared cart snapshot and return a shortlink token. The link can be shared with other users for getting the same items in their cart.
    * @param {Object} arg - arg object.
    
    * @param {GetShareCartLinkRequest} arg.body
    * @return {Promise<GetShareCartLinkResponse>} - success response
    **/
        getCartShareLink({
            body
            
        } = {}) {
            const { error } = PosCartValidator.getCartShareLink().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getCartShareLink"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get details of a shared cart
    * @description: Use this API to get the shared cart details as per the token generated using the share-cart API.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Token of the shared short link
    
    
    * @return {Promise<SharedCartResponse>} - success response
    **/
        getCartSharedItems({
            token
            
        } = {}) {
            const { error } = PosCartValidator.getCartSharedItems().validate({ token
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getCartSharedItems"],
                        params: { token }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
    /**
    *
    * @summary: Merge or replace existing cart
    * @description: Use this API to merge the shared cart with existing cart, or replace the existing cart with the shared cart. The `action` parameter is used to indicate the operation Merge or Replace.
    * @param {Object} arg - arg object.
    * @param {string} arg.token - Token of the shared short link
    * @param {string} arg.action - Operation to perform on the existing cart merge or replace.
    
    
    * @return {Promise<SharedCartResponse>} - success response
    **/
        updateCartWithSharedItems({
            token,
            action
            
        } = {}) {
            const { error } = PosCartValidator.updateCartWithSharedItems().validate({ token,
            action
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["updateCartWithSharedItems"],
                        params: { token, action }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
}

class Logistic {
    constructor(_conf) {
        this._conf = _conf;
        this._relativeUrls = {
            getTatProduct: "/service/application/logistics/v1.0",
            getPincodeCity: "/service/application/logistics/v1.0/pincode/{pincode}"
            
        }
        this._urls = Object.entries(this._relativeUrls).reduce((urls, [method, relativeUrl]) => {
            urls[method] = `${_conf.domain}${relativeUrl}`;
            return urls;
        }, {})
    }

    updateUrls(urls) {
        this._urls = {
            ...this._urls,
            ...urls
        }
    }

    
    /**
    *
    * @summary: Get TAT of a product
    * @description: Use this API to know the delivery turnaround time (TAT) by entering the product details along with the PIN Code of the location.
    * @param {Object} arg - arg object.
    
    * @param {GetTatProductReqBody} arg.body
    * @return {Promise<GetTatProductResponse>} - success response
    **/
        getTatProduct({
            body
            
        } = {}) {
            const { error } = LogisticValidator.getTatProduct().validate({ body
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "post",
                    constructUrl({
                        url: this._urls["getTatProduct"],
                        params: {  }
                    }),
                    query_params,
                    body,
            );
        }
        
    
    /**
    *
    * @summary: Get city from PIN Code
    * @description: Use this API to retrieve a city by its PIN Code.
    * @param {Object} arg - arg object.
    * @param {string} arg.pincode - The PIN Code of the area, e.g. 400059
    
    
    * @return {Promise<GetPincodeCityResponse>} - success response
    **/
        getPincodeCity({
            pincode
            
        } = {}) {
            const { error } = LogisticValidator.getPincodeCity().validate({ pincode
             },{ abortEarly: false });
            if (error) {
                return Promise.reject(new FDKClientValidationError(error));
            }
            const query_params = {};
            

            return APIClient.execute(
                    this._conf,
                    "get",
                    constructUrl({
                        url: this._urls["getPincodeCity"],
                        params: { pincode }
                    }),
                    query_params,
                     undefined ,
            );
        }
        
    
}


module.exports = ApplicationClient;