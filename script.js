window.addEventListener("load", init);

// *******************************************************
// * ------- SETUP PAGE/ CLICK EVENTS ON LOAD ---------- *
// *******************************************************
function init() {
    $("#menu").menu({
        position: {
            my: "top",
            at: "bottom"
        }
    });
    $("#SPECIALreview").hide();
    $("#menu").hide();
    $("nav").show();
    $("#wrestlersBtn").click(wrestlersPage);
    $("#chewBtn").click(chewpacremaPage);
    $("#carebearBtn").click(DisgruntledCareBearPage);
    $("#bearbarBtn").click(bearbarianPage);
    $("#crimsonBtn").click(crimsonLighteningPage);
    $("#dickBtn").click(dicktatoePage);
    $("#gladBtn").click(gladisPage);
    $("#jonaldBtn").click(mcbobaldPage);
    $("#attackBtn").click(jackattackPage);
    $("#juanBtn").click(juansinnaPage);
    $("#psychoBtn").click(psychocircusPage);
    $("#mistressBtn").click(redmistressPage);
    $("#silverBtn").click(silverhordePage);
    $("#mcclellanBtn").click(musclePage);
    $("#midasBtn").click(unclemidasPage);
    $("#deathBtn").click(whisperingdeathPage);
    $("#homeBtn").click(homePage);
    $("#loginBtn").click(loginPage);
    $("#regBtn").click(registerPage);
    $("#logoutBtn").click(loginPage);
    $("#restart").click(restart);

    AjaxFunctionCheckLog();

    var logButton = document.getElementById("logSubmit");
    logButton.addEventListener("click", function() {
        var username = document.forms["form"].elements["username"].value;
        var password = document.forms["form"].elements["password"].value;
        AjaxFunctionLogin(username, password);
    });

    var form = document.getElementById("form");
    form.addEventListener("submit", function(evt) {
        evt.preventDefault();
    });

    var regButton = document.getElementById("regSubmit");
    regButton.addEventListener("click", function() {
        var username = document.forms["form"].elements["username"].value;
        var password = document.forms["form"].elements["password"].value;
        var confirm = document.forms["form"].elements["conPassword"].value;
        var display = document.forms["form"].elements["displayName"].value;
        AjaxFunctionRegister(username, password, confirm, display);
    });

    var logoutButtonVar = document.getElementById("logoutBtn");
    logoutButtonVar.addEventListener("click", function() {
        AjaxFunctionLogout();
    });
}

var login = false;
var whois = "";
var wrestler;
var SPECIALarray = [];
var userComments = [];
console.log(whois);

// *******************************************************
// * ---------------------- HOMEPAGE ------------------- *
// *******************************************************
function homePage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#menu").show();
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $("<div id='aboutPage'><h1>About WrestleInsania</h1><div><h2>Information</h2><p>You’ve entered the right place if you’re looking for bloody knuckles and broken bones (with some of the most ridiculous fighters in existence). This is WrestleInsania, the only place in the world that makes sense when you see disgruntled bears, KISS lookalikes and fighters past their expiration date. Where else are you gonna see madness and mayhem at it’s best when muscle bound maniacs and babes fight it out to be top of the top in the WrestleInsania League!! Check out our wrestler’s backstory and S.P.E.C.I.A.L stats and then pick your favourite to see which one stands as the best, whilst the other’s are left in a mess. Will it be the fat guy’s day, the muscles bound menaces, the babes that can battle or the two that look like death came calling to you to the other side?</p></div></div><div id='chewieDiv'><img src='images/chewpacrema.png' id='chewieimg'/><p id='chewietxt'>Chewpacrema</p></div>").appendTo("#wrestlers");
        $('#chewieDiv').show("slide", 1000);
        $('#aboutPage').show("slide", {
            direction: "right"
        }, 1000);
    });
}

// *******************************************************
// * --------------------- Login ----------------------- *
// *******************************************************
function loginPage() {
    $("#menu").hide();
    $("#btns").hide("blind");
    $("#form").show("blind");
    $(".login").show();
    $("#regSubmit").hide();
    $("#logSubmit").show();
    $("#restart").show();


}

