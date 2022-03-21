import jack from '../images/jack1.jpg';
import boatInternal from '../images/boat_internal.png';
import route1 from '../images/route1.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        title: 'About Me',
        link: '/AboutMe',
        description: 'The Man Behind the Madness',
        image: jack,
        colour: '#0E9E61',
        isCard: true,
    },
    {
        title: 'The Expedition',
        link: '/Expedition',
        description: 'Rowing for Ireland',
        image: route1,
        colour: '#D02C37',
        isCard: true,
    },
    {
        title: 'The Team',
        link: '/Team',
        description: 'the team brief',
        image: 'Logo_coloured.png',
        isCard: false,
    },
    {
        title: 'Our Partners',
        link: '/Our Partners',
        description: 'The Industries and Charities',
        image: 'Logo_coloured.png',
        colour: '#FF8640',
        isCard: true,
    },
    {
        title: 'Our Sponsors',
        link: '/Sponsors',
        description: 'Helping to Make it Happen',
        image: boatInternal,
        colour: '#2D3353',
        isCard: true,
    },
];
