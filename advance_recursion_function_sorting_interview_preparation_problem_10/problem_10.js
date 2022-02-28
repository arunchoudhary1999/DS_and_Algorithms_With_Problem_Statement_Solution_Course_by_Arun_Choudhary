// Advance Recursion Function | Sorting | Interview Preparation | problem_10 :- 
// Sorting using recursion function.
// [2,3,1,4] -> by default case.

// -> aaj is video me hm Advance Recursion Function dekhegay, si advance recursion function kea hai?, mtlb thoda sa advance version dekhegay, jo problem hm solve kerne wale hai, vaha thoda advance hogye, hm relate ker payegay ke real time project me muze recursion use kerna ho to, kea vo approch hai, yah mind set hona chaheye.
//    is video ko dekhne ke bad hame clearity melegye/samazne ko melega, ke recursion ko hm kase ek project me use ker sakte hai.
// -> aaj ke video me hmare pass problem statement hai Shorting.
//    abhi hamare pass ek array hai. -> [2,3,1,4] is array ke under jo elements hai usko hm short karegay with the help of recursion right.
// -> or last video me hmne bahut basic dekha tha, ke kase ek function apne aap me call ho raha hai, Recursion yahe to hai, one function call itself is called as recursion.
//    function call ho raha hai, than must be an end point, kuch na kuch to end point hoga, jaha per function rukega, or hamara output melega.
// -> so pochle video me hmne yah case tha jisme hmne condition lagay the, ke ager counter greater than number hota hai, if(counter > number), to us case me muze return ker dega, return ker dega mtlb function se baher aa jayega, or hame hamara output mil jayega,
//    jisme hamara function continusely call kare ja raha the, usko hmne rokh deya.
//    aager recursion hm kahe bhi padte hai to kahe na kahe hame koi na koi aashe condition melegye he sahi, jaha pe vah function ruk jayega, or vahfunction se baher aa jayega, yah hm basic sik chuke hai, hame samaz me aa gaya hai,
//    or abhi hm is video me samazte hai sorting or ek logic lagate hai, or active kerte hai, thoda sha or behater code likhte hai, take hm esaly recursion ko samaz paye hm esaly recursion ko samaz paye, or recursion ko or behatr tareke se kase use keya ja sakta hu.
// {** hm suru kerte hai **}
// // Sorting using Recursion Function.
// // [2,3,1,4] -> by default case.
// -> hamare pass ek array hai, -> [2,3,1,4] simple se bat yah sorted nahi hai, hame sort kerna hai in numbers ko kea karegay, or by default jo case hai, vah ye hai -> [2,3,1,4].
// -> dekhte hai pahala case kea banega, yaha pe is problem ko solve kerne ke liye difference ways hai, abhi hm pahale tareka dekhne wale hai, jo bhi hm logic wale hai, with the help of recursion, vah hm abhi dekhegay, yaha tak thik hai.
// -> 1. so array me [2,3,1,4], hamare pass pahale number hai, 2 iska index hai 0, right or 3 ka index hai 1 right. 
//    kuch is tarah se :- 
//                          __________________________________________
//                         |                      ___   ___           |
//                         | Array of Element = [| 2 |,| 3 |, 1, 4]   |
//                         |                     | | | | | |  |  |    |
//                         |                     | | | | | |  |  |    |
//                         | Index of Element =  | 0 | | 1 |  2  3    |
//                         |                     |___| |___|          |
//                         |__________________________________________|
//   to hm kea karegay ke, kea meri array ka pahala number dusre number se chota hai, aager mera pahala number dusre number se chota hoga, us case me koi bhi action nahi karuga, me simple aagay bad jayega.
//   mtlb me next aa javga 3 or 1 number ke under :- kuch is tarah se --->
//                                                                            __________________________________________
//                                                                           |                         ___   ___        |
//                                                                           | Array of Element = [2, | 3 |,| 1 |, 4]   |
//                                                                           |                     |  | | | | | |  |    |
//                                                                           |                     |  | | | | | |  |    |
//                                                                           | Index of Element =  0  | 1 | | 2 |  3    |
//                                                                           |                        |___| |___|       |
//                                                                           |__________________________________________|
//   me inko compare karuga, aager mera 3 kea chota hai 1 se nahi, to is case me hm kea karegay swap ker degay, 
//   kuch is tarah se --->            
//                                       Before Swapping                                      After Swapping
//                                              |                                                   |
//                          ____________________|_____________________          ____________________|_____________________
//                         |                         ___   ___        |        |                         ___   ___        |
//                         | Array of Element = [2, | 3 |,| 1 |, 4]   |        | Array of Element = [2, | 1 |,| 3 |, 4]   |
//                         |                     |  | | | | | |  |    |        |                     |  | | | | | |  |    |
//                         |                     |  | | | | | |  |    | -----> |                     |  | | | | | |  |    | <-----|
//                         | Index of Element =  0  | 1 | | 2 |  3    |        | Index of Element =  0  | 1 | | 2 |  3    |       | 
//                         |                        |___| |___|       |        |                        |___| |___|       |       |
//                         |__________________________________________|        |__________________________________________|       |
//    2. to hamare first case keya ban gaya :- ________________________                                                           |
//                                            |  [2,1,3,4] -> case 1   |                                                          |
//                                            |________________________| yaha ban gaya.                                           |     
//       aager mara pahala number chota hoga dusre number se to us case me kuch nahi karuga aagaybad javga, apne psotion ko aagay | bada duga, aager mera koi bhi i or j hone wala hai, jo bhi pointer hm element ko dene wale hai, koi bhi ointer duga vah aaagay move ho jayega, aager mera pahala number chota hoga dusre number se.  
// -> aager mera pahala number chota nahi hai dure number se to us case me swap ker duga us do numbers ko , kuch is tarah se -----| jo hmne before swapping or after swapping ko bana hai us tarah se
//    yaha tak bat samaz me aa gaye, ye logic hm abhi lagane wale hai, but ye logic active karegay with the help of Recursion, yaha tak thik hai, 
//    is tarah se hamara case 1 mil gaya hai, is tarah se hame ek naya array mil gaya --- [2,1,3,4] --> case1   
// -> dusre se hm karegay, kea mera 2 less than 1 hai, nahi yaha 2 chota nahi hai 1 se --> [2, 1, 3, 4],
//                                                                                          0  1  2  3
//    fir hm yaha pe swap ker degay, kuch is tarah se :- 
//                                                         Before Swapping                                      After Swapping
//                                                                |                                                   |
//                                            ____________________|_____________________          ____________________|_____________________
//                                           |                      ___   ___           |        |                      ___   ___           |
//                                           | Array of Element = [| 2 |,| 1 |, 3, 4]   |        | Array of Element = [| 1 |,| 2 |, 3, 4]   |
//                                           |                     | | | | | |  |  |    |        |                     | | | | | |  |  |    |
//                                           |                     | | | | | |  |  |    | -----> |                     | | | | | |  |  |    | 
//                                           | Index of Element =  | 0 | | 1 |  2  3    |        | Index of Element =  | 0 | | 1 |  2  3    |       
//                                           |                     |___| |___|          |        |                     |___| |___|          |       
//                                           |__________________________________________|        |__________________________________________|
//    isse hame ek or new array mil gaya hai, [1,2,3,4], jo ke hamara Final Output hai, is tareke se hmne sorting ker ke output nikal leya hai.
// -> us tareke se hm array ke 2 elements ko compare karegay, aager pahale number chota hota hai, us case me, me aagay padta javga, aager pahale number bada ho jata hai, to us case me hm un dono numbers ke bich me swapping ker degay, yaha tak thik hai.
// // Sorting using Recursion Function.
// // [2, 3, 1, 4] -> by default case.
// // [2, 1, 3, 4] -> case 1.
// // [1, 2, 3, 4] -> Final Output.

