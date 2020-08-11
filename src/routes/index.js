const { Router } = require('express');
const router =   Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Lenin De La Rosa",
        "website" : "www.prueba.com"
    };

    res.json(data);
});

module.exports = router;