
export async function GET(request: Request) {

  /* 
    Make sure to update the start date param
    ideal start date would be at least 3 months from the current date 
  */  

    // const response = await fetch(
    //     `https://api.coinpaprika.com/v1/tickers/btc-bitcoin/historical?start=2025-01-01&interval=1d`,
    //    )
    
    // const res = await response.json();
    // return Response.json(res.data);
    
    return Response.json(data);
}

const data = [
  {
    "timestamp": "2025-03-01T00:00:00Z",
    "price": 85149.83,
    "volume_24h": 51904636154,
    "market_cap": 1688587249218
  },
  {
    "timestamp": "2025-03-02T00:00:00Z",
    "price": 88408.49,
    "volume_24h": 33736219581,
    "market_cap": 1753250168848
  },
  {
    "timestamp": "2025-03-03T00:00:00Z",
    "price": 90880.14,
    "volume_24h": 68654092707,
    "market_cap": 1802302995398
  },
  {
    "timestamp": "2025-03-04T00:00:00Z",
    "price": 84745.32,
    "volume_24h": 68682561524,
    "market_cap": 1680677652333
  },
  {
    "timestamp": "2025-03-05T00:00:00Z",
    "price": 88741.92,
    "volume_24h": 56099167524,
    "market_cap": 1759977486101
  },
  {
    "timestamp": "2025-03-06T00:00:00Z",
    "price": 90573.59,
    "volume_24h": 46315636680,
    "market_cap": 1796346485034
  },
  {
    "timestamp": "2025-03-07T00:00:00Z",
    "price": 88090.11,
    "volume_24h": 56125742567,
    "market_cap": 1747134359356
  },
  {
    "timestamp": "2025-03-08T00:00:00Z",
    "price": 86268.64,
    "volume_24h": 42249947822,
    "market_cap": 1711045699199
  },
  {
    "timestamp": "2025-03-09T00:00:00Z",
    "price": 84497.38,
    "volume_24h": 19818259944,
    "market_cap": 1675956129263
  },
  {
    "timestamp": "2025-03-10T00:00:00Z",
    "price": 81044.37,
    "volume_24h": 42216837463,
    "market_cap": 1607505095746
  },
  {
    "timestamp": "2025-03-11T00:00:00Z",
    "price": 81093.79,
    "volume_24h": 55172098181,
    "market_cap": 1608523847716
  },
  {
    "timestamp": "2025-03-12T00:00:00Z",
    "price": 82625.91,
    "volume_24h": 44487051567,
    "market_cap": 1638952366642
  },
  {
    "timestamp": "2025-03-13T00:00:00Z",
    "price": 82374.04,
    "volume_24h": 35039484209,
    "market_cap": 1633995985545
  },
  {
    "timestamp": "2025-03-14T00:00:00Z",
    "price": 83201.64,
    "volume_24h": 30613495221,
    "market_cap": 1650451566304
  },
  {
    "timestamp": "2025-03-15T00:00:00Z",
    "price": 84333.46,
    "volume_24h": 24436327788,
    "market_cap": 1672938774050
  },
  {
    "timestamp": "2025-03-16T00:00:00Z",
    "price": 83690.7,
    "volume_24h": 16096857476,
    "market_cap": 1660225660478
  },
  {
    "timestamp": "2025-03-17T00:00:00Z",
    "price": 83628.5,
    "volume_24h": 24775539661,
    "market_cap": 1659027423648
  },
  {
    "timestamp": "2025-03-18T00:00:00Z",
    "price": 82627.37,
    "volume_24h": 24259151685,
    "market_cap": 1639203573593
  },
  {
    "timestamp": "2025-03-19T00:00:00Z",
    "price": 84093.03,
    "volume_24h": 26422779991,
    "market_cap": 1668319897501
  },
  {
    "timestamp": "2025-03-20T00:00:00Z",
    "price": 85302.56,
    "volume_24h": 34859046774,
    "market_cap": 1692354693598
  },
  {
    "timestamp": "2025-03-21T00:00:00Z",
    "price": 84180.95,
    "volume_24h": 23451590259,
    "market_cap": 1670138277994
  },
  {
    "timestamp": "2025-03-22T00:00:00Z",
    "price": 84264.61,
    "volume_24h": 15745131776,
    "market_cap": 1671837406602
  },
  {
    "timestamp": "2025-03-23T00:00:00Z",
    "price": 84791.68,
    "volume_24h": 11879296914,
    "market_cap": 1682334871453
  },
  {
    "timestamp": "2025-03-24T00:00:00Z",
    "price": 87403.34,
    "volume_24h": 24513795716,
    "market_cap": 1734196995176
  },
  {
    "timestamp": "2025-03-25T00:00:00Z",
    "price": 87371.4,
    "volume_24h": 31832194878,
    "market_cap": 1733602246548
  },
  {
    "timestamp": "2025-03-26T00:00:00Z",
    "price": 87381.58,
    "volume_24h": 27555863392,
    "market_cap": 1733846474985
  },
  {
    "timestamp": "2025-03-27T00:00:00Z",
    "price": 87280.73,
    "volume_24h": 25327234841,
    "market_cap": 1731885526528
  },
  {
    "timestamp": "2025-03-28T00:00:00Z",
    "price": 85216.01,
    "volume_24h": 28161169516,
    "market_cap": 1690957498232
  },
  {
    "timestamp": "2025-03-29T00:00:00Z",
    "price": 83228.11,
    "volume_24h": 24660625430,
    "market_cap": 1651548692266
  },
  {
    "timestamp": "2025-03-30T00:00:00Z",
    "price": 82969.28,
    "volume_24h": 15682587140,
    "market_cap": 1646448579882
  },
  {
    "timestamp": "2025-03-31T00:00:00Z",
    "price": 82435.19,
    "volume_24h": 21446285435,
    "market_cap": 1635886207204
  },
  {
    "timestamp": "2025-04-01T00:00:00Z",
    "price": 84090.47,
    "volume_24h": 26301319166,
    "market_cap": 1668773054431
  },
  {
    "timestamp": "2025-04-02T00:00:00Z",
    "price": 85123.21,
    "volume_24h": 30059436687,
    "market_cap": 1689308529818
  },
  {
    "timestamp": "2025-04-03T00:00:00Z",
    "price": 82835.69,
    "volume_24h": 45287481490,
    "market_cap": 1643951761394
  },
  {
    "timestamp": "2025-04-04T00:00:00Z",
    "price": 83401.65,
    "volume_24h": 36384558290,
    "market_cap": 1655229122875
  },
  {
    "timestamp": "2025-04-05T00:00:00Z",
    "price": 83360.73,
    "volume_24h": 28742950145,
    "market_cap": 1654462058934
  },
  {
    "timestamp": "2025-04-06T00:00:00Z",
    "price": 81990.49,
    "volume_24h": 17028742977,
    "market_cap": 1627303255096
  },
  {
    "timestamp": "2025-04-07T00:00:00Z",
    "price": 77828.83,
    "volume_24h": 59875773982,
    "market_cap": 1544741433904
  },
  {
    "timestamp": "2025-04-08T00:00:00Z",
    "price": 78715.54,
    "volume_24h": 54011784279,
    "market_cap": 1562377584541
  },
  {
    "timestamp": "2025-04-09T00:00:00Z",
    "price": 78407.49,
    "volume_24h": 51824067006,
    "market_cap": 1556298924329
  },
  {
    "timestamp": "2025-04-10T00:00:00Z",
    "price": 81027.3,
    "volume_24h": 54741060691,
    "market_cap": 1608334420453
  },
  {
    "timestamp": "2025-04-11T00:00:00Z",
    "price": 82054.34,
    "volume_24h": 35977387893,
    "market_cap": 1628757753258
  },
  {
    "timestamp": "2025-04-12T00:00:00Z",
    "price": 84147.8,
    "volume_24h": 27741418932,
    "market_cap": 1670352089154
  },
  {
    "timestamp": "2025-04-13T00:00:00Z",
    "price": 84488.66,
    "volume_24h": 24119187527,
    "market_cap": 1677157780724
  },
  {
    "timestamp": "2025-04-14T00:00:00Z",
    "price": 84704.76,
    "volume_24h": 28519181183,
    "market_cap": 1681489164835
  },
  {
    "timestamp": "2025-04-15T00:00:00Z",
    "price": 85059.4,
    "volume_24h": 25782419657,
    "market_cap": 1688571054761
  },
  {
    "timestamp": "2025-04-16T00:00:00Z",
    "price": 84038.66,
    "volume_24h": 24737055433,
    "market_cap": 1668343719586
  },
  {
    "timestamp": "2025-04-17T00:00:00Z",
    "price": 84610.98,
    "volume_24h": 22202601534,
    "market_cap": 1679746650082
  },
  {
    "timestamp": "2025-04-18T00:00:00Z",
    "price": 84657.08,
    "volume_24h": 16244497104,
    "market_cap": 1680699362941
  },
  {
    "timestamp": "2025-04-19T00:00:00Z",
    "price": 85136.11,
    "volume_24h": 12024348348,
    "market_cap": 1690245305628
  },
  {
    "timestamp": "2025-04-20T00:00:00Z",
    "price": 84807.91,
    "volume_24h": 12517275716,
    "market_cap": 1683766392116
  },
  {
    "timestamp": "2025-04-21T00:00:00Z",
    "price": 87308.04,
    "volume_24h": 25528703023,
    "market_cap": 1733437177469
  },
  {
    "timestamp": "2025-04-22T00:00:00Z",
    "price": 89713.14,
    "volume_24h": 35926734869,
    "market_cap": 1781226383003
  },
  {
    "timestamp": "2025-04-23T00:00:00Z",
    "price": 93517.59,
    "volume_24h": 47422197289,
    "market_cap": 1856802255699
  },
  {
    "timestamp": "2025-04-24T00:00:00Z",
    "price": 93018.95,
    "volume_24h": 31915770697,
    "market_cap": 1846938302545
  },
  {
    "timestamp": "2025-04-25T00:00:00Z",
    "price": 94290.73,
    "volume_24h": 31986997126,
    "market_cap": 1872233292881
  },
  {
    "timestamp": "2025-04-26T00:00:00Z",
    "price": 94509.37,
    "volume_24h": 26786854423,
    "market_cap": 1876617170105
  },
  {
    "timestamp": "2025-04-27T00:00:00Z",
    "price": 94191.9,
    "volume_24h": 16624127652,
    "market_cap": 1870349054327
  },
  {
    "timestamp": "2025-04-28T00:00:00Z",
    "price": 94368.61,
    "volume_24h": 23361778647,
    "market_cap": 1873898586425
  },
  {
    "timestamp": "2025-04-29T00:00:00Z",
    "price": 94887.48,
    "volume_24h": 26966380049,
    "market_cap": 1884245948785
  },
  {
    "timestamp": "2025-04-30T00:00:00Z",
    "price": 94557.5,
    "volume_24h": 25495654105,
    "market_cap": 1877733599432
  },
  {
    "timestamp": "2025-05-01T00:00:00Z",
    "price": 95894.9,
    "volume_24h": 28329498019,
    "market_cap": 1904333362653
  },
  {
    "timestamp": "2025-05-02T00:00:00Z",
    "price": 97020.46,
    "volume_24h": 28048358511,
    "market_cap": 1926730867169
  },
  {
    "timestamp": "2025-05-03T00:00:00Z",
    "price": 96373.69,
    "volume_24h": 20038716044,
    "market_cap": 1913933225309
  },
  {
    "timestamp": "2025-05-04T00:00:00Z",
    "price": 95700.06,
    "volume_24h": 15000224812,
    "market_cap": 1900600195072
  },
  {
    "timestamp": "2025-05-05T00:00:00Z",
    "price": 94484.11,
    "volume_24h": 21486271242,
    "market_cap": 1876498426844
  },
  {
    "timestamp": "2025-05-06T00:00:00Z",
    "price": 94587.86,
    "volume_24h": 21616755292,
    "market_cap": 1878606108893
  },
  {
    "timestamp": "2025-05-07T00:00:00Z",
    "price": 96862.99,
    "volume_24h": 37751128843,
    "market_cap": 1923834191369
  },
  {
    "timestamp": "2025-05-08T00:00:00Z",
    "price": 100041.32,
    "volume_24h": 67254318580,
    "market_cap": 1987010454825
  },
  {
    "timestamp": "2025-05-09T00:00:00Z",
    "price": 102986.27,
    "volume_24h": 49360551506,
    "market_cap": 2045550083391
  },
  {
    "timestamp": "2025-05-10T00:00:00Z",
    "price": 103412.35,
    "volume_24h": 28238030313,
    "market_cap": 2054061665784
  },
  {
    "timestamp": "2025-05-11T00:00:00Z",
    "price": 104142.43,
    "volume_24h": 27189860190,
    "market_cap": 2068610050144
  },
  {
    "timestamp": "2025-05-12T00:00:00Z",
    "price": 103527.61,
    "volume_24h": 33216455981,
    "market_cap": 2056446497758
  },
  {
    "timestamp": "2025-05-13T00:00:00Z",
    "price": 103304.95,
    "volume_24h": 36798039375,
    "market_cap": 2052068705733
  },
  {
    "timestamp": "2025-05-14T00:00:00Z",
    "price": 103617.64,
    "volume_24h": 30713000656,
    "market_cap": 2058321484009
  },
  {
    "timestamp": "2025-05-15T00:00:00Z",
    "price": 102897.72,
    "volume_24h": 27124914667,
    "market_cap": 2044069187192
  },
  {
    "timestamp": "2025-05-16T00:00:00Z",
    "price": 103895.59,
    "volume_24h": 30688244891,
    "market_cap": 2063937670657
  },
  {
    "timestamp": "2025-05-17T00:00:00Z",
    "price": 103254.08,
    "volume_24h": 22848201434,
    "market_cap": 2051238448881
  },
  {
    "timestamp": "2025-05-18T00:00:00Z",
    "price": 104220.77,
    "volume_24h": 19817008825,
    "market_cap": 2070491390878
  },
  {
    "timestamp": "2025-05-19T00:00:00Z",
    "price": 104220.18,
    "volume_24h": 41409996731,
    "market_cap": 2070530210876
  },
  {
    "timestamp": "2025-05-20T00:00:00Z",
    "price": 105771.82,
    "volume_24h": 35532483464,
    "market_cap": 2101403798106
  },
  {
    "timestamp": "2025-05-21T00:00:00Z",
    "price": 107471.4,
    "volume_24h": 40386551683,
    "market_cap": 2135217901571
  },
  {
    "timestamp": "2025-05-22T00:00:00Z",
    "price": 110996.66,
    "volume_24h": 60500174459,
    "market_cap": 2205309208619
  },
  {
    "timestamp": "2025-05-23T00:00:00Z",
    "price": 109934.75,
    "volume_24h": 41088570456,
    "market_cap": 2184263452350
  },
  {
    "timestamp": "2025-05-24T00:00:00Z",
    "price": 108516.68,
    "volume_24h": 35457308448,
    "market_cap": 2156137085496
  },
  {
    "timestamp": "2025-05-25T00:00:00Z",
    "price": 107698.79,
    "volume_24h": 24426934721,
    "market_cap": 2139938844140
  },
  {
    "timestamp": "2025-05-26T00:00:00Z",
    "price": 109602.07,
    "volume_24h": 27418434507,
    "market_cap": 2177806030424
  },
  {
    "timestamp": "2025-05-27T00:00:00Z",
    "price": 109493.51,
    "volume_24h": 30330056590,
    "market_cap": 2175702694935
  },
  {
    "timestamp": "2025-05-28T00:00:00Z",
    "price": 108335.49,
    "volume_24h": 30019750524,
    "market_cap": 2152738664906
  },
  {
    "timestamp": "2025-05-29T00:00:00Z",
    "price": 107510.24,
    "volume_24h": 31044280331,
    "market_cap": 2136394331024
  },
  {
    "timestamp": "2025-05-30T00:00:00Z",
    "price": 105368.85,
    "volume_24h": 36600343641,
    "market_cap": 2093894719069
  },
  {
    "timestamp": "2025-05-31T00:00:00Z",
    "price": 104190.83,
    "volume_24h": 28535010237,
    "market_cap": 2070535806336
  },
  {
    "timestamp": "2025-06-01T00:00:00Z",
    "price": 104689.48,
    "volume_24h": 17079955829,
    "market_cap": 2080493601653
  },
  {
    "timestamp": "2025-06-02T00:00:00Z",
    "price": 105241.23,
    "volume_24h": 18598913619,
    "market_cap": 2091489162732
  }
]
