// @flow
import {apiEndpoints} from './config';
import type {APIDataType} from './config';
import axios from 'axios';

export const apiManager = async ({
  params,
  method = 'get',
  endPoint = 'noodelesList',
}: APIDataType): Promise<any> => {
  const apiURL = apiEndpoints[endPoint];

  const header = {};
  let fetchParams: any;
  if (method === 'get') {
    fetchParams = {
      method: method,
      headers: header,
      params: params,
    };
  } else {
    fetchParams = {
      method: method,
      headers: header,
      body: params,
    };
  }

  return new Promise((resolve, reject) => {
    axios(apiURL, fetchParams)
      .then(responseData => {
        resolve(responseData.data);
      })
      .catch(function (error) {
        console.log('APIManager error', apiURL, error);
        reject(error);
      });
  });
};
