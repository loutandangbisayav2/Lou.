module.exports = {
	config: {
		name: "uptime",
		aliases: ["up", "upt"],
		version: "1.0",
		author: "Kaizenji",
		role: 0,
		shortDescription: {
			en: "Displays the uptime of the bot."
		},
		longDescription: {
			en: "Displays the amount of time that the bot has been running for."
		},
		category: "system",
		guide: {
			en: "Use {p}uptime to display the uptime of the bot."
		}
	},
	onStart: async function ({ api, event, args }) {
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${hours} 𝐡𝐨𝐮𝐫𝐬 ${minutes} 𝐦𝐢𝐧𝐮𝐭𝐞𝐬 ${seconds} 𝐬𝐞𝐜𝐨𝐧𝐝`;
		api.sendMessage(`⟩⟩ 𝐇𝐞𝐥𝐥𝐨 𝐦𝐚𝐬𝐭𝐞𝐫 (⁠≧⁠▽⁠≦⁠), 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐮𝐧𝐧𝐢𝐧𝐠 𝐟𝐨𝐫 ${uptimeString}.`, event.threadID);
	}
};
