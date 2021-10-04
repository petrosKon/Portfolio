import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, CenterImage } from '../components/Projects/ProjectsStyles';


const ARcher =() =>{
	return(
	<Layout>
		<div>
		<SectionTitle>ARcher</SectionTitle>
		<SectionDivider/>
		<h1>Motivation</h1>
		<a>
			After creating many VR projects, I thought it was a good idea to move to AR, since it also fascinated me. My first idea for an AR project came from my favourite game the <b>Binding of Isaac</b> and especially platform games such as <b>Mario</b> since I am a big fan of them.
			The main concept behind this project was to create a non linear platform game. The main components I used are the cards from a deck.
			Each card would serve as a platform with a level attached to it.
			<br />
			<br />
			I utilized 4 cards: 1) Ace of Spades 2) Two of Spades 3) Eight of Spades 4) Five of Hearts.
		</a>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/ARcher/ARcher - Cards.jpg" alt = "Cards utilized in game"/>
			  </div>
		<br />
		<br />
		<SectionDivider/>
		<h1>Implementation</h1>
		<a>
			Each of these cards contained a different platform with different kind of interactions. 
		</a>
		<br />
		<br />
		<h2>Ace of Spades</h2>
		<GridContainer>
			<img src="/images/ARcher/image-01 - Ace of Spades.jpg" width = "300" height = "400" alt = "Ace of Spades"/>
			<img src="/images/ARcher/image-02 - Arena Ace of Spades.jpg" width = "400" height = "400" alt = "Arena Ace of Spades"/>
		</GridContainer>
		<a>
			In this card we summon the first stage and our hero, the <b>ARcher</b>. The hero starts without anything but
			when he picks the arrow that is close to him, he will then gain a crossbow. Apart from the crossbow,
			another button appears on the screen, this button when triggered, enables the player to shoot in the
			direction that he is facing to. In the first level there are three components that are visible (while two appear of them appear in this screenshot),
			spikes, a platform and a star pick-up (not visible due to being VFX and have to be selected).
			When the player touches the spikes he dies and after 2 seconds he will be respawned. Where he
			respawns is dependent on which checkpoint he last touched. The checkpoints are the platforms where
			we see our player standing in the above screenshot. 
			The way the player moves is what makes it possible to play this game and these kinds of AR-Games. Because it is a combination of physics and non-physics based movement. This kind of movement is used in AR applications because relying solely on physics based movement, can cause problems in gameplay.
			Even a slight glitch could cause the player to be thrown away. In order to check when or not to enable physics, we fire a raycast from the bottom of our player to some length beneath him. If this raycast detects ground, then we disable the gravity and rely on kinematic movement. When the raycast is not detecting anything, it means that 
			our player is floating in mid-air and thus we have to enable gravity so that it creates realism that our player falls. The code snippet that does that trigger this behavior is the following:
		</a>
		<br />
		<br />
		</div>
		<br/>
	</Layout>
	)
}

export default ARcher