export const Subject: React.FC = () => {
    return (
        <div className="confession__subject">
            <label className="confession__form--label" htmlFor="subject">Subject</label>
            <input className="confession__form--input" type="text" placeholder="Input" />
        </div>
    );
};