// {** isko achive kerne ke liye jitna abhi hmne samza hai, simple language me vahe hm abhi kerne wale hai **}
// -> pahale hm yaha ek simple ek function bana lete hai, sortCheck nam se (jo sort check karega simple), or yah function parameter me recieve karaga ek array, jesa hmne kaha ek number ko dusre number se compaire kerna hai, to hm function ke upper kuch variable le lete hai.
//    kuch is tarah se :-  __________________________________
//                        |  let i = 0;                      |
//                        |  let j = 1;                      |
//                        |  function sortCheck(array) {     |
//                        |  }                               |
//                        |__________________________________|
//                                          |
//                                          |
//                        kuch is tarah se hmne i varaible me 0 value dal de, or j variable me 1 value dal de
//                        or ek sortCheck nam se function create ker leya jisme hmne parameter me array ko recieve ker leya.
// -> jo hmne i, j ke value dale hai, ussi se he hame kerna hai,
//    hm isko dekhte hai. -->                      ___    ___
//                            Array of Element = [| 2 |, | 3 |, 1, 4] -> by default case
//                                                | | |  | | |
//                                                | | |  | | |
//                            element of index =  | 0 |  | 1 |   2  3
//                                                |___|  |___|
//                                                  |      |------> yah hamara Zero hai.
//                                                  |-------------> or yah hamara one hai.
//   aase to hm karegay, aager pahale number chota hoga to hm i or j ke value ko badata javga, thik hai, verna swap ker degay, isliye hmne yaha variable liye hai.
// -> ek kam or kerte hai, sabse upper hm ek myArray nam ne ek varaible bana ke uske under by default unsorted elements ko dal deya hai,
//    kuch is tareke se :- 
//                           let myArray = [2, 3, 1, 4];  ------------|
//                                                                    |
//                                                                    |
//    yah hmne apne liye banaya hai, kis liye banaya hai, vah bhi dekhegay.
// ->  _____________________________________________
//    |  let myArray = [2, 3, 1, 4];                |
//    |  let i = 0;                                 |
//    |  let j = 1;                                 |
//    |  function sortCheck(array) {                |
//    |  };                                         |
//    |_____________________________________________|
//                         |
//                         |
//    yaha pe bahut clear hai, ke yaha pe hmne do variable liye hia, i or j hai, or i ke value 0 hai, or j ke value 1 hai, mare pass ek function hai, sortCheck karega, jo simple yaha check karega function or muze sort kerke dega.
//  ------------------------------------------------- XX -------------------------------------------------------------------------
// -> isme mare sabse pahale condition aate hai, mere pass array aayegay, right, me array me se nikaluga i keoke value chaheye muze, aager vah value meri less than hai j se keoke j kea hai, mera yaha pe hai, i mera 0 hai, or j mera 1 hai.
//    yaha muze mil jayega sabse pahale ke array of zero pe kea hai, mera 2, or array of one pe kea hai mera 3.
//                            Array of Element = [| 2 |, | 3 |, 1, 4] -> by default case
//                                                | | |  | | |
//                                                | | |  | | |
//                            element of index =  | 0 |  | 1 |   2  3
//                                                |___|  |___|
//                                                  |      |------> j = 1 per hai 3.
//                                                  |-------------> i = 0 per hai 2.
//    to is case me 2 is less than 3 mtlb 2 chota hai, 3 se, in that case chota hai , to hm i ko ker degay i ++; or j ko bhi ker de j ++; or hm function ko dubara call ker degay, sortCheck(array);
//    yahe hamara recursion function. 
//                                    Recursion Function :- When function call itself is called as Recursion Function.
//    yah function dubara call ho jayega, yah fir i or j ke value ke hisab se next move karega, yah ho jayega 3 or 1 mtlb aase -> 
//                                                                                                                                  Array of Element = [| 2 |, | 3 |, 1, 4] -> by default case
//                                                                                                                                                      | | |  | | |  |  |
//                                                                                                                                                      | | |  | | |  |  |
//                                                                                                                                  element of index =  | 0 |  | 1 |  2  3
//                                                                                                                                                      |___|  |___|
//                                                                                                                                                        |      |------> j = 2 per hai 1.
//                                                                                                                                                        |-------------> i = 1 per hai 3.
//    thik hai, keoke function dubara call ho raha hai, isliye usme hmne pura array call ker rakha hai --> 
//    kuch aase :- sortCheck(array);
//    dubara call hone per i or j ke value badel gaye hai, i = 1 index per value 3 ho gaye or j = 2 index per value 1 ho gye.
//    fir dubara check hogye is wale case me line no 131 pe us per , ke kea 3 less than hai 1 se, nahi 3 bada hai 1 se, to is case me if wale condition nahi chalegye -->
//     _______________________________
//    |  if(array[i] < array [j]) {   |       
//    |  i ++;                        |
//    |  j ++;                        |
//    |  sortCheck(array)             |
//    |  };                           |
//    |_______________________________|
//                    ^
//                    |
//                    |
//    yah wale nahi chalegye is case me.
// -> iske liye else if wale condition chalegye to hm else if wale condition bana lete hai.
//    ke aager mera pahala number chota nahi hai, dusre number se to uske liye bhi hame condition chaheye, isliye hm else if nahi lagate hai iske liye hm keval else lagate hai, simple else lagate hai, to is case me kea hoga ke hame swap kerna hai.
// -> aager hame ek array ke under number/elements ko swap kerna ho to Javascript ke under multiple ways hai likhne ke , to hm abhi ek tareka dekhte hai, ke kase hm represent ker sakte hai ke kase hm swap ker sata hu, pahale ek kam kerte hai pahale yaha array lete hai or jo mera array of i hoga, or second array of j hoga vo muze swap kerna hai = array of j ker degay jo i ke value hai or array of j ke value hai, usse hm i ker degay, thik hai, yah ho jayega hamara swap.
//    kuch is tareke se hne keya -->   ___________________________________________________
//                                    | else {                                            |
//                                    |     [array[i], array[j]] = [array[j], array[i]];  |
//                                    | };                                                |
//                                    |___________________________________________________|
//                                                              |
//                                                              |
//                                    is tarah se hmne swap ker deya ke jo i ke value usse hmne j ker keya or j ke value ko usse i ker deya.
// -> to else kab chelega, aager mera pahala number bada hota dusre number se kuch is tarah ke condition se --          __________     __________  
//                                                                                               ^                if ( | array[i] | < | array[j] |)
//                                                                                               |                     |__________|   |__________|
//                                                                                               |                           |              |
//                                                                                               |                          _|_            _|_
//                                                                                               |                     pahala number  dusra number
//                                                                                               |                           ^              |
//                                                                                               |                           |______________|
//                                                                                               |                                   |
//                                                                                               |___________________________________|
//    to us case me yah else wale condition chala ke swap ker dega, bat khatam thik hai.
// // Sorting Using Recursion Function.
// // [2, 3, 1, 4] -> by default case.
//    let myArray = [2, 3, 1, 4];
//    let i = 0;
//    let j = 1;
//    function sortCheck(array) {
//         if(array[i] < array[j]) {
//            i ++;
//            j ++;
//            sortCheck(array);
//         } else {
//            [array[i], array[j]] = [array[j], array[i]];
//         };
//    };
// -> abhi hm dekhe is hisab se logic hamara ban gaya hai, jitna hmne discous keya hai, but me yah chahata hu, abhi ke hm ek function or create kare, yaha pe hm yah check kare ke, jo bhi hamara array hai, vah sorted hai, to true return kare, aager sorted nahi hai, to false return kare, yah logic hm keo laga rahe hai, dekhte hai hm abhi -->
//    to hm kea kerte, ke hm ek or function create ker lete hai sortCheck function ke upper,
//                                                                                           abhi hm ne yah to identify ker leya hai, aager mera number chota hoga, mare dusre number se to us case me aagay badtajavga, or function ko call ker luga,
//    but hmne else condition me swap to ker leya hai, to swap kerne ke bad kea? no. swapp ho chuke hai, but us case me muze kea kerna padega, i ke value ko 0 kerna padega, or j ke value ko dubara 1 kerna padega.
//    kuch aase --> 
//                  i = 0;
//                  j = 1;
//    yah else condition me kerna padega.
// -> keoke jo number mane swap keya unneh me dubara se check ker raha hu.   ____________________
//    mtlb ke jo yah hamara array ya by default thik hai          ----------|--> [2, 3, 1, 4]    |
//    jab is array ko hmne swap keya to yah swap new array aaya   ----------|--^                 |
//    yah thik hai                                          |---------------|--> [2, 1, 3, 4]    |
//                                                                          |    |__________|    |
//                                                                          |_________|__________|
//      ________________________________________________________________________________|                         
//   __|__
//   fir hm is new array me se first two numbers ko compare karegay, to is case me dubara se hame i ke value 0, or j ke value 1 kerte padegye keoke tabhi to new array ke first or second number ko compare ker payegay, 
//   is liye hmne yah keya hai -->   i = 0;
//                                   j = 1;
//   or dubara sehm yah function call ker degay sortCheck(array); yahe to hai recursion thik hai, yah dubara function call ho jayega, but abhi tak sab kuch thik hai.
//   but me kea chahata hu, ke ek function or create kerna chaheta hu, jo muze pahale se he bata dega ke mera function sorted hai, ya nahi hai.
// -> jisse hoga kea, ke jo mera function bar - bar call ho raha hai under me nahi chahata hu ke bar - bar essa call kerna, 
//                                                                                                                          aager muze pahale he pata chal jayega ke mera sorted hai, 
//    to kam asan ho jayega na. to hm ek function create ker lete hai isSorted nam se or yah function ke recieve karega ek array function ko parameter me or simple is function ke under ek for loop laga leta hu or for loop me hm degay let ker ke i = 0; (mtlb i, 0 index se start hoga) i < array.length; (mtlb i chalega vaha tak jitne array ke length hogye) yah pahale he check ker lega jo bhi array muze milne wala hai, ke vah sorted hai ya nahi hai. or i ++; (isse indes increment kerta rahega one by one).
//    kuch is tarah se hmne keya hai ---->
//                                          function is Sorted(carry) {
//                                              for(let i = 0; i < Array.length; i++){

