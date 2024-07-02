// controllers/materialController.js
const materialService = require('../services/materialService');
const upload = require('../utils/fileHandler');

const getMaterials = async (req, res) => {
    try {
        const materials = await materialService.getMaterials();
        res.json(materials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getMaterialById = async (req, res) => {
    try {
        const material = await materialService.getMaterialById(req.params.id);
        if (!material) return res.status(404).json({ message: 'Material not found' });
        res.json(material);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createMaterial = async (req, res) => {
    try {
        console.log(req.body);
        const { name, technology, colors, pricePerGram } = req.body;
        let imageUrl = null;

        if (req.file) {
            imageUrl = req.file.path;
        }

        const materialData = {
            name,
            technology,
            colors: colors.split(',').map(color => color.trim()), // Assuming colors are sent as comma-separated string
            pricePerGram,
            imageUrl
        };

        const newMaterial = await materialService.createMaterial(materialData);

        res.status(201).json({ message: 'Material created successfully', material: newMaterial });
    } catch (error) {
        console.error('Error creating material:', error);
        res.status(500).json({ message: 'Failed to create material', error: error.message });
    }
};

const updateMaterial = async (req, res) => {
    try {
        const { name, technology, colors, pricePerGram } = req.body;
        let imageUrl = null;

        if (req.file) {
            imageUrl = req.file.path;
        }

        const materialData = {
            name,
            technology,
            colors: colors ? colors.split(',').map(color => color.trim()) : undefined, // Handle optional colors
            pricePerGram,
            imageUrl
        };

        // Remove undefined properties
        Object.keys(materialData).forEach(key => materialData[key] === undefined && delete materialData[key]);

        const updatedMaterial = await materialService.updateMaterial(req.params.id, materialData);
        if (!updatedMaterial) return res.status(404).json({ message: 'Material not found' });
        res.json(updatedMaterial);
    } catch (err) {
        console.error('Error updating material:', err);
        res.status(500).json({ message: err.message });
    }
};

const deleteMaterial = async (req, res) => {
    try {
        const deletedMaterial = await materialService.deleteMaterial(req.params.id);
        if (!deletedMaterial) return res.status(404).json({ message: 'Material not found' });
        res.json({ message: 'Material deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getMaterials, getMaterialById, createMaterial, updateMaterial, deleteMaterial };
