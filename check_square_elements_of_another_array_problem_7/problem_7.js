// #7. DS & Algorithoms Course | Check Square Elements Of Another Array |:-

// Solution :- 
// Checking Square in Another Array.
// array1 = [1, 2, 3, 4], and array2 = [1, 9, 4, 16].
function isSquareCheck(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        let isSquare = false;
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] * array1[i] === array2[j]);
            {
                isSquare = true;
            }
            if (j === array2.length - 1) {
                if (!isSquare) {
                    return false;
                };
            };
        };
    };
    return true;
};
const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(result);

// 1. yaha per hamare pass do array hai, array1 = [1, 2, 3, 4], and array2 = [1, 9, 4, 16]. ye hamare do array hai,
//    to first ke jo bat kare to array1 = [1, 2, 3, 4] , jo isme first 1 element ka sqaure hai (1*1=1) vaha 1 he hota hai, jo ke array2 = [1, 9, 4, 16], 1 jo ke array2 me hai.
//    {* isme koi order vale bat nahi hote hai, yah unorder bhi rahega to chalega *}
// 2. to hame yah check kerna hai, ke jo array1 = [1, 2, 3, 4] ke under jo elements hai, kea unka square array2 = [1, 9, 4, 16] elements ke under pesents kerna hai.
//    mtlb:-    array1          array2
//                1^2             1
//                2^2             4
//                3^2             9
//                4^2             16
//   aager kerta hai to muze mill jayega true, or aager nahi kerta hai, to false to hm is tareke ke logic ko banane wale hai.
// 3. to hm do tareke ke yah logic banana wale hai, abhi hm is video me first tareka dekhegay, isme hm first tareka samazte hai.
// 4. vase to yah logic teen line ka hai, jo hame javascript inbuilt deta hai, aager me unka use kerta to, yah logic teen line me ban jayega, to hm is pure series me inbuilt logic use nahi karegay, hm isme bilkul fresh code banayegay, jisse hamare samazne ka or logic banane ka ban jaye.
// 5. {* isko banane ke liye hamare pass kuch condition hogye *}
// 6. hamare pass first array hai usme kuch elements hai --> array1 = [1, 2, 3, 4], or second array me hame check kerna hai.
// 7. {* to hm kea karegay *}
// 8. first array ke elements ka square bana legay --> array1 = [1, 2, 3, 4], or kea first array ke elements ka square second array ke under hai. --> array2 = [1, 9, 4, 16].
// 9. aager hm thoda sa loop wise bat ko to bahut importance hai, aager mera ek loop chalega to jase time complexcity alag hogye, aager do loop chalegay, to time complexcity alag hogye.
// 10. to is case me hm esa karegay, ke me iska array1 = [1, 2, 3, 4] square bana ke check karuga, dusre array ke under --> array2 = [1, 9, 4, 16], to pahale bar jo loop chalega to, vaha array1 = [1, 2, 3, 4], 1 array ke
// 11. is element ke liye chalega, fir me check karuga second loop ke under array second ke her ek elements se compare/check karuga ke kea second array ke under, vo square axiss kerna hai, to muze number ke liye, second array jo hai, uske sare elements muze visit kerne padegay, check kerne padegay.
// 12. yah logic kharab to nahi hai, lekin hm time complexcity bat kare to, array1 = [1, 2, 3, 4], array2 = [1, 9, 4, 16].
//                                                                              |                       |
//                                                                              |                       |
//                                                                     to n time yah loop chalega. | or n time yah loop chalega.
//     1. to time complexcity aayegye o(n^2) thik hai, o(n^2) -> yah Quadratic Time Complexcity.
//     2. or isse behater -> o(n) -> Linear Time Complexcity, jisme ek he loop chalta hai.
//     3. or inse behater hamare -> o(log(n)) Binary Time Complexcity, yah bahut jada bahater hote hai, Linear se.

