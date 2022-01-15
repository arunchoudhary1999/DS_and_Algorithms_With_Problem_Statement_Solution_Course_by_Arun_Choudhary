// DS and Algorithum Course || Largest Sum of consecutive digits.

// [1, 2, 3, 4, 3, 5, 4, 6, 7, 8] --> total elements - 10
// count largest sum of consecutive digits.

// [1, 2, 3, 4, 3, 5, 4, 6, 7, 8] --> total elements - 10
// count largest sum of consecutive digits.
// num = 4
// sum = 25

// condition :-
// num > array --> error message
// 10 - 4 + 1 = ?

function findLargest(array, num) {
    if (num > array) {
        throw new Error("num is not greater then array");
    } else {
        let max = 0;
        for (let i = 0; i < array.length - num + 1; i++) {
            let temp = 0;

            for (let j = 0; j < num; j++) {
                temp += array[i + j];
            }
            if (temp > max) {
                max = temp;
            }
        }
        return max;
    }
}
const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("Largest Sum of consecutive digits:", result);

// 1. pahale dekh lete hai, ke requirement kea hai:-
//    1. hamare pass ek array hai, [1, 2, 3, 4, 3, 5, 4, 6, 7, 8]--> yah array shorted nahi hai ye, or isme total no. of element vaha 10 hai.
//    2. or hame kea kerna hai, ke count largest sum of consecutive digits.
// 2. yaha pe hamare pass tolal element of 10 hai, or hame largest sum of consecutive digits nikalna hai.
//    sabse pahale hame ek number deside kerna hoga, kitne ka jo ek ke bad ek digit ka kitne digit le sakte hai.
//    hm suppose :- num= 4 le lete hai.
//    -> to pahale kea hoga ke:- pahale char number ka sum ho, jase--> 1, 2, 3, 4
//       [1, 2, 3, 4] --> inka sum hai 10, yaha tak thik hai.
//    -> iske bad next four [2, 3, 4, 3].
//    -> fir next four [3, 4, 3, 5].
//    -> fir next four [4, 3, 5, 4].
//    asse kerke hm last tak ker legay.
//    [4, 6, 7, 8] --> hm dekhte hai, ke last ke number thoe bade hai, or inka sum hm dekhe to inka 25 aa raha hai.
// 3. to hamara output = 25 aana chaheye, yah hamara ho gaya largest sum of consecutive digit.
// 4. to iske liye loop kitne bat chalega hamara loop seven time chalega kase:-
//    1. ek bar iske liye --> [1, 2, 3, 4]
//    2. ek bar iske liye --> [2, 3, 4, 3]
//    3. ek bar iske liye --> [3, 4, 3, 5]
//    4. ek bar iske liye --> [4, 3, 5, 4]
//    5. ek bar iske liye --> [3, 5, 4, 6]
//    6. ek bar iske liye --> [5, 4, 6, 7]
//    7. ek bar iske liye --> [4, 6, 7, 8]
// hamara loop is tareke se sath bar chalega
// 5. or hamare lliye two loop chalegay, kase:-
//                                               {* requirement hamare bahut he clear ha, yaha pe:- *}
//                                               1. hame sum nikalna hai, consecutive digit.
//                                               2. jo hmne number diside keya hai, vaha 4 keya hai, mtlb hm char digit le rahe hai, unka sum dekh rahe hai.
//                                               3. or hm isme se dekh rahe hai, ke last me har digit hai, jinka sum hame 25 mil jayega.

// {* hm condition likh lete hai, jo hame code me lagane hai *}
// **condition**
// 1. jo hamara yah number hai, (num = 4), yah array ke length se jada na ho, [1, 2, 3, 4, 3, 5, 4, 6, 7, 8], vaha number array ke length se jada hoga to hame error throw ker dega, kuc is tareke se --> number is exit
//    yaha condition check hona chaheye ke --> num > array --> error message.
// 2. iske bad hamare pahala loop chalega.
//  kuch is tarah se:-
//                      [1, 2, 3, 4, 3, 5, 4, 6, 7, 8]
//                       |________|  |  |  |  |  |  |
//                          |________|  |  |  |  |  |
//                             |________|  |  |  |  |
//                                |________|  |  |  |
//                                   |________|  |  |
//                                      |________|  |
//                                         |________|
//    her bar hamara i loop chalega kuch is tareke se, is tareke se hamara loop sat bar chalega,
// 3. to iska hm ek formula banate hai, hamre pass total numbers of arrays kitne hai, 10 hai, or hmne jo number diside keya hai, vah kitne hai, 4 hai, or isme hm (+1) ker degay to kitna aa jayega 7 aa jayega.
//    kuch is tareke se :- 10 - 4 + 1 = 7
//    or yahe hamare total no. of loop chalegay jo hmne upper dekha tha.
// {* vase he jo hmne number diside keye hai, jase:- 2, 3, 4, 5, 6 to uske liye hm karegay --> total number  -- (vo number jo hm deside ker rahe hai vaha)+1 = utni bar he hamara loop chalega0 *}
//  yaha formula hai thick hai.

