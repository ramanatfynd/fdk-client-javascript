export = PartnerClient;
/**
 * Represents the client for the partner APIs.
 *
 * @class
 */
declare class PartnerClient {
    /**
     * Creates an instance of PartnerClient.
     *
     * @param {import("./PartnerConfig")} config - The configuration for the
     *   partner client.
     */
    constructor(config: import("./PartnerConfig"));
    config: import("./PartnerConfig");
    fileStorage: FileStorage;
    theme: Theme;
    /**
     * Sets the extra headers for the partner client.
     *
     * @param {object} header - The header object to set.
     * @throws {FDKClientValidationError} When the provided header is not an object.
     */
    setExtraHeaders(header: object): void;
}
import FileStorage = require("./FileStorage/FileStoragePartnerClient");
import Theme = require("./Theme/ThemePartnerClient");
