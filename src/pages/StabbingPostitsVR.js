import { Layout } from '../layout/Layout';

const StabbingPostitsVR =() =>{
	return(
	<Layout>
		<div>
		<h1>Motivation</h1>
		<a>
			Brainstorming with post-its can be a fun and creative way to come up with new ideas, from silly ones to more serious ones. These sessions can provide powerful insights to problems that will appear and as well as ways to tackle them. So, as a team we found a new way to brainstorm with post-its but this time in the virtual world and more specifically using Oculus Quest. 
		</a>
		<br />
		<br />
			<div
				style={{
				  display: "flex",
				  justifyContent: "center",
				}}
			  >
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 1.png" width="500" height="400" alt = "Red Tubes Numbered"/>
			  </div>
		<br />
		<br />
		<a>
			In order to explore how brainstorming with post-its work we first did a first brainstorming session about what we need to do if we opened a cafeteria. Then after that we proceeded to make another post-its brainstorming session in order to see what we were going to create in the virtual environment. This time as a template we used **Miro**.
			This project was created on par with a designer in order to embellish it and make it more appealing to users.
		</a>
		<h1>Design</h1>
		<br />
		<br />
			<div
				style={{
				  display: "flex",
				  justifyContent: "center",
				}}
			  >
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 2.png" alt = "Red Tubes Numbered"/>
			  </div>
		<br />
		<br />
		<a>
			First, we define our objects, post-its, walls, etc.. so we can understand more about them and as well as the actions we do with them. After defining the main elements of our project, we then proceeded to find different and awesome ways to interact with Post-Its.The most prevalent ideas were either stabbing the post-its with swords or suck the post-its with a vacuum, but after discussion we both agreed to stab the post-its. The next step is to define how this application would function and what are its main aspects. We concluded that we are going to use many swords and each sword should act as a group post-it that defines a certain category. After that, we sketched the flow of actions within our scene.
		</a>
		<br />
		<br />
			<div
				style={{
				  display: "flex",
				  justifyContent: "center",
				}}
			  >
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 3.png" alt = "Red Tubes Numbered"/>
			  </div>
		<br />
		<br />
		<a>
			This is our main scene, the user has in front of him/her a list of post-its. He can not pick them up whatsoever. The only thing that has the ability to move a post-it is the sword, where the user must pick it from the stone that is in front of him/her.
		</a>
		<br />
		<br />
			<div
				style={{
				  display: "flex",
				  justifyContent: "center",
				}}
			  >
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 4.png" alt = "Red Tubes Numbered"/>
			  </div>
		<br />
		<br />
		<a>
			After the user has choose the post-its that he/she wants to categorize, in order to name he/she must place the sword above his head and speak the name.
		</a>
		<br />
		<br />
			<div
				style={{
				  display: "flex",
				  justifyContent: "center",
				}}
			  >
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 5.png" alt = "Red Tubes Numbered"/>
			  </div>
		<br />
		<br />
		<a>
			When a sword stabs a post-it, then it is attached to the sword in a circular display, the player can see the post-its by browsing through them. After the user leaves the sword then it returns to a special position with the collected post-its.
		</a>
		<br />
		<br />
			<div
				style={{
				  display: "flex",
				  justifyContent: "center",
				}}
			  >
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 6.png" alt = "Red Tubes Numbered"/>
			  </div>
		<br />
		<br />
		<h1>Prototyping & Implementation</h1>
		<br />
		<h2>Sword and notes</h2>
		<br />
		<a>
			After all the elements of the project have been agreed we then proceeded into creating the Unity environment. 
			The first milestone of our journey is to create the swords so that they can be grabbed by our player. In order to do that we used an asset called AutoHand VR. With this asset we are able to realistically grab the swords (and not just attach them to our hands) as well as, it provides UnityEvents on each action (grabbing, letting go of the trigger etc). This provided an easy as well as efficient way for us to create our interactions.
		</a>
		<br />
		<br />
			<div
				style={{
				  display: "flex",
				  justifyContent: "center",
				}}
			  >
			  <img src="/images/Stabbing Post-it VR/Stabbing Post-its - 7.png" alt = "Red Tubes Numbered"/>
			  </div>
		<br />
		<br />
		<a>
			The second task is to find a way to grab and arrange the post-its around the sword. In order for a sword to effectively pierce a post-it, we used a collider at the edge, this is done in order to avoid triggering the post-its with every corner of the sword. The next thing we added is a way for our post-its to circulate around the sword.
		</a>
		</div>
		<br/>
	</Layout>
	)
}

export default StabbingPostitsVR