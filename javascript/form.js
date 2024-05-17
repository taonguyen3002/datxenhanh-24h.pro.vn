const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");
const fullname = document.getElementById("fullname");
const numberphone = document.getElementById("numberphone");
const timebook = document.getElementById("timebook");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  if (address1.value && numberphone.value) {
    alert("Vui lòng nhập đầy đủ thông tin");
  } else {
    const data = {
      address1: address1.value,
      address2: address2.value,
      fullname: fullname.value,
      numberphone: numberphone.value,
      timebook: timebook.value,
    };
    postData(data);
  }
});

async function postData(data) {
  const formData = new FormData();
  formData.append("entry.1657683479", data.address1);
  formData.append("entry.1453869651", data.address2);
  formData.append("entry.1721884308", data.fullname);
  formData.append("entry.433961538", data.numberphone);
  formData.append("entry.413035737", data.timebook);
  fetch(
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeTLTtyPbc9CpHH1xXetkZdNqEWL3t6gkuKAkmvF4ShDF6pEg/formResponse",
    {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }
  );
}
