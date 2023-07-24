var push = require('web-push');

let vapidKeys ={ 
   
PublicKey: 'BCe4MN5xr84nD5VYcMw8jsK1NAEyYAM_lyPPZXmixX4RiJZuXt_yX6sg-gapCN6z6DYyvof5Z32UJ_2A8DO05UE',

PrivateKey: '2hV6aJY46Va_WPq1Lnkpp6Qm8Lsh6SXJ3HqUuYcXZyk'

}
push.setVapidDetails('mailto:test@test.com', vapidKeys.PublicKey, vapidKeys.PrivateKey)

let sub = {};

push.sendNotification(sub,'tset message ')
