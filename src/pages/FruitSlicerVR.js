import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, CenterImage, CenterText } from '../components/Projects/ProjectsStyles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import  ScrollToTop  from '../components/Scroll/ScrollToTop';

const displayBoundariesCode = `						bool configuredBoundaries = OVRManager.boundary.GetConfigured();

            if (configuredBoundaries)
            {
                //Get all boundary points
                boundaryPoints = OVRManager.boundary.GetGeometry(BoundaryType.OuterBoundary);

								//render points with walls boundaries
                for (int i = 0; i < boundaryPoints.Length; i++)
                {
                    #region Wall Boundaries
                    if (i % distanceBetweenWalls == 0)
                    {
                        Vector3 positionBetweenBoundariesAndPlayer = new Vector3(boundaryPoints[i].x + spawnedVRPlayer.transform.position.x, 1f, boundaryPoints[i].z + spawnedVRPlayer.transform.position.z);
                        boundaryPoints[i] = positionBetweenBoundariesAndPlayer;
                        GameObject wallObject = PhotonNetwork.Instantiate("Wall Object", boundaryPoints[i], Quaternion.identity) as GameObject;
                        wallObject.transform.parent = guardianMapper.transform;

                        yield return null;

                    }
                    #endregion
                }`;

const streamPlayerCoordinatesCode =  `void MapOculusPositions(Transform target, XRNode node)
    {
        InputDevices.GetDeviceAtXRNode(node).TryGetFeatureValue(CommonUsages.devicePosition, out Vector3 position);
        InputDevices.GetDeviceAtXRNode(node).TryGetFeatureValue(CommonUsages.deviceRotation, out Quaternion rotation);

        target.localPosition = position;
        target.rotation = rotation;
    }`;

const launchDataCalculationCode = `LaunchData CalculateLaunchData()
    {
        float displacementY = target.y - this.transform.position.y;
        Vector3 displacementXZ = new Vector3(target.x - this.transform.position.x, 0, target.z - this.transform.position.z);
        float flightTime = Mathf.Sqrt(-2 * trajectoryHeight / gravity) + Mathf.Sqrt(2 * (displacementY - trajectoryHeight) / gravity);
        Vector3 velocityY = Vector3.up * Mathf.Sqrt(-2 * gravity * trajectoryHeight);
        Vector3 velocityXZ = displacementXZ / flightTime;

        return new LaunchData(velocityXZ + velocityY * -Mathf.Sign(gravity), flightTime);
    }`;

