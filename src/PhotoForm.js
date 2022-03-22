import { useState } from 'react';
function PhotoForm(props) {
    const [userChoice, setUserChoice] = useState('placeholder');
    const handleUserChoice = (e) => {
        setUserChoice(e.target.value);
    }
    return (
        // show passing state within console log
        <form onSubmit={(e) => props.getPhotos(e, userChoice)}>
            <h2>Show me some photos that are:</h2>
            {/* show this state change within the Dev Tools */}
            <select
                value={userChoice}
                onChange={handleUserChoice}
                id="photoOrientation"
                name="photoOrientation"
            >
                <option value="placeholder" disabled>
                    Pick one:
                </option>
                <option value="squarish">square</option>
                <option value="landscape">landscape</option>
                <option value="portrait">portrait</option>
            </select>
            <button type="submit">Give me photos!</button>
        </form>
    );
}

export default PhotoForm;
