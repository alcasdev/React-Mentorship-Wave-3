import ProfileCard from './profilecard';
import PropTypes from 'prop-types';


export default function User(props) {
    let user = props.userProfile

    return(
        <ProfileCard name={user.name} email={user.email} phone={user.phone} address={user.address}></ProfileCard>
    )
}

User.propTypes = {
    userProfile: PropTypes.object
}