import LogoImg from '../src/assets/img/header/logo.svg';
import WelcomeImg from '../src/assets/img/hero/landregister.svg';

export const header = {
    logo: LogoImg,
    btnText: 'Land Docket',
};

export const nav = [
    { name: 'Home', href: '/welcome' },
    { name: 'User', href: '/user' },
    { name: 'Land Inspector', href: '/landinspectorlogin' },
];

export const hero = {
    title: 'Welcome to Land Registration Platform',
    subtitle: 'Helps you securely register and transfer land',
    image: WelcomeImg,
};