// *******************************************************
// * -------------------- Register --------------------- *
// *******************************************************
function registerPage() {
    $("#menu").hide();
    $("#btns").hide("blind");
    $("#form").show("blind");
    $(".login").show();
    $(".register").show();
    $("#logSubmit").hide();
    $("#regSubmit").show();
    $("#restart").show();
}

// *******************************************************
// * -------------- LIST OF ALL WRESTLERS -------------- *
// *******************************************************
function wrestlersPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        // *******************************************************
        // * ------- CREATES ALL THE WRESTLER CARDS ------------ * 
        // *******************************************************
        // * ------------------- CHEWPACREMA ------------------- *
        // *******************************************************
        $('<button class = "wrestler" id="chewpacremaBtn"><div id="chewpacrema" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Chewpacrema</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * -------------- DISGRUNTLED CAREBEAR --------------- *
        // *******************************************************
        $('<button class = "wrestler" id="DisgruntledCareBearBtn"><div id="DisgruntledCareBear" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Disgruntled CareBear</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ------------------- BEARBARIAN -------------------- *
        // *******************************************************
        $('<button class = "wrestler" id="bearbarianBtn"><div id="bearbarian" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Bearbarian</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ---------------- CRIMSON LIGHTENING --------------- *
        // *******************************************************
        $('<button class = "wrestler" id="crimsonLighteningBtn"><div id="crimsonLightening" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Crimson Lightening</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * -------------------- DICKTATOE -------------------- *
        // *******************************************************
        $('<button class = "wrestler" id="dicktatoeBtn"><div id="dicktatoe" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Dicktatoe</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * -------------------- GLADIS ----------------------- *
        // *******************************************************
        $('<button class = "wrestler" id="gladisBtn"><div id="gladis" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Gladis</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div</div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ------------------ JONALD MCBOBALD ---------------- *
        // *******************************************************
        $('<button class = "wrestler" id="mcbobaldBtn"><div id="mcbobald" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Jonald McBobald</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ------------------ JACK ATTACK -------------------- *
        // *******************************************************
        $('<button class = "wrestler" id="jackattackBtn"><div id="jackattack" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Jack Attack</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ------------------ JUAN SINNA --------------------- *
        // *******************************************************
        $('<button class = "wrestler" id="juansinnaBtn"><div id="juansinna" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Juan Si Na</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ---------------- PSYCHO CIRCUS -------------------- *
        // *******************************************************
        $('<button class = "wrestler" id="psychocircusBtn"><div id="psychocircus" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Psycho Circus</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo('#wrestlers');
        // *******************************************************
        // * ----------------- RED MISTRESS -------------------- *
        // *******************************************************
        $('<button class = "wrestler" id="redmistressBtn"><div id="redmistress" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Red Mistress</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ----------- SILVER HORDE -------------- *
        // *******************************************************
        $('<button class = "wrestler" id="silverhordeBtn"><div id="silverhorde" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Silver Horde</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * --------------- MUSCLES MCCLELLAN ----------------- *
        // *******************************************************
        $('<button class = "wrestler" id="muscleBtn"><div id="muscle" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Jon the Muscle McClellen</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ----------------- UNCLE MIDAS --------------------- *
        // *******************************************************
        $('<button class = "wrestler" id="unclemidasBtn"><div id="unclemidas" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Uncle Midas</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ---------------- WHISPERING DEATH ----------------- *
        // *******************************************************
        $('<button class = "wrestler" id="whisperingdeathBtn"><div id="whisperingdeath" class="trump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Whispering Death</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div></button>').appendTo("#wrestlers");
        // *******************************************************
        // * ----------- SHOWS THE WRESTLER CARDS -------------- * ----------------------
        // *******************************************************
        $("#whisperingdeath").show("fade", 1000);
        $("#unclemidas").show("fade", 1000);
        $("#muscle").show("fade", 1000);
        $("#silverhorde").show("fade", 1000);
        $("#redmistress").show("fade", 1000);
        $("#mcbobald").show("fade", 1000);
        $("#juansinna").show("fade", 1000);
        $("#jackattack").show("fade", 1000);
        $("#psychocircus").show("fade", 1000);
        $("#gladis").show("fade", 1000);
        $("#dicktatoe").show("fade", 1000);
        $("#crimsonLightening").show("fade", 1000);
        $("#bearbarian").show("fade", 1000);
        $("#DisgruntledCareBear").show("fade", 1000);
        $("#chewpacrema").show("fade", 1000);
        // *******************************************************
        // * ---- WRESTLING CARDS BUTTONS (CLICK RESPONSE) ----- * 
        // *******************************************************
        $("#whisperingdeath").click(whisperingdeathPage);
        $("#unclemidas").click(unclemidasPage);
        $("#muscle").click(musclePage);
        $("#silverhorde").click(silverhordePage);
        $("#redmistress").click(redmistressPage);
        $("#mcbobald").click(mcbobaldPage);
        $("#juansinna").click(juansinnaPage);
        $("#jackattack").click(jackattackPage);
        $("#psychocircus").click(psychocircusPage);
        $("#gladis").click(gladisPage);
        $("#dicktatoe").click(dicktatoePage);
        $("#crimsonLightening").click(crimsonLighteningPage);
        $("#bearbarian").click(bearbarianPage);
        $("#DisgruntledCareBear").click(DisgruntledCareBearPage);
        $("#chewpacrema").click(chewpacremaPage);
    });
}

// *******************************************************
// * --------------- CHEWPACREMA PAGE ------------------ *
// *******************************************************
function chewpacremaPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="chewpacrema2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Chewpacrema</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Chewpacrema Bio</h2><p>As he enters the ring, with a hunger for battle, a thirst for victory and a diet of churros that would otherwise give you a stomach ache, Chewpacrema enters the ring. An inspiration to the large and in charge people (at least in the gut), this fighter from Mexico, knows no bounds when it comes to fighting in the ring, or eating at the dinner table. This fighter’s moves are world famous. With his “flying pressed churro” and “The Taco destruct Bodyslam”, no one wants to be on the end of this man’s plate, because the whole ring is this man’s dinner table and you just might be the appetiser.</p></div>").appendTo("#wrestlers");
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#chewpacrema2").show("slide", 1000);
        AjaxFunctionGetWrestler("Chewpacrema");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("Chewpacrema");
        });
    });
}

// *******************************************************
// * ----------- DISGRUNTLED CAREBEAR PAGE ------------- *
// *******************************************************
function DisgruntledCareBearPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="DisgruntledCareBear2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Disgruntled CareBear</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("#DisgruntledCareBear2").show("slide", 1000);
        $("<div class='wrestlerBio'><h2>Disgruntled CareBear Bio</h2><p>Care Bears Countdown, 4, 3, 2, 1 Who's that comin' from somewhere up in the sky? Moving fast and bright as a firefly Just when you think that trouble's gonna pounce Who's gonna be there when it really counts? Do the Care Bears Countdown And send a wish out through the air Just do the Care Bears Countdown Just when you need them they'll be there Don't be afraid when clouds are brewin' in your heart If you can dream just send a wish out in the dark And do the Care Bear's Countdown 5, 4, 3, 2, 1 </p></div>").appendTo("#wrestlers");
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#DisgruntledCareBear2").show("slide", 1000);
        AjaxFunctionGetWrestler("DisgruntledCareBear");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("DisgruntledCareBear");
        });
    });
}

