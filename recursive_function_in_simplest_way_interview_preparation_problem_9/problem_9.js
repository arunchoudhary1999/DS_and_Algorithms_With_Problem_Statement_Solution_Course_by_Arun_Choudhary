// Recursive_function_in_simplest_way_interview_preparation_problem_9
// Recursion: When Function Call Itself.
// Otherwise it will get called for infinite time.
// If a function call itself then there must be an end point.
let counter = 1;                                    // Add Counter Variable 
function demo(number) {                             // Function with Defination 
    if(counter > number) {                          // Apply If Condition
        return;
    };
    console.log("Like This Video", + counter);
    counter ++;
    demo(number);                                   // Recursion Function
};
demo(10);                                           // Function Call

// -> aag ka video bahut he intresting hai, abhi tak hmne 8 video dekhe hai, alag-alag tareke se or actual me samazne ke kosis kare hai, ke actual me DS hai kea.
// -> aaj hm is video me Recursion concept ko samzegay ke Recursion kea hai, or kis tarah se use keya jata hai, esse /-
// -> sabse pahale hm samazte hai, ke Recursion ka mtlb kea hai?,
//    or kase hm ek function ko recursively call hota huva dekhte hai, 
//    or function ke bad hm resursion padte hai,
//    or kase kam aasan ho jata hai, recursion ka,
//    jab hm recursionn ke bat kerte hai, to kuch na kuch end point hona chaheye, varna hamara jo function hai, vah chalta rahega, us case me kea rahega vah finite chalta rahega, so there must be an end point to iske liye kuch to end point hona chaheye isko band/stop kerne ke liye.
//    jase hm jante hai, ke yah sare bate requirement ke upper rahate hai, hame requirement ko samazna jaruri hai, keo introduce huva hai vah samazna jaruri hai uske bad hm esaly code likhna start ker degay /-
// -> to recursion se pahale aata hai, function hm function kase banate hai --->
//    hm ek function likhte hai, uska ek nam de dete hai (suppose hm ne de deya hai -- demo), or parathesis brakect ke under hm kuch parameter bhi de sakte hai ( () <-- is tarah ka hota hai parathasis brakect or abhi hame kuch parameter nahi keya hai to hmne esse khale chod deya hai), or hm curly braces laga ke uske under hamare requirement ke aanusar hm kcy bhi dal sakte hai ( {} <-- yah hamra curly braces hai ) 
//    kuch is tarah se --> { console.log("Like this video") }
//                           |____________________________|
//                                         |
//                                         |
//                                  hmne function ke under is tarah se console.log dal deya, is tarah se function ke curly braces ke under likne ko hm kahate hai. --> Set Of Statement
//     ________________________________________
//    | function demo() {                      |
//    |     console.log("Like This Video");    |
//    | };                                     |
//    |________________________________________|
//                         |
//                         |
//    yah to ho gaya function with defination mtlb hmne function ke sare defination bhi de dii hai.
//     ___________________                  
//    | function demo() { |                               __________________________________                                  
//    |         <---------|------------------------------| console.log("Like This Video");  |
//    | };                |             |                |__________________________________|                                        
//    |___________________|             |                                 |
//              |                       |                                 |
//              |                       |                                 |
//    yah hamara function     | jab hmne set of      |  yah hmara set of statement/defination
//    ho gaya hai.            | statement/defination |
//                            | ko function ke under |
//                            | dal deya kuch is     |
//                            | kuch is tarah se     |
//                            | function demo() {    | 
//                            | console.log("Like    |
//                            | This Video")''       | 
//                            | };                   |
//    to yah hamara ho gaya ho, FUNCTION WITH DEFINATION yaha tak thik hai.
// -> ab ese call kerna, keoke calling bhi jaruri hai, jo hmne console kervaya hai, vah print nahi hoga bena calling keye bena.
//    to is tarah se hamara call kerne ka tareka rahega 👇 :-
//                                                       |       function demo() {                      // function with defination
//                                                       |               console.log("Like This Video");
//                                                       |       };
//                                                       |---->  demo();                                // calling
//                                                                                      |
//                                                                                      |
//                                                               ise hm run karegay to hamara output yah aayega -->
//                                                               Output:--
//                                                                          Like This Video
//    yaha tak thik hai, 
//                      me chahe jitne bar call karu mtlb me n time call karuga to yah hame n time output dega.
//                      kuch is tarah se :--
//                                            demo();
//                                            demo();
//                                            demo();
//                                            demo();
//                                            ---//--
//                                            etc....
//    is tarah hm jitne bar call karegay utne bar hame output dekhana rahega.
// {* yah faida hota hai function ka ke Right One's Calls Multiple Time. *}
// {* Function :- Function is a blockes of statement one's statement or more than one's statement function ke jo body hogye usme hamara logic put ker ke uske bad hm usko call ker sakte hai n time yahe hota hai function ka kam *} <-- isme hmne function ka kam samaz leya hai.
// -> What is Recursion :-👉 Recursion ka mtlb kea hota hai, ke aager koi bhi function hota hai, vah apne aap ko call ker raha hai, khud se call ker raha hai, When Function Call Itself Is Called Recursion.
// -> Recursion call hote ja raha hai, but is case me kea hoga,aager koi function apne aap me call kerte rahega, to kea hoga, ke vah function infinite tak chalta rahega, mtlb uska koi end nahi hai.
//     ________________________________________________________________________________________________________________________________________________________________________________________________________________________
//    | to hm ek example dekh lete hai -> hm kea karegay ke hamra function ke under ese ko call ker lete hai, yahe to kahate hai recursion ke defination ke aap function ke under call kare ja rahe ho, vahe hm ker rahe hai.  |
//    |________________________________________________________________________________________________________________________________________________________________________________________________________________________|
//                      |
//                      |
//    __________________|_________________________________________________________
//   | function demo() {                            // function with defination   | 
//   |    console.log("Like This Video");                                         |
//   | demo();                                      // calling                    |
//   | };                                                                         |
//   | demo();                                      // calling                    |
//   |____________________________________________________________________________|
//                      |
//                      |
// {* to hmne isme kea keya :- 1. ek demo nam se ek function banaya.
//                             2. or sabse niche hmne demo function ko call keya.
//                             3. fir hmne function ko call keya hamare function ke under he (inside the function) *}
// -> hm hamare function ko run ker ke dekhte hai, ke kea dekhata hai.
//    Output:- 
//             Like This Video
//             Like This Video
//             -------//------
//             -------//------
//             -------//------
//             n time hamara function call hota rahega to hame n time output me dekhata rahega.
// -> n time hamara function call hota he rahega, or ek samai esa aayega ke bas or last me error kea dega ke --> 
//    vah n time chalega to vah last me rukhega to jarur last me kea error dekha dega ke --> 
//                                                                                           if(isStackOverFlowError(e))
//                                                                                              ^
//                                                                                           Range Error : Maximum call stack size exceeded.
// -> yaha pe Call Stack ka yah mtlb hai, ke jab koi function call kerte hai, suppose ke aager 5 function hote, to sabse pahale hamara function call hoga, as a anonimous call hoga, jo hamara pahala function hoga, ek-ek ker ke call hote jayegay or stack me add hote jayegay, jis tarah se calling ho rahe hai, us tareke se he hamare stack me Add hota rahega.
// -> jo hamara function tha vah call hota raha hota raha or ek time pe usne kah deya ke call stack, stack ke limit khatam ho chuke hai, stack ke upper hm or video dekhegay ke kea hota hai.
// -> yaha pe hmne ek chij samaz me aai hai, ke hame recursion ka mtlb samaz me aa gaya hai, ke when function call itself is called recursion.
// -> but yaha ek line bahut importance hai, ke hmne likhe hai, :- // If a function call itself than there must be an end point.
//    mtlb jo hmne function banata hai, usme hmne uske under he call keya hai, to usse yah function bar-bar call hota rahega. to usko rokne/stop kerne ke liye kuch to end point hona chaheye (then there must be an end point) hena, kuch to end point hona chaheye function call ko rokhne ke liye,
//    ** to yahe hai hamara logic, yah logiv hai, hamara ** hm ek function ko bar-bar thodi na call ker sakte hai, koi na koi condition pe aa ke us function ko rokhna padega na, vahe condition hm yaha sikhne wale hai, or us condition ko hame yaha use kerna hai, hamare requirement ke annusar, aager hmko lagta hai, ke yaha recursion use kerna jaruri hai, to  hm vaha recurssion use ker sakte hai, to isme hame kuch na kuch end point hona chaheye,
//    hm isko samazte hai :-   
// -> to hm kea karegay ke jaha function demo call keya hai usme hm ek number value assign ker dete hai, kuch is tarah se :- demo(10);
//    mtlb hmne as a parameter Assign/pass ker deya hai. :- demo(10);
// -> or us parameter ko hm yaha recieve ker rahe hai, as a number kuch is tarah se :- function demo(number)
// -> to iske bad hm kea karegay ke function ke upper hm ek counter nam ka variable bana ke usme hm value assign ker degay 1.
//    kuch is tarah se :- let counter = 1;
// -> to aab hm dekhegay ke condition ke hisab se function ko vall kerna, vaha recursively call bhi hoga nut vaha pe ek condition hogye, or jase he vaha condition true hogye, us case me hamara function return ker dega or bad me hamara function chalna band ho jayega.
//    to hmne isme recursively function ko call bhi ker leya or vah function infinite tak nahi chala, jis tarah hm ne loop use keya usse tarah se vahe felling aane wale hai, jab bhi hm recursion padte hai, to hame while loop or for loop me nahi jana hai, all those hm function ke under bhi use ker sakte ho, but yah recursively chalta hai, to essa lagta hai loop chal raha hai, Ilterate ho raha hai.
// -> to hmne kea kea simple demo call keya usme 10 Assign/pass keya or 10 ko recieve ker leya, kuch is tarah se --> 
//       ___________________________________________________________________
//      | let counter = 1;                    // add variable               |
//      | function demo(number) {             // function with defination   | 
//   |--|----->                                                             |
//   |  |     console.log("LIke This Video");                               | 
//   |  |     demo()                                                        |
//   |  | };                                                                |
//   |  | demo(10);                           // calling                    |
//   |  |___________________________________________________________________|
//   |                                                                                                                     
//   |-------> yaha pe me ek condition lagana chahata hu aache se jo condition hm likhegay vahe main hai, jo ke is line ko jsutify karegye --> // If a function call itself then therer must be an end point.                                                                                                                      
// -> ** lagate hai condition :- **
//    1. ifaager mera counter greater than hai, number to us case me kea return ker dega, return ker dega, 
//       kuch is tarah se --> 
//                            if(counter > number) {
//                                    return;
//                            };
//    2. to aager mara counter greater than number, to muze counter ke value ko badana to padega, verna bat nahi banegye.
//    3. to hm kea karegay ke pahale counter ko print kerva lete hai,
//       kuch is tarah se --> 
//                            console.log("Like This Video", + counter);
//    4. or iske niche me kerne wala hu, counter++; jo counter hai, mera vah plus plus hoga,
//       kuch is tarah se --> counter ++;
//       _________________________________________________________
//      |  let counter = 1;                                       |
//      |  function demo(number) {                                |
//      |     ___________________________                         |
//    |----->| if (counter > number) {   |                        |
//    | |    |     return;               |                        |
//    | |    | };                        |                        |
//    | |    |___________________________|                        |
//    | |                                                         |
//    | |      console.log("Like This Video", + counter);         |
//    | |      counter ++;                                        |
//    | |      demo(number);                                      |
//    | |  };                                                     |
//    | | ___________                                             |
// |--|->| demo(10); |                                            |
// |  | ||___________|                                            |
// |  | |_________________________________________________________|
// |  |
// |  |-----> jab mare condition yah true ho jayegye, to function return ker dega.
// |      
// |          or vake kuch nahi chalega.
// |
// |--------> or direct hame baher ouput mil jayega hame.
//    5. Output:- hame kuch is tarah se milega ----
//                Like This Video 1
//                Like This Video 2
//                Like This Video 3
//                Like This Video 4
//                Like This Video 5
//                Like This Video 6
//                Like This Video 7
//                Like This Video 8
//                Like This Video 9
//                Like This Video 10
// -> hamara function 10 times chala or iske bad nahi chala, hamare function recursion 10 time call hota raha or jase he meri if condition true hui or hamara function baher a gaya or stop ho gaya.
//    jo flow of axication tha function ka vah break ho gaya or vaha function se baher aa gaya that shit, or isne hame 10 bar print kerva ke dekha deya hame.
// -> to yaha pe kea huva hai, k yaha recursively functin call ho raha hai, function ke under function call ho raha hai, yahe hamara recursion function hai.
// {* Javascript ke under unbuilt hamare pass jase:- json.pass hota hai,
//                                                   document.getElementbyId,
//                                                   document.getElementbyName
//    This is inbuilt recursive function. *}
// {* next video me hm iska advance version dekhe gay ke usme kea-kea hota hai. *}