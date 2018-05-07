const mws = require('..');
const keys = require('../test/keys.json');

mws.init(keys);

async function main() {
    try {
        // const results = await mws.getMatchingProductForId({
        //     MarketplaceId: 'ATVPDKIKX0DER',
        //     IdType: 'ASIN',
        //     IdList: ['B005NK7VTU', 'B01FZRFN2C'],
        // });

        const results = await mws.getMatchingProductForId({
            MarketplaceId: 'ATVPDKIKX0DER',
            IdType: 'UPC',
            IdList: ['746775298494'],
        });

        console.warn(JSON.stringify(results, null, 4));
    } catch (err) {
        console.warn('* error', err);
    }
}

main();

/*
[
    {
        "Identifiers": {
            "MarketplaceASIN": {
                "MarketplaceId": "ATVPDKIKX0DER",
                "ASIN": "B005NK7VTU"
            }
        },
        "AttributeSets": {
            "ns2:ItemAttributes": {
                "$": {
                    "xml:lang": "en-US"
                },
                "ns2:Binding": "Apparel",
                "ns2:Brand": "2XU",
                "ns2:Color": "Black/Grey",
                "ns2:Department": "womens",
                "ns2:ItemDimensions": {
                    "ns2:Weight": {
                        "_": "0.24",
                        "$": {
                            "Units": "pounds"
                        }
                    }
                },
                "ns2:IsAutographed": "false",
                "ns2:IsMemorabilia": "false",
                "ns2:Label": "2XU Pty Ltd",
                "ns2:ListPrice": {
                    "ns2:Amount": "59.95",
                    "ns2:CurrencyCode": "USD"
                },
                "ns2:Manufacturer": "2XU Pty Ltd",
                "ns2:MaterialType": "nylon",
                "ns2:Model": "WA1994e",
                "ns2:NumberOfItems": "1",
                "ns2:PackageDimensions": {
                    "ns2:Height": {
                        "_": "1.20",
                        "$": {
                            "Units": "inches"
                        }
                    },
                    "ns2:Length": {
                        "_": "10.80",
                        "$": {
                            "Units": "inches"
                        }
                    },
                    "ns2:Width": {
                        "_": "5.40",
                        "$": {
                            "Units": "inches"
                        }
                    },
                    "ns2:Weight": {
                        "_": "0.25",
                        "$": {
                            "Units": "pounds"
                        }
                    }
                },
                "ns2:PackageQuantity": "1",
                "ns2:PartNumber": "WA1994e",
                "ns2:ProductGroup": "Sports",
                "ns2:ProductTypeName": "SPORTING_GOODS",
                "ns2:Publisher": "2XU Pty Ltd",
                "ns2:Size": "Small",
                "ns2:SmallImage": {
                    "ns2:URL": "http://ecx.images-amazon.com/images/I/31e33B0JjNL._SL75_.jpg",
                    "ns2:Height": {
                        "_": "75",
                        "$": {
                            "Units": "pixels"
                        }
                    },
                    "ns2:Width": {
                        "_": "75",
                        "$": {
                            "Units": "pixels"
                        }
                    }
                },
                "ns2:Studio": "2XU Pty Ltd",
                "ns2:Title": "2XU Women's Elite Compression Socks, Black/Grey, Small"
            }
        },
        "Relationships": {
            "VariationParent": {
                "Identifiers": {
                    "MarketplaceASIN": {
                        "MarketplaceId": "ATVPDKIKX0DER",
                        "ASIN": "B00591XGAG"
                    }
                }
            }
        },
        "SalesRankings": "",
        "asin": "B005NK7VTU",
        "idType": "asin",
        "id": "B005NK7VTU"
    },
    {
        "Error": {
            "Type": "Sender",
            "Code": "InvalidParameterValue",
            "Message": "Invalid ASIN identifier B01FZRFN2C for marketplace ATVPDKIKX0DER"
        },
        "asin": "B01FZRFN2C"
    }
]
*/
