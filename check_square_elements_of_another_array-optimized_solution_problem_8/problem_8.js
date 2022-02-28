// Checking Squre in Another Array.
// array1 = [1, 2, 3, 4], array2 = [1, 9, 4, 16] - Case 1
// array1 = [1, 2, 4, 2], array2 = [1, 4, 4, 16] - Case 2

// {* hmne pichle video me cover keya tha, Square identify keya tha, ke jo mare pass jo array1 hai isme jo elements hai, unka Square second array2 me access kerta hai yah nahi kerna hai, to iske liye hmne do loop lagaye the, jisme ek tha outer loop or dusta tha inner loop or jo hamara first array1 hai, usme her ek elements ke liye jo second array2 hai, inme jitne elements hai her bar vah compaire ker raha tha, to utne bar vah loop chal raha tha, to isme number of Ilteration bahut jada the, or jo solution tha vah optimized nahi or isme time coplexcity the jo aa rahe the vah O(n^2) *}
// {* to hm is problem ko hm is problem me optimized karegay, or jo time complexcity hai, usko Linear ker legay mtlb O(n) ker legay. *}
// {* essa kuch kerne vale hao, or logic ko kuch change kerne vale hai, abhi hm jo naya logic lagane vale hai, hm usme hm sekhegay ke kase map create kerte hai, kase array ke elements ko map me dal sakte hai, pairs ke form me. isse hamara kam aasan ho sakta hai, ye jo hm logic lagane wale hao, vah bahut bar JavaScript me aager hm coding kerte hai, to ya ya fir kise project me work ker rahe hai, to hamare pass ek array hai, usse hame identify kerna hai ke number of elements kitne repits ho rahe hai, us case me hame map use kerna pad sakta hai, to vo bhi hm kerne vale hai. *}

