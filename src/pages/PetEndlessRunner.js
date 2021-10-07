import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { GridContainer, CenterImage } from '../components/Projects/ProjectsStyles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism'


const platformWidthCode = `				platformWidths = new float[theObjectPools.Length];

        for (int i = 0; i < theObjectPools.Length; i++)
        {
            platformWidths[i] = theObjectPools[i].pooledObject.GetComponent<BoxCollider2D>().size.x;
        }

        minHeight = transform.position.y;
        maxHeight = maxHeightPoint.position.y;`;

const platformGenerationCode = `if (transform.position.x < generationPoint.position.x)
        {
            //comment to create a continuous platform
            distanceBetween = Random.Range(distanceBetweenMin, distanceBetweenMax);

            platformSelector = Random.Range(0, theObjectPools.Length);

            heightChange = Mathf.Clamp(transform.position.y + Random.Range(-maxHeight, maxHeight), minHeight, maxHeight);

  //we change the position of the generation point
            transform.position = new Vector3(transform.position.x + (platformWidths[platformSelector] / 2) + distanceBetween,
                heightChange,
                transform.position.z);

            GameObject newPlatform = theObjectPools[platformSelector].GetPooledObject();

            newPlatform.transform.position = transform.position;
            newPlatform.transform.rotation = transform.rotation;
            newPlatform.SetActive(true);
            //Debug.Log(newPlatform.transform.position);

            //prevents spawn on small platforms
            if(!newPlatform.name.Contains("3") && !newPlatform.name.Contains("4"))
            {
                if (Random.Range(0f, 100f) < randomEnemyThreshold)
                {
                    GameObject newEnemy = enemiesPool[Random.Range(0, enemiesPool.Length)].GetPooledObject();

                    float enemyXPos = Random.Range(-platformWidths[platformSelector] / 3, platformWidths[platformSelector] / 3);
		}
	    }
 transform.position = new Vector3(transform.position.x + (platformWidths[platformSelector] / 2),
            transform.position.y,
            transform.position.z);

            // Instantiate(thePlatforms[platformSelector],transform.position,transform.rotation);
        }
    }
}	`;

const objectPoolingCode = `
	public GameObject GetPooledObject()
    {
        for(int i = 0; i < pooledObjects.Count; i++)
        {
            if (!pooledObjects[i].activeInHierarchy)
            {
                return pooledObjects[i];
            }
        }

        GameObject obj = Instantiate(pooledObject) as GameObject;   //casting it as a GameObject
        obj.SetActive(false);
        pooledObjects.Add(obj);
        return obj;
    }`;

const updateHighscoreCode = `IEnumerator UploadNewHighscore(string username, int score)
    {
        WWW www = new WWW(webUrl + privateCode + "/add/" + WWW.EscapeURL(username) + "/" + score);
        yield return www;

        if (string.IsNullOrEmpty(www.error))
        {
            print("upload successful");
            DownloadHighscores();
        }
        else
        {
            print("Error uploading: " + www.error);
        }
    }`;