// *******************************************************
// * ---------------- BEARBARIAN PAGE ------------------ *
// *******************************************************
function bearbarianPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="bearbarian2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Barbearian</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Barbearian Bio</h2><p>Living in the deepest, most darkest place in the woods live the Barbearian, one of the most heartless wrestlers to ever set foot, or claw in the ring. No one knows much of this ruthless fighter, except he has a great dislike for anything to do with the Care Bears. Legend has it that he ran away from home as a kid, after being forced to listen to the Care Bears theme tune many times, driving him insane with much hatred in his heart. Now sporting a bear costume that he claims to have gotten after slaying one of the bears, this man will not stop until all the bears and their cousins are set up as trophies on a mantlepiece. Him and Disgruntled Bear have a score to settle, where one shall stand, and the other will fall.</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#bearbarian2").show("slide", 1000);
        AjaxFunctionGetWrestler("Bearbarian");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("Bearbarian");
        });
    });
}

// *******************************************************
// * ------------ CRIMSON LIGHTENING PAGE -------------- *
// *******************************************************
function crimsonLighteningPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="crimsonLightening2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Crimson Lightening</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Crimson Lightening Bio</h2><p>Growing up in Alabama, Jean Stone learned to fight on the streets from the age of six, believing that fighting was the only way to live in this world. With her hair blazing a crimson red shine, and he strikes as fast as lightening, you’ll see why she has earned that name and title in the ring of Wrastlers. Seeking the top spot in the league, this woman will stop at nothing to prove what women are made of, which separates the girls from the boys. Her fighting style revolves around kickboxing and American wrestling, giving her a variety of attacks that would others to sleep, and then in a deep coma for about a month.</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#crimsonLightening2").show("slide", 1000);
        AjaxFunctionGetWrestler("CrimsonLightening");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("CrimsonLightening");
        });
    });
}

