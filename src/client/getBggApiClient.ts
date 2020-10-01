import 'setimmediate';
import axios, { AxiosInstance } from 'axios';
import { getBaseUrlForResource } from '../helpers/getBaseUrlForResource';
import { xmlParser } from '../helpers/xmlParser';
import { ResourceName } from '../types';

export const getBggApiClient = (resource: ResourceName): AxiosInstance => {
  const client = axios.create({
    baseURL: getBaseUrlForResource(resource),
    headers: {
      Accept: 'text/xml',
      'Content-Type': 'text/xml',
    },
    timeout: 10000,
  });
  client.interceptors.response.use(async (response) => {
    response.data = await xmlParser.parse(response.data);
    return response;
  });
  return client;
};
