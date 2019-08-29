const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN)

var prefix = ("<");

client.on("ready", () => {
    console.log("Connecté !")
    client.user.setStatus("online")
    client.user.setActivity("Graal Online Classic| <help", {type: 0})
})

client.on("message", (message) => {

    if(message.content === prefix +"help") {
        message.channel.send("Que veux-tu savoir? Choisis: <quêtes, <évènements, <farming, <motsclés")
    }
    if(message.content === prefix +"motsclés") {
        message.channel.send("Voici les mots auxquels je peux répondre: oi, mathis, paper a quitté graal, des droons, graalians est raciste, hashi, tu le connais ?, rayan, salty, renji, chaos ,alexia, kito, yuütsu, miolo, zed, shadows")
    }
    if(message.content === "tu le connais ?") {
        message.channel.send("Oui, je le connais.")
    }
    if(message.content === "oi") {
        message.channel.send("FDP ! Je déteste les brésiliens !")
    }
    if(message.content === "mathis") {
        message.channel.send("Il se noie. Ne l'aide surtout pas !")
    }
    if(message.content === "paper a quitté graal") {
        message.channel.send("Cheh ! Un cancer en moins et dix de retrouvé !")
    }
    if(message.content === "graalians est raciste") {
        message.channel.send("C'est même pas vrai sale humain !")
    }
    if(message.content === "des droons") {
        message.channel.send("C'est des monstres.")
    }
    if(message.content === "hashi") {
        message.channel.send("parmentier")
    }
    if(message.content === "rayan") {
        message.channel.send("L'arabe homophobe.")
    }
    if(message.content === "salty") {
        message.channel.send("IS SO SALTY !")
    }
    if(message.content === "renji") {
        message.channel.send("kon")
    }
    if(message.content === "chaos") {
        message.channel.send("machaosthis")
    }
    if(message.content === "alexia") {
        message.channel.send("https://www.youtube.com/watch?v=P0z9KgCHuNE")
    }
    if(message.content === "kito") {
        message.channel.send("Il adore les Hentaïs.")
    }
    if(message.content === "yuütsu") {
        message.channel.send("Le mélancolique.")
    }
    if(message.content === "miolo") {
        message.channel.send("Il adore les Nékos.")
    }
    if(message.content === "zed") {
        message.channel.send("Le SEGPA ultime.")
    }
    if(message.content === "shadows") {
        message.channel.send("Mathis 1.0.")
    }
    if(message.content === prefix +"pâque") {
        message.channel.send("Pâque se déroule chaque année, tu dois collecter 100 oeufs, il existe un oeuf 101 mais très rare")
    }
    if(message.content === prefix +"quêtes") {
        message.channel.send("Choisis: <bounty, <palmes, <ours, <lanterne, <cuillère, <rental")
    }
    if(message.content === prefix +"bounty") {
        message.channel.send("La bounty s'obtient à Castle, tu dois tuer ce que la quête te demande, tu reçeveras 1000 Gralats à la fin de la quête. Si tu tue un boss ta bounty brillera et tu reçevera 1250 Gralats")
    }
    if(message.content === prefix +"palmes") {
        message.channel.send("Il te faut un burger à 30 Gralats qui s'obtient au Burger Refuge de Graal City, donne la au SDF dans la grotte en passant par MoD Town, il te donnera de la paté pour chat, va au dessus de Swamp Town un PNJ voudra récuperer son chat, donne lui la paté pour chat et tu receveras une chiffon rouge, va à MoD Town dans une petite maison le PNJ te donnera un mirroir en échange du chiffon, va dans la grotte à coté de Angel Clan de Graal City, puis va dans les toilettes du batiment un PNJ te donnera T-shirt en échange du mirroir, va a York Town dans le bar à pirate le PNJ te donnera des allumettes en échange du T-shirt, va à Onnet Town passe par le toit de la maison le PNJ te donnera un pinceau en échange des allumettes, va en dessous de Stable de base le PNJ te donnera un livre en échange du pinceau, va au Battle Arena tourne à droite le PNJ te donnera un filet de pêche en échange du livre, va sur le pont entre Graal City et Swamp Town le PNJ te donnera une écharpe, reparle à ce PNJ paye lui 500 Gralats et il te donnera un poisson, va dans la grotte au dessus de York Town, va derriere la cascade et montre le poisson au centre de l'eau le PNJ te donnera la clé du coffre qui se situe juste au dessus et tu auras les palmes dans ce coffre.")
    }
    if(message.content === prefix +"ours") {
        message.channel.send("Pour cette quête tu auras besoin des palmes et de la pelle. Va à Big City, au dessus de la map se trouvera des pierres en forme de cercle, mets toi au milieu et utilises les palmes, tu te retrouveras au dessus de la montagne tu devras sauter dans un tronc d'arbre et creuser directement sans désendre en bas, tu reçeveras une vielle note, désends et sors, un PNJ plus bas te demandera la vielle note et rentrera dans la grotte, va dans la grotte et parle lui et tu reçevera un livre, va voir le chef du village dans une tente et il te demandera de creuser à un endroit bien précis, (ce qu'il dit en vert est essentiel traduis là) tu devras creuser à cette endroit spécifique, tu trouveras un collier, va voir le chef du village, il te donnera un hat en échange du collier, porte le hat et va voir la sorcière dans sa tente et elle te donnera la transformation en Ours.")
    }
    if(message.content === prefix +"lanterne") {
        message.channel.send("Pour cette quête tu auras besoin de la transformation en souris et de la lanterne qui coût 2000 Gralats à Onnet Town, va à Destiny à côté de la maison de pierre, parle au gnome 3 fois, fais Yes et vas à Onnet Town dans une maison où tu peux pas entrer, utilise la souris pour entrer et tue tous les rats, enlève l'herbe orange et verte et aussi les buissons, tu reçeveras un diplôme, vas à la banque de Graal City, donne le diplôme + 200 Gralats au PNJ, il te donnera le Diplôme tamponné, donne la au gnome tu le retrouveras dans la maison abandonnée à Onnet Town reviens dans 6h et il t'améliorera ta lanterne.")
    }
    if(message.content === prefix +"cuillère") {
        message.channel.send("En finisant la bounty le Samedi, il faut pousser la caisse à l'interieur de la cellule et tu passeras avec la souris et trouve la sortie et tu tomberas sur une souris, tue la et il deviendra un PNJ, il te donnera la cuillère tu creuseras un peu au dessus et tu trouveras un coffre à l'interieur se trouve la bombe carré.")
    }
    if(message.content === prefix +"rental") {
        message.channel.send("Vas à Stable dans la forêt parle au PNJ devant l'écurie, elle te donnera une flûte. Cherche le cheval rental qui se trouve entre York Town et Swamp Town utilise la flûte pour qu'il te suive, ramène le à l'écurie et tu pourras l'avoir pendant 1 heure avant qu'il disparait.")
    }
    if(message.content === prefix +"évènements") {
        message.channel.send("Choisis: <pâque, <graaloween, <blackfriday, <noël, <révolution, <nexus, <gst")
    }
    if(message.content === prefix +"pâque") {
        message.channel.send("Pâque se déroule chaque année, tu dois collecter 100 oeufs, il existe un oeuf 101 mais il est très rare. Pour collecter au plus vite les oeufs et être dans le top 50, tu dois faire des échanges d'oeuf entre joueur. La récompense des oeufs est souvent une monture et celle du 101 est souvent un hat ou accessoire. Va dans le canal #??-event-?? pour savoir les emplacements des oeufs. L'évènement dure globalement 1 mois.")
    }
    if(message.content === prefix +"graaloween") {
        message.channel.send("Cet évènement est l'une des plus cool sur graal, il faut collecter des bonbons pour pouvoir s'acheté dans le shop de la grotte de Dead Wood des items, montures, transformation, chapeaux etc... Il y a une quête à faire en collectant 8 objets dans un labyrinthe sombre avec une belle récompense. Les Towers rapportent le plus de bonbons, les PNJs sortent des maisons en demandant des bonbons, pour ça tu dois t'équipé du sac à bonbon et d'un masque de graaloween. Il y a aussi une réduction de -50% sur les uploads vers le 25 Septembre avant le début de Graaloween. L'évènement dure globalement 1 mois.")
    }
    if(message.content === prefix +"blackfriday") {
        message.channel.send("Black Friday débute le vers la fin du mois de Novembre avec une réduction de -25% sur les uploads et sur tous les montures, objets graal. L'évènement dure globalement 2 semaines.")
    }
    if(message.content === prefix +"noël") {
        message.channel.send("Fait gaffe à cet évènement, les scameurs sont au rendez-vous, tu peux acheter des cadeaux à 700 Gralats à Onnet Town et en offrir par générosité ou en échangé avec d'autres personnes, des amis de préférence pour éviter le scam, ou les échangers avec le Santa qui est devant l'église au dessus du Coin Fr pour 10 Gralats.")
    }
    if(message.content === prefix +"révolution") {
        message.channel.send("Cet évènement à lieu plusieurs fois en un an, il a 3 pièces de shop et a souvent pour thème le nouvel an chinois, l'été, les requins, les animaux d'australie, Thanksgiving qui durent globalement entre 1 et 3 semaines.")
    }
    if(message.content === prefix +"nexus") {
        message.channel.send("Le Nexus est le meilleur shop que l'on puisse trouver sur graal. Généralement, il sort 1 fois par an. Les ajouts dans le nexus sortent petit à petit. Un conseil, tu dois économiser tes gralats jusqu'à avant la fin du Nexus car un ajouts peuvent sortir avant la fin du nexus. Voici les derniers Nexus sortit jusqu'à présent: 2011 plage / safari, 2013 rodéo, 2014 Candy / japan, 2015 médieval / Space, 2016 librairie / sport, 2017 rétro game, 2018 Mythologie nordique.")
    }
    if(message.content === prefix +"gst") {
        message.channel.send("La GST (Guild Spar Tournament) se déroule 1 fois tous les 3 mois. La GST consiste à faire des tournois 5vs5, guilde contre guilde. Les qualifications durent 1 semaine, pour qualifier ta guilde, tu auras besoin de 6000 points de guilde. Une fois qualifié tu participeras au tournois final contre d'autre guilde. Si vous perdez, vous aurez un shop dans le quel il y a 2 cadeaux à 2500 Gralats, tu peux en acheter qu'un mais pour les gagnants de la GST peuvent en acheter 2. Dedans se trouve des items de la GST tel que la méditation qui est utile pour régénéré ses points de vie tous les 10 secondes, une chaise, une pièce, un dé et bien d'autres encore et les gagnants reçoivent une ceinture. Une fois la GST terminé, la saison se termine et une nouvelle saison commence.")
    }
    if(message.content === prefix +"farming") {
        message.channel.send("Choisis: <loots, <insectes, <farmer, <autofarm")
    }
    if(message.content === prefix +"loots") {
        message.channel.send("Pour celà, tu auras besoin des palmes. Tu dois loots dans des grandes surfaces pour avoir beaucoup de loots je te conseil de loot à Destiny, York Town, Big City, Balamb Island et le meilleur endroit à Oasis Island. Les loots se vendent plus chère si tu les vends aux différents PNJ que dans Elster Cave. Réfère-toi dans le canal #??-loots-?? pour savoir où les vendres. Dans la grotte des bandits se trouvent 5 coffres violet qui contiennent des loots, tu peux les re-ouvrir 8 heures après leur ouverture.")
    }
    if(message.content === prefix +"insectes") {
        message.channel.send("Tu auras besoin du filet à insecte. Les Insectes sont présent dans toutes les saisons sauf en hiver. Elle se vendent chez la sorcière à Swamp Town, lorsque la sorcière demande un type d'insecte en particulier sont prix est doublé et chaque midi la sorcère demande un autre insecte.")
    }
    if(message.content === prefix +"farmer") {
        message.channel.send("Je te conseil de farmer à Swamp Town les Gralats spawn plus rapidement que dans la House ou Guild House malgrès qu'il y ait beaucoup de voleur. Le mieux est de farmer avec les bombes + monture avec un 2 place pour tirer plus de 5 fois + 100 Alignements pour éviter les coups et donc les proxys-kills. Suicide toi dans ta house pour éviter un proxy-kill pour pas perdre tes bombes.")
    }
    if(message.content === prefix +"autofarm") {
        message.channel.send("Il y a 2 types d'auto farm, l'auto farm à l'épée et l'auto farm à bombe + mountures + épée, la 2ème rapporte plus de gralats. L'auto farm à l'épée est souvent placé dans les houses il te faut 26 convoyor belt et 4 spring board pour le réaliser. Pour la 2ème auto farm il y a l'auto farm GH spar (la moins chère) et l'auto farm GH avec 55 gralats à lock (la plus chère et rentable) pour la 1ère il te faudra 8 convoyors belt, 3 springs board et 4 switchs. Pour la 2ème méthode il te faudra 33 convoyors belt, 3 springs board et 6 switchs. Demande à Hashirama pour en savoir plus.")
    }


});
