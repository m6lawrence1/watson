var app = angular.module('myModule');

app.controller('formCtrl', function ($scope, $http){
    $scope.toggle = true;
    $scope.showMe = false;
    $scope.personalitize = function () {
        $scope.showMe = !$scope.showMe;
        $http.post('/api', {"body":$scope.textInput})
        .then(function(response) {
            console.log(response);
            $scope.big5=response.data.tree.children[0].children[0].children;
//            $scope.openness=response.data.tree.children[0].children[0].children[0].children;
//            $scope.conscientiousness=response.data.tree.children[0].children[0].children[1].children;
//            $scope.extraversion=response.data.tree.children[0].children[0].children[2].children;
//            $scope.agreeableness=response.data.tree.children[0].children[0].children[3].children;
//            $scope.emotional=response.data.tree.children[0].children[0].children[4].children;
//            $scope.
            
        }, function errorCallback(response) {
        alert('error');
        });
        
    };
    $scope.desc = {
		"Reserved": "They are a private person and don't let many people in",
        
		"Outgoing": "They make friends easily and feel comfortable around other people",
        
		"Independent": "They have a strong desire to have time to themselves",
		"Sociable": "They enjoy being in the company of others",

		"Demure": "They prefer to listen than to talk, especially in group situations",
		"Assertive": "They tend to speak up and take charge of situations, and They are comfortable leading groups",

		"Laid-back": "They appreciate a relaxed pace in life",
		"Energetic": "They enjoy a fast-paced, busy schedule with many activities",

		"Calm-seeking": "They prefer activities that are quiet, calm, and safe",
		"Excitement-seeking": "They are excited by taking risks and feel bored without lots of action going on",

		"Solemn": "They are generally serious and do not joke much",
		"Cheerful": "They are a joyful person and share that joy with the world",

		"Cautious of others": "They are wary of other people's intentions and do not trust easily",
		"Trusting of others": "They believe the best in others and trust people easily",

		"Contrary": "They do not shy away from contradicting others",
		"Accommodating": "They are easy to please and try to avoid confrontation",

		"Self-focused": "They are more concerned with taking care of themselves than taking time for others",
		"Altruistic": "They feel fulfilled when helping others, and will go out of their way to do so",

		"Compromising": "They are comfortable using every trick in the book to get what They want",
		"Uncompromising": "They think it is wrong to take advantage of others to get ahead",

		"Proud": "They hold themselves in high regard, satisfied with who They are",
		"Modest": "They are uncomfortable being the center of attention",

		"Hardened": "They think that people should generally rely more on themselves than on other people",
		"Empathetic": "They feel what others feel and are compassionate towards them",

		"Self-doubting": "They frequently doubt their ability to achieve their goals",
		"Self-assured": "They feel they have the ability to succeed in the tasks they set out to do",

		"Unstructured": "They do not make a lot of time for organization in their daily life",
		"Organized": "They feel a strong need for structure in their life",

		"Carefree": "They do what they want, disregarding rules and obligations",
		"Dutiful": "They take rules and obligations seriously, even when they're inconvenient",

		"Content": "They are content with their level of accomplishment and do not feel the need to set ambitious goals",
		"Driven": "They have high goals for themselves and work hard to achieve them",

		"Intermittent": "They have a hard time sticking with difficult tasks for a long period of time",
		"Persistent": "They can tackle and stick with tough tasks",

		"Bold": "They would rather take action immediately than spend time deliberating making a decision",
		"Deliberate": "They carefully think through decisions before making them",

		"Self-assured": "They tend to feel calm and self-assured",
		"Prone to worry": "They tend to worry about things that might happen",

		"Mild-tempered": "It takes a lot to get them angry",
		"Fiery": "They have a fiery temper, especially when things do not go their way",

		"Content": "They are generally comfortable with themself as they are",
		"Melancholy": "They think quite often about the things they are unhappy about",

		"Confident": "They are hard to embarrass and are self-confident most of the time",
		"Self-conscious": "They are sensitive about what others might be thinking about them",
	
		"Self-controlled": "They have control over their desires, which are not particularly intense",
		"Hedonistic": "They feel their desires strongly and are easily tempted by them",

		"Calm under pressure": "They handle unexpected events calmly and effectively",
		"Susceptible to stress": "They are easily overwhelmed in stressful situations",

		"Down-to-earth": "They prefer facts over fantasy",
		"Imaginative": "They have a wild imagination",
		
		"Unconcerned with art": "They are less concerned with artistic or creative activities than most people who participated in our surveys",
		"Appreciative of art": "They enjoy beauty and seek out creative experiences",
		
		"Dispassionate": "They do not frequently think about or openly express their emotions",
		"Emotionally aware": "They are aware of their feelings and how to express them",

		"Consistent": "They enjoy familiar routines and prefer not to deviate from them",
		"Adventurous": "They are eager to experience new things",
		
		"Concrete": "They prefer dealing with the world as it is, rarely considering abstract ideas",
		"Philosophical": "They are open to and intrigued by new ideas and love to explore them",
			 
		"Respectful of authority": "They prefer following with tradition in order to maintain a sense of stability",
		"Authority-challenging": "They prefer to challenge authority and traditional values to help bring about positive changes",
        
	    'Openness': 'Openness to experience. Higher: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.\nLower: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.',
        'Conscientiousness': 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.',
        'Introversion/Extraversion': 'Higher: More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves.\nLower: Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial.',
        'Agreeableness': 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.',
        'Emotional range': '**This demo cannot diagnose a mental illness.** Higher: More likely to have negative emotions or get upset. It could mean they are going through a tough time.\nLower: More calm and less likely to get upset. It does not mean they are positive, or happy people.',
        'Adventurousness': 'Eagerness to trying new activities and experiencing new things.',
        'Artistic interests': 'Appreciation for art and beauty, both man-made and in nature.',
        'Emotionality': 'Emotional availability; awareness of own feelings.',
        'Imagination': 'Openness to creating an inner world of fantasy.',
        'Intellect': 'Intellectual curiosity; openness to new ideas.',
        'Authority-challenging': 'Openness to re-examine own values and traditions; readiness to challenge authority.',
        'Achievement-striving': 'The need for personal achievement and sense of direction.',
        'Cautiousness': 'Tendency to think things through before acting or speaking.',
        'Dutifulness': 'Sense of duty; amount of emphasis placed on fulfilling obligations.',
        'Orderliness': 'Personal organization, tidiness, neatness.',
        'Self-discipline': 'Will-power; the capacity to begin tasks and follow through to completion in spite of boredom or distractions.',
        'Self-efficacy': 'Belief in one\'s own competence.',
        'Activity level': 'Pace of living; level of busyness.',
        'Assertiveness': 'Forcefulness of expression; pursuit of leadership and social ascendancy; desire to direct the activities of others.',
        'Cheerfulness': 'Tendency to experience or express positive emotions.',
        'Excitement-seeking': 'A need for environmental stimulation.',
        'Warmth': 'Interest in and friendliness towards others; socially confident.',
        'Gregariousness': 'Fondness for the company of others; sociability.',
        'Altruism': 'Active and genuine concern for the welfare of others.',
        'Cooperation': 'Dislike of confrontations. Responding to interpersonal conflict with a willingness to compromise.',
        'Modesty': 'Tendency to be unassuming and play down own achievements; humility.',
        'Straightforwardness': 'Frank and genuine in expression; candid, blunt.',
        'Sympathy': 'Attitude of compassion for others; kindness.',
        'Trust': 'Level of belief in the sincerity and good intentions of others.',
        'Fiery': 'Tendency to experience–but not necessarily express–anger or frustration.',
        'Prone to worry': 'Tendency to dwell on difficulty or troubles; easily experience unease or concern.',
        'Melancholy': 'Normal tendency to experience feelings of guilt, sadness, hopelessness, or loneliness. **This demo cannot diagnose a mental illness.**',
        'Impulsiveness': 'Tendency to act on cravings and urges rather over resisting them or delaying gratification.',
        'Self-consciousness': 'Concern with rejection, embarrassment; shyness.',
        'Sensitivity to stress': 'Difficulty in coping with stress or pressure in difficult situations.'	 
	}
});
