function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
      .setTitle("Membership Due Amount Check");
}

function searchMember(memberId) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sample"); 

  if (!sheet) {
    return "ERROR: Sheet not found. Check tab name at the bottom!";
  }

  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) { 
    if (data[i][0].toString().trim() === memberId.toString().trim()) {
      return "Name: " + data[i][1] + "<br>Due Amount: " + data[i][2];
    }
  }

  return "No record found";
}

