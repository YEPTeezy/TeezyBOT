const Commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new Commando.Client({
    commandPrefix: "="
});

global.currentTeamMembers = [];
global.servers = {};

bot.on('ready',function(){
    console.log('Ready!');
    bot.user.setActivity("Teezy code me!", {type: 'WATCHING'})
});

bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to the server!")
    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole);
});

bot.on('message', function(message){

    if(message.content == 'Hello')
    {
        var hello = new discord.RichEmbed()
            .setDescription('Hello ' + message.author +', how are you today?')
        message.channel.sendEmbed(hello);
    }
    else if(message.content == "What's the current team?")
    {
        var teamInfo = new discord.RichEmbed()
            .setTitle("Current Team Members")
        for(var i = 0; i < currentTeamMembers.length; i++)
        {
            teamInfo.addField("Member " + (i+1).toString(), currentTeamMembers[i].username);
        }
        message.channel.send(teamInfo);
    }
    if(message.content == 'join') 
    {   
        let memberRole = message.member.guild.roles.find("name", "Member");
        message.member.addRole(memberRole);
        var join = new discord.RichEmbed()
            .setTitle('Welcome to the server!')
            .setColor(0x0000FF)
            .setDescription('Make sure to do !info on the server to get to know me better!')
            .setFooter('TeezyBOT is currently in the proccess of being developed by @teezy#4883!')
        message.member.send(join);
    }
});

bot.login(process.env.BOT_TOKEN);