// *******************************************************
// * ----------------- DICKTATOE PAGE ------------------ *
// *******************************************************
function dicktatoePage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="dicktatoe2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Dicktatoe</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Dicktatoe Bio</h2><p>He alone, who owns the youth, gains the potato. Make the lie big, make it simple, keep saying it, and eventually they will potato it. The victor will never be asked if he potato the truth. Those who want to live, let them fight, and those who do not want to fight in this world of eternal potato do not deserve to live. Great liars are also great potatoes. Demoralize the enemy from within by surprise, terror, sabotage, potato. This is the war of the future. Words build bridges into unexplored potatoes. If you tell a big enough potato and tell it frequently enough, it will be believed. It is not truth that matters, but potato. I use emotion for the many and reserve reason for the potato.</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#dicktatoe2").show("slide", 1000);
        AjaxFunctionGetWrestler("Dicktatoe");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("Dicktatoe");
        });
    });
}

// *******************************************************
// * ------------------ GLADIS PAGE -------------------- *
// *******************************************************
function gladisPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="gladis2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Gladis</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div</div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Gladis Bio</h2><p>Gladis, aka the woman who has got the right stuff, used to be in the middleweight Women’s World Boxing Association. After fighting for so long in the league though, she got sick and tired of being thought as weaker than any of the men in the league. With brains and brawn that any woman or man could ever wish for, this gladiator knows what it takes to be at the top of the league, and won’t give it up without a fight. Her attacks are known as the gladiator smash, where she pulls herself back against the ropes and slingshots herself head first into the opponent’s back like a spear from ancient Greece. If you ever have a tag team match with this one, make sure you’re not on the receiving end of this woman’s attacks, even if you are on her side.</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#gladis2").show("slide", 1000);
        AjaxFunctionGetWrestler("Gladis");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("Gladis");
        });
    });
}

// *******************************************************
// * --------------- JONALD MCBOBALD PAGE -------------- *
// *******************************************************
function mcbobaldPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="mcbobald2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Jonald McBobald</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Jonald McBobald Bio</h2><p>Big Mac Quarter Pounder with Cheese Bacon Clubhouse Burger Double Quarter Pounder with Cheese Hamburger Cheeseburger Double Cheeseburger McDouble Artisan Grilled Chicken Sandwich Premium Buttermilk Crispy Chicken Deluxe Sandwich McChicken Filet-O-Fish McRib Chicken & Fish Chicken McNuggets Artisan Grilled Chicken Sandwich Premium Buttermilk Crispy Chicken Deluxe Sandwich McChicken Filet-O-Fish Premium Bacon Ranch Salad with Buttermilk Crispy Chicken Premium Bacon Ranch Salad with Grilled Chicken Premium Southwest Salad with Buttermilk Crispy Chicken Premium Southwest Salad with Grilled Chicken</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#mcbobald2").show("slide", 1000);
        AjaxFunctionGetWrestler("JonaldMcBobald");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("JonaldMcBobald");
        });
    });
}

