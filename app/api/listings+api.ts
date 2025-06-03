
const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {

    // const url = new URL(request.url);
    // const limit = url.searchParams.get('limit') || 5;

    // const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=EUR`,
    //     {
    //         headers: {
    //             'X-CMC_PRO_API_KEY': API_KEY!,
    //         }
    //     }
    // )
    
    // const res = await response.json();
    // return Response.json(res.data);
    
    return Response.json(data);
}

const data = [
    {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "num_market_pairs": 12204,
        "date_added": "2010-07-13T00:00:00.000Z",
        "tags": [
            "mineable",
            "pow",
            "sha-256",
            "store-of-value",
            "state-channel",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "galaxy-digital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "bitcoin-ecosystem",
            "layer-1",
            "ftx-bankruptcy-estate",
            "2017-2018-alt-season",
            "us-strategic-crypto-reserve",
            "binance-ecosystem"
        ],
        "max_supply": 21000000,
        "circulating_supply": 19872937,
        "total_supply": 19872937,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 1,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2025-06-01T11:38:00.000Z",
        "quote": {
            "EUR": {
                "price": 91717.34530021828,
                "volume_24h": 31499919798.60657,
                "volume_change_24h": -28.4197,
                "percent_change_1h": 0.18725031,
                "percent_change_24h": 0.57462284,
                "percent_change_7d": -2.85764214,
                "percent_change_30d": 7.31987999,
                "percent_change_60d": 22.81319537,
                "percent_change_90d": 12.52589179,
                "market_cap": 1822693024958.4841,
                "market_cap_dominance": 63.616,
                "fully_diluted_market_cap": 1926064251304.5881,
                "tvl": null,
                "last_updated": "2025-06-01T11:38:03.000Z"
            }
        }
    },
    {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "num_market_pairs": 10322,
        "date_added": "2015-08-07T00:00:00.000Z",
        "tags": [
            "pos",
            "smart-contracts",
            "ethereum-ecosystem",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "hashkey-capital-portfolio",
            "kenetic-capital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio",
            "ethereum-pow-ecosystem",
            "layer-1",
            "ftx-bankruptcy-estate",
            "sora-ecosystem",
            "rsk-rbtc-ecosystem",
            "world-liberty-financial-portfolio",
            "us-strategic-crypto-reserve",
            "binance-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 120723843.90111603,
        "total_supply": 120723843.90111603,
        "infinite_supply": true,
        "platform": null,
        "cmc_rank": 2,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2025-06-01T11:38:00.000Z",
        "quote": {
            "EUR": {
                "price": 2203.979726503979,
                "volume_24h": 10569125825.6493,
                "volume_change_24h": -45.3135,
                "percent_change_1h": 0.44101801,
                "percent_change_24h": -0.5460461,
                "percent_change_7d": 0.29442717,
                "percent_change_30d": 36.4706922,
                "percent_change_60d": 33.58792899,
                "percent_change_90d": 6.18649257,
                "market_cap": 266072904463.69073,
                "market_cap_dominance": 9.2865,
                "fully_diluted_market_cap": 266072904463.6878,
                "tvl": null,
                "last_updated": "2025-06-01T11:38:03.000Z"
            }
        }
    },
    {
        "id": 825,
        "name": "Tether USDt",
        "symbol": "USDT",
        "slug": "tether",
        "num_market_pairs": 131249,
        "date_added": "2015-02-25T00:00:00.000Z",
        "tags": [
            "stablecoin",
            "asset-backed-stablecoin",
            "usd-stablecoin",
            "ethereum-pow-ecosystem",
            "fiat-stablecoin",
            "tron20-ecosystem",
            "rsk-rbtc-ecosystem",
            "world-liberty-financial-portfolio"
        ],
        "max_supply": null,
        "circulating_supply": 153097093881.30783,
        "total_supply": 156004090105.64725,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
        },
        "infinite_supply": true,
        "cmc_rank": 3,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2025-06-01T11:38:00.000Z",
        "quote": {
            "EUR": {
                "price": 0.8815500023532089,
                "volume_24h": 47146165617.170975,
                "volume_change_24h": -40.3122,
                "percent_change_1h": -0.00687989,
                "percent_change_24h": -0.00046439,
                "percent_change_7d": 0.01440597,
                "percent_change_30d": 0.0120938,
                "percent_change_60d": 0.04619011,
                "percent_change_90d": 0.06592746,
                "market_cap": 134962743471.33636,
                "market_cap_dominance": 4.7105,
                "fully_diluted_market_cap": 137525405999.74246,
                "tvl": null,
                "last_updated": "2025-06-01T11:38:03.000Z"
            }
        }
    },
    {
        "id": 52,
        "name": "XRP",
        "symbol": "XRP",
        "slug": "xrp",
        "num_market_pairs": 1621,
        "date_added": "2013-08-04T00:00:00.000Z",
        "tags": [
            "medium-of-exchange",
            "enterprise-solutions",
            "xrp-ecosystem",
            "arrington-xrp-capital-portfolio",
            "galaxy-digital-portfolio",
            "a16z-portfolio",
            "pantera-capital-portfolio",
            "ftx-bankruptcy-estate",
            "2017-2018-alt-season",
            "klaytn-ecosystem",
            "made-in-america",
            "us-strategic-crypto-reserve"
        ],
        "max_supply": 100000000000,
        "circulating_supply": 58759724027,
        "total_supply": 99986084900,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 4,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2025-06-01T11:39:00.000Z",
        "quote": {
            "EUR": {
                "price": 1.890828355072655,
                "volume_24h": 1619815343.787245,
                "volume_change_24h": -45.0904,
                "percent_change_1h": 0.51640836,
                "percent_change_24h": 0.61448057,
                "percent_change_7d": -6.3140573,
                "percent_change_30d": -3.2732509,
                "percent_change_60d": 1.13960091,
                "percent_change_90d": -18.81780643,
                "market_cap": 111104552326.49557,
                "market_cap_dominance": 3.8778,
                "fully_diluted_market_cap": 189082835507.2636,
                "tvl": null,
                "last_updated": "2025-06-01T11:38:03.000Z"
            }
        }
    },
    {
        "id": 1839,
        "name": "BNB",
        "symbol": "BNB",
        "slug": "bnb",
        "num_market_pairs": 2559,
        "date_added": "2017-07-25T00:00:00.000Z",
        "tags": [
            "marketplace",
            "centralized-exchange",
            "payments",
            "smart-contracts",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "bnb-chain-ecosystem",
            "layer-1",
            "alleged-sec-securities",
            "celsius-bankruptcy-estate"
        ],
        "max_supply": null,
        "circulating_supply": 140887610.03,
        "total_supply": 140887610.03,
        "infinite_supply": false,
        "platform": null,
        "cmc_rank": 5,
        "self_reported_circulating_supply": null,
        "self_reported_market_cap": null,
        "tvl_ratio": null,
        "last_updated": "2025-06-01T11:38:00.000Z",
        "quote": {
            "EUR": {
                "price": 573.110883001666,
                "volume_24h": 1223043290.0746882,
                "volume_change_24h": -22.5151,
                "percent_change_1h": 0.06121165,
                "percent_change_24h": -0.46316957,
                "percent_change_7d": -1.76239188,
                "percent_change_30d": 8.42417635,
                "percent_change_60d": 8.21828163,
                "percent_change_90d": 7.66926979,
                "market_cap": 80744222588.28767,
                "market_cap_dominance": 2.8181,
                "fully_diluted_market_cap": 80744222588.28719,
                "tvl": null,
                "last_updated": "2025-06-01T11:38:03.000Z"
            }
        }
    }
]