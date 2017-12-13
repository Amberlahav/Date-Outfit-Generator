

// defining arrays:
const tops = {
    men: [
        // men, cold, fancy:
        {
            name: 'suitJacket',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy',
            // url: 'https://picsum.photos/500/400'
            url: 'images/suitJacket.jpg'

        },
        {
            name: 'suitJacket2',
            url: 'images/suitJacket2.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'suitJacket3',
            url: 'images/suitJacket3.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy',
            //  url: 'https://picsum.photos/500/400'
        },
        // men, cold, casual:
        {
            name: 'plaidShirt',
            url: 'images/plaidShirt.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'leatherJacket',
            url: 'images/leatherJacket.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'jeanShirt',
            url: 'images/jeanShirt.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        // men, cold, very casual:
        {
            name: 'sweatshirt',
            url: 'images/sweatshirt.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'crewNeck',
            url: 'images/crewNeck.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'longSleeveTop',
            url: 'images/longSleeveTop.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        // men, hot, fancy:
        {
            name: 'collaredShirt',
            url: 'images/collaredShirt.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'collaredTee1',
            url: 'images/collaredTee1.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'collaredTee2',
            url: 'images/collaredTee2.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        // men, hot, casual:
        {
            name: 'baseballTee',
            url: 'images/baseballTee.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'fittedTee',
            url: 'images/fittedTee.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'teeShirt',
            url: 'images/teeShirt.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual',
            // url: 'https://picsum.photos/500/400'

        },
        // men, hot, very casual:
        {
            name: 'wifeBeater',
            url: 'images/wifeBeater.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'vNeck',
            url: 'images/vNeck.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'plainWhiteTee',
            url: 'images/plainWhiteTee.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        }

    ],

    // women, cold, fancy:
    women: [
        {
            name: 'blouse',
            url: 'images/blouse.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'blouse2',
            url: 'images/blouse2.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'frillyTop',
            url: 'images/frillyTop.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },

        // women, cold, casual:
        {
            name: 'offShoulder',
            url: 'images/offShoulder.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'leatherJacket2',
            url: 'images/leatherJacket2.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'sweaterCropped',
            url: 'images/sweaterCropped.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        // women, cold, very casual:
        {
            name: 'poncho',
            url: 'images/poncho.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'hoodie',
            url: 'images/hoodie.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'zipUp',
            url: 'images/zipUp.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },

        // women, hot, fancy:
        {
            name: 'laceTop',
            url: 'images/laceTop.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'flowyTop',
            url: 'images/flowyTop.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'peplumTop',
            url: 'images/peplumTop.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy',
            // url: 'https://picsum.photos/500/400'
        },
        // women, hot, casual:
        {
            name: 'offShoulderTee',
            url: 'images/offShoulderTee.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'whiteTank',
            url: 'images/whiteTank.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'tankTop',
            url: 'images/tankTop.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        // women, hot, very casual:

        {
            name: 'plainTee',
            url: 'images/plainTee.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'spaghettiStrap',
            url: 'images/spaghettiStrap.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'plainVNeck',
            url: 'images/plainVNeck.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photlightos/500/400'
        }
    ],

    either: [

        // men, cold, fancy:
        {
            name: 'suitJacket',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy',
            // url: 'https://picsum.photos/500/400'
            url: 'images/suitJacket.jpg'

        },
        {
            name: 'suitJacket2',
            url: 'images/suitJacket2.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'suitJacket3',
            url: 'images/suitJacket3.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy',
            //  url: 'https://picsum.photos/500/400'
        },
        // men, cold, casual:
        {
            name: 'plaidShirt',
            url: 'images/plaidShirt.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'leatherJacket',
            url: 'images/leatherJacket.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'jeanShirt',
            url: 'images/jeanShirt.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        // men, cold, very casual:
        {
            name: 'sweatshirt',
            url: 'images/sweatshirt.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'crewNeck',
            url: 'images/crewNeck.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'longSleeveTop',
            url: 'images/longSleeveTop.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        // men, hot, fancy:
        {
            name: 'collaredShirt',
            url: 'images/collaredShirt.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'collaredTee1',
            url: 'images/collaredTee1.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'collaredTee2',
            url: 'images/collaredTee2.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        // men, hot, casual:
        {
            name: 'baseballTee',
            url: 'images/baseballTee.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'fittedTee',
            url: 'images/fittedTee.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'teeShirt',
            url: 'images/teeShirt.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual',
            // url: 'https://picsum.photos/500/400'

        },
        // men, hot, very casual:
        {
            name: 'wifeBeater',
            url: 'images/wifeBeater.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'vNeck',
            url: 'images/vNeck.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'plainWhiteTee',
            url: 'images/plainWhiteTee.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        // 
        {
            name: 'blouse',
            url: 'images/blouse.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'blouse2',
            url: 'images/blouse2.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'frillyTop',
            url: 'images/frillyTop.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },

        // women, cold, casual:
        {
            name: 'offShoulder',
            url: 'images/offShoulder.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'leatherJacket2',
            url: 'images/leatherJacket2.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'sweaterCropped',
            url: 'images/sweaterCropped.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        // women, cold, very casual:
        {
            name: 'poncho',
            url: 'images/poncho.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'hoodie',
            url: 'images/hoodie.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'zipUp',
            url: 'images/zipUp.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },

        // women, hot, fancy:
        {
            name: 'laceTop',
            url: 'images/laceTop.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'flowyTop',
            url: 'images/flowyTop.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'peplumTop',
            url: 'images/peplumTop.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy',
            // url: 'https://picsum.photos/500/400'
        },
        // women, hot, casual:
        {
            name: 'offShoulderTee',
            url: 'images/offShoulderTee.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'whiteTank',
            url: 'images/whiteTank.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'tankTop',
            url: 'images/tankTop.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        // women, hot, very casual:

        {
            name: 'plainTee',
            url: 'images/plainTee.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'spaghettiStrap',
            url: 'images/spaghettiStrap.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'plainVNeck',
            url: 'images/plainVNeck.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photlightos/500/400'
        }
    ]

};


const bottoms = {
    // men, cold, fancy:
    men: [
        {
            name: 'dressPants',
            url: 'images/dressPants.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'dressPants1',
            url: 'images/dressPants1.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'dressPants2',
            url: 'images/dressPants2.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        // men, cold, casual:
        {
            name: 'jeans',
            url: 'images/jeans.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'lightJeans',
            url: 'images/lightJeans.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'blackJeans',
            url: 'images/blackJeans.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        // men, cold, very casual:
        {
            name: 'sweats1',
            url: 'images/sweats1.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'sweats2',
            url: 'images/sweats2.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCassual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'adidasPants',
            url: 'images/adidasPants.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        // men, hot, fancy:
        {
            name: 'dressPants3',
            url: 'images/dressPants3.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'dressPantsGrey',
            url: 'images/dressPantsGrey.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'dressPantsLight',
            url: 'images/dressPantsLight.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        // men, hot, casual:
        {
            name: 'croppedJeans',
            url: 'images/croppedJeans.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'croppedLightJeans',
            url: 'images/croppedLightJeans.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'khakiShorts',
            url: 'images/khakiShorts.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        // men, hot, very casual:
        {
            name: 'croppedSweats',
            url: 'images/croppedSweats.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'bballShorts',
            url: 'images/bballShorts.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'bballShorts2',
            url: 'images/bballShorts2.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        }
    ],
    // women, cold, fancy:
    women: [
        {
            name: 'fancySkirtTights',
            url: 'images/fancySkirtTights.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'fancyPants',
            url: 'images/fancyPants.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'fancySkirtTights2',
            url: 'images/fancySkirtTights2.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },

        // women, cold, casual:
        {
            name: 'darkJeans',
            url: 'images/darkJeans.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'lightJeans2',
            url: 'images/lightJeans2.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'casualSkirtTights',
            url: 'images/casualSkirtTights.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        // women, cold, very casual:
        {
            name: 'sweatPants',
            url: 'images/sweatPants.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'yogaPants',
            url: 'images/yogaPants.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'leggings',
            url: 'images/leggings.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },

        // women, hot, fancy:
        {
            name: 'fancySkirt1',
            url: 'images/fancySkirt1.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'fancyLongerSkirt',
            url: 'images/fancyLongerSkirt.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'fancySkirt2',
            url: 'images/fancySkirt2.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        // women, hot, casual:
        {
            name: 'jeanSkirt',
            url: 'images/jeanSkirt.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'blackShorts',
            url: 'images/blackShorts.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'jeanShorts',
            url: 'images/jeanShorts.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        // women, hot, very casual:

        {
            name: 'croppedLeggings',
            url: 'images/croppedLeggings.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'workoutShorts',
            url: 'images/workoutShorts.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'casualShorts',
            url: 'images/casualShorts.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        }
    ],
    either: [
        {
            name: 'dressPants',
            url: 'images/dressPants.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'dressPants1',
            url: 'images/dressPants1.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'dressPants2',
            url: 'images/dressPants2.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        // men, cold, casual:
        {
            name: 'jeans',
            url: 'images/jeans.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'lightJeans',
            url: 'images/lightJeans.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'blackJeans',
            url: 'images/blackJeans.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        // men, cold, very casual:
        {
            name: 'sweats1',
            url: 'images/sweats1.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'sweats2',
            url: 'images/sweats2.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCassual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'adidasPants',
            url: 'images/adidasPants.jpg',
            clothingSection: 'men',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        // men, hot, fancy:
        {
            name: 'dressPants3',
            url: 'images/dressPants3.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'dressPantsGrey',
            url: 'images/dressPantsGrey.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'dressPantsLight',
            url: 'images/dressPantsLight.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        // men, hot, casual:
        {
            name: 'croppedJeans',
            url: 'images/croppedJeans.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'croppedLightJeans',
            url: 'images/croppedLightJeans.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        {
            name: 'khakiShorts',
            url: 'images/khakiShorts.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'

        },
        // men, hot, very casual:
        {
            name: 'croppedSweats',
            url: 'images/croppedSweats.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'bballShorts',
            url: 'images/bballShorts.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'bballShorts2',
            url: 'images/bballShorts2.jpg',
            clothingSection: 'men',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'fancySkirtTights',
            url: 'images/fancySkirtTights.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'fancyPants',
            url: 'images/fancyPants.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'fancySkirtTights2',
            url: 'images/fancySkirtTights2.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },

        // women, cold, casual:
        {
            name: 'darkJeans',
            url: 'images/darkJeans.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'lightJeans2',
            url: 'images/lightJeans2.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'casualSkirtTights',
            url: 'images/casualSkirtTights.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        // women, cold, very casual:
        {
            name: 'sweatPants',
            url: 'images/sweatPants.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'yogaPants',
            url: 'images/yogaPants.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'leggings',
            url: 'images/leggings.jpg',
            clothingSection: 'women',
            weather: 'cold',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },

        // women, hot, fancy:
        {
            name: 'fancySkirt1',
            url: 'images/fancySkirt1.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'fancyLongerSkirt',
            url: 'images/fancyLongerSkirt.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'fancySkirt2',
            url: 'images/fancySkirt2.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'fancy'
            // url: 'https://picsum.photos/500/400'
        },
        // women, hot, casual:
        {
            name: 'jeanSkirt',
            url: 'images/jeanSkirt.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'blackShorts',
            url: 'images/blackShorts.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'jeanShorts',
            url: 'images/jeanShorts.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'casual'
            // url: 'https://picsum.photos/500/400'
        },
        // women, hot, very casual:

        {
            name: 'croppedLeggings',
            url: 'images/croppedLeggings.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'workoutShorts',
            url: 'images/workoutShorts.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        },
        {
            name: 'casualShorts',
            url: 'images/casualShorts.jpg',
            clothingSection: 'women',
            weather: 'hot',
            dateType: 'veryCasual'
            // url: 'https://picsum.photos/500/400'
        }
    ]
}


const shoes = []