// *******************************************************
// * ----------------- JACK ATTACK PAGE ---------------- *
// *******************************************************
function jackattackPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();

        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="jackattack2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Jack Attack</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Jack Attack Bio</h2><p>Jack Attack - The man with the game plan, and the fighting moves and muscles to back it up, this man is sported like a hero back home in England. After working on the roads with a jackhammer, this man wished for something more, and sacrificed everything to get there. Now that his dreams have come true as one of the best fighters in Wrastlers, this man has it all, fame, money and a nice car. If there is a weakness to this man’s fighting style, then it’s the problem he’s never seemed to get over at all. Talking to a pretty lady. If he’d ever get over this set back then he’d be a shoe in for the top spot in the league, but only time will tell if that will ever happen.</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#jackattack2").show("slide", 1000);
        AjaxFunctionGetWrestler("JackAttack");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("JackAttack");
        });
    });
}

// *******************************************************
// * ----------------- JUAN SINNA PAGE ----------------- *
// *******************************************************
function juansinnaPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="juansinna2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Juan Si Na</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Juan Si Na Bio</h2><p>El tiempo es ahora Su tiempo se ha terminado , mi tiempo es ahora Usted no me puede ver, mi tiempo es ahora Es la franquicia , el muchacho me shinin 'ahora Usted no puede ver a mí , a mi tiempo es ahora! Donde está la biblioteca?</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#juansinna2").show("slide", 1000);
        AjaxFunctionGetWrestler("JuanSiNa");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("JuanSiNa");
        });
    });
}

// *******************************************************
// * -------------- PSYCHO CIRCUS PAGE ----------------- *
// *******************************************************
function psychocircusPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="psychocircus2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Psycho Circus</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Psycho Circus Bio</h2><p>They say he was the offspring of the band KISS, others say that he was found in a crater of a fallen meteor, which would explain the complex skin that he has. Trust us when we say that isn’t makeup his face, he just turned up like this. Either way, this guy’s fighting style is one to witness, with his insane flexibility and expertise on locks and grapples, it’s no wonder that people run away from him, it’s like getting wrapped around and squeezed by a giant spider. No one knows if this man has any friends or family outside of the league, but when he’s asked about it, all he ever says is that the wrestlers in the ring are his family now, and that he has no plans to leave. We’re happy to have him here with us, but for our sake can he please just wear some proper underwear for just one match?!</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#psychocircus2").show("slide", 1000);
        AjaxFunctionGetWrestler("PsychoCircus");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("PsychoCircus");
        });
    });
}

// *******************************************************
// * --------------- RED-MISTRESS PAGE ----------------- *
// *******************************************************
function redmistressPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="redmistress2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Red Mistress</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Red-Mistress Bio</h2><p>Once an artist and a model, Laura was living the highlife of society. But looking for something more, she took up wrestling as a hobby, which then turned into a her whole world. She’s not a woman to be messed with!! She trains more than anyone, hangs out with friends both inside and out of the ring, and quells any fights with words and fists if necessary. Seeing this one doing a flying press into her opponent is liking watching a red arrow strike it’s target hard to the floor and with a whole arsenal of moves to follow, with speed and agility that makes trying to see her a blur, you’ll be seeing red cover the ring where no one could escape.</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#redmistress2").show("slide", 1000);
        AjaxFunctionGetWrestler("RedMistress");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("RedMistress");
        });
    });
}

// *******************************************************
// * ------------------ SILVER HORDE ------------------- *
// *******************************************************
function silverhordePage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="silverhorde2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Silver Horde</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Silver Horde Bio</h2><p>Good old Palpi knows how to fight more than anyone, especially being the oldest wrestler to date with many more miles left. This man should be legally retired from the sport, but because of how much wrestling has changed when he was in his prime, he’s set to make the standards rise again, before he falls down for another sleep. With his skinny body, weighing at only 60lbs, this man may look like a walking time bomb, but his acrobatics make him a hard one to catch. Many have run away from this man with fear of his fighting style, not just the effects of the amount of prunes he hate this morning that gives him a rumbly tummy.</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#silverhorde2").show("slide", 1000);
        AjaxFunctionGetWrestler("SilverHorde");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("SilverHorde");
        });
    });
}

