// Checking Sum Zero --> Problem 1.
// [-5, -4, -3, -2, 0, 2, 4, 6, 8] --> input.
// [?, ?] --> output.
// Another Solution.
function FindSumPair(array) {
    let left = 0;
    let right = array.length-1;

    while(left < right) {
        sum = array[left] + array[right];
        console.log(sum);
        if(sum === 0) {
            return [array[left], array[right]];
        }
        else if(sum > 0){
            right--;
        }
        else{
            left++;
        };
    };
};
const result = FindSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log("This is Output", result);

// { hmne pichle problem_1 me dekha tha, usme hmne pair indentify keya tha, jiska sum Zero ho, But usme jo time complexity thi, vaha aa rahe thi Quadratic, or jo usme hmne loop use keya tha, vaha do bar use keya tha, mtlb hm her number ko compare kervane ke liye add kerva ke check ker rahe the, ke kise ka sum zero aa raha hai, ya nahi aa raha hai, yaha tak hmne keya tha 👍 }
// { but usme problem kea thi, ke us solution ke under yaha tha ke Iltration jo hai, jo loop chal raha tha, vaha ek number ke liye 7-7 bar chal raha tha, to hmne usme do bar lagaya tha, to pahale bar pahala loop (n) time chalega, or inner loop bhi (n) time chalega, to yaha hamara (n^2) hai, o(n^2) jo ke hamare Quadratic Time Complexcity aa gaye thi }
// { pahale program_1 me kaha tha, ke jo program_2 me jo logic banayegay, esse problem_1 ko leke, esse ko simplify karegay, or isko or impromise karegay, jo Quadratic Time Complexcity hai, usko hm Linear banane ke kosis karegay }
// { to hm esse solution ko kerne vale hai, simplify or jo hamara output tha, vo tha [-4, 4] keoke, jo input me jo array hai, vaha bahut shorted hai, hm esse logic ko dusre logic se dekhegay, ke in dono me kea difference aa gaya or un numbers ka Iltration kitne kam huva hai. }

