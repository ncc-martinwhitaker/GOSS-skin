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
  const subtypeElement = document.querySelector("#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_SUBTYPEVALUE");
  const closeButton = document.querySelector("#CASEMANAGEMENTCASEDETAILSV1EN_DETAILS_CLOSECASEBTN");

  const validValues = [
      "adviceandguidance",
      "databreach",
      "freedomofinformation",
      "informationshare",
      "policerequest",
      "subjectaccessrequest",
      "clienthardshiprequest", // 5354 CHS case management - Prevent case closure
      "hwapplications" // 5503 Highways case management - Hide close case button
  ];

  const additionalSubtypeValues = ["skiplicence", "electricvehiclecharging", "scaffoldsandhoarding"];

  function toggleButtonVisibility() {
      const isHwApplications = selectElement.value === "hwapplications";
      const isSubtypeValid = subtypeElement && additionalSubtypeValues.includes(subtypeElement.value);

      if (validValues.includes(selectElement.value) || isHwApplications && isSubtypeValid) {
          closeButton.style.display = "none"; // hide button
      } else {
          closeButton.style.display = ""; // show button
      }
  }

  // Run a check when the main select value changes
  selectElement.addEventListener("change", toggleButtonVisibility);

  // Run a check when the subtype select value changes (if it exists)
  if (subtypeElement) {
      subtypeElement.addEventListener("change", toggleButtonVisibility);
  }

  // Initial inspection
  toggleButtonVisibility();
});
