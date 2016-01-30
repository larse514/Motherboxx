/**
 * Created by Andrew on 1/24/2016.
 */
//OPENSHIFT URLS
(function() {
    localStorage.OPENSHIFT = JSON.stringify({
        URLS: {
            LOGIN: "http://mbloginservice-larslarslars.rhcloud.com/login",
            HELLO_WORLD: 'http://mbloginservice-larslarslars.rhcloud.com/api/v1/helloworld'
        }
    });
}());