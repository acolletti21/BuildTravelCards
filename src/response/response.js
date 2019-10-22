const response = [
    {
        name: 'Decadent Week in Cape Town',
        id: 0,
        image: 'cape-town.jpg',
        dateFrom: 'Oct 13th 2019',
        dateTo: 'Oct 18th 2019',
        guests: 4,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Relax in Maui',
        id: 1,
        image: 'bali.jpg',
        dateFrom: 'Oct 25th 2019',
        dateTo: 'Oct 27th 2019',
        guests: 2,
        category: 'relaxing',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Weekend in Vegas',
        id: 2,
        image: 'vegas.jpg',
        dateFrom: 'May 7th 2020',
        dateTo: 'May 10th 2020',
        guests: 2,
        category: 'weekend break',
        copy:
            'Next level vexillologist taiyaki migas cloud bread post-ironic. Offal selvage gastropub bitters.'
    },
    {
        name: 'Hiking in the Peaks',
        id: 3,
        image: 'peaks.jpg',
        dateFrom: 'July 6th 2020',
        dateTo: 'July 10th 2020',
        guests: 2,
        category: 'adventure',
        copy: 'Helvetica umami selvage. Locavore gluten-free tacos, small batch banh mi shoreditch.'
    },
    {
        name: 'Relaxing in Punta Cana',
        id: 4,
        image: 'puntacana.jpg',
        dateFrom: 'Aug 7th 2020',
        dateTo: 'Aug 9th 2020',
        guests: 2,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Weekend at an Ice Hotel',
        id: 5,
        image: 'icehotel.jpg',
        dateFrom: 'Jan 14th 2020',
        dateTo: 'Jan 16th 2020',
        guests: 4,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Best of Rio de Janeiro',
        id: 6,
        image: 'rio.jpg',
        dateFrom: 'Jan 14th 2020',
        dateTo: 'Jan 21th 2020',
        guests: 3,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Midsummer in Helsinki',
        id: 7,
        image: 'helsinki.jpg',
        dateFrom: 'June 19th 2020',
        dateTo: 'June 21th 2020',
        guests: 2,
        category: 'weekend break',
        copy:
            'Next level vexillologist taiyaki migas cloud bread post-ironic. Offal selvage gastropub bitters.'
    },
    {
        name: 'Gardens of Damyang',
        id: 8,
        image: 'korea.jpg',
        dateFrom: 'May 22nd 2020',
        dateTo: 'May 30th 2020',
        guests: 2,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'India',
        id: 9,
        image: 'india.jpg',
        dateFrom: 'Dec 2nd 2019',
        dateTo: 'Feb 9th 2020',
        guests: 1,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'A Weekend in Vancouver',
        id: 10,
        image: 'vancouver.jpg',
        dateFrom: 'Oct 5st 2019',
        dateTo: 'Oct 8st 2019',
        guests: 2,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Antwerpen',
        id: 11,
        image: 'antwerpen.jpg',
        dateFrom: 'March 2nd 2020',
        dateTo: 'March 4th 2020',
        guests: 2,
        category: 'weekend trip',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Decadent Week in Cape Town',
        id: 12,
        image: 'cape-town.jpg',
        dateFrom: 'Oct 13th 2019',
        dateTo: 'Oct 18th 2019',
        guests: 4,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'A Weekend in Boston',
        id: 13,
        image: 'boston.jpg',
        dateFrom: 'Oct 4th 2019',
        dateTo: 'Oct 6th 2019',
        guests: 3,
        category: 'family, weekend break',
        copy: 'Take a Duck Boat ride, shop at Faneuil Hall, or maybe hit up a Bruins game.'
    },
    {
        name: ' Amazing Week in Bali',
        id: 14,
        image: 'bali.jpg',
        dateFrom: 'Oct 16th 2019',
        dateTo: 'Oct 22th 2019',
        guests: 4,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'The Atlanta Experience',
        id: 15,
        image: 'atlanta.jpg',
        dateFrom: 'Oct 24th 2019',
        dateTo: 'Oct 27th 2019',
        guests: 2,
        category: 'long weekend',
        copy:
            'Enjoy one the greatest gems of the south, Atlanta, GA, for a spooky Halloween weekend.'
    },
    {
        name: 'Sculpture Park',
        id: 16,
        image: 'sculpturePark.jpg',
        dateFrom: 'Oct 27th 2019',
        dateTo: 'Spt 03th 2019',
        guests: 1,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Meeting Ancestors at Serra da Capivara National Park',
        id: 17,
        image: 'serraDaCapivara.jpg',
        dateFrom: 'Oct 16th 2019',
        dateTo: 'Oct 30th 2019',
        guests: 4,
        category: 'World Heritage Site',
        copy:
            'Meet the largest and oldest concentration of prehistoric sites in the Americas. Sítio do Meio has many prehistoric paintings.'
    },
    {
        name: 'Pittsburgh',
        id: 18,
        image: '',
        dateFrom: 'Dec 15th 2019',
        dateTo: 'Dec 18th 2019',
        guests: 1,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Legoland Germany',
        id: 19,
        image: 'legoland.jpg',
        dateFrom: 'Oct 06th 2019',
        dateTo: 'Oct 20th 2019',
        guests: 4,
        category: 'family',
        copy:
            'Teamwork of the whole family is required – this is the only chance to frustrate the plans of the villainous pharaoh…'
    },
    {
        name: 'Weekend in Vegas',
        id: 20,
        image: 'vegas.jpg',
        dateFrom: 'May 7th 2020',
        dateTo: 'May 10th 2020',
        guests: 2,
        category: 'weekend break',
        copy:
            'Next level vexillologist taiyaki migas cloud bread post-ironic. Offal selvage gastropub bitters.'
    },
    {
        name: 'Hiking in the Peaks',
        id: 21,
        image: 'peaks.jpg',
        dateFrom: 'July 6th 2020',
        dateTo: 'July 10th 2020',
        guests: 2,
        category: 'adventure',
        copy: 'Helvetica umami selvage. Locavore gluten-free tacos, small batch banh mi shoreditch.'
    },
    {
        name: 'Family Day Out',
        id: 22,
        image: 'cliff.jpg',
        dateFrom: 'Feb 12th 2020',
        dateTo: 'Feb 15th 2020',
        guests: 4,
        category: 'family',
        copy: 'Air plant tattooed schlitz pinterest heirloom. Knausgaard gastropub chartreuse.'
    },
    {
        name: 'Relaxing in Punta Cana',
        id: 23,
        image: 'puntacana.jpg',
        dateFrom: 'Aug 7th 2020',
        dateTo: 'Aug 9th 2020',
        guests: 2,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Celebration in New York',
        id: 24,
        image: 'newyork.jpeg',
        dateFrom: 'Dec 7th 2020',
        dateTo: 'Dec 9th 2020',
        guests: 2,
        category: 'celebration',
        copy: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.'
    },
    {
        name: 'Tettegouche State Park',
        id: 25,
        image: 'tettegouche.jpg',
        dateFrom: 'Sept 28th 2019',
        dateTo: 'Sept 28th 2019',
        guests: 1,
        category: 'State Park',
        copy:
            'Meet the largest and oldest concentration of prehistoric sites in the Americas. Sítio do Meio has many prehistoric paintings.'
    },
    {
        name: 'Vacay in Mauritius',
        id: 26,
        image: 'mauritius.jpg',
        dateFrom: 'Oct 13th 2019',
        dateTo: 'Oct 18th 2019',
        guests: 4,
        category: 'family',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Japan Adventure',
        id: 27,
        image: 'japan.jpg',
        dateFrom: 'Oct 8th 2019',
        dateTo: 'Oct 14th 2019',
        guests: 5,
        category: 'Adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Meeting Florianopolis',
        id: 28,
        image: 'florianopolis.jpg',
        dateFrom: 'Oct 16th 2019',
        dateTo: 'Oct 30th 2019',
        guests: 4,
        category: 'weekend trip',
        copy:
            'is the capital and second largest city of the state of Santa Catarina, in the South region of Brazil. The city encompasses Santa Catarina Island and surrounding small islands, as well as part of the mainland'
    },
    {
        name: 'Weekend in Moscow',
        id: 29,
        image: 'moscow.jpg',
        dateFrom: 'Oct 18th 2019',
        dateTo: 'Oct 21th 2019',
        guests: 2,
        category: 'weekend break',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Weekend in Mon Cham',
        id: 30,
        image: 'moncham.jpg',
        dateFrom: 'Nov 14th 2019',
        dateTo: 'Nov 16th 2019',
        guests: 5,
        category: 'weekend trip',
        copy: 'Mon Cham sits on top of a small mountain'
    },
    {
        name: 'Trecking in Kasol',
        id: 31,
        image: 'trek.jpg',
        dateFrom: 'Oct 24th 2019',
        dateTo: 'Oct 26th 2019',
        guests: 5,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'Spa Day at the Blue Lagoon in Iceland',
        id: 32,
        image: 'iceland.jpg',
        dateFrom: 'Oct 3rd 2020',
        dateTo: 'Oct 10th 2020',
        guests: 4,
        category: 'family',
        copy:
            "Argentina's capital, Buenos Aires is the second largest urban area in South America, full of great tourist attractions, museums, restaurants."
    },
    {
        name: 'Weeked in Japan',
        id: 33,
        image: 'shirakawago.jpg',
        dateFrom: 'Dec 28th 2019',
        dateTo: 'Jan 2th 2020',
        guests: 5,
        category: 'family',
        copy:
            'Shirakawa is a mountain village located in far northern Gifu Prefecture, bordering Ishikawa Prefecture and Toyama Prefecture on the Ryōhaku Mountains.'
    },
    {
        name: 'Adventure in Ponta Negra - Rio Grande do Norte',
        id: 34,
        image: 'pontanegra.jpg',
        dateFrom: 'Oct 10th 2019',
        dateTo: 'Nov 10th 2019',
        guests: 5,
        category: 'adventure',
        copy:
            'Ponta Negra  is a beach and neighborhood located in the Brazilian city of Natal, the capital of the state of Rio Grande do Norte. Located in the extreme south of the beach is the Morro do Careca, a large dune and a landmark of the city.'
    },
    {
        name: 'Empire State Building',
        id: 35,
        image: 'empire-state-building.jpeg',
        dateFrom: 'Nov 14th 2019',
        dateTo: 'Nov 15th 2019',
        guests: 2,
        category: 'family',
        copy:
            'The Empire State Building has an amazing observation deck to look past New York and into Northern New Jersey while admiring all the surrondings that the concrete jungle has to offer.'
    },
    {
        name: 'A Week In Cancun',
        id: 36,
        image: 'Cancun.jpg',
        dateFrom: 'May 1nd 2020',
        dateTo: 'May 7th 2020',
        guests: 2,
        category: 'adventure',
        copy:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a maximus dolor. Sed iaculis luctus metus a mattis.'
    },
    {
        name: 'New Years Eve in Singapore',
        id: 37,
        image: 'singapore.jpg',
        dateFrom: 'December 31st 2019',
        dateTo: 'January 1st 2020',
        guests: 5,
        category: 'family',
        copy:
            'End 2019 with a party you’ll not soon forget! The Marina Bay Singapore Countdown returns, to usher in the new year with fireworks displays lighting up the night sky alongside a host of exciting activities on the streets.'
    },
    {
        name: 'Drinks in the Windy City',
        id: 38,
        image: 'chicago.jpg',
        dateFrom: 'Nov 1nd 2020',
        dateTo: 'Dec 7th 2020',
        guests: 6,
        category: 'celebration',
        copy:
            'King of Cups - This new cocktail bar in Lincoln Park has an eye-popping royalty-themed interior and 20 unique drinks on the opening menu to sip on. Drinks named after various “kings and queens”.'
    },
    {
        name: 'Cave Exploring in Kentucky',
        id: 39,
        image: 'mammoth.jpg',
        dateFrom: 'May 1nd 2020',
        dateTo: 'May 7th 2020',
        guests: 4,
        category: 'state park',
        copy:
            'Mammoth Cave National Park preserves the cave system and a part of the Green River valley and hilly country of south central Kentucky. This is the worlds longest known cave system, with more than 400 miles (643 km) explored.'
    },
    {
        name: 'Celebrate in Mexico City',
        id: 40,
        image: 'mexico.jpg',
        dateFrom: 'Sept 12th 2020',
        dateTo: 'Septh 17th 2020',
        guests: 8,
        category: 'celebration',
        copy:
            'Enjoy Mexican independance day in historic CDMX. Experience the culture, history, and beautiful weather while dining on local fare.'
    }
]

export default response
