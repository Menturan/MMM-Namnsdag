var moment = require('moment');
const NodeHelper = require("node_helper");
const fetch = require('node-fetch');

module.exports = NodeHelper.create({

    start: function () {
        var self = this;
        self.log('Starting helper: ' + this.name);
        this.started = false;
    },

    scheduleUpdate: function () {
        var self = this;
        this.updatetimer = setInterval(function () {
            if (self.isFivePastMidnight()) {
                self.getTodaysNames();
            }
        }, 60000); // 1min
    },

    isFivePastMidnight: function () {
        return moment().format('HH:mm') == moment().hour(0).minute(5).format('HH:mm')
    },

    getTodaysNames: function (config, name) {
        var self = this;
        self.log('Fetching todays names');
        var url = "https://api.dryg.net/dagar/v2.1/";
        self.debugLog(this.name + ': Calling ' + url);
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                var names = self.parseNames(result);
                self.sendSocketNotification('NEW_NAMES', names)
            })
            .catch(function (error) {
                self.log(name + ': Problems with ' + name + ': ' + error);
                self.sendSocketNotification('SERVICE_FAILURE', { erorr: error });
            });
    },

    parseNames: function (json) {
        return json.dagar[0].namnsdag;
    },

    // --------------------------------------- Handle notifications
    socketNotificationReceived: function (notification, payload) {
        var self = this;
        this.config = payload;
        self.debugLog("Notification - " + notification);
        self.debugLog("Started - " + this.started);
        if (notification === 'SETUP') {
            this.config = payload;
            if (this.started == false) {
                moment.locale(this.config.language);
                this.started = true;
                self.scheduleUpdate();
            }
            self.getTodaysNames();
        } else {
            self.sendSocketNotification('NEW_NAMES', this.names);
        };
    },
    log: function (msg) {
        console.log('[' + (new Date(Date.now())).toLocaleTimeString() + '] - ' + this.name + ' : ' + msg);
    },
    debugLog: function (msg) {
        if (this.config.debug) {
            console.log('[' + (new Date(Date.now())).toLocaleTimeString() + '] - DEBUG - ' + this.name + ' : ' + msg);
        }
    }

});
