// controllers/materialController.js
const materialService = require('../services/materialService');
const fileHandler = require('../utils/fileHandler');

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
        if (req.file) req.body.imageUrl = await fileHandler.uploadFile(req.file);
        const newMaterial = await materialService.createMaterial(req.body);
        res.status(201).json(newMaterial);
    } catch (err) {
        
    }
};

const updateMaterial = async (req, res) => {
    try {
        if (req.file) req.body.imageUrl = await fileHandler.uploadFile(req.file);
        const updatedMaterial = await materialService.updateMaterial(req.params.id, req.body);
        if (!updatedMaterial) return res.status(404).json({ message: 'Material not found' });
        res.json(updatedMaterial);
    } catch (err) {
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
