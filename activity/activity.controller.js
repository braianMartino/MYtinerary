const Activity = require("./activity.model");

const getActivity = (req, res) => {
  Activity.find({}).then(itineraries => {
    res.json(itineraries).status(204);
  });
};
module.exports = {
  getActivity
};
