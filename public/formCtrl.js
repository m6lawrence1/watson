var app = angular.module('myModule');

app.directive('mydirective', function() {
    return {
        restrict: 'AE',
        templateUrl: 'output.html'
    };
});

app.controller('formCtrl', function ($scope, $http){
    $scope.reload = function()
    {
   location.reload(); 
    };
    $scope.reveal = true;
    $scope.personalitize = function () {
        $scope.showMe = !$scope.showMe;
        $http.post('/api', {"body":$scope.textInput})
            .then(function(response) {
                console.log(response);
                $scope.big5=response.data.tree.children[0].children[0].children;
            
            }, function errorCallback(response) {
                alert('error');
            });
        $scope.reveal = false;
        
    };
    $scope.desc = {
		"Reserved": "Private person and don't let many people in",
		"Outgoing": "Make friends easily and feel comfortable around other people",
		"Independent": "Have a strong desire to have time to themselves",
		"Sociable": "Enjoy being in the company of others",
		"Demure": "Prefer to listen than to talk, especially in group situations",
		"Assertive": "Tend to speak up and take charge of situations, and They are comfortable leading groups",
		"Laid-back": "Appreciate a relaxed pace in life",
		"Energetic": "Enjoy a fast-paced, busy schedule with many activities",
		"Calm-seeking": "Prefer activities that are quiet, calm, and safe",
		"Solemn": "Generally serious and do not joke much",
		"Cheerful": "Joyful person and share that joy with the world",
		"Cautious of others": "Wary of other people's intentions and do not trust easily",
		"Trusting of others": "Believe the best in others and trust people easily",
		"Contrary": "Do not shy away from contradicting others",
		"Accommodating": "Easy to please and try to avoid confrontation",
		"Self-focused": "More concerned with taking care of themselves than taking time for others",
		"Altruistic": "Feel fulfilled when helping others, and will go out of their way to do so",
		"Compromising": "Comfortable using every trick in the book to get what They want",
		"Uncompromising": "Think it is wrong to take advantage of others to get ahead",
		"Proud": "Hold themselves in high regard, satisfied with who They are",
		"Modest": "Uncomfortable being the center of attention",
		"Hardened": "Think that people should generally rely more on themselves than on other people",
		"Empathetic": "Feel what others feel and are compassionate towards them",
		"Self-doubting": "Frequently doubt their ability to achieve their goals",
		"Self-assured": "Tend to feel they have the ability to succeed in the tasks they set out to do",
		"Unstructured": "Do not make a lot of time for organization in their daily life",
		"Organized": "Feel a strong need for structure in their life",
		"Carefree": "Do what they want, disregarding rules and obligations",
		"Dutiful": "Take rules and obligations seriously, even when they're inconvenient",
		"Driven": "Has high goals for themselves and work hard to achieve them",
		"Intermittent": "Has a hard time sticking with difficult tasks for a long period of time",
		"Persistent": "Can tackle and stick with tough tasks",
		"Bold": "Would rather take action immediately than spend time deliberating making a decision",
		"Deliberate": "Carefully think through decisions before making them",
//duplicate		"Self-assured": "Tend to feel calm and self-assured",
		"Mild-tempered": "It takes a lot to get them angry",
		"Content": "Generally comfortable with themselves as they are",
		"Confident": "Hard to embarrass and are self-confident most of the time",
		"Self-conscious": "Sensitive about what others might be thinking about them",
		"Self-controlled": "Has control over their desires, which are not particularly intense",
		"Hedonistic": "Feel their desires strongly and are easily tempted by them",
		"Calm under pressure": "Handles unexpected events calmly and effectively",
		"Susceptible to stress": "More easily overwhelmed in stressful situations",
		"Down-to-earth": "Prefer facts over fantasy",
		"Imaginative": "Has a wild imagination",
		"Unconcerned with art": "Less concerned with artistic or creative activities than most people who participated in our surveys",
		"Appreciative of art": "Enjoys beauty and seeks out creative experiences",
		"Dispassionate": "Do not frequently think about or openly express their emotions",
		"Emotionally aware": "Aware of their feelings and how to express them",
		"Consistent": "Enjoys familiar routines and prefers not to deviate from them",
		"Adventurous": "Eager to experience new things",
		"Concrete": "Prefer dealing with the world as it is, rarely considering abstract ideas",
		"Philosophical": "Open to and intrigued by new ideas and love to explore them",
		"Respectful of authority": "Prefer following with tradition in order to maintain a sense of stability",

        
	    'Openness': 'Openness to experience. Higher >50%: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things. Lower <50%: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.',
        'Conscientiousness': 'Higher >50%: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.Lower <50%: More likely to prefer the spontaneous over the planned.',
        'Introversion/Extraversion': 'Higher >50%: More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves.Lower <50%: Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial.',
        'Agreeableness': 'Higher >50%: Value getting along with others. They have a more optimistic view of human nature.Lower <50%: Value self interests over others. They are more skeptical of others\' motives.',
        'Emotional range': '**This demo cannot diagnose a mental illness.** Higher >50%: More likely to have negative emotions or get upset. It could mean they are going through a tough time.Lower <50%: More calm and less likely to get upset. It does not mean they are positive, or happy people.',
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
	};
    
    if ($scope.textInput) {
        $scope.textInput = "";
    }

});
