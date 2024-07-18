"use server";

import Axios from "axios";
import { GetBaseURL } from "@/networking/urls";
import { getUserAuth } from "@/lib/auth/auth";

export const apiCall = async (
  request: any,
  payload?: any,
  region?: boolean
) => {
  try {
    const { session } = await getUserAuth();
    if (!session) return { apiSuccess: false, data: null, logout: true };
    let { URL, METHOD } = request;
    let baseUrl = GetBaseURL();

    // Create a configuration object
    const axiosConfig: any = {
      method: METHOD, // HTTP request method (get, post, put, delete, etc.)
      url: `${baseUrl}/${URL}`, // The URL for the request
      headers: {
        Authorization: "Bearer " + session.accessToken,
      },
    };

    if (METHOD == "GET") axiosConfig.params = payload || {};
    else axiosConfig.data = payload || {};

    console.log("axiosConfig", JSON.stringify(axiosConfig, null, 2));

    let response = await Axios(axiosConfig);
    if (response?.status === 200)
      return { apiSuccess: true, data: response?.data };
    else return { apiSuccess: false, data: response };
  } catch (error: any) {
    // Handle errors
    if (error.code == "ECONNABORTED") {
      return {
        data: { message: "Network Error" },
        apiSuccess: false,
      };
    }
    if (error?.response) {
      return {
        data: {
          message: error?.response?.data?.message,
        },
        apiSuccess: false,
      };
    }
    return {
      data: {
        message: error?.message,
      },
      apiSuccess: false,
    };
  }
};
