import requests
import json

# import checksum generation utility
# You can get this utility from https://developer.paytm.com/docs/checksum/
import PaytmChecksum

paytmParams = dict()

{
    "success": true,
    "status": 200,
    "msg": "OK",
    "data": {
        "type": "submit_form",
        "URL": "https://secure.paytm.in/order/process",
        "post_data": {
            "REQUEST_TYPE": "DEFAULT",
            "MID": "ANVIDH01061461662396",
            "ORDER_ID": "EY300821169162",
            "CUST_ID": 613323,
            "EMAIL": "garg10may@gmail.com",
            "MOBILE_NO": 9711452345,
            "TXN_AMOUNT": 885,
            "CHANNEL_ID": "WEB",
            "INDUSTRY_TYPE_ID": "ECommerce",
            "WEBSITE": "DEFAULT",
            "CALLBACK_URL": "https://www.eyemyeye.com/payTmRecv/",
            "CHECKSUMHASH": "E+kBwhrBHyV293ZkOspVIxN0NIR5PC6quLiUHcBcVQaEUPQkvCcSWl4T3st7EK+NcWX+YBL0oT3A1voT9K6tSU4t1iafInpUHbST53Vbam0="
        }
    }
}




paytmParams["body"] = {
    "requestType"   : "Payment",
    "mid"           : "ANVID",
    "websiteName"   : "WEBSTAGING",
    "orderId"       : "ORDERID_98765",
    "callbackUrl"   : "https://merchant.com/callback",
    "txnAmount"     : {
        "value"     : "1.00",
        "currency"  : "INR",
    },
    "userInfo"      : {
        "custId"    : "CUST_001",
    },
}

# Generate checksum by parameters we have in body
# Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
checksum = PaytmChecksum.generateSignature(json.dumps(paytmParams["body"]), "YOUR_MERCHANT_KEY")

paytmParams["head"] = {
    "signature"    : checksum
}

post_data = json.dumps(paytmParams)

# for Staging
url = "https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=YOUR_MID_HERE&orderId=ORDERID_98765"

# for Production
# url = "https://securegw.paytm.in/theia/api/v1/initiateTransaction?mid=YOUR_MID_HERE&orderId=ORDERID_98765"
response = requests.post(url, data = post_data, headers = {"Content-type": "application/json"}).json()
print(response)