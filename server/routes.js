// import express from 'express/lib/router/index'
const express = require('express')
const routes = express.Router()
const serverSideRequests = require('./serverSideRequests')

routes.get('/searchSurvey/:supplierCode', async (req, res) => {
    try {
        res.json({ success: true })
    } catch (error) {
        res.json({ error: error.message })
    }
})


module.exports = routes