import {GoogleDriveAPI} from "../files.js";


let data = {
    "client_id": "626157511978-77etuu4h21krl1s267v51180cg45ot74.apps.googleusercontent.com",
    "project_id": "heroes-of-the-strife",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "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",
    "redirect_uris": [
      "http://localhost"
    ]
}



let client = new GoogleDriveAPI()
let url = client.getAuthorizeUrl()
console.log(url)


let codeUrl = `http://localhost:3131/?code=4/0ARtbsJpaJM96iPCm9AnOXypMjyGTZPtY3MLnUW_-UWRHkychUVdAsUlKjhM9cGwjPEnS4A&scope=https://www.googleapis.com/auth/drive.file`

let r = await client.getCredetialsFromAuthCallbackURL(codeUrl)
console.log(r)
