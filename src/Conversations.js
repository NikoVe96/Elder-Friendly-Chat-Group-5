import logo from './images/logo.jpg';
import './Styles.css';
import { Link } from 'react-router-dom';

function Conversations() {
    return (
        <>
            <div class="container">
                <h1>Conversations</h1>

                <table>
                    <tr>
                        <th style="padding-right: 0%;">
                            <figure>
                                <image src="Images/man-avatar.png" alt="avatar" width="160" height="160" class="img"></image>
                                <figcaption> Frank </figcaption>
                            </figure>
                        </th>
                        <td style="padding-right: 10%;">
                            <p>Hi Poul, are we still on for that fishing trip this weekend?</p>
                        </td>
                    </tr>
                </table>

                <div class="centered-content-Conversations">
                    <figure>
                        <image src="Images/man-avatar.png" alt="avatar" width="60" height="60" class="img"></image>
                        <figcaption> Frank </figcaption>
                        <p>Hi Poul, are we still on for that fishing trip this weekend?</p>
                    </figure>
                </div>

                <div class="centered-content-Conversations">
                    <figure>
                        <image src="Images/man2-avatar.png" alt="avatar2" width="60" height="60" class="img"></image>
                        <figcaption> Eric </figcaption>
                        <p>Hi dad, could you and mum still babysit this weekend?</p>
                    </figure>
                </div>
                <div class="centered-content-Conversations">
                    <figure>
                        <image src="Images/woman-avatar.png" alt="avatar3" width="60" height="60" class="img"></image>
                        <figcaption> Camilla </figcaption>
                        <p>Hi dad, we are gonna need some indicators regarding your wishlist</p>
                    </figure>
                </div>
                <div>
                    <button class="newConversationButton">New conversation</button>
                </div>
                <div>
                    <Link to="/MainPage">
                        <button className="home-button">Home</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Conversations;