// 13. {*yaha tak requirement samaz me aa gaye.*}
// 14. ab condition kea hogye :-
//     1. pahale condition lagate hai, --> aager me pahale condition lagata hu, pahale first array me he square nikal lete hai, to kea karuga ke jo first array hoga yaha pe, jo bhi isme mera loop chalega, to me pahale uska square nikal luga, yah hm condition dekh rahe hai, jo hm use karegay code me.
//        if(array1[i] * array1[j] === array2[j]);
//        |______________________|    |_________|
//                   |                     |
//        { yaha hmne array1 ke     |  { fir check karegay dusre array2 ke under, -->
//        first element ka multiply |  aager array 1 ke first element ka square array2
//        keya -->                  |  ke under check karegay, aager ha, to hm kea
//        array1 = [(1), 2, 3, 4]   |  karegay return true kerva degay. }
//                   |              |
//                 1*1=1        }   |
//                                  |
// 15. let isSqure = true; <-- essa hm ek assum ker legay variable jo ke check ker lega square, boolean variable le legay or usko value ko true ker degay,
//     or kuch is tareke se --> let isSquare = ture;
// 16. {* isme hm ek-do condition or lagayegay ke man lejiye *}
//     hm iska square [1, 2, 3, 4] check ker rahai hai, inme --> [1, 9, 4, 16] or isme pura loop chal gaya or isme vah square mela he nahi, to ek condition iske liye bhi lagaygye ke pura loop chal gaya, vah square mela he nahi, to us case me vah return ker dega, false aase condition bhi hm lagane wale hai.
// {* yaha tak hame requirement clear hai. *}

// {* code likhna start kerte hai. *}

// function isSquareCheck(array1, array2)
// (* 1. yaha sabse pahale isSquareCheck nam se ek function bana lete hai, iske parameter me hm arrray1, array2 ko recieve ker legay, keoke hamare pass do array hai, isliye hmne function ke parameter me do array ko recieve keya hai. *)
// {
//   for(let i=; i<array1.length; i++)
//   {
//   (* 2. isme pahale hame lagana hai, for loop isme hm i ko assum ker legay, -> i=0; , or i mera chaleg, i<array.length; last tak chalna hai, hame isme samazne wale chij yah hai, ke first array1 ka jo first element hai, uska square array2 ke her element se compare hoga.
//       array1 = [(1), 2, 3, 4] --> array2 = [1, 9, 4, 16]
//                  |                          |  |  |   |
//                  |                          |__|__|___|
//                 (1)^2=1 __________________________|
//       kuch is ek element ke liye loop char bar chalayegy.
//       1. esse tarah array1 ke liye elements ke square array2 ke elements se comapre check karegay.
//       2. is liye yaha do loop chalegay, is chij ko achive kerne ke liye.
//       3. isko hm ek loop me ker ke dekhegay optimize ker ke next video me, to is case me time complexcity aayegye Linear.
//       4. or abhi ke case me aayegye Quadratic, or i++ or loop inverse kerna padega. *)
//     let inSquare = false;
//     (* 4. to yaha pe  hm ek kam karte hai, ke yaha per flag jo ke hame true or false dega, to yaha pe hm leet ker ke isSquare nam ke variable ke under by default false dal degay. jase ke :--> i=0, i<array.length, to is case me array1 ka pahala element hai vo 1, thik hai, to by default isSquare ke value kea ker rakhe hai, false *)
//       for(let j=0; j<array2.length; j++)
//       {
//       (* 3. or iske under ek or loop lagane vale hai, isko hm j ker legay j=0, or yahj bhi lagega array ke length tak j<array2.length, or j++ incement kerna rahega, yaha tak hamare pass do loop ho gaye, or requirement bahut he clear hai.
//           hame check karna hai, yah vale condition jo hmne samze the --> if(array1[i] = array1[i] === array2[j]); hm second loop me yah vale condition check karegay,thik hai, or jase he use mil jayegye, to vah return true ker dega, but jab bhi hm true/false ke bate kerte hai, to vaha pe boolean varaible aata hai.*)
//         if(array1[i] * arrry1[j] === array2[j])
//         (* 5. fir second loop chalega, or iske under hm condition lafa degay ke if aager array ke jo value hai, aager ho mara first array hai, usme hm i dal degay, array1[i], to isse hame yaha 1 mil jayega, to aager muze 1 chaheye keoke hame square kerna hai, to multiple array1[i] ker degay or aager ye mera baraber ho jata hai === array2[j] jo hai mera second vala uske sath second loop to chalega her bar, to if(array1[i] * array1[i] === yah multiple ker ke check karega ke second array1[j] loop me,  yadi mil jata hai, to kea karega.), if(array1[i] * array1[i] === array2[j] {}; ) *)
//         {
//           isSquare=true;
//           (* 6. to us case me hm ker degay, isSquare ke value ko jayegye true, by default false rahegye, jo bhi element under aayega, to ye logic hamara ban gaya,
//           to is case me kea hai, ke first loop chalega, first elements ke liye or second loop chalega, her bar check karega jitne element uske under ke kea uska square hai, hoga to true ker dega aager nahi hoga to uske liye bhi case consider kerna padega. *)
//         }
//           if(j===array2.length-1)
//           (* 7. yaha per bhi hame condition lagana padegye, yaha jo j ke value hai, keoke h mera loop chal raha hai, j ke value aager vah equal ho jate hai, array2 ke last tak thik hai, ke vah last tak chal gaya jab bhi usse vah element mila he nahi, if(j===array2.length-1); , to uske under hm ek condition lafa degay yaha j ke value -> 0, 1, 2, 3 hogye, jase he uske value ho jayegye last tak, to us case me hm kea karegay ke keamuze square mila , kea square mera false hai, mtlb mela he nahi square hame, to hmne default false ser ker ke rakha hai. *)
//           {
//              if(!isSquare)
//              {
//                 return false;
//              }
//              (* 8. if(array1[i] * array1[i] === array2[j]) { isSquare = true; }; --> yah condition hamare match he nahi huye, to last tak loop chalega, aager man lejeye isSquare ke value false to us case me vah return false ker dega. --> return false;
//              yah condition lagane ka faida yah hai ke is condition se yah check ker rahe hai, ke jo first array ke element ka sqaure hai, vah second array ke elements me nahi kerta hai, ( mtlb vah axist he nahi kerta hai ) to is case me yah hame false return kerega, yaha tak thik hai. *)
//           }

