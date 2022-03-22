import {
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Dev from './Dev';

const Contact = () => {
    return (
        <div>
            <h2>Contact our Team</h2>

            <p> Contact <Link to="devteam">Development Team</Link></p>
            <Routes>
                <Route path="devteam" element={<Dev />} />
            </Routes>
        </div>
    )
}

export default Contact;

