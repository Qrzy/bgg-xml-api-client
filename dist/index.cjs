'use strict';

require('setimmediate');
const axios = require('axios');
const fastXmlParser = require('fast-xml-parser');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const axios__default = /*#__PURE__*/_interopDefaultCompat(axios);

function createResourceUrl(resource, queryParams) {
  if (!resource)
    throw new Error("You have to provide valid resource name!");
  const isV1Api = /geeklist/i.test(resource);
  if (isV1Api) {
    const query = queryParams.comments ? `?comments=${queryParams.comments}` : "";
    return `${resource}/${queryParams.id}${query}`;
  }
  return `${resource}${queryParams && Object.keys(queryParams).length ? `?${new URLSearchParams(queryParams)}` : ""}`;
}

const BGG_API_V1_BASE_URL = "https://boardgamegeek.com/xmlapi/";
const BGG_API_V2_BASE_URL = "https://boardgamegeek.com/xmlapi2/";
function getBaseUrlForResource(resource) {
  if (!resource)
    throw new Error("You have to provide valid resource name!");
  return resource === "geeklist" ? BGG_API_V1_BASE_URL : BGG_API_V2_BASE_URL;
}

const options = {
  attributeNamePrefix: "",
  textNodeName: "text",
  ignoreAttributes: false,
  ignoreNameSpace: true,
  allowBooleanAttributes: true
  // ignoreRootElement: true, // TODO: awaiting https://github.com/NaturalIntelligence/fast-xml-parser/issues/282
};
const xmlParser = {
  parse: (xmlString) => fastXmlParser.parse(xmlString, options)
};

function getBggApiClient(resource) {
  const client = axios__default.create({
    baseURL: getBaseUrlForResource(resource),
    headers: {
      "Accept": "text/xml",
      "Content-Type": "text/xml"
    },
    timeout: 1e4
  });
  client.interceptors.response.use(async (response) => {
    response.data = await xmlParser.parse(response.data);
    return response;
  });
  return client;
}

const DEFAULT_MAX_RETRIES = 10;
const DEFAULT_INTERVAL = 5e3;
const bggXmlApiClient = {
  get: async (resource, queryParams, maxRetries = DEFAULT_MAX_RETRIES, retryInterval = DEFAULT_INTERVAL) => {
    const client = getBggApiClient(resource);
    for (let i = 0; i < maxRetries; i++) {
      try {
        const resourceUrl = createResourceUrl(resource, queryParams);
        const response = await client.get(resourceUrl);
        if (response.data.message && response.data.message.includes("processed"))
          throw new Error("processing...");
        response.data = response.data[Object.keys(response.data)[0]];
        return response;
      } catch (err) {
        await new Promise((resolve) => setTimeout(() => resolve(), retryInterval));
      }
    }
    throw new Error(`Max retries reached! Resource: ${resource}, Params: ${JSON.stringify(queryParams)}`);
  }
};
const bggXmlApiClient$1 = bggXmlApiClient;

function getBggCollection(params) {
  const newParams = {
    ...params,
    ...params.id && { id: Array.isArray(params.id) ? params.id.join(",") : params.id }
  };
  return bggXmlApiClient.get("collection", newParams);
}

function getBggFamily(params) {
  const newParams = {
    ...params,
    ...params.id && { id: Array.isArray(params.id) ? params.id.join(",") : params.id }
  };
  return bggXmlApiClient.get("family", newParams);
}

function getBggForum(params) {
  return bggXmlApiClient.get("forum", params);
}

function getBggForumlist(params) {
  return bggXmlApiClient.get("forumlist", params);
}

function getBggGeeklist(params) {
  return bggXmlApiClient$1.get("geeklist", params);
}

function getBggGuild(params) {
  return bggXmlApiClient.get("guild", params);
}

function getBggHot(params) {
  return bggXmlApiClient.get("hot", params);
}

function getBggPlays(params) {
  if (!params.username && !(params.id && params.type))
    throw new Error("You must specify either username or id and type");
  return bggXmlApiClient.get("plays", params);
}

function getBggSearch(params) {
  const newParams = {
    ...params,
    ...params.type && { type: Array.isArray(params.type) ? params.type.join(",") : params.type }
  };
  return bggXmlApiClient.get("search", newParams);
}

function getBggThing(params) {
  const newParams = {
    ...params,
    ...params.id && { id: Array.isArray(params.id) ? params.id.join(",") : params.id },
    ...params.type && { type: Array.isArray(params.type) ? params.type.join(",") : params.type }
  };
  return bggXmlApiClient.get("thing", newParams);
}

function getBggThread(params) {
  return bggXmlApiClient.get("thread", params);
}

function getBggUser(params) {
  return bggXmlApiClient$1.get("user", params);
}

exports.bggXmlApiClient = bggXmlApiClient;
exports.getBggCollection = getBggCollection;
exports.getBggFamily = getBggFamily;
exports.getBggForum = getBggForum;
exports.getBggForumlist = getBggForumlist;
exports.getBggGeeklist = getBggGeeklist;
exports.getBggGuild = getBggGuild;
exports.getBggHot = getBggHot;
exports.getBggPlays = getBggPlays;
exports.getBggSearch = getBggSearch;
exports.getBggThing = getBggThing;
exports.getBggThread = getBggThread;
exports.getBggUser = getBggUser;
