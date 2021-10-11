import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, CenterImage, CenterText } from '../components/Projects/ProjectsStyles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CollocatedVR =() =>{
	return(
	<Layout>
		<div>
		<SectionTitle>Collocated VR</SectionTitle>
		<SectionDivider/>
		<h1>Motivation</h1>
		<CenterText>
		The last 5 years VR technologies have become more and more available to people. The first applications were in the video games industry but due to the recent advancement in technology they have started to gain a lot of scientific value.
		The scientific value of Virtual and Augmented reality has been realised and many systems have been created. Most of the current work in the field of Mixed Reality (Augmented Reality and Virtual Reality) is treating both technologies in an isolated way. They focus on either using only VR or only AR to interact or collaborate on a task. However, similar to our current workflow where we use different types of technologies to interact and collaborate (e.g. smartphone combined with a laptop and or a tablet), Mixed Reality technologies are mainly going to extend this workflow and not replace it.
		The first part of the internship was to set up and calibrate the OptiTrack system and then integrate its tracking data into a Unity project. The second part was focused on writing a multiplayer Unity application, integrating all the different technologies into this scene and creating a smart space that is able to track and display any content on any of these devices. In our case, the system contained only two devices which were two Oculus Quest 2. This system could serve as a sandbox application in order to test new types of interactions that could happen between two co-located users in the virtual world.
		</CenterText>
		<br />
		<br />
		<SectionDivider/>
		<h1>Oculus Quest 2</h1>
		<CenterText>
		The latest and most advanced portable VR device. It outperforms by far its predecessor and it's even also much cheaper, thus making it the first headset that is worth having at home. Oculus Quest 2 has a much faster processor, a far better display ( 1440 x 1584 ) and fifty percent more RAM. It's technical characteristics make it possible to build even better applications than Oculus Quest 1.
		Oculus Quest 2 is equipped with 4 cameras that are used for the internal tracking system. They are attached on the 4 corners of the device. thus providing great tracking accuracy. The user is able to move the controllers in the real world and their representation would show in the application. 
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/CollocatedVR/Collocated VR - 01 - Oculus Quest 2.png" width="500" height="300" alt = "Oculus Quest 2"/>
			  </div>
		<br />
		<br />
		<SectionDivider/>
		<h1>OptiTrack</h1>
		<a>
		Optitrack is a state of the art motion capture system. OptiTrack technology uses an array of cameras and lights to both project and receive infrared light. The projected light hits retroreflective markers and bounces back toward the cameras, making the markers appear very bright to the camera and therefore easy to identify. When sets of at least four markers are arranged in unique, 3-dimensional configurations, the software can uniquely identify these configurations and assign positions and orientations to the configurations.
		</a>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/CollocatedVR/Collocated VR - 02 - Optitrack.png" width="600" height="300" alt = "OptiTrack"/>
			  </div>
		<br />
		<br />
		<br />
		<SectionDivider/>
		<h1>Development</h1>
		<br />
		<h2>The System</h2>
		<br />
		<CenterText>
			Our system is built using Unity and Motive. The first software is for creating a VR environment and deploying it on the Quest and the second one is how the Optitrack streams it's data into Unity.
		</CenterText>
		<br />
		<br />
			<GridContainer>
			  <img src="/images/CollocatedVR/Collocated VR - 03 - Unity Logo.png" width="500" height="300" alt = "Drawing of the environment"/>		
			  <img src="/images/CollocatedVR/Collocated VR - 04 - Motive Logo.png" width="300" height="300" alt = "Sword on the stone"/>
			 </GridContainer>
		<br />
		<br />
		<h2>OptiTrack Calibration</h2>
		<br />
		<CenterText>
			The first thing we needed to do is to calibrate the optitrack system. Optitrack calibration can be a tedious process and even a small shift in the cameras' configuration may require recalibration. The calibration process is mandatory in order for motive to function. Like in many other measurement systems, calibration is also essential for optical motion capture systems. During camera calibration, the system computes position and orientation of each camera and amounts of distortions in captured images, and they are used to construct a 3D capture volume in Motive.In order to calibrate motive, the user must prepare the software and start a specific process called "wanding" where the user moves a special stick called a wand around the area that the user sets up. When the motive collects enough data the calibration result is displayed and informs the user about the quality of the calibration, in most use cases we aim for excellent calibration which is approximately 1mm error. After finishing the calibration we use another tool called "Ground" which is a special tool that is provided by the Motive that is able to set the ground of our application.With the right calibration we are able to set up our environment with bigger precision and thus harness the true capabilities of the optitrack.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/CollocatedVR/Collocated VR - 05 - Optitrack Calibration.png" width="600" height="300" alt = "OptiTrack"/>
			  </div>
		<br />
		<br />
		</div>
		<br/>
	</Layout>
	)
}

export default CollocatedVR