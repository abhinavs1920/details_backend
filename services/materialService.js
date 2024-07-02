// services/materialService.js
const Material = require('../models/material');

const getMaterials = async () => {
    return await Material.find({});
};

const getMaterialById = async (id) => {
    return await Material.findById(id);
};

const createMaterial = async (materialData) => {
    console.log({materialData});
    const material = new Material(materialData);
    return await material.save();
};

const updateMaterial = async (id, materialData) => {
    return await Material.findByIdAndUpdate(id, materialData, { new: true });
};

const deleteMaterial = async (id) => {
    return await Material.findByIdAndDelete(id);
};

module.exports = { getMaterials, getMaterialById, createMaterial, updateMaterial, deleteMaterial };
