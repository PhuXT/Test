class ArrIntManager {
    constructor(arr){
        this.arr = arr
    }
    tongCacPhanTu(){
        let sum = 0;
        for(let x = 0; x < this.arr.length; x ++){
            console.log(this.arr[x]);
            sum += this.arr[x]
        }
        console.log('Tong la:' + sum);
    }
    isNguyenTo( number) {
        if( number < 2) {
            return false
        }
        if( number == 2) {
            return true
        }
        if(number % 2 == 0){
            return false
        }
        for(let i = 3; i < (number - 1); i += 2 ){
            if(number % i == 0){
                return false
            }
        }
        return true
    }
    tongSoNguyenTo(){
        let sum = 0;
        for(let x = 0; x < this.arr.length; x ++){
            if(this.isNguyenTo(this.arr[x])){
                sum += this.arr[x]
            }
        }
        console.log('Tong so nguyen to:' + sum);
    }

    inBoBaSo(){
        if(this.arr.length < 2){
            console.log('So luong phan tu nho < 3');
            return 1 
        }
        for(let i = 0; i < this.arr.length -2; i ++){
            if(this.arr[i] + this.arr[i+1] == this.arr[i+2]){
                console.log(this.arr[i] + ' '+  this.arr[i+1] + ' ' +this.arr[i+2] );
            }
        }
    }
    // Day con lien tiep dai nhat = S
    showSubArr(s) {

    }
}
const test = new ArrIntManager([1,2,3, 5, 6, 9])
// test.tongCacPhanTu()
// test.tongSoNguyenTo()
// test.inBoBaSo()
test.showSubArr(6)