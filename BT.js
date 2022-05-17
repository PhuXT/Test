// class Caculator {
//     sumPow(x, n) {
//         let result = x;
//         for(let i = 1; i <= n; i++ ){
//             result += Math.pow( x, i) 
//         };
//         return result;
//     }
// }


// // Cau 2
// class DrawAnyShape {
//     drawShape( height) {
//         for( let i = 0; i <=  height; i++) {
//             for(let j = 1 ; j <=  height-i; j ++) {
//                 console.log(" ");
//             }
//             for(let j = 1 ; j <= i; j++){
//                 console.log('*');
//             }
//         }
//     }
// }
// const test = new DrawAnyShape()
// test.drawShape(6)


// Cau 3:
class MyString{
    tongBangASII(string) {
        let result = 0;
        for(let x = 0; x < string.length; x ++) {
            result += string[x].charCodeAt()
        }
        return result
    }

    tongChuVietHoa(string) {
        let result = 0;
        for(let x = 0; x < string.length; x ++) {
            if(string[x] == string[x].toUpperCase()){
                result += string[x].charCodeAt()
            }
        }
        return result
    }

    lietKeTanXuat(string, n){
        let arr = []
        for(let i = 0; i< string.length; i++){
            for(let j = 0; j< string.length; i++){
                let kq = '';
                let flag = 1;
                if(string[i] == string[j+1]){
                    ++flag
                    kq = string[i] + ':' + flag
                    console.log(kq);
                }
                arr.push(kq)
            }
        }
    }
}

const test = new MyString()
// test.tongBangASII
test.lietKeTanXuat('Xin chao cac ban', 3)