// {* hm suru kerte hai kerna, isko kerne ke Multiple wys hai *}
// 1. ab hame kea requirement hai, ke hame ek essa pair nikalna hai, first pair jiska sum zero ho, ab hm kea karegay iske liye.
// 2. {* yaha se hm main logic samaj the hai *}
// 3. dekhte hai :-> [-5, -4, -3, -2, 0, 2, 4, 6, 8] isko solve kerne ke liye ek option hai, pointer ka, to hm use nahi ker rahe hai javascript me, to hm kea karegay
//    dekhte hai:- [ -5,  -4,  -3,  -2,  0,  2,  4,  6,  8 ]
//                    |                                  | 
//                    |                                  |
//               Left Pointer                      Right Pointer
//         ( hm assum ker rahe hai,            ( or esse tarah se hmne 
//          ke array ka fist element            array ke last element 
//          hm ne assum ker liya hai,           ko assum ker liya hai, 
//               Left Pointer )                     Right Pointer )
// 4. to yaha hamara (-5) Left ho gaya hai or (8) Right ho gaya hai, abhi hmne itna he kara hai, ke pahala number hai, jo mera vaha kuch bhi ho sakta hai, but array mera shoted rahega, (-5) mera left ho gaya hai, or last number jo array ka rahega vaha right ho gaya. { yaha tak hamara thik hai }
// 5. to logic kuch essa banega, left jo number hai, vo or right usna sum karega, or dekhega ke kea vo Zero hai, aager vaha Zero hai to mil jayega, lekin aager [(-5) + (8) = 3] aayega jo ke Zero se greater hai, aager mera number Zero se bada aayega, to jo right hai mera usko hm shift ker degay aagay. (mtlb right ko (--) ker degay) pahale vaha (8) tha to usko shift kerne per (6) pe aa jayega, fir hm [(-5) + (6) = 1] ko dekhegay ke kea aata hai 1 aata hai, to ye bhi zero se bada hai, fir hm right ko shift ker degay 4 pe [(-5) + (4) = -1] kitna ho gaya -1, to is case me kea hoga [(-5) + (4)] = me -1 dega, ye jo ke Zero se chota hai.
// 6. jase he hm Zero se chota number melega, jo ke negative hai, us case me hm aagay loop chalai gay he nahi, mtlb aagay hm comparision karegay he nahi, to hm left side se number ko shift ker degay left ++ (mtlb jo variable hai hamara left jo bhi index hoga vaha next ho jayega, mtlb ke (-5) se (-4) pe aa jayega).
// 7. to fir hm again (-4) ko right side se compaire kerna start ker degay. jase:- [(-4) + (8)] = 4 Zero se bada hai, fir hm right ko -- ker ke aagay shift karegay, 6 pe aa jayegay fir hm check karegay, [(-4) + (6)] = 2 ye bhi Zero se bada aa gaya. fir hm right se -- ker ke aagay shift ker degay 4 pe, to [(-4) + (4)] = 0 to yaha se hame Zero mil jayega.
// 8. isse huva kea fayada, hm utne he Ilteration ker rahe hai, jitne hame nedd hai, iske bad hm nexr number per move ho rahe hai, usme koi essa pair hai, jo ke Zero ke equal ho, yaha tak hmne logic samaj liya hai, or hm esse ka he code likhne wale hai 
// 9. { to hm kea karegay yaha per:- 1. sabse pahale hm ek functionn bana lete FindSumPair nam se, 2. or isme hm parameter recieve ker legay array nam se or ye array short rahega.}
// 10. or (-5) hamara left vaiable rahega to iske liye hm left nam ka ek variable bana legay or iske hmne value (0) assign ker deya, keoke zero index me hamara vaiable value (sara khel indesing ka he hai, aager hmne koi number access kerna ho, to hm index ke base pe he access karegay) to hamara lefg vaiable 0 hai, let left = 0;
// 11. or right kea hoga, right hm kase Identify karegay hard code, to nahi ker sakta me, to hm kea karegay --> let right = array.length-1; array.length ker degay, or jo bhi next length rahegye, usko (-1) ker degay, to isse hame right mil jayega, keoke yaha zero se suru huva hai, isliye (-1) laga deya, to isse hame last number mil jayega right nam ke variable me.
// 12. ab muze kea kerna hai, ke muze yaha lagana hai, ek loop tabhi yaha Linear ho payega, muze do loop use nahi kerne hai, me left janta hu, right janta hu, hm discous ker chuke hai, ke aager mera number greater than zero hoga, mtlb do number ka sum greater than zero hoga, to us case me hame kea kerna hau, ke hamare right pointer/ right variable ko (--) kerna hai, (mtlb ke right me vaha 8 per hai to hm usse (--) kevayegay to vaha 6 aa jayega), aager vo (-) me hai, aager jo sum ker rahe hai, vaha (-) me aa raha hai, mtlb zero se chota aa raha hai, to us case me left variable ko hm (++) ker degay, simple itna he kerna hai, to hm iske liye while loop karegay, while(left < right) --> to isse hamare loop chalta rahega, to hmne condition kea lagay hai, ke left < right, * hmne while loop me condition kea lagay (left is smaller than right) hamesa yahi rahega, keake yah array shorted hai, while(left < right) { }, hm iske liye ker ke bhi check ker sakte hai, isse hamara loop chalta he rahega her bar, keoke left hamara -5 hai, -5 se kam hote ja rahe hai, isse hamara loop chalta he rahega, iskeliye hmne kea condition lagay, (left < right) *,* keoke left mera Zero hai --> left = 0; *, * right mera hoga jo array ka maximun number hoga uska index --> right = array.length - 1; left, right hoga yaha tak hamara loop chalega. --> function FindZeroPair(array) { let left=0; let right=array.length-1; while(left < right) { }; }; *
// 13. ab yaha kea kerne wale hu:- while(left < right) { (ab yaha hame condition lagane padegye hame) }, is condition me hame sum kervana hai, kiska --> sum = array(left) + array(right)
//                                                                                                                                                                     |             |
//                                                                                                                                                                     |             |
//                                                                                                                                                           ( array ka pahala  |  ( array ka last
//                                                                                                                                                             no. rahega vo )  |  no. rahega vo )      
//                                                                                                                                                               [-5, -4, -3, -2, 0, 2, 4, 6, 8]   
// 14. hm iske hisab se dekhe to hamara pahala left no. (-5) ha, or last right no. (8) hai, inka sum kea zero hota hai, check ker lete hai if condition laga ke --> if(sum === 0) (aager sum zero huva to yaha condition run karegye) { return [array[left], array[right]]; }, or yaha condition run hone ke bad hame vaha no. return ker dega, jin do no. ke pair ka sum zero aaya tha, vaha no. hame return ker dega.
// 15. aager sum mera greater than zero hota hai, to kea karegay, jo right wala variable hai usko hm (--) ker degay, to right vala vaiable 8 se shift ho jayega 6 per, kuch is tarah se --> else if(sum > 0){ right -- ; };, fir dubara loop chalega fir plus karegay, thik hai, lekin index badal jayegye, jab right ko (--) ker degay to vaha 6 pe aa jayegye, to iska index automatically index badal gaya fir right ka loop vahe tak chalega, kaha se kaha tak (-5 to 6) tak.
// 16. again else lagate hai, ab isme kea karegay esle meaager sum greater than zero hoga, to hm right-- ker rahe hai, aager vaha less than hoga, to else me automtically aa jayega, to hm left wale ko (++) ker degay, or isko run ker lete hai, or yaha tak hamara logic complete ho gaya hai. 
// 17. is case time complexcity bat kare to kea hogye --> Linear Time Complexcity o(n) keoke ek bar he loop chal raha hai, hamara.
// 18. or yaha hamare Linear Time Complexcity ho jayegye.
// 19. ek logic dekha pahale problem_1 me jisme bahut sare Ilteration the, or dusra hmne jisko Linear ker deya ho, hm ne is problem_2 me dekha.
// {* yaha tak hamara logic clear ho gaya hai *}.
// {* or next problem_2 ke under jo problem dekhegay vaha stirng ke upper rahegye. *}