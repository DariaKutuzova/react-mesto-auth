import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import ImagePopup from "./ImagePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import EditProfilePopup from '../components/EditProfilePopup'
import EditAvatarPopup from '../components/EditAvatarPopup'
import AddPlacePopup from "./AddPlacePopup";
import ConfirmPopup from "./ConfirmPopup";
import Register from './Register';
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from '../utils/auth';
import InfoTooltip from "./InfoTooltip";
import {
    Routes,
    Route,
    useNavigate,
    useLocation
} from "react-router-dom";


function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
    const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
    const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
    const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
    const [isRegistered, setRegistered] = useState(false);
    const [authorizedEmail, setAuthorizedEmail] = useState('');
    const [isSignOut, setSignOut] = useState(false);

    const [currentUser, setCurrentUser] = useState('');
    const [cards, setCards] = useState([]);

    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        Promise.all([api.getAllCards(), api.getApiUserInfo()])
            .then(([allCards, userData]) => {
                setCurrentUser(userData);
                setCards(allCards);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
        const close = (e) => {
            if (e.keyCode === 27) {
                closeAllPopups();
            }
        }
        document.addEventListener('keydown', close)
        return () => document.removeEventListener('keydown', close)
    }, []);

    useEffect(() => {
        handleTokenCheck()
    }, [])

    useEffect(() => {
        if (loggedIn === true) {
            navigate('/')
        }
    }, [loggedIn, navigate])

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
        setImagePopupOpen(true);
    }

    function handleDeleteClick(card) {
        setSelectedCard(card);
        setConfirmPopupOpen(true);
    }

    function handleLoginClick() {
        setLoginPopupOpen(true);
    }

    function handleRegisterClick() {
        setRegisterPopupOpen(true);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setImagePopupOpen(false);
        setConfirmPopupOpen(false);
        setInfoTooltipPopupOpen(false);
        setRegisterPopupOpen(false);
        setLoginPopupOpen(false);
    }

    //Изменить инфо пользователя
    function handleUpdateUser(data) {
        api.patchUserInfo(data)
            .then(
                (data) => {
                    setCurrentUser(data);
                    closeAllPopups();
                })
            .catch((err) => {
                console.log(err);
            })
    }

    //Изменить аватар
    function handleUpdateAvatar(data) {
        api.changeAvatar(data)
            .then(
                (data) => {
                    setCurrentUser(data);
                    closeAllPopups();
                })
            .catch((err) => {
                console.log(err);
            })
    }

    //Функция лайка карточки
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //Функция удаления карточки
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter((elem) => elem !== card);
                setCards(newCards);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //Функция добавления карточки
    function handleAddPlaceSubmit(data) {
        api.addCard(data)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //Регистрация
    function handleSignUp(email, password) {
        console.log(email)
        auth.register(email, password)
            .then(
                (data) => {
                    console.log(data)
                    closeAllPopups();
                    setRegistered(true);
                    setInfoTooltipPopupOpen(true);
                    navigate('/sign-in');
                })
            .catch((err) => {
                console.log(err);
                setRegistered(false);
                setInfoTooltipPopupOpen(false);
            })
    }

    //Проверка токена
    function handleTokenCheck() {
        const jwt = localStorage.getItem("jwt")
        if (jwt) {
            const jwt = localStorage.getItem("jwt")
            auth.checkToken(jwt)
                .then((res) => {
                    if (res) {
                        setLoggedIn(true)
                        setAuthorizedEmail(res.data.email)
                    }
                })
                .catch((err) => {
                    console.log(`Не удалось получить токен: ${err}`)
                })
        }
    }

    // const handleLogin = () => {
    //     setLoggedIn(true)
    // }

    //Функция выхода из акка
    function handleLogout() {
        localStorage.removeItem('jwt')
        setLoggedIn(false)
        navigate('/sign-in')
    }

    //Функция входа
    function handleAuthorize(email, password) {
        auth.authorize(email, password)
            .then((data) => {
                console.log(data)
                closeAllPopups();
                localStorage.setItem('jwt', data.token);
                setLoggedIn(true);
                setAuthorizedEmail(email)
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header
                    loggedIn={loggedIn}
                    autoEmail={authorizedEmail}
                    onSingOut={handleLogout}
                />
                <Routes>
                    <Route path="/sign-up" element={
                        <Register
                            onAddUser={handleSignUp}
                        />}/>
                    <Route path="/sign-in" element={
                        <Login
                            onEntryUser={handleAuthorize}
                        />}/>
                    <Route exact path="/" element={
                        <ProtectedRoute
                            element={Main}
                            loggedIn={loggedIn}
                            onEditProfile={handleEditProfileClick}
                            onAddPlace={handleAddPlaceClick}
                            onEditAvatar={handleEditAvatarClick}
                            onCardClick={handleCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleDeleteClick}
                            cards={cards}
                            onLogin={handleLoginClick}
                            onRegister={handleRegisterClick}/>}

                    />
                </Routes>
                <Footer/>
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                                  onUpdateUser={handleUpdateUser}/>
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                 onUpdateAvatar={handleUpdateAvatar}/>
                <ImagePopup
                    isOpen={isImagePopupOpen}
                    card={selectedCard}
                    onClose={closeAllPopups}/>
                <ConfirmPopup onClose={closeAllPopups} isOpen={isConfirmPopupOpen} card={selectedCard}
                              onCardDelete={handleCardDelete}/>
                <InfoTooltip onClose={closeAllPopups}
                             isOpen={isInfoTooltipPopupOpen}
                             isRegistered={isRegistered}
                />


            </div>
        </CurrentUserContext.Provider>
    )
        ;
}

export default App;

