function showNotice() {
  alert("📢 Notice: Admissions for 2025 are now open!");
}

function submitForm(event) {
  event.preventDefault(); // Prevent form refresh
  const name = document.getElementById("name").value;
  alert("Thank you, " + name + "! Your message has been sent.");
}