//                                              };
//                                          };
// -> ab yaha pe muze mil chuka hai i, keoke yah loop chalta rahega, or is loop ke under if condition laga lete hai, ke aager mera array of i hai, aager vah greater than array of i+1 se [i+1 mtlb uska next element is tareke se hm ker rahe hai].
//    kuch is tarah se ---> 
//                          if(array[i] > array[i+1]) {
//                            ----|----------------------|
//                          };                   ________|___________
// -> hamara loop hai vah chalta jayega, or hame array of i [array[i]] me hame kea melega ----> [2, 3, 1, 4] -> by default <--- is array ke hisab se is array ke hisab se hame 2 mela,  
//                                                                                               |__|__________________________________________________________________________^
//                                   _______________________________________________________________|
//                                 _|_
//    or i+1 ker deya to kea melega 3 keoke next element 3 hao yah hm hamare if condition ke hisab se ho raha hai, is tareke se if condition sare element ke liye chalte rahega, aager mera pahala element bada hai, dusre leemnt se is conditioin ke hisab se -> 
//                                                                                                                                                                                                                                                                 if(array[i] > array[i+1]) {} 
//    to us case me kea return ker dega false (false mtlb sorted nahi hai array), aager hamara pura loop chal gaya, uske bad hm retrun kerva degay true (true mtlb ke array sorted hai.)
//    kuch is tarah se -> 
//                          function isSorted(array) {
//                              for(let i = 0; i < array.length; i++) {
//                                  if(array[i] > array[i+1]) {
//                                      return false;
//                                  };
//                              };
//                              return true;
//                          };
//    |__________________________________________________________________|
//                                   |
//                              _____|_____
//    yah function mera yah kam ker raha hai, is tareke se hame multiple function create kerne padte hai, jab hm Real Project pe kam ker rahe hote hai, 
//    to hm ek function raita nahi fela sakte hai, vaha pe bahut jada complexcity ho to us complexity ko km kerne ke liye hm function me divide ker dete hai, take esaly samz me aa paye, or kise function ko or kahe use kerna ho to vaha pe bhi use ker pav yaha ttak thik hai.
// -> or isSorted function ko hm sortCheck function me call kerne vale hai, kase call ker sakte hai dekhte hai, if condition laga ke isSorted functio ko call ker degay or isme hame pass kerna hai ek array or hm vahe array pass karegay jo sortCheck function se melega,
//    kuch is tareke sse --> if(isSorted(array)) {
//                           jab yah array aayega or sorted rahega to hm isse return kerva degay vahe array --> 
//                                  return array;
//                           };
//                           but yahe pe ek problem hai vah abhi dekhegay.
// -> or jo pahale if condition tha usse hm else if me ker degay.
//    kuch is tareke se -->
//                           function sortCheck(array) {
//                              _________________________
//                             | if (isSorted(array)) {  |
//                  ___________|     return array;       |
//                 |           | }        _______________|
//                 |           | else if | (array[i] < array[j]) {
//                 |           |_________|
//                 |                 i++;
//                 |                 j++;
//                 |                 sortCheck(array);
//                 |             }
//                 |         }
//                 |-----> kuch is tareke se karegay
// -> aager me isShort function nahi banata tab bhi mera sab kuch thik chalta,
//                                                                             but ek tareka hota hai, logic likhne ka vah jaruri hai yahe ek aache practies ka part hota hai.
// -> or ek kam kerte hai function ko call bhi ker lete hai last me kuch is tareke se --> 
//                                                                                        const result = sortCheck(myArray);
//                                                                                                 |
//                                                                                               __|__
//    yaha result varaible ke under sortCheck function call usme hmne, myArray ko pass ker deya.
// -> or is result ko console kerva lete hai
//    console.log(result);
// -> isko hm likh ke run ker ke dekhte hai, ke kea result aata hai.
//    // Shorting using recursion function 
//    // [2, 3, 1, 4] -> by default case -
//    // [2, 1, 3, 4] -> case 1 -
//    // [1, 2, 3, 4] -> Final Output -
//       let myArray = [2, 3, 1, 4];  // aager array undorted rahegey to yaha hame undefined output me dekha dega, kuch is tarah se :- undefined
//       let myArray = [1, 2, 3, 4];  // or aager array sorted rahegeye to yaha hame ajatise sort array ko output me dekha dega, kuch is tarah se :- [ 1, 2, 3, 4 ]
//       let i=0;
//       let j=1;
//       function isSorted(array) {
//            for(let i=0; i<array.length;i++){
//                   if(array[i] > array[i+1]) {
//                      return false;
//                 };
//           };
//       return true;
//       };
//      function sortCheck(array) {
//         if(isSorted(array)) {
//             return array;
//      }
//       else if (array[i] < array[j]) {
//       i++;
//       j++;
//       sortCheck(array)
//      }
//       else{
//             [array[i], array[j]] = [array[j], array[i]];
//             i=0;
//             j=1;
//             sortCheck(array);
//      };
//      };
//      const result = sortCheck(myArray);
//      console.log(result);
// -> hamare program ko run ker ke dekhte hai, ke kea output aata hai.
//    Output:- Undefined
//    {*output hamara undefined aa raha hai. *}
// -> dekte hai, ke undefined keo aaya yah samazna jaruri hai.
// -> yah undefined is liye dekha raha hai, ke ho hmne insShoted nam se function banaya tha, vah tabhi call hoke return karega, jab isme ke array sort rahegaye, aager allready sorted hai, to thik hai.
//    aager nahi hai, to yah undefined dega her bar.
// -> hame undefiend aane ke khash vajagah yah hai _____
//                                                      |
//                                        ______________|__________
//                                       |  if(inSorted(array)) {  |
//                                       |        return array;    | <-------- hame is vale jagah se problem aa rahe hai.
//                                       |  }                      |
//                                       |_________________________|
// -> to hm isko solve kerne ke liye kea ker sakte hai,                _______
//    hm isko yaha pe array ko return nahi kervayegay isko --> retrun | array |
//                                                                    |_______|
// -> to hm kea kerte hai, ke ek myNewList nam se ek variable banan lete hai, or usko hm khale chod degay, kuch is tarah se ---> let myNewList = [];
//    to jo bhi mera array aayega to hm kea karegay usko hm myNewList variable me dal degay,
//    kuch is tarah se:- 
//                        if(inSorted (array)) {
//                            myNewList = array;
//                            return;
//                        }
//    or return kerva degay that shit.
// -> or isko last me return kerva lete hai console pe,
//    kuch is tarah se :- 
//                         sortCheck(myArray);
//                         console.log(myNewList); 
// 
// **************************************** Final Code ***************************************
// // Sorting using recursive funcion :- 
// // [2, 3, 1, 4] -> by default case.
// // [2, 1, 3, 4] -> case 1.
// // [1, 2, 3, 4] -> final output.