const FruitSlicerVR =() =>{
	return(
	<Layout>
	    <ScrollToTop showBelow={250} />
		<div>
		<SectionTitle>FruitSlicerVR</SectionTitle>
		<SectionDivider/>
		<h1>Motivation</h1>
		<CenterText>
			Have you ever played VR and accidentally hit your hand over a wall? Break something in your house?
			As it turns out, you are not alone, it is not uncommon when using VR you may sometimes hit or break something. There is even a popular term on Youtube called <b>VR Fails</b> that yield way too many results and videos with a huge amount of views.
			This introduction was to describe to you what we wanted to explore with this project. An application that would be able to cause <b>Harm</b> to the user.
			But this harm is for a good reason, we needed to point out parameters that would make an application marked as "Harmful".
			First of all, we discussed over different types of harm from physchological to physical harm and discussed different ideas for an application.
			I would have two ideas, a horror game made in VR and with the use of jump scares it could induce harm to the user or a way to inflict physical harm. I went with the latter.
			The whole application was developed purely in Unity and it was made for the Oculus Quest specifically.
		</CenterText>
		<br />
		<br />
		<SectionDivider/>
		<h1>Implementation</h1>
		<CenterText>
			hen I first started this application, it was a simple catch a ball game, where one user could throw balls to the player and the other would try to grab them.
			It was developed and run in one machine, a pc or a laptop and the player in the laptop would see the user in VR and in real-life.
		</CenterText>
		<br />
			<br />
			<div style={CenterImage}>
				<img src="/images/FruitSlicer VR/FruitSlicer VR - 01 -Catch-A-Ball Game Simple.png" width="800" height="400" alt = "Catch a ball"/>
			</div>
		<br />
		<CenterText>
			The picture above shows the result. The green circle is the depiction of the user's stationary boundary. The red circle is the depiction of the edges of the stationary boundary. The green arrow shows where the user is currently looking and the transparent green circle is the cursor with which the user in pc throws a ball.
			We released then that this depiction of the guardian was not enough. Thus, we wanted to see the guardian that the player is drawing.
			The script that was able to do that, was the following:
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{displayBoundariesCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<CenterText>
			What this snip of code basically does is get all the points of the guardian that Oculus gives us. But we realise that this code didn't worked when the Oculus Quest Link was enabled, so we needed to find another way to create our experience. 
			So, in order to solve that problem, I designed a multiplayer game. One player would be able to player from PC and control as previously said the balls that was throwing to our player and the other player would playr from VR.
			This multiplayer experience was created using <b>Photon</b>, a framework that makes the development of multiplayer experiences real fast.
			When a player enter the application then he/she automatically joins a room that is assigned by me. In order to be able to stream the data from the Oculus to the other player we use the following script:
		</CenterText>
		<br />
			<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{streamPlayerCoordinatesCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<CenterText>
			We get the position and location directly from Unity's Input system and we stream that data to the player in the monitor. We need both the position and rotation so that we know where our VR player is at any given time.
			Instead of just creating and implementing the multiplayer functionality, we also changed our scene, so that it seems more realistic to our player.
			The result of previously mentioned application is shown below:
		</CenterText>
		<br />
			<br />
			<div style={CenterImage}>
				<img src="/images/FruitSlicer VR/FruitSlicer VR - 02 -Catch-A-Bottle.png" width="800" height="400" alt = "Catch a bottle"/>
			</div>
		<br />
		<CenterText>
			The new is clearly a bar and not an empty space. Instead of the user catching I would throw the to the user bottles so it doesn't feel mundane. Last but not least, the wooden sticks you are seeing is the guardian that we are drawing using the code we described above.
			But with thorough testing we realised something, that the "catching" movement was not enough to make the player try to get out of the boundary and we needed a new mechanism.
			So instead of catching I introduced slicing. The game then would feel very similar to the popular game <b>Fruit Ninja VR</b> and a lot more functionality would be added.
			Before diving into the new implementation, I need to add more things about the sychronization of the game. The main idea is that where the user in pc clicks a projectile would be fired following a curve. This is accomplished by using this script:
		</CenterText>
		<br />
			<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{launchDataCalculationCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<br />
			<SectionDivider/>
			<h1>Scene description</h1>
		<br />
		<CenterText>
			Now we will talk about our new scene, the fruit slicing one. We found out during experimentation that the more present the user is in the application, more are the chances that he/she will collide with the guardians, then we proceeded to add couple of things.
			First of all, we changed the scenery. The slicing in our game is made using katanas and the best environment for a Katana is <b>Japan</b>. So, this is our new environment:
		</CenterText>
		<br />
			<br />
			<div style={CenterImage}>
				<img src="/images/FruitSlicer VR/FruitSlicer VR - 03 -Environment.png" width="800" height="400" alt = "Environment"/>
			</div>
		<br />
		<CenterText>
			Then instead of fruits magically appearing in front of the user, like they did before we would make a "samurai-sensei" to throw them at him.This samurai would also have a table of fruits beside him so that he seems a lot more blend in the environment.
		</CenterText>
		<br />
			<GridContainer>
			  <img src="/images/FruitSlicer VR/FruitSlicer VR - 04 -Samurai.png" width="500" height="400" alt = "Samurai Sensei"/>		
			  <img src="/images/FruitSlicer VR/FruitSlicer VR - 05 -Samurai + Table of fruits.png" width="500" height="400" alt = "Table of Fruits"/>
			 </GridContainer>
		<br />
		<CenterText>
			The fruit that the samurai is throwing is random. I need to point out also that the samurai is a humanoid and is animated so that it feels more game-like to the player.
			The animation of the samurai is done using the Unity's <b>Animator</b> component and all the animations were taken from the <b>Mixamo</b> website, which has a lot of free humanoid animations.
		</CenterText>
		<br />
			<br />
			<div style={CenterImage}>
				<img src="/images/FruitSlicer VR/FruitSlicer VR - 06  Samurai Animation Tree.png" width="800" height="400" alt = "Environment"/>
			</div>
		<br />
		<CenterText>
			The tree is very simple to follow, a greeting animation will play when the user gets into the game and then when a fruit is thrown (when the pc player clicks on a spot) then the throwing animation will play.
			After adding a simple narrative we then proceeded to make the fruit slicing as much as enticing as possible so that the user would chase relentlessly to cut one.
			First, we added awesome particle effects to the fruits like a splatter effect according to which fruit the user is slicing (for example if it is a watermelon red, a lime green but a banana doesn't have any juice).
			Also, the Oculus controllers would vibrate on a successful fruit cut to improve the haptic feedback.
			In order to make the fruit cutting even more enganging we added a crowd. This crowd would be composed of Geishas that would cheer the user on a successful cut, each geisha is also a humanoid and it's animations are taken in a simular way from the Mixamo website.
		</CenterText>
		<br />
			<br />
			<div style={CenterImage}>
				<img src="/images/FruitSlicer VR/FruitSlicer VR - 07 -Geishas.png" width="800" height="600" alt = "Geishas"/>
			</div>
		<br />
		<CenterText>
			The last thing that would make the user even more enganged with our game was to add a combo counter. The combo meter would increase each time the user makes a successful cut on a fruit and return to 0 if he/she fails to cut one.
		</CenterText>
		<br />
			<br />
			<div style={CenterImage}>
				<img src="/images/FruitSlicer VR/FruitSlicer VR - 08 -Combo Counter.png" width="400" height="200" alt = "Geishas"/>
			</div>
		<br />
		<CenterText>
			Last but not least, I need to mention one last feature I added but didn't make it to the last version. A ninja. This scene has everything, so it wouldn't be nice if it missed a ninja. The ninja's job was also to push the player out of boundaries.
			In order to create the ninja I also added a day-night cycle so that the ninja would appear only at night.
			In the night the ninja would appear in front of the user and throw shurikens. The player would then have to step out of the ninja's way because the combo would be broken. This feature although really cool and really fitted the narrative didn't make it to the last version because we changed a little bit our approach of how we wanted the user to hit the boundaries.
			The ninja didn't fit our purpose because we wanted a more methodical approach of how the user will pass the boundaries. Instead of making random clicks, we pre-recorded a sequence of fruit throwing and replay it on each participant.
		</CenterText>
		<br />
		<CenterText>
		This picture displays a detailed overview of how our current system works:
		</CenterText>
		<br />
			<br />
			<div style={CenterImage}>
				<img src="/images/FruitSlicer VR/FruitSlicer VR - 09 -Overview.png" width="800" height="400" alt = "Application Overview"/>
			</div>
		<br />
		<br />
		<SectionDivider/>
		<br />
		<h1>Video</h1>
		<div style={CenterImage}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/0ph16W51JTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
		</div>
		<br/>
	</Layout>
	)
}

export default FruitSlicerVR