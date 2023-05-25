var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[{
    name:"iPhone 14",
    category:"Mobile",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    image:"https://www.myg.in/images/thumbnails/624/460/detailed/32/apple1_94ev-mz.jpg"
  },
  {
    name:"iPhone 14 pro",
    category:"Mobile",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    image:"https://www.myg.in/images/thumbnails/624/460/detailed/32/APPLE_iPhone_14_Pro_Gold-1_owt7-to.jpg"
  },
  {
    name:"iPhone 14 pro max",
    category:"Mobile",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    image:"https://www.myg.in/images/thumbnails/624/460/detailed/38/dp1.jpg"
  },
  {
    name:"iPhone 13 pro max",
    category:"Mobile",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    image:"https://www.myg.in/images/thumbnails/624/460/detailed/38/dp1.jpg"
  },
]

  res.render('index', {products,admin:false});
});

module.exports = router;