//       }

//   }
//   return true;
//   (* 9. aager ye mera successfully chal jata hai, to by default muze return kea karega, ye mtlb ke hamara loop successfully chal jata hai, to hm return kerva degay, true, ke vah pura chal chuka hai, ye hamara logic ban gaya hai. *)

// }

// (* 10. aager ye yaha simplehm jo result chaha rahe hai, vah aa raha hai, yah nahi usko store ker ke print kerva lete hai. *)
// const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
// console.log(result);

// * last me code ko run keya to output = true aaya, mtlb ke jo first array ke element ka square vah second array ke under access kerta hai isliye hm output me true mil gaya *
// * aager me is jagah second array me elemnts ko kuch change ker dega to kea result aayega. jase --> const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, (24)]); yaha hmne last element ko change ker deya hai, ab yaha hame output melega false keoke first array ke element ka square second array ke under acces nahi kerta hai, isliye *
// * aager  me second loop se ye vale condition hata du. --> if(j===array2.length-1) { if(!isSquare) {  return false; }; };, yah hata dene ke bad jab eun kerte hai to hame true return ker dega output me keoke isme hmne koi not nahi lagaya tha, condition me isliye hame yah false return nahi karega *
// * to first loop hamara n time chal raha hai, or second loop bhi hamara n time chal raha hai, to isme time complexcity hogye, hamare vaha hogye o(n^2) --> Quadratic Time Complexcity, lekin hm isse banana chahate hai, Linear ke hamara ek he loop me kam ho jaye, o(n), isko hm next video me cover karegay. yaha hamare problem complete ho gaye hai *