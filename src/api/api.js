const baseURL = "https://batman-assessment.fusebox-prod.co.za/api/v1/";

const access_token = JSON.parse(localStorage.getItem("access_token"))

export const config = {
    headers: {
        Authorization: access_token,
        "Content-type": "appliction/json",
        Accept: "application/json",
    },
};

export const loginURL =
    "https://batman-assessment.fusebox-prod.co.za/api/v1/login";
export const panicURL =
    "https://batman-assessment.fusebox-prod.co.za/api/v1/panic/send";
export const cancelURL =
    "https://batman-assessment.fusebox-prod.co.za/api/v1/panic/cancel";
export const historyURL =
    "https://batman-assessment.fusebox-prod.co.za/api/v1/panic/history/";
