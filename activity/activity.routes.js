const router = require('express').Router()
const activityController = require('./activity.controller')


router.get("/activity",activityController.getActivity)


module.exports = router