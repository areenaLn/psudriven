export class AppConstants {
    private static API_BASE_URL =
        "https://www.tothemoonscreener.com/momentum-trading-ai/";
    private static OAUTH2_URL = AppConstants.API_BASE_URL + "oauth2/authorize/";
    // private static REDIRECT_URL =
    //     "?redirect_uri=https://www.tothemoonscreener.com/";

    private static REDIRECT_URL =
        "?redirect_uri=https://www.tothemoonscreener.com/";

    private static REDIRECT_URL2 =
        "?redirect_uri=https://www.tothemoonscreener.com/";

    public static API_URL = AppConstants.API_BASE_URL;
    public static GOOGLE_AUTH_URL =
        AppConstants.OAUTH2_URL + "google" + AppConstants.REDIRECT_URL;
    public static FACEBOOK_AUTH_URL =
        AppConstants.OAUTH2_URL + "facebook" + AppConstants.REDIRECT_URL2;
    // https://www.tothemoonscreener.com/
    // http://localhost:4200/
}
