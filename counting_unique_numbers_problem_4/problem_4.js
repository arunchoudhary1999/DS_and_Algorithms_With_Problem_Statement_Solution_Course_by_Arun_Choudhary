// Count Unique Numbers?
// [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]

// Count Unique Numbers:-
// [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]
// output --> 8

// conditions
// i=0, j=1
// array[i] !== array[j]
// 1. i++
// 2. array[i] = array[j]
function countUnique(array) {
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i+1;
    } else {
        throw new Error("Array is Empty");
    }
};
const result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log("This is a Unique Number", result);

// 1. yaha hamare pass ek array or yah shorted array hai, muze isme se Find kerna hai, Unique Number, mtlb muze Unique number ka count kerna chaheye.
// 2. hamare pass ek shorted array hai, or iske under kuch 12 element hai, but isme jo unqiue elements hai, vaha 8 hai, kuch is tarah ke -- (1, 1), (2, 2), (4, 4), (8, 8) <-- us tarah ke hamare pass 8 element hai unqiue to hamare output hona chaheye 8
//    output :- 8
// {* yah hamara problem statement hai *}
// 3. is problem statement ko kerne ke liye multiple ways hai.
// 4. abhi hamre pass shorted array hai, hmne jitne bhi problem statement kiye hai, un sabhi me array shorted hai, keoke hm aache se shorting sikh jayegay, to fir hm unshorting array legay.
// 5. is problemm statement ko hm do tareke se solve karegay, jo dusra tareka hoga vaha next video me dekhegay, but abhi hm pahala tareka dekhte hai, but isme jo hm loop use karegay vaha ek bar karegay, do bar nahi karegay.

// {* yaha se hm logic banana suru kerte hai *}
// 6. jo-jo me yaha condition lekhuga vaha-vaha hm code ko likhte samai use karegay, isse hamara coding vala part hai, vaha fatafat ho jayega.
// 7. [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8] yah shorted array hai,
//    suppose:-
//                array element       Index ke hisab se
//                   i = 1                 i = 0
//                   j = 1                 j = 1
// 8. yaha tak ho gaya, hm yaha se logic lagana suru kerte hai.
// 9. i hamara 0 hai, j hamara 1 index ke hisab se -->   index:-  0  1  2  3  4  5  6  7  8  9  10  11
//                                                       array:- [1, 1, 2, 2, 3, 4, 4, 5, 6, 7,  8,  8]
// 10.  i  j
//     [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]
//     aager mare i or j ke value match kerte hai, value bol raha hu, value match kerte hai, to us samai loop chalta rahega, to hame kuch nahi kera hai, matlb i or j match ker gaya to j ke value next aa jayegye, j me increment ho jayegye.
//     jase:- jab j ko 1 se increment ker ke 2 pe ke to j ke value 2 ho gye, or i ke value 1 the to ye dono match nahi ker rahe :-   i     j
//                                                                                                                                  [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]
//
//                                                                                                                                   i = 1, j = 2
//
//                                                                                                                                   i != j
//
//                                                                                                                                   1 != 2 ( yaha i ke value j se match nahi ho rahe hai )
// 11. its mains aager i or j ke value match nahi kregye, to us cse me hm kea karegay.
//     1. pahala kam, aager jo array ke value hai, i vaha match nahi karegye array ke value j se array[i] !== array[j], jo pahala kam hai mera vaha kea hai --> to hm i ke value ko (++) karegay --> (++) yaha tak thik hai.
//     2. dusra kam kea hoga hamara, jo mare array[j] ke value hogye, usko me dal dega apne array[i] ke jo value hogye uske jagah dal degay, to yaha tak thik hai.
//          i       j
//        [(1), 1, (2), 2, 3, 4, 4, 5, 6, 7, 8, 8] --> yaha per hamare i = 1, or j = 2 hai, yaha match nahi ker rahe hai.
//        { to yaha array[i] !== array[j] true ho jayega }
// 12. to hm kea karegay i ke value ko hm (++) ker degay --> (i++)
//        ->i   j
//     [(1, 1), 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]
//         |
//         |
//         -> yaha hmne i ke value ++ ker ke aagay bada deya hai.
//
//          i<-- -->j
//     [1, (2, (2), 2), 3, 4, 4, 5, 6, 7, 8, 8]
//          -----
//            |
//            |
//            -> yaha hmne kea keya jo j ke value the vaha hmne i ke value me dal de.
//
//     array[i] = array[j]
//     ab dubara j me increment hoga fir, j jayega next pe :-
//                                             (i)     (j)
//                                         [1, (2), 2, (2), 3, 4, 4, 5, 6, 7, 8, 8]
//                                              |       |
//                                              |       |
//                                             (i   =   j)
//                                             (2   =   2)
//                                             yaha hamare i or j ke value fir match ho gaye, kuch nahi hoga fir
// 13. fir j ke value bad jayegye j++ ho jayegye.
//          i          j
//     [1, (2), 2, 2, (3), 4, 4, 5, 6, 7, 8, 8] --> yaha per i = 2, j = 3
//     i != j
//     2 != 3
//     yaha per dono ke difference value aa gye
//     array[i] != array[j] --> yaha match nahi huye.
// 14. to fir hm i ke value ke (++) bad degay or value ko replace ker deya mtlb jo j ke value the usko hmne i me dal deya or iske bad hame j ko increment ker deya,
//     kuch is tarah se -->
//                                   i<----- ->j
//                           [1, 2, (3), 2, 3, 4, 4, 5, 6, 7, 8, 8] --> yaha per bhi i = 3, j = 4
//     i != j
//     3 != 4
//     yaha per bhi dono ke value match nahi kare.
//     is condition ke hesab se array[i] !== array[j]
// 15. or last tak esa chalta rahega yaha tak pahuch jayega loop.
//                            i           (j)
//     [1, 2, 3, 4, 5, 6, 7, (8), 6, 7, 8, 8]
//     last me hamare pass i = j, 8 = 8, i or j ke value same aayegye 8 = 8 kuch kuch nahi hoga or loop khatam ho gaya, or last i ke jo value hai, vaha 8 he hai, or yahe hamare output hai, yaha tak thik hai, or output mera ek he chaheye muze yaha hamara logic is tareke se kam karega.
//     jo hmne condition lagai hai, vaha condition hm code me lagane wale hai.