// *******************************************************
// * ------------- MUSCLE MCCLELLAN PAGE --------------- *
// *******************************************************
function musclePage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="muscle2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Jon the Muscle McClellen</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Jon the Muscle Mcclellen Bio</h2><p>Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool Insert Edge Loop Tool </p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#muscle2").show("slide", 1000);
        AjaxFunctionGetWrestler("JonMuscleMcClellan");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("JonMuscleMcClellan");
        });
    });
}

// *******************************************************
// * ----------------- UNCLE MIDAS PAGE ---------------- *
// *******************************************************
function unclemidasPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="unclemidas2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Uncle Midas</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Uncle Midas Bio</h2><p>Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. Meer Geld fer ye Geld. </p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#unclemidas2").show("slide", 1000);
        AjaxFunctionGetWrestler("UncleMidas");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("UncleMidas");
        });
    });
}

// *******************************************************
// * ------------- WHISPERING DEATH PAGE --------------- *
// *******************************************************
function whisperingdeathPage() {
    $("#loginFormDiv").hide("fade", 1000);
    $("#wrestlers").hide("fade", 1000, function() {
        $("#wrestlers").remove();
        $('<div id="wrestlers"></div>').appendTo("main");
        $('<div id="whisperingdeath2" class="bigTrump"><img src="images/trumpcover.png" class="trumpcover"/><img src="images/trumpborder.png" class="trumpborder"/><img src="images/logo.png" class="minilogo"><div class="trumpinfo"><section class="name">Whispering Death</section><section class="strength">Strength:</section><section class= "perception">Perception:</section><section class="endurance">Endurance:</section><section class="charisma">Charisma:</section><section class="intelligence">Intelligence:</section><section class="agility">Agility:</section><section class="luck">Luck:</section></div></div>').appendTo("#wrestlers");
        $("<div class='wrestlerBio'><h2>Whispering Death Bio</h2><p>Known as “The Deadman” from the underworld, the Whispering Death made his way from the dark side of the ring. Quite literally since the lights weren’t working from his side, even though I fixed it, and where the hell was the mechanic, I called him ab… anyway, this fighter has no redeeming qualities when fighting in the ring. He isn’t above using chairs, hammers or other objects throne into the ring, but if there is one redeeming quality to this madman, it’s the hair. I mean look at it, as he soars into the ring, it’s always wet conditioned, styled, feathered and lethal, you don’t see it nowadays with other fighters, but how could you when someone get’s a good power drive to the face, or a good bodyslam.</p></div>").appendTo("#wrestlers");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $('<button class="commentBtn">Leave Review</button>').appendTo(".wrestlerBio");
        $(".wrestlerBio").show("slide", {
            direction: "right"
        }, 1000);
        $("#whisperingdeath2").show("slide", 1000);
		AjaxFunctionGetWrestler("WhisperingDeath");
        $(".commentBtn").click(function() {
            console.log("click");
            leaveReview("WhisperingDeath");
        });
    });

}

// *******************************************************
// * ------------- SLIDER ------------------------------ *
// *******************************************************

