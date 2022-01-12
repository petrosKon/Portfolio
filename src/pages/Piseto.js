import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, CenterImage, CenterText, GridContainer5, GridContainer3  } from '../components/Projects/ProjectsStyles';
import ScrollToTop from '../components/Scroll/ScrollToTop';


const Piseto = () => {
    return (
        <Layout>
            <ScrollToTop showBelow={250} />
            <div>
                <SectionTitle>Piseto</SectionTitle>
                <SectionDivider />
                <h1>Motivation</h1>
                <CenterText>
                    Piseto designs gameful group experiences in fine art exhibitions, challenging the creative abilities of the visitors. Through the game, participants are motivated to engage with the artworks in new, resourceful, and personal ways. Most notably, they are encouraged to share their private thoughts and reflections with the group, fostering conversations and social interactions.
                </CenterText>
                <br />
                <br />
                <SectionDivider />
                <h1>Development approach</h1>
                <CenterText>
                    To support the creation of gameful group visits, from design to delivery, Piseto implements software tools for two different user types: i) Mobile Applications for visitors, orchestrating group activities during the game, and ii) Experience Designer Tools for authors, enabling to create and produce a range of gameful experience designs, tailored to the characteristics of each cultural collection and environment.
                    During my time at <b>Comic</b> I developed the application firstly on <b>Android Studio</b>, but due to the fact that the project was strict on time, we changed the implementation from <b>Android Studio</b> to <b>Unity2d</b> due to the fact that it offers cross-platform development to both <b>Android</b> and <b>IOS</b>
                </CenterText>
                <br />
                <br />
                <SectionDivider />
                <h1>Application flow</h1>
                <CenterText>
                    When the user first opens the application he/she is first greeted by a splash screen. After waiting 3 seconds then he/she is then moved to the login screen.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 00 - Splashscreen.png" width="30%" height="100%" alt="Splashscreen" />
                    <img src="/images/Piseto/Piseto - 01 - Login Screen.png" width="30%" height="100%" alt="Login Screen" />
                </GridContainer>
                <CenterText>
                    On the next screen we see 3 things: a text that states the terms and conditions in order for the user to use the application as well as 2 ways to connect to it: one via <b>Google</b> and the other via <b>Facebook</b>. In order to continue, it must accept the terms of use as well as choose one of the 2 ways of connection. Whichever way he chooses, he registers at the base of the application and the appropriate credentials are sent to the user in order to continue and be able to use it.
                    When the registration is over the application moves to the next screen. This is the screen where the user can edit their profile so that it fits the . His profile consists of 2 things, the nickname and the profile picture. When Google logs in to Facebook for the first time, the app gets that information from the user's profile.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 02 - Customization Screen.png" width="30%" height="100%" alt="Customization Screen Anonymous" />
                    <img src="/images/Piseto/Piseto - 03 - Customization Screen 2.png" width="30%" height="100%" alt="Customization Screen Logged In" />
                </GridContainer>
                <CenterText>
                    The user can change his name as well as his profile picture. The profile picture can be either one of the default images of the application, or take a selfie.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 04 - Edit Username banner.png" width="30%" height="100%" alt="Edit Username banner" />
                    <img src="/images/Piseto/Piseto - 05 - Edit profile image banner.png" width="30%" height="100%" alt="Edit profile image banner" />
                </GridContainer>
                <CenterText>
                    After this screen is the main menu of the application, which contains 5 options: Play Game, Souvenirs, My Profile, Settings, Gameplays.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 06 - Main menu Screen part 1.png" width="30%" height="100%" alt="Main menu screen 1" />
                    <img src="/images/Piseto/Piseto - 07 - Main menu Screen part 2.png" width="30%" height="100%" alt="Main menu screen 2" />
                </GridContainer>
                <CenterText>
                    The main menu in addition to these options, has a <b>Side Menu</b>, which can be opened by pressing the three lines on the top left.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 08 - Side menu.png" width="15%" height="40%" alt="Side menu" />
                </div>
                <br />
                <CenterText>
                    n this menu the user can edit his profile by clicking on either his name or his image. Another feature of this screen is that the user can log in to a previous game he was playing as well as be completely logged out of his profile and application. By clicking on the user to edit his profile, the application refers him to the following screen.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 09 - Edit profile screen.png" width="15%" height="40%" alt="Edit profile screen" />
                </div>
                <br />
                <CenterText>
                    In addition to editing his profile, this screen allows the user to select and save what kind of games he likes in order to be suggested by our system.
                    We will now look at the order of the screens with which a user is playing a game. First select the <b>PLAY GAME</b> option from the main menu.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 10 - Play game screen.png" width="15%" height="40%" alt="Play game screen" />
                </div>
                <br />
                <CenterText>
                    By selecting <b>START A GAME</b> the user is the first to enter a game and will start it himself. Selecting one of the two opens the next screen.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 11 - Join game screen.png" width="15%" height="40%" alt="Join game screen" />
                </div>
                <br />
                <CenterText>
                    Here 2 ways are suggested to the user in order to enter a game. Either using a <b>PIN</b> that can be obtained through the game website, or via <b>QR Code</b>, which is generated when creating a game. Pressing the first button throws a special keyboard which accepts 6 digits.
                </CenterText>
                <br />
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 12 - Keyboard panel.png" width="30%" height="100%" alt="Keyboard Panel" />
                    <img src="/images/Piseto/Piseto - 13 - QR code scanner.png" width="30%" height="100%" alt="QR Code scanner" />
                </GridContainer>
                <CenterText>
                    Using one of the 2 ways, the user can enter a game. Upon entering a game successfully, we have a transition screen before entering the main lobby of the game, which also displays the name of each game.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 14 - Opening splash screen.png" width="15%" height="40%" alt="Opening Splash screen" />
                </div>
                <br />
                <CenterText>
                    Then we have the main "Lobby" of the game, where each player enters. When a player is introduced to this screen, he appears in the main photo and every other player after him appears below him. In case the player enters first, then he has an extra button that indicates that the game can start.
                    If the user is not the one who starts the game, then the position of the button is replaced by a text that indicates who will start it. It is worth noting that at the top of the screen, there is a button with the label <b>Leave</b>, where by pressing the user can leave the game at any time. Finally, information is provided on how many players play in the game as well as the name of this group of players. At this point, the app communicates with our database and gets information about the players and whether the game has started.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 15 - First entered play lobby.png" width="30%" height="100%" alt="First entered player" />
                    <img src="/images/Piseto/Piseto - 16 - Other player lobby.png" width="30%" height="100%" alt="other position entered" />
                </GridContainer>
                <CenterText>
                    After this screen, the main flow of the game begins. There are 2 gameplays: <b>Storyteller</b> and <b>Voter</b>. In order for the game to proceed to the next round, each player must become a narrator at least once. First of all, we will describe the game flow in the case of the narrator.
                </CenterText>
                <br />
                <SectionDivider />
                <h1>Narrator</h1>
                <CenterText>
                    The first screen of the Storyteller is the selection of the exhibit for which he wants to narrate the story. The user receives the exhibits from the database via an <b>API</b> and these are placed accordingly on cards. By <b>Swiping</b> the user can move around and see the exhibits for which he can create a story. The maximum number of exhibits in each round is 20. Each exhibit is presented in the form of a card, which contains its most basic information such as: <b>Image</b>, <b>Artwork Name</b>, <b>Artist</b>, <b>Date</b>
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 17 - Storyteller first screen part 1.png" width="30%" height="100%" alt="Storyteller first screen 1" />
                    <img src="/images/Piseto/Piseto - 18 - Storyteller first screen part 2.png" width="30%" height="100%" alt="Storyteller first screen 2" />
                </GridContainer>
                <CenterText>
                    It is worth noting that in the game we can set parameters such as time, and as a result a yellow bar appears that defines the time.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 19 - Storyteller first screen part timer 1.png" width="30%" height="100%" alt="Storyteller first screen timer 1" />
                    <img src="/images/Piseto/Piseto - 20 - Storyteller first screen part timer 2.png" width="30%" height="100%" alt="Storyteller first screen timer 2" />
                </GridContainer>
                <CenterText>
                    Clicking on one of the cards displays the following screen:
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 21 - Storyteller picks artwork.png" width="15%" height="40%" alt="Storyteller picks artwork" />
                </div>
                <br />
                <CenterText>
                    This screen lists all the previous information that were listed in the cards, with the difference that the photo is much bigger and that in case the exhibit has information, from the databse, we list it as well. Inside this screen, there is a button that says "I am done. Call Everyone." When the user presses this button then the database is informed of its action and sends a message to all other users that the narrator is ready to tell his story.
                    On the next screen the user by <b>Swiping</b> in any direction, informs the database to send a notification to all the users that he/she is ready to announce his/her story.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 22 - Storyteller selects artwork.png" width="15%" height="40%" alt="Storyteller selects artwork" />
                </div>
                <br />
                <CenterText>
                    The next step after <b>Swiping</b>, is to narrate the story, with the help of the following screen. In the next screen the artwork is hidden, but when the user presses the center button, then it is revealed so he/she can be reminded of the story he/she is thought of.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 23 - Storyteller tells story screen.png" width="30%" height="100%" alt="Storyteller tells story screen dimmed" />
                    <img src="/images/Piseto/Piseto - 24 - Storyteller tells story screen undimmed.png" width="30%" height="100%" alt="Storyteller tells story screen undimmed" />
                </GridContainer>
                <CenterText>
                    Having finished his story, the narrator now has free time. In this free time, depending on the game preferences, can enjoy some mini-games that will help pass his/her free time more enjoyable and also earn some extra points.
                    The free time screen also appears dimmed in the second picture, so that the user is not encouraged to look at his/her phone but rather at the gallery that he's currently in.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 25 - Storyteller free time screen dimmed.png" width="30%" height="100%" alt="Storyteller free time screen dimmed" />
                    <img src="/images/Piseto/Piseto - 26 - Storyteller free time screen undimmed.png" width="30%" height="100%" alt="Storyteller free time screen undimmed" />
                </GridContainer>
                <CenterText>
                    When all users finish voting the exhibit that they think the user has selected, it is time to announce the results. Instead of just a notification a special screen is used requires user input, in order to make sure that he/she is alerted.
                    This screen buzzes and rings and by touching it, it stops.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 27 - Ringing screen.png" width="15%" height="40%" alt="Ringing screen" />
                </div>
                <br />
                <CenterText>
                    In order for the Storyteller to reveal the votes he/she must swipe one last time. After swiping there is a sequence of pages that shows what each player voted for.
                    The last page shows the artwork that the storyteller has chosen.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 29 - Storyteller reveal votes page.png" width="30%" height="100%" alt="Storyteller reveal votes page" />
                    <img src="/images/Piseto/Piseto - 30 - Storyteller reveal votes last page.png" width="30%" height="100%" alt="Storyteller reveal votes last page" />
                </GridContainer>
                <CenterText>
                    The last page that is the result pages. It contains two categories, the first one, is a display list who shows who found the storyteller's artwork and the second one the total points for each player.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 31 - Storyteller reveal results 1.png" width="30%" height="100%" alt="Storyteller reveal results 1" />
                    <img src="/images/Piseto/Piseto - 32 - Storyteller reveal results 2.png" width="30%" height="100%" alt="Storyteller reveal results 2" />
                </GridContainer>
                <CenterText>
                    Pressing the "New Turn" button, we move on to a new round and the narrator becomes a voter. When all the rounds are completed then this button takes the user to the screen with which he can take out and hold a digital souvenir.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 33 - Storyteller take souvenir 1.png" width="30%" height="100%" alt="Storyteller reveal results 1" />
                    <img src="/images/Piseto/Piseto - 34 - Storyteller take souvenir 2.png" width="30%" height="100%" alt="Storyteller reveal results 2" />
                </GridContainer>
                <CenterText>
                    The digital souvenir consists of two parts. A photo, usually of the group playing the game or of some people as well as some boards that were used in the game. When the user chooses to keep a souvenir, it is stored in the database and made available to all users who have played this game.
                </CenterText>
                <br />
                <SectionDivider />
                <h1>Voter</h1>
                <CenterText>
                    Now it is the time to describe the application flow of the voter. The screens that I am going to describe now are in parallel with the storyteller's. When the storyteller is trying to select an artwork that he/she is going to make a story, the voter has its free time. But before announcing the free time,
                    the first screen announces to the voter, which player is the storyteller.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 35 - Voter 1.png" width="15%" height="40%" alt="Voter screen 1" />
                </div>
                <br />
                <CenterText>
                    The next screens are explaining to the voter what the storyteller is currently doing. The first one appears after the ringing screen and tells the voter that the storyteller has finished the story and to go to him/her in order to hear it.
                    The second screen highlights to the voter that the storyteller is announcing his/her story and the voter should pay attention to it.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 36 - Voter 2.png" width="30%" height="100%" alt="Voter screen 2" />
                    <img src="/images/Piseto/Piseto - 37 - Voter 3.png" width="30%" height="100%" alt="Voter screen 3" />
                </GridContainer>
                <CenterText>
                    After finishing with the story, it's time for the player to vote. The voting screen is shown in the next images. When the user scrolls, an scroll animation of the image plays the page of all artworks appear.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 38 - Voting screen 1.png" width="30%" height="100%" alt="Voting screen 1" />
                    <img src="/images/Piseto/Piseto - 39 - Voting screen 2.png" width="30%" height="100%" alt="Voting screen 2" />
                </GridContainer>
                <CenterText>
                    In order to vote for an artwork, the user must first select an image. When he/she selects one, the following window appear.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 40 - Voting screen 3.png" width="15%" height="40%" alt="Artwork window" />
                </div>
                <br />
                <CenterText>
                    In order for the user to vote the selected artwork, he/she must shake the phone. When all the users are finished voting, then all users are transfered to the ringing screen.
                    The purpose of the ringing screen as described to inform all the player that the voting has ended. Then the next screen, informs the voter to go to the storyteller in order to announce the results.
                    The dim of the screen is so that the users would pay attention to the storyteller that is speaking and not look at their phones.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 41 - Voter 4.png" width="15%" height="40%" alt="Voter screen 4" />
                </div>
                <br />
                <CenterText>
                    When the storyteller swipes to unlock the results, the voter doesn't see the same images but rather the he/she sees whether he/she is the only one that voted the artwork or there are others that voted the same as him/her.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 42 - Voter alone.png" width="15%" height="40%" alt="Voter alone" />
                </div>
                <br />
                <CenterText>
                    The last screen that the voter sees are the results, which is the same screen as the storyteller.
                </CenterText>
                <br />
                <SectionDivider />
                <h1>Souvenirs</h1>
                <CenterText>
                    When a game ends, as mentioned earlier, the application is able to create digital souvenirs that the users can take. The screen that the users are able to configure their souvenirs appear after the game finishes.
                    There are two options, create a souvenir with or without a group picture. A user can access the souvenirs while on the main menu by clicking on the tab <b>Souvenirs</b>.
                    When clicking the souvenir tab, a list of all the available souvenirs appear.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 43 - Souvenir Screen.png" width="15%" height="40%" alt="Souvenir Screen" />
                </div>
                <br />
                <CenterText>
                    When the user clicks on an item list, the following souvenir appears. This souvenir does not contain a group picture. It basically shows some artworks that the game included along with the leaderboard.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 44 - Souvenir sample.png" width="15%" height="40%" alt="Souvenir sample" />
                </div>
                <br />
                <SectionDivider />
                <h1>In Game Menu</h1>
                <CenterText>
                    Due to the fact that Piseto is a mobile multiplayer game, it also needs a in-game menu for extra functionalities. The menu is on the top right of the application when the user enters the game and it is activated by pressing them.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 45 - In game menu.png" width="15%" height="40%" alt="In game menu" />
                </div>
                <br />
                <CenterText>
                    Then we see 6 options in our menu: <b>Leaderboard</b>, <b>Tutorial</b>, <b>Scoring</b>, <b>Kick out player</b>, <b>Leave Game</b>, <b>End party game</b>
                    The Tutorial tab shows how the game is played in case a player wants to access in any point of the game.
                </CenterText>
                <br />
                <GridContainer5>
                    <img src="/images/Piseto/Piseto - 47 - In game menu - Tutorial 1.png" width="60%" height="100%" alt="Tutorial 1" />
                    <img src="/images/Piseto/Piseto - 48 - In game menu - Tutorial 2.png" width="60%" height="100%" alt="Tutorial 2" />
                    <img src="/images/Piseto/Piseto - 49 - In game menu - Tutorial 3.png" width="60%" height="100%" alt="Tutorial 3" />
                    <img src="/images/Piseto/Piseto - 50 - In game menu - Tutorial 4.png" width="60%" height="100%" alt="Tutorial 4" />
                    <img src="/images/Piseto/Piseto - 51 - In game menu - Tutorial 5.png" width="60%" height="100%" alt="Tutorial 5" />
                </GridContainer5>
                <br />
                <CenterText>
                    Then in case the player wants to know how the scoring is calculated he/she can find out by clicking at the scoring tab.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 52 - In game menu - Scoring.png" width="15%" height="40%" alt="Scoring" />
                </div>
                <br />
                <CenterText>
                    The last 3 screens are used for actions, meaning kicking a player in case it is stuck or run out of battery. An option to leave the game and one to end the game.
                </CenterText>
                <br />
                <GridContainer3>
                    <img src="/images/Piseto/Piseto - 53 - In game menu - Kick out player.png" width="40%" height="100%" alt="Kick out player" />
                    <img src="/images/Piseto/Piseto - 54- In game menu - Leave game.png" width="40%" height="100%" alt="Leave game" />
                    <img src="/images/Piseto/Piseto - 55 - In game menu - End Game.png" width="40%" height="100%" alt="End Game" />
                </GridContainer3>
                <br />
                <SectionDivider />
                <h1>Libraries Used</h1>
                <CenterText>
                    Due to the fact that Piseto was a very complex project since it involved a multiplayer game logic and the backend was completely handled by us, it required some libraries in order to function properly.
                    The first one being <b>Firebase</b> online database. Firebase helped us with the notification system in any major point of the game. Also through the data that was being sent from Firebase we were able
                    to rejoin the game in multiple instances.
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 56 - Firebase.png" width="50%" height="50%" alt="Firebase" />
                </div>
                <br />
                <CenterText>
                    In order to succesfully register a user to our database, we used third party authentication in order for our authentication to be more secure. We used Google & Facebook third party sign in.
                </CenterText>
                <GridContainer>
                    <img src="/images/Piseto/Piseto - 57 - Sign in with Google.png" width="50%" height="70%" alt="Sign in with Google" />
                    <img src="/images/Piseto/Piseto - 58 - Sign in with Facebook.png" width="50%" height="80%" alt="Sign in with Facebook" />
                </GridContainer>
                <br />
                <CenterText>
                    The last two libraries that were mostly used throughout our project, were Unity Assets. The first one is a well known library for making API calls simpler, it is called <b>RestClient</b>
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 59 - RestClient.png" width="50%" height="50%" alt="RestClient" />
                </div>
                <br />
                <CenterText>
                    The last library is helped us created fancy elements on the screens that I showed throught the application. It is called <b>Modern UI Pack</b>
                </CenterText>
                <br />
                <div style={CenterImage}>
                    <img src="/images/Piseto/Piseto - 60 - Modern UI Pack.png" width="50%" height="50%" alt="Modern UI Pack" />
                </div>
                <br />
                <br />
                <SectionDivider />
                <h1> Videos </h1>
                <br />
                <br />
                <div style={CenterImage}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fCU5hScNa58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br />
                <br />
            </div>
            <br />
        </Layout>
    )
}

export default Piseto