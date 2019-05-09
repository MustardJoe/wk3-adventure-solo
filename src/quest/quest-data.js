const tellatrites = {
    id: 'tellarites',
    title: 'Conflict between the Tellarite and the Andorians',
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
             want to save face.  Aptly reading th situation, you trade the Tellarites
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
            You decide to go rouge, and slaughter the Tellarite mining delegation, 
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

const quests = [tellatrites];

export default quests;