function leaveReview(w) {
    wrestler = w;
    console.log(wrestler);
	$('#commentHole').hide("fade", 1000);
    $('.wrestlerBio').hide("slide", {
        direction: "right"
    }, 1000, function() {
        $('<form name="reviewform" id="reviewform"><fieldset><legend id="formTitle">Leave Review</legend><div class="reviewText"><label for="reviewText" class="title">Write Review:</label><textarea id="reviewText" name="" rows="10" placeholder="Enter Text" required="required"></textarea></div><p>total available points  35 </p><div id="sliders"><div><label for="sSlider" class="title">Strength:</label><input disabled="disabled" type="text" class="value" id="sSlider" value="0" /><div class="slider">0</div></div><div><label for="pSlider" class="title">Perception:</label><input disabled="disabled" type="text" class="value" id="pSlider" value="0" /><div class="slider">0</div></div><div><label for="eSlider" class="title">Endurance:</label><input disabled="disabled" type="text" class="value" id="eSlider" value="0" /><div class="slider">0</div></div><div><label for="cSlider" class="title">Charisma:</label><input disabled="disabled" type="text" class="value" id="cSlider" value="0" /><div class="slider">0</div></div><div><label for="iSlider" class="title">Intelligence:</label><input disabled="disabled" type="text" class="value" id="iSlider" value="0" /><div class="slider">0</div></div><div><label for="aSlider" class="title">Agility:</label><input disabled="disabled" type="text" class="value" id="aSlider" value="0" /><div class="slider">0</div></div><div><label for="lSlider" class="title">Luck:</label><input disabled="disabled" type="text" class="value" id="lSlider" value="0" /><div class="slider">0</div></div></div><div id="total" class="total">0</div><div class="submit"><input type="button" value="Submit" id="reviewSubmit" class="buttons"></div></fieldset></form>').appendTo("#wrestlers");
        $("#reviewform").show("slide", {
            direction: "right"
        }, 1000);
        sliderAdjust();
        document.getElementById("reviewText").setAttribute("name", wrestler);
        $("#reviewSubmit").click(function() {
            console.log("Submit Clicked");
            AjaxFunctionSubmit(wrestler);
            $("#reviewform").hide("slide", {
                direction: "right"
            }, 1000, function() {
				$("#commentHole").show("fade", 1000);
                $(".wrestlerBio").show("slide", {
                    direction: "right"
                }, 1000, function(){
					$("#commentHole").remove();
					$("#SPECIALreview").remove();
					AjaxFunctionGetWrestler(wrestler);
				});
            });
        });
    });
}

function sliderAdjust() {

    var sliders = $("#sliders .slider");
    var availableTotal = 35;

    sliders.each(function() {

        $(this).empty().slider({

            value: 0,
            min: 0,
            max: 10,
            range: "max",
            step: 1,
            animate: 100,

            slide: function(event, ui) {

                // Get current total
                var total = 0;

                sliders.not(this).each(function() {
                    total += $(this).slider("option", "value");
                });

                var max = availableTotal - total;

                if (max - ui.value >= 0) {
                    // Need to do this because apparently jQ UI
                    // does not update value until this event completes
                    total += ui.value;
                    // console.log(max-ui.value);
                    $(this).siblings().val(ui.value);

                } else {
                    return false;
                }


                //get total sum of all points
                var sum = 0;
                $(".value").each(function() {
                    sum += +$(this).val();
                });
                $(".total").text(sum);

            }
        });
    });
}
// *******************************************************
// * ------------- PRINT REVIEW ------------------------ *
// *******************************************************
function PrintReview() {
    $('<div id="SPECIALreview"><section id="SPECIALs">' + Math.ceil(SPECIALarray[0]) + '</section><section id="SPECIALp">' + Math.ceil(SPECIALarray[1]) + '</section><section id="SPECIALe">' + Math.ceil(SPECIALarray[2]) + '</section><section id="SPECIALc">' + Math.ceil(SPECIALarray[3]) + '</section><section id="SPECIALi">' + Math.ceil(SPECIALarray[4]) + '</section><section id="SPECIALa">' + Math.ceil(SPECIALarray[5]) + '</section><section id="SPECIALl">' + Math.ceil(SPECIALarray[6]) + '</section></div>').appendTo("#wrestlers")
    $('<div id="commentHole"><p id="userReviews">User Reviews</p></div>').appendTo("#wrestlers");
	var i;
	for(i = 0; i < userComments.length ; i++ ){
		$('<div class="users">' + userComments[i] + '</div>').appendTo("#commentHole");
		$('<div class="comments">' + userComments[i+=1] + '</div>').appendTo("#commentHole");
	};
}

// *******************************************************
// * ------------- AJAX -------------------------------- *
// *******************************************************

function AjaxFunctionGetWrestler(w) {
    ajax("GET", "http://itsuite.it.brighton.ac.uk/js884/wrestle/php/getcomments.php?wname=" + w, null, CommentResponse);
};

