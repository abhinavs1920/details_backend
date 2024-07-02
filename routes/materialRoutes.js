// routes/materialRoutes.js
const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const upload = require('../middleware/uploadMiddleware');
const auth = require('../middleware/authMiddleware');
const fileHandler = require('../utils/fileHandler');
const materialService = require('../services/materialService');


router.get('/', materialController.getMaterials);
router.get('/:id', materialController.getMaterialById);
router.post('/', auth, upload.single('image'), materialController.createMaterial);
router.put('/:id', auth, upload.single('image'), materialController.updateMaterial);
router.delete('/:id', auth, materialController.deleteMaterial);

module.exports = router;
