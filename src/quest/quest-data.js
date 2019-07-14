const tellatrites = {
    id: 'tellarites',
    title: 'Conflict between the Tellarites and the Andorians',
    //image: 'monsters.jpg',  find appropriate pic
    description: `
    The federation has been asked to help mediate a conflict between the Tellarites 
    and the Andorians.  The heart of the dispute has to do with access to a small 
    dilithium mine, located on a desolate moon, that both groups claim as their own.  
    How will you resolve the conflict?
    `,
    choices: [{
        id: 'trade',
        description: 'Trade some of your dilithium',
        result: `
             The Tellarites don't actually care that much about the mine, they simply
             want to save face.  Aptly reading the situation, you trade the Tellarites
            some of your dilithium, and they agree to let the Andorians continue to 
            run the mine.
        `,
        dilithium: -6,
        vulcanNeed: false,
        toughNeed: false,
        instantDeath: false,
    }, {
        id: 'fight',
        description: 'Fight the Tellarites to the death!',
        result: `
            You decide to go rogue, and slaughter the Tellarite mining delegation, 
            killing them all. Unfortunately, this is Star Trek, and violence should be 
            avoided whenever possible.  For initiating the "Massacre of Barzan II," 
            (as the battle becomes known) you are hauled up before a tribunal, stripped
            of your rank, and sentenced to spend the rest of your days cleaning toilets
            at the Federation penal colony on Mitallus Prime.
        `,
        dilithium: 0,
        vulcanNeed: false,
        toughNeed: false,
        instantDeath: true,
    }, {
        id: 'mindmeld',
        description: 'Resolve the conflict with a Vulcan Mind Meld',
        result: `
            You have your Vulcan officer initiate a multi-party mind meld between the
            boss of the Tellarites and the Andorian Ambassador.  As a result of 
            newfound understandings between their respective peoples, the Andorians 
            agree to drop their ownership claim of the mine.
        `,
        dilithium: 0,
        vulcanNeed: true,
        toughNeed: false,
        instantDeath: false,
    }]
};

const klingons = {
    id: 'klingons',
    title: 'Rogue Klingon Bird of Prey',
    //image: 'monsters.jpg',  find appropriate pic
    description: `
    A federation delegation, consisting of your ship and crew and a diplomatic envoy of
    Betazoids, has been called to Edos to welcome the Edosian people as the newest
    Federation member planet.  As you drop out of warp and begin to maneuver into
    planetary orbit, your sensors detect a Klingon Bird of Prey moving up quickly behind
    your position.  Before you can react, the Klingon ship opens fire, causing only
    superficial damage with their first shot.  Now they are doubling back for a second
    strafing attack...  Red alert, shields up!
    `,
    choices: [{
        id: 'attack',
        description: 'Fight the Klingons',
        result: `
            With comendable quickness, you pilot you vessel behind a small moon, and then 
            stop and wait.  As the Klingon ship comes around, you fire a spread of photon
            torperdos, blasting the Bird of Prey.  It's a direct hit, the Klingon ship is 
            disabled.  You take the crew prisoners, and learn they are from a rogue Klingon
            faction that is opposed to the expansion of the Federation.  With the crisis averted,
            you procede to Edos and the membership ceremony begins.
        `,
        dilithium: 0,
        vulcanNeed: false,
        toughNeed: true,
        instantDeath: false,
    }, {
        id: 'flee',
        description: 'Opt for a tactical retreat',
        result: `
            You quickly warp out of the danger zone, unfortunately this leaves the Edosians vulnerable.
            The Klingons bombard the Edosian capital city, killing thousands.  While you and your 
            crew are safe, the Edosians are so deeply affected by by this catastrophe, they withdraw
            their Federation application.
        `,
        dilithium: 0,
        vulcanNeed: false,
        toughNeed: false,
        instantDeath: false,

    }, {
        id: 'negotiate',
        description: 'Attempt to Negotiate with the Klingons',
        result: `
            You hail the Klingons and attempt to explain that they are interfering with Federation
            diplomacy, in violation the of the peace treaty between the Klingon Empire and the
            Federation.  You learn the ship is being commanded by a Klingon named Kruge, who has
            gone rogue and is wanted by the Klingon Empire.   After informing the Klingon Empire
            you have located Kruge, they quickly dispatch more ships and destroy the renegade faction.
        `,
        dilithium: 0,
        vulcanNeed: false,
        toughNeed: false,
        instantDeath: false,
    }]

};

const quests = [tellatrites, klingons];

export default quests;