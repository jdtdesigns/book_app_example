const router = require('express').Router();
const path = require('path');

router.get('/store/:store_id', (req, res) => {
  res.sendFile(path.join(process.cwd(), './views/store.html'));
});

module.exports = router;