// {* Start kerte hai code likhna *}
// 1. sabse pahale hm ke function bana lete hai count unique nam se.
// 2. or iske under hamare pass parameter me hm array de degay.
// 3. or sath me hm is function ko call bhi ker degay,bootom me or function call ke under as a argument, array ko pass ker degay jo array ke element hai vaha, yaha tak hmne itna keya hai :-
//                                                                                                                                                                                             fnction countUnique(array){
//                                                                                                                                                                                             };
//                                                                                                                                                                                             countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
//
// 4. function ke under sabse pahle hm kea karegay, array ke length check karegay if condition laga ke.
// 5. or if condition me degay ke array bhi length hamare Zero se bade hone chaheye.
//    kuch is tarah se -->
//                          if(array.length > 0){
//                          };
// 6. ab aagay hm if condition me statement dena suru kerte hai.
// 7. yaha per me assum kerta hu ke (let i = 0) i mera zero rahega.
// 8. uske bad hm for loop lagayegay jo ke hoga j vala -->
//                                                          for (let j=1; j<array.length; j++);
//                                                                   ---  --------------  ---
//                                                                    |         |          |
//                                                                    |         |          |
//                                                              (j ko hm    | (j chota    | (or j ko
//                                                               index 1    |  rahega     | increase
//                                                             se start ker |  array ke   | karte rahegay
//                                                              rahe hai)   |  length se) | 1 by 1 ker ke)
// 9. to i mera Zero hai to pahale condition jo hai vaha ye vale hai --> array[i] !== array[j];
//    is pahale condition ko hm for loop ke under if condition laga ke de degay ke under array[i] aager array[j] se match nahi hoti hai, to hm kea karegay, hm karegay i++, or sath me ho mare j ke value hoge usko hm i me dal degay, thik hai yaha tak.
//    hmne yah keya hai -->
//                          if(array.length>0){
//                             let i=0;
//                             for(let j=1; j<Array.length; i++);
//                             {
//                                  if(array[i] !== array[j]){
//                                  i++;
//                                  array[i] = array[j];
//                                  };
//                              };
//                          };
// 10. aager mare for example array empty hota hai to hm yaha else laga dete hai, else me hm degay throw new error ("Arry is empty");
//     kuch is tarah se:-
//                         else{
//                              throw new Error("Array is empty");
//                         };
// 11. or jo bhi hamara last i hoga, mtlb loop jaha band ho raha hai, hamara vaha pe yah laga degay --> (return i+1), keoke i ke value hame kea mill rahe thi, vaha pe jaha hmne logic shikha tha i = 8 haina.
//     or hmne i ke value zero define ker rakhe hai, i=0 to hoga kea hamare i zero se chalega to hame i+1 kerna padega, yah zero na hota to, hm direct i return kerva dete,
//     to hame return me 8 mil jayega, to hame last me i ke value kea chaheye 8 to hame return kerva deya i+1, yahe hamara output rahega.
// 12. yaha hm return kerva rahe hai, to hm function call ke equal me ek result name ka variable bana legay, jisme hm return se aa raha output ko store kerva ke console pe dekha degay.
//     is tarah se -->
//                      const result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
//                      console.log(result);
// 13. aager hm hamare array ko khale rakhte hai to, hame output me degay --> Array is Emplty
// 14. aager hm hamare array me last me [9, 9, 9] de dete hai to output hame --> 9 mil jayega.
// 15. logic work sahi kam ker raha hai hamara, shorted array hai, or number chahe kitne bar bhi ho to hame yah unique number dega.
// {* or yaha tak hamara logic kam keya, or yaha per loop chala hamara ek bar, to yaha per time complexcity hoga --> o(n) -- Linear Time Complexcity *}