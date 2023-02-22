import { ReasonForContact } from "./reason-for-contact";
import { Subject } from "./subject";

export const ConfessionForm: React.FC = () => {
    return (
        <form className="confession__form">
            <Subject/>
            <ReasonForContact/>
            <button type='submit' className="confession__form--confess">Confess</button>
        </form>
            
    );
};