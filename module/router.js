const express = require ('express');
const router = express.Router();
const {all, findByid, save, remove}  = require('./controllers');

router.get('/',all)
router.get('/:id',findByid)
router.post('/', save)
router.put('/:id',save)
router.delete('/:id',remove)

module.exports = router
