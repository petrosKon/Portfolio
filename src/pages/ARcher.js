import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, CenterImage, CenterText } from '../components/Projects/ProjectsStyles';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { ScrollToTop } from '../components/Scroll/ScrollToTop';

const codeBlockHero = 
	`if(!Physics.Raycast(transform.position, Vector3.down, Mathf.Infinity))
        {
            heroRigidbody.constraints = RigidbodyConstraints.None;
            heroRigidbody.useGravity = true;
            heroRigidbody.isKinematic = false;
        }
        else
        {
            heroRigidbody.constraints = RigidbodyConstraints.FreezePositionY;
            heroRigidbody.constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ;

            heroRigidbody.useGravity = false;
            heroRigidbody.isKinematic = true;
        }
`;

const fireflyController = 

	`float lerpPercentage = Mathf.PingPong(Time.time, repeatTime) / repeatTime;

    transform.position = Vector3.Lerp(startingPosition.position, finalPosition.position, lerpPercentage);
    if (Vector3.Distance(transform.position, startingPosition.position) < 0.1f)
    {
       flyAnimator.SetBool("Fly forward", true);
       transform.LookAt(finalPosition);

    }
    else if (Vector3.Distance(transform.position, finalPosition.position) < 0.1f)
    {
       transform.LookAt(startingPosition);

    }`;

const piranhaPlantController =

`				if (!isDead && timeBeforeBites < 0f)
        {
            if (Vector3.Distance(transform.position, player.transform.position) <= lookRadius)
            {
                transform.LookAt(player.transform);
                piranhaPlantAnimator.SetTrigger("Bite Attack");
            }

        }
        else if (!isDead && timeBeforeBites > 0f)
        {
            timeBeforeBites -= Time.deltaTime;
        }`;

const ARcher =() =>{
	return(
	<Layout>
		<div>
		<SectionTitle>ARcher</SectionTitle>
		<SectionDivider/>
		<h1>Motivation</h1>
		<CenterText>
			After creating many VR projects, I thought it was a good idea to move to AR, since it also fascinated me. My first idea for an AR project came from my favourite game the <b>Binding of Isaac</b> and especially platform games such as <b>Mario</b> since I am a big fan of them.
			The main concept behind this project was to create a non linear platform game. The main components I used are the cards from a deck.
			Each card would serve as a platform with a level attached to it.
			<br />
			<br />
			I utilized 4 cards: 1) Ace of Spades 2) Two of Spades 3) Eight of Spades 4) Five of Hearts.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/ARcher/ARcher - Cards.jpg" alt = "Cards utilized in game"/>
			</div>
		<br />
		<br />
		<SectionDivider/>
		<h1>Implementation</h1>
		<CenterText>
			Each of these cards contained a different platform with different kind of interactions. 
		</CenterText>
		<br />
		<br />
		<h2>Ace of Spades</h2>
		<GridContainer>
			<img src="/images/ARcher/image-01 - Ace of Spades.jpg" width = "300" height = "400" alt = "Ace of Spades"/>
			<img src="/images/ARcher/image-02 - Arena Ace of Spades.jpg" width = "400" height = "400" alt = "Arena Ace of Spades"/>
		</GridContainer>
		<CenterText>
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
		</CenterText>
		<br />
		<br />
		<div style={CenterImage}>
			<SyntaxHighlighter  language="csharp" style={xonokai}>
				{codeBlockHero}
			</SyntaxHighlighter>
		</div>
		<br />
		<CenterText>
		I have to point also that our hero and the enemies are prefabs that are animated and they are not just moving around the scene like static objects. They have a complex animator components and trees that are shown in the next picture:
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/ARcher/ARcher - Animation Tree.jpg" alt = "Cards utilized in game"/>
			</div>
		<br />
		<h2>Two of Spades</h2>
		<GridContainer>
			<img src="/images/ARcher/image-03 - Two of Spades.jpg" width = "300" height = "400" alt = "Ace of Spades"/>
			<img src="/images/ARcher/image-04 - Arena Two of Spades.jpg" width = "400" height = "400" alt = "Arena Ace of Spades"/>
		</GridContainer>
		<br />
		<CenterText>
			This is the second card of our game we introduce the first enemy variation, the frightfly. These flies move
			way too fast and it is very difficult to bypass without shooting them first. Shooting them also is no easy
			task. In order to pass this level, the player must avoid or kill the fireflies and as well as evade the spikes.
			The fireflies move arround two constant points where we set them in our inspector and their controller is:
		</CenterText>
		<br />
		<br />
		<div style={CenterImage}>
			<SyntaxHighlighter  language="csharp" style={xonokai}>
				{fireflyController}
			</SyntaxHighlighter>
		</div>
		<br />
		<h2>Eight of Spades</h2>
		<GridContainer>
			<img src="/images/ARcher/image-05 - Eight of Spades.jpg" width = "300" height = "400" alt = "Ace of Spades"/>
			<img src="/images/ARcher/image-06 - Arena Eight of Spades.jpg" width = "400" height = "400" alt = "Arena Ace of Spades"/>
		</GridContainer>
		<br />
		<CenterText>
			his level is a little more tricky than the others. It is almost impossible for the player to pass without
			shooting the piranha plants. These plants are able to detect the player when in close proximity and
			they quickly kill him. The piranha plants continuously check the proximity of the player and they attack him when it gets close to them.
		</CenterText>
		<br />
		<br />
		<div style={CenterImage}>
			<SyntaxHighlighter  language="csharp" style={xonokai}>
				{piranhaPlantController}
			</SyntaxHighlighter>
		</div>
		<h2>Five of Hearts</h2>
		<GridContainer>
			<img src="/images/ARcher/image-07 - Five of Hearts.jpg" width = "300" height = "400" alt = "Ace of Spades"/>
			<img src="/images/ARcher/image-08 - Arena Five of Hearts.jpg" width = "400" height = "400" alt = "Arena Ace of Spades"/>
		</GridContainer>
		<br />
		<CenterText>
			Our last card for our demo, the Five Of Hearts. It includes our last enemy, the peashooter where it
			functions like a turret gun. According to which direction it is facing it is shooting projectiles. The videos of the application contain two different configuration that can show the possibilities of such an application, that multiple large scale levels can be created even with the same cards!!
		</CenterText>
		<br />
		<br />
		<SectionDivider/>
		<br />
		<h1>Video</h1>
		<div style={CenterImage}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLDZktaCsdtVc7qyGFGxfA7N8yqFrGlApn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		 </div>
		</div>
		<br/>
	</Layout>
	)
}

export default ARcher