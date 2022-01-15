// String Anagram
// 'hello' <--> 'llheo' -- true
// 'hello' <--> 'llleo' -- false
// condition :- 1. length check (for both string)
//              2. string 'hello' { h:0, e:0, l:0, o:0 }
function isAnagram(string1, string2) {
    if(string1.length!==string2.length){
        return false;
    }

    let counter = {}
    for(let letter of string1){
        counter[letter]=(counter[letter] || 0) + 1;
        // console.log(letter);
        console.log(counter[letter]);
    }
    // console.log(counter);

    for(let items of string2){
        if(!counter[items]){
            return false;
        }
        counter[items] -=1; // jo hamara logic tha subtract kerne ka vaha hmne yaha laga deya
    }
    return true;
}
const check = isAnagram('hello','llheo');
console.log(check);

// { aaj ka problem statement hai, string anagram ke upper, string anagram kea hota hai?, kase hm string ko anagram bolegay, or kon se isme condition hote hai, yah hm is problem me dekhe gay }
// 1. sting anagram kea hai, isko samajte hai?, :-jase ke mare pass 'hello' hai or isme kitne letter hail isme five letters hai, or isme 'llleo' isme bhi five letters hai, -- 'hello'  -->  'llleo'
//                                                                                                                                                                                |             |
//                                                                                                                                                                                |             |
//                                                                                                                                                                            five letters   five letters
// pahale condition yaha check kerte hai, ke jo string one hai, or string two hai, in dondo ke letter, length baraber hone chaheye, aager vo barabar nahi hai, to hm nikal nahi sakte, check he nahi ker sakte hai, pahale condition kea hote hai, ke hmne length check kerne hoti hai, ( length check --> both string ) pahale condition samai me aa aaye aabhi hm yaha condition lagayegay code me, ke kea dono string ke, length baraber hai, aager hai, me hm aagay; check karegay verna hm vahi per he false return ker degay, or vaha bata degay hamara logic output me ke yah anagram nai hai, yaha tak thik hai. 'ajay' --> 'ajay' (anagram hone ke liye kea jaruri hai).
// 2. 1. sabse pahel hm length check karegay, :- (ajay) -> iske 4 length hai, or (aajy) --> iske bhi 4 length hai, yaha hamare dono string ke length same hai.
//    2. dusre dono string ke letter same hona chaheye, lekin letter kase bhi arrange ho usse koi mtlb nahi hai, lekin letter same hona chaheye, dono me, jase :- 1. (ajay) --> (ajay) <---- yaha anagram hai, keoke isme dono ke length bhi same hai, or letter bhi same hai, 2. (ajay) --> (lay) <----- ab yaha anagram nahi hai, keoke dono ke length bhi same nahi hai, or length bhi same nahi hai. 
// { ye aag ke problem statement hai }
//    1.{ pahale hame dono string ke length check kerne hai, barabar hai, to thik hai }
//    2.{ dusra bahut intrsting hai:- jo hamara first string hai --> 'hello' hm isme se kea karegay, identify hm isme ek map bana ke identify karegay ke first string kon se kitne letter hai, 'hello' -->{ h:1, e:1, l:2, o:1 } }, ab hame mera pahal string se yaha pata lag gaya ke jo mere letters hai, string ke under vaha kitne kitni bar hai, yaha hame pata chal gaya hai, 
//        ab hamare pass ho second string hai --> 'llheo', to hm kea karegay ke second string hamate first se compaire kervayegay ke anagram ke condition ke hisab se sare chij match ker rahe hai, ya nahi.
//        first string                  second string
//        a). n - 1                       2 - l  (c)
//        b). e - 1                       1 - l  (a)
//        c). l - 2                       1 - e  (b)
//        d). o - l                       1 - o  (d)
//        1. dono string ke letter ek dusre se match ker rahe hai, to yaha anagram hai.
//        2. aager dusre string ke letter first string se match nahi hote hai, to yaha anagram nahi kahalayega.
//  {* or is tareke ka hai, hamara problem statement *}
//  {* or isme jo time complexity hai, or bahut intresting hai *}