// {** to hm start kerte hai, problems ko samazte hai **}
// {* 1. hmne jo last video me jo do array liye the, ye array1 --> array1 = [1, 2, 4, 2] or ye array2 --> array2 = [1, 9, 4, 16], checking square in another array <-- yah case the hamare pichle video me, yahe same case hamare problem 8 me rakha hai, array1 = [1, 2, 3, 4], array2 = [1, 4, 9, 16] - case 1, but isme hmne ek or case create keya hai, array1 = [1, 2, 4, 2], array2 = [1, 4, 4, 16] - case 2, jo logic hm likhne vale hai usko samazneke liye take hm relate/comparision ker paye. *}
//    ( to hmfatabat se suru kerte hai, subse pahale hm condition dekhe gay ke kea hogye, kase hogye, or vahe condition hm code me likhegay )
//    ( to hm start kerte hai. )
// {* 2. Checking Square in Another Array *}
//    case1 --> array1 = [1, 2, 3, 4], array2 = [1, 9, 4, 16]
//    case2 --> array2 = [1, 2, 4, 2], array2 = [1, 4, 4, 16]
// -> to hame kea kerna hai, abhi hm case 2 ke bare me bat karegay thik hai, array1 = [1, 2, 4, 2], array2 = [1, 4, 4, 16] - case2 abhi cse1 ke bat nahi kerte hai.
// -> abhi hamare pass array1 hai, jisme = = [1, 2, 4, 2], or araay2 hai jisme = [1, 4, 4, 16] hai, do array hai.
// -> aager muze yah dekhna ho ke array1 ke under 1 kitne bar aa raha hai, 2 kitne bar aa raha hai, to hm iske liye kea karegay ke iske liye hm map1 bana legay, {ek object bana rahe hai -> hm isko yah bhi kaha sakte hai} hm in brakets hono ko ese bhi samz sakte hai, ke [] <- yah ek array hai, or {} <- yah ek obkect hai.
// -> yaha hmne map1 nam se ek object bana liya hai, map1 = {}
// -> to hame kerna kea hai, ke hame dekhna hai, ke array1 ke under 1 kitne bar hai, mtlb hame array1 ke under sabhi elements ko check karna hai, ke kon kitne bar hai, yaha sab hm map1 object ke under lekh legay, kuch is tareke se -> map1 = {1:1, 2:2, 4:1}.
// -> or is tareke se hm array2 = [1, 4, 4, 16] ke under sabhi elements ko check kerke ke kon kitne bat hai, to hm is chij ko ma2 object ke under dal degay kuch is tareke se --> map2 = {1:1, 4:2, 16:1}.
// -> to is tareke se hmne yaha do map bana liye map1 or map2 ko.
// -> to sabse pahale logic hmne yah lagana ho, ke hame array1 = [1, 2, 4, 2] se is tareke se map1 = {1:1, 2:2, 4:1} ko create kerna hoga. or array2 = [1, 4, 4, 16] se map2 = {1:1, 4:2, 16:1} ko create kerna hoga, yaha tak samaz aa gaya hame.
// -> or jo hamara map1 or map2 bana hai, yahe hamara solution dega.
// -> ab hm kea intresting bat karegay -> ke yah hamara map1 = {1:1, 2:2, 4:1} hai,
//                                        or yah hamara map2 = {1:1, 4:2, 16:1} hai.
//    map1 ke under :-              map1 = {(1):(1), (2):(2), (4):(1)}
//                                           |   |    |   |    |   |
//                                           |   |    |   |    |   |
//    1, 2, 4 map1 ke under yah key hai ---> |___|____|___|____|___|
//    1, 2, 1 map1 ke under yah value hai --->   |________|________|
// -> to hm map1 me dekhe to 1 kitne bat hai, 1 bar (1:1), or 1 ka square kea hai 1 he hoga.
//    map1 = {  (1)  :1,  (2)  :2,  (4) :1}
//               |         |         |
//             (1*1)     (2:2)     (4*4)
//               |         |         |
//    map2 = {  (1)  :1,   4   :2,   16  :1}
// -> jo map1 me 1 key hai, to 1 kitne bar hai, 1 ek bar --> (1:1), or (1)^1 ka square kitna hoga 1 he hoga, or yah 1 ka square map2 me 1 bar he hoga --> (1:1), or map1 ke dusre key per chalte hai vaha per 2 key hai, or yah kitne bar aa raha hai, 2 bar aa raha hai, mtlb iske value do hai. or 2 ka square kitna hai, 4 hai. vah hamare map2 me hone chaheye pr 4 map2 me kitne bar hai 2 bar.
//    map1 = {1:1,  (2)  :2, 4:1}
//                   |    |
//                 (2*2)  |
//                   |    |
//    map2 = {1:1,   4   :2, 16:1}
// -> basically jo map1 me key hai, or jo map2 hai, uske jo key hogye vah uska square hoga.
//    kuch is tareke se :- 
//                          map1 ke key           map2 ke key
//                              1 ------> (1)^2 -----> 1
//                              2 ------> (2)^2 -----> 4
//                              4 ------> (4)^2 -----> 16
// -> ese he yaha map1 ke key 4 hai, or uska square map2 me 16 hai.
// -> or khash bat yah hai, ke map1 or map2 ke keys ke jo value hogye vah hamesha same hogye.
//    kuch is tarah se:- map1 = {1:(1), 2:(2), 4:(1)}
//                                  |      |      |
//                                  |      |      |
//                       map2 = {1:(1), 4:(2), 16:(1)}
// -> map1 or map2 ke keys ke value hamesa same rahegye, hm chahe konsa bhi case lele, sabhi case me same rahega,
//    aager hm koi essa case lete jisme value same nahi hogye to, us case me vah false de dega ke, mtlb uska square present he nahi hai.
// -> yaha pe pahale condition hame samaz me aai hai, ke jo map1 hoga mera usme jo ke hai mare kuch is tarah se --> map1 = {1:1, 2:2, 4:1}, vah map2 ke under jo key hogye uska square hoga.
//    _______________________
//   |                       |      map1 = {   (1)   :1,    (2)   :2,    (4)   :1}
//   | kuch is tarah se map1 |                 |             |            |
//   | ke key ko map2 ke key | =>           map1(1)^2    map1(2)^2    map1(4)^2     
//   | ke under hogye :-     |                 |             |            |
//   |_______________________|      map2 = {  (1)    :1,    (4)   :2,    (16)  :1}
//                   
//   map1 ke key ka square map2 ke key me rahega sath inke key ke value bhi same rahegye.                                
// -> to yah hai logic or is logic ko hamare condition me lagayegay.

// {* hne yaha tak simple se bat kahe hai, ke hmne sabse pahale identify keya hamare array1=[1,2,3,4] keunder jo elements hai, vah kitnay kitne bar hai, to hmne ek object create map1 nam se or map2 jisse muze pata chal gaya hai ke elements kitnay kitne bar aa rahe hai, uske bad map1 ke under jo key ke 1 iska square jo ke mera map1 ke key rahegye, to hm is tarah ke condition lagayegay, ke mare pass key aa rahe hogye, or me dekhuga ke kea mera map2 ke under key hai, ya nahi hai.
//    ager nahi hai, to false de duga, or hai to true de duga,
//    or hm aase condition laga degay, or sath sath hm yah bhi check karegay ke kea value same hai, kea map1 or map2 ke under same hai, to isse mera logic ban jayega.
//    // checking square in another array.
//    // array1 = [1,2,3,4], array2 = [1,9,4,16] - case 1
//    // array1 = [1,2,4,2], array2 = [1,9,4,16] - case 2

