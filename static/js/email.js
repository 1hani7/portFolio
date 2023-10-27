// function sendMail(){
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("detail").value
//     };
    
//     const serviceID = 'service_e837yyo';
//     const templateID = 'template_hi7gl8k';
    
//     emailjs.send(("service_e837yyo","template_hi7gl8k", params))
//     .then((res)=>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("detail").value = "";
//         console.log(res);
//         alert("메일 전송이 완료되었습니다.")
//     })
//     .catch((err) => {
//         console.log(err);
//         alert("현재 기능 점검 중입니다.")
//     });
// }
