function showResult() {
    let a= parseInt(document.getElementById("input1").value);
    let b= parseInt(document.getElementById("input2").value);
    let c= parseInt(document.getElementById("input3").value);
    let d= parseInt(document.getElementById("input4").value);
    let e= parseInt(document.getElementById("input5").value);
    let GPA= (a+b+2*c+2*d+3*e)/9;
        if (GPA>=8.0) {
            alert('xếp loại Giỏi');
        }else if (GPA>=6.5) {
            alert ('xếp loại Khá');
        }else if (GPA>=5.0) {
            alert ('xếp loại Trung bình');
        }else {
            alert('xếp loại kém');

        }

}