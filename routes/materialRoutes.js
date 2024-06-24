// routes/materialRoutes.js
const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const upload = require('../middleware/uploadMiddleware');
const auth = require('../middleware/authMiddleware');

router.get('/', materialController.getMaterials);
router.get('/:id', materialController.getMaterialById);
router.post('/', auth, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Please upload an image' });
        }

        const { name, technology, colors, pricePerGram } = req.body;
        const imageUrl = req.file.path;

        const newMaterial = await materialController.createMaterial({
            name,
            technology,
            colors,
            pricePerGram,
            imageUrl
        });

        res.status(201).json({ message: 'Material created successfully', material: newMaterial });
    } catch (error) {
        console.error('Error creating material:', error);
        res.status(500).json({ message: 'Failed to create material', error: error.message });
    }
});

router.put('/:id', auth, upload.single('image'), async (req, res) => {
    try {
        let imageUrl = req.body.imageUrl; 
        if (req.file) {
            imageUrl = req.file.path; 
        }

        const { id } = req.params;
        const { name, technology, colors, pricePerGram } = req.body;

        const updatedMaterial = await materialController.updateMaterial(id, {
            name,
            technology,
            colors,
            pricePerGram,
            imageUrl
        });

        if (!updatedMaterial) {
            return res.status(404).json({ message: 'Material not found' });
        }

        res.json({ message: 'Material updated successfully', material: updatedMaterial });
    } catch (error) {
        console.error('Error updating material:', error);
        res.status(500).json({ message: 'Failed to update material', error: error.message });
    }
});
router.delete('/:id', auth, materialController.deleteMaterial);

module.exports = router;
