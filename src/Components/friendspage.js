import './friends.css'; 
const tg = window.Telegram.WebApp

const Friends = () => {

    const onClose = () => {
        tg.close()
    }
    return (
        <div>
            <button onClick={onClose}>Press f</button>
        </div>
    );
};
export {Friends};