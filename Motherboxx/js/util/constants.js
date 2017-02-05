/**
 * Created by Andrew on 1/24/2016.
 */
//OPENSHIFT URLS
(function() {
    localStorage.OPENSHIFT = JSON.stringify({
        URLS: {
            LOGIN: "http://localhost:8080/login",
            HELLO_WORLD: 'http://localhost:8080/api/v1/helloworld',
            SIGN_UP: 'http://localhost:8080/signUp'

        }
    });
}());