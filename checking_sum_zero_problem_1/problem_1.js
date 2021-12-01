// Checking Sum Zero in Problem_1 :- 
function getSumPairZero(array) {
    for (let number of array) {
        console.log("Outer loop", number);
        for (j=1; j<array.length; j++){
        console.log("Inner loop", j);
            if (number + array[j] === 0) {
                return [number, array[j]];
            }
        }
    }
}
const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log("This is Output of this problem_1 ", result);

// Checking Sum Zero Problem 1:- 
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] -> input

// { Product base company ke liye is tarah ke logic sikhna jaruri hai }

// { hm problem 1 ko solve kerke dekhte hai ke kea Time Complexcity nikalte hai } 

// { Pahale hm problem statement ko samaj lete hai, ke kea input hai, or kea output chaheye hame, uske bad logic banate hai, fir Time Complexcity ko dekhte hai }
// 1. Basically hame do numbers ka essa pair check kerna hai jiska sum zero aaye.
// 2. hamare pass input ke rup me aaray hai. jase:- [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// 3. hame kea kerna hai, ke is array me se ek first pair essa nikalna hai, jiska sum Zero aaye.
// 4. [-5, -4, -3, -2, 0, 2, 4, 6, 8] ye ek array hai jisko hm input me legay, output kea chaheye muze ke ek essa pahala pair chaheye jiske sum Zero ho.
// 5. or output abhi hame nahi pata hai, ke essa konsa pair hai, jiska sum Zero aaye. :- [?, ?] -> output
// 6. is problem ko solve kerne ke liye multiple way hai, jinme se hm do tarike se solve karegay
// 7. hamare pass array me itne element hai, or itne index per hai vaha element.
//    Array Element -> [-5, -4, -3, -2, 0, 2, 4, 6, 8] ----- hamare pass total element 9 hai.
//    Element Index ->   0   1   2   3  4  5  6  7  8  ----- hamare pass totel index 8 hai.
// 8. to hm kea karegay ke array ke first element (-5) ko leker bake sare element se compare karav, or check karu jab tak zero na aaye, or yaha logic hai pahala, or esse ko he hm abhi implement kerne vale hai.
// 9. to hm compare kervate hai sabhi ko, or dekhte hai ke kab tak Zero aata hai. let's Go :- 
//    (-5) + (-4) = -9
//    (-5) + (-3) = -8
//    (-5) + (-2) = -7
//    (-5) + (0) = -5
//    (-5) + (2) = -3
//    (-5) + (4) = -1
//    (-5) + (6) = 1
//    (-5) + (8) = 3

//    (-4) + (-5) = -9
//    (-4) + (-4) = -8
//    (-4) + (-3) = -7
//    (-4) + (-2) = -6
//    (-4) + (0) = -4
//    (-4) + (2) = -2
//    (-4) + (4) = 0  { yaha hame pahala paor mil gaya jiska sum zero hai, or yahe hamara output rahega }

// 10. input clear or shorted hai, khas bat kea hai, ke hamara array shorted hai, to hame short kerne ke jarurat nahi hai, or hm aagay shorting bhi shikhegay.
// 11. yaha per interesting yaha hai, ke hamara array shorted hai.
// 12. yaha array short nahi hota to, hame shorted kerna padta.
// 13. or hm bina short keye yaha chij achive nahi ker payegay, ker legay lekin uska logic alag banana padega.
// 14. abhi hamare pass problem statement thodi chote hai, mtlb jo input mela hai vaha shorted mela hai.
// 15. or element yaha hamare shorted hai, or yaha hame hamara pahala pair mil chuka hai :- [-4, 4] = 0 ka.
// 16. hmne output nikalne ke liye array ke sare element ko compaire ker rahe hai, to hamare element kitne bar traverse karega, mtlb compaire ker rahe hai to loop chalta rahega.
// 17. to pahala loop chalega (-5) element ke liye jo hamara outer loop rahega or is (-5) ko sabhi element se [-5, -4, -3, -2, 0, 2, 4, 6, 8] compaire kervane ke liye dusra loop chalega jo hamara rahega inner loop.
// 18. to is case me time complexcity kea aayegye -----> vaha Quadratic time complexcity aayegye, isko hm kaha sakte hai o(n^2).
// 19. to is quadratic ko linear banayegay tab jab hm impromise and optimise karegay, to esse hm next problem statement me dekhegay.
// {* yaha tak problem statement clear hai hamare *}

