import jack from '../images/jack1.jpg';
import partners from '../images/partners_website.PNG';
import jackHead from '../images/team/jack_I2I.jpeg';
import aidanHead from '../images/team/aidan_I2I.jpeg'
import ciaranHead from '../images/team/ciaran_I2I.jpeg'
import unknownRower from '../images/team/unknown_rower.png';
import simon from '../images/team/Simon-Rowell.png';
import guy from '../images/team/guy_hall.jpg';
import rannoch from '../images/team/rannoch.jpg';
import InternalBoat from '../images/boat_internal.png';
import route2 from '../images/route1.png';
import route1 from '../images/route2.jpg';
import route3 from '../images/stage3.png';
import sponsor from '../images/sponsors/forward-emphasis.jpg';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    aboutMe: {
        title: 'About Me',
        image: jack,
        profile: "My name is Jack Norris - a 26 year old endurance sport enthusiat from Belfast, Ireland.",
        details: [
            {
                title: 'Who Am I?',
                paragraph: 'I am a 26-year-old investment analyst from Ireland currently living in Toronto, Canada. My endurance journey started with a half Ironman and Ultra marathon in 2018 during my final year at university and progressed to a full Ironman the year after. In April 2023, I will be running the Marathon des Sables - a 250 km self-supported stage race in the Sahara desert. ',
                description: 'The Man Behind the Madness',
            },
            {
                title: 'Why Am I Doing This?',
                paragraph: 'I have always had a passion for adventure and find myself captivated by feats of endurance that I have witnessed in documentaries and read about in books. I view ocean rowing as the ultimate test of endurance and in my opinion, there is no greater prize than doing something that had never been done before. ',
            },
            // {
            //     title: 'Where Did I Get My Inspiration?',
            //     paragraph: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
            // },
            // {
            //     title: 'Why Should You Care?',
            //     paragraph: 'Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
            // },
        ],
    },
    partner: {
        title: 'Our Partners',
        image: partners,
        profile: "We are collaborating with industry leaders for tourism in Ireland and Itlay. We are also working with vital charities for our Oceans and mental health organisations.",
        details: [
            {
                title: 'What industries will we work with?',
                paragraph: 'We intend to work with a series of partners to help generate more exposure for our content. We will collaborate with both Tourism Ireland and Tourism Portugal to showcase the beautiful countries we are fortunate enough to row alongside, while promoting our efforts.',
            },
            {
                title: 'How will we promote content?',
                paragraph: 'We will predominantly promote our content via social media and through our website, with a primary focus on Instagram and Facebook.',
            },
            {
                title: 'How will we promote ocean sustainability?',
                paragraph: 'In addition to this we will be working with both Oceana and ORCA to promote the sustainability of our oceans and raising money for this cause.',
            },
        ],
    },
    theTeam: {
        title: 'The Team',
        subTitleRowers: 'The Rowers',
        subtitleJourney: 'The Journey',
        subtitleSocial: 'The Social',
        rowers: [
            {
                name: 'Jack Norris',
                image: jackHead,
                role: 'Rower One - Team Captain',
                description: 'A 26-year-old investment analyst from Ireland currently living in Toronto, Canada. My endurance journey started with a half Ironman and Ultra marathon in 2018 during my final year at university and progressed to a full Ironman the year after. In April 2023, I will be running the Marathon des Sables - a 250 km self-supported stage race in the Sahara desert. ',
            },
            {
                name: `Aidan O'Reilly`,
                image: aidanHead,
                role: 'Rower Two',
                description: '',
            },
            {
                name: `Ciarán Breslin`,
                image: ciaranHead,
                role: 'Rower Three',
                description: '',
             },
            {
                name: `Rower Four`,
                image: unknownRower,
                role: 'To Be Announced...',
                description: '',
            },
        ],
        journey: [
            {
                name: 'Rannoch Adventures',
                image: rannoch,
                role: 'Boat builders & Adventure consultants',
                description: 'Rannoch will be supplying the boat and advising on the adventure, they are the best in the business and have worked with many crews on bespoke expeditions like ours.',
            },
            {
                name: 'Simon Rowell',
                image: simon,
                role: 'Meterologist',
                description: 'Simon truly is one of the best in the world at what he does. He has sailed around the world himself and functioned as a navigator for round the world sailing, expeditions, transatlantic rows and in his current role as chief navigator for Olympic Team GB Sailing. Simon has carefully planned our route and will provide real time support during the expedition.',
            },
        ],
        social: [
            {
                name: 'Guy Hall',
                image: guy,
                role: 'Social Media Manager',
                description: 'Guy manages the social media and content for Ting Mobile at Tucows and is an avid outdoorsman. We recognize the importance of a profile in raising awareness for our sponsors and our cause, and Guy will be documenting the entire journey.',
            },  
        ]
    },
    theExpedition: {
        title: 'The Expedition',
        profile: 'In 2025, we will attempt to do something that has never been done before, row from Belfast to Rome. Our crew of four will row the 2,700-mile journey, facing tempestuous seas, powered by nothing but human strength and will power. We will not set foot on land until our arrival in Rome and will be eating, sleeping and living on our 28 ft boat for 2 - 3 months. Our team of four will row in pairs, in 2 hours rotating shifts (2 hours on/2 hours off), day and night for the entirety of the expedition. While one pair rows the other prepares food, monitors the navigation and catches little more than an hour of sleep before returning to the oars. This feat has never been achieved before and, for portions of the expedition, we will be navigating completely uncharted waters as we set 3 Guinness World Records.',
        image: InternalBoat,
        imageTitle: 'We will be rowing in Rannoch Adventures R45 ocean rowing boat',
        stages: [
            {
                stage: 'Stage One',
                leg: 'To the Atlantic',
                image: route1,
                description: 'The route can be characterized by three broad stages, each with their own unique challenges. Stage one from Ireland to the top of Biscay will require a high-pressure system emanating from the top of the Irish sea to assist the boat down to Biscay. This typically occurs three times every summer and is highlighted below in red.'
            },
            {
                stage: 'Stage Two',
                leg: 'The Cape',
                image: route2,
                description: 'The route can be characterized by three broad stages, each with their own unique challenges. Stage one from Ireland to the top of Biscay will require a high-pressure system emanating from the top of the Irish sea to assist the boat down to Biscay. This typically occurs three times every summer and is highlighted below in red.'
            },
            {
                stage: 'Stage Three',
                leg: 'The Gibraltar strait to Rome',
                image: route3,
                description: 'The Gibraltar Strait will require an opportunistic weather window to avoid the wrath of the famous levanter wind which blows out of the Med. Once we secure a solid window, we will make a strong push to get through the strait before the levant blows again. Our journey through the Mediterranean will be broken into smaller surges making the most of the weather windows. The weather in the Med is sporadic and often unfavorable. Our course will see us hug the coast before shooting between Sardinia and Corsica onto Rome.'
            },
        ],
        details: [
            {
                title: 'How will we survive?',
                paragraph: 'We will carry our food, kit and other supplies underneath in the hull. The team will take turns sleeping in pairs in the 6 foot long, 4 feet tall cabin when the others row. In the two hours each pair has off the oars they will be tasked with preparing food for the team and grabbing just over an hour of sleep.',
            },
            {
                title: 'How will we navigate?',
                paragraph: 'The Boat is simple in its design, but it is robust. All the navigational equipment will be inside the rear cabin, powered by a singular solar panel on the roof.',
            },
            {
                title: 'What is the boat’s design?',
                paragraph: 'The boat is made of carbon fiber and has dimensions of 28 x 5.7 x 5.1 feet.',
            },
            {
                title: 'What happens during storms?',
                paragraph: 'With supplies in the hull, the boat is naturally ‘self righting’ and completely watertight, this means that in a storm we can batten down the hatches and safely weather any capsizes.',
            },
        ],
    },
    ourSponsors: {
        title: 'Our Sponsors',
        tagline: 'The duration of this expedition creates value for sponsors',
        image: sponsor,
        profile: "Sponsors will get their logo printed on the boat in a prominent position, this logo will be featured in our social media posts and in news articles and blogs that will document the event. We understand the importance of prominence and will not drown out your logo amid a sea of others, we intend to have a concentrated group of relevant sponsors so we may dedicate the required attention to each.",
        sponsorDesc0: "Forward Emphasis International is a leader in the Irish Business Process Outsourcing sector and specialises in the delivery of customer contact and complex processing solutions for the Financial Services Industry.",
        sponsorDesc1: "FEI relocated from Belfast to Inishowen in 2000, establishing its main service centre in Malin Head, transforming a previous Fruit of the Loom factory into what has become one of Ireland's most respected and specialised Business Process delivery centres. The business has been operating from this unique location for the last 22 years, supported by a Senior Management Team which boasts over 150 years of BPO & CRM experience; and growing to a staff base of 250 people, providing client support both in their head office in Malin Head and remotely from all over Inishowen and nationwide.",
        sponsorDesc2: "They see the Expedition as an opportunity to highlight Wellbeing & Adventure within their organisation - encouraging a healthy work/life balance by providing opportunities for staff to participate in outdoor adventure and exercise, including team building activities linked to the Expedition. This will be promoted through many avenues such as their Wellbeing & Social Committee, sharing health & fitness content with employees from the rowing team, joining the rowers on their circumference of Ireland especially as it passes Ireland's most northerly point and the home of Forward Emphasis, and encouraging staff to walk/run different legs of each Expedition.",
    },
};
