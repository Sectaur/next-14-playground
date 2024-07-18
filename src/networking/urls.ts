export function GetBaseURL() {
  return `${process.env.BASE_URL}`;
}
//
export const URLs = {
  TIRADS_AGGREGATED_DATA: () => {
    return {
      URL: "UploadFile",
      METHOD: "POST",
    };
  },
  TIRADS_SESSION_DATA: () => {
    return {
      URL: "UploadFile",
      METHOD: "POST",
    };
  },
};
