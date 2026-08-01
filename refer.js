function showReferralCode() {
  let code = localStorage.getItem("referralCode");

  if (!code) {
    code = "RS" + Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("referralCode", code);
  }

  document.getElementById("myReferralCode").innerHTML =
    "🎉 আপনার রেফার কোড: <b>" + code + "</b>";
}
