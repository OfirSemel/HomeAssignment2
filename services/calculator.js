// function calculatePrice() {
//     const sitePrice = parseInt(document.getElementById("siteType").value);
//     const pages = parseInt(document.getElementById("pages").value);
//     const customDesign = document.getElementById("customDesign").checked;

//     let total = sitePrice;

//     if (pages > 1) {
//       total += (pages - 1) * 200;
//     }

//     if (customDesign) {
//       total += 1000;
//     }

//     document.getElementById("result").innerText = `המחיר המחושב לפי הכללים הוא: ${total}₪`;
//   }


function calculatePrice() {
    const siteType = parseInt(document.getElementById('siteType').value);
    const pages = parseInt(document.getElementById('pages').value);
    const custom = parseInt(document.getElementById('customDesign').value);

    if (pages < 1 || pages > 10) {
      document.getElementById('result').textContent = "Error: Pages must be between 1 and 10.";
      return;
    }

    let total = siteType;
    if (pages > 1) total += (pages - 1) * 200;
    total += custom;

    document.getElementById('result').textContent = `Total Price: ${total}₪`;
  }

  function resetForm() {
    document.getElementById('siteType').value = '1000';
    document.getElementById('pages').value = '1';
    document.getElementById('customDesign').value = '0';
    document.getElementById('result').textContent = '';
    }