//    // map1 = {1:1, 2:2, 4:1}
//    // map2 = {1:1, 4:2, 16:1} *}
// {* chaleye fir hm suru kerte hai, code likhna start *}
// 1. sabse pahale hm ek function create ker lete hai, checkSquare nam ka, or yah recieve karega array1 and array2 ko inko hm checkSquare ke parameter me dal degay.
//    kuch is tarah se :-   
//                          function checkSquare(array1, array2) {
//                          };
// 
// 2. or is function ke under hm do object create ker legay map1 or map2 nam se or inko hm blank chod degay mtlb khale chod degay.
//    kuch is tarah se :- 
//                          let map1 = { };
//                          let map2 = { };
//    ye me keo ker raha hu keoke muze inhe ye banana hai, kuch is tarah se :- 
//                                                                                  map1 = {1:1, 2:2, 4:1}
//                                                                                  map2 = {1:1, 4:2, 16:1}
//    yaha tak hmne map1 or map2 ko creae ker leya hai, yaha tak thik hai.
// 
// 3. inke niche hame ek for loop lagana hai, for loop ke under ham degay (item of array1) mtlb array1 se items ke under kuch value recieve ker legay.
//    kuch is tareke se :- 
//                              for(item of array1) {
//                              };
//    or hm kea karegay abhi hame map banana uske liye kuch chij deyan rakhne padegye abhi.
// 
// 4. iske niche hame ek or for loop use kerna hoga, jisme item2, array2 ke value of recieve karega.
//    kuch is tareke se :- 
//                              for(item2 of array2) {
//                              };
// 
// 5. to ek mera map banega map1 ke liye jo array1 se elements aayegay, unko hm map1 me dalegay.
//    or jo array2 se elements aayegay, unko hm map2 me dalegay.
//    jase hame pata hai, ke map ke under keys or values hote hai, to hame yaha key value create kerne padegye.
//    jo bhi mare value aayegye, item me aayegye, kase aayegye jase array1 = [1,2,4,2] ke elements hai, to item ke under kuch is tarah se aayegye.
//    ___________________             ____________________________
//   | pahale 1 aayegeye |           | array1 ke elements kuch    |  
//   | pahale 2 aayegeye |           | is tareke se item ke under |
//   | pahale 4 aayegeye | <-------  | recieve hoyegay array1 =   |
//   | pahale 3 aayegeye |           | [1,2,3,2]                  |
//   |___________________|           |____________________________|
// 
// 6. to pahale element 1 aayega item me fir vah map me jayega, pure value form me,
//    subse pahale hm for loop ke under kerte hai, map1 [item] --> isme item yah mare key ho gaye hai ke (item of array1), array1 yaha array1 se aayegye vah hm isme map1 [item], item dal degay,
//    or similar hame value chaheye to hame key ke equal me value ko dal degay kuch is tareke se :- 
//                                                                                                        for(item of array1) {
//                                                                                                              map1[item]   =   map1[item];
//                                                                                                      ________________|_____      ______|_______________
//                                                                                                     | yah ho gaye mare key |    | or yah ho gaye value |
//                                                                                                     |______________________|    |______________________|   
//                                                                                                        };  
//   map ko use kerne ke liye hame key or value ke jarurat padte hai, isliye hamne key or value dalna pada.
//   { yaha tak ke process ko hm run ker ke dekhte hai, ke kea output aata hai, hamara }
//   function checkSquare(array1, array2) {
        
//      let map1 = { };
//      let map2 = { };

//      for(item of array1) {
//          map1[item] = map1[item];
//      };
//      console.log(map1);
//   };
//   checkSquare([1,2,3,2], [1,4,4,16]);

