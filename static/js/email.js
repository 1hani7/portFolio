function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("detail").value
    };
    
    const serviceId = 'service_e837yyo';
    const templateId = 'template_qv4s4bs';
    
    emailjs.send((serviceId, templateId, params))
    .then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("detail").value = "";
        console.log(res);
        alert("메일 전송이 완료되었습니다.")
    })
    .catch((err) => console.log(err));
}
