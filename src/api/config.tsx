// @flow
const domains = {
  testUrl: 'https://s3-ap-southeast-1.amazonaws.com/',
};

export const baseURL = domains.testUrl;

const routes = {
  publichData: 'he-public-data/',
};
export const apiEndpoints = {
  noodlesList: baseURL + routes.publichData + 'TopRamen8d30951.json',
  imagesList: baseURL + routes.publichData + 'noodlesec253ad.json',
};

export type EndPointType = 'noodlesList';

export type APIDataType = {
  params: any;
  method?: string;
  endPoint: EndPointType;
};
