import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, CenterImage, CenterText } from '../components/Projects/ProjectsStyles';
import  ScrollToTop  from '../components/Scroll/ScrollToTop';

const StabbingPostitsVR =() =>{
	return(
	<Layout>
	    <ScrollToTop showBelow={250} />
		<div>
		<SectionTitle>Stabbing Post-its VR</SectionTitle>
		<SectionDivider/>
		<h1>Motivation</h1>
		<CenterText>
			Brainstorming with post-its can be a fun and creative way to come up with new ideas, from silly ones to more serious ones. These sessions can provide powerful insights to problems that will appear and as well as ways to tackle them. So, as a team we found a new way to brainstorm with post-its but this time in the virtual world and more specifically using Oculus Quest. 
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 1.png" width="500" height="400" alt = "Brainstorming with Post-its"/>
			  </div>
		<br />
		<br />
		<CenterText>
			In order to explore how brainstorming with post-its work we first did a first brainstorming session about what we need to do if we opened a cafeteria. Then after that we proceeded to make another post-its brainstorming session in order to see what we were going to create in the virtual environment. This time as a template we used <b>Miro</b>.
			This project was created on par with a designer in order to embellish it and make it more appealing to users.
		</CenterText>
		<br />
		<br />
		<SectionDivider/>
		<h1>Design</h1>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 2.png" alt = "Miro"/>
			  </div>
		<br />
		<br />
		<CenterText>
			First, we define our objects, post-its, walls, etc.. so we can understand more about them and as well as the actions we do with them. After defining the main elements of our project, we then proceeded to find different and awesome ways to interact with Post-Its.The most prevalent ideas were either stabbing the post-its with swords or suck the post-its with a vacuum, but after discussion we both agreed to stab the post-its. The next step is to define how this application would function and what are its main aspects. We concluded that we are going to use many swords and each sword should act as a group post-it that defines a certain category. After that, we sketched the flow of actions within our scene.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 3.png" alt = "Drawing on notes"/>
			  </div>
		<br />
		<br />
		<CenterText>
			This is our main scene, the user has in front of him/her a list of post-its. He can not pick them up whatsoever. The only thing that has the ability to move a post-it is the sword, where the user must pick it from the stone that is in front of him/her.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 4.png" alt = "Drawing on notes"/>
			  </div>
		<br />
		<br />
		<CenterText>
			After the user has choose the post-its that he/she wants to categorize, in order to name he/she must place the sword above his head and speak the name.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 5.png" alt = "Drawing on notes"/>
			  </div>
		<br />
		<br />
		<CenterText>
			When a sword stabs a post-it, then it is attached to the sword in a circular display, the player can see the post-its by browsing through them. After the user leaves the sword then it returns to a special position with the collected post-its.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 6.png" alt = "Drawing on notes"/>
			  </div>
		<br />
		<br />
		<br />
		<SectionDivider/>
		<h1>Prototyping & Implementation</h1>
		<br />
		<SectionDivider/>
		<br />
		<h2>Sword and notes</h2>
		<br />
		<CenterText>
			After all the elements of the project have been agreed we then proceeded into creating the Unity environment. 
			The first milestone of our journey is to create the swords so that they can be grabbed by our player. In order to do that we used an asset called AutoHand VR. With this asset we are able to realistically grab the swords (and not just attach them to our hands) as well as, it provides UnityEvents on each action (grabbing, letting go of the trigger etc). This provided an easy as well as efficient way for us to create our interactions.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 7.png" alt = "Hand grabbing sword"/>
			  </div>
		<br />
		<br />
		<CenterText>
			The second task is to find a way to grab and arrange the post-its around the sword. In order for a sword to effectively pierce a post-it, we used a collider at the edge, this is done in order to avoid triggering the post-its with every corner of the sword. The next thing we added is a way for our post-its to circulate around the sword.
		</CenterText>
		<GridContainer>
			<img src="/images/Stabbing Post-it VR/Stabbing Post-its - 8.png" alt = "Sword with one post-it"/>
			<img src="/images/Stabbing Post-it VR/Stabbing Post-its - 9.png" alt = "Sword with many post-its around it"/>
		</GridContainer>
		<CenterText>
			After that we need to determine the sword's and the post-it it contains, final positions. These positions determine where the sword and the post-its are gonna land when the user releases it. We created a wall that functions as a sword and post-it holder.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 10.png" alt = "Sword and post-its final positions"/>
			  </div>
		<br />
		<br />
		<CenterText>
			After some iterations, we realised that this type of wall display created a lot of problems, because after a sword was released, it was really hard to grab it again. So we implemented a new method, with a different display method, that was easier for the user to grab the sword.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 11.png" alt = "New sword stand"/>
			  </div>
		<br />
		<br />
		<CenterText>
			The last thing we added is the ability to take swords out of a stone instead of just the swords floating in front of the player. After a sword is released from the stone, a visual effect will play and another one will appear at its place.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 12.png" alt = "Sword on the stone"/>
			  </div>
		<br />
		<br />
		<SectionDivider/>
		<h1>Labelling the swords & Speech recognition</h1>
		<CenterText>
			To add names to groups we decided early on to use speech recognition. It is a more immersive experience then typing, and finding a good way to type in VR could be a project by itself. The only free and on-device speech recognition software we found was <b>PocketSphinx</b>. 
			We started with the following concept: The user lifts the sword up over their head and says the name they want to give the group. To let the user know what is happening and what they had to do, we wanted to add some feedback. If the user lifts the sword a beam appears, their controller vibrates, and a voice asks the user how their group should be named. After the speech analysis, depending on the result, the voice approves by saying: <b>Your group has a new name</b>. If the speech could not be recognized the voice asks the user to try again. 
			Later we also made sure that the user can only change the name of one group at a time. Because the user can hold two swords this was necessary. 
		</CenterText>
		<br />
		<br />
		<SectionDivider/>
		<h1>Final Version</h1>
		<CenterText>
			Our idea from the start was to have the user stand on an island, with the Post-Its in front of them, and the overview of created groups next to them.We have also added some trees, stones, and animated grass to make the environment more alive.
		</CenterText>
		<br />
		<br />
			<GridContainer>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 13.jpg" width="500" height="400" alt = "Drawing of the environment"/>		
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 14.png" width="500" height="400" alt = "Sword on the stone"/>
			 </GridContainer>
		<br />
		<br />
		<CenterText>
			The user has all the important elements, the sword spawner, the post-its, and the displays for the groups right next to them. This can be seen as a precaution to take into account that users might not have much space to walk around. It also makes looking at the unsorted Post-Its and at the groups easier. 
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 15.png" alt = "Sword on the stone"/>
			  </div>
		<br />
		<br />
		<SectionDivider/>
		<h1>Conclusion & Future work</h1>
		<CenterText>
			To conclude we must say that we successfully implemented everything that was on our list, we managed to transfer our ideas to sketches and to fully develop them in the virtual environment. Our implementation is still not perfect, some problems were not solved during our development.
			The first thing is that there is no distinct way for the user to know, where the sword will go after letting it and sometimes it can cause confusion, because it may seem lost. Another thing is the speech recognition. The API that we are using is causing the main game to freeze for a little while and it can be annoying.
			Apart from the problems, new features could be added so that they can make this application much more appealing. First of all, multiplayer functionality, where two or more users can collaborate in the same environment. Apart from that, we can see that our scene contains a discrete amount of post-its, it would be a helpful functionality if the user is able to create more or even change the color of them, so it can resemble as much as possible the way we do it in real life.
		</CenterText>
		<br />
		<br />
		<SectionDivider/>
		<br />
		<h1>Video</h1>
		<div style={CenterImage}>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/yf8Abz3wlqI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		 </div>
		</div>
		<br/>
	</Layout>
	)
}

export default StabbingPostitsVR