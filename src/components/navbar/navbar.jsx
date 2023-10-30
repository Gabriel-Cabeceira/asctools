import React, { useState, useEffect } from 'react';
import { NavBar, NavContainer, MenuToggle } from './nav-bar-styles';
import { darkModeBackgroundColor, darkModeNavBarColor, darkModeBtnMenuColor } from '../../global-styles/colorScheme';
import { Button } from '../navbar-button/button';
import { BsHouse, BsTextIndentLeft, BsHddNetwork, BsWhatsapp, BsQuestionCircle } from 'react-icons/bs';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {

    // Cor do botão quando ativo
    const btnActiveColor = darkModeBackgroundColor;

    // Cor do botão quando inativo
    const btnInactiveColor = darkModeNavBarColor;

    // Hooks useState para gerenciar o estado dos elementos do botão de expandir o menu
    const [active, setActive] = useState(false);
    const [navWidth, setNavWidth] = useState('5em');
    const [rotateIcon, setRotateIcon] = useState('0');
    const [iconPosition, setIconPosition] = useState('0');
    const [barIconMenu, setBarIconMenu] = useState(`0 8px 0 ${darkModeBtnMenuColor}`);

    // Hooks do react-router-dom para gerenciar a navegação entre as páginas
    const navigate = useNavigate();
    const location = useLocation();

    // Função para definir os estados iniciais dos botões com base na rota atual
    const setInitialButtonStates = () => {
        const path = location.pathname;
        const initialStates = {
            home: path === '/',
            scripts: path === '/scripts',
            api: path === '/api',
            whatsapp: path === '/whatsapp',
            help: path === '/help',
        };
        return initialStates;
    };

    const [btnStates, setBtnStates] = useState(setInitialButtonStates);

    const handleButtonClick = (buttonName) => {
        // Define os estados dos botões com base no botão clicado
        const newButtonStates = setInitialButtonStates();
        newButtonStates[buttonName] = true;



        // Navega para a rota correspondente
        switch (buttonName) {
            case 'home':
                navigate('/');
                break;
            case 'scripts':
                navigate('/scripts');
                break;
            case 'api':
                navigate('/api');
                break;
            case 'whatsapp':
                navigate('/whatsapp');
                break;
            case 'help':
                navigate('/help');
                break;
            default:
                break;
        }

        setBtnStates(newButtonStates);
    };

    useEffect(() => {
        if (active) {
            setNavWidth('12em');
            setRotateIcon('45deg');
            setIconPosition('0');
            setBarIconMenu('0 0 0 #000000');
        } else {
            setNavWidth('5em');
            setRotateIcon('0deg');
            setIconPosition('8px');
            setBarIconMenu(`0 8px 0 ${darkModeBtnMenuColor}`);
        }
    }, [active]);

    return (
        <NavContainer>
            <NavBar style={{ width: navWidth }}>
                <MenuToggle rotate={rotateIcon} translateY={iconPosition} boxShadow={barIconMenu} onClick={() => setActive(!active)} />
                <ul>
                    <li>
                        <Button
                            onClick={() => handleButtonClick('home')}
                            state={btnStates.home}
                            color={btnStates.home ? btnActiveColor : btnInactiveColor}
                            icon={<BsHouse />}
                            text={active ? 'Home' : ''}
                        />
                    </li>
                    <li>
                        <Button
                            onClick={() => handleButtonClick('scripts')}
                            state={btnStates.scripts}
                            color={btnStates.scripts ? btnActiveColor : btnInactiveColor}
                            icon={<BsTextIndentLeft />}
                            text={active ? 'Scripts' : ''}
                        />
                    </li>
                    <li>
                        <Button
                            onClick={() => handleButtonClick('api')}
                            state={btnStates.api}
                            color={btnStates.api ? btnActiveColor : btnInactiveColor}
                            icon={<BsHddNetwork />}
                            text={active ? 'API' : ''}
                        />
                    </li>
                    <li>
                        <Button
                            onClick={() => handleButtonClick('whatsapp')}
                            state={btnStates.whatsapp}
                            color={btnStates.whatsapp ? btnActiveColor : btnInactiveColor}
                            icon={<BsWhatsapp />}
                            text={active ? 'Teste WhatsApp' : ''}
                        />
                    </li>
                    <li>
                        <Button
                            onClick={() => handleButtonClick('help')}
                            state={btnStates.help}
                            color={btnStates.help ? btnActiveColor : btnInactiveColor}
                            icon={<BsQuestionCircle />}
                            text={active ? 'Ajuda' : ''}
                        />
                    </li>
                </ul>
            </NavBar>
        </NavContainer>
    );
};

export { Nav };
