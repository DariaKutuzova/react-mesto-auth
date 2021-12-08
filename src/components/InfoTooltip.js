import error from "../images/error.svg";
import success from "../images/success.svg"


function InfoTooltip({isOpen, onClose, isRegistered}) {

    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}
             onClick={handlePopupClose}>
            <div className={`popup__container popup__container_type_${name}`}>
                <form action="#" className={`popup__form popup__form_type_${name}`} name={`${name}`}>
                    <img className="" src={isRegistered ? success : error}/>
                    <h2 className="popup__form-header">{isRegistered ?
                        'Вы успешно зарегистрировались!' :
                        'Что-то пошло не так... Попробуйте ещё раз.'}
                    </h2>
                </form>
                <button onClick={onClose} className={`popup__close popup__close_type_${name}`}
                        type="button" aria-label="Закрыть"/>
            </div>
        </div>
    );
}

export default InfoTooltip;