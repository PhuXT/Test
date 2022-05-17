// CLASS STUDNET
class Student{
    constructor( name, age,  math, physical, chemistry) {
        this.name = name,
        this.age = age,
        this.math = math,
        this.physical = physical,
        this.chemistry = chemistry
    };
    // SET RANK
    setAvgAndRank() {
        this.avg = Math.floor((this.math + this.physical + this.chemistry) /3)
        if(this.avg < 5){
            this.rank = 'YEU'
        }
        if(this.avg >=  8){
            this.rank = 'GIOI'
        }
        if(this.avg >= 6.5 && this.avg < 8){
            this.rank = 'KHA'
        }
        if(this.avg >= 5 && this.avg < 6.5){
            this.rank = 'TB'
        }
    }
}   

// CLASS  ManagerStudent
class ManagerStudent{
    listStudent = []
    // 
    addStudent(st){
        this.listStudent.push(st)
    }

// Tìm kiếm student theo tên
    findStudent(name) {
        let kq = 'Khong tim thay'
        for (let student of this.listStudent) {
            if(student.name === name){
                kq = student
            }
        }
        console.log(kq);
    }

    // lấy ra studnet có rank = 'GIOI'
    getGoodRank() {
        let kq = 'Khong tim thay'
        for (let student of this.listStudent) {
            if(student.rank === 'GIOI'){
                kq = student
            }
        }
        console.log(kq);
    }

    // sắp xếp theo tên, tên trùng sắp xếp theo avg
    sortListStudent(){
        this.listStudent.sort((a, b) =>
            (a.name > b.name) ? 1 : (a.name === b.name) ? 
            ((a.avg > b.avg) ? 1 : -1) : -1 )
    }
}


//TẠO SINH VIÊN
const st1 = new Student('St1', 20, 6, 5, 8)
const st2 = new Student('St2', 20, 6, 5, 8)
const st3 = new Student('St3', 20, 6, 5, 8)
const st4 = new Student('St11', 20, 6, 5, 8)
const st5 = new Student('St5', 20, 9, 9, 8)
const st6 = new Student('St6', 20, 6, 5, 8)
const st7 = new Student('St1', 20, 6, 5, 8)
const st8 = new Student('St8', 20, 6, 5, 8)
st1.setAvgAndRank()
st2.setAvgAndRank()
st3.setAvgAndRank()
st4.setAvgAndRank()
st5.setAvgAndRank()
st6.setAvgAndRank()
st7.setAvgAndRank()
st8.setAvgAndRank()

// THÊM SINH VIÊN VÀO LISTSTUDENT
const manageST = new ManagerStudent()
manageST.addStudent(st1)
manageST.addStudent(st2)
manageST.addStudent(st3)
manageST.addStudent(st4)
manageST.addStudent(st5)
manageST.addStudent(st6)
manageST.addStudent(st7)
manageST.addStudent(st8)


// Câu C: Tìm kiếm theo tên
manageST.findStudent('St3')
manageST.getGoodRank()
manageST.sortListStudent()
console.log(manageST.listStudent);