//   output :- 
//              { '1': undefined, '2': undefined, '3': undefined }
// 
// 7. hmne yaha tak console kerva ke dekha to hame yaha pe undefined, undefined, undefined dekha raha hai.
//    map ban chuka hai, keys aa chuke hai.
//    { ('1'): undefined, ('2'): undefined, ('3'): undefined } 
//        |                 |                 |
//        |_________________|_________________|
//                          |
//                          |
//    yah hamara map1 ban chuka hai inme key aa chike hai, or isme jo value hai, usko yah undefined dekha raha hai, thik hai.
// 
// 8. to hamesha dhyan rakheyega ke aager hm jo bhi map banaye, or aager hm elements nikalte hai, array se, to vah hamesha hame undefined he dega.
// 9. to is chij ko resolve kerne ke liye kea ker sakte hai, keoke aager man lijeye ke hamare array1 ke under 2 do bar hai, thik hai. but initial time pe vah value aap ko undefined dega, usko nahi pata ke kea value hai.
// 10. to hame kea kerna hai, hamko simple is line me add kerna hai, kea undefinedaata hai, to usse case me kuch is tareke se -->
//                                                                                                                                  map1[item] = (map1[item] || 0);
//     isse hame output me kea dekha dega. --> output:- 
//                                                          {'1':0, '2':0, '4':0};  <-- yaha hame sabhi ke value Zero dekha dega undefined ke jagah per.
// 11. ab jab bhi pahale value aayegye, vah zero hogye usme +1 ker dega.
//     kuch is tareke se :- 
//                              map1[item] = (map1[item] || 0) + 1;
// 12. to isse kea hoga, isse aapko sahe tareke se value mil jayegye, ek bar fir hm console kerke dekhte hai, ke hamare key ke value aache se console ho rahe hai, ya nahi.
//    function checkSquare(array1, array2) {

//     let map1 = { };
//     let map2 = { };

//     for(item of array1) {
//         map1[item] = (map1[item] || 0) + 1;
//     };
//     console.log(map1);
//    };
//    checkSquare([1,2,4,2], [1,4,4,16]);
      
//    output :- 
//                 { '1': 1, '2': 2, '4': 1 }
//    is tarah hame sahe tareke se values mil jayegye

// 13. ek bar hm for loop ke under map1 ka console kerva ke dekh lete hai, ke kis tarah se map me key or value aa rahe hai.
//     kuch is tarah se :- 
//                             for(item of array1) {
//                                 map1[item] = (map1[item] || 0) + 1;
//                                 console.log(map1);
//                             };

//                             output :- 
//                                          {'1':1}
//                                          {'1':1, '2':2}
//                                          {'1':1, '2':2, '4':1}
//                                          {'1':1, '2':2, '4':1}
// is tareke se map1 ke under value aate rahegye.
// { yaha tak hamara pahala map1 complete ho gaya hai. }

// 14. is taraha se hm map2 ke liye kea karegay ke jo map1 ka loop tha ushi ko hm copy ker ke paste ker degay, jisme hame array2 ke elements ko item1 ksy ke under dalte rahegay.
//     kuch is tarah se:- 
//                           for(item of array1) {
//                               map1[item] = (map1[item] || 0) + 1;
//                           };
//                           console.log("Map1", map1);

//                           for(item1 of array2) {
//                               map2[item1] = (map2[item1] || 0) + 1;
//                           };
//                           console.log("Map2", map2);

//                           output :- 
//                                       Map1 = {'1':1, '2':2, '4':1}
//                                       Map2 = {'1':1, '4':2, '16':1}
//    kuch is tarah se hmne map2 ke liye bhi ker leya or output nikal leya, abhi hmne dono ke output ko print kerva leye hai.

// {** ab mera next logic/condition hai. **}
// 15. map yaha hamare dono ke ban chuka hai, ab hame kerna kea hai, ab hame nikalna hai, key thih hai.
// 16. to hm kea karegay, to muze kerna kea hai, me chahata hu, map1 se key nikalna, key mare , to map1 me key kea hai.
//     map1 {'1':1, '2':2, '4':1} <-- hamare pass map1 me key hai --> 1, 2, 4.

// 17. to pahale key nikal lete hai, map1 se.

// 18. to me kea ker raha hu, map1 se key nikal raha hu, or map2 me check karuga ke uska square as a key hai, ya nahi thik hai.

// 19. to ham map1 se key nikalne ke process kerte hai.
//     kuch is tarah se :- 
//     for(let key in map1) 
//     (key nikalne ke liye hm of use nahi karegay array ke case me hm of use kerte jab value nikalte, yaha pe hm in use karegay hm, or muze map1 se nikalne hai, to simple hm map1 lagane vale hai, or console ker lete hai, key ko.)
//     kuch is tareke se :- 
//                             for(let key in map1) {
//                                 console.log("Key", key);
//                             }

//                             output:- 
//                                         Key 1
//                                         Key 2
//                                         Key 3
// is tarah se hame map1 se key mil chike hai thik hai.

// 20. ab muze iske under ek condition lagane hai,  jo ke hogye id condition me ke aager mera map2 ke under aager nahi hai, key*key nahi hai, to us case me kea karega, yah false return ker dega, yah pahale condition ho gaye.
//     kuch is tarah se :- 
//                           if(!map1[key*key]) {
//                               return false;
//                           }
//     hm isme yah check ker rahe hai, ke aager map1 ke key ka square map2 ke key ke rup me nahi milta hai, to yah hame false return ker dega.
//     { itne se condition hmne abhi lagay hai. }

// 21. ek condition or laga lete hai, hmne kaha tha ke value bhi same hone chaheye, hm value ko check kerne ke liye he condition lagayegay.
//     isko check kerne ke liye kuch is tareke se karegay :- 
//                                                               if(map1[key] !== map2[key*key]) {
//                                                                   return false;
//                                                               } 
//     aager map1 ke key equal nahi hote hai map2 ke key se to yah condition false return ker degye.

// 22. verna sab kuch thik hai rahega to muze by default return ker dega function true,
//     is tareke se function ko hmne true return kerva deya.
//     kuch is tareke se :- 
//                               return true;
// 23. or last me hame function ko store kerana padega hame.
//     kuch is tareke se :- 
//                              const result = checkSquare([1,2,4,2], [1,4,4,16]);
//                              console.log(result);
//     isse hame finally true/false  mil jayega.
// 
// 24. yaha tak complete hone per hm esse complete likh lete hai, or sath output check ker lete hai.
function checkSquare(array1, array2) {

    let map1 = { };
    let map2 = { };

    for(item of array1) {
        map1[item] = (map1[item] || 0) + 1;
    };
    console.log("Map1", map1);

    for(item1 of array2) {
        map2[item1] = (map2[item1] || 0) + 1;
    }
    console.log("Map2", map2);

    for(let key in map1) {
        console.log("key", key);
        if(!map2[key*key]) {
            return false;
        };
//      ( iske under hmne keye hai, hm object keys ko check ker rahe hai, in term od square [object key compare in term of square] )
        
        if(map1[key] !== map2[key*key]) {
            return false;
        }
//      ( yaha per hm kea ker rahe hai, value match ker rahe hai, [value compare] )
    };
    return true;
};
const result = checkSquare([1,2,4,2], [1,4,4,16]);
console.log(result);

// output :- 
//              true
// 
// 25. muze yaha output me true mil chuka hai mtlb hamare dono condition sahi work ker rahe hai.
//     1. first to ek map1 ke key ka square dusre map2 ke key ke rup me match ho gaye.
//     2. second un sabhi key ke value abhi match ho gaye.

// 26. aager me yaha pe element change ker dea hu to hame kea milega output me.
//     kuch is tarah se :- 
//                              const result = checkSquare([1,2,4,2], [1,4,4,25]); --> is elemeent ke palce pe hmne 16 se 25 ker deya hai
//     output :- 
//                    false
//    jisse hamara logic bigad jayega or false return ker dega, keoke map1 ke key ka square map2 me match nahi kha raha hai isliye false output dekha deya hai.
//    { is tarah se yah problem statement kam karega. }

// 27. or hm dekha lete hai, ke loop kitne bar chal raha hai.
//     1. first loop hamara :- for(item of array1) --> n times chal raha hai, alag-alag chal rahe hai koi dependance nahi hai.
//     2. second loop hamara :- for(item1 of array2) --> n times yah bhi n times chal raha hai.
//     3. third loop hamara :- for(let key in map1) --> n times yah bhi n times chal raha hai.
//        to is case me jo iske time complexcity hogye vah o(n) hogye, jitne elements hai utne ka loop chalta rahega.
//        Time Complexcity o(n) hogye jo ke Linear Time Complexcity kaha late hai, thik hai.
//        isme main crunch tha, vah map jo ke hmne sekh leya.
//        or main crunch yah bhi hai, ke :- 
//        -> hmne pahale condition check kare ke kea map1 ke under key hai, uska square map2 me hai, aager nahi hai, to false dega, bake jesa logic chal raha tha vesha chalta rahega.
//        -> second condition me hmne compaire keya ke aager vah same nahi hai, to vah false dega, yah thik hai.
//     { or is problem statement ko hmne map ke key or value se output ko achive }
//     { or yaha hamara complete ho jata hai Solutuion }
// Thank You.
