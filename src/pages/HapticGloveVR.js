import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, CenterImage, CenterText } from '../components/Projects/ProjectsStyles';
import  ScrollToTop  from '../components/Scroll/ScrollToTop';

const HapticGloveVR =()=>{
	return(
	<Layout>
	    <ScrollToTop showBelow={250} />
		<div>
		<SectionTitle>Magos</SectionTitle>
		<SectionDivider/>
		<h1>Work</h1>
		<CenterText>
			During my time at <b>Magos</b> where I worked as a Unity developer. I created an API that is able to connect the hardware device a.k.a the <b>Motion Capture glove</b> with a <b>Vive tracker</b> and make it possible to run in Unity 3d. This would 
			enable the user to move their hand and fingers and show them in virtual reality and display them in Virtual Reality. This glove could be used in many applications in order to provide a more realistic approach to virtual reality applications.
			The current technology and the most advanced, is able to provide hand tracking capabillities but without the high accuracy, thus making it impossible to create very precise applications.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/VR Haptic Glove - Magos/Magos - 01 - Vive Tracker.jpg" width="500" height="400" alt = "Brainstorming with Post-its"/>
			  </div>
		<br />
		<br />
		<CenterText>
			The next task that I needed to do was to connect our device accordingly so that it will control a Humanoid. Since one of the applications of this glove is to record finger movement.
			Controlling a humanoid and make sure that our glove was able to move a rigged humanoid proved a very arduous task. The end result would be a humanoid that is able to correctly move inside the scene and move its fingers to 
			change objects in the scene.
		</CenterText>
		<br />
		<br />
		<SectionDivider/>
		<h1>Video</h1>
		<div style={CenterImage}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLDZktaCsdtVdZnlw50DmnNaHHUWVLYQM_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		 </div>
		 <br />
		 <CenterText>
			and last but not least, a more complete application, that shows the capabillities both of the <b>Haptic Glove</b> and the API integration:
		 </CenterText>
		 <br />
		 <br />
		 <div style={CenterImage}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/HmqEJNGI6hY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		 </div>
		 <br />
		 <span>
			More info about the gloves:{' '}<a href="https://www.themagos.com/">https://www.themagos.com/</a>
		 </span>
		 <br />
		</div>
		<br/>
	</Layout>
	)
}

export default HapticGloveVR