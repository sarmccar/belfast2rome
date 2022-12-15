import jack from '../images/jack1.jpg';
import boatInternal from '../images/boat_internal.png';
import sponsors from '../images/ireland_sponsors.jpg';
import partners from '../images/partners_website.PNG';
import { Rowing, Groups, Person, Handshake, CurrencyExchange  } from '@mui/icons-material';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        title: 'About Me',
        link: '/AboutMe',
        description: 'The Man Behind the Madness',
        image: jack,
        icon: <Person />,
        colour: '#0E9E61',
        isCard: true,
    },
    {
        title: 'The Expedition',
        link: '/Expedition',
        description: 'Rowing for Ireland',
        image: boatInternal,
        icon: <Rowing />,
        colour: '#D02C37',
        isCard: true,
    },
    {
        title: 'The Team',
        link: '/Team',
        description: 'the team brief',
        image: 'Logo_coloured.png',
        icon: <Groups />,
        isCard: false,
    },
    {
        title: 'Our Partners',
        link: '/Partners',
        description: 'The Industries and Charities',
        image: partners,
        icon: <Handshake />,
        colour: '#2D3353',
        isCard: true,
    },
    {
        title: 'Our Sponsors',
        link: '/Sponsors',
        description: 'Helping to Make it Happen',
        image: sponsors,
        icon: <CurrencyExchange />,
        colour: '#FF8640',
        isCard: true,
    },
];
