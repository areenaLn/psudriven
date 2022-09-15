import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
export interface UserAuth {
    email: string;
    password: string;
}
export interface UserSigup {
    email: string;
    name: string;
    password: string;
}
@Injectable({
    providedIn: "root",
})
export class AuthService {
    url: string;
    constructor(private httpClient: HttpClient) {
        this.url = environment.URL_API;
    }

    auth(userAuth: UserAuth) {
        return this.httpClient.post(
            `${this.url}/momentum-trading-ai/auth/login`,
            userAuth
        );
    }
    sigup(UserSigup: UserSigup) {
        return this.httpClient.post(
            `${this.url}/momentum-trading-ai/auth/signup`,
            UserSigup
        );
    }

    // paymentChillpay(PriceId: string, customerId: string) {
    //     let urlPayment = `${this.url}` + "/momentum-trading-ai/chillpay";
    //     if (PriceId && customerId) {
    //         this.setCookie(environment.COOKIE_PAMENT, "0", 1);
    //         let textEncode = PriceId + "," + customerId + ",764";
    //         let encoded = window.btoa(textEncode);
    //         //window.location.href = `${urlPayment}?priceId=${PriceId}&customerId=${customerId}&currency=764`;
    //         window.location.href = `${urlPayment}?confirm=${encoded}`;
    //     }
    // }

    getCookie(cname: string) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    setCookie(cname: string, cvalue: string, exdays: any) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}