// {* ab hm logic banate hai *} :- 
// 1. sabse pahale me ek function create ker leta hu, lekin me esse bena function se bhi ker sakte hu. to hm esse abhi function create ker ke bana rahe hai.
// 2. to hm getSumPairZero nam se ek function bana lete hai, or is function ke parameter me ek array recieve karega, keoke jo hamara input hai vaha array hai --> [-5, -4, -3, -2, 0, 2, 4, 6, 8], isliye hm ne parameter me array recieve kervaya hai.
// 3. iske bad hame function ke under ek for loop lagana hai, or jo loop hm lagayegay yaha pe, jo ke yaha hamara pahala loop rahega, or is loop me hm conditon de ker program ko run kerke dekhna padega ke condition ke hesab se hamare sare element traverse ho bhi rahe hai, ya nahi.
//    { Traversing kea hote hai --> To visit each and every element of an array is called Treversing }
//    kuch is tareke se run kerke dekhe gay :-   
//                                              function getSumPairZero(array) 
//                                              yaha hmne ek getSumPairZero nam ka functioncreate ker usme ek array (jo hm input me de rahe hai vaha) is nam ka argument de degay function ke parameter me, jo ke array ke her element ko recieve ker lega.
//                                              {
//                                                  for (let number of array) 
//                                                  or for loop ka kam yaha rahega ke array ke under rakhe huve sabhi elements ko yaha ek ek ker ke dekhata jayega yaha kam kerta hai for loop.
//                                                  {
//                                                      console.log("first Outer loop", number);
//                                                  }
//                                              }
//                                              getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
//                                              or yaha hmne function ko call ker deya, bina call kare function run nahi karega.
//    output:- -5
//             -4
//             -3
//             -2
//             0
//             2
//             4
//             6
//             8 
// 4. yaha tak hmne check ker leya hai, ke hamara loop aache se array ke elements hono ko traverse ker raha hai.
// 5. ab hame kea kerna hai ke (-5) ko campaire kervana hai, sabhi element se, jb tak mera un do numbers ka sum zero na aa jaye jab tak, to hame kea kerna padega iske liye, hame ek or for loop lagana padega jo hamara second loop rahega (inner loop).
//    kuch is tarah se:- 
//                          function getSumPairZero(array) {
//                                 for (let number of array) {
//                                 console.log("Outer loop", number);
//                                      for (j=1; j<array.length; j++){
//                                      console.log("Inner loop", j);
//                                      }
//                                 }
//                          }
//                          getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
//    Output:- 
//              Outer loop -5
//              Inner loop 1 
//              Inner loop 2 
//              Inner loop 3 
//              Inner loop 4 
//              Inner loop 5 
//              Inner loop 6 
//              Inner loop 7 
//              Inner loop 8 
//              Outer loop -4
//              Inner loop 1 
//              Inner loop 2
//              Inner loop 3
//              Inner loop 4
//              Inner loop 5
//              Inner loop 6
//              Inner loop 7
//              Inner loop 8
//              Outer loop -3
//              Inner loop 1
//              Inner loop 2
//              Inner loop 3
//              Inner loop 4
//              Inner loop 5
//              Inner loop 6
//              Inner loop 7
//              Inner loop 8
//              Outer loop -2
//              Inner loop 1
//              Inner loop 2
//              Inner loop 3
//              Inner loop 4
//              Inner loop 5
//              Inner loop 6
//              Inner loop 7
//              Inner loop 8
//              Outer loop 0
//              Inner loop 1
//              Inner loop 2
//              Inner loop 3
//              Inner loop 4
//              Inner loop 5
//              Inner loop 6
//              Inner loop 7
//              Inner loop 8
//              Outer loop 2
//              Inner loop 1
//              Inner loop 2
//              Inner loop 3
//              Inner loop 4
//              Inner loop 5
//              Inner loop 6
//              Inner loop 7
//              Inner loop 8
//              Outer loop 4
//              Inner loop 1
//              Inner loop 2
//              Inner loop 3
//              Inner loop 4
//              Inner loop 5
//              Inner loop 6
//              Inner loop 7
//              Inner loop 8
//              Outer loop 6
//              Inner loop 1
//              Inner loop 2
//              Inner loop 3
//              Inner loop 4
//              Inner loop 5
//              Inner loop 6
//              Inner loop 7
//              Inner loop 8
//              Outer loop 8
//              Inner loop 1
//              Inner loop 2
//              Inner loop 3
//              Inner loop 4
//              Inner loop 5
//              Inner loop 6
//              Inner loop 7
//              Inner loop 8
// 6. 1. (j=1) --> degay keoke hm index 1 se start keregay compaire kervana is liye hm ne j=1 deya hai.
//    2. (j<array.length) or hame loop ko vaha tak chalana hai, jitne array ke length rahegye vaha tak.  
//    3. (j++) loop ko her ek bar chalne ke bad j me +1 increase hota rahega is liye hmne j++ keya hai.
// 7. yaha tak hmne loop ko minimun lenght se increase kerva ke maximun length tak pahucha deya.
// 8. or is inner loop ke under if condition lagayegay, jo kam karega ke --> jo mera number hai, jo kaha se mela hai, hamare outer loop se, vo number mare inner loop ke number se, add ho ker zero ho gaya hai. to hm return kerayegay ek number(jo hamre outer loop se aaya hoga mtlb array ka element) or array[j] (or vaha inner loop ka number jo j index pe array ka element rahega vaha number), to in dono ko if statement se return kerva degay.
// 9. ye kervane ke bad hame jo if statement se hame return mil raha hai usse hame ek result nam ke varible me store bhi kervana padega keoke hm return kerva rahe hai.
//    kuch is tarah se:- 
//                          const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
//                          yaha hmne result nam ke variable ke under return se to mil raha hai usse hmne store kerva leya hai.
// 
//                          console.log("This is Output of this problem_1 ", result);
//                          or yaha per hm ne result ko dekhane ke liye console per print bhi kerva leya hai.
// 10. yaha tal hamara logic aache se run ker raha hai.

// 11. ye dono loop n time chalte rahegay, to inke time complexcity vo kea hogye, vaha hogye --> Quadratic Time Complexcity, jisko hm o(n^2) kahate hai. yaha is problem_1 ke time complesxity ho gaye.
// 12. Quadratic Time Complexcity aa gye, ab hame isko Liner Time Complexcity banana hai, isko or impromise kerna hai, ek loop me he kam ho jaye essa kuch kerna hai. tabhi yaha Liner Time Complexcity kahalayega.
// 13. aager isko Linear banana ho, for example:- muze o(n) --> (isko Linear bolte hai) kerna ho, to hame is problem_1 ko single loop me kerna padega, tabhi hamara Linear kahalayega   

// ***** Yaha tak hmne first problem_1 statement ko complete keya, jisme hmne shorted array ke sath kase pair ko compaire keya jiska sum Zero tha. ***** 
// ***** or next problem_2 ke under hm fist problem_1 kko impromise karegay, jo time complexcity quadratic hai, usko linear kerne ke kosis karegay, iske liye thoda logic change karegay.  *****
