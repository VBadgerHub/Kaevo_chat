var jsFile = document.createElement("script");
jsFile.src = "tmi.js";
document.body.appendChild(jsFile);  
var channelName = 'just_vorczu'



const client = new tmi.Client({
  channels: [ text ] })

client.connect();  

client.on('message', (channel, tags, message, self) => {
	console.log(tags);
	console.log(message);
	console.log(channel);
	console.log(self);

const box_msg_small = document.createElement("div");
box_msg_small.classList.add('box_msg_small')

const side_bar_anim = document.createElement("div");
side_bar_anim.classList.add('side_bar_anim')

const top_bar = document.createElement("div");
top_bar.classList.add('top_bar')

const bot_bar = document.createElement("div");
bot_bar.classList.add('bot_bar')

const name_sml = document.createElement("div");
name_sml.classList.add('name_sml')

const msg_sml = document.createElement("div");
msg_sml.classList.add('msg_sml')
msg_sml.innerHTML = getMessageHTML(message, tags.emotes)

const class_container = document.createElement("div");
class_container.classList.add('class_container')


const top_bar_anim = document.createElement("div");
top_bar_anim.classList.add('top_bar_anim')
const top_bar_anim_lower = document.createElement("div");
top_bar_anim_lower.classList.add('top_bar_anim_lower')
top_bar.append(top_bar_anim,top_bar_anim_lower)

const name_sml_bg_base = document.createElement("div");
name_sml_bg_base.classList.add('name_sml_bg_base')
name_sml_bg_base.innerHTML = tags.username

const name_sml_bg = document.createElement("div");
name_sml_bg.classList.add('name_sml_bg')
name_sml.append(name_sml_bg_base, name_sml_bg)

const box1 = document.createElement("div");

box1.classList.add('box1')
box1.classList.add('cBox')
const box2 = document.createElement("div");
box2.classList.add('box2')
box2.classList.add('cBox')
const box3 = document.createElement("div");
box3.classList.add('box3')
box3.classList.add('cBox')
const br = document.createElement("br");
const blast = document.createElement("div");

if (tags.badges.broadcaster) {
    box3.classList.add('tw_owner')
    blast.classList.add('blast')
} else if (tags.badges.subscriber == 1){
    box3.classList.add('tw_sub')
    const blast = document.createElement("div");
  blast.classList.add('blast')
}

if (tags.mod) {
    box2.classList.add('tw_mod')
}
if (tags.badges.vip == 1) {
    box1.classList.add('tw_vip')    
}



class_container.append(box1, box2, box3)
box_msg_small.append(blast,side_bar_anim,top_bar,bot_bar,name_sml,msg_sml,class_container,br)
document.getElementById('contener').appendChild(box_msg_small)
});


function getMessageHTML(message, emotes) {
    if (!emotes) return message;
    const stringReplacements = [];
  
    Object.entries(emotes).forEach(([id, positions]) => {
      const position = positions[0];
      const [start, end] = position.split("-");
      const stringToReplace = message.substring(
        parseInt(start, 10),
        parseInt(end, 10) + 1
      );
  
      stringReplacements.push({
        stringToReplace: stringToReplace,
        replacement: `<img src="https://static-cdn.jtvnw.net/emoticons/v1/${id}/1.0">`,
      });
    });
  
    const messageHTML = stringReplacements.reduce(
      (acc, { stringToReplace, replacement }) => {
        return acc.split(stringToReplace).join(replacement);
      },
      message
    );
  
    return messageHTML;   
  }
		