let myArray = [2, 3, 10, 15, 18, 20, 100, 1000, 101, 102, 1, 4, 8, 6]; 
let myNewList = [];
let i = 0;
let j = 1;

function isSorted(array) {
    for(let i=0; i<array.length; i++){
        if(array[i] > array[i+1]){
            return false;
        };
    };
    return true;
};

function sortCheck(array) {
    if(isSorted(array)) {
        myNewList = array;
        return;
    } else if(array[i] < array[j]) {
        i++;
        j++;
        sortCheck(array);
    } else {
        [array[i], array[j]] = [array[j], array[i]];
        i = 0;
        j = 1;
        sortCheck(array)
    };
};

sortCheck(myArray);
console.log(myNewList);

// -> hm myArray ke under hm kitne bhi elements de sakte hai, tab bhi hamara function sort ker ke de dega.
// -> is program me jo recursion chal raha hai, Advance recursio ke bat kare to, hm yaha kea ker sakte hai, ke hm ne ek function banaya hai isSorted nam se -> jo muze ye batayega ke function me jo for loop or if condition lagay hai, usse hamara array chal jayega, usse hame jo bhi return hoga, mtlb true milta hai, to hamare array short hai, aager true nahi milta hai, mltb false aa raha hai, to vaha else if per jayega, vaha pe hmne logic ko breack ker ke rakha hai, or yaha pe hm sortCheck recursion use ker rahe hai, is tarah se work karega, or final hame hamare output mil jayega.
// {* ye to sorting hmne recursion ko use kerke ke hai, yah samaz me aa gaye hogye. *}
