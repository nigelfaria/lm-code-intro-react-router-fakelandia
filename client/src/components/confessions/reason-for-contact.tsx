export const ReasonForContact: React.FC = () => {
    return (
        <>
            <div className="confession__reason">
                <label className="confession__form--label" htmlFor="reason">Reason for Contact</label>
                <select className="confession__form--select" >
                    <option value='talk'>I just want to talk</option>;
                    <option value='rudeness'>Mild Public Rudeness 🤪</option>;
                    <option value='lift'>Speaking in a Lift 🗣</option>;
                    <option value='vegetables'>Not Eating Your Vegetables 🥗</option>;
                    <option value='united'>Supporting Manchester United 😈</option>;
                </select>
            </ div>
            <textarea className="confession__form--input" rows={9} cols={90} placeholder="Reasons" />
        </>
    );
};