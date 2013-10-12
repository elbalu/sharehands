module.exports = {
	development:{
		fb:{
			appId: '560090074010481',
			appSecret: 'b0a9050b2dc38397a7bd8001b3514566',
			url: 'http://localhost:3000/'
		},
		fs:{
			appId: 'R0D4KSE2PXCGISCIX02CPYJT553AQT2R2IYPLWMKSLF4GHJT',
			appSecret: 'IGJKGSCSDIFLXKWMMGNJPFR3VC2MI5POP2NL5CGKMWHO5XIQ',
			url: 'http://localhost:3000/',
			authUrl: 'https://foursquare.com/',
			apiUrl: 'https://api.foursquare.com/'
		}
	},
	production:{
		fb:{
			appId: '556862984362480',
			appSecret: '43c06ee6d5b9cc2f2df3decea313ca2f',
			url: 'http://crowdgive.aws.af.cm'
		},
		fs:{
			appId: 'RSQVY140L01RAFABSGX45ODZ3ZBTWEFBIZXSO3MWUUA2JKOH',
			appSecret: 'YUJT1DBUKWDQV5ENXXCKDTI4E4LP4DKSL1FWEXG3JEXMOHCA',
			url: 'http://nearring.com/',
			authUrl: 'https://foursquare.com/',
			apiUrl: 'https://api.foursquare.com/'
		}
	},
	mongo: {
        hostname: "localhost",
        port: 27017,
        username: "",
        password : "",
        name :"",
        db: "db"
    }
};