function CommentResponse(xhr) {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            SPECIALarray = [];
            SPECIALarray.push(JSON.parse(response).special.s);
            SPECIALarray.push(JSON.parse(response).special.p);
            SPECIALarray.push(JSON.parse(response).special.e);
            SPECIALarray.push(JSON.parse(response).special.c);
            SPECIALarray.push(JSON.parse(response).special.i);
            SPECIALarray.push(JSON.parse(response).special.a);
            SPECIALarray.push(JSON.parse(response).special.l);
			userComments = [];
			console.log(JSON.parse(response).user.length);
			var i;
			for(i = 0; i < JSON.parse(response).user.length; i++){
				userComments.push(JSON.parse(response).user[i]);
				userComments.push(JSON.parse(response).comments[i]);
			}
			
			console.log(userComments);
			
            PrintReview();
        }
    }
};

function LoginResponse(xhr) {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            login = true;
            homePage();
        } else {
            whois = "";
        }
    }
};

function CheckResponse(xhr) {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            console.log(response);
            if (response.length > 2) {
                login = true;
                whois = JSON.parse(response).username;
                console.log(whois);
                homePage();
            }
        }
    }
};

function RegisterResponse(xhr) {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            console.log("suces");
            $("#conPassword").hide();
            $("#displayName").hide();
            $("#regSubmit").hide();
            $("#confirmTitle").hide();
            $("#displayTitle").hide();
            $("#logSubmit").show();
        }
    }
};

function ajax(method, url, content, response) {
    var xhr = null;
    if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    if (xhr != null) {
        xhr.onreadystatechange = function() {
            response(xhr);
        }
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(content);
    }
};

function AjaxFunctionLogout() {
    ajax("GET", "http://itsuite.it.brighton.ac.uk/js884/wrestle/php/logout.php", null, LogoutResponse);
};



function AjaxFunctionSubmit(w) {
    console.log("Ajax Fired");
	if(document.getElementById("total").textContent != 35){
		    console.log("Failed to Submit");
		return;
	}else{
    var comment = document.getElementById("reviewText").value;
    var strength = document.getElementById("sSlider").value;
    var perception = document.getElementById("pSlider").value;
    var endurance = document.getElementById("eSlider").value;
    var charisma = document.getElementById("cSlider").value;
    var intelligence = document.getElementById("iSlider").value;
    var agility = document.getElementById("aSlider").value;
    var luck = document.getElementById("lSlider").value;
    ajax("POST", "http://itsuite.it.brighton.ac.uk/js884/wrestle/php/submit.php", "uname=" + whois + "&wname=" + w + "&comment=" + comment + "&strength=" + strength + "&perception=" + perception + "&endurance=" + endurance + "&charisma=" + charisma + "&intelligence=" + intelligence + "&agility=" + agility + "&luck=" + luck, SubmitResponse);
	}
};

function AjaxFunctionLogin(user, pass) {
    ajax("POST", "http://itsuite.it.brighton.ac.uk/js884/wrestle/php/login.php", "uname=" + user + "&pword=" + pass, LoginResponse);
    whois = user;
    console.log(whois);
};

function AjaxFunctionRegister(user, pass, con, display) {
    if (pass != con) {
        document.forms["form"].elements["password"].value = "";
        document.forms["form"].elements["conPassword"].value = "";
        return;
    }

    ajax("POST", "http://itsuite.it.brighton.ac.uk/js884/wrestle/php/register.php", "uname=" + user + "&pword=" + pass + "&displayname=" + display, RegisterResponse);

    document.forms["form"].elements["password"].value = "";
    document.forms["form"].elements["conPassword"].value = "";
    document.forms["form"].elements["displayName"].value = "";
};

function AjaxFunctionCheckLog() {
    ajax("GET", "http://itsuite.it.brighton.ac.uk/js884/wrestle/php/getsession.php", null, CheckResponse);
};

function Response(xhr) {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var response = xhr.responseText;
			
        }
    }
};

function SubmitResponse(xhr) {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var response = xhr.responseText;
			
        }
    }
};

function LogoutResponse(xhr) {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var response = xhr.responseText;
            login = false;
            window.location.reload();
        }
    }
};

function restart() {
    window.location.reload();
};