const PetEndlessRunner =() =>{
	return(
	<Layout>
		<div>
		<SectionTitle>Pet Endless Runner</SectionTitle>
		<SectionDivider/>
		<h1>Motivation</h1>
		<a>
			This is was my first game that I completed by myself, without working in a company, in Unity. The purpose of that game is to create an endless runner using animals as characters. The choice of animals was due to the fact that this game 
			is integrated into a social media for pets.
		</a>
		<br />
		<br />
		<SectionDivider/>
		<h1>Implementation</h1>
		<a>
			The first thing we needed to do was to create an endless scroller, meaning that the animal would have to run indefinetely. In order to do that we continuously update the position of our and as well as the camera's in order to follow the player.
			Each animal has a player controller that determines the starting speed and then it increases an fixed amount according to how much it moved.
			The next thing we need to do is to spanwn the platforms in the correct position. The correct position means that the player is able to jump and it is not too far away and or the platforms are not coinciding.
			So in order to do that, the first thing we do is get the platforms' width that we already defined and put them into a list.
		</a>
		<br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{platformWidthCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<a>
			Then we proceed to generate a new platform on a random point using the following code:
		</a>
		<br />
			<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{platformGenerationCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<a>
		What this code does is basically spawns platforms in the correct positions and also prevent spawn overlap. In order to make our game more interactive we also used some pickups and enemies. In both our enemies and pickups and platforms
		we are using <b>object pooling</b>, to reduce the number of objects in the scene and avoid unecessary data overflows.
		</a>
		<br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{objectPoolingCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<a>
			Now we are going to talk about our pick-ups. There are many types of pick-ups. Most of them are different fruits that give you points according to their rarity and two power-ups. The first one being double point score and the second one invicibility for a short period of time.
		</a>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Pet Endless Runner/Pet Endless Runner - 01 - Pick-ups.jpg" alt = "Pick ups"/>
			  </div>
		<br />
		<br />
		<a>
			The next thing we are to describe is our enemies. There are 4 types of enemies. A cactus, spikes, a woodtrap and a Bird. Each of them are static enemies and they appear at the platform.
			We have also to make sure that since the enemies have a certain length that they are not placed in platforms that they are smaller of them and as a result kill the player.We have to point out that the bird enemy is animated and we are using an animator component.
			In this game the player can choose between 4 characters, a cat, a corgi, a dog and a rabbit. Each one of them are animated and they also have an 
			animator component.
		</a>
		<GridContainer>
			<img src="/images/Pet Endless Runner/Pet Endless Runner - 02 - Enemies.jpg" alt = "Enemies"/>
			<img src="/images/Pet Endless Runner/Pet Endless Runner - 03 - Characters.jpg" alt = "Characters"/>
		</GridContainer>
		<a>
		The last thing we have to make sure in our environment is that is that the player is not getting bored. This is accomplished by changing different backgrounds as the player runs across the stage. These backgrounds are 
		again 4: Mountains, Forest, Volcano and Night Forest.
		</a>
		<br />
		<br />
			<div style={CenterImage}>
			  <img src="/images/Pet Endless Runner/Pet Endless Runner - 04 - Backgrounds.jpg" alt = "Terrains & Backgrounds"/>
			  </div>
		<br />
		<br />
		<a>
			Now, in order for our game to fit in the social platform we need a way to store our scores into a leaderboard. This is done by using <b>dreamlo</b> as our leaderboard, which is able to host our scores.
			When the user ends a successful run he/she is able to upload their score. When I created that application I used the deprecated class of Unity of <b>WWW</b> in order to post my score into <b>dreamlo</b>
		</a>
		<br />
		<br />
			<div style={CenterImage}>
				<SyntaxHighlighter  language="csharp" style={xonokai}>
					{updateHighscoreCode}
				</SyntaxHighlighter>
			</div>
		<br />
		<a>
			After this part is finished, the next step was to set up the application in order to be complete. Meaning I created, a start Menu and pause Menu:
		</a>
		<GridContainer>
			<img src="/images/Pet Endless Runner/Pet Endless Runner - 05 - Start Menu.jpg" width="600" height="300" alt = "Start Menu"/>
			<img src="/images/Pet Endless Runner/Pet Endless Runner - 08 - Pause Menu.jpg" width="600" height="300" alt = "Pause Menu"/>
		</GridContainer>
		<a>
			And then a leaderboard and a character selection screen:
		</a>
		<GridContainer>
			<img src="/images/Pet Endless Runner/Pet Endless Runner - 06 - Leaderboard Menu.jpg" width="600" height="300" alt = "Leaderboard Menu"/>
			<img src="/images/Pet Endless Runner/Pet Endless Runner - 08 - Pause Menu.jpg" width="600" height="300" alt = "Characters"/>
		</GridContainer>
		<SectionDivider/>
		<br />
		<h1>Video</h1>
		<div style={CenterImage}>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/GcGeCE7Blo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		 </div>
		</div>
		<br/>
	</Layout>
	)
}

export default PetEndlessRunner