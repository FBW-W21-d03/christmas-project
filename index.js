function sendEmail() {
  let sender = Form.sender.value;
  let password = Form.password.value;
  let receiver = Form.reciever.value;
  //let content=Form.content.value;
  let message = Karte;

  Email.send({
    Host: "smtp.gmail.com",
    Username: sender,
    Password: password,
    To: receiver,
    From: sender,
    Subject: "Check Email Sending",
    //Body: content,
	Body: message,
  }).then(function (message) {
    if ((send = true)) {
      alert("Email not sent successfully");
    } else {
      alert("Email sent successfully");
    }
  });
}
