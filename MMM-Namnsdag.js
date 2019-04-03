/*
 * Notifications:
 *      NEW_NAMES: Recived when todays names is availble.
 *      SERVICE_FAILURE: Received when the service access failed.
 */
Module.register("MMM-Namnsdag", {
	// Module defaults
	defaults: {
	},

	// Required scripts
	getScripts: function () {
		return ["moment.js"];
	},

	getStyles: function () {
		return [];
	},

	getHeader: function () {
		return this.data.header;
	},

	// Start the module
	start: function () {
		Log.log("Starting module: " + this.name);
		this.config.language = config.language;
		moment.locale(config.language);
		this.loaded = false;
		this.sendSocketNotification("SETUP", this.config); // Send config to helper and initiate an update
	},

	getDom: function () {
		var wrapper = document.createElement("div");
		wrapper.style = "width: -moz-fit-content;";
		var container = document.createElement("div");
		if (!this.loaded) {
			container.innerHTML = "Hämtar dagens namn...";
			container.className = "dimmed light small";
		} else if (this.failure !== undefined) {
			container.innerHTML = "Fel! Försöker igen om 5min.";
			container.className = "dimmed light small";
		} else if (this.names.lenght === 0) {
			container.innerHTML = "Ingen har namnsdag";
			container.className = "dimmed light small";
		} else {
			this.names.forEach(name => {
				var p = document.createElement("p");
				p.style = "margin-top: 0px;margin-bottom: 0px;";
				p.innerHTML = name;
				container.appendChild(p);
			});
			// container.innerHTML = this.names[0] + "</br>" + this.names[1];
			container.className = "bright small";
		}
		container.style = "text-align: center;";
		wrapper.appendChild(container);
		return wrapper;
	},

	socketNotificationReceived: function (notification, payload) {
		this.debugLog("Notification - " + notification);
		if (notification === "NEW_NAMES") {
			this.loaded = true;
			this.failure = undefined;
			this.names = payload;
			this.debugLog(this.names);
			this.updateDom(this.config.animationSpeed);
		}
		if (notification == "SERVICE_FAILURE") {
			this.failure = payload;
			this.loaded = true;
			Log.log("Service failure: " + this.failure.code + ":" + this.failure.message);
			this.updateDom();
		}
	},

	debugLog: function (msg) {
		if (this.config.debug) {
			Log.log("[" + (new Date(Date.now())).toLocaleTimeString() + "] - DEBUG - " + this.name + " - " + new Error().lineNumber + " - : " + msg);
		}
	}
});
