import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, CenterImage, CenterText } from '../components/Projects/ProjectsStyles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const structGestureCode = `
public struct Gesture
{
    public string name;
    public List<Vector3> fingerDatas;
    public UnityEvent onRecognized;
}`;


const inspectorFieldsCode = `		[Header("Hand Skeleton")]
    public OVRSkeleton skeleton;

    [Header("List of Gestures")]
    public List<Gesture> gestures;

    [Header("DebugMode")]
    public bool debugMode = true;`;

const saveFunctionCode = `
	void Save()
    {
        Gesture g = new Gesture
        {
            name = "New Gesture"
        };

        List<Vector3> data = new List<Vector3>();

        foreach (var bone in fingerbones)
        {
            data.Add(skeleton.transform.InverseTransformPoint(bone.Transform.position));
        }
        g.fingerDatas = data;
        gestures.Add(g);
    }`;

const spaceKeycodeSaveCode = `if (debugMode && Input.GetKeyDown(KeyCode.Space))
        {
            Save();
        }`;

const recognizeGestureCode = `Gesture Recognize()
    {
        Gesture currentGesture = new Gesture();

        float currentMin = Mathf.Infinity;

        foreach (var gesture in gestures)
        {
            float sumDistance = 0;

            bool isDiscarded = false;

            for (int i = 0; i < fingerbones.Count; i++)
            {
                Vector3 currentData = skeleton.transform.InverseTransformPoint(fingerbones[i].Transform.position);
                float distance = Vector3.Distance(currentData, gesture.fingerDatas[i]);
                if (distance > threshold)
                {
                    isDiscarded = true;
                    break;
                }

                // if the distance is correct we will add it to the first float we have created
                sumDistance += distance;
            }

            // if the gesture we made is not discarted and the distance of the gesture i minor then then Mathf.inifinty
            if (!isDiscarded && sumDistance < currentMin)
            {
                // then we set current min to the distance we have
                currentMin = sumDistance;

                // and we associate the correct gesture we have just done to the variable we created
                currentGesture = gesture;
            }
        }

        return currentGesture;
    }`;

const recognitionCode = `            
            Gesture currentGesture = Recognize();

            hasRecognize = !currentGesture.Equals(new Gesture());

            if (hasRecognize)
            {
                doneRecognizing = true;

                currentGesture.onRecognized?.Invoke();
            }
            else
            {
                if (doneRecognizing)
                {
                    Debug.Log("Not Recognized");
                    doneRecognizing = false;

                    notRecognize?.Invoke();
                }
            }`;

const angleBetweenHandAndHMDCode = `Vector3.Angle(skeleton.transform.right, hmdCenterEyeAnchor.transform.forward);`;
const angleBetweenYAxisAndHMDCode = `Vector3.Angle(skeleton.transform.up, hmdCenterEyeAnchor.transform.up);`;

const movingConditionCode = ` if (angleBetweenHandAndHMD > angleThresholdHandAndHMD && angleBetweenYAxisAndHMD < angleThresholdYAxisAndHMD)
        {
            startingSpeed += (0.03f + Time.deltaTime);

            if (startingSpeed > maxSpeed)
            {
                startingSpeed = maxSpeed;
            }

            cameraTransform.transform.position += hmdCenterEyeAnchor.transform.forward * startingSpeed * Time.deltaTime;
	}`;

const stopMovingCode = ` public void StopMovement()
    {

        startingSpeed = 1f;
    }`;
const SupermanVR =() =>{
	return(
	<Layout>
		<div>
		<SectionTitle>SupermanVR</SectionTitle>
		<SectionDivider/>
		<h1>Motivation</h1>
		<CenterText>
			The idea of the gesture recognition came to me when I first saw this video:
		</CenterText>
		<br />
		<br />
		<div style={CenterImage}>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/vSia7t_WlbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
		<br />
		<CenterText>
			So I wanted to create something around it, as well as experiment with it. The code I used in most of my project was from this tutorial, but I needed to deep dive into it and understand it, in order to create the <b>Superman VR</b>.
			Now, first let's deep dive into the code of this video.
		</CenterText>
		<br />
		<br />
		<SectionDivider/>
		<h1>Implementation</h1>
		<CenterText>
			First of all, we create a list of <b>OVRBone</b> variables called <b>fingerbones</b>, this list contains all the bones of our hand. Our hand is referenced through the variable called <b>OVRSkeleton</b> and this is the field we are going to use in order to check for a gesture.
			Gesture recognition as presented in the video is a form of continously searching for gestures. Since the movement of the hand is continuous, we need to constantly check if a gesture is made and if the current position of the fingers correspond to a gesture.
			We create a <b>struct</b> called <b>Gesture</b> with the following fields:
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{structGestureCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<CenterText>
		It is easy to understand the name and the list of Vector3 that each gesture contains which are the finger positions. Then we add an <b>UnityEvent</b>. <b>UnityEvents</b> are able to trigger functions when something particular happens and in our case, a gesture.
		Then we create the following fields:
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{inspectorFieldsCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<CenterText>
		The <b>OVRSkeleton</b> component is the one that we assign our hand. We also create a list of gestures that we are going to use in our application and last of all a debug variable that is going to be used in order to save our gestures.
		The first step is to find a way to register our gestures and this is done through the <b>Save</b> function.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{saveFunctionCode}
				</SyntaxHighlighter>
			</div>
		<br />
        <CenterText>
            This function enables the user to Save a gesture, it is very easy to understand since it takes all the <b>OVRBone</b> components from the skeleton and we added to the list. Another thing to point out is that <b>skeleton.transform.InverseTransformPoint</b> adds the position that is relative to the parent's, hence the object's local position. We want this kind of information since it will be easier to compare the gestures.
            We then add another field in our code called <b>threshold</b> and this field is very important, since it depicts how closely our hands need to match the gesture in order to trigger the <b>UnityEevent</b>.
            If we put a very big number then even gestures that are close to one of our gestures will trigger, whereas if we put a low threshold then we will need the exact gesture. So the threshold value is going to be decided through trial and error. For the first part I found out that a good value is <b>0.05</b>.
            As we made a way to save the gestures, then we need a way to trigger it. So we put this condition inside the <b>Update</b> function and we save the gesture while pressing the <b>Space</b> button in <b>Debug mode</b>.Then we need to copy the component values while in play mode and paste it when we stop the game, since we can not save anything while in Play mode.
            I believe this could be done better, since it is not really recommended to save it that way. A proper way could be using Json Files to save all the data.
            Now, we move to the part where we write the code that recognizes our gestures.
        </CenterText>
        <br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{recognizeGestureCode}
				</SyntaxHighlighter>
			</div>
		<br />
        <CenterText>
            It could seem complex at first, but it is really not. The basic principle behind this block of code is that we take the current position of the hand tracking fingers and we compare them with the already saved ones. If the total distance of all fingers is greater than our threshold then it is not the gesture.
            Then this could would need to run all the time since hand tracking and gestures are constantly updated.
        </CenterText>
        <br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{recognitionCode}
				</SyntaxHighlighter>
			</div>
		<br />
        <CenterText>
        Then in our <b>Update</b> method, we continously check if a new gesture is made and if this gesture falls below a threshold, concerning the previous gestures,it is recognized.
        Elsewhere, if it is not recognized, we create another <b>UnityEvent</b>.

        Now we will move to the code that makes our <b>VR player</b> move around like our superhero. We record two gestures with the way described above. One for the player to start and one for the player to stop.
        </CenterText>
        <br />
		<br />
			<GridContainer>
			  <img src="/images/Superman VR/SupermanVR - 01 - Gesture Start.png" width="500" height="300" alt = "Gesture Start"/>		
			  <img src="/images/Superman VR/SupermanVR - 02 - Gesture Stop.png" width="500" height="300" alt = "Gesture Stop"/>
			 </GridContainer>
		<br />
		<br />
        <CenterText>
        Then we need two specify the relative position of the two axis, the <b>HMD</b> axis which is located in the <b>CenterEyeAnchor</b> as well as the <b>Hand</b> axis. The Hmd coordinate system is aligned with the world coordinate system whereas the hand coordinate system is shown in the second picture.
        </CenterText>
        <br />
		<br />
			<GridContainer>
			  <img src="/images/Superman VR/SupermanVR - 03 - HMD local transformation.png" width="500" height="300" alt = "HMD Local coordinate system"/>		
			  <img src="/images/Superman VR/SupermanVR - 04 - Hand local transformation.png" width="500" height="300" alt = "Hand Local coordinate system"/>
			 </GridContainer>
		<br />
		<br />
        <CenterText>
            We need these coordinates systems because, we want our player to start moving when he is doing a first but also when that fist is aligned with the <b>HMD</b>. We can see that the transform systems point to different directions and as a result we take the following angles as reference.
        </CenterText>
        <br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{angleBetweenHandAndHMDCode}
				</SyntaxHighlighter>
			</div>
		<br />
        <CenterText>
            We take the right angle of our hand (red axis), because it is pointing backwards, when our hand is aligned. We then proceed to find an angle that is not too restrictive but as well as not too lose. The angle between the hand and <b>HMD</b> will enable to user to turn, when he/she turn both his/her hand as well as its head.
            We then take another angle.
        </CenterText>
        <br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{angleBetweenYAxisAndHMDCode}
				</SyntaxHighlighter>
			</div>
		<br />
        <CenterText>
            This angle is set so that the user would be able to initialize the locomotion technique only when he/she holds the hand upwards and not downwards.
        </CenterText>
        <br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Superman VR/SupermanVR - 05 - Hand local transformation downwards.png" width="500" height="300" alt = "Hand downward coordinate system"/>
			  </div>
		<br />
		<br />
		<CenterText>
			The following lines of code are the locomotion technique using our hand. We have a starting speed and then gradually increase the speed of our player. We also set a max speed so that the player doesn't go too fast or too slow.
			Then we update the <b>HMD</b> according to where the hmd is looking and in correspondance with the hand position and as the result the player moves forward.
			These functions are placed in the inspector.
		</CenterText>
        <br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{movingConditionCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<CenterText>
			Last but not least, we have to also need to stop the movement when the user does the stop gesture. This is pretty simple to do, since we do not need to do anything, since the only way to update our speed is by doing the superman fist.
			When the player stops then, we just set the value of the starting speed to 1.
		</CenterText>
		<br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{stopMovingCode}
				</SyntaxHighlighter>
			</div>
		<SectionDivider/>
		<br />
		<h1>Video</h1>
		<div style={CenterImage}>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/kOAVx5cbF8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		 </div>
		<br />
		</div>
		<br/>
	</Layout>
	)
}

export default SupermanVR