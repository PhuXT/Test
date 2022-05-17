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
    }
}