// {* hm start kerte hai, code likhna *}
// 1. pahele hm banate hai, ek function jisko hm nam dete hai, --> isAnagram.
// 2. jisme hamare pass do parameter rahegay, first string1 nam se or second string2 nam se, jo upper hmne dicous keya hai, vahe hm kam kerne wale hai, or is function ko hm niche call bhi ker degay, 
// 3. pahale muze check kerna hai, length iske liye hm if condition laga ke check karegay, if me hmne yaha condition lagai hai, ke aager string 1 ke length is not equal to string 2 ke length to ye hame return ker de false, yaha hmne condition me lagai hai, yaha function hame return ker dega aagay chalega he nahi yaha function, isse yaha samai aa jayega ke ye anagram nahi hai. yaha tak hamara thik chal raha hai.
//    {* yaha tak hmne check ker liya hai, ke string 1 or string 2 ke length equal nahi hai, to yaha function hame false return ker dega *} 
// 4. ab aagay badte hai, ab hame kea kerna hai, ab hame string 1 ke sath khelna hai, ab hm simple for loop lagane wale hai, for loop me likhegay ke --> ab muze letters nikalne hai, string 1 se.
//    kuch is tarah se:- for(let letter of string 1)
//                          {
//                              console.lg(letter);
//                          };
// 5. to hmne for loop ke help se string 1 ke jitne letters te unko hame coonsole ker console pe dekha deya.
//    output:- h
//             e
//             l
//             l
//             o
//    yaha hame output mil gaya hai.
// 6. ab muze kea kerna hai, count kerna hai, letters abhi hmne letters nikal liye string 1 me se, ab muze kea kerna hai, ek tareke se muze map me dalna hai, value form me dalna hai, jisse me logic ko active ker pav { h:0, e:0, l:0, o:0 } --> is tareke se hame value ko dalna hai, mtlb in case muze is tareke se muze her letters ko count kerna hai, is tareke se bhi hm hana sakte hai.
// 7. iske liye hame ek variable create kerna padega count nam ka, jo abhi dale hai --> let counter={};
// 8. ab muze kea kerna hai simple hame ke counter ke under hame letter dalna hai, { hmne kea keya hai, ke jo hamare letters aa rahe hai, usko hmne counter nam ke variable me dal deya ha }
//    jase:- 
//              let counter={};
//              for (ler letter of string) {
//                  counter[letter] = counter[letter];
//                  console.log(counter[letter]);
//              }
//    or hmne isko console pe print kervaya to hame undefined show ker deya.
//    lekin undefined show keya kintu hamara loop kitne bar chale 5 bar loop ne undefined show ker deya.
//    output:- 
//              undefined
//              undefined
//              undefined
//              undefined
//              undefined
//    un pacho letters ke liye loop chala, lekin undefined aaya, initial time pe jab hm letters ko dalegay, counter ke under to hame undefined he dega.
// 9. hm isko handle karne ke liye javascript me kea kerte hai, ke aager vaha undefined show hota hai, to usse zero show ker de, to hm is tareke se lekegay --> counter[letter] = counter[letter] || 0;
//    to hame output me kea show karega--> 
//    output:-
//              0  
//              0  
//              0  
//              0  
//              0
//   yaha per hamne undefined ke jagah per zero print kerva deya hai.
//   { javascript me jab bhi react me kam kerte hai, to hm hamesa yaha condition check kerte hai, ke jab bhi hm coding kerte hai, to hm do condition jarur check kerte hai, ke NULL or Undefined }
//   { jo mera object aa raha hai, vaha NULL or Undefined na ho, hm ek ternary operater use kerte hai, or yaha condition check kerte he kerte hai. }
//   { yaha per bhi yahi khel hai yaha per bhi by default undefined de raha tha, letter ko dal rahe ho counter ke under, to hmne kea keya ke uako hmne Zero le liya, ye chij to aa gaye, lekin hame yaha pata nahi lag raha hai ke hamare string 1 me letter kitne kitni bat hai. }
//   { to hm kea karegay 0 me +1 ker degay, kuch is tarah se:- counter[letter] = (counter[letter] || 0) + 1; kuch is tarah se hm ne kiya hai } 
//                                          output:-
//                                                    1 
//                                                    1 
//                                                    1 
//                                                    2 
//                                                    1
//   hame yaha output dekha deya.
//   { yaha per huva kea hai ke jab pahale bar undefined aaya --> counter[letter] = counter[letter]; is tarah se kerne per undefined yaha. }
//   { fir hmne kaha ke undefined aa raha hai, to hm undefined na dekha ker zero dekha do, to iske liye hmne yaha keya --> counter[letter] = counter[letter] || 0; to isse hame undefined ke jagaha per zero dekha dega }
//   { for hmne kea keya ke letter hono ko counter kervane ke liye +1 keya take hame pata chal paye ke jo string 1 ke under jitne letter hai vaha kitne kitni bar aa rahe hai, iske liye hmne kiya --> counter[letter] = (counter[letter] || 0) + 1; } 
//   { kis tarah se kam kiya isne :- * +1 keya to pahale iske value undefined thi mtlb 0 tha isme +1 kya to 1 yaha, to h ke liye kea aa gaya --> 1 }
//                                   * +1 keya to pahale iske value undefined thi mtlb 0 tha isme +1 kya to 1 yaha, to e ke liye kea aa gaya --> 1  
//                                   * +1 keya to pahale iske value undefined thi mtlb 0 tha isme +1 kya to 1 yaha, to l ke liye kea aa gaya --> 1  
//   { next time fir l aaya hamre pass pahale uske value already undefined nahi hogye one hogye, to 1 + 1 = 2, to iske liye aa gaya --> 2 }
//   { last ke liye o, to yaha undefined rahega to isko zero man legay, to isme +1 keya to aa gaya --> 1 }
//   to is tarah se output aaya -->  output:- 
//                                              1 
//                                              1 
//                                              1 
//                                              2 
//                                              1
// 10. iske bad jab hm counte ko for loop ke baher console kervayegay to hame is tareke se show ker dega jo hm ne map me banaya tha.
//     console.log(counter);
//     output:- 
//              1 
//              1 
//              1 
//              2 
//              1
//              { h:1, e:1, l:2, o:1 }
//    is tareke se hamara counter aa chuka hai.
//    to hame pata chal gaya hai, ke hamare first string 1 me kitne letters hai.
// 11. aab next kea kerna hai, hame next bahut esay hai, to hm kea karegay ke jo hamara string 2 hai, uspe hm loop laga lete hai, usme degay hm ke string 2 ke jo items hogay, kuch aase --> for(let items of string2) {  };
//     { yaha hamara for loop ho gaya hai, or string 2 --> llheo yah hai, hamare string 2 or ya string 2 hamare items me aayegye jab for loop ko use karegay tab. }
// 12. ab is for loop ke under sabse pahle hm ek if condition lagayegay, is if condition me pahale condtion yaha degay ke pahale hm check ker legay ke kea mare counter ke under ye items hai bhi ya nahi ( kon se items jo hmne string 2 ke under hai vaha hmne items me le leye hai ) hame isko check kerna padega ke item ke under hai ya nahi hamre string 2.
// 13. aager hamare counter ke under ye items nahi hai, to hm simplely return kerva degay false. --> for (let items of string2) {
//                                                                                                       if (! counter[items]){
//                                                                                                          return false;
//                                                                                                       }
//                                                                                                    }  
// if condition me hmne check kerva liya hai, ke string 2 ke chij, hamare counter[items] me nahi aa rahe ho to return hame false bhaj dega.
// 14. or aager kea karega ke counter[item] me se -1 ker dega.--> 
//                                                                  counter[item] - = 1;
//     verna return ker dega true kuch is tarah se --> 
//                                                                  for (let items of string2) {
//                                                                      if (! counter[items]){
//                                                                          return false;
//                                                                      }
//                                                                  } 
//                                                                  return true;
//    to ho gaya yaha tak to ab isko result ko store kerva lete hai jaha function ko call keya hai, --> const check = isAnagram ('hello', 'llheo');
//                                                                                                      console.log(check);
//   { is tareke se hmne return ko yaha per store kerva leya }
//   { ab iska hm output nikalte hai to-->
//                                output:- 
//                                          1
//                                          1
//                                          1
//                                          2
//                                          1
//                                          true
//   yaha hame true mil gaya hai, tabhi hame true milega jab dono string anagram ke condition lagu hogye }
//   { aager dono string me se ek me bhi anagram ke condition lagu nahi hote hai, to false return ker dega. }
//   { or hm complescity ke bat kerte hai, to yaha pe hm next loop use nahi ker rahe hai, to yaha pe Quadratic time complexcity nahi aayegye, keoke dono loop aalag-aalag chal rahe hai, to yaha Linear time complexcity (o(n)) aayegye hai }