// ***Start kerte hai code:- ***
// 1. pahale hm ek function create kerte hai, findLargest nam ka jisme hame do parameter argument recieve karegay
//    pahala jo ke array ko recieve karega or dusra jo hm numbers recieve karega jo hmne deside keya hai.
//    function findLarget(array, name){ }
// 2. ab hm function ke under if condition lagayegay us condition me hm degay ke-->
//    jo hm num de rahe hai, vaha number greater than ho jata hai, array se, to ker degay ek error or error me de degay kea --> ("num is not greater than array") to is tareke se hm degay.
//    if(num > array){
//    throw new error("num is not greater than array");
//    };
// 3. iske bad hm else lagayegay jisme hm ek varaible bana lete hai, max nam se jo, ke hamare max sum ko store kerke rakhega, abhi hame pata nahi hai ke max sum kea hone wala hai, to hm isko zero asign ker degay:-
//    kuch is tarah se --> let max=0;
// 4. or iske niche hm single loop laga legay, or isme do loop keo lagayegay vaha abhi samze gay.
//    for(let i=0; i<array.length-num+1; i++);
//    i=0 -> i, zero index se chalega.
//    i<array.length-num+1 -> jo formula hmne lagaya tha vaha use ker legay.
//    i++ -> or i++ ker legay.
//    yaha loop jo ke hamara 7 bar chalega.
//    for(let i=0; i>array.length-num+1; i++){ }
// 5. or esse loop ke under ek or loop lagane vala hu. jo ke hoga j loop.
//    j=0 -> j chalega zero se .
//    j<num -> j is less then hm kea karegay socheye? :- ab me yaha pe array ke length tak loop nahi chalana chahata, keval baher vala loop hamara seven time chale, her number ke liye, but jo under vala loop hai, vaha keval char bar he chale, yaha pe hm num pass ker degay, j<num -> esa me keo ker raha hu dekhte hau, or j++ -> ker degay.
//    hame pata hai, ke hmne char num decide keya hai, to j<num isme pahale char num chalega-->
//    jase:-
//                            [1, 2, 3, 4]
//    fir next char num legay -> [2, 3, 4, 3]
//    { is tarah se char-char num consider kerte jayegay }, is tarah se hamara loop chalega.
//    for(let j=0; j<num; j++){  };
// 6. or ab iske bad hm j loop me kea karegay ke --> isko kerne se pahale hm j loop ke upper ek variable legay temp nam jo ke temperary sum ko store karega, or usko value assign ker dete hai, zero .
//    let temp=0;
//    iske bad jase he (j) loop chalega to hm iske under de degay, yaha tak chalega --> temp += array[i+j];
// 7. iske bad jase he second loop (j) vala loop khatam huva, if laga ke condition dalegay ke yadi aager temp greater than hai mare max value se to temp ke value ko max me dal degay.
//    kuch is tarah se:-
//                      if(temp>max) {
//                          max = temp;
//                      };
//   yaha tak hone ke bad hm.
// 8. first vale loop ke under hm return kerva degay, ke jo loop me max vala number hoga usko return kerva degay. --> return max;
// 9. or lastme hm const leke result nam ke variable me max value ko store kerva legay, or equal me hm findLargest nam ka function ko call ker degay jiske do parameter me hm first me hm array ke element dal degay or dusre me num = 4, jo digit liye hai, unko dal degay.
// 10. or lastme hm result ko console pe print kerva degay.
//     or hamara output :- 25 show ker dega.
