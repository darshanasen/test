import { useParams } from 'react-router-dom';

const AccountPage = () => {
    const { name } = useParams();
    return (
        <div>
            <h1>Welcome to your account page, {name},</h1>
            <p>Here is your account info:</p>
        </div>
    )
}

export default AccountPage;