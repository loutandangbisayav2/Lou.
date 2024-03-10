module.exports = {
	config: {
			name: "hi",
			version: "1.0",
			author: "Kaizenji",//olol
			countDown: 1,
			role: 0,
			shortDescription: "hi",
			longDescription: "response with hi",
			category: "box chat",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "hi") return message.reply("𝐡𝐨𝐰 𝐢 𝐜𝐚𝐧 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐧𝐢𝐠𝐠𝐚);
  if (event.body && event.body.toLowerCase() == "henlo") return message.reply("𝐡𝐨𝐰 𝐢 𝐜𝐚𝐧 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐧𝐢𝐠𝐠𝐚");
  if (event.body && event.body.toLowerCase() == "bot") return message.reply("𝐡𝐨𝐰 𝐢 𝐜𝐚𝐧 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐧𝐢𝐠𝐠𝐚");
  if (event.body && event.body.toLowerCase() == "hello") return message.reply("𝐡𝐨𝐰 𝐢 𝐜𝐚𝐧 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐧𝐢𝐠𝐠𝐚");
  if (event.body && event.body.toLowerCase() == "zup") return message.reply("𝐡𝐨𝐰 𝐢 𝐜𝐚𝐧 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐧𝐢𝐠𝐠𝐚");
  if (event.body && event.body.toLowerCase() == "hey") return message.reply("𝐡𝐨𝐰 𝐢 𝐜𝐚𝐧 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐧𝐢𝐠𝐠𝐚");
  if (event.body && event.body.toLowerCase() == "yo") return message.reply("𝐡𝐨𝐰 𝐢 𝐜𝐚𝐧 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐧𝐢𝐠𝐠𝐚");
}
};
