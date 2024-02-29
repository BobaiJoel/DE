const { getStorage } = require("firebase-admin/storage");
const { initializeApp, cert } = require("firebase-admin/app");
require("dotenv").config();

initializeApp({
  credential: cert({
    // type: process.env.FIREBASE_TYPE,
    // project_id: process.env.PROJECT_ID,
    // private_key_id: process.env.PRIVATE_KEY_ID,
    // private_key: process.env.PRIVATE_KEY,
    // client_email: process.env.CLIENT_EMAIL,
    // client_id: process.env.CLIENT_ID,
    // auth_uri: "https://accounts.google.com/o/oauth2/auth",
    // token_uri: "https://oauth2.googleapis.com/token",
    // auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    // client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,

    type: "service_account",
    project_id: "sendfile-98939",
    private_key_id: "4fe6a278e9c6fd8379fdb13bce95f7b4431b2e8e",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDXoiE+Yijw6BCk\nuwmnAj0i8V5TmPXe8zz9CWVZEnPJdqQMhLBFToJrbzGOzYVo4hqoVKVEukswxqFE\ns5tSAMAWPqUFiCYKsT1xXreVWPpEKHH46ZHekwONCCUOek6GPvwUrJVc3G+9qOHd\nymbLPv6vY7A4pYCtIYEx1UeXSelodVDvcDpX4WENe3hwb5U0Y9t+bYLw4g2LSwc7\nPEP0B22vPk3VIhvIAPw7AEy6j4324KC06TeyCNMaXcxTHLGV65Z+GtrMgr50QbC9\nhlylkPzdY10BqEjAdHaS+5msh9oK6khCBr+g9heLjBtzO4p2KRezGS0uNqwQEovC\nnDvi9ePrAgMBAAECggEAEKECK0tqmNlsnyeFYQm9KTqv6YZ8P4tGgsT8udfAciLi\nF80LwuyBBkP28GpNBX+aSqzsadZsAgDvYtru+W3xYkXGeBy9wklU0a9aPPw1oJf1\n4hoxE5cGyRN9uBYahCPLUNTWV+jv/RJPCMmZD8d14JSxfEzXFYLl8a/e633ZsCJn\nmBSlAZLPuruBBNzGIEUCJ6tdB2ZjGvPifMwZXbiIjIiZRLmkwiQDrCPsyyCeG/Me\ny4pXZ0nTrv+5Y56oblYccTHIgKlQIBBtL07DV2nw7QzgXObvSC7gE7T+fSQ17729\nGkEgDD5VWuxGGeFdeuBQFO+mTkXL2jrLpxdwAhGJwQKBgQD+Ff6979826oY9uscP\nj1bROyEP5XfaxeX1btiw2kTHPSal2iUeATm3i27PGkh/3Ccu9AGyI1Et7m0ydenA\nn4Bgp/DlIOJ0aEqHyPLS+EunAlQxzoV/yRTGoE4WCkMBNXNj+lMzYjPZ8mJzEdGm\nVXKDJYpKtu6NSYoJ7vMHsKJ20QKBgQDZQfqZXmTFQkzfHEqpqCJK9oh9CQNY5UGK\nHYFZq1eOYdNI43Bnpu3gFMsWI7N9tvokHqf0gZYqPun/GhTZ0IC/v8OOAw/9Y8UN\nNgXHKRpdTVeh1xWbHpI5y7jZvKyhhfSrwHJKoYM/qX3kcnXGvKIrVYyxveMCtmSM\nrBivnLhV+wKBgAHSeo82Jy2npOrQahkMeBzsBaKtjJx/CtUlxFwQVKnxIFPUKqv6\nakWMtHC7yYVRON63VUPHyQ9BRHs2KUT+X9dRnQKnp7gZ/17V7BfjO/eopp3s0zxF\nXubFw4mY7T4W+grfgrU9oQ2RFW+p0w0UU8vo+wLqKO/OdTT5B7koZSHhAoGAT3iw\nF4wM5o9TGUX7FcZYDP3TfZFfdRQffks+trNTitTD+eSgiHnqh85zX3zdun3FUJMa\nMvl4Gan75IIA4JBBmGKoQPljzvfA7A033dtuNnUFOkE4OQ7cxGF+E7/NkiQzFOSH\nqj8ciJwSXg90f6ce1yUrGxVvxd08OKz3Nr3oPCMCgYAmwV3pBmprnPEiMvOPESqq\na0sKvQU0bVQU1r2QdicL2iq9nHqfpXbwpc51yN8V9k0V2GZNfcNWADu4c+mJ1dXC\nWP5hDRm1uw6OkXMTKP0d5S8smnCvkGl8rNWrfu6KEq2Ixuqo/i2Rb/ybbirSgtYg\nVaIwRlHHF7jZ7Tj+uHOkFg==\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-vsyv2@sendfile-98939.iam.gserviceaccount.com",
    client_id: "116936214671073931305",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vsyv2%40sendfile-98939.iam.gserviceaccount.com",
  }),
  storageBucket: "sendfile-98939.appspot.com",
});

const storage = getStorage().bucket();

module.exports = storage;
