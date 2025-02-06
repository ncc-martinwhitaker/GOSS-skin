$(document).ready(function() {
    /* 3454 */
    $("#CASEMANAGEMENTCLOSECASEV1EN_CLOSECASEBTN").attr("aria-describedby", "close-button-details");
    $("#CASEMANAGEMENTCLOSECASEV1EN_CASECOMPLETIONTARGETBUTTONS_OUTER").prepend("<div class='warning' id='close-button-details'>Important: once a case is closed it cannot be edited or reopened.</div>");
});


/*===================================================
5209 Hide Close Case button in CSH for 6 casetypes
===================================================*/
document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.querySelector("#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_CASETYPE");
    const closeButton = document.querySelector("#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_CLOSECASEBTN");
    const validValues = [
      "adviceandguidance",
      "databreach",
      "freedomofinformation",
      "informationshare",
      "policerequest",
      "subjectaccessrequest",
      "clienthardshiprequest" //5354 CHS case management - Prevent case closure
    ];
  
    function toggleButtonVisibility() {
      if (validValues.includes(selectElement.value)) {
        closeButton.style.display = "none"; // hide button
      } else {
        closeButton.style.display = ""; // show button
      }
    }
  
    // Run a check when the value changes
    selectElement.addEventListener("change", toggleButtonVisibility);
  
    // Initial inspection
    toggleButtonVisibility();
  });
  
