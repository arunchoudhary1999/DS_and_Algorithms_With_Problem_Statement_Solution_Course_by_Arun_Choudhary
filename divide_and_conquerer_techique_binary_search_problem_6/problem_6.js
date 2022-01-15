// #6. DS & Algoritham Course -- | Divide & Conquerer Technique | Binary Search:-

// Divide & Conquerer Techique.
// Find the index of given number in a sorted array?
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] --> input
// 6 --> output

function searchAlog(array, number) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2);
        if (array[midIndex] < number) {
            min = midIndex + 1;
        } else if (array[midIndex] > number) {
            max = midIndex - 1;
        } else {
            return midIndex;
        }
    }
    return -1;
}
const result = searchAlog([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
console.log("Divide & Conquerer Techique", result);

// 1. aaj is video me hm searh concept sikhne vale hai.
//    hamare pass do tareke ke search concept hai:-
//    1. Linear Searching and 2. Binary Searching
//              |_______________________|
//                          |
//          yah dono hm aagay sikhne vale hai.
// 2. or hm is problem ko solve kerne wale hai, Binary Search.
// 3. hmne lekha hai, Divide & Conquerer Techique, to hm abhi array ko divide karne wale hai, or divide kerne se kea faida hoga, or jo number of Ilterations hai, jo loop chalta hai, hamara sabhi no. me na chalke vahe per chale jaha hame chalana hai, yah hame is algorithms ka faida mill jata hai.
// 4. Binary Search hm yah naye algorithms nahi bana rahe hai, yah algorithms pahale se he hai, hamre pass, to hm isko use karegay or is required ko achieve karegay.
// {* Extension install in vs code *}
//    1. Babel
//    2. Babel es6/es7
//    3. Babel Javascript
//    4. Babel REPL
//    5. Beautify
//    6. Breacket Pair colrizer
//    7. Error Lens
//    8. ES7 React/Redux

// {* sabse pahale requirement samaz lete hai, ke logic kea lagega *}
// 1. jo hamare pass elment hai 7 usko index chaheye.
//    jab bhi hamare pass array shorted ho us kase me hame kabhi bhi index nikallana ho kise bhi element ka, to usse ek km ker do, vahe hamra index hoga us element ka,
//    to yaha hamare pass element hai 7 to iska index hoga 6 keoke element me se ek kam kerne per he hamara index niklega isliye hamara index 6 aaya.
//    to yah array hai -->
//                          [1, 2, 3, 4, 5, 6, (7), 8, 9, 10, 11, 12, 13, 14, 15]
//                           |  |  |  |  |  |   |   |  |   |  |   |   |   |   |
//                           0  1  2  3  4  5  (6)  7  8   9  10  11  12  13  14
//                                              |
//                           iska index aa gaya 6 yahe hame chaheye output, yaha tak thik hai.
// 2.abhi hm use ker rahe hai, Divide & Conquerer Technique, to hame array ko divide kerna hoga, or fie usse section  me jana hoga, jisme vah lie kerta hai, or fir vahe pe hamara loop chalta rahega, or fir vaha se muze vah element index mil jayega, jo ke muze chaheyega,
//   yaha tak thik hai, isse hamare no. of loop number of Ilteration bahut kam ho rahe hai.
// 3. pahale mare pass shorted array hai, or hm yaha do variable bana rahe hai.
//    1. min - nam se
//    2. max - nam se
// 4. or hmne keya --> min = 0, max = array.length-1, hame jo samajna hai, vaha indexing pe samajna hai, hm yaha indexing ke bat karegay element ke nahi karegay.
//    abhi hamara kam indexing ke based hai.
// 5. array element -->   [1, 2, 3, 4, 5, 6, (7), 8, 9, 10, 11, 12, 13, 14, 15]
//                         |  |  |  |  |  |   |   |  |   |  |   |   |   |   |
//            index -->    0  1  2  3  4  5  (6)  7  8   9  10  11  12  13  14
//    min = 0, to iska element kea hoga --> element = 1
//    max = array.length-1, to iska element kea hoga --> max = 15
// 6. jo algorithms hai, hamare binary search ke vah kea kahate hai, ke sabse pahale hm nikalte hai indexing of element 7 vaha abhi hai 6, isko hm abhi formula laga ke samajte hai, to hame min or max mil gaya hai,
//    sabse pahale hmne kea kerna hai, ke hame midIndex nikalna hai, to yah kase niklega, yah niklega --> midIndex => (min+max)/2 => (0+14)/2 => 14/2 => 7(index), <-- isse hame midIndex = 7 nikal jayega,
//    or esse tarah hamara midIndex = 7 nikal jaya or isse hm se mid element bhi nikal liya, jo ke 8 hai, or muze mera pahala case mil gaya hai.
//    ab jo ye number aaya hai, vaha element mera 8 hai, or index 7 hai.
//    {* jab hmne hamara logic start keya, to hmne min ko or max ko dono ko plus keya unke indes ko or isse muze midIndex mil gaya, or midIndex me 7 index me hamare pass 8 element lil gaya, yaha tak hmne hamara pahala case keya. *}
// 7. second condition :- aager vo mera element jo bhi hamara midIndex aaya jispe mera 8 element hai. if array[midIndex]<number[7], aaaager yah element, mera less than jis element muze index chaheye (vaha number kea hai 7) to hm kea karegay jo hamara midIndex hai hm usme (+1) ker degay, (min = midIndex+1).
// 8. but condition apposite bhi ho sakte hai, aager hmne lo array mera midIndex aa raha hai, vah greater than ho mare number se us case me kea karegay --> max ke under midIndex-1 ker degay, (max = midIndex - 1)
// 9. under dono condition nahi chalegye to hamara midIndex ko dekha dega.

// ***Code***
// function searchAlog(array, number) {
// 1. (yaha ek searchAlog nam ka function create keya jo do parameter recieve ker raha hai, array, and num nam ke) 

//     let min = 0;
// 2. (yaha min value ko zero assum ker liye hai)

//     let max = array.length - 1;
// 3. (yaha max value ko array.length -1 sal deya hai)

//     while (min <= max) {
// 4. (iske bad hmne while loop create keya jisme hmne deya min less than equal to max)

//         let midIndex = Math.floor((min + max) / 2);
// 5. (midIndex nikalne ke liye min+max kena padega, yadi add value aayegye to mtlb yadi dicimal me number aayega to usse with out dicimal ker dega) 

//         if (array[midIndex] < number) {
// 6. (if me hm is tarah ke condition dal degay) 

//             min = midIndex + 1;
// 7. (yah condition true hogye to yah dekha dega)

//         } else if (array[midIndex] > number) {
// 8. (yadi if vale condition false huye to else if vale condition check karega)

//             max = midIndex - 1;
// 9. (yah true hone per yah dekha dega)

//         } else {
//             return midIndex;
//         }
// 10. (yadi if or else if vale dono condition nahi chalne per hamare else chalega or yah return minIndex ker dega) 

//     }
//     return -1;
// 11. (aager loop chalne per kuch nahi hota hai, to jo hm number de rahe hai vah by default nahi hota hai, to us case me hm (-1) return ker dega)

// }
// const result = searchAlog([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
// 12. (yaha pe hmne return ko ek result nam se varaible me store kerva liya sath function ko call ker ke uske parameter me array ke element or jiska element ka undex chaheye vah number dal degay) 

// console.log("Divide & Conquerer Techique", result);
// 13. (or last me console kerva degay result ko )

// output :- 6 (hamara output index 6 aa gaya hai)
// {* iske time complexcity aayegye --> Binary Time Complexcity --> jiko hm bolte hai